const API_URL="http://127.0.0.1:3000/api/v1/";


export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface NewPostPaylod {
  title: string;
  body: string;
}

export async function getPosts() {
  const requestInfo = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  };
  // const response = await fetch(`${API_URL}posts`, requestInfo);
  // const posts = await response.json();
  // console.log("API");
  // console.log(posts)
  // return posts;
  return await fetch(`${API_URL}posts`, requestInfo).then(response => response.json()).then(data => data).catch(error => console.log(error))
}

export async function createPost(payload: NewPostPaylod) {
  const requestInfo = {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(payload)
  };
  const response = await fetch(`${API_URL}posts`, requestInfo);
  const post = await response.json()
  return post
}