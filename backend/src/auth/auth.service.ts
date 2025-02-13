import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

  // Método para generar un token JWT
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Método para validar un usuario (esto es un ejemplo, deberás adaptarlo a tu lógica de usuarios)
  async validateUser(email: string, password: string): Promise<any> {
    // Aquí deberías implementar la lógica para validar el usuario contra tu base de datos
    // Este es solo un ejemplo
    if (email === 'test@example.com' && password === 'test') {
      return { id: 1, email: email };
    }
    throw new UnauthorizedException('Credenciales inválidas');
  }
}
