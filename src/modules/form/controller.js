import model from "./model.js";

const GET = async (req, res) => {
    try {
      const form = await model.GET(req.params);
      res.send(form);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const form = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"form created",
      data:form
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const form = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"form update",
      data:form
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const form = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"form deleted",
      data:form
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