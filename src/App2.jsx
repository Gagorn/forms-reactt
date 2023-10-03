import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    RadioGroup,
    Radio,
    Button,
  
  
  } from "@chakra-ui/react";
  import {
    Tabs,
    TabList,
     TabPanels,
      Tab,
       TabPanel, Checkbox, CheckboxGroup 
  
  } from "@chakra-ui/react";
 
  function App2() {
    return (
    
    
        <Box h="100vh">

        <Center
          as="header"
          h={150}
          bg="teal.500"
          color="black"
          fontWeight="bold"
          fontSize="4xl"
          pb="8"
        >
   <Flex align="center"
          justify="center"
          bg="#24394A"
          
          width="calc(100% - 50px)"
          top="30px"
          left="50px"
          maxW={840}
          height="60px"
          borderRadius="10px"
          padding="20px"
          gap="35px"
          position="center"
    
    ></Flex>
</Center>    
    </Box>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        );
    }
    
export default App2;