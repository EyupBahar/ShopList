import { Link } from "react-router-dom";

type IData = {
  data: any;
  to: string;
};

const Card = ({ data, to }: IData) => {
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
            {truncate(data?.name, 20)}
          </p>
          <p className="pb-6 text-sm text-center">$ {data?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
