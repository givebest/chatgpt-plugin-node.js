import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiPluginService {
  constructor(private readonly configService: ConfigService) {}

  manifest() {
    const getConfigService = (key: string) => this.configService.get(key);

    return {
      schema_version: getConfigService('SCHEMA_VERSION'),
      name_for_model: getConfigService('NAME_FOR_MODEL'),
      name_for_human: getConfigService('NAME_FOR_HUMAN'),
      description_for_model: getConfigService('DESCRIPTION_FOR_MODEL'),
      description_for_human: getConfigService('DESCRIPTION_FOR_HUMAN'),
      auth: {
        type: 'user_http',
        authorization_type: 'bearer',
      },
      api: {
        type: 'openapi',
        url: getConfigService('BASE_UEL') + getConfigService('API_URL'),
        has_user_authentication: false,
      },
      logo_url: `${getConfigService('BASE_UEL')}/logo.png`,
      contact_email: getConfigService('CONTACT_EMAIL'),
      legal_info_url:
        getConfigService('BASE_UEL') + getConfigService('LEGAL_INFO_URL'),
    };
  }
}
