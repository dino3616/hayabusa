'use client';

import { css, cx } from '@hayabusa/style/css';
import { flex } from '@hayabusa/style/patterns';
import { useTheme } from '@hayabusa/ui/component/theme-provider';
import { ComputerIcon } from '@hayabusa/ui/icon/computer-icon';
import { MoonIcon } from '@hayabusa/ui/icon/moon-icon';
import { SunIcon } from '@hayabusa/ui/icon/sun-icon';
import { type ComponentPropsWithoutRef, useEffect, useState } from 'react';

type ThemeSwitchProps = Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'onValueChange' | 'value'>;

export const ThemeSwitch = ({ ...props }: ThemeSwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      role='radiogroup'
      aria-label='theme switch'
      className={flex({
        alignItems: 'center',
        gap: '1',
        w: 'fit',
        px: '2',
        py: '1',
        borderWidth: '[1px]',
        borderColor: 'mauve.7',
        rounded: 'full',
        tablet: {
          gap: '2',
          px: '3',
          py: '2',
        },
      })}
      {...props}
    >
      <button
        role='radio'
        type='button'
        aria-label='light theme button'
        aria-checked={mounted && theme === 'light'}
        onClick={() => setTheme('light')}
        className={cx(
          'group',
          css({ p: '2', rounded: 'full', transition: 'all', cursor: 'pointer' }),
          mounted && theme === 'light' && css({ bg: 'mauve.5' }),
        )}
      >
        <SunIcon
          aria-hidden
          className={css({
            h: '4',
            w: '4',
            fill: 'mauve.11',
            stroke: 'mauve.11',
            transition: 'all',
            _groupHover: { fill: 'mauve.12', stroke: 'mauve.12' },
          })}
        />
        <span className={css({ srOnly: true })}>Switch to light theme</span>
      </button>
      <button
        role='radio'
        type='button'
        aria-label='dark theme button'
        aria-checked={mounted && theme === 'dark'}
        onClick={() => setTheme('dark')}
        className={cx(
          'group',
          css({ p: '2', rounded: 'full', transition: 'all', cursor: 'pointer' }),
          mounted && theme === 'dark' && css({ bg: 'mauve.5' }),
        )}
      >
        <MoonIcon
          aria-hidden
          className={css({
            h: '4',
            w: '4',
            fill: 'mauve.11',
            stroke: 'mauve.11',
            transition: 'all',
            _groupHover: { fill: 'mauve.12', stroke: 'mauve.12' },
          })}
        />
        <span className={css({ srOnly: true })}>Switch to dark theme</span>
      </button>
      <button
        role='radio'
        type='button'
        aria-label='system theme button'
        aria-checked={mounted && theme === 'system'}
        onClick={() => setTheme('system')}
        className={cx(
          'group',
          css({ p: '2', rounded: 'full', transition: 'all', cursor: 'pointer' }),
          mounted && theme === 'system' && css({ bg: 'mauve.5' }),
        )}
      >
        <ComputerIcon
          aria-hidden
          className={css({
            h: '4',
            w: '4',
            fill: 'mauve.11',
            stroke: 'mauve.11',
            transition: 'all',
            _groupHover: { fill: 'mauve.12', stroke: 'mauve.12' },
          })}
        />
        <span className={css({ srOnly: true })}>Switch to system theme</span>
      </button>
    </div>
  );
};
