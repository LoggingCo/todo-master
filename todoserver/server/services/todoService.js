import Todo from '../models/todo/todo.js';
import { HandlerError } from '../util/handleError.js';
import { FailureData, SuccessData } from '../util/resultData.js';

export class TodoService {
  static async create(req, res, next) {
    try {
      const todo = await Todo.create({
        content: req.body.content,
      });
      res.status(200).json(SuccessData(todo));
    } catch (err) {
      HandlerError(err, next);
    }
  }
  static async read(req, res, next) {
    try {
      const todo = await Todo.findAll();
      res.status(200).json(SuccessData(todo));
    } catch (err) {
      HandlerError(err, next);
    }
  }
  static async update(req, res, next) {
    try {
      const todo = await Todo.findOne({
        where: { id: parseInt(req.params.todoId, 10) },
      });

      if (!todo) {
        res.status(400).json(FailureData('존재하지 않는 목록입니다'));
      }

      await Todo.update(
        {
          content: req.body.content,
          flag: req.body.flag,
        },
        {
          where: {
            id: parseInt(req.params.todoId, 10),
          },
        },
      );

      const updateTodo = {
        id: parseInt(req.params.todoId, 10),
        content: req.body.content,
        flag: req.body.flag,
      };

      res.status(200).json(SuccessData(updateTodo));
    } catch (err) {
      HandlerError(err, next);
    }
  }
  static async delete(req, res, next) {
    try {
      const todo = await Todo.findOne({
        where: { id: parseInt(req.params.todoId, 10) },
      });

      if (!todo) {
        res.status(400).json(FailureData('존재하지 않는 목록입니다'));
      }

      await Todo.destroy({
        where: { id: parseInt(req.params.todoId, 10) },
      });
      res.status(200).json(SuccessData(parseInt(req.params.todoId, 10)));
    } catch (err) {
      HandlerError(err, next);
    }
  }
}
