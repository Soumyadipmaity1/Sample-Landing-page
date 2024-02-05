import "./App.css";
import Footer from  "./pages/landing/components/footer"
import Login from "./pages/loginpages/loginpage"
import Offer from "./pages/landing/components/offer"
import Loginpart from "./pages/landing/components/loginpart"
import ImageSlider from "./pages/landing/components/imageslider";

function App() {
  return (
  
    <div className="bg-black" >
      
 <Loginpart/>
 <ImageSlider/>
  <div className="flex justify-center px-60 p-16 bg-black"> <Offer/></div>
  <Footer/>
</div>
  );
}

export default App;
