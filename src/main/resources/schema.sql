DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA IF NOT EXISTS public
    AUTHORIZATION postgres;
COMMENT ON SCHEMA public
    IS 'standard public schema';
GRANT ALL ON SCHEMA public TO PUBLIC;
GRANT ALL ON SCHEMA public TO postgres;

DROP TABLE IF EXISTS public.users;
CREATE TABLE IF NOT EXISTS public.users
(
    id serial PRIMARY KEY,
    username character varying(1000) COLLATE pg_catalog."default",
    password character varying(1000) COLLATE pg_catalog."default",
    token character varying(1000) COLLATE pg_catalog."default",
    contributions integer,
    display_name character varying(1000) COLLATE pg_catalog."default",
    salt character varying(1000) COLLATE pg_catalog."default"
);

DROP TABLE IF EXISTS public.machine;
CREATE TABLE IF NOT EXISTS public.machine
(
    id serial PRIMARY KEY,
    "name" character varying(1000) COLLATE pg_catalog."default"
)
    TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.machine
    OWNER to postgres;

DROP TABLE IF EXISTS public.supply;
CREATE TABLE IF NOT EXISTS public.supply
(
    id serial PRIMARY KEY,
    machine integer NOT NULL,
    coffee boolean NOT NULL,
    short_supply boolean NOT NULL,
    time_checked date,
    checked_by character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    token character varying(1000) COLLATE pg_catalog."default",
    user_id integer NOT NULL,
    CONSTRAINT machine FOREIGN KEY (machine)
        REFERENCES public.machine (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT users FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
    TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.supply
    OWNER to postgres;