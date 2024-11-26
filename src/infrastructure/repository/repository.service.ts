import { Injectable } from '@nestjs/common';
import * as sqlite3 from 'sqlite3';


//todo parei aqui!
@Injectable()
export class RepositoryService {
  async criarTabela(tipoListado: any[]): Promise<void> {
    const db = new sqlite3.Database('banco.db');
    const tabela = tipoListado.reduce((acc, item) => {
      const chave = Object.keys(item)[0];
      const tipo = item[chave];
      acc[chave] = tipo;
      return acc;
    }, {});

    const sql = `CREATE TABLE tabela (
      ${Object.keys(tabela)
        .map((chave) => `${chave} ${tabela[chave]}`)
        .join(', ')}
    )`;

    db.run(sql, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Tabela criada com sucesso!');
      }
    });

    db.close();
  }
}
