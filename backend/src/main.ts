import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Reservas')
    .setDescription('API para el sistema de reservas')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // Habilitamos CORS para permitir peticiones desde el frontend
  app.enableCors();
  
  // Cambiamos el puerto por defecto a 3001
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
