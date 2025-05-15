import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

import databaseConfig from './database.config';

const dataSource = new DataSource(databaseConfig() as DataSourceOptions);

export default dataSource;
