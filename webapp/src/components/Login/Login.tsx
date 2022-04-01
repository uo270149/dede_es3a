import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import { LoginButton, useSession } from "@inrupt/solid-ui-react";
import { Autocomplete, Button, Card, CardHeader, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { handleIncomingRedirect,  onSessionRestore } from "@inrupt/solid-client-authn-browser";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

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

const authOptions = {
  clientName: "DedEx: Decentralized Delivery",
  };
  

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [oidcIssuer, setOidcIssuer] = useState("https://broker.pod.inrupt.com/");
  const providers = [{ displayName: "Broker Inrupt", url: "https://broker.pod.inrupt.com/" }, { displayName: "Inrupt", url: "https://inrupt.net/" }]
  const { session } = useSession();

  onSessionRestore((url) => {
    if (session.info.isLoggedIn) {
      navigate(url);
    }
  });

  useEffect(() => {
    handleIncomingRedirect({
      restorePreviousSession: true
    }).then(() => {
      if (session.info.isLoggedIn) {
        localStorage.setItem("sessionID", session.info.sessionId);
        navigate("/profile");
      }
    })
  });

  return (
    <form className={classes.container} noValidate autoComplete="on">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        <CardContent>
        <>
          <Typography id="solidLogin" variant="h3">
            Login
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-providers"
            options={providers}
            renderInput={(params) => <TextField {...params} label="Provider:" />}
            getOptionLabel={(option) => option.displayName}
            onChange={(e, value) => {
              if (value != null)
                setOidcIssuer(value.url)
            }}
          />
          <Grid id="solidButtons" container>
            <Grid item>
              <LoginButton
                oidcIssuer={oidcIssuer}
                redirectUrl="/"
                authOptions={authOptions}>
                <Button id="loginButton" data-testid="button" color="primary" variant="contained">Connect</Button>
              </LoginButton>
            </Grid>
            <Grid item>
              <Button href="/" variant="contained" id="cancelButton" >Cancel</Button>
            </Grid>
          </Grid>
          <Typography variant="body1" component="p" id="help">
            <Link href="https://inrupt.net/register" margin={'30%'} > ¿No tienes una cuenta? Regístrate aqui</Link>
          </Typography>
        </>
    </CardContent>
    </Card>
    </form>
  );
}

export default Login;