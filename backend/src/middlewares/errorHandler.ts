import { Request, Response, NextFunction } from 'express';

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    console.error('❌ Error Handler atrapó:', err);

    res.status(500).json({
        error: 'Ocurrió un error inesperado',
        details: err.message || err,
    });
}