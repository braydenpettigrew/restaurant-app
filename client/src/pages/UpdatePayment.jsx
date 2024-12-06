import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { AuthContext } from "../AuthContext";

const UpdatePayment = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [payment, setPayment] = useState({
    card_number: "",
    expiration: "",
    cvc: "",
    type: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Handler to log user out if they are not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
  }, [isLoggedIn, navigate]);

  // Function to handle input change when a user types in the payment input fields
  const handlePaymentChange = (e) => {
    setPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Function to handle the click event when a user clicks the add button
  const handleUpdateClick = async () => {
    if (
      payment.card_number === "" ||
      payment.expiration === "" ||
      payment.cvc === "" ||
      payment.type === ""
    ) {
      setErrorMessage("Please fill out all payment fields!");
      return;
    }
    if (payment.card_number.length < 16 || payment.card_number.length > 19) {
      setErrorMessage(
        "Please enter a valid card number between 16 and 19 digits!"
      );
      return;
    }
    if (payment.cvc.length > 4) {
      setErrorMessage("CVC must be 4 digits or less!");
      return;
    }
    // Get the user's payment_id based on their username
    const payment_res = await axios.get("http://localhost:8800/getpaymentid", {
      params: { username: user.username },
    });
    const payment_id = payment_res.data[0].cust_payment_id;
    try {
      await axios.put("http://localhost:8800/updatepayment", {
        ...payment,
        payment_id,
      });
      alert("Payment method updated successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <MainContainer>
      <Header />
      <UpdateContainer>
        <HeaderText>Update Payment Method</HeaderText>
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
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <Button onClick={handleUpdateClick}>Update</Button>
        <Button>
          <Link to={"/"}>Cancel and Go Back</Link>
        </Button>
      </UpdateContainer>
    </MainContainer>
  );
};

export default UpdatePayment;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 16px;
  background-color: #f0f2f5;
  margin-top: 50px;
`;

const HeaderText = styled.h1`
  color: #007bff;
`;

const UpdateContainer = styled.div`
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
