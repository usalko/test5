// Store from react first history library: https://github.com/salvoravida/redux-first-history
import { configureStore } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'
import { combineReducers } from 'redux'
import { createReduxHistoryContext } from 'redux-first-history'

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() })

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
})

export const history = createReduxHistory(store)
