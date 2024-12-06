import React, { useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import styled from "styled-components";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

const Home = () => {
  const { isLoggedIn, login, user } = useContext(AuthContext);
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [orderExists, setOrderExists] = useState(false);

  // Function to handle input change when a user types in the input field
  const handleChange = (e) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCancelOrder = async () => {
    try {
      await axios.post("http://localhost:8800/completeorder", {
        username: user?.username,
      });
      setOrderExists(false);
      alert("Order cancelled successfully!");
    } catch (err) {
      console.error("Error cancelling order:", err);
      alert("Failed to cancel order. Please try again.");
    }
  };

  // Function to handle a user logging in
  const handleLogin = async () => {
    try {
      const login_res = await axios.post(
        "http://localhost:8800/login",
        account
      );
      console.log(login_res);
      if (login_res.data.username) {
        // Get the user's type
        const type_res = await axios.get("http://localhost:8800/getusertype", {
          params: { username: account.username },
        });
        // If the user is a customer, get their address_id and cust_payment_id
        if (type_res.data[0].type === "C") {
          const address_and_payment_res = await axios.get(
            "http://localhost:8800/getaddressandpayment",
            {
              params: { username: account.username },
            }
          );
          login({
            username: login_res.data.username,
            type: type_res.data[0].type,
            address_id: address_and_payment_res.data[0].address_id,
            payment_id: address_and_payment_res.data[0].cust_payment_id,
          });
        } else {
          // The user is an employee, get their restaurant_id
          const restaurant_res = await axios.get(
            "http://localhost:8800/getrestaurant",
            {
              params: { username: login_res.data.username },
            }
          );
          // Log the user in as an employee
          login({
            username: login_res.data.username,
            type: type_res.data[0].type,
            restaurant_id: restaurant_res.data[0].emp_restaurant_id,
          });
        }
      } else {
        setErrorMessage("Invalid login, please try again...");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // Check if the user has an order
  const checkOrder = useCallback(async () => {
    try {
      const order_res = await axios.get("http://localhost:8800/checkorder", {
        params: { username: user?.username },
      });
      setOrderExists(order_res.data.length > 0);
    } catch (err) {
      console.error("Error checking order:", err);
    }
  }, [user?.username]);

  useEffect(() => {
    if (isLoggedIn) {
      checkOrder();
    }
  }, [isLoggedIn, checkOrder]);

  return (
    <>
      <Header />
      <HomeContainer>
        {isLoggedIn ? (
          <>
            {user?.type === "E" ? (
              <>
                <PageTitle
                  title={`Employee: ${user?.username} | Restaurant: ${user?.restaurant_id}`}
                />
                <Button>
                  <Link to={"/viewmenu"}>View the menu!</Link>
                </Button>
                <Button>
                  <Link to={"/addmenuitem"}>Add a menu item!</Link>
                </Button>
                <Button>
                  <Link to={"/vieworders"}>View ongoing orders!</Link>
                </Button>
              </>
            ) : (
              <>
                <PageTitle title={`Customer: ${user?.username}`} />
                <Button>
                  <Link to={"/viewmenu"}>View the menu!</Link>
                </Button>
                {orderExists && (
                  <Button onClick={handleCancelOrder}>Cancel my order!</Button>
                )}
                <Button>
                  <Link to={"/updatepayment"}>Update payment method!</Link>
                </Button>
              </>
            )}
          </>
        ) : (
          <LoginContainer>
            <HeaderText>Login</HeaderText>
            <Input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              name="username"
            />
            <Input
              type="text"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
            <Button onClick={handleLogin}>Login</Button>
            <Button>
              <Link to={"/createaccount"}>Create an account</Link>
            </Button>
            <p>{errorMessage}</p>
          </LoginContainer>
        )}
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 16px;
  background-color: #f0f2f5;
  gap: 16px;
`;

const HeaderText = styled.h1`
  color: #007bff;
`;

const LoginContainer = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  marginbottom: 32px;
`;

const Input = styled.input`
  width: 100%;
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
