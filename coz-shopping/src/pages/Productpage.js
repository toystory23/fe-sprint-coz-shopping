import Classification from '../components/Classification';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Itemlist from '../components/Itemlist';
import Products from '../db/products';
import { useState } from 'react';

export default function Productpage() {
  const allProducts = Products();
  const [products, setProducts] = useState(allProducts);
  console.log(allProducts);
  const handleFilter = (filteredProducts) => {
    setProducts(filteredProducts);
  };
  return (
    <>
      <Header />
      <Classification products={allProducts} handleFilter={handleFilter} />
      <section className="items">
        {products.map((item) => {
          return (
            <div className="item_container" key={item.id}>
              <Itemlist data={item} />
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
