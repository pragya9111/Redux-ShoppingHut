import { Set_Products, Selected_Product, Remove_Selected_Product } from "./ActionType";

export const setProducts = (products) => {
    return {
        type:Set_Products,
        payload:products
    }
}

export const selectedProducts = (products)=> {
    return {
        type: Selected_Product,
        payload:products
    }
}

export const removeSelectedProducts = (products) => {
    return {
        type:Remove_Selected_Product,
    }
} 