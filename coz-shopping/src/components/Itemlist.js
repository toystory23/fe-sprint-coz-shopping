import { useEffect, useRef, useState } from 'react';

export default function Itemlist({ data }) {
  const formatNumber = (price) => {
    return Number(price).toLocaleString();
  };
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="itemlist_container">
      <img
        className="product_img"
        alt={data.title ? data.title : data.brand_name}
        src={data.image_url ? data.image_url : data.brand_image_url}
        onClick={openModal}
      />
      {showModal && (
        <div className="modal">
          <div className="modal_content" ref={modalRef}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              className="modal_image"
              src={data.image_url ? data.image_url : data.brand_image_url}
              alt={data.title ? data.title : data.brand_name}
            />
          </div>
        </div>
      )}
      <div className="name">
        <span className="bold">
          {!data.title ? data.brand_name : data.type === 'Category' ? `#${data.title}` : data.title}
        </span>
        <span>
          {data.discountPercentage ? `${data.discountPercentage}%` : data.type === 'Brand' ? '관심고객수' : null}
        </span>
      </div>
      <div className="price">{data.type === 'Product' ? `${formatNumber(data.price)}원` : null}</div>
      <div className="exhibition">{data.type === 'Exhibition' ? data.sub_title : null}</div>
      <div className="brand">{data.type === 'Brand' ? formatNumber(data.follower) : null}</div>
    </div>
  );
}
