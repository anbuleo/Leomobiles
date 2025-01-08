
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoadingPage from "./pages/LoadingPage"
import ErrorPage from "./pages/ErrorPage"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import OtpPage from "./pages/OtpPage"
import CreateProduct from "./pages/CreateProduct"
import EditProduct from "./pages/EditProduct"
import ViewProducts from "./pages/ViewProducts"
import ViewCart from "./pages/ViewCart"
import ListAllProductTable from "./pages/ListAllProductTable"
import PrivateRoute from "./common/ProductedRoute"
import Billing from "./pages/Billing"
import Paybiller from "./pages/Paybiller"
import Search from "./pages/Search"
import NavBar from "./components/NavBar"
import SliderSection from "./components/SliderSection"
import Footer from "./components/Footer"
import Admin from "./pages/Admin"


function App() {

  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/signin" element={<SignIn/>} />
      <Route path="/" element={<PrivateRoute><Home /><Footer /></PrivateRoute>} />
      <Route path="/home" element={<PrivateRoute><Home /><Footer /></PrivateRoute>} />
      <Route path="/billing" element={<PrivateRoute><Billing /></PrivateRoute>} />
      <Route path="/paypreview" element={<PrivateRoute><Paybiller /></PrivateRoute>} />
      <Route path="/search/:id" element={<PrivateRoute> <NavBar/>
       <Search /></PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute> <NavBar/>
       <Admin /><Footer /></PrivateRoute>} />
      
      
      <Route path="/otp" element={<OtpPage/>} />
      <Route path="/createproduct" element={<PrivateRoute><NavBar/><CreateProduct /><Footer /></PrivateRoute>} />
      <Route path='/editproduct/:id' element = {<EditProduct />} />
      <Route path = '/viewproduct/:id' element = {<ViewProducts />} />
      <Route path = '/viewcart/:id' element = {<ViewCart />} />
      <Route path = '/listallproducttable' element = {<ListAllProductTable />} />

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
