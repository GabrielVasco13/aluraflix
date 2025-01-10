import { api } from "./api/config";

export const videoService = {
  async getVideos() {
    try {
      const response = await fetch(api.baseURL);
      return await response.json();
    } catch (error) {
      console.error("Error fetching videos:", error);
      throw error;
    }
  },

  async createVideo(videoData) {
    try {
      const response = await fetch(api.baseURL, {
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

  async updateVideo(videoId, videoData) {
    try {
      const response = await fetch(`${api.baseURL}/${videoId}`, {
        method: "PUT",
        headers: api.headers,
        body: JSON.stringify(videoData),
      });
      return await response.json();
    } catch (error) {
      console.error("Error updating video:", error);
      throw error;
    }
  },

  async deleteVideo(videoId) {
    try {
      await fetch(`${api.baseURL}/${videoId}`, {
        method: "DELETE",
        headers: api.headers,
      });
    } catch (error) {
      console.error("Error deleting video:", error);
      throw error;
    }
  },
};
