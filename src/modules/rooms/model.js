import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETROOMS,
    POSTROOMS,
    PUTROOMS,
    DELETEROOMS
} from "./query.js";

const GET = async ({roomsId=0}) => {
    try {
        return await fetchAll(GETROOMS, [roomsId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ image_room,title_room,area_room,number_guests,cost_night}) => {
    try {
      return await fetch(POSTROOMS, [ image_room,title_room,area_room,number_guests,cost_night]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({roomsId},{image_room,title_room,area_room,number_guests,cost_night}) => {
    try {
      return await fetch(PUTROOMS, [roomsId,image_room,title_room,area_room,number_guests,cost_night]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({roomsId}) => {
    try {
      return await fetch(DELETEROOMS, [roomsId]);
    } catch (error) {
        console.log(error);
    }
};


export default {
    GET,
    POST,
    PUT,
    DELETE
};