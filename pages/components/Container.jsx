import React, { useEffect } from "react";
import { useState } from "react";
import { orderData, vistaData, dataSheft } from "../../public/data/index";
import CardProduct from "./CardProduct";
import axios from "axios";


// category, sub_category and class_category  come from `props`
// const category = "panaderia-y-pasteleria";
// const sub_category = null;
// const class_category =null


const Container = ({category, sub_category, class_category}) => {
  const [toggle, setToggle] = useState(false);

  const orderChange = (text) => {
    const order = document.getElementById("id-65as");
    order.textContent = text;
  };

  const [data, setData] = useState([]);
  const [countProducts, setCountProducts] = useState(220);
  const [sort, setSort] = useState("AZ");

  // Connect to axios

  useEffect( () => {
    const respProducts = axios.post("http://localhost:3000/api/api-products", {
      sort: sort,
      category: category,
      sub_category: sub_category,
      class_category: class_category,
    });
    respProducts.then((res) => {
      const { data } = res;
      setData(data);
    });


    const respCount = axios.post("http://localhost:3000/api/api-count", {
      category: category,
      sub_category: sub_category,
      class_category: class_category,
    });
    respCount.then((res) => {
      const { data } = res;
      setCountProducts(data);
    });
  }, [sort]);

  return (
    <section className="container w-[calc(100%-100px)] ml-12 bg-white mt-10">
      <div className="shelf-header h-14 w-full rounded-md flex flex-row  bg-yellow-300    ">
        <div className="w-[32rem] flex justify-start items-center px-5">
          <h2 className="text-2xl">{category}</h2>
          <span className="ml-5">{countProducts} productos</span>
        </div>
        <div
          className="flex-1 flex relative border-l border-l-gray-200 px-3"
          onMouseLeave={() => setToggle((x) => (x ? !x : x))}
        >
          {orderData.map((el, index) => (
            <p
              className={`${
                index == 2 ? "" : "flex-1"
              } cursor-pointer text-[14px] font-bold flex justify-center items-center`}
              onClick={() => {
                setToggle((x) => !x);
                
              }}
            >
              {index == 2 
              ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>) 
              : ( <span id={el.key}>{el.content}</span>
              )}
            </p>
          ))}
          <div
            className={`order-list absolute left-[-1px] right-[-1px]  ${
              toggle ? "opacity-1 top-14" : "opacity-0 top-12"
            }`}
          >
            <ul className="px-5 text-sm  bg-white border border-b-red-600 border-r-gray-200 border-l-gray-200 flex flex-col">
              {dataSheft.map((el) => (
                <li className="w-full cursor-pointer">
                  <span
                    className="w-full inline-block hover:text-red-600"
                    id={el.key}
                    onClick={(e) => {
                      orderChange(e.target.textContent);
                      setToggle((x) => !x);
                      setSort(e.target.id)
                    }}
                  >
                    {el.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 flex border-l border-l-gray-300 px-3">
          {vistaData.map((el, index) => (
            <a
              href="#"
              className={`${
                index == 0 ? "w-[5rem] cursor-default" : "flex-1"
              } flex justify-center items-center`}
            >
              {index == 0 ? (
                <span>{el}</span>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={el}
                  />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="container-main mt-7 grid gap-4 grid-cols-2-12rem lg:grid-cols-3-12rem xl:grid-cols-4-12rem">
        {data.length === 0 && <p>Loading ....</p> }
        {data.length>0 && data.map((el) => (
          <CardProduct
          linkImg={el.data_uri}
          nameProduct={el.data_name}
          nameBrand={el.data_brand}
          priceProduct={el.data_price}
        />

        ))}
      </div>
    </section>
  );
};

export default Container;
