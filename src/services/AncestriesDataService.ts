import Ancestry from '@/models/Ancestry';
import apiClient from '@/plugins/apiClient';

const resource = '/ancestries';

export default {
  async get(): Promise<Ancestry[]> {
    try {
      return (await apiClient.get(`${resource}`)).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getByName(name: string): Promise<Ancestry | null> {
    try {
      return (await apiClient.get(`${resource}/${name}`)).data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
