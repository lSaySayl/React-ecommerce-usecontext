import { NavLink } from "react-router-dom";
import { menuItemsLeft, menuItemsRight } from "../../variables/navbar";

const Navbar = () => {
    const activeStyle = "underline underline-offset-4"

  return (
    <nav className="flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light bg-red-300">
      <ul className="flex items-center gap-3">
        {menuItemsLeft.map((item, index) => (
          <li key={index}>
            <NavLink
             to={item.to}
             className={({isActive})=> isActive && index !== 0 ? `${item.className} ${activeStyle}`:item.className}>
             {item.text}</NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-3 ">
        {menuItemsRight.map((item, index) => (
          <li key={index}>
            <NavLink 
            to={item.to}
            className={({isActive})=> isActive && index !== 0 ? `${item.className} ${activeStyle}`:item.className}>
            {item.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
