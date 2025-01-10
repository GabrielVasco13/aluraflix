import { api } from "./api/config";

export const videoService = {
  async getVideos() {
    try {
      const response = await fetch(`${api.baseURL}/categories`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching videos:", error);
      throw error;
    }
  },

  async createVideo(categoryId, videoData) {
    try {
      const response = await fetch(`${api.baseURL}/categories/${categoryId}`, {
        method: "POST",
        headers: api.headers,
        body: JSON.stringify(videoData),
      });
      return await response.json();
    } catch (error) {
      console.error("Error creating video:", error);
      throw error;
    }
  },

  async updateVideo(categoryId, videoId, videoData) {
    try {
      const response = await fetch(
        `${api.baseURL}/categories/${categoryId}/${videoId}`,
        {
          method: "PUT",
          headers: api.headers,
          body: JSON.stringify(videoData),
        }
      );
      return await response.json();
    } catch (error) {
      console.error("Error updating video:", error);
      throw error;
    }
  },

  async deleteVideo(categoryId, videoId) {
    try {
      await fetch(`${api.baseURL}/categories/${categoryId}/${videoId}`, {
        method: "DELETE",
        headers: api.headers,
      });
    } catch (error) {
      console.error("Error deleting video:", error);
      throw error;
    }
  },
};
