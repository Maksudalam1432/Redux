import { configureStore } from "@reduxjs/toolkit"
import cartdreducer from "./Cardslice"
import Product from "../components/Product"
const store=configureStore({
    reducer:{
        cart:cartdreducer,

    },
})

export default store;