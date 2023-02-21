import { ApolloProvider } from '@apollo/client'
import {
  ChakraProvider
} from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'
import client from './apollo/client'
import { ReactionsBoard } from './components/dashboards/ReactionsBoard'
import { Navigator } from './components/Navigator'
import { StartPage } from './pages/StartPage'
import { history, store } from './store'
import { theme } from './theme'


export const App = () => (
  <div className="App">
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <HistoryRouter history={history}>
            <Routes>
              <Route path="/" element={<Navigator outletSpace={5} />}>
                <Route index element={<StartPage />} />
                <Route path="/reactions" element={<ReactionsBoard />} />
              </Route>
            </Routes>
          </HistoryRouter>
        </Provider>
      </ApolloProvider>
    </ChakraProvider>
  </div>

)
