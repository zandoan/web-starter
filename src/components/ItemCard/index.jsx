import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import { LocationOn, StarRate, DirectionsWalk } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { closeTimeParser } from './../../utils/utils';

function ItemCard({ classes, title, cuisine, references, hours, distance, rating, images }) {
    const image = images && images.length && [...images].shift();
    const close = closeTimeParser(hours);

    return (
        <div>
            <Card className={classes.card}>
                <CardContent
                    className={classes.content}
                >
                    <Typography component="h3" color="primary" className={classes.title}>
                        <LocationOn className={classes.icon} />
                        {title}
                    </Typography>
                    <Typography component="h4" color="secondary" className={classes.cuisine}>
                        {cuisine} Style Food
                    </Typography>
                    <Typography color="primary">
                        <StarRate className={classes.icon} />
                        {`Featured in ${[...references].shift().site_name}`}
                        <span> + {references.length}</span>
                    </Typography>
                </CardContent>
                {image && (
                    <CardMedia
                        className={classes.thumbnail}
                        image={image}
                    />
                )}
            </Card>
            <Grid container className={classes.bottomContainer}>
                <Grid item xs={8}>
                    {close && `Close at ${close} -`} {Math.round(distance * 10) / 10} miles away
                </Grid>
                <Grid item xs={2}>
                    <Typography color="primary"><DirectionsWalk className={classes.icon} /> 6 min</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography color="primary">
                        <StarRate className={classes.icon} />{rating}<span className={classes.sub}>/5</span>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(ItemCard);
