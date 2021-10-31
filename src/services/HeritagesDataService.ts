import ApiClient from '@/plugins/ApiClient';
import Heritage from '@/models/Heritage';

const resource = '/heritages';

export default {
  async get(): Promise<Heritage[]> {
    try {
      return (await ApiClient.get(`${resource}`)).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getByName(name: string): Promise<Heritage | null> {
    try {
      return (await ApiClient.get(`${resource}/${name}`)).data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
