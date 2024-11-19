import { Test, TestingModule } from '@nestjs/testing';
import { EletricController } from './eletric.controller';

describe('EletricController', () => {
  let controller: EletricController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EletricController],
    }).compile();

    controller = module.get<EletricController>(EletricController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
