import { firaCode, getFontVariables, notoSans } from '@hayabusa/core/font/family';
import { css } from '@hayabusa/style/css';
import { type ReactNode, useEffect } from 'react';

type FontProviderProps = {
  children: ReactNode;
};

export const FontProvider = ({ children }: FontProviderProps): ReactNode => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.add(getFontVariables([firaCode]));
    htmlElement.classList.add(getFontVariables([notoSans]));
    htmlElement.classList.add(
      css({
        fontFamily: 'sans',
      }),
    );
  }, []);

  return children;
};
