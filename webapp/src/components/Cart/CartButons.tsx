import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";

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
      color:'#000000'
  },
  container:{
    position:'relative'
  },
  margen:{
    margin: '-25px 0 0 -25px',
    display: 'flex',
    justifyContent:'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    
  },
});
export default function CartButons() {
    const classes = useStyles();
  return (
        <Container maxWidth='lg' className={classes.container}>
        
         <div className={classes.margen}>
        <Button variant="contained" endIcon={<ShoppingCartIcon />} sx={{ bgcolor: 'black' }} size='large' >
           Finalizar Compra
         </Button>
      </div>        
      </Container>
  );
}