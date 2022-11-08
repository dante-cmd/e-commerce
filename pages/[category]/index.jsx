import React from "react";
import BarNav from "../components/BarNav";
import Container from "../components/Container";



const index = ({ prop }) => {
  const { category } = prop;
//   const category = "panaderia-y-pasteleria";
  const sub_category = null;
  const class_category =null
  return (
    <div>
      <BarNav />
      <div>{category}</div>
      <Container category={category} sub_category={sub_category} class_category={class_category}  />
    </div>
  );
};

export async function getServerSideProps(req, res) {
  const prop = req.query;
  console.log(prop);
  try {
    return { props: { prop } };
  } catch (error) {
    console.log(error);
  }
}

export default index;
