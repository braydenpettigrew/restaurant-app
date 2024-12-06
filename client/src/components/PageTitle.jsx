import styled from "styled-components";

const PageTitle = ({ title }) => {
  return <HeaderText>{title}</HeaderText>;
};

export default PageTitle;

const HeaderText = styled.h1`
  color: #007bff;
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
`;
