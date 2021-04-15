/* eslint-disable camelcase */
export interface CheckfrontItem {
  item_id: number;
  sku: string;
  name: string;
  status: 'A' | 'DELETED';
}
