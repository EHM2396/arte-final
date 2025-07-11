import { db } from '../db/connection';

class UserModel {
  public async findByEmail(email: string): Promise<any | null> {
    const result = await db.raw('SELECT * FROM users WHERE email = ?', [email]);
    return result.rows[0] || null;
  }
}

export const userModel = new UserModel();