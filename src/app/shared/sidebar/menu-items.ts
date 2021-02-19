import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-file',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'UI Components',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/component/rwanda',
    title: 'Rwanda',
    icon: 'mdi mdi-global',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/landlords',
    title: 'Landlords',
    icon: 'mdi mdi-global',
    class: '',
    extralink: false,
    submenu: []
  },
  
];
