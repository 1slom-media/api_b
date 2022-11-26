import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETGALERY,
    POSTGALERY,
    PUTGALERY,
    DELETEGALERY
} from "./query.js";

const GET = async ({galeryId=0}) => {
    try {
        return await fetchAll(GETGALERY, [galeryId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ image_galery}) => {
    try {
      return await fetch(POSTGALERY, [ image_galery]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({galeryId},{image_galery}) => {
    try {
      return await fetch(PUTGALERY, [galeryId,image_galery]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({galeryId}) => {
    try {
      return await fetch(DELETEGALERY, [galeryId]);
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