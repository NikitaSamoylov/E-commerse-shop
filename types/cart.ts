export type TCart = {
  id: string;
  name: string;
  price: number;
  itemImg: string;
  count: number;
  color?: string;
  colorName: string;
  category: string;
  onRemove: boolean;
};