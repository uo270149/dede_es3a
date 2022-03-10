import List from '../Home/List';
import Nav from '../Fragments/Nav';
import Shoes from '../Home/Shoes';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Fragments/Footer';
import { Divider, Stack } from '@mui/material';
import ShoesCart from './ShoesCart';
import CartButons from './CartButons';
const useStyles = makeStyles({
  sizes: {
    marginLeft:'34%',
    marginTop:'100px',
    
  },
  container:{
   height: '90vh',
   width: '90vw',
   
   display: 'grid',
   gridTemplateAreas: `'header header header'
                        'left main right'
                        'footer footer footer'`,
   gridTemplateRows: '1fr 3fr 1fr',
   gridTemplateColumns: '1fr 2fr 1fr',
},
main: {
 gridArea: 'main',
  
},
footer: {
  gridArea: 'footer'
  
},
header: {
  gridArea: 'header'
  
},
left: {
  gridArea: 'left'
  
},right: {
  gridArea: 'right'
  
}

    


});
const Carrito = () => {
  const classes = useStyles();
    
    return (
      <div>
          <Nav/>
          <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        >
            <ShoesCart/>
            <CartButons/>
        </Stack>
        <Footer/>
      </div>
         
        
      
    );
  };
  export default Carrito;
