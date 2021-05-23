import loadable from '@loadable/component';
import { PageSkeleton } from './components/layouts/page-skeleton/PageSkeleton';

const lazyLoadOption = {
  fallback: <PageSkeleton />,
};

// Lazy Load Import / Dynamic Import
const Dashboard = loadable(() => import('./containers/dashboard/Dashboard'), lazyLoadOption);
const About = loadable(() => import('./containers/about/About'), lazyLoadOption);

// Application Routing
export const defaultRoute = '/dashboard'
export const routes = [
  {
    path: '/dashboard',
    component: () => <Dashboard />
  },
  {
    path: '/about',
    component: () => <About />
  },
];
