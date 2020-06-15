import React from 'react';
import { Container } from 'native-base';
import Login from './src/Screens/Login'
import Register from './src/Screens/Register';


function App() {
  return (
    <Container>
      <Register />
      {/* <Login /> */}
    </Container>
  )
}

export default App;