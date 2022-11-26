import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETCONTACTS,
    POSTCONTACTS,
    PUTCONTACTS,
    DELETECONTACTS
} from "./query.js";

const GET = async ({contactsId=0}) => {
    try {
        return await fetchAll(GETCONTACTS, [contactsId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ phone_number,room,kids,adults ,check_in,departure}) => {
    try {
      return await fetch(POSTCONTACTS, [ phone_number,room,kids,adults ,check_in,departure]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({contactsId},{phone_number,room,kids,adults ,check_in,departure}) => {
    try {
      return await fetch(PUTCONTACTS, [contactsId,phone_number,room,kids,adults ,check_in,departure]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({contactsId}) => {
    try {
      return await fetch(DELETECONTACTS, [contactsId]);
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