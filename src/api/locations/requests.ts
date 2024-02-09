import { AxiosInstance } from "axios";
import { TLocations } from "./types";

const searchLocationRequests = (agent: AxiosInstance) => ({
  async getLocations(q: string): Promise<TLocations[]> {
    try {
      const { data } = await agent.get<TLocations[]>(`/search.json`, {
        params: { q },
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export default searchLocationRequests;
