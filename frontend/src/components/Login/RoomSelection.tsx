import React, { useState } from 'react';
import { Box, Button, Flex, Input, Stack, Text, useColorMode } from '@chakra-ui/react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import "@fontsource/potta-one"
import "@fontsource/press-start-2p"
import "@fontsource/unifont"
import "@fontsource/lemon"

interface RoomSelectionProps {
    roomSelected: {selection: string, submitted: boolean},
    setRoomSelected: (value:{selection: string, submitted: boolean}) => void,
};

const RoomSelection:React.FC<RoomSelectionProps> = ({ roomSelected, setRoomSelected }) => {

    const { colorMode, toggleColorMode } = useColorMode()
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!roomSelected.selection) {
            return
        }
        setRoomSelected({selection: roomSelected.selection, submitted: true})

    }

    return (
        <Flex direction="column" ml="auto" mr="auto" align="center" width="100%">

            <Text ml="20%" mr="auto" style={{color: colorMode === 'light' ? 'white' : '#161B25', textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} mb={-2} fontSize="xxx-large" fontWeight={800} fontFamily="Potta One">Select a Canvas...</Text>
            
            
            <Text ml="20%" mr="auto" pb={10} fontSize="x-large" fontWeight={300}>Join an active canvas by selecting one below</Text>
            
            <form onSubmit={onSubmit}>
                <Flex height="320px" width="1000px">
                    <Stack style={{border: roomSelected.selection === 'picasso' ? '3px solid' : 'none', borderColor: roomSelected.selection === 'picasso' ? '#4802de' : 'null'}} onClick={() => setRoomSelected({selection: 'picasso', submitted: false})} mr={10} width="25%" borderRadius={10} _hover={{bg: 'blackAlpha.100', cursor: 'pointer'}}>
                        <Text fontSize="3xl" fontFamily="Lemon" color="red.300">Small</Text>
                        <Box borderRadius={15} bg="blackAlpha.300" height="100%" width="100%">
                            <Box borderRadius={8} mt="35%" ml="auto" mr="auto" height="20%" width="20%" bg="blue.300"></Box>
                        </Box>
                        <Text fontFamily="Unifont">A small, fast paced canvas</Text>

                    </Stack>
                    <Stack  style={{border: roomSelected.selection === 'vangogh' ? '3px solid' : 'none', borderColor: roomSelected.selection === 'vangogh' ? '#4802de' : 'null'}} onClick={() => setRoomSelected({selection: 'vangogh', submitted: false})} mr={10} width="25%" borderRadius={10} _hover={{bg: 'blackAlpha.100', cursor: 'pointer'}}>
                        <Text fontWeight={700} fontSize="3xl" fontFamily="Lemon" color="green.300">Medium</Text>
                        <Flex borderRadius={15} bg="blackAlpha.300" height="100%" width="100%" justifyContent="center">
                                <Box mt="57px" height="100%" width="20%" flexDir="row">
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                </Box>
                                <Box mt="57px" height="100%" width="20%" flexDir="row">
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                </Box>
                        </Flex>
                        <Text>Medium, mildly paced canvas</Text>

                    </Stack>
                    <Stack style={{border: roomSelected.selection === 'davinci' ? '3px solid' : 'none', borderColor: roomSelected.selection === 'davinci' ? '#4802de' : 'null'}} onClick={() => setRoomSelected({selection: 'davinci', submitted: false})} mr={10} width="25%" borderRadius={10} _hover={{bg: 'blackAlpha.100', cursor: 'pointer'}}>
                        <Text fontWeight={700} fontSize="3xl" fontFamily="Lemon" color="teal.300" >Large</Text>
                        <Flex borderRadius={15} bg="blackAlpha.300" height="100%" width="100%" justifyContent="center">
                                <Box mt="40px" height="100%" width="20%" flexDir="row">
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                </Box>
                                <Box mt="40px" height="100%" width="20%" flexDir="row">
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                </Box>
                                <Box mt="40px" height="100%" width="20%" flexDir="row">
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                    <Box borderRadius={8} height="20%" width="100%" bg="blue.300"></Box>
                                </Box>
                        </Flex>
                        <Text>Large, slower paced canvas</Text>

                    </Stack>
                    <Stack style={{border: roomSelected.selection === 'custom' ? '3px solid' : 'none', borderColor: roomSelected.selection === 'custom' ? '#4802de' : 'null'}} onClick={() => setRoomSelected({selection: 'custom', submitted: false})} mr={10} width="25%" borderRadius={10} _hover={{bg: 'blackAlpha.100', cursor: 'pointer'}}>
                        <Text fontWeight={700} fontSize="3xl" fontFamily="Lemon" color="#F587B3" >Custom</Text>
                        <Flex borderRadius={15} bg="blackAlpha.300" height="100%" width="100%" justifyContent="center">
                                
                                
                        </Flex>
                        <Text>Customizable size and speed, Invite friends!</Text>

                    </Stack>
                </Flex>
                <Flex width="100%">
                        <Button fontWeight={700} bg="blue.300" color="white" type="submit" mt="5%" height="46px" width="100%">Join Room</Button>
                </Flex>
            </form>

        </Flex>
    )
}
export default RoomSelection;