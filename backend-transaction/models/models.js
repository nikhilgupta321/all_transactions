const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Adjust the path as needed

try {
  const Transaction = sequelize.define(
    'transactions',
    {
      transactionid: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      txnid: {
        type: DataTypes.STRING(255),
      },
      ctxnid: {
        type: DataTypes.STRING(255),
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(255),
      },
      address: {
        type: DataTypes.TEXT,
      },
      country: {
        type: DataTypes.STRING(255),
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
      },
      currency: {
        type: DataTypes.CHAR(3),
      },
      journal: {
        type: DataTypes.TEXT,
      },
      refnumber: {
        type: DataTypes.TEXT,
      },
      title: {
        type: DataTypes.TEXT,
      },
      paymenttypes: {
        type: DataTypes.ENUM(
          'DOI Charge',
          'Hard Copy Charge',
          'Journal Maintenance',
          'Membership Charge',
          'Parcel/Post Charge',
          'Publication Charge',
          'Publication Charge with Hard Copy',
          'Subscription Charge',
          'Other'
        ),
      },
      paymentmode: {
        type: DataTypes.STRING(255),
      },
      status: {
        type: DataTypes.STRING(255),
      },
      done: {
        type: DataTypes.ENUM('true', 'false'),
      },
      txncode: {
        type: DataTypes.INTEGER,
      },
      secret: {
        type: DataTypes.STRING(255),
      },
      secretkey: {
        type: DataTypes.STRING(255),
      },
      creation: {
        type: DataTypes.DATE,
      },
      updated_by: {
        type: DataTypes.STRING(100),
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      paymenttype: {
        type: DataTypes.STRING(255),
      },
      isused: {
        type: DataTypes.ENUM('Y', 'N'),
      },
      remark: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'transactions',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'transactionid' }],
        },
      ],
    }
  );

  module.exports = Transaction;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}


// const Item = sequelize.define(
//   'items',
//   {
//     id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       defaultValue: '',
//     },
//     email: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       defaultValue: '',
//     },
//     address: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       defaultValue: '',
//     },
//     derce: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       defaultValue: '',
//     },
//     price: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     tableName: "items",
//     timestamps: false,
//     indexes: [
//       {
//         name: "PRIMARY",
//         unique: true,
//         using: "BTREE",
//         fields: [{ name: "id" }],
//       },
//     ],
//   }
// );