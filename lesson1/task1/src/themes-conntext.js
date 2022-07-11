import React from 'react';

export const themes = {
  dark: {
    fontColor: '#ffffff',
    background: '#222222',
  },
  light: {
    fontColor: '#00000',
    background: '#eeeeee',
  },
};

export const ThemedContext = React.createContext(themes.dark);
