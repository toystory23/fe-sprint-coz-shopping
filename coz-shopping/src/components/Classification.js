import total from '../imgs/total.png';
import content from '../imgs/products.png';
import category from '../imgs/category.png';
import exhibition from '../imgs/Exhibition.png';
import brand from '../imgs/brand.png';
import { useState } from 'react';

export default function Classification({ products, handleFilter }) {
  const [state, setState] = useState('');

  const handleState = (e) => {
    const selectedState = e.target.alt;
    setState(selectedState);

    if (selectedState === 'Total') {
      handleFilter(products);
    } else {
      const filteredProducts = products.filter((product) => product.type === selectedState);
      handleFilter(filteredProducts);
    }
  };

  return (
    <div className="item_filter">
      <div className="Buttons">
        <div className="button">
          <img alt="Total" src={total} onClick={handleState} />
          전체
        </div>
        <div className="button">
          <img alt="Product" src={content} onClick={handleState} />
          상품
        </div>
        <div className="button">
          <img alt="Category" src={category} onClick={handleState} />
          카테고리
        </div>
        <div className="button">
          <img alt="Exhibition" src={exhibition} onClick={handleState} />
          기획전
        </div>
        <div className="button">
          <img alt="Brand" src={brand} onClick={handleState} />
          브랜드
        </div>
      </div>
    </div>
  );
}
