import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { TypeProduct } from '../../shared/shareddtypes';

const useStyles = makeStyles({
  sizes: {
    marginLeft:'35%',
    marginRight:'20%',
    marginTop:'20%',
    width: '70%',
    height: '78%',
    "&:hover ": { transform: "scale3d(1.05, 1.05, 1)",
      boxShadow: "-1px 1px 20px 0px rgba(0,0,0,0.9)",
  }
} 
});

type ProductsParsed = {
  products: TypeProduct[]
}

const ShoesView = (parsed : ProductsParsed) => {
  const classes = useStyles();
  let details = '/Details?id='
  return (
    <Grid container spacing={1} columns={{ xs: 4, sm: 6, md: 7 }}>
    {parsed.products.map( item =>
    <Grid item xs={4} sm={2} md={2} key={item.id}>
    <Card className={classes.sizes}>
      <CardActionArea
      to= {details + item.id}
      component={Link}>
        <CardMedia
          component="img"
          alt={item.nombre}
          height="300px"
          width="300px"
          image={item.imagen}
          title={item.nombre}
        />
        <CardContent >
            <Typography variant='h6' >
                {item.nombre}
            </Typography>
            <Typography variant='h6' >
                Precio:{item.precio}
            </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    )}
    </Grid>
  );
}

export default ShoesView;




























