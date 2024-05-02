/**
 * Model: User
 */

import { DataTypes, Model, Sequelize } from "sequelize";

class User extends Model {
  static initiate(sequelize: Sequelize) {
    User.init(
      {
        email: {
          type: DataTypes.STRING(40),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
        salt: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        underscored: false,
        timestamps: true,
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

export default User;
