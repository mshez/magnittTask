import Home from './components/Home';
import TagList from './components/TagList';
import Detail from './components/Detail';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/tag/:id',
    component: TagList,
  },
  {
    path: '/:id',
    component: Detail,
  },
];
