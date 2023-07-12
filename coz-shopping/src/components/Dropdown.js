import { Link } from 'react-router-dom';

export default function Dropdown({ dropdownRef }) {
  return (
    <div className="dropdown" ref={dropdownRef}>
      <div alt="button"> OOO님, 안녕하세요!</div>
      <div className="changepage" alt="button">
        <Link to="/products/list"> 🎁 상품리스트 페이지</Link>
      </div>
      <div className="changepage" alt="button">
        <Link to="/bookmark"> &#x2B50; 북마크 페이지</Link>
      </div>
    </div>
  );
}
