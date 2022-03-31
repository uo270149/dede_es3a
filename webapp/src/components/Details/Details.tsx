import React from 'react';
import Nav from '../Fragments/Nav';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Fragments/Footer';
import { Divider, Stack } from '@mui/material';
import LeftDetails from './LeftDetails';
import RightDetails from './RightDetails';
import {useState, useEffect} from 'react';
import { TypeProduct } from '../../shared/shareddtypes';
import { getProduct } from '../../api/api';

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

});

export default function Details():JSX.Element {
  //Obtenemos la parte de parametros de la url
  const querystring = window.location.search;
  const params = new URLSearchParams(querystring)
  
  //Obtenemos la id del producto
  const id = params.get('id') as string;
  
  const [product, setProduct] = useState<TypeProduct>();
  const reloadDetails = async () => {
    var prod = await getProduct(id);
    if(prod!=undefined){
      setProduct(prod);
    }
  }
  useEffect(()=>{
    // De esta forma evitamos que la pagina se este recargando permanentemente
    reloadDetails();    
  },[]);

  if(typeof product === "undefined"){
    return (
      <div>
        <Nav />
        <Footer/>
      </div>
    );
  } else {
    return (
      <div>
        <Nav />
        <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        >
          <LeftDetails/>
          <RightDetails product={product as unknown as Array<TypeProduct>}/>
        </Stack>
        <Footer/>
      </div>
    );
  }
}