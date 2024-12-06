import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import styled from "styled-components";
import Header from "../components/Header";

const CreateAccount = () => {
  const { login } = useContext(AuthContext);
  const [account, setAccount] = useState({
    username: "",
    password: "",
    type: "",
  });
  const [name, setName] = useState({
    fname: "",
    lname: "",
  });
  const [address, setAddress] = useState({
    street_addr: "",
    city: "",
    state: "",
    zip: "",
  });
  const [payment, setPayment] = useState({
    card_number: "",
    expiration: "",
    cvc: "",
    type: "",
  });
  const [restaurants, setRestaurants] = useState([]);
  const [empRestaurant, setEmpRestaurant] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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

  // Function to handle input change when a user types in the user input fields
  const handleUserChange = (e) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // Function to handle input change when a user types in the name input fields
  const handleNameChange = (e) => {
    setName((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Function to handle input change when a user types in the address input fields
  const handleAddressChange = (e) => {
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Function to handle input change when a user types in the payment input fields
  const handlePaymentChange = (e) => {
    setPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Function to handle the click event when a user clicks the create button
  const handleCreateClick = async (e) => {
    e.preventDefault();
    if (!account.type) {
      setErrorMessage("Please select an account type!");
      return;
    }
    // Make sure the user has filled out all fields before submitting
    if (
      account.type === "C" &&
      (!name.fname ||
        !name.lname ||
        !account.username ||
        !account.password ||
        address.street_addr === "" ||
        address.city === "" ||
        address.state === "" ||
        address.zip === "" ||
        payment.card_number === "" ||
        payment.expiration === "" ||
        payment.cvc === "" ||
        payment.type === "")
    ) {
      setErrorMessage("Please fill out all customer fields!");
      return;
    } else if (
      account.type === "E" &&
      (!name.fname ||
        !name.lname ||
        !account.username ||
        !account.password ||
        !empRestaurant)
    ) {
      setErrorMessage("Please fill out all employee fields!");
      return;
    }
    if (name.fname.length > 12) {
      setErrorMessage("First name must be 12 characters or less!");
      return;
    }
    if (name.lname.length > 12) {
      setErrorMessage("Last name must be 12 characters or less!");
      return;
    }
    if (account.username.length > 12) {
      setErrorMessage("Username must be 12 characters or less!");
      return;
    }
    if (account.password.length > 64) {
      setErrorMessage("Password must be 64 characters or less!");
      return;
    }
    if (account.type === "C" && address.street_addr.length > 40) {
      setErrorMessage("Street address must be 40 characters or less!");
      return;
    }
    if (account.type === "C" && address.city.length > 20) {
      setErrorMessage("City must be 20 characters or less!");
      return;
    }
    if (account.type === "C" && address.state.length !== 2) {
      setErrorMessage(
        "Please enter the state in the form of two letters (e.g. 'PA')!"
      );
      return;
    }
    if (account.type === "C" && address.zip.length !== 5) {
      setErrorMessage("Please enter a valid 5-digit ZIP code!");
      return;
    }
    if (
      account.type === "C" &&
      (payment.card_number.length < 16 || payment.card_number.length > 19)
    ) {
      setErrorMessage(
        "Please enter a valid card number between 16 and 19 digits!"
      );
      return;
    }
    if (account.type === "C" && payment.cvc.length > 4) {
      setErrorMessage("CVC must be 4 digits or less!");
      return;
    }
    try {
      // Create an account
      await axios.post("http://localhost:8800/account", account);

      // If the account is a customer, add the address, payment, and customer
      // If the account is an employee, add the employee
      if (account.type === "C") {
        const addr_response = await axios.post(
          "http://localhost:8800/addaddress",
          address
        );
        const address_id = addr_response.data.addressId;
        const payment_response = await axios.post(
          "http://localhost:8800/addpayment",
          payment
        );
        const cust_payment_id = payment_response.data.paymentId;

        const customer = {
          cust_username: account.username,
          fname: name.fname,
          lname: name.lname,
          address_id,
          cust_payment_id,
        };

        await axios.post("http://localhost:8800/createcustomer", customer);

        const address_and_payment_res = await axios.get(
          "http://localhost:8800/getaddressandpayment",
          {
            params: { username: account.username },
          }
        );
        // Login the customer
        login({
          username: account.username,
          type: account.type,
          address_id: address_and_payment_res.data[0].address_id,
          payment_id: address_and_payment_res.data[0].cust_payment_id,
        });
      } else if (account.type === "E") {
        const employee = {
          emp_username: account.username,
          fname: name.fname,
          lname: name.lname,
          emp_restaurant_id: empRestaurant,
        };
        await axios.post("http://localhost:8800/createemployee", employee);
        // Login the employee
        login({
          username: account.username,
          type: account.type,
          restaurant_id: empRestaurant,
        });
      }

      // Redirect to the home page after creating an account
      navigate("/");
    } catch (err) {
      console.error("Error:", err);
      if (
        err.response &&
        err.response.data &&
        err.response.data.error === "ER_DUP_ENTRY"
      ) {
        setErrorMessage(
          "Username already exists, please choose a different username!"
        );
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  // Function to naviate to the login page when a user clicks the login button
  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <MainContainer>
      <Header />
      <CreateContainer>
        <HeaderTextContainer>
          <HeaderText>Create an Account</HeaderText>
        </HeaderTextContainer>
        <label htmlFor="type">Account Type</label>
        <Select
          id="type"
          name="type"
          value={account.type}
          onChange={handleUserChange}
        >
          <option value="">Select Account Type</option>
          <option value="E">Employee</option>
          <option value="C">Customer</option>
        </Select>
        <label htmlFor="fname">First Name</label>
        <Input
          type="text"
          placeholder="First Name"
          onChange={handleNameChange}
          name="fname"
          id="fname"
        />
        <label htmlFor="lname">Last Name</label>
        <Input
          type="text"
          placeholder="Last Name"
          onChange={handleNameChange}
          name="lname"
          id="lname"
        />
        <label htmlFor="username">Username</label>
        <Input
          type="text"
          placeholder="Username"
          onChange={handleUserChange}
          name="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          placeholder="Password"
          onChange={handleUserChange}
          name="password"
          id="password"
        />
        {account.type === "E" && (
          <>
            <label htmlFor="restaurant">Restaurant</label>
            <Select
              id="restaurant"
              onChange={(input) => {
                setEmpRestaurant(input.target.value);
              }}
            >
              <option value="">Select Restaurant</option>
              {restaurants.map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </Select>
          </>
        )}
        {account.type === "C" && (
          <>
            <HeaderTextContainer>
              <HeaderText>Add your Address</HeaderText>
            </HeaderTextContainer>
            <label htmlFor="street_addr">Street Address</label>
            <Input
              type="text"
              placeholder="Street address"
              onChange={handleAddressChange}
              name="street_addr"
            />
            <label htmlFor="city">City</label>
            <Input
              type="text"
              placeholder="City"
              onChange={handleAddressChange}
              name="city"
            />
            <label htmlFor="state">State</label>
            <Input
              type="text"
              placeholder="State"
              onChange={handleAddressChange}
              name="state"
            />
            <label htmlFor="zip">ZIP</label>
            <Input
              type="text"
              placeholder="ZIP"
              onChange={handleAddressChange}
              name="zip"
            />
            <HeaderTextContainer>
              <HeaderText>Add your Payment Method</HeaderText>
            </HeaderTextContainer>
            <label htmlFor="card_number">Card Number</label>
            <Input
              type="text"
              placeholder="Card number"
              onChange={handlePaymentChange}
              name="card_number"
            />
            <label htmlFor="expDate">Expiration Date</label>
            <Input
              id="expDate"
              type="date"
              placeholder="Expiration date"
              onChange={handlePaymentChange}
              name="expiration"
            />
            <label htmlFor="cvc">CVC</label>
            <Input
              id="cvc"
              type="text"
              placeholder="CVC"
              onChange={handlePaymentChange}
              name="cvc"
            />
            <label htmlFor="type">Payment Type</label>
            <Select onChange={handlePaymentChange} name="type">
              <option value="">Select Payment Type</option>
              <option value="C">Credit</option>
              <option value="D">Debit</option>
            </Select>
          </>
        )}
        <Button onClick={handleCreateClick}>Create</Button>
        <Button onClick={handleLoginClick}>Login</Button>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </CreateContainer>
    </MainContainer>
  );
};

export default CreateAccount;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 16px;
  background-color: #f0f2f5;
  overflow: auto;
  margin-top: 100px;
`;

const HeaderTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.h1`
  color: #007bff;
`;

const CreateContainer = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  // align-items: center;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  margin: 32px;
  overflow: auto;
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

const Select = styled.select`
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

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;
