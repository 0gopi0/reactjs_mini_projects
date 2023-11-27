import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
interface Props {
  itemsCount: Number;
}
const NavBar = ({ itemsCount }: Props) => {
  // return <div>products :- {String(itemsCount)}</div>;
  return (
    <>
      <div className="flex relative">
        <div><FaCartShopping className="text-3xl" /></div>
        <div className="flex items-center justify-center h-4 w-4 bg-red-500 rounded-full absolute top-0 left-4">
          <span className="text-white text-xs">{String(itemsCount)}</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
