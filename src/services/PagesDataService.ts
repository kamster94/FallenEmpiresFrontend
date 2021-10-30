import Page from '@/models/Page';
import apiClient from '@/plugins/apiClient';

const resource = '/pages';

export default {
  async get(category: string, title: string): Promise<Page | null> {
    try {
      return (await apiClient.get(`${resource}/${category}/${title}`)).data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
