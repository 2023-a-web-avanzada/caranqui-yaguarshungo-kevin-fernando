import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (email === 'usuario@example.com' && password === 'contraseña') {
      res.status(200).json({ message: 'Autenticación exitosa' });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};
