import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ApiPluginModule } from './api-plugin/api-plugin.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    ApiPluginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
