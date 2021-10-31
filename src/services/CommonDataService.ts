import ApiClient from '@/plugins/ApiClient';
import HomeBox from '@/models/HomeBox';
import Navigation from '@/models/Navigation';

export default {
  async getMenu(): Promise<Navigation[]> {
    try {
      return (await ApiClient.get('/menu')).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getHomeBoxes(): Promise<HomeBox[]> {
    try {
      return (await ApiClient.get('/homeBoxes')).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
};
