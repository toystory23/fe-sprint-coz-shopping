import Bookmarklist from './Bookmarklist';
import Itemlist from './Itemlist';

export default function Main() {
  return (
    <main>
      <div>상품 리스트</div>
      <Itemlist />
      <div>북마크 리스트</div>
      <Bookmarklist />
    </main>
  );
}
