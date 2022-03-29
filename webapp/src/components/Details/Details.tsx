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

const Details = () => {
    //Obtenemos los detalles
    const { id } = useParams<keyof ProductDets>() as unknown as ProductDets;
    const [product, setProduct] = useState<TypeProduct>();

    const getDetails = async (id:string ) =>{ 
      if (product == null) setProduct(await getProduct(id) as TypeProduct);
    };

    useEffect(() => { getDetails(id + ""); }, []);
    
    return (
      <div>
        <Nav />
        <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        >
          <LeftDetails/>
          <RightDetails/>
        </Stack>
        <Footer/>
      </div>
    );
  };
  export default Details;