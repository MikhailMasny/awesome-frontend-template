import "./style.scss";

import { httpGet, httpPost } from "./typescript/http-request";
import { Todo, Post, PostResponse } from "./typescript/interfaces";

const buttonGet = document.querySelector("#buttonGet") as HTMLInputElement;
const buttonPost = document.querySelector("#buttonPost") as HTMLInputElement;
const title = document.getElementById("title") as HTMLInputElement;
const body = document.getElementById("body") as HTMLInputElement;

buttonGet?.addEventListener("click", handleGetClick);
buttonPost?.addEventListener("click", handlePostClick);

async function handleGetClick() {
  console.log("Clicked!");
  const response = await httpGet<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  console.log(response);
}

async function handlePostClick() {
  console.log("Clicked!");
  const url: string = "https://jsonplaceholder.typicode.com/posts";
  const method: string = "POST";
  const obj: Post = {
    title: title.value,
    body: body.value,
    userId: 1,
  };
  const header: string = "application/json; charset=UTF-8";
  const response = await httpPost<PostResponse[]>(url, method, obj, header);
  console.log(response);
}
