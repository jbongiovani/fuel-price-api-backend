import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const sqliteConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'src/infrastructure/repository/apidb.db',
  entities: [__dirname + './../../domain/entities/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'localhost:5432',
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco',
  entities: [__dirname + './../../domain/entities/**/*.entity{.ts,.js}'],
  synchronize: true,
};

// export const mysqlConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'seu_usuario',
//   password: 'sua_senha',
//   database: 'nome_do_banco',
//   entities: [__dirname + './../../domain/entities/**/*.entity{.ts,.js}'],
//   synchronize: true,
// };
