import { Injectable } from '@nestjs/common';

@Injectable()
export class InfrastructureService {
  findAll() {
    return `retornando dados da infra`;
  }

  findOne(id: number) {
    return `encontrando por id ${id}`;
  }

  remove(id: number) {
    return `removendo por id ${id}`;
  }
}
