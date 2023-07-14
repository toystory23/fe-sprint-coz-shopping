export default function Bookmarklist({ title, image_url }) {
  return (
    <div className="bookmark_container">
      <img className="product_img" alt={title} src={image_url} />
    </div>
  );
}
