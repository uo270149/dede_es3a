import List from './List';
import ShoesView from './Shoes';
import {useState, useEffect} from 'react';
import { TypeProduct } from '../../shared/shareddtypes';
import { getProducts } from '../../api/api';
import { useSession } from '@inrupt/solid-ui-react';

const Home = () => {
  // Recarga de la lista de productos para el /home
  const { session } = useSession();
  const { webId } = session.info;
  const [products, setProducts] = useState<TypeProduct[]>([]);
  const reloadItems = async () => {
    setProducts(await getProducts());
    
    // Inicializacion de carrito
    if(sessionStorage.getItem('cart') == null){
      sessionStorage.setItem('cart', JSON.stringify([]));
    }
  }
  useEffect(()=>{
    reloadItems();
  },[]);
    
  console.log(products);
    return (
      <div>
        <ShoesView products={products}/>
        <List/>
      </div>
    );
  };
  export default Home;