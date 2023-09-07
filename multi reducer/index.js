const {createStore, combineReducers} = require('redux')

//constant value
const ADD_ITEM = 'ADD_ITEM'
const CATEGORY_FILTER = 'CATEGORY_FILTER'
const GET_ITEM = 'GET_ITEM'


//product initial state
const productInitialState = {
    products : [
        {
            name : 'apple',
            price : 35,
            category : 'fruites'
        },
        {
            name : 'rose',
            price : 15,
            category : 'flowers'
        }
    ]
}

//product action
const productAction = (type,payload=null) => {
    return {
        type : type,
        payload : payload
    }
}

//product reducer
const productReducer = (state=productInitialState,action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                products : [...state.products,action.payload]
            }
        case GET_ITEM:
            return state
        case CATEGORY_FILTER:
            return{
                ...state,
                products: state.products.filter((item) => item.category === action.payload)
            }
        default:
            return state
    }
}

//user initial state
const userInitialState = {
    users : [
        {
            name : 'rakib',
            age : 25,
            adult : true
        },
        {
            name : 'Ratul',
            age : 15,
            adult : false
        }
    ]
}

//user action
const userAction = (type,payload=null) => {
    return {
        type : type,
        payload : payload
    }
}

//user reducer
const userReducer = (state=userInitialState,action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                users : [...state.users,action.payload]
            }
        case GET_ITEM:
            return state
        case CATEGORY_FILTER:
            return{
                ...state,
                users: state.users.filter((item) => item.adult === action.payload)
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    userReducer : userReducer,
    productReducer : productReducer
})

const store = createStore(rootReducer)

store.subscribe(()=>{
    store.getState()
})

store.dispatch(productAction(GET_ITEM))
store.dispatch(productAction(ADD_ITEM,{name : 'goava',price:40,'category':'fruites'}))
store.dispatch(productAction(CATEGORY_FILTER,'fruites'))

store.dispatch(userAction(GET_ITEM))
store.dispatch(userAction(ADD_ITEM,{name:'rahil',age:6,adult:false}))
store.dispatch(userAction(CATEGORY_FILTER,false))

