import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { AuthContext } from "../AuthContext";

const AddMenuItem = () => {
  const [item, setItem] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
  }, [isLoggedIn, navigate]);

  const handleItemChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Function to handle the click event when a user clicks the add button
  const handleAddClick = async () => {
    if (!item.name || !item.price || !item.category || !item.description) {
      alert("Please fill out all item fields!");
      return;
    }
    if (item.name.length > 50) {
      alert("Name must be less than 50 characters!");
      return;
    }
    if (item.price <= 0) {
      alert("Price must be greater than 0!");
      return;
    }
    if (item.price.toString().split(".")[1]?.length > 2) {
      alert("Price must have at most two decimal places!");
      return;
    }
    if (item.category.length > 20) {
      alert("Category must be less than 20 characters!");
      return;
    }
    if (item.description.length > 200) {
      alert("Description must be less than 200 characters!");
      return;
    }

    try {
      await axios.post("http://localhost:8800/addmenuitem", item);
      navigate("/");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <MainContainer>
      <Header />
      <AddContainer>
        <HeaderText>Add Menu Item</HeaderText>
        <Input
          type="text"
          placeholder="Name"
          onChange={handleItemChange}
          name="name"
        />
        <Input
          type="number"
          placeholder="Price"
          onChange={handleItemChange}
          name="price"
        />
        <Input
          type="text"
          placeholder="Category"
          onChange={handleItemChange}
          name="category"
        />
        <Input
          type="text"
          placeholder="Description"
          onChange={handleItemChange}
          name="description"
        />
        <Button onClick={handleAddClick}>Add</Button>
        <ExitAddContainer>
          <Button>
            <Link to={"/"}>Go Back</Link>
          </Button>
        </ExitAddContainer>
      </AddContainer>
    </MainContainer>
  );
};

export default AddMenuItem;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 16px;
  background-color: #f0f2f5;
`;

const HeaderText = styled.h1`
  color: #007bff;
`;

const AddContainer = styled.div`
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

const ExitAddContainer = styled.div`
  position: absolute;
  top: 132px;
  left: 32px;
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
