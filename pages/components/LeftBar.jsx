import { useEffect, useState } from "react";
import axios from "axios"

// const category = "panaderia-y-pasteleria"

const LeftBar = ({category}) => {
  

  const [grouping, setGrouping] = useState([])

  useEffect( () => {
    
      const resGrouping = axios.post("http://localhost:3000/api/api-grouping",{
        category: category
      })
      resGrouping.then(res => {
        const {data} = res 
        setGrouping(data)
      } )}, [])
  // const namesBarMiddle = [
  //   {
  //     _id: "la-panaderia",
  //     sub: [
  //       {
  //         class_category: "pan-baguette-y-artesanales",
  //         total: 3,
  //       },
  //       {
  //         class_category: "bocaditos-salados",
  //         total: 11,
  //       },
  //       {
  //         class_category: "panes-tradicionales",
  //         total: 12,
  //       },
  //       {
  //         class_category: "bocaditos-dulces-y-bolleria",
  //         total: 29,
  //       },
  //       {
  //         class_category: "panes-especiales",
  //         total: 6,
  //       },
  //       {
  //         class_category: "panes-embolsados",
  //         total: 10,
  //       },
  //       {
  //         class_category: "panes-saludables",
  //         total: 2,
  //       },
  //       {
  //         class_category: "panes-congelados",
  //         total: 6,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "pasteleria",
  //     sub: [
  //       {
  //         class_category: "tortas-de-la-casa",
  //         total: 73,
  //       },
  //       {
  //         class_category: "chifones-y-kekes",
  //         total: 16,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "confiteria",
  //     sub: [
  //       {
  //         class_category: "pasteles-dulces-y-bocaditos",
  //         total: 11,
  //       },
  //       {
  //         class_category: "pasteles-salados-y-sandwiches",
  //         total: 11,
  //       },
  //       {
  //         class_category: "tejas-y-chocotejas",
  //         total: 4,
  //       },
  //     ],
  //   },
  // ];
  // const [show, setShow] = useState(true);

  const setEvent = (prop) => {
    let nameElement = document.querySelectorAll(`.${prop._id}`);
    nameElement.forEach((e) => {
      if (!e.hasAttribute(prop._id)) {
        e.toggleAttribute(prop._id);
        if (e.tagName == "A") {
          e.style = "height:2rem";
        } else {
          e.style = "height:auto;";
        }
      } else {
        e.toggleAttribute(prop._id);
        e.style = "height:0rem";
      }
    });
  };

  return (
    <section className="left-bar h-full w-[200px] flex flex-col text-[0.85rem]">
      <div className="flex-1 bg-white h-full w-full">
        <div className="h-full w-full flex flex-col justify-start">
          {grouping.length===0 && <p>...Loading</p>}
          {grouping.length>0 && grouping.map((el) => (
            <div className="max-h-[35rem] bg-white w-full overflow-hidden">
              <div
                className="cursor-pointer w-full h-[2rem] flex justify-start items-center border-b border-b-gray-400 px-5 hover:text-red-500"
                onClick={() => setEvent(el)}
              >
                <span className="ml-2 capitalize">{el._id}</span>
              </div>
              {el.sub?.map((s, index) => (
                <a
                  className={` ${el._id} ${index==0 ? "mt-1":"mt-0"} h-0 transition-all hover:text-red-500 w-full flex justify-start items-center pl-5 text-[0.8rem]`}
                  href={`./${s.class_category}`}
                >
                  <span
                    className={`${el._id} capitalize transition-all pl-3 h-0 py-1`}
                  >
                    {s.class_category}
                  </span>
                  <span className={`${el._id} transition-all h-0 ml-2`}>
                    ({s.total})
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeftBar;
