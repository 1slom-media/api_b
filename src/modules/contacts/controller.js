import model from "./model.js";

const GET = async (req, res) => {
    try {
      const contacts = await model.GET(req.params);
      res.send(contacts);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const contacts = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"contacts created",
      data:contacts
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const contacts = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"contacts update",
      data:contacts
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const contacts = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"contacts deleted",
      data:contacts
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