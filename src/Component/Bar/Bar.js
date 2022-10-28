import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Electronic from "../Electronic/Electronic";
import Men from "../Men/Men";
import Women from "../Women/Women";
import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";
import "./Bar.css"

export default function Bar (){
    const [products, setProducts] = useState([])
   console.log(products);

  const url = "https://fakestoreapi.com/products/category/jewelery"
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
  



     let product = products.map((product,index)=>{
        return   <div class="col-md-3 jewelry" key={index}>
        <div class="card mb-4 shadow-sm movie-card">
            <img class="j-image" loading="lazy" src={product.image}/>
            <p></p>
            <div class="card-body j-card-t">
                ${product.price}
            <h5 class="card-text ">{product.title}</h5>
            <h6 class="card-text"><small></small></h6>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                {/* <button type="button" class="btn btn-sm btn-outline-secondary" id="add" onClick={addTOCart}>add</button> */}
                <button type="button" class="btn btn-sm btn-outline-secondary" id = "like">like</button>
                </div>
                <small class="text-muted">Ratings: {product.rating.rate}</small>
           </div>
            </div>
        </div>
        </div>
    
         
            
     })
    return(
     <>
      <Nav/>
         <div className="mx-0 whole-bar bg-white ">
          <marquee className="marquee text-white">Welcome Fleekers || Your #1 online shopping store so make your orders today ||
           use Coupon code "OVER50" on orders over $50 to get your products delivered for FREE!!!!</marquee>
            
            <div className="search-bar bg-warning pb-5 px-5 pt-0">
              <div>
                <h2 className="text-white pt-2 pb-0">FREE SHIPPING</h2>
                <h4 className="text-white pb-3">ON ORDERS OVER $50 - USE COUPON CODE OVER50</h4>
                <div className="d-flex justify-content-between align-items-center pb-4">
                <span><button className="btn btn-outline-light">jewelery</button></span>
                <span><button className="btn btn-outline-light">Electronic</button></span>
                <span><button className="btn btn-outline-light">Men's wear</button></span>
                <span><button className="btn btn-outline-light">Women's Wear</button></span>
                </div>
              </div>
            <input type="text" class ="form-control " placeholder="search products .."/>
            </div>
            <div class="album row py-5 bg-white jewel">
           <div class="container">
            <h2 className="text-dark">jeweleries</h2>
           <div class="row load-bottom" id="movies">
            <div className="row movies">{product}</div>
            </div>
           </div>
            </div>
            <Electronic />
         <Men />
         <Women />
           
            </div>
            </>

        
        
         
    )
}