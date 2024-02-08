/**
 * User model
 */

import Sequelize from "sequelize";

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      salt: {
        type: Sequelize.STRING(150),
        allowNull: false
      }
    }, {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: false,
      timestamps: true,
      paranoid: true,
      charset: "utf8",
      collate: "utf8_general_ci"
    });
  }
}

export default User;
