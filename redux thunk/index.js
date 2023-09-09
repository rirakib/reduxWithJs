const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const { default: thunk } = require("redux-thunk")

//constant value
const GET_TODO_REQUEST = 'GET_TODO_REQUEST'
const SUCCESS_TODO_REQUEST = 'SUCCESS_TODO_REQUEST'
const ERROR_TODO_REQUEST = 'ERROR_TODO_REQUEST'
const API_URL = 'https://jsonplaceholder.typicode.com/todos'


//state
const initalState = {
    isLoading:false,
    todos:[],
    error:null
}

//action
const getTodos = () => {
    return{
        type : GET_TODO_REQUEST
    }
}

const successTodos = (todos) => {
    return {
        type : SUCCESS_TODO_REQUEST,
        payload : todos
    }
}

const errorTodos = (error) => {
    return {
        type : ERROR_TODO_REQUEST,
        payload : error
    }
}

const todoReducer = (state = initalState,action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading : true
            }
        case SUCCESS_TODO_REQUEST:
            return {
                ...state,
                isLoading : false,
                todos : action.payload
            }

        case ERROR_TODO_REQUEST:
            return {
                ...state,
                isLoading : false,
                error : action.payload
            }
            
        default:
            return {
                ...state
            }
    }
}

const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodos())
        axios.get(API_URL)
        .then((todos)=>{
            let data = todos.data 
            dispatch(successTodos(data))
        })
        .catch((error)=>{
            let errorMessage = error.message 
            dispatch(errorTodos(errorMessage))
        })

    }
}

const store = createStore(todoReducer,applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchData())
// inital state
// action
//reducer
//store