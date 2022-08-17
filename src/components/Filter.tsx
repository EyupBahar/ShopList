import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCategories } from "../features/categorySlice";

const Filter = ({ handleFilter, category }: any) => {
  const { categories } = useAppSelector((state) => state?.categories);
  console.log("categories", categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <select
      value={category}
      onChange={(e) => handleFilter(e)}
      className="mt-3 lg:mt-0 py-3 w-full px-auto rounded-md text-sm text-gray-500 outline-none "
    >
      <option value="All">Categories</option>
      {categories?.map((category: any) => (
        <option key={category?.id} value={category?.name}>
          {category?.name}
        </option>
      ))}
    </select>
  );
};

export default Filter;
