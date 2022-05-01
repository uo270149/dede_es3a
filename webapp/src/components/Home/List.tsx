import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const useStyles = makeStyles({
    sizes: {
      marginLeft:'34%',
      marginTop:'100px', 
    },  
  });
  
  function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
  export default function CustomImageList() {
    const classes = useStyles();
    return (
      <ImageList
        sx={{
          width: '30%',
          height: '10%',
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: 'translateZ(0)',
        }}
        rowHeight={200}
        gap={1}
        className={classes.sizes}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;
  
          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    );
  }
  
const itemData = [
  {
    img: 'https://i.imgur.com/cyhVYVf.jpg',
    title: 'Pokemon',
    featured: true,
  },
  {
    img: 'https://i.imgur.com/VwtfVgU.jpg',
    title: 'Zapatillas Baby Yoda',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://i.imgur.com/1jWaZbp.jpg',
    title: 'Style',
    author: '@helloimnik',
  },
  {
    img: 'https://i.imgur.com/d864pTb.jpg',
    title: 'Caña Alta',
    author: '@nolanissac',
  },
  {
    img: 'https://i.imgur.com/C4fhmzn.jpg',
    title: 'Lo último',
    author: '@hjrc33',
  },
  {
    img: 'https://i.imgur.com/nZGVoea.jpg',
    title: 'Casual',
    author: '@arwinneil',
    featured: true,
  },
];
  
  