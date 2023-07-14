export default function Bookmarklist({ data }) {
  return (
    <div className="bookmarklist_container">
      <img className="product_img" alt={data.title} src={data.image_url ? data.image_url : data.brand_image_url} />
    </div>
  );
}
