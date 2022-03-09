import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";
import { Box, Typography } from '@mui/material';

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
    </Box>
  );
};
export default RightDetails;
