import React from "react";
import { categoryAll } from "../../public/data/index";


const Category = () => {
    
  return (
    <section className= {`category w-[220px] bg-yellow-300 h-[100vh]`}>
      <div className="flex flex-col h-full">
        <div className="w-full h-[40px] flex justify-center items-center border-b-2 border-b-yellow-400 ">
          <i class="bx bxl-gmail text-xl"></i>
          <span className="title-category uppercase ml-2 inline-block">categorías</span>
        </div>
        <div className="flex-1">
          <ul className="flex flex-col items-stretch h-full ">
            {categoryAll.map((el) => (
              <li className="flex-1 pl-5 flex items-center category-item"
              >
                <a href={el.link} className=""
                >{el.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Category;
