import * as TodoApi from './todo.api';
import * as UserApi from './user.api';

export const handlers = [...Object.values(UserApi), ...Object.values(TodoApi)];
