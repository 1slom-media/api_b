CREATE DATABASE api_b;
\c api_b;

CREATE TABLE IF NOT EXISTS contacts(
    contacts_id serial primary key,
    phone_number varchar(30) not null,
    room varchar not null,
    kids varchar not null,
    adults varchar not null,
    check_in varchar not null,
    departure varchar not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS form_contact(
    form_id serial PRIMARY KEY,
    email varchar not null,
    phone_number varchar(30) not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS news(
    news_id serial PRIMARY KEY,
    image_news text not null,
    news_title_uz varchar(300) not null,
    news_title_ru varchar(300) not null,
    news_title_en varchar(300) not null,
    news_description_uz text not null,
    news_description_ru text not null,
    news_description_en text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS reviews(
    reviews_id serial PRIMARY KEY,
    avatar_image varchar not null,
    description_uz text not null,
    description_ru text not null,
    description_en text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS rooms(
    rooms_id serial PRIMARY KEY,
    image_room varchar not null,
    title_room varchar not null,
    area_room varchar not null,
    number_guests varchar not null,
    cost_night varchar not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS galery(
    galery_id serial PRIMARY KEY,
    image_galery varchar not null,
    date timestamp default current_timestamp
);
