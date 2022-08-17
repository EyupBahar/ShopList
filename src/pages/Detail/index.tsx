import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../features/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Detail = () => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  console.log("itemId >", itemId);
  const { selectedProduct } = useAppSelector((state) => state.products);
  console.log("selectedProduct", selectedProduct);

  useEffect(() => {
    dispatch(getProduct(itemId));
  }, [itemId, dispatch]);

  return (
    <div className="flex flex-col xl:px-20 max-w-6xl mx-auto mt-12 divide-y divide-black">
      {selectedProduct && (
        <>
          {" "}
          <div className="flex flex-col sm:flex-row gap-x-8 pb-10">
            <img
              className="bg-white w-60 p-8 rounded shadow-lg"
              src={selectedProduct?.product?.avatar}
              alt="device"
            />

            <div className="flex flex-col justify-between items-start pt-4 sm:pt-0">
              <div>
                <h2 className="text-3xl tracking-wider font-semibold lowercase first-letter:uppercase">
                  {selectedProduct?.product?.name}
                </h2>
                <p className="text-left text-gray-500 italic">
                  {selectedProduct?.product?.category}
                </p>
              </div>
              <p className="text-base">$ {selectedProduct?.product?.price}</p>
            </div>
          </div>
          <div className="text-left">
            <h4 className="font-semibold tracking-wide py-4">Description</h4>
            <p>{selectedProduct?.product?.description}</p>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Detail;
