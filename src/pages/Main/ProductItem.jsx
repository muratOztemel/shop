import { useDispatch } from "react-redux";
import {
  addToCart,
  updateCartTotal,
  updateCartId,
} from "../../redux/slices/cartSlice";

const ProductItem = ({ _id, title, price, img }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: _id, title, price, img }));
    dispatch(updateCartTotal(price));
    dispatch(updateCartId(_id));
  };

  return (
    <div className="bg-white border hover:shadow-xl cursor-pointer transition-all select-none">
      <div className="product-img" onClick={handleAddToCart}>
        <img
          src={img}
          alt={title}
          className="w-full h-28 object-cover border-b"
        />
      </div>
      <div className="product-info flex flex-col p-3">
        <span className="product-title font-bold">{title}</span>
        <span className="product-price">{price}₺</span>
      </div>
    </div>
  );
};

export default ProductItem;
