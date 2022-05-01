export
function coordenadas(address: string){
    const axios = require("axios");
    return axios
      .get(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        address +
          ".json?access_token=" + "pk.eyJ1IjoidW8yNzE0NDciLCJhIjoiY2wyN2MxdDdwMHMxcTNkbnAyd2x3ajFpaiJ9.4meULCmzm3oog7dC-22EvQ"
      )
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        return error;
      });
  }
  export
  async function distancias(address: string){
    if(address !== ""){
      const coord= await coordenadas(address);
      let earthRadiusInKm:number = 6371;

        var latitudAlmacen =43.354805679135595
        var longitudAlmacen= -5.8513295460816295
        let lat = coord.features[0].geometry.coordinates[1];
        let lon = coord.features[0].geometry.coordinates[0];
        let dLat : number = gradosARadianes(lat-latitudAlmacen);
        let dLon : number = gradosARadianes(lon-longitudAlmacen);

        latitudAlmacen = gradosARadianes(latitudAlmacen);
        lat = gradosARadianes(lat);

        let a : number = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(latitudAlmacen) * Math.cos(lat); 
        let c : number  = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        return Math.round(earthRadiusInKm * c*0.3*100)/100
    }
    else return 0;
  }
  
function gradosARadianes(degrees: number) : number {
    return degrees * Math.PI / 180;
}

  export
  async function calcularValorGastosdeEnvío(address: string){
    var x=0
    x= Number(sessionStorage.getItem('precioCarrito'));
    var d= await distancias(address);
    return Number((x+d).toFixed(2));
  }
