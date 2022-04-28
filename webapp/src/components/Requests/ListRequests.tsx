import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { getOrders } from '../../api/api';
import { TypeOrder } from '../../shared/shareddtypes';

const info = [
  {
    name: "pedido1",
    precioFinal: String(50),
  },
  {
    name: "pedido2",
    precioFinal: String(60),
  },
  {
    name: "pedido3",
    precioFinal: String(70),
  },
]

const ListRequests = () => {
  const [pedidos, setPedidos]=React.useState<TypeOrder[]>([]);
  const refreshPedidos = async () => {
    setPedidos(await getOrders(sessionStorage.getItem('user') as string));
  }
  React.useEffect(()=>{
    refreshPedidos();
  },[]);

  return (
    <List sx={{  marginLeft:'35%',
                marginRight:'50%',
                marginTop: '10%',
                width: '200%', 
                maxWidth: 500, 
                bgcolor: 'background.paper' }}>
      {pedidos.map(item =>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar> <FormatListBulletedIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary= {item.usuario}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Precio del pedido: {item.precio}
              </Typography>
              <Typography>
                {item.contenido.map(articulo=>articulo + ' || ')}
              </Typography>
            </React.Fragment>
          }
        />
        </ListItem>
      )}
    </List>
  );
}
export default ListRequests;