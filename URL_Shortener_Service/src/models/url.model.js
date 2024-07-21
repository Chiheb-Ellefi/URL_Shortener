import { sequelize } from "../../config/database/connect.js";
import { Sequelize, Model, DataTypes } from "sequelize";

class URL extends Model {}

URL.init(
  {
    url_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize, tableName: "urls", modelName: "URL", timestamps: true }
);

export default URL;
