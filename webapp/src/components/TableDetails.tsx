import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";

const useStyles = makeStyles({
  sizes: {
    marginLeft:'34%',
    marginTop:'100px',
    
  },
  container:{
   height: '90vh',
   width: '90vw',
   
   display: 'grid',
   gridTemplateAreas: `'left right'`,
   gridTemplateRows: '1fr 3fr',
   gridTemplateColumns: '1fr 2fr',
},
left: {
  gridArea: 'left'
  
},right: {
  gridArea: 'right'
  
}
});

const TableDetails = () => {
    return (
      <div>
      <ButtonGroup variant="outlined" aria-label="tallas">
          <Button>36</Button>
          <Button>37</Button>
          <Button>38</Button>
          <Button>39</Button>
          <Button>40</Button>
      </ButtonGroup>

      <Button variant="outlined" startIcon={<FavoriteBorder />}>
        Favorito
      </Button>
      </div>
    );
  };
export default TableDetails;
