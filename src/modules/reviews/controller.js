import model from "./model.js";

const GET = async (req, res) => {
    try {
      const reviews = await model.GET(req.params);
      res.send(reviews);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const reviews = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"reviews created",
      data:reviews
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const reviews = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"reviews update",
      data:reviews
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const reviews = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"reviews deleted",
      data:reviews
    })
  } catch (error) {
    console.error(error);
  }
};



export default {
  GET,
  POST,
  PUT,
  DELETE,
};