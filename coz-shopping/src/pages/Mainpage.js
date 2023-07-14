import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Products from '../db/products';
import BookmarkList from '../db/bookmarkList';

export default function Mainpage() {
  return (
    <>
      <Header />
      <Main products={Products()} bookmarkList={BookmarkList()} />
      <Footer />
    </>
  );
}
