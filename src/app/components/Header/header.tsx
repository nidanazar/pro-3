// import headerStyle from "./header.module.css"

import Link from "next/link";

const Header = () => {
    return(
        <div>
            <div className="w-100% h-6 bg-lime-600 flex justify-between px-2 items-center md:px-44">
        <div className="text-base	 text-indigo-900 font-bold">GIAIC</div>
        <ul className="flex flex-nowrap">
	
            <li className="mx-[10px] cursor-pointer text-xs	">Contact Us</li>
            <li className="mx-[10px] cursor-pointer text-xs	">About Us</li>
            <li className="mx[10px] cursor-pointer text-xs	">Home</li>
        </ul>
        <div className="bg-zinc-200 text-lightgrey rounded-full text-xs cursor-pointer">login</div>
        </div>
        </div>

    );
}
export default Header