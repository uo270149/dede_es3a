import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import { Button, TextField, FormGroup, Container } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex', 
      flexWrap: 'wrap',
      width: '60%',
      height:'60%',
      marginTop:'10%',
      marginLeft:'30%',
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10),
      width: '70%',
      height:''
    },
    
   
  })
);

const Login = () => {
  const classes = useStyles();
  const [idpr, setIdpr] = useState("https://inrupt.net");
  const [dedeurl, setDedeUrl] = useState("http://localhost:3000/");

    useEffect(() => {
      setDedeUrl(window.location.href);
    }, [setDedeUrl]);
  
  return (
    <form className={classes.container} noValidate autoComplete="on">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        <CardContent>
        <FormGroup>
        <TextField
          label="Provider"
          placeholder="Provider"
          type="url"
          value={idpr}
          onChange={(e) => setIdpr(e.target.value)}
          InputProps={{
            endAdornment: (
              <LoginButton oidcIssuer={idpr} redirectUrl={dedeurl}>
                <Button variant="contained" color="primary" href={"http://localhost:3000/"}>
                  Login
                  </Button>
              </LoginButton>
            ),
          }}
        />
      </FormGroup>
        <Link href="https://inrupt.net/register" margin={'30%'} > No tienes una cuenta? Regístrate aqui</Link>
        </CardContent>
        
      </Card>
    </form>
  );
}

export default Login;