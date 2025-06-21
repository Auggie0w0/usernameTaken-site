import React from 'react';

type ThemeChangerProps = {
  onThemeChange: (theme: string) => void;
};

const ThemeChanger: React.FC<ThemeChangerProps> = ({ onThemeChange }) => {
  return (
    <div className="circular-theme-changer">
      <button className="theme-option-circle black" onClick={() => onThemeChange('black')}></button>
      <button className="theme-option-circle white" onClick={() => onThemeChange('white')}></button>
      <button className="theme-option-circle red" onClick={() => onThemeChange('red')}></button>
      <button className="theme-option-circle blue" onClick={() => onThemeChange('blue')}></button>
      <button className="theme-option-circle green" onClick={() => onThemeChange('green')}></button>
      <div className="theme-master-button"></div>
    </div>
  );
};

export default ThemeChanger; 