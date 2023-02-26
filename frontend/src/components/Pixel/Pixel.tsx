// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from '../../util/types';
import { cloneDeep } from 'lodash'

interface PixelProps {
    mouseHeld: boolean,
    colorSelected: string,
    defaultBg: string,
    socket: Socket<ServerToClientEvents, ClientToServerEvents>,
    index: string,
    room: string,
};

const Pixel:React.FC<PixelProps> = ({ mouseHeld, grid, colorSelected, defaultBg, socket, index, room }) => {
    const [pixelColor, setPixelColor] = useState('white');

    useEffect(() => {
        setPixelColor(defaultBg)
    }, [defaultBg])

    const updatePixelColor = () => {
        // update client pixel
        // setPixelColor(colorSelected)

        // only update when new color placed
        if (colorSelected !== pixelColor) {
            console.log("Updating pixel to server")

            for (let i = 0; i < grid.length; i++) {
                
                if (grid[i][0] === index) {
                    let new_grid = cloneDeep(grid)
                    new_grid[i][1] = colorSelected

                    socket.emit('pixel_drawn', { new_grid, room })

                    // setGrid(new_grid)
                    // console.log("new grid", grid)
                    // setGrid(grid.map(it => it[0] === data.index ? [...it, it[1] = data.colorSelected] : it))
                }
            }
        }
    }

    return (
        <Box onMouseOver={() => mouseHeld ? updatePixelColor() : false} onClick={() => updatePixelColor()} height="20px" width="20px" bg={pixelColor}>

        </Box>
    )
}
export default Pixel;