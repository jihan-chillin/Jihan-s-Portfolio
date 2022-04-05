import {Sequelize} from 'sequelize'
import config from '../../config/config.json';

import UserModel from './user';

const env = process.env.NODE_ENV || 'development';
const envConfig = config[env]
const db:any = {}

const sequelize = new Sequelize(
    envConfig.database, 
    envConfig.username, 
    envConfig.password, 
    envConfig
)

db.User = UserModel(sequelize, Sequelize);

// 테이블 생성
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  
export default db;