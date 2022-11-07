import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const numberFont = 500;
  const [boolSwitch, setBoolSwitch] = useState(false);
  const [boolSwitchInput, setboolSwitchInput] = useState(false);

  useEffect(() => {
    let windowBackground = document.querySelector('#root')
    if (boolSwitchInput) {
      windowBackground.toggleAttribute("data-input-activate", true)
    } else {
      windowBackground.toggleAttribute("data-input-activate", false)
    }
  });

  return (
    <header className="h-[90px] bg-yellow-300 max-w-[1440px] text-bit border-b-2 border-b-yellow-400">
      <div className="w-[94%] m-auto h-full flex">
        <div className="logo-wraper"></div>
        <div className="header-items flex-1 flex flex-col">
          <div className="top-nav-wraper flex justify-between items-center font-display py-2">
            <div>
              <span className="font-bold">Aún no configura tu tienda </span>
              <span className="bg-white text-red-700 rounded-xl font-semibold px-2">
                Elegir
              </span>
            </div>
            <div
              className="relative user__menu cursor-pointer"
              data-activate={boolSwitch}
              onMouseOver={() => setBoolSwitch((x) => !x)}
              onMouseOut={() => setBoolSwitch((x) => !x)}
            >
              <div className="flex items-center">
                <i class="bx bx-user-circle px-1"></i>
                <span className="acount px-1 ">Mi Cuenta</span>
                <i class="bx bxs-chevron-down px-1"></i>
              </div>
              <div className="user__content" data-activate={boolSwitch}>
                <a href="#" className="flex-1">
                  <i class="bx bxl-gitlab mr-2"></i>
                  <span className="">Iniciar Sesión</span>
                </a>
                <a href="#" className="flex-1">
                  <i class="bx bxl-instagram mr-2"></i>
                  <span className="">Mis Datos</span>
                </a>
                <a href="#" className="flex-1">
                  <i class="bx bxl-slack mr-2"></i>
                  <span className="">Mis Compras</span>
                </a>
                <a href="#" className="flex-1">
                  <i class="bx bxl-dropbox mr-2"></i>
                  <span className="">Mis Listas</span>
                </a>
              </div>
            </div>
          </div>
          <div className="search-wraper flex-1 flex items-center">
            <div className="search-autocomplete h-[46px] flex-1 relative p-1 flex">
              <label
                htmlFor="search-autocomplete-key"
                className="absolute top-2 right-5"
                data-bool-switch-input={boolSwitchInput}
              >
                <i
                  className={`bx bx-search text-3xl font-thin text-gray-${numberFont} `} 
                  
                ></i>
              </label>
              <input
                className="rounded-3xl pl-5 text-base flex-1"
                type="text"
                id="search-autocomplete-key"
                placeholder="¿Qué producto necesitas?"
                onFocus={() => setboolSwitchInput((x) => !x)}
                onBlur={() => setboolSwitchInput((x) => !x)}
                data-bool-switch-input={boolSwitchInput}
              />
            </div>
            <div className="w-[150px] h-[46px] flex">
              <div className="search-by-list flex-1 flex items-center justify-center relative">
                <i
                  class={`bxtext bx bxl-yelp text-xl inline-block text-gray-${numberFont} cursor-pointer`}
                ></i>
                <span className="text">Búsqueda Múltiple</span>
              </div>
              <div className="list-links flex-1 flex items-center justify-center relative">
                <i
                  class={`bxtext bx bxl-soundcloud text-xl text-gray-${numberFont} cursor-pointer`}
                ></i>
                <span className="text">Búsqueda Múltiple</span>
              </div>
              <div className="list-catalogo flex-1 flex items-center justify-center relative">
                <i
                  class={`bxtext bx bxl-deezer text-xl text-gray-${numberFont} cursor-pointer`}
                ></i>
                <span className="text">Catálogos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
