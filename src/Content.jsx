import { Grid } from '@material-ui/core'
import React, { useReducer, useEffect } from 'react'
import CoffeCard from './CoffeCard'
import coffeeList from './constants'




function cartReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.product];
        case 'remove':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if (productIndex < 0) {
                return state;
            }
            const update = [...state];
            update.splice(productIndex, 1)
            return update
        default:
            return state;
    }
}




function Content({ showCart }) {

    const [cart, setCart] = useReducer(cartReducer, []);


    useEffect(() => {
        showCart(cart)
    }, [cart, showCart])

    function add(product) {
        setCart({ product, type: 'add' });
    }

    function remove(product) {
        setCart({ product, type: 'remove' });
    }

    return (
        <>
            <Grid container spacing={4}>

                {coffeeList().map((maker) => (
                    <Grid item xs={12} sm={4} key={maker.title}>
                        <CoffeCard {...maker} add={add} remove={remove} />
                    </Grid>
                ))}
            </Grid>


        </>
    )
}

export default Content
