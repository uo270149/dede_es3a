import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";
import { Box, Typography } from '@mui/material';
import TableSizes from './TableSizes';
import { TypeProduct, User } from '../../shared/shareddtypes';

const tallas = [
  <Button sx={{ bgcolor: 'black', color: '#FFFFFF'}} key="36_tallas" title={"36_tallas"}>36</Button>,
  <Button sx={{ bgcolor: 'black', color: '#FFFFFF'}} key="37_tallas" title={"37_tallas"}>37</Button>,
  <Button sx={{ bgcolor: 'black', color: '#FFFFFF'}} key="38_tallas" title={"38_tallas"}>38</Button>,
  <Button sx={{ bgcolor: 'black', color: '#FFFFFF'}} key="39_tallas" title={"39_tallas"}>39</Button>,
  <Button sx={{ bgcolor: 'black', color: '#FFFFFF'}} key="40_tallas" title={"40_tallas"}>40</Button>,
]

const colores = [
  <Button  sx={{ bgcolor: '#FFFFFF', color: 'black'}} key="Blanco">Blanco</Button>,
  <Button  sx={{ bgcolor: '#FFFFFF', color: 'black'}} key="Negro">Negro</Button>,
]

type parsedProduct = {
  product: TypeProduct[];
};
 
const RightDetails = (parsed:parsedProduct) => {
  
  function addToCart(){
    // Objeto a almacenar
    const item = {"_objectId":parsed.product[0]._objectId,"id":parsed.product[0].id,"nombre":parsed.product[0].nombre,"precio":parsed.product[0].precio,"imagen":parsed.product[0].imagen};
    // Sacamos el carrito almacenado en sesion
    var cart:string = sessionStorage.getItem('cart') as string;
    
    // Si el carrito NO esta vacio, añadimos el nuevo item al final
    if(JSON.parse(cart) != null){
      if(JSON.parse(cart).length > 0){  
        var newCart:string = cart.substring(0, cart.length-1) + ',' + JSON.stringify(item) + ']';
      } 
      // Si no, introducimos el primer item a nuestro carrito
      else{ 
        var newCart:string = cart.substring(0, cart.length-1) + JSON.stringify(item) + ']';
      }
      sessionStorage.setItem('cart', newCart);
    }
    alert("Artículo: \"" + parsed.product[0].nombre + "\" añadido al carrito.");
  }

  return (
    <Box sx={{ '& button': { m: 2 } }} >
      <div>
      <Typography gutterBottom variant="h3" color= "#FFFFFF">
           {parsed.product[0].nombre}
      </Typography>
      <Typography gutterBottom variant="h4" color= "#FFFFFF">
           {parsed.product[0].descripcion}
      </Typography>
      <Typography gutterBottom variant="h6" color= "#FFFFFF">
           {parsed.product[0].precio}
      </Typography>
      </div>

      <div>
	      <Typography color= "#FFFFFF">
           Colores
        </Typography>
        <ButtonGroup variant="outlined" aria-label="colores" key="colores">
           {colores}
        </ButtonGroup>
      </div>

      <div>
	      <Typography color= "#FFFFFF">
           Tallas disponibles
        </Typography>
        <ButtonGroup color= "primary" variant="outlined" aria-label="tallas" key="tallas">
           {tallas}
        </ButtonGroup>
      </div>

      <div>
        <Button variant="contained" endIcon={<ShoppingCartIcon />} sx={{ bgcolor: 'black' }} onClick={addToCart}
          data-testid="cart">
           Añadir al carrito
         </Button>
      </div>

      <div>
        <TableSizes/>
      </div>
    </Box>
  );
};
export default RightDetails;