import { Test, TestingModule } from '@nestjs/testing';
import { HydrogenController } from './hydrogen.controller';

describe('HydrogenController', () => {
  let controller: HydrogenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HydrogenController],
    }).compile();

    controller = module.get<HydrogenController>(HydrogenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
