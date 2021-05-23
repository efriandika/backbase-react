import { Navbar } from './partials/Navbar';
import { Footer } from './partials/Footer';
import { Drawer } from './partials/Drawer';

export function LayoutDefault({ children }) {
  return (
    <>
      <Navbar />
        <div className="layout-content">
          {children}
        </div>
      <Footer />
      <Drawer />
    </>
  );
}
