import { Link } from "react"
export default function NavBar(){
  return(
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-0 bg-white border-bottom shadow-sm">
  <h1 class="my-0 mr-md-auto font-weight-normal py-0">Fleeks</h1>
  <nav class="my-2 my-md-0 mr-md-3">
    {/* <a class="p-2 text-dark" href="#">Carts</a> */}
    {/* <Link to="./Carts">Carts</Link> */}
    <a class="p-2 text-dark" href="#">Support</a>
  </nav>
  {/* <Link class="btn btn-outline-primary" to="./Signup">Log in</Link>. */}
  </div>
    
  )
}