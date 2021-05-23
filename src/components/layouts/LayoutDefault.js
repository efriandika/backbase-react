import { Navbar } from './partials/Navbar';
import { Footer } from './partials/Footer';

export function LayoutDefault({ children }) {
  return (
    <>
      <Navbar />
        <div className="layout-content">
          {children}
        </div>
      <Footer />
    </>
  );
}
