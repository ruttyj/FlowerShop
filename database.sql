CREATE DATABASE "Flowers"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE flowers(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255)
    image_url VARCHAR(255)
    description TEST
)

CREATE TABLE public.flowers
(
    id integer NOT NULL DEFAULT nextval('flowers_id_seq'::regclass),
    title text COLLATE pg_catalog."default",
    price numeric(9,0),
    rating numeric(2,0),
    image_url text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    CONSTRAINT flowers_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.flowers
    OWNER to postgres;
