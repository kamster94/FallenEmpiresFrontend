import Heritage from '@/models/Heritage';
import apiClient from '@/plugins/apiClient';

const resource = '/heritages';

export default {
  async get(): Promise<Heritage[]> {
    try {
      return (await apiClient.get(`${resource}`)).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getByName(name: string): Promise<Heritage | null> {
    try {
      return (await apiClient.get(`${resource}/${name}`)).data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
