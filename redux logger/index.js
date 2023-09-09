
const {createStore, applyMiddleware} = require('redux')
const { default: logger } = require('redux-logger')

//constant value
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//initail state
const initialState = {
    count:0
}

//dispatch
const dispatch = (type,payload=null) => {
    return {
        type : type,
        payload : payload
    }
}

//reducer
const reducer = (state=initialState,action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count : state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count : state.count - 1
            }
        default:
            return {
                ...state
            }
    }
}

//store 
const store = createStore(reducer,applyMiddleware(logger))

const subscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(dispatch(INCREMENT))
store.dispatch(dispatch(DECREMENT))
