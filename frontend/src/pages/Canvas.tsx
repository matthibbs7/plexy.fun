// @ts-nocheck
import { Flex, Text, Box, others } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Pixel from '../components/Pixel/Pixel';
import Room from '../components/Room/Room';
import { cloneDeep } from 'lodash'

const Canvas = ({ username, room, socket, setRoom }) => {

    const [grid, setGrid] = useState([['0-0', "#ffffff"], ['0-1', "#fff444"], ['0-2', "#ffffff"], ['0-3', "#ffffff"], ['0-4', "#ffffff"], ['0-5', "#ffffff"], ['0-6', "#ffffff"], ['0-7', "#ffffff"], ['0-8', "#ffffff"], ['0-9', "#ffffff"], ['0-10', "#ffffff"], ['0-11', "#ffffff"], ['0-12', "#ffffff"], ['0-13', "#ffffff"], ['0-14', "#ffffff"], ['0-15', "#ffffff"], ['0-16', "#ffffff"], ['0-17', "#ffffff"], ['0-18', "#ffffff"], ['0-19', "#ffffff"],
                               ['1-0', "#ffffff"], ['1-1', "#fff444"], ['1-2', "#ffffff"], ['1-3', "#ffffff"], ['1-4', "#ffffff"], ['1-5', "#ffffff"], ['1-6', "#ffffff"], ['1-7', "#ffffff"], ['1-8', "#ffffff"], ['1-9', "#ffffff"], ['1-10', "#ffffff"], ['1-11', "#ffffff"], ['1-12', "#ffffff"], ['1-13', "#ffffff"], ['1-14', "#ffffff"], ['1-15', "#ffffff"], ['1-16', "#ffffff"], ['1-17', "#ffffff"], ['1-18', "#ffffff"], ['1-19', "#ffffff"],
                               ['2-0', "#ffffff"], ['2-1', "#fff444"], ['2-2', "#ffffff"], ['2-3', "#ffffff"], ['2-4', "#ffffff"], ['2-5', "#ffffff"], ['2-6', "#ffffff"], ['2-7', "#ffffff"], ['2-8', "#ffffff"], ['2-9', "#ffffff"], ['2-10', "#ffffff"], ['2-11', "#ffffff"], ['2-12', "#ffffff"], ['2-13', "#ffffff"], ['2-14', "#ffffff"], ['2-15', "#ffffff"], ['2-16', "#ffffff"], ['2-17', "#ffffff"], ['2-18', "#ffffff"], ['2-19', "#ffffff"]
                            ])

    //const [grid, setGrid] = useState([])
                              
    const [colorSelected, setColorSelected] = useState('white');
    const [timeSinceLast, setTimeSinceLast] = useState(0);

    const handleOptionChange = (pixel, color) => {
        person[option] = !person[option];
        setPersons([...persons]);
    };

    useEffect(() => {
        socket.on('receive_pixel', (data) => {
            setGrid(data.new_grid)
        })

        socket.on('new_join', (data) => {
            if (data.length > 1) {
                console.log('server grid',data)
                setGrid(data)
            }
        })

        return () => socket.off('receive_pixel')
    }, [socket])

    return (
        <Flex direction="column" width="100%" justifyContent="normal">
            <Text mr="auto">Canvas</Text>
            <Flex ml="auto" mr="auto" justifyContent="center" direction="column">
                <Flex border="1px solid red" height="62px" width="402px" flexWrap="wrap" margin={0}>
                    {grid.map((pixel) => (
                        <Pixel grid={grid} room={room} index={pixel[0]} socket={socket} colorSelected={colorSelected} key={pixel[0]} defaultBg={pixel[1]}></Pixel>
                    ))}
                </Flex>
                <Text>Color selection:</Text>
                <Flex p={3} width="100%" bg="gray.300" height="60px" borderRadius={5}>
                    <Box onClick={() => setColorSelected('red')} height="20px" width="20px" bg="red"></Box>
                    <Box onClick={() => setColorSelected('blue')} ml={2} height="20px" width="20px" bg="blue"></Box>
                    <Box onClick={() => setColorSelected('green')} ml={2}  height="20px" width="20px" bg="green"></Box>
                    <Box onClick={() => setColorSelected('blue.300')} ml={2}  height="20px" width="20px" bg="blue.300"></Box>
                </Flex>
            </Flex>
            <Room setRoom={setRoom} username={username} room={room} socket={socket} />
        </Flex>
    );
};

export default Canvas;