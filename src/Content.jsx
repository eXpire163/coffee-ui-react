import { Grid } from '@material-ui/core'
import React from 'react'
import CoffeCard from './CoffeCard'
import coffeeMakerList from './constants'

function Content() {

    console.log(coffeeMakerList)

    return (
        <>
            <Grid container spacing={4}>

                {coffeeMakerList.map((maker) => (
                    <Grid item xs={12} sm={4}>
                        <CoffeCard {...maker} />
                    </Grid>
                ))}




            </Grid>


        </>
    )
}

export default Content
