import hello from "./module.js";

hello();


// Playground - Clase 14
import { getData } from "./api";

export function solution() {
  return getData().then(movies => movies);
}