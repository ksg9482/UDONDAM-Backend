import  dataBase  from 'sequelize';
//import { config } from '../config/config';

import type {IusersAttributes, usersCreationAttributes} from './users';
import type {IcommentsAttributes, commentsCreationAttributes} from './comments';
import type {IlikesAttributes, likesCreationAttributes} from './likes';
import type {IpostsAttributes, postsCreationAttributes} from './posts';
import type {IrecentSearchsAttributes, recentSearchsCreationAttributes} from './recentsearchs';
import type {ItagsAttributes, tagsCreationAttributes} from './tags';
import type {Iposts_tagsAttributes, posts_tagsCreationAttributes} from './posts_tags';

import { Users } from './users';
import { Comments } from './comments';
import { Likes } from './likes';
import { Posts } from './posts';
import { RecentSearchs } from './recentsearchs';
import { Tags } from './tags';
import { Posts_Tags } from './posts_tags';

import fs from 'fs';
import path from 'path';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const db:any = {};

export let sequelize:any;
 sequelize = new dataBase.Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: 'mysql'
    }
    //timezone 추가?
)


fs
  .readdirSync(__dirname)
  .filter((file:any) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file:any) => {
    const model = require(path.join(__dirname, file))(sequelize, dataBase.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;



export {
    Users,
    Comments,
    Likes,
    Posts,
    RecentSearchs,
    Tags,
    Posts_Tags,
}

export type {
IusersAttributes,
IcommentsAttributes,
IlikesAttributes,
IpostsAttributes,
IrecentSearchsAttributes,
ItagsAttributes,
Iposts_tagsAttributes
}

export function Sequelize() {
Users.initModel(sequelize);
Comments.initModel(sequelize);
Likes.initModel(sequelize);
Posts.initModel(sequelize);
RecentSearchs.initModel(sequelize);
Tags.initModel(sequelize);
Posts_Tags.initModel(sequelize);
}

