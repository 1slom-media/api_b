import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETREVIEWS,
    POSTREVIEWS,
    PUTREVIEWS,
    DELETEREVIEWS
} from "./query.js";

const GET = async ({reviewsId=0}) => {
    try {
        return await fetchAll(GETREVIEWS, [reviewsId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ avatar_image,description_uz,description_ru,description_en}) => {
    try {
      return await fetch(POSTREVIEWS, [ avatar_image,description_uz,description_ru,description_en]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({reviewsId},{avatar_image,description_uz,description_ru,description_en}) => {
    try {
      return await fetch(PUTREVIEWS, [reviewsId,avatar_image,description_uz,description_ru,description_en]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({reviewsId}) => {
    try {
      return await fetch(DELETEREVIEWS, [reviewsId]);
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