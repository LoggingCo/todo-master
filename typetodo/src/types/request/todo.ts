export type AddTodoRequestType = {
  id: number;
  title: string;
  content: string;
  state: boolean;
};

export type UpdateTodoRequestType = {
  id: number;
  title: string;
  content: string;
  state: boolean;
};

export type DeleteTodoRequestType = number;
