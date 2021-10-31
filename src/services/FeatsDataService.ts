import ApiClient from '@/plugins/ApiClient';
import Feat from '@/models/Feat';

const resource = '/feats';

export default {
  async get(): Promise<Feat[]> {
    try {
      return (await ApiClient.get(`${resource}`)).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getByName(name: string): Promise<Feat | null> {
    try {
      return (await ApiClient.get(`${resource}/${name}`)).data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
