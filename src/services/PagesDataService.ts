import ApiClient from '@/plugins/ApiClient';
import Page from '@/models/Page';

const resource = '/pages';

export default {
  async get(category: string, title: string): Promise<Page | null> {
    try {
      return (await ApiClient.get(`${resource}/${category}/${title}`)).data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
