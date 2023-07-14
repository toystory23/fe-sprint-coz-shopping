import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products`)
      .then((res) => res.json())
      .then((data) => {
        data.map((data) => {
          data.bookmark = false;
          return data;
        });
        setProducts(data);
      });
  }, []);

  return products;
}
