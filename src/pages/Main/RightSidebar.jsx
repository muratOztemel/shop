import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import { removeFromCart, updateCartTotal } from "../../redux/slices/cartSlice";

const RightSidebar = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state) => state.cart);
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart({ id: product._id }));
    dispatch(updateCartTotal(-product.price * product.quantity));
  };

  return (
    <div className="cart-wrapper border md:-mt-6 md:-mr-[25px] md:pb-0 pb-12">
      <div className="cart flex flex-col h-full overflow-y-auto max-h-[calc(100vh_-_90px)]">
        <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
          Sepetteki Ürünler
        </h2>
        <ul className="cart-items flex flex-col gap-y-3 mt-2 overflow-y-auto px-2">
          {cartItems.length > 0
            ? cartItems.map((item, index) => {
                const product = products.find((p) => p._id === item.id);
                if (!product) {
                  return (
                    <li key={index} className="cart-item">
                      Ürün bilgisi yüklenemedi.
                    </li>
                  );
                }
                return (
                  <li
                    key={index}
                    className="cart-item flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-16 h-16 object-cover cursor-pointer"
                      />
                      <div className="flex flex-col">
                        <b>{product.title}</b>
                        <span>
                          {product.price}₺ x {item.quantity}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(product)}
                      className="text-red-500 hover:text-red-700">
                      Çıkar
                    </button>
                  </li>
                );
              })
            : "Sepette Hiç Ürün Yok..."}
        </ul>
        <div className="cart-totals mt-auto">
          <div className="border-t border-b mt-4">
            <div className="p-2 flex justify-between">
              <b>Ara Toplam</b>
              <span>{total}₺</span>
            </div>
          </div>
          <div className="p-2">
            <button
              type="button"
              className="ant-btn css-1amspvc ant-btn-primary ant-btn-lg w-full">
              Sipariş Oluştur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
