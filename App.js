import React from 'react';
import { Container } from 'native-base';
import Login from './src/Screens/Login'
import Register from './src/Screens/Register';
import Profile from './src/Screens/Profile';

function App() {
  return (
    <Container>
      <Profile />
      {/* <Register /> */}
      {/* <Login /> */}
    </Container>
  )
}

export default App;