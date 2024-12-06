import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import CreateAccount from "./pages/CreateAccount";
import AddMenuItem from "./pages/AddMenuItem";
import ViewMenu from "./pages/ViewMenu";
import EditMenuItem from "./pages/EditMenuItem";
import ViewOrders from "./pages/ViewOrders";
import UpdatePayment from "./pages/UpdatePayment";
import { AuthProvider } from "./AuthContext";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/addmenuitem" element={<AddMenuItem />} />
            <Route path="/viewmenu" element={<ViewMenu />} />
            <Route path="/editmenuitem" element={<EditMenuItem />} />
            <Route path="/vieworders" element={<ViewOrders />} />
            <Route path="/updatepayment" element={<UpdatePayment />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f1f1f1;
`;
