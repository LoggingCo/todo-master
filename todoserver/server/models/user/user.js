import Sequelize, { Model, UUIDV4 } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(30),
          allowNull: false,
          unique: true,
          comment: '이메일',
        },

        password: {
          type: Sequelize.STRING(100),
          allowNull: false,
          comment: '비밀번호',
        },

        token: {
          type: Sequelize.UUID,
          unique: true,
          defaultValue: UUIDV4,
          comment: '인증 고유번호',
        },
      },
      {
        modelName: 'User',
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        paranoid: false,
        sequelize,
      },
    );
  }
}
export default User;
