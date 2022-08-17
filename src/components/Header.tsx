import clsx from "clsx";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div
      className={clsx(
        `flex flex-row w-3/4 top-0 z-[1000] bg-white fixed h-[50px] cursor-pointer justify-between items-center font-bold px-4 rounded-lg mt-2 shadow-xl`
      )}
    >
      <Link to="/" className="font-semibold italic">
        Upayments Store
      </Link>
      <Link to="" className="font-semibold italic">
        Register
      </Link>
    </div>
  );
};
