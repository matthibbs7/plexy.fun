// @ts-nocheck
import { Flex, Text, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Room = ({ username, room, socket, setRoom }) => {

    const [roomUsers, setRoomUsers] = useState([]);
    const navigate = useNavigate();

    // when user joins sends list of all users to clients
    useEffect(() => {
        socket.on('chatroom_users', (data) => {
          console.log(data);
          setRoomUsers(data);
        });
    
        return () => socket.off('chatroom_users');
    }, [socket]);

    const leaveRoom = () => {
        const createdAt = Date.now();
        socket.emit('leave_room', { username, room, createdAt });
        setRoom({selection: '', submitted: false});
        // Redirect to home page
        //navigate('/', { replace: true });
    }



    return (
        <Flex flexDirection="column" mr="auto">
            <Text fontWeight={800}>Room {room}</Text>
            <Text>Users:</Text>
            {roomUsers.map((user) => (
                <Text style={{fontWeight: user.username === username ? 800 : 300}} key={user.id}>{user.username}</Text>
            ))}
            <Button onClick={leaveRoom}>Leave Room!</Button>
        </Flex>
    )
}
export default Room;