import React from "react";
import { useState, useEffect } from "react";

const HeaderBar = () => {
  const numberFont = 500;
  const [boolSwitch, setBoolSwitch] = useState(false);
  const [boolSwitchInput, setboolSwitchInput] = useState(false);

  const userAccount = [
    {textContent:"Iniciar Sesión", d:"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"},
    {textContent:"Mis Datos", d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},
    {textContent:"Mis Compras", d:"M13 10V3L4 14h7v7l9-11h-7z"},
    {textContent:"Mis Listas", d:"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"}
  ]
  const userSearch = [ 
    {textContent:"Búsqueda Múltiple", d:"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"},
    {textContent:"Búsqueda Múltiple", d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},
    {textContent:"Catálogos", d:"M13 10V3L4 14h7v7l9-11h-7z"}
  ]


  useEffect(() => {
    let windowBackground = document.querySelector('#__next')
    if (boolSwitchInput) {
      windowBackground.toggleAttribute("data-input-activate", true)
    } else {
      windowBackground.toggleAttribute("data-input-activate", false)
    }
  });

  return (
      <header className="h-[90px] bg-yellow-300 max-w-[1440px] text-[0.85rem] border-b-2 border-b-yellow-400">
      <div className="w-[94%] m-auto h-full flex">
        <a className="logo-wraper cursor-pointer" href="/">
        </a>
        <div className="header-items flex-1 flex flex-col">
          <div className="top-nav-wraper flex justify-between items-center py-2">
            <div className=" flex-1 flex justify-start pl-3">
              <span className="font-bold">Aún no configura tu tienda </span>
              <span className="bg-white cursor-pointer text-red-700 rounded-xl font-semibold px-2 ml-2">
                Elegir
              </span>
            </div>
            <div
              className="w-auto cursor-pointer relative"
              data-activate={boolSwitch}
              onMouseOver={() => setBoolSwitch((x) => !x)}
              onMouseOut={() => setBoolSwitch((x) => !x)}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <span className="acount px-1 ">Mi Cuenta</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="user__account" data-activate={boolSwitch}>
                {userAccount.map((item) => (
                  <a href="#" className="flex-1 flex justify-start items-center cursor-pointer rounded pl-1 hover:bg-yellow-100">
                    <svg className="bxtext w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.d} /></svg>
                      <span className="ml-1">{item.textContent}</span>
                  </a>
                ))}
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
            <div className="search-nav  w-[160px] h-[46px] flex">
                {userSearch.map(item => (
                  <div className="bxtext search-by-list flex-1 flex items-center justify-center relative cursor-pointer">
                    <svg className="bxtext w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.d} /></svg>
                    <span className="text">{item.textContent}</span>
                  </div>

                ))}

            </div>
          </div>
        </div>
      </div>
    </header>
    

  );
};

export default HeaderBar;
