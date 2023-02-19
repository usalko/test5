import * as React from 'react'
import {
  ChakraProvider,
  Text,
  theme,
} from '@chakra-ui/react'
import { Navigator } from './components/Navigator'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import client from './apollo/client'
import { ApolloProvider } from '@apollo/client'
import { StartPage } from './pages/StartPage'
import { ReactionsDashboard } from './components/dashboards/ReactionsDashboard'

export const App = () => (
  <div className="App">
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigator />}>
              <Route index element={<StartPage />} />
              <Route path="/reactions" element={<ReactionsDashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ChakraProvider>
  </div>

)
