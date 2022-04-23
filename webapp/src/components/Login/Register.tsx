import React, { useReducer, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Nav from '../Fragments/Nav';
import { User } from '../../shared/shareddtypes';
import { addUser, getUser } from '../../api/api';
import { Alert, Snackbar } from '@mui/material';

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

type Notification = {
  message: string;
}

const Register = () => {
  const classes = useStyles();
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setCPassword]=useState("");

  const [notificationStatus, setNotificationStatus] = useState(false);
  const [notification, setNotification] = useState<Notification>({message:''});

  async function addUserToSession(){
    if(confirmpassword==password){
      const newUser:User = {username:userName, password:password};
      let checkUser: User|null = (await getUser(userName, password));
      // Comprobamos que el usuario no exista ya
      if(checkUser==null) {
        // Comprobamos que se añada el usuario correctamente
        let add:boolean = (await addUser(newUser));
        if(add){
          setNotificationStatus(true);
          const item = {"username":userName,"password":password};
          // Almacenamos el usuario en sesión
          sessionStorage.setItem('user',JSON.stringify(item));
          setNotificationStatus(true);
          setNotification({
            message:'Usuario correctamente añadido'
          });
        }
        else{
          setNotificationStatus(true);
          setNotification({
            message:'Credenciales inválidas'
          });
        }
      }
      else{
        setNotificationStatus(true);
        setNotification({
          message:'El usuario ya existe'
        });
      }
    }
    else{
      setNotificationStatus(true);
      setNotification({
        message:'Las contraseñas no coinciden'
      });
    }    
    window.location.reload();
  }
  return (
    <><Nav />
    <form className={classes.container} noValidate autoComplete="on" name="registro">
          <Card className={classes.card}>
              <CardHeader className={classes.header} title="Registro" />
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
                      <TextField
                          fullWidth
                          id="check password"
                          type="password"
                          label="Check Password"
                          placeholder=" Check Password"
                          margin="normal" 
                          onChange={e=>setCPassword(e.target.value)}/>
                  </div>
              </CardContent>
              <CardActions>
                  <Button
                      onClick={addUserToSession}
                      variant="contained"
                      size="large"
                      color="primary"
                      className={classes.loginBtn}
                      >
                      Registrarse
                  </Button>

              </CardActions>
          </Card>
      </form>
      <Snackbar open={notificationStatus} autoHideDuration={3000} onClose={()=>{setNotificationStatus(false)}}>
        <Alert sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Register;