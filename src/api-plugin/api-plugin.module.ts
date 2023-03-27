import { Module } from '@nestjs/common';
import { ApiPluginController } from './api-plugin.controller';
import { ApiPluginService } from './api-plugin.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [ApiPluginService],
  exports: [ApiPluginService],
  controllers: [ApiPluginController],
})
export class ApiPluginModule {}
