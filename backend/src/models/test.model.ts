import { db } from '../db/connection';

class TestModel {
  public async getNowFromDb(): Promise<string> {
    const result = await db.raw('SELECT NOW()');
    // db.raw() devuelve un objeto con .rows
    return result.rows[0].now;
  }

  public async getNowAndClose(): Promise<string> {
    const result = await db.raw('SELECT NOW()');
    // Puedes cerrar el pool explícitamente si quieres
    await db.destroy();
    console.log('🔌 Knex pool cerrado');
    return result.rows[0].now;
  }
}

export const testModel = new TestModel();
