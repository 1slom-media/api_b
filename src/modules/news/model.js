import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETNEWS,
    POSTNEWS,
    PUTNEWS,
    DELETENEWS
} from "./query.js";

const GET = async ({newsId=0}) => {
    try {
        return await fetchAll(GETNEWS, [newsId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ image_news,news_title_uz,news_title_ru,news_title_en,news_description_uz,news_description_ru,news_description_en}) => {
    try {
      return await fetch(POSTNEWS, [ image_news,news_title_uz,news_title_ru,news_title_en,news_description_uz,news_description_ru,news_description_en]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({newsId},{image_news,news_title_uz,news_title_ru,news_title_en,news_description_uz,news_description_ru,news_description_en}) => {
    try {
      return await fetch(PUTNEWS, [newsId,image_news,news_title_uz,news_title_ru,news_title_en,news_description_uz,news_description_ru,news_description_en]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({newsId}) => {
    try {
      return await fetch(DELETENEWS, [newsId]);
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