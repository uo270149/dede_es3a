import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Container, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles({
    sizes: {
      marginLeft:'20%',
      marginTop:'20%',
      marginBottom:'20%',
      width: '60%',
      height: '80%',
      "&:hover ": { transform: "scale3d(1.05, 1.05, 1)",
        boxShadow: "-1px 1px 20px 0px rgba(0,0,0,0.9)",
    }
  },
  colores:{
      color:'#FFFFFF'
  },
  colores2:{
    marginRight:'30%',
    background: "linear-gradient(45deg, #FFFFFF 10%,transparent 70%)"
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
    },{
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
    }]


    const ShoesCart = () => {
        const classes = useStyles();
          
        return (
            <Container maxWidth="md" className={classes.colores2}>
                <Typography variant='h2' className={classes.colores}>
                         ARTICULOS EN EL CARRITO
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs:2, sm:2,md: 4  }} rowSpacing={{xs: 1}}>
                {shoes_images.map( item =>
                <Grid item  sm={2} md={2} key={item.id}>
            <Card className={classes.sizes}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.name}
                  height="200px"
                  width="200px"
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
              <IconButton aria-label="delete"><DeleteIcon /></IconButton>
            </Card>
            </Grid>
            )}
            </Grid>
            
            </Container>
            
          );
        };
        export default ShoesCart;