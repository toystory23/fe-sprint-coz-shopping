import Bookmarklist from './Bookmarklist';
import Itemlist from './Itemlist';

export default function Main({ products, bookmarkList }) {
  return (
    <main>
      <div>
        <div className="text">상품 리스트</div>
        <section className="itemlist">
          {products.slice(0, 4).map((product) => {
            return (
              <div className="item_container" key={product.id}>
                <Itemlist data={product} />
              </div>
            );
          })}
        </section>
      </div>
      <div>
        <div className="text">북마크 리스트</div>
        <section className="bookmarklist">
          {bookmarkList.slice(0, 4).map((product) => {
            return (
              <div className="bookmark_container" key={product.id}>
                <Bookmarklist data={product} />
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
