import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Login from "./components/Login/SignUp"
import RoomSelection from "./components/Login/RoomSelection"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react"
import * as io from "socket.io-client";
import Canvas from "./pages/Canvas"

const socket = io.connect('http://localhost:5050');

export const App: React.FC = () => {
  const [room, setRoom] = useState('');

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Router>
            <Routes>
              <Route path='/' element={<Home room={room} setRoom={setRoom} socket={socket} />} />
            </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  )
}
