import Sequelize, { Model } from 'sequelize';

class Todo extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
          comment: '제목',
        },

        content: {
          type: Sequelize.TEXT,
          allowNull: false,
          comment: '내용',
        },

        state: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
          comment: '완료여부',
        },
      },
      {
        modelName: 'Todo',
        tableName: 'todos',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        paranoid: false,
        sequelize,
      },
    );
  }
}
export default Todo;
