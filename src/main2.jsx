
import React from 'react'
import ReactDOM from 'react-dom/client'

import App2 from './app2.jsx'


import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>


    <App2/>
    
    </ChakraProvider>
  </React.StrictMode>,
)
export default App2;
