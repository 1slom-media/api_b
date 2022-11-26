import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETFORM,
    POSTFORM,
    PUTFORM,
    DELETEFORM
} from "./query.js";

const GET = async ({formId=0}) => {
    try {
        return await fetchAll(GETFORM, [formId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ email,phone_number}) => {
    try {
      return await fetch(POSTFORM, [ email,phone_number]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({formId},{email,phone_number}) => {
    try {
      return await fetch(PUTFORM, [formId,email,phone_number]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({formId}) => {
    try {
      return await fetch(DELETEFORM, [formId]);
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