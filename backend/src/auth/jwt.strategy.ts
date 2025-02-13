import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Extraer el token JWT del header de Authorization
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Asegurarse de que el token no ha expirado
      ignoreExpiration: false,
      // Usar la misma clave secreta que usamos para firmar el token
      secretOrKey: process.env.JWT_SECRET || 'tu_clave_secreta',
    });
  }

  // Método que Passport llamará cuando el token sea válido
  async validate(payload: any) {
    // Retornamos el usuario que estará disponible en Request
    return { 
      id: payload.sub,
      email: payload.email
    };
  }
} 