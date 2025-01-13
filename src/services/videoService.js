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
      if (!videoId) {
        throw new Error("Video ID is required");
      }

      // First verify if video exists
      const checkResponse = await fetch(`${api.baseURL}/${videoId}`);
      if (checkResponse.status === 404) {
        throw new Error(`Video with ID ${videoId} not found`);
      }

      const response = await fetch(`${api.baseURL}/${videoId}`, {
        method: "DELETE",
        headers: api.headers,
      });

      if (!response.ok) {
        throw new Error(`Delete failed with status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error(`Failed to delete video ${videoId}:`, error);
      throw error;
    }
  },
};
