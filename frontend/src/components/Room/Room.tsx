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
        <Flex ml="auto" flexDirection="column" mr="auto">
            <Flex minHeight="240px" maxHeight="240px" overflow="scroll" flexDirection="column"  bg="blackAlpha.300" w="200px" py={3} px={5} borderRadius={7} border="1.5px solid grey">
                <Text fontWeight={800}>Room {room}</Text>
                <Text fontSize="14pt" fontWeight={700}>Active Users</Text>
                <Flex ml="auto" mr="auto" borderBottom="1px solid black" width="70%"></Flex>
                {roomUsers.map((user) => (
                    <Text fontSize="11pt" style={{fontWeight: user.username === username ? 800 : 300}} key={user.id}>{user.username}</Text>
                ))}
                
            </Flex>
            <Button _active={{bg: 'red.400'}} _hover={{bg: 'red.400'}} color="white" bg="red.300" border="1.5px solid lightgrey" mt={5} onClick={leaveRoom}>Leave Room</Button>
        </Flex>
    )
}
export default Room;