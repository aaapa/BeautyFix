/* components */

import { header } from "../components/header/header.js";
header();

/* blocks */

import { news } from "../blocks/news/news.js";
news();

import { services } from "../blocks/services/services.js";
services();

/* blocks */

/* libraries */

import { useDynamicAdapt } from "./libraries/dynamicAdapt/dynamicAdapt.js";
useDynamicAdapt();

tippy("[data-tippy-content]");

/* libraries */
