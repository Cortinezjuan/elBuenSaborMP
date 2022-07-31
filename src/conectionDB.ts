import {createPool} from 'mysql'

export const connectMysql = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tpnode',
    
  });