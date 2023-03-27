import { Test, TestingModule } from '@nestjs/testing';
import { ApiPluginService } from './api-plugin.service';

describe('ApiPluginService', () => {
  let service: ApiPluginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiPluginService],
    }).compile();

    service = module.get<ApiPluginService>(ApiPluginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
