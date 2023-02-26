import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';

type ColorSelectorProps = {
    setColorSelected: (color: string) => void;
    colorSelected: string;
};

const ColorSelector:React.FC<ColorSelectorProps> = ({ setColorSelected, colorSelected }) => {
    
    return (
        <Flex ml="auto" mr="auto" flexDirection="column">
            
            <Flex justifyContent="center" py={3} px={5} width="200px" flexWrap="wrap" border="1.5px solid grey" bg="blackAlpha.300" height="240px" borderRadius={7}>
                <Text fontWeight={700} mb={2}>Select a Color</Text>
                <Box onClick={() => setColorSelected('#FFFFFF')} borderRadius="5px" height="30px" width="30px" bg="#FFFFFF"></Box>
                <Box onClick={() => setColorSelected('#E4E4E4')} borderRadius="5px" ml={2} height="30px" width="30px" bg="#E4E4E4"></Box>
                <Box onClick={() => setColorSelected('#888888')} borderRadius="5px" ml={2}  height="30px" width="30px" bg="#888888"></Box>
                <Box onClick={() => setColorSelected('#222222')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#222222"></Box>
                <Box onClick={() => setColorSelected('#FFA7D1')} borderRadius="5px" height="30px" width="30px" bg="#FFA7D1"></Box>
                <Box onClick={() => setColorSelected('#E50000')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#E50000"></Box>
                <Box onClick={() => setColorSelected('#E59500')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#E59500"></Box>
                <Box onClick={() => setColorSelected('#A06A42')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#A06A42"></Box>
                <Box onClick={() => setColorSelected('#E5D900')} borderRadius="5px" height="30px" width="30px" bg="#E5D900"></Box>
                <Box onClick={() => setColorSelected('#94E044')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#94E044"></Box>
                <Box onClick={() => setColorSelected('#02BE01')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#02BE01"></Box>
                <Box onClick={() => setColorSelected('#00D3DD')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#00D3DD"></Box>
                <Box onClick={() => setColorSelected('#0083C7')} borderRadius="5px" height="30px" width="30px" bg="#0083C7"></Box>
                <Box onClick={() => setColorSelected('#0000EA')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#0000EA"></Box>
                <Box onClick={() => setColorSelected('#CF6EE4')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#CF6EE4"></Box>
                <Box onClick={() => setColorSelected('#820080')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#820080"></Box>
                <Box onClick={() => setColorSelected('#F5E05E')} borderRadius="5px" height="30px" width="30px" bg="#F5E05E"></Box>
                <Box onClick={() => setColorSelected('#62B3ED')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#62B3ED"></Box>
                <Box onClick={() => setColorSelected('#F587B3')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#F587B3"></Box>
                <Box onClick={() => setColorSelected('#FC8180')} ml={2} borderRadius="5px" height="30px" width="30px" bg="#FC8180"></Box>
            </Flex>
            <Flex border="1.5px solid grey" height="40px" borderRadius={5} align="center" mt={5} bg="blackAlpha.300" flexDirection="row">
                <Text fontSize="14pt" fontWeight={600} ml={4}>Selected Color</Text>
                <Box borderRadius="5px" ml="auto" mr={4} height="23px" width="23px" bg={colorSelected}></Box>
            </Flex>
        </Flex>
    )
}
export default ColorSelector;