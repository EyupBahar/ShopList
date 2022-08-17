import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { Trash2 } from "react-feather";
import { deleteItem } from "../features/deleteItemSlice";

type IData = {
  data: any;
  to: string;
};

const Card = ({ data, to }: IData) => {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    await dispatch(deleteItem(data.id));
    window.location.reload();
  };
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 3) + "..." : str;
  };
  return (
    <div className="group flex flex-col justify-center items-center p-4 border-4">
      <Link to={to}>
        <img
          className="bg-white object-contain p-4 w-60 h-60 rounded-xl"
          src={data?.avatar}
          alt="device"
        />
      </Link>

      <div className="w-4/5 flex justify-between">
        <div>
          <p className="lowercase first-letter:uppercase pt-3 px-2 truncate text-base text-left">
            {truncate(data?.name, 15)}
          </p>
          <p className="pb-6 text-sm text-center">$ {data?.price}</p>
        </div>
        <Trash2 className="w-8 mt-3" />
        {/*  <img
          onClick={handleClick}
          className="invisible group-hover:visible w-8 pr-2 cursor-pointer"
          src={trash}
          alt="delete"
        /> */}
      </div>
    </div>
  );
};

export default Card;
