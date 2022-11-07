import React from "react";
import { useState, useEffect } from "react";
import { categorySmall } from "../data";
import Category from "./Category";
const Navbar = () => {
  const [boolSwitchButton, setboolSwitchButton] = useState(false);

  useEffect(() => {
    let windowBackground = document.querySelector('#root')
    if (boolSwitchButton) {
      windowBackground.toggleAttribute("data-button-activate", true)
    } else {
      windowBackground.toggleAttribute("data-button-activate", false)
    }
  });

  return (
    <section className='navigation "h-[90px] bg-yellow-300 max-w-[1440px] text-bit shadow-xl'>
      <div className="w-[94%] m-auto h-full flex py-2">
        <div className="category-button w-[150px] flex justify-center items-center">
          <button
            className="uppercase flex justify-center items-center"
            onClick={() => setboolSwitchButton((x) => !x)}
          >
            categorías<i class="bx bx-chevron-down text-sm ml-1"></i>
          </button>

          <div
            className={`category-items`} data-active={boolSwitchButton}
            onMouseLeave={() => setboolSwitchButton((x) => (x ? !x : null))}
          >
            <Category />
          </div>
        </div>
        <div className="nav-bar flex-1">
          <ul className="flex">
            {categorySmall.map((el) => (
              <li className="nav-item flex-1 flex justify-center items-center">
                <a href={el.link} className="">
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="basket w-[45px]">
          <i class="bx bx-basket text-sm"></i>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
