import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/action";
import { useNavigate } from "react-router";
import Addbutton from "../AddButton/Addbutton";

export default function ProductItem({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.authReducer.user?.userId);

  const handleAddToCart = (product) => {
    // Add the userId property to the product object
    const productWithUserId = { ...product, userId };
    console.log(productWithUserId, userId, "product");
    dispatch(addToCart(productWithUserId));
    navigate("/user/AddToCart");
    console.log("object656565", productWithUserId, userId);
  };

  // const handleAddToCart = (product) => {
  //   console.log(product, userId, "product");
  //   dispatch(addToCart(product, userId));
  //   navigate("/user/AddToCart");
  //   console.log("object656565", product, userId);
  // };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
              <Addbutton product={product} onclick={handleAddToCart} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
