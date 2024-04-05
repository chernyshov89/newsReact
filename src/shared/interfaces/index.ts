<<<<<<< HEAD
import { CategoriesType } from '../../entities/category/model/types';

=======
>>>>>>> fc4b0267e1ce6042bea650853aa3d4dc2bc74fb4
export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;
