import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

const ViewMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orderItems, setOrderItems] = useState({});
  const [orderPrice, setOrderPrice] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const { user, isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  // handler to load restaurants when page loads
  useEffect(() => {
    const getRestaurants = async () => {
      // Get ids of all of the available restaurants
      const restaurants_res = await axios.get(
        "http://localhost:8800/getrestaurants"
      );

      const restaurant_ids = restaurants_res.data.map(
        (restaurant) => restaurant.restaurant_id
      );

      setRestaurants(restaurant_ids);
    };

    getRestaurants();
  }, []);

  useEffect(() => {
    // Check if the user is logged in
    if (!isLoggedIn) {
      navigate("/");
      return;
    }

    const getMenuItems = async () => {
      try {
        const menu_res = await axios.get("http://localhost:8800/getmenu");
        setMenuItems(menu_res.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    getMenuItems();
  }, [isLoggedIn, navigate]);

  // Handler for calculating total price of an order
  useEffect(() => {
    const totalPrice = () => {
      let total = 0;
      Object.entries(orderItems).forEach(([name, [quantity, price]]) => {
        total += price;
      });
      total = parseFloat(total.toFixed(2));
      return total;
    };
    setOrderPrice(totalPrice());
  }, [orderItems]);

  // Function to handle an employee editing an item
  const handleEditItem = (item) => () => {
    navigate("/editmenuitem", { state: { item } });
  };

  // Function to handle an employee deleting an item
  const handleDeleteItem = (item) => async () => {
    try {
      // Check if the item is currently in ongoing orders
      const order_res = await axios.get(
        "http://localhost:8800/checkorderitem",
        {
          params: { item_name: item.name },
        }
      );
      if (order_res.data[0]) {
        alert(
          "This item is currently in an ongoing order at one of our restaurants, you cannot delete it!"
        );
        return;
      }
      await axios.delete("http://localhost:8800/deletemenuitem", {
        params: { name: item.name },
      });
      // Refresh the page
      navigate(0);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // Function to handle a customer placing an order
  const handlePlaceOrder = async () => {
    // Check if a restaurant is selected from the drop down
    if (!restaurant) {
      alert("Please select a restaurant to place your order first!");
      return;
    }
    let finalOrder = {};
    Object.entries(orderItems).forEach(([name, [quantity, price]]) => {
      if (quantity > 0) {
        finalOrder[name] = quantity;
      }
    });
    try {
      // Check if the customer already has an order
      const order_res = await axios.get("http://localhost:8800/checkorder", {
        params: { username: user.username },
      });
      if (order_res.data[0]) {
        alert(
          "You can only place one order at a time! Once your order is complete by an employee, or you cancel it, you can place another order."
        );
        return;
      }
      await axios.post("http://localhost:8800/placeorder", {
        username: user.username,
        address_id: user.address_id,
        payment_id: user.payment_id,
        restaurant_id: parseInt(restaurant),
        items: finalOrder,
      });
      alert("Order placed successfully, we will deliver ASAP!");
      navigate("/");
    } catch (err) {
      console.error("Error placing order:", err);
      // If the error is "Invalid or expired payment", alert the user
      if (err.response.data.error === "Invalid or expired payment") {
        alert(
          "Your payment method is invalid or expired, please update your payment method!"
        );
      }
    }
  };

  return (
    <>
      <Header />
      <PageContainer>
        <PageTitle title={"Breddie's Menu"} />
        <MenuContainer>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              <ItemName>{item.name}</ItemName>
              <ItemCategory>Category: {item.category}</ItemCategory>
              <ItemPrice>Price: ${item.price}</ItemPrice>
              <ItemDescription>Description: {item.description}</ItemDescription>
              {user?.type === "C" && (
                <>
                  <ButtonsContainer>
                    <Button
                      onClick={() =>
                        setOrderItems((prev) => ({
                          ...prev,
                          [item.name]: [
                            (prev[item.name]?.[0] || 0) + 1,
                            (prev[item.name]?.[1] || 0) + Number(item.price),
                          ],
                        }))
                      }
                    >
                      Add
                    </Button>
                    {/* Only show remove button if the item quantity is greater than 0 */}
                    {orderItems[item.name]?.[0] > 0 && (
                      <Button
                        style={{ backgroundColor: "#dc3545" }}
                        onClick={() =>
                          setOrderItems((prev) => ({
                            ...prev,
                            [item.name]: [
                              (prev[item.name]?.[0] || 0) - 1,
                              (prev[item.name]?.[1] || 0) - Number(item.price),
                            ],
                          }))
                        }
                      >
                        Remove
                      </Button>
                    )}
                  </ButtonsContainer>
                  <p>Quantity: {orderItems[item.name]?.[0] || 0}</p>
                </>
              )}
              {user?.type === "E" && (
                <ButtonsContainer>
                  <Button onClick={handleEditItem(item)}>Edit</Button>
                  <Button
                    style={{ backgroundColor: "#dc3545" }}
                    onClick={handleDeleteItem(item)}
                  >
                    Delete
                  </Button>
                </ButtonsContainer>
              )}
            </MenuItem>
          ))}
        </MenuContainer>
        {orderPrice !== 0 && user?.type === "C" ? (
          <>
            <label htmlFor="restaurant">Restaurant</label>
            <Select
              id="restaurant"
              onChange={(input) => {
                setRestaurant(input.target.value);
              }}
            >
              <option value="">Select Restaurant</option>
              {restaurants.map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </Select>

            <OrderContainer>
              {Object.entries(orderItems).map(
                ([name, [quantity, totalPrice]]) =>
                  quantity > 0 && (
                    <OrderItem key={name}>
                      <OrderItemName>{name}</OrderItemName>
                      <p>Quantity: {quantity}</p>
                      <ItemPrice>Price: ${totalPrice.toFixed(2)}</ItemPrice>
                    </OrderItem>
                  )
              )}

              <ItemPrice>Total Price: ${orderPrice.toFixed(2)}</ItemPrice>
              <Button onClick={handlePlaceOrder}>Place Order</Button>
            </OrderContainer>
          </>
        ) : user?.type === "C" ? (
          <OrderContainer>
            Add items to your order to see them appear here!
          </OrderContainer>
        ) : (
          <></>
        )}
        <ExitMenuContainer>
          <Button>
            <Link to={"/"}>Exit Menu</Link>
          </Button>
        </ExitMenuContainer>
      </PageContainer>
    </>
  );
};

export default ViewMenu;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  margin-top: 100px;
`;

const MenuContainer = styled.div`
  display: grid;
  background-color: #f0f2f5;
  grid-template-columns: repeat(3, 1fr);
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  margin: 16px;
  border: 1px solid #007bff;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 16px;
`;

const ExitMenuContainer = styled.div`
  position: absolute;
  top: 132px;
  left: 32px;
`;

const OrderItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #007bff;
  padding: 16px;
  margin: 16px;
  background-color: #fff;
  width: 300px;
  border-radius: 8px;
`;

const ItemName = styled.h2`
  color: #007bff;
`;

const ItemPrice = styled.p`
  color: #007bff;
`;

const ItemDescription = styled.p`
  color: #007bff;
  text-align: center;
`;

const ItemCategory = styled.p`
  color: #007bff;
`;

const OrderItemName = styled.p`
  color: #007bff;
`;

const Select = styled.select`
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
