import { HttpResponse, Post } from "./interfaces";

async function httpGet<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  response.parsedBody = await response.json();
  return response;
}

async function httpPost<T>(request: RequestInfo, method: string, obj: Post, header: string): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request, {
    method: method,
    body: JSON.stringify(obj),
    headers: {
      "Content-type": header,
    },
  });
  response.parsedBody = await response.json();
  return response;
}

export { httpGet, httpPost };
