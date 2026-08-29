import type { CategoryWithOptimizedImage } from '../../constants/categories';
import type { Extra } from '../../constants/extras';
import type { Item } from '../../constants/items';

export type SearchPageProps = {
  categories: CategoryWithOptimizedImage[];
  items: Item[];
  extras: Extra[];
};

export type SearchExtra = {
  modifier_id: string;
  name: string;
  price: number;
  categoryName: string;
};
