// @ts-nocheck
import { Flex, Text, Box, useColorMode } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Pixel from '../components/Pixel/Pixel';
import Room from '../components/Room/Room';
import { cloneDeep } from 'lodash'
import ColorSelector from '../components/ColorSelector/ColorSelector';

const Canvas = ({ username, room, socket, setRoom }) => {
    const [mouseHeld, setMouseHeld] = useState(false);
    const [grid, setGrid] = useState([['0-0', "#ffffff"], ['0-1', "#fff444"], ['0-2', "#ffffff"], ['0-3', "#ffffff"], ['0-4', "#ffffff"], ['0-5', "#ffffff"], ['0-6', "#ffffff"], ['0-7', "#ffffff"], ['0-8', "#ffffff"], ['0-9', "#ffffff"], ['0-10', "#ffffff"], ['0-11', "#ffffff"], ['0-12', "#ffffff"], ['0-13', "#ffffff"], ['0-14', "#ffffff"], ['0-15', "#ffffff"], ['0-16', "#ffffff"], ['0-17', "#ffffff"], ['0-18', "#ffffff"], ['0-19', "#ffffff"],
                               ['1-0', "#ffffff"], ['1-1', "#fff444"], ['1-2', "#ffffff"], ['1-3', "#ffffff"], ['1-4', "#ffffff"], ['1-5', "#ffffff"], ['1-6', "#ffffff"], ['1-7', "#ffffff"], ['1-8', "#ffffff"], ['1-9', "#ffffff"], ['1-10', "#ffffff"], ['1-11', "#ffffff"], ['1-12', "#ffffff"], ['1-13', "#ffffff"], ['1-14', "#ffffff"], ['1-15', "#ffffff"], ['1-16', "#ffffff"], ['1-17', "#ffffff"], ['1-18', "#ffffff"], ['1-19', "#ffffff"],
                               ['2-0', "#ffffff"], ['2-1', "#fff444"], ['2-2', "#ffffff"], ['2-3', "#ffffff"], ['2-4', "#ffffff"], ['2-5', "#ffffff"], ['2-6', "#ffffff"], ['2-7', "#ffffff"], ['2-8', "#ffffff"], ['2-9', "#ffffff"], ['2-10', "#ffffff"], ['2-11', "#ffffff"], ['2-12', "#ffffff"], ['2-13', "#ffffff"], ['2-14', "#ffffff"], ['2-15', "#ffffff"], ['2-16', "#ffffff"], ['2-17', "#ffffff"], ['2-18', "#ffffff"], ['2-19', "#ffffff"],
                               ['3-0', "#ffffff"], ['3-1', "#fff444"], ['3-2', "#ffffff"], ['3-3', "#ffffff"], ['3-4', "#ffffff"], ['3-5', "#ffffff"], ['3-6', "#ffffff"], ['3-7', "#ffffff"], ['3-8', "#ffffff"], ['3-9', "#ffffff"], ['3-10', "#ffffff"], ['3-11', "#ffffff"], ['3-12', "#ffffff"], ['3-13', "#ffffff"], ['3-14', "#ffffff"], ['3-15', "#ffffff"], ['3-16', "#ffffff"], ['3-17', "#ffffff"], ['3-18', "#ffffff"], ['3-19', "#ffffff"],
                               ['4-0', "#ffffff"], ['4-1', "#fff444"], ['4-2', "#ffffff"], ['4-3', "#ffffff"], ['4-4', "#ffffff"], ['4-5', "#ffffff"], ['4-6', "#ffffff"], ['4-7', "#ffffff"], ['4-8', "#ffffff"], ['4-9', "#ffffff"], ['4-10', "#ffffff"], ['4-11', "#ffffff"], ['4-12', "#ffffff"], ['4-13', "#ffffff"], ['4-14', "#ffffff"], ['4-15', "#ffffff"], ['4-16', "#ffffff"], ['4-17', "#ffffff"], ['4-18', "#ffffff"], ['4-19', "#ffffff"],
                               ['5-0', "#ffffff"], ['5-1', "#fff444"], ['5-2', "#ffffff"], ['5-3', "#ffffff"], ['5-4', "#ffffff"], ['5-5', "#ffffff"], ['5-6', "#ffffff"], ['5-7', "#ffffff"], ['5-8', "#ffffff"], ['5-9', "#ffffff"], ['5-10', "#ffffff"], ['5-11', "#ffffff"], ['5-12', "#ffffff"], ['5-13', "#ffffff"], ['5-14', "#ffffff"], ['5-15', "#ffffff"], ['5-16', "#ffffff"], ['5-17', "#ffffff"], ['5-18', "#ffffff"], ['5-19', "#ffffff"],
                               ['6-0', "#ffffff"], ['6-1', "#fff444"], ['6-2', "#ffffff"], ['6-3', "#ffffff"], ['6-4', "#ffffff"], ['6-5', "#ffffff"], ['6-6', "#ffffff"], ['6-7', "#ffffff"], ['6-8', "#ffffff"], ['6-9', "#ffffff"], ['6-10', "#ffffff"], ['6-11', "#ffffff"], ['6-12', "#ffffff"], ['6-13', "#ffffff"], ['6-14', "#ffffff"], ['6-15', "#ffffff"], ['6-16', "#ffffff"], ['6-17', "#ffffff"], ['6-18', "#ffffff"], ['6-19', "#ffffff"],
                               ['7-0', "#ffffff"], ['7-1', "#fff444"], ['7-2', "#ffffff"], ['7-3', "#ffffff"], ['7-4', "#ffffff"], ['7-5', "#ffffff"], ['7-6', "#ffffff"], ['7-7', "#ffffff"], ['7-8', "#ffffff"], ['7-9', "#ffffff"], ['7-10', "#ffffff"], ['7-11', "#ffffff"], ['7-12', "#ffffff"], ['7-13', "#ffffff"], ['7-14', "#ffffff"], ['7-15', "#ffffff"], ['7-16', "#ffffff"], ['7-17', "#ffffff"], ['7-18', "#ffffff"], ['7-19', "#ffffff"],
                               ['8-0', "#ffffff"], ['8-1', "#fff444"], ['8-2', "#ffffff"], ['8-3', "#ffffff"], ['8-4', "#ffffff"], ['8-5', "#ffffff"], ['8-6', "#ffffff"], ['8-7', "#ffffff"], ['8-8', "#ffffff"], ['8-9', "#ffffff"], ['8-10', "#ffffff"], ['8-11', "#ffffff"], ['8-12', "#ffffff"], ['8-13', "#ffffff"], ['8-14', "#ffffff"], ['8-15', "#ffffff"], ['8-16', "#ffffff"], ['8-17', "#ffffff"], ['8-18', "#ffffff"], ['8-19', "#ffffff"],
                               ['9-0', "#ffffff"], ['9-1', "#fff444"], ['9-2', "#ffffff"], ['9-3', "#ffffff"], ['9-4', "#ffffff"], ['9-5', "#ffffff"], ['9-6', "#ffffff"], ['9-7', "#ffffff"], ['9-8', "#ffffff"], ['9-9', "#ffffff"], ['9-10', "#ffffff"], ['9-11', "#ffffff"], ['9-12', "#ffffff"], ['9-13', "#ffffff"], ['9-14', "#ffffff"], ['9-15', "#ffffff"], ['9-16', "#ffffff"], ['9-17', "#ffffff"], ['9-18', "#ffffff"], ['9-19', "#ffffff"],
                               ['10-0', "#ffffff"], ['10-1', "#fff444"], ['10-2', "#ffffff"], ['10-3', "#ffffff"], ['10-4', "#ffffff"], ['10-5', "#ffffff"], ['10-6', "#ffffff"], ['10-7', "#ffffff"], ['10-8', "#ffffff"], ['10-9', "#ffffff"], ['10-10', "#ffffff"], ['10-11', "#ffffff"], ['10-12', "#ffffff"], ['10-13', "#ffffff"], ['10-14', "#ffffff"], ['10-15', "#ffffff"], ['10-16', "#ffffff"], ['10-17', "#ffffff"], ['10-18', "#ffffff"], ['10-19', "#ffffff"],
                               ['11-0', "#ffffff"], ['11-1', "#fff444"], ['11-2', "#ffffff"], ['11-3', "#ffffff"], ['11-4', "#ffffff"], ['11-5', "#ffffff"], ['11-6', "#ffffff"], ['11-7', "#ffffff"], ['11-8', "#ffffff"], ['11-9', "#ffffff"], ['11-10', "#ffffff"], ['11-11', "#ffffff"], ['11-12', "#ffffff"], ['11-13', "#ffffff"], ['11-14', "#ffffff"], ['11-15', "#ffffff"], ['11-16', "#ffffff"], ['11-17', "#ffffff"], ['11-18', "#ffffff"], ['11-19', "#ffffff"],
                               ['12-0', "#ffffff"], ['12-1', "#fff444"], ['12-2', "#ffffff"], ['12-3', "#ffffff"], ['12-4', "#ffffff"], ['12-5', "#ffffff"], ['12-6', "#ffffff"], ['12-7', "#ffffff"], ['12-8', "#ffffff"], ['12-9', "#ffffff"], ['12-10', "#ffffff"], ['12-11', "#ffffff"], ['12-12', "#ffffff"], ['12-13', "#ffffff"], ['12-14', "#ffffff"], ['12-15', "#ffffff"], ['12-16', "#ffffff"], ['12-17', "#ffffff"], ['12-18', "#ffffff"], ['12-19', "#ffffff"],
                               ['13-0', "#ffffff"], ['13-1', "#fff444"], ['13-2', "#ffffff"], ['13-3', "#ffffff"], ['13-4', "#ffffff"], ['13-5', "#ffffff"], ['13-6', "#ffffff"], ['13-7', "#ffffff"], ['13-8', "#ffffff"], ['13-9', "#ffffff"], ['13-10', "#ffffff"], ['13-11', "#ffffff"], ['13-12', "#ffffff"], ['13-13', "#ffffff"], ['13-14', "#ffffff"], ['13-15', "#ffffff"], ['13-16', "#ffffff"], ['13-17', "#ffffff"], ['13-18', "#ffffff"], ['13-19', "#ffffff"],
                               ['14-0', "#ffffff"], ['14-1', "#fff444"], ['14-2', "#ffffff"], ['14-3', "#ffffff"], ['14-4', "#ffffff"], ['14-5', "#ffffff"], ['14-6', "#ffffff"], ['14-7', "#ffffff"], ['14-8', "#ffffff"], ['14-9', "#ffffff"], ['14-10', "#ffffff"], ['14-11', "#ffffff"], ['14-12', "#ffffff"], ['14-13', "#ffffff"], ['14-14', "#ffffff"], ['14-15', "#ffffff"], ['14-16', "#ffffff"], ['14-17', "#ffffff"], ['14-18', "#ffffff"], ['14-19', "#ffffff"],
                               ['15-0', "#ffffff"], ['15-1', "#fff444"], ['15-2', "#ffffff"], ['15-3', "#ffffff"], ['15-4', "#ffffff"], ['15-5', "#ffffff"], ['15-6', "#ffffff"], ['15-7', "#ffffff"], ['15-8', "#ffffff"], ['15-9', "#ffffff"], ['15-10', "#ffffff"], ['15-11', "#ffffff"], ['15-12', "#ffffff"], ['15-13', "#ffffff"], ['15-14', "#ffffff"], ['15-15', "#ffffff"], ['15-16', "#ffffff"], ['15-17', "#ffffff"], ['15-18', "#ffffff"], ['15-19', "#ffffff"],
                               ['16-0', "#ffffff"], ['16-1', "#fff444"], ['16-2', "#ffffff"], ['16-3', "#ffffff"], ['16-4', "#ffffff"], ['16-5', "#ffffff"], ['16-6', "#ffffff"], ['16-7', "#ffffff"], ['16-8', "#ffffff"], ['16-9', "#ffffff"], ['16-10', "#ffffff"], ['16-11', "#ffffff"], ['16-12', "#ffffff"], ['16-13', "#ffffff"], ['16-14', "#ffffff"], ['16-15', "#ffffff"], ['16-16', "#ffffff"], ['16-17', "#ffffff"], ['16-18', "#ffffff"], ['16-19', "#ffffff"],
                            ])

    //const [grid, setGrid] = useState([])
    const { colorMode, toggleColorMode } = useColorMode()                         
    const [colorSelected, setColorSelected] = useState('white');

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
            <Flex justifyContent="center" mt={-5}>
                <Text style={{textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} color="yellow.300" fontFamily="Potta One" fontSize="7xl" as="span">P</Text>
                <Text style={{textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} color="blue.300" fontFamily="Potta One" fontSize="7xl" as="span">l</Text>
                <Text style={{textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} color="pink.300" fontFamily="Potta One" fontSize="7xl" as="span">e</Text>
                <Text style={{textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} color="green.300" fontFamily="Potta One" fontSize="7xl" as="span">x</Text>
                <Text style={{textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} color="red.300" fontFamily="Potta One" fontSize="7xl" as="span">y</Text>
                <Text mt="auto" mb={5} fontFamily="Potta One" fontSize="x-large" as="span">.fun</Text>
            </Flex>
            {/* <Text justifyContent="center" fontWeight={700}>{room.charAt(0).toUpperCase() + room.slice(1)} Canvas</Text> */}
            <Flex direction="row">
                <ColorSelector colorSelected={colorSelected} setColorSelected={setColorSelected} />
                <Flex mt={5} ml="auto" mr="auto" justifyContent="center" direction="column">
                    <Flex onMouseLeave={() => setMouseHeld(false)} onMouseUp={() => setMouseHeld(false)} onMouseDown={() => setMouseHeld(true)} border="1px solid grey" height="342px" width="402px" flexWrap="wrap" margin={0}>
                        {grid.map((pixel) => (
                            <Pixel mouseHeld={mouseHeld} grid={grid} room={room} index={pixel[0]} socket={socket} colorSelected={colorSelected} key={pixel[0]} defaultBg={pixel[1]}></Pixel>
                        ))}
                    </Flex>
                </Flex>
                <Room setRoom={setRoom} username={username} room={room} socket={socket} />
            </Flex>
        </Flex>
    );
};

export default Canvas;