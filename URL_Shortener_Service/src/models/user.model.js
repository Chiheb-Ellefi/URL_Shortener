import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database/connect.js";

class User extends Model {}
User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    num_urls: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize, tableName: "users", modelName: "User", timestamps: true }
);
export default User;
