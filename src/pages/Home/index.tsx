/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Filter from "../../components/Filter";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchProducts } from "../../features/productsSlice";
import { Link } from "react-router-dom";
import { Plus } from "react-feather";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const { products } = useAppSelector((state) => state?.products);
  console.log("items from home", products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleFilter = (e: any) => {
    setCategory(e.target.value);
  };

  const filteredDevices = products?.filter(
    (item: any) =>
      (item.category === category || category === "All") &&
      (search === ""
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-12 relative">
      <div className="grid grid-cols-6 gap-4">
        <input
          className="lg:col-span-3 col-span-12 px-4 py-3 rounded-md text-xs outline-none text-gray-500"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Apple Watch,SamsungS21, MacbookPro..."
        />

        <div className="lg:col-end-7 lg:col-span-2 col-span-12 ">
          <Filter handleFilter={handleFilter} category={category} />
        </div>
      </div>

      <div className="grid xl:px-20 max-w-6xl mx-auto mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
        {filteredDevices?.map((item: any) => (
          <Card key={item?.id} data={item} to={`/detail/${item._id}`} />
        ))}
      </div>
      <Link
        to="add-item"
        className="fixed bottom-20 right-20 cursor-pointer bg-black text-white rounded-[50%]"
      >
        <Plus className="m-4" size="40px" strokeWidth="3px" />
      </Link>
    </div>
  );
};

export default Home;
