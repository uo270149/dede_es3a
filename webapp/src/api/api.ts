import {User, Product, TypeProduct} from '../shared/shareddtypes';

export async function addUser(user:User):Promise<boolean>{
    const apiEndPoint= 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':user.name, 'email':user.email})
      });
    if (response.status===200)
      return true;
    else
      return false;
}

export async function getUsers():Promise<User[]>{
    const apiEndPoint= 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function getProducts(): Promise<TypeProduct[]> {
  const response = await fetch("http://localhost:5000/products/list");
  return response.json();
}

export async function getProduct(productId : string): Promise<TypeProduct> {
  const apiPetition = "http://localhost:5000/productos/detalles/" + productId;
  const response = await fetch(apiPetition);
  return response.json();
}