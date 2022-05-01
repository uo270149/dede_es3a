import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia} from "@mui/material";
import { TypeProduct } from '../../shared/shareddtypes';
type parsedProduct = {
    product: TypeProduct[];
  };
  const useStyles = makeStyles({
    sizes: {
      width: '40%',
      height: '30%'
    
  } 
  });
const LeftDetails = (parsed:parsedProduct) => {
    const classes = useStyles();
      return (
            <Card className={classes.sizes}>
              <CardMedia
                component="img"
                alt = "imagen1"
                image={parsed.product[0].imagen}/>
                </Card>
      );
    };
    export default LeftDetails;
    