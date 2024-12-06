import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";

const Header = () => {
  const { logout, isLoggedIn } = useContext(AuthContext);

  // Function to handle a user logging out
  const handleLogout = () => {
    logout();
  };

  return (
    <HeaderContainer>
      <HeaderText>Breddie's Sushi Express</HeaderText>
      {isLoggedIn && <Button onClick={handleLogout}>Log out</Button>}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  background-color: #fff;
`;

const HeaderText = styled.h1`
  margin-left: 32px;
  color: #007bff;
`;

const Button = styled.button`
  padding: 12px 24px;
  margin-right: 32px;
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
