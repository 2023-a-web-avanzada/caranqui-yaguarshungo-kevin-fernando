import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const formData = req.body;
    const newInvoice = createInvoice(formData);
    res.status(200).json({ message: 'Factura creada con éxito', invoice: newInvoice });
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};
function createInvoice(formData: any) {
    throw new Error('Function not implemented.');
}

