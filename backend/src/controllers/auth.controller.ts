import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model";

const SECRET = process.env.JWT_SECRET || "supersecreto";

export class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await userModel.findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ message: "Usuario o contraseña incorrecta" });
    }

    // Access token válido por 1 hora
    const accessToken = jwt.sign(
      { userId: user.id, email: user.email },
      SECRET,
      { expiresIn: "1h" }
    );

    // Refresh token válido por 7 días
    const refreshToken = jwt.sign(
      { userId: user.id },
      SECRET,
      { expiresIn: "7d" }
    );

    return res.json({ accessToken, refreshToken });
  }

  static async refresh(req: Request, res: Response) {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token provided" });
    }

    try {
      const payload = jwt.verify(refreshToken, SECRET) as any;

      // Generar nuevo access token
      const accessToken = jwt.sign(
        { userId: payload.userId },
        SECRET,
        { expiresIn: "1h" }
      );

      return res.json({ accessToken });
    } catch (err) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }
  }
}
