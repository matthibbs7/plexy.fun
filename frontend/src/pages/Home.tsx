// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Button, Flex, Input, Stack, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import RoomSelection from '../components/Login/RoomSelection';
import Login from '../components/Login/Login';
import { Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../util/types';
import { useNavigate } from 'react-router-dom'; // Add this
import Canvas from './Canvas';

interface HomeProps {
    room: string,
    setRoom: (value: string) => void,
    socket: Socket<ServerToClientEvents, ClientToServerEvents>
};

const Home:React.FC<HomeProps> = ({ room, setRoom, socket }) => {
    const [roomSelected, setRoomSelected] = useState({selection: '', submitted: false});
    const [username, setUsername] = useState({username: '', submitted: false});
    const navigate = useNavigate();

    // lifting state from RoomSelection component (black magic?)
    useEffect(() => {
        if (!roomSelected.submitted) {
            return
        }

        //join room
        console.log(roomSelected.selection, "submitted")

        if (roomSelected.selection && username.username) {
            socket.emit('join_room', {username: username.username, room: roomSelected.selection})
        }
        //navigate('/canvas', { replace: true });
    }, [roomSelected.submitted])

    useEffect(() => {
        if (!username.submitted) {
            return
        }
        console.log(username.username, "submitted")
    }, [username.submitted])


    return (
        <>
            <Flex justifyContent="right">
                <ColorModeSwitcher /> 
            </Flex>
            <Flex>  
                {!username.submitted && <Login username={username} setUsername={setUsername} /> }
                {username.submitted && !roomSelected.submitted && <RoomSelection roomSelected={roomSelected} setRoomSelected={setRoomSelected} /> }
                {username.submitted && roomSelected.submitted && 
                    <>
                        <Canvas setRoom={setRoomSelected} username={username.username} room={roomSelected.selection} socket={socket} />
                    </>
                }
            </Flex> 
        </>
    )
}
export default Home;