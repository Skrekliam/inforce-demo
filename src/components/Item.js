import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Item.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300
  },
  media: {
    height: 200,
  },
});

export default function Item() {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} item` }>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://img2.zakaz.ua/src.1617221702.ad72436478c_2021-03-31_YuliaT/src.1617221702.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.150nowm.jpg.150x.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Apple
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Fresh and sweet apple, without pesticides
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More
        </Button>
        <Button size="small" color="danger">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
