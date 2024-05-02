import { API_SOCIAL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const author = "_author=true";
const comments = "&_comments=true";
const reactions = "&_reactions=true";

export async function displayPosts() {
  try {
    const displayPostsURL = `${API_SOCIAL}${action}?${author}${comments}${reactions}`;

    const response = await authFetch(displayPostsURL);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function displayPost(id) {
  try {
    if (!id) {
      throw new Error("Get requires a post ID");
    }
    const displayPostURL = `${API_SOCIAL}${action}/${id}?${author}${comments}${reactions}`;

    const response = await authFetch(displayPostURL);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
