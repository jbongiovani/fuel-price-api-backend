import { Test, TestingModule } from '@nestjs/testing';
import { HybridController } from './hybrid.controller';

describe('HybridController', () => {
  let controller: HybridController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HybridController],
    }).compile();

    controller = module.get<HybridController>(HybridController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
