import axios from "axios";

// API base URL
const baseURL = 'https://techcrunch.com/wp-json/wp/v2';

// Function to fetch a list of posts
export async function fetchPosts() {
  try {
    const response = await axios.get(`${baseURL}/posts`);
    return response;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

// Function to fetch post details by ID
async function fetchPostDetails(postId) {
  try {
    const response = await axios.get(`${baseURL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post details for ID ${postId}:`, error);
    throw error;
  }
}