import Ancestry from '@/models/Ancestry';
import ApiClient from '@/plugins/ApiClient';

const resource = '/ancestries';

export default {
  async get(): Promise<Ancestry[]> {
    try {
      return (await ApiClient.get(`${resource}`)).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getByName(name: string): Promise<Ancestry | null> {
    try {
      return (await ApiClient.get(`${resource}/${name}`)).data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
