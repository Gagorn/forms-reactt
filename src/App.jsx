
import { Link } from '@chakra-ui/react'

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
  VStack,


} from "@chakra-ui/react";
import {
  Tabs,
  TabList,
   TabPanels,
    Tab,
     TabPanel, Checkbox, CheckboxGroup 

} from "@chakra-ui/react";
import { Portal } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

function App() {
  return (
    
    
    
    <Box h="100vh">

      <Center
        as="header"
        h={150}
        bgGradient="linear(to-l, #10E8CE, #002C36)"
        color="white"
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
        maxW={1058}
          maxH={716}
        height="60px"
        borderRadius="10px"
        padding="20px"
        gap="35px"
        position="center"
     
          >
        
         <Box
          color='white'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
       
       <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: '#13232F' }}>Cadastro de Identificação</Tab>
    <Tab _selected={{ color: 'white', bg: '#13232F' }}> Anamnese</Tab>  
    <Tab _selected={{ color: 'white', bg: '#13232F' }}> Orçamento</Tab>
    <Tab _selected ={{ color: 'white', bg: '#13232F' }}>Ficha Clínica</Tab>
    <Tab _selected={{ color: 'white', bg: '#13232F' }}>Pacientes</Tab>
    

 
  </TabList>
  
  
</Tabs>

</Box>

</Flex>
     
     
    
      </Center>
      <Flex
        align="center"
        justify="center"
        bgGradient="linear(to-l, #10E8CE, #002C36)"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={1058}
          maxH={716}
          bg="#24394A"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        
        >
          <FormControl display="flex" flexDir="column" gap="4" color = "#11C8B4" isRequired marginTop='15px' >
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome"color='white'>Nome Completo:</FormLabel>
                <Input color='white'id="nome" />
              </Box>
               <Box w="100%"> 
                <FormLabel htmlFor="nasc" color='white' >Data de Nascimento:</FormLabel>
                <Input color='white'id="nasc" type="date" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="age" color='white' >Idade:</FormLabel>
                <Input color='white' id="age" type="age" />
              </Box>
              
            </HStack>
           
            <HStack spacing="4">
              <Box w="100%"
              
              >
                <FormLabel  color='white'>Sexo:</FormLabel>
                
                <RadioGroup color='white' defaultValue="Masculino">
                  <HStack square="24px">
                  <Checkbox value = "Masculino">Masculino</Checkbox>
                  <Checkbox value = "Feminino">Feminino</Checkbox>
                  <Checkbox value = "Outros">Outros</Checkbox>
                  </HStack>
                </RadioGroup>
                
              </Box>
              <Box w="100%">
                <FormLabel color='white' htmlFor="cidade">Telefone:</FormLabel>
                <Input color='white' id="cidade" />
              </Box>
              <Box w="100%">
                <FormLabel color='white' htmlFor ="cidade">Celular:</FormLabel>
                <Input color='white' id="cidade" />
              </Box>
            </HStack>
          
            <HStack spacing="4">
                   

                   
              <Box w="100%">
                <FormLabel color='white' htmlFor="adress">Endereço Residencial:</FormLabel>
                <Input color='white' id="adress" />
              </Box>
              <Box w="100%">
                <FormLabel color='white' htmlFor="adress">CEP:</FormLabel>
                <Input color='white' id="adress" />
              </Box>
            </HStack>

            
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel color='white' htmlFor="UF">UF:</FormLabel>
                <Input color='white' id="adress" type="adress" />
              </Box>
              <Box w="100%">
                <FormLabel color='white' htmlFor="Tefone">Cidade:</FormLabel>
                <Input color='white' id="adress" type="adress" />
              </Box>
              
              <Box w="100%">
                <FormLabel color='white' htmlFor="Tefone">Email:</FormLabel>
                <Input color='white' id="email" type="email" />
              </Box>
            </HStack>
            <HStack spacing="4">
            <Box w="32%">
                <FormLabel color='white'  htmlFor="nasc">Data de Hoje:</FormLabel>
                <Input color='white' id="nasc" type="date" />
              </Box>
          
              <Box
              
              display='flex'
              alignItems='center'
              justifyContent='right'
              width='100%'
              >

             
             
             
             
             
             
             
              <Button
                
               
                w={250}
                p="5"
                type="submit"
                bg="teal.400"
                color="black"
                fontWeight="bold"
                fontSize="xl"
                mt="7"
              
                
                _hover={{ bg: "teal.800" }}
              
                >
                <Link href="/anamnese.html">Cadastrar Paciente</Link>
              </Button>
              </Box>
              </HStack>
              <Box
          color='white'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
       
    
  
</Box>



          </FormControl>
        </Center>
      </Flex>
    </Box>
  
  
  
  
  
  
  
  );
}

export default App;