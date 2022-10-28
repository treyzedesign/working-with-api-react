import { useState, useEffect } from "react"
export default function Electronic(){
    const [products, setProducts] = useState([])
    console.log(products);
 
   const url = "https://fakestoreapi.com/products/category/electronics"
   const fetchProducts = async (url)=>{
     try{
       const products = await fetch(url);
       const result = await products.json();
       console.log(result)
       setProducts(result)
     }catch (error){
 
     }
   }
   useEffect(() => {
     fetchProducts(url);
   }, []);
   let citrus = products.slice(0, -2)
   let product = citrus.map((product, index)=>{
    return  <div class="col-md-3 jewelry" key={index}>
    <div class="card mb-4 shadow-sm movie-card">
        <img class="j-elect" loading="lazy" src={product.image}/>
        <p></p>
        <div class="card-body j-card-e">
            ${product.price}
        <h5 class="card-text ">{product.title}</h5>
        <h6 class="card-text"><small></small></h6>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" id="add">view</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" id = "like">like</button>
            </div>
            <small class="text-muted">Ratings: {product.rating.rate}</small>
       </div>
        </div>
    </div>
    </div>
   })

    return(
        <div class="album row py-5 bg-white jewel">
        <div class="container">
         <h2 className="text-dark-grey">Electronics</h2>
        <div class="row load-bottom" id="movies">
         <div className="row movies">{product}</div>
         </div>
        </div>
         </div>
         
    )
}