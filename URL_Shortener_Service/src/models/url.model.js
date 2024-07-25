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
    click: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    qr_code: {
      type: DataTypes.STRING,
      defaultValue: false,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize, tableName: "urls", modelName: "URL", timestamps: true }
);

export default URL;
