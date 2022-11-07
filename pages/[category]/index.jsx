import React from 'react'
import BarNav from '../components/BarNav'
const index = ({prop}) => {
    const {category} = prop
  return (
    <div>
        
        <BarNav />
        <div>{category}</div>
    </div>
  )
}

export async function getServerSideProps(req, res) {
  const prop = req.query;
  console.log(prop)
  try {
    return { props: { prop } };
  } catch (error) {
    console.log(error);
  }
}

export default index