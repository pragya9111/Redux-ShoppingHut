const initialState = {
    products:[]
}

export const ProductReducer = (state=initialState, action) => {
    switch (action.type) {
        case "Set_Products" : 
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export const selectedProductReducer = (state={},action) => {
    switch (action.type) {
        case "Selected_Product":
            return {
                ...state,
                ...action.payload
            }
        
        case "Remove_Selected_Product": 
            return {}

        default:
            return state;
    }
}