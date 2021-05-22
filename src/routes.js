import loadable from '@loadable/component';
import { PageLoader } from './components/layouts/page-loader/PageLoader';

const lazyLoadOption = {
  fallback: <PageLoader />,
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
