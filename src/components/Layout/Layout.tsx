import React, {ReactNode} from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

import './Layout.scss';

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
