import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";
import { Box, Typography } from '@mui/material';
import TableSizes from './TableSizes';
import { TypeProduct } from '../../shared/shareddtypes';

const tallas = [
  <Button sx={{ bgcolor: 'black', color: '#FFFFFF'}}>36</Button>,
  <Button sx={{ bgcolor: 'black', color: '#FFFFFF'}}>37</Button>,
  <Button sx={{ bgcolor: 'black', color: '#FFFFFF'}}>38</Button>,
  <Button sx={{ bgcolor: 'black', color: '#FFFFFF'}}>39</Button>,
  <Button sx={{ bgcolor: 'black', color: '#FFFFFF'}}>40</Button>,
]

const colores = [
  <Button  sx={{ bgcolor: '#FFFFFF', color: 'black'}}>Blanco</Button>,
  <Button  sx={{ bgcolor: '#FFFFFF', color: 'black'}}>Negro</Button>,
]

type parsedProduct = {
  product: TypeProduct[];
};
 
const RightDetails = (parsed:parsedProduct) => {
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
        <ButtonGroup variant="outlined" aria-label="colores">
           {colores}
        </ButtonGroup>
      </div>

      <div>
	      <Typography color= "#FFFFFF">
           Tallas disponibles
        </Typography>
        <ButtonGroup color= "primary" variant="outlined" aria-label="tallas">
           {tallas}
        </ButtonGroup>
      </div>

      <div>
        <Button 
        variant="contained" 
        startIcon={<FavoriteBorder />} 
        size="medium"
        sx={{ bgcolor: '#FFFFFF', color: 'black'}}>
            Favorito
         </Button>

        <Button variant="contained" endIcon={<ShoppingCartIcon />} sx={{ bgcolor: 'black' }}>
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

const images = [
  {
    url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5d26789-8695-4ea4-80e0-47e59b6a3d8e/air-force-1-zapatillas-46WdMJ.png',
    title: 'Nike Air Force 1',
    width: '40%',
  },
  {
    url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/945a101d-1b0e-4302-b6f3-0668cea0b494/air-force-1-zapatillas-46WdMJ.png',
    title: 'Nike Air Force 1',
    width: '30%',
  },
];