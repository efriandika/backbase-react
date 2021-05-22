import { Navbar } from './partials/Navbar';

export function LayoutDefault({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
