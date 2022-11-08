// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../lib/dbConnect";
import Product from "../../models/Product";

const orders = {
  AZ: { data_name: 1 },
  ZA: { data_name: -1 },
  mayorPrecio: { data_price: -1 },
  menorPrecio: { data_price: 1 },
};

export default async function apiProduct(req, res) {
  if (req.method == "GET") { 
    res.status(200).json({"dataToFront":50})
  }
  if (req.method == "POST") {
    const { sort, category, sub_category, class_category } = req.body;
    // console.log(sort, category, sub_category, class_category);
    // const category = "panaderia-y-pasteleria"
    try {
      let query = [
        { $match: { category: category } },
        { $sort: orders[sort] },
        { $project: { _id: 0 } },
        { $limit: 25 },
      ];
      if (sub_category && class_category) {
        query = [
          {
            $match: {
              category: category,
              sub_category: sub_category,
              class_category: class_category,
            },
          },
          { $sort: orders[sort] },
          { $project: { _id: 0 } },
        ];
      } else if (sub_category) {
        query = [
          {
            $match: {
              category: category,
            },
          },
          { $sort: orders[sort] },
          { $project: { _id: 0 } },
        ];
      } else {
        query = query;
      }
      await connectDB();
      // const result = await Product.find({ "category": category }, { _id: 0 }).limit(5);

      let result = await Product.aggregate(query);


      let data = JSON.stringify(result);
      let dataToFront = JSON.parse(data);

      res.status(200).json(dataToFront);
    } catch (error) {
      console.log(error);
    }
  }
}