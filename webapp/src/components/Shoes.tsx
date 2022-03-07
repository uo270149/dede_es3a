import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid } from "@mui/material";

const useStyles = makeStyles({
  sizes: {
    marginLeft:'200px',
    marginRight:'200px',
    marginTop:'100px',
    width: '70%',
    height: '78%',
    "&:hover ": { transform: "scale3d(1.05, 1.05, 1)",
      boxShadow: "-1px 1px 20px 0px rgba(0,0,0,0.9)",
  }
}

});

const shoes_images=[
    {
        id:'1',
        name:'Nike Air Max 90',
        price:'149,99 €',
        image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/75d0471d-9d61-49c2-b1f9-fff297b10dd7/air-max-90-surplus-zapatillas-rpgT3V.png'
    },
    {
        id:'2',
        name:'Adidas de Pixar',
        price:'149,99 €',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_agk4j-1Ofuy6yUvowjpcBVctwkywepbJrWaw717uf1_0qipyfDN5ZGbCFhm0ytAtEy4&usqp=CAU'
    },
    {
        id:'3',
        name:'ZAPATILLA NMD_R1 V2',
        price:'140 €',
        image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/b1fb22faa98a4626bba9ad110106940f_9366/Zapatilla_NMD_R1_V2_Negro_GX0540_01_standard.jpg'
    },
    {
        id:'4',
        name:'ZAPATILLAS GRAND COURT BASE',
        price:'11.999 €',
        image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/1790130ab31944ddbb90aa4300cd10a9_9366/Zapatillas_Grand_Court_Base_Blanco_EE7904_01_standard.jpg'
    },
    {
        id:'5',
        name:'Nike Air Force 1',
        price:'110 €',
        image:'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/w_300,c_limit/d9f1d9ee-a848-4a36-aab9-48b241078ebb/air-force-1-le-zapatillas-nino-a-D59pRJ.png'
    },
    {
        id:'6',
        name:'Nike Blazer Mid 77 Vintage',
        price:'99,99 €',
        image:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a0c1fb4-564f-441d-93a2-f41dc5007bcd/blazer-mid-77-vintage-zapatillas-t7wWrK.png'
    },
    {
        id:'7',
        name:'Nike Air Max Plus',
        price:'169,99 €',
        image:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lx0owmisj943sr59emb8/air-max-plus-zapatillas-07mFHd.png'
    },
    {
        id:'8',
        name:'Nike Air Max Plus',
        price:'169,99 €',
        image:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b99930d3-563a-49ee-8460-54b618dd52ea/air-max-plus-zapatillas-xKRLd1.png'
    },
    {
        id:'9',
        name:'ZAPATILLA COURTMASTER',
        price:'56 €',
        image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/4fedb76b2da84ff69089ab9700e372fe_9366/Zapatilla_Courtmaster_Blanco_FW2897_01_standard.jpg'
    },
    
]









export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} columns={{ xs: 4, sm: 6, md: 7 }}>
    {shoes_images.map( item =>
    <Grid item xs={4} sm={2} md={2} key={item.id}>
    <Card className={classes.sizes}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.name}
          height="300px"
          width="300px"
          image={item.image}
          title={item.name}
        />
        <CardContent >
            <Typography variant='h6' >
                {item.name}
            </Typography>
            <Typography variant='h6' >
                Precio:{item.price}
            </Typography>
           
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    )}
    </Grid>
  );
}




























