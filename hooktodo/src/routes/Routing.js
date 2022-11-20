import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import HomePage from '../pages/Home';
import TodoPage from '../pages/Todo';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/todo'} element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
