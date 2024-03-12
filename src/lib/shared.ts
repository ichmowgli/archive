export enum Category {
  Workspace = 'Workspace',
  Living = 'Living',
  Coffee = 'Coffee',
  Lifestyle = 'Lifestyle',
  Personal = 'Personal',
}

export type Item = {
  id: string;
  title: string;
  price: number;
  currency: string;
  company: string;
  category: Category;
  image: `/images/${string}`;
  href: string;
};
