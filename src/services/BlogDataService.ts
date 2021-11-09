import ApiClient from '@/plugins/ApiClient';
import Post from '@/models/Post';

const resource = '/blog';

export default {
  async get(): Promise<Post[]> {
    try {
      return (await ApiClient.get(`${resource}`)).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getById(id: number): Promise<Post | null> {
    try {
      return (await ApiClient.get(`${resource}/${id}`)).data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
