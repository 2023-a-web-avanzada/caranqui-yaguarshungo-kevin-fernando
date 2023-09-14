import { NextApiRequest, NextApiResponse } from 'next';

const productsData = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(productsData);
};
