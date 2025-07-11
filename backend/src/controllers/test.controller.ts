import { Request, Response } from 'express';
import { testModel } from '../models/test.model';

class TestController {
  public async getHelloMessage(req: Request, res: Response) {
    res.json({ message: '¡Hola desde el backend!' });
  }

  public async getDbTime(req: Request, res: Response) {
    try {
      const time = await testModel.getNowFromDb();
      res.json({ dbTime: time });
    } catch (err) {
      console.error('❌ Error en getDbTime:', err);
      res.status(500).json({ error: 'Error interno' });
    }
  }
}

export const testController = new TestController();
