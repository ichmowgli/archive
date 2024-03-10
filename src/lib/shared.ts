export enum Category {
  Tech = 'Tech',
  Living = 'Living',
  Coffee = 'Coffee',
  Lifestyle = 'Lifestyle',
  Personal = 'Personal',
}

export type Item = {
  id: number;
  title: string;
  price: number;
  currency: string;
  company: string;
  category: Category;
  image: `/images/${string}`;
  href: string;
};
