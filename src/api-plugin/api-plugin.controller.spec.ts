import { Test, TestingModule } from '@nestjs/testing';
import { ApiPluginController } from './api-plugin.controller';

describe('ApiPluginController', () => {
  let controller: ApiPluginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiPluginController],
    }).compile();

    controller = module.get<ApiPluginController>(ApiPluginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
