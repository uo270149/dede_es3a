import React, { useReducer, useEffect, useRef, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { Link, Typography } from "@mui/material";
import Nav from '../Fragments/Nav';
import { User } from '../../shared/shareddtypes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
      marginTop: theme.spacing(20)
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
      marginTop: theme.spacing(10)
    }
  })
);




const Login = () => {
  const classes = useStyles();
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  
  function addUserToSession(){
    //IR A LA BASE DE DATOS
    let item = {"username":userName,"password":password, "cart":sessionStorage.getItem('cart') as string};
    sessionStorage.setItem('user',JSON.stringify(item));
  }
  return (
    <><Nav />
    <form className={classes.container} noValidate autoComplete="on">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Loggeate!" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal" 
              onChange={e=>setUserName(e.target.value)}/>
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal" 
              onChange={e=>setPassword(e.target.value)}/>
          </div>
        </CardContent>
        <CardActions>
          <Button
            onClick={addUserToSession}
            variant="contained"
            size="large"
            color="primary"
            className={classes.loginBtn}
            href="http://localhost:3000/">
            Login
          </Button>

        </CardActions>
        <Typography variant="body1" component="p" id="help">
          <Link href="/Register" margin={'10%'}> ¿No tienes una cuenta? Regístrate aqui</Link>
        </Typography>
      </Card>
    </form></>
  );
}

export default Login;