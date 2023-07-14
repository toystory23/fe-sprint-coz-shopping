import { useEffect, useState } from 'react';

export default function BookmarkList() {
  const [bookmarkList, setBookmarkList] = useState([]);

  useEffect(() => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products`)
      .then((res) => res.json())
      .then((data) => {
        data.map((data) => {
          data.bookmark = false;
          return data;
        });
        setBookmarkList(data);
      });
  }, []);

  return bookmarkList;
}
