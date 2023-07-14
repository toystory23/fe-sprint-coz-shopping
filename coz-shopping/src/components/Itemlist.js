export default function Itemlist({ title, image_url }) {
  return (
    <div className="itemlist_container">
      <img className="product_img" alt={title} src={image_url} />
    </div>
  );
}
