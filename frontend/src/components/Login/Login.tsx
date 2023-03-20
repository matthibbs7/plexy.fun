import { Button, Divider, Flex, Icon, Input, Text, useColorMode } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { authFlowState } from '../../pages/Home';

type LoginProps = {
    setPage: Dispatch<SetStateAction<authFlowState>>
};

const Login:React.FC<LoginProps> = ({ setPage }) => {
    const { colorMode, toggleColorMode } = useColorMode()
    
    return (
        <Flex direction="column" style={{backgroundImage: `url())`, backgroundRepeat: 'no-repeat'}}  width="700px" height="700px" ml="auto" mr="auto" align="center" border="0px solid lightgrey" borderRadius="0px" p="80px" pb="100px">
            {/* <Text mb={-2} fontSize="xxx-large" fontWeight={800} fontFamily="Potta One" color="blue.300">Plexy.fun</Text> */}
            <Flex>
                <Text style={{textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} color="yellow.300" fontFamily="Potta One" fontSize="9xl" as="span">P</Text>
                <Text style={{textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} color="blue.300" fontFamily="Potta One" fontSize="9xl" as="span">l</Text>
                <Text style={{textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} color="pink.300" fontFamily="Potta One" fontSize="9xl" as="span">e</Text>
                <Text style={{textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} color="green.300" fontFamily="Potta One" fontSize="9xl" as="span">x</Text>
                <Text style={{textShadow: colorMode === 'light' ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff"}} color="red.300" fontFamily="Potta One" fontSize="9xl" as="span">y</Text>
                <Text mt="auto" mb={5} fontFamily="Potta One" fontSize="xx-large" as="span">.fun</Text>
            </Flex>
            <Text color="gray.600" fontSize="17pt" fontWeight={400}>Welcome back to the fun!</Text>
            
            <form>
                    <Flex width="323px" flexDir="column">
                        <Input fontWeight={500} fontSize="large" height="50px" width="100%" border="2px solid grey" onChange={() => {}} name="username" mt={5} placeholder="Username" />
                        <Input fontWeight={500} fontSize="large" height="50px" width="100%" border="2px solid grey" onChange={() => {}} name="Password" mt={5} placeholder="Password" />
                        <Button bg="blue.300" color="white" fontSize="large" height="50px" type="submit" mt={4} width="100%">Login</Button>
                        <Flex justifyContent="center" align="center" width="100%" mt={2} mb={2}>
                            <Divider borderColor="gray.300"  />
                            <Text color="gray.400">&nbsp;&nbsp;OR&nbsp;&nbsp;</Text>
                            <Divider borderColor="gray.300" />
                        </Flex>
                        <Button fontSize="large" height="50px" mt={2} width="100%" color="white" bg="red.300"><Icon mr={2} as={FaGoogle}/><Text as="span" color="white">Continue with Google</Text></Button>
                        <Flex justifyContent="center">
                            <Text as="span" color="gray.400" mt={2} fontSize="13pt">New here?&nbsp;</Text> 
                            <Text _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => setPage({pageView: 'signup'})} as="span" color="blue.300" mt={2} fontWeight={600} fontSize="13pt">Sign Up</Text>
                        </Flex>
                    </Flex>
                
            </form>

        </Flex>
    )
}
export default Login;