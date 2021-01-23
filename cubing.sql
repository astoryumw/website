--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: times; Type: TABLE; Schema: public; Owner: Austin
--

CREATE TABLE public.times (
    count integer NOT NULL,
    name text NOT NULL,
    "time" numeric NOT NULL
);


ALTER TABLE public.times OWNER TO "Austin";

--
-- Name: times_count_seq; Type: SEQUENCE; Schema: public; Owner: Austin
--

CREATE SEQUENCE public.times_count_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.times_count_seq OWNER TO "Austin";

--
-- Name: times_count_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Austin
--

ALTER SEQUENCE public.times_count_seq OWNED BY public.times.count;


--
-- Name: times count; Type: DEFAULT; Schema: public; Owner: Austin
--

ALTER TABLE ONLY public.times ALTER COLUMN count SET DEFAULT nextval('public.times_count_seq'::regclass);


--
-- Data for Name: times; Type: TABLE DATA; Schema: public; Owner: Austin
--

COPY public.times (count, name, "time") FROM stdin;
\.


--
-- Name: times_count_seq; Type: SEQUENCE SET; Schema: public; Owner: Austin
--

SELECT pg_catalog.setval('public.times_count_seq', 63, true);


--
-- PostgreSQL database dump complete
--

