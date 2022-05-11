
import {Users} from "../../models/users";

console.log("======Create Users Table======");

const create_table_users = async () => {
  await Users.sync({force:true})
  .then(()=>{
    console.log('users success');
  })
  .catch((err)=>{
    console.log('users error:', err);
  })
}

create_table_users();
// module.exports = {
//   up: async (queryInterface:any, Sequelize:any) => {
//     await queryInterface.createTable('users', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       email: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       password: {
//         allowNull: true,
//         type: Sequelize.STRING
//       },
//       nickname: {
//         allowNull: false,
//         defaultValue: "익명",
//         type: Sequelize.STRING
//       },
//       socialType: {
//         allowNull: false,
//         defaultValue: "basic",
//         type: Sequelize.STRING
//       },
//       manager: {
//         allowNull: false,
//         defaultValue: false,
//         type: Sequelize.BOOLEAN
//       },
//       area: {
//         allowNull: false,
//         type: Sequelize.STRING,
//         defaultValue: '인증해주세요'
//       },
//       area2: {
//         allowNull: false,
//         type: Sequelize.STRING,
//         defaultValue: '인증해주세요'
//       },
//       createAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updateAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     })
//   },
//   down: async (queryInterface:any, Sequelize:any) => {
//     let sql ='SET FOREIGN_KEY_CHECKS = 0';
//     await queryInterface.sequelize.query(sql, {
//         type: Sequelize.QueryTypes.RAW,
//       })
//     await queryInterface.dropTable('user');
//   }
// };