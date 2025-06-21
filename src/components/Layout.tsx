import React from 'react';
import ThemeChanger from './ThemeChanger';

type LayoutProps = {
  children: React.ReactNode;
  onThemeChange: (theme: string) => void;
};

const Layout: React.FC<LayoutProps> = ({ children, onThemeChange }) => {
  return (
    <div id='bg'>
      <div id='circles' className='big'></div>
      <div id='abs'>
        <div id='circle' className='main'>
          {children}
          <div id='circut'></div>
        </div>
        <ThemeChanger onThemeChange={onThemeChange} />
      </div>
    </div>
  );
};

export default Layout; 