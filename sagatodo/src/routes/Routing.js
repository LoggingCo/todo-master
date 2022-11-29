import Error404 from 'pages/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import HomePage from '../pages/Home';
import TodoPage from '../pages/Todo';
import PrivateRoute from './PrivateRoute';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Error404 />} />

        <Route element={<Layout />}>
          <Route path={'/'} element={<HomePage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path={'/todo'} element={<TodoPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
