import { Injectable } from '@nestjs/common';

@Injectable()
export class DomainService {
  findAll() {
    return `retornando todos`;
  }

  findOne(id: number) {
    return `encontrando por id ${id}`;
  }

  remove(id: number) {
    return `removendo por id ${id}`;
  }
}
