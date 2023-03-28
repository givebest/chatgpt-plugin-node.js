import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [configService.get('BASE_UEL'), configService.get('CORS_ORIGIN')],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('TODO Plugin')
    .setDescription(
      `A plugin that allows the user to create and manage a TODO list using ChatGPT. If you do not know the user's username, ask them first before making queries to the plugin. Otherwise, use the username "global".`,
    )
    .setVersion('1.0')
    .addServer(configService.get('BASE_UEL'))
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    // include: [AppModule],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
