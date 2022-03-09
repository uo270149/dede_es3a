import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";
import { Box, ButtonBase, Typography } from '@mui/material';
import TableSizes from './TableSizes';

const useStyles = makeStyles({
    favAndCart: {
        color: 'black',
        size: 'medium'
    }
});

const RightDetails = () => {
  const classes = useStyles();

  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <Typography gutterBottom variant="h3">
           Titulo
      </Typography>
      <Typography gutterBottom variant="h5">
           Descripcion
      </Typography>
      <Typography gutterBottom variant="h5">
           Precio
      </Typography>

      <Box sx={{ m: 1 }}>
	      <Typography >
           Colores
        </Typography>
        <ButtonGroup variant="outlined" aria-label="colores">
           <Button>Blanco</Button>
           <Button>Negro</Button>
        </ButtonGroup>
      </Box>

      <Box sx={{ m: 1 }}>
	      <Typography >
           Tallas disponibles
        </Typography>
        <ButtonGroup variant="outlined" aria-label="tallas">
           <Button>36</Button>
           <Button>37</Button>
           <Button>38</Button>
           <Button>39</Button>
           <Button>40</Button>
        </ButtonGroup>
      </Box>

      <Box sx={{ m: 1 }}>
        <Button variant="outlined" startIcon={<FavoriteBorder />} className={classes.favAndCart}>
            Favorito
         </Button>

        <Button variant="contained" endIcon={<ShoppingCartIcon />}>
           Añadir al carrito
         </Button>
      </Box>

      <Box sx={{ m: 1 }}>
        <TableSizes/>
      </Box>
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