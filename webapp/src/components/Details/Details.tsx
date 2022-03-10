import React from 'react';
import Nav from './Nav';
import RightDetails from './RightDetails';
import LeftDetails from './LeftDetails';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import { Divider, Stack } from '@mui/material';

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

const Details = () => {
  const classes = useStyles();
    
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