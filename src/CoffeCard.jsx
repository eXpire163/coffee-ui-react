import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Share from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const CoffeCard = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { avatarUrl, title, price, description, imageUrl } = props
    return (
        <Card variant="outlined">
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={avatarUrl} />
                }
                action={
                    <IconButton aria-label="settings">
                        <Share />
                    </IconButton>
                }
                title={title}
                subheader={price}
            />
            <CardMedia
                className={classes.media}
                image={imageUrl}
                title="Paella dish"
            />
            <CardContent>
                <Typography>
                    {description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Buy now</Button>
                <Button size="small">OFFER</Button>
            </CardActions>
        </Card>
    )
}

export default CoffeCard
