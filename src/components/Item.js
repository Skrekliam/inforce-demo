import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

export default function Item({product,openDeleteModal}) {
  const classes = useStyles(); 

  return (
    <Card className={`${classes.root} item` }>
        <Link className="link" to={product.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.product.url}
          title={product.product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {product.product.name}
          </Typography>
          <span className="small-text">
          {product.product.count} pieces in stock
          </span>
          <Typography variant="body2" color="textSecondary" component="h3">
          {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
      <Link className="link" to={product.id}>
        <Button size="small" color="primary">
          More
        </Button>
        </Link>
        <Button size="small" color="secondary" onClick={() => openDeleteModal(product.id)}>
            {/* here opens modal where you can delete selected post */}
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
