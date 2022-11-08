import React from "react";

const Crumb = ({crumbBar}) => {
//   const crumbBar = [
//     { name: "Metro", link: "/" },
//     { name: "Panadería y Pastelería", link: "/panaderia-y-pasteleria" },
//   ];
  return (
    <section className="bread-crumb w-full mt-5 text-[0.8rem]">
      <div className="w-full crumb flex">
        {crumbBar.map((el, index) => (
          <a
            className={`px-3 ${
              crumbBar.length - 1 != index ? "border-r border-r-gray-300" : null
            } 
                ${crumbBar.length - 1 === index ? "text-red-600" : null}`}
            href={el.link}
          >
            {el.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Crumb;
