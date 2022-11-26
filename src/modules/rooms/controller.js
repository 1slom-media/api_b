import model from "./model.js";

const GET = async (req, res) => {
    try {
      const rooms = await model.GET(req.params);
      res.send(rooms);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const rooms = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"rooms created",
      data:rooms
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const rooms = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"rooms update",
      data:rooms
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const rooms = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"rooms deleted",
      data:rooms
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