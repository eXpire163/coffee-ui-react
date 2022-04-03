import { Grid } from '@material-ui/core'
import React from 'react'
import CoffeCard from './CoffeCard'
import coffeeList from './constants'

function Content() {

    return (
        <>
            <Grid container spacing={4}>

                {coffeeList().map((maker) => (
                    <Grid item xs={12} sm={4} key={maker.title}>
                        <CoffeCard {...maker} />
                    </Grid>
                ))}
            </Grid>


        </>
    )
}

export default Content
