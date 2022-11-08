// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../lib/dbConnect";
import Product from "../../models/Product";

export default async function apiGrouping(req, res) {
  if (req.method == "GET") {
    res.status(200).json({ dataToFront: 50 });
  }
  if (req.method == "POST") {
    const { category } = req.body;
    // console.log(sort, category, sub_category, class_category);
    // const category = "panaderia-y-pasteleria"
    try {
      const query = [
        { $match: { category: category } },
        {
          $group: {
            _id: {
              sub_category: "$sub_category",
              class_category: "$class_category",
            },
            total: { $sum: 1 },
          },
        },
        {
          $project: {
            sub_category: "$_id.sub_category",
            class_category: "$_id.class_category",
            total: 1,
            _id: 0,
          },
        },
        {
          $group: {
            _id: "$sub_category",
            sub: {
              $push: {
                class_category: "$class_category",
                total: "$total",
              },
            },
          },
        },
      ];
      await connectDB();
      const result = await Product.aggregate(query);

      let data = JSON.stringify(result);
      let dataToFront = JSON.parse(data);

      res.status(200).json(dataToFront);
    } catch (error) {
      console.log(error);
    }
  }
}
