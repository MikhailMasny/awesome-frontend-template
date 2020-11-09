interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Post {
  title: string;
  body: string;
  userId: number;
}

interface PostResponse extends Post {
  id: number;
}

export { HttpResponse, Todo, Post, PostResponse };
