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
import { useParams } from "react-router-dom";

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

type ProductDets = {
  id: string;
};

export default function Details():JSX.Element {
  //Obtenemos los detalles
  //const  id  = useParams<keyof ProductDets>();
  const [product, setProduct] = useState<TypeProduct>();

  async function cargar(id:string ) { 
    const prod = await getProduct(id);
    var result; 
    if(prod){
      result = prod;
    }
    else{
      result = {
        id:id,
        nombre:'Unknown',
        precio:0,
        imagen:''
      }
    } 
    setProduct(result as TypeProduct);
  };

  //cargar(id);

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
          <RightDetails product={product}/>
        </Stack>
        <Footer/>
      </div>
    );
  }
}