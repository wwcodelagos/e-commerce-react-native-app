import React from "react";
import { Container } from "native-base";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register";
import Products from "./src/Screens/Products";

function App() {
  return (
    <Container>
      {/*<Register />*/}
      {/* <Login /> */}
      <Products />
    </Container>
  );
}

export default App;
