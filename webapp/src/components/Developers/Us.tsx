import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Us = () => {
    return (
        <>
        <List sx={{  marginLeft:'35%',
                marginRight:'50%',
                marginTop: '10%',
                width: '200%', 
                maxWidth: 500, 
                bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar> <FormatListBulletedIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary= {"Andrea Auñón Antúnez"}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                uo277876@uniovi.es
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar> <FormatListBulletedIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={"Javier Lopez de Juan"}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                uo271447@uniovi.es
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
         <Avatar> <FormatListBulletedIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={"Alejandro Del Gallego Moro"}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                uo271411@uniovi.es
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </>
    );
}
export default Us;