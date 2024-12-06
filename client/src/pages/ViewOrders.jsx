import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewOrders = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [ordersExist, setOrdersExist] = useState(true);
  const [aggregates, setAggregates] = useState({});
  const [showAggregates, setShowAggregates] = useState(false);
  const navigate = useNavigate();

  const fetchOrders = async (order) => {
    try {
      const response = await axios.get("http://localhost:8800/orderdetails", {
        params: { order: order, restaurant_id: user?.restaurant_id },
      });
      setOrders(response.data);
      if (!response.data[0]) {
        setOrdersExist(false);
      } else {
        setOrdersExist(true);
      }
    } catch (err) {
      console.error("Error fetching order details:", err);
    }
  };

  const handleOrderComplete = (username) => async () => {
    try {
      await axios.post("http://localhost:8800/completeorder", {
        username: username,
      });
      navigate(0);
    } catch (err) {
      console.error("Error completing order:", err);
    }
  };

  useEffect(() => {
    // Check if the user is logged in
    if (!isLoggedIn) {
      navigate("/");
      return;
    }

    // Get all aggregates for current restaurant
    const getAggregates = async () => {
      const response = await axios.get("http://localhost:8800/aggregate", {
        params: { restaurant_id: user?.restaurant_id },
      });
      setAggregates(response.data);
    };

    getAggregates();
  }, [isLoggedIn, navigate, user]);

  return (
    <PageContainer>
      <Header />
      <PageTitle
        title={"Ongoing Orders at Restaurant " + user?.restaurant_id}
      />
      {showAggregates && (
        <AggregateContainer>
          <AggregateTitle>
            Restaurant {user?.restaurant_id} Report:
          </AggregateTitle>
          <p>Total Orders: {aggregates["total_orders"]}</p>
          <p>Total Revenue: ${aggregates["revenue"]}</p>
          <ColoredText>Totals of Each Item:</ColoredText>
          {aggregates["orderItems"]?.map((item, index) => (
            <p key={index}>
              {item.item_name}: {item.total_ordered}
            </p>
          ))}
        </AggregateContainer>
      )}
      <h3>Order the orders by...</h3>
      <ButtonsContainer>
        <Button onClick={() => fetchOrders("fname")}>FIRST NAME</Button>
        <Button onClick={() => fetchOrders("newest")}>NEWEST</Button>
        <Button onClick={() => fetchOrders("expensive")}>EXPENSIVE</Button>
        <Button onClick={() => fetchOrders("lname")}>LAST NAME</Button>
        <Button onClick={() => fetchOrders("oldest")}>OLDEST</Button>
        <Button onClick={() => fetchOrders("cheap")}>CHEAP</Button>
      </ButtonsContainer>
      <OrdersContainer>
        {orders.map((order, index) => (
          <OrderItem key={index}>
            <p>
              <strong>Username:</strong> {order.username}
            </p>
            <p>
              <strong>Name:</strong> {order.fname} {order.lname}
            </p>
            <p>
              <strong>Time Placed:</strong> {order.time_placed}
            </p>
            <p>
              <strong>Address:</strong> {order.street_addr}, {order.city}{" "}
              {order.state}, {order.zip}
            </p>
            <p>
              <strong>Total Price:</strong> ${order.total_price}
            </p>
            <strong>Items:</strong>
            {order.items.map((item, index) => (
              <p key={index}>
                {item.quantity} {item.item_name}
              </p>
            ))}
            <Button onClick={handleOrderComplete(order.username)}>
              COMPLETE ORDER
            </Button>
          </OrderItem>
        ))}
      </OrdersContainer>
      {!ordersExist && <p>There are no orders to display.</p>}
      <ExitOrdersContainer>
        <Button>
          <Link to={"/"}>Go Back</Link>
        </Button>
      </ExitOrdersContainer>
      <AggregateButtonContainer>
        <Button onClick={() => setShowAggregates(!showAggregates)}>
          {showAggregates ? "Hide Report" : "Show Report"}
        </Button>
      </AggregateButtonContainer>
    </PageContainer>
  );
};

export default ViewOrders;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  height: 100vh;
  overflow: auto;
  margin-top: 100px;
`;

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AggregateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  position: absolute;
  width: 40%;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #007bff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const AggregateTitle = styled.h2`
  color: #007bff;
`;

const ExitOrdersContainer = styled.div`
  position: absolute;
  top: 132px;
  left: 32px;
`;

const AggregateButtonContainer = styled.div`
  position: absolute;
  top: 132px;
  right: 32px;
`;

const OrderItem = styled.div`
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  border: 1px solid #007bff;
  background-color: #fff;
  width: 300px;
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

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 16px;
`;

const ColoredText = styled.p`
  color: #007bff;
  font-weight: bold;
`;
