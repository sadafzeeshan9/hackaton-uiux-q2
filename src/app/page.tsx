
import Category from "./components/category";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Product from "./components/products";
import Sale from "./components/sale";



export default function Home() {
  return (
    <div>
      <Hero />
      <Sale />
      <Category />
      <Product />
      
      <Footer />
    </div>
  );
}
