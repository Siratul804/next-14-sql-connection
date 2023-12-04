"use server";
import { query } from "./db";
import { redirect } from "next/navigation";
export const addPost = async (formData) => {
  const { post } = Object.fromEntries(formData);

  //create user
  const newUPost = await query({
    query: "INSERT INTO test (post) VALUES (?)",
    values: [post],
  });

  if (newUPost) {
    console.log("Post added");
    redirect("/");
  }
};

export const fetchPost = async () => {
  const post = await query({
    query: "SELECT * FROM test",
    values: [],
  });

  return post;
};
