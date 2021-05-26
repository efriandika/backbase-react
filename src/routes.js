import loadable from '@loadable/component';
import { PageSkeleton } from './components/layouts/page-skeleton/PageSkeleton';
import { LayoutDefault } from './components/layouts/LayoutDefault';

const lazyLoadOption = {
  fallback: <PageSkeleton />,
};

// Lazy Load Import / Dynamic Import
const Dashboard = loadable(() => import('./pages/dashboard/Dashboard'), lazyLoadOption);
const About = loadable(() => import('./pages/about/About'), lazyLoadOption);

// Application Routing
export const defaultRoute = '/dashboard'
export const routes = [
  {
    path: '/dashboard',
    component: () => <Dashboard />
  },
  {
    path: '/about',
    component: () => <About />,
    layout: (props) => <LayoutDefault {...props} />,
  },
];
