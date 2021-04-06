import Home from './components/Home';
import TagList from './components/TagList';
import Details from './components/Details';

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
    component: Details,
  },
];
