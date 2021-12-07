//import logo from './logo.svg';
import './App.css';
import UserListScreen from "./userListScreen";
import PassportListScreen from "./passportListScreen";
import ShippingAddressListScreen from "./shippingAddressListScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <div style={{padding: 10}}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<UserListScreen/>}/>
                  <Route path="/users/passportNumber" element={<PassportListScreen/>}/>
                  <Route path="/shippingAddresses/:passportNumber" element={<ShippingAddressListScreen/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

