import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const User = sequelize.define(
  "Transactions",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    TransactionId: { type: DataTypes.INTEGER, allowNull: false },
    Status: { type: DataTypes.STRING, allowNull: false },
    Type: { type: DataTypes.STRING, allowNull: false },
    ClientName: { type: DataTypes.STRING, allowNull: false },
    Amount: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "Transactions",
  }
);

(async () => {
  try {
    await sequelize.sync();

    const transactions = await User.findAll();
    console.log(transactions);

    const count = await User.count();
  } catch (err) {
    console.error(err);
  }
})();
