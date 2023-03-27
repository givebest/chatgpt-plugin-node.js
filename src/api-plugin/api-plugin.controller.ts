import { Controller, Get } from '@nestjs/common';
import { ApiPluginService } from './api-plugin.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('api-plugin')
@Controller('.well-known/')
export class ApiPluginController {
  constructor(private readonly apiPluginService: ApiPluginService) {}

  @Get('api-plugin.json')
  @ApiOperation({ summary: 'api-plugin' })
  manifest() {
    return this.apiPluginService.manifest();
  }
}
