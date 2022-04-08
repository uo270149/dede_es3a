import { Button, Card, CardContent, CardHeader, Container, FormGroup, Link, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { LoginButton} from "@inrupt/solid-ui-react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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

function FinishBuying(){
    alert("Compra realizada");
}
const FormLogIn = () => {
  const classes = useStyles();
  const [idp, setIdp] = useState("https://inrupt.net");
  const [currentUrl, setCurrentUrl] = useState("https://localhost:3000");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [setCurrentUrl]);

  return (
    <form className={classes.container} noValidate autoComplete="on">
    <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        <CardContent>
      <Container fixed>
      <FormGroup>
        <TextField
          label="Identity Provider"
          placeholder="Identity Provider"
          type="url"
          value={idp}
          onChange={(e) => setIdp(e.target.value)}
          InputProps={{
            endAdornment: (
              <LoginButton oidcIssuer={idp} redirectUrl={"http://localhost:3000/"}>
                <Button variant="contained" color="primary"  onClick={FinishBuying}>
                  Login
                </Button>
              </LoginButton>
            ),
          }}
        />
      </FormGroup>
      <Typography variant="body1" component="p" id="help">
            <Link href="https://inrupt.net/register" margin={'30%'} > ¿No tienes una cuenta? Regístrate aqui</Link>
          </Typography>
    </Container>
   </CardContent>
    </Card>
    </form>
  );
}
export default FormLogIn;