// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../lib/dbConnect";
import Product from "../../models/Product";


export default async function consultCategory(req, res) {
  if (req.method == "GET") { 
    res.status(200).json({"dataToFront":50})
  }
  if (req.method == "POST") {
    const {category, sub_category, class_category } = req.body;
    
    // const category = "panaderia-y-pasteleria"
    try {
        let query = [{ $match: { category: category } }];

        if (sub_category && class_category) {
          query = [
            {
              $match: {
                category: category,
                sub_category: sub_category,
                class_category: class_category,
              },
            },
          ];
        } else if (sub_category) {
          query = [
            {
              $match: {
                category: category,
                sub_category: sub_category,
              },
            },
          ];
        } else {
          query = query;
        }
  
        await connectDB();
        const result = await Product.aggregate(query);

      let data = JSON.stringify(result);
      let dataToFront = JSON.parse(data);

      res.status(200).json(dataToFront.length);
    } catch (error) {
      console.log(error);
    }
  }
}