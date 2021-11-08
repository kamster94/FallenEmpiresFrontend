import Page from '@/models/Page';
import router from '@/router';
import PagesDataService from '@/services/PagesDataService';

export default async function useDataPage(
  category: string,
  pageName: string
): Promise<Page | undefined> {
  const page = await PagesDataService.get(category, pageName);
  if (page != null) {
    return page;
  } else {
    router.push({ path: '/404' });
    return undefined;
  }
}
