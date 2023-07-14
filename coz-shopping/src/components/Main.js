import { useEffect, useState } from 'react';
import Bookmarklist from './Bookmarklist';
import Itemlist from './Itemlist';

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4
    `)
      .then((res) => res.json())
      .then((data) => {
        data.map((data) => {
          data.bookmark = false;
        });
        setProducts(data);
      });
  }, []);
  console.log(products);
  return (
    <main>
      <div>
        <div className="text">아이템 리스트</div>
        <section className="itemlist">
          {products.map((product) => {
            return (
              <div className="item_container" key={product.id}>
                <Itemlist title={product.title} image_url={product.image_url} />
              </div>
            );
          })}
        </section>
      </div>
      <div>
        <div className="text">북마크 리스트</div>
        <section className="bookmarklist">
          {products.map((product) => {
            return (
              <div className="bookmark_container" key={product.id}>
                <Bookmarklist title={product.title} image_url={product.image_url} />
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
