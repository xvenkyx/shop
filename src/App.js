import "./App.css";
import Footer from "./Customer/Components/Footer/Footer.jsx";
import Navigation from "./Customer/Components/Navigation/Navigation.jsx";
import Product from "./Customer/Components/Product/Product/Product.jsx";
import HomePage from "./Pages/HomePage.jsx";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
