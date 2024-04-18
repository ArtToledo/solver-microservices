import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as path from 'path';

const dbDirectory = path.resolve(__dirname, 'db');
const dbFileName = 'questionsdb.sqlite3';
const dbFilePath = path.join(dbDirectory, dbFileName);

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: dbFilePath,
  autoLoadModels: true,
  synchronize: false,
};
