import { Footer } from './footer';
import { Header } from './header/header';

export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
