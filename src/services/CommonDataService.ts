import HomeBox from '@/models/HomeBox';
import Navigation from '@/models/Navigation';
import apiClient from '@/plugins/apiClient';

export default {
  async getMenu(): Promise<Navigation[]> {
    try {
      return (await apiClient.get('/menu')).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getHomeBoxes(): Promise<HomeBox[]> {
    try {
      return (await apiClient.get('/homeBoxes')).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
};
