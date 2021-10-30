import Feat from '@/models/Feat';
import apiClient from '@/plugins/apiClient';

const resource = '/feats';

export default {
  async get(): Promise<Feat[]> {
    try {
      return (await apiClient.get(`${resource}`)).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getByName(name: string): Promise<Feat | null> {
    try {
      return (await apiClient.get(`${resource}/${name}`)).data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
