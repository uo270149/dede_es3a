import { Divider, Stack } from '@mui/material';
import ShoesCart from './ShoesCart';
import CartButons from './CartButons';

const Cart = () => {
    return (
      <div>
        <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        >
            <ShoesCart/>
            <CartButons/>
        </Stack>
      </div>   
    );
  };
  export default Cart;
