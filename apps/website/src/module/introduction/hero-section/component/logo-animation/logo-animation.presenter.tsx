'use client';

import { css } from '@hayabusa/style/css';
import { flex } from '@hayabusa/style/patterns';
import { Heading } from '@hayabusa/ui/component/heading';
import { motion, useAnimate } from 'framer-motion';
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react';

type LogoAnimationProps = Omit<ComponentPropsWithoutRef<typeof motion.span>, 'children' | 'className'> & {
  headingLevel: ComponentPropsWithoutRef<typeof Heading>['level'];
};

export const LogoAnimation = ({ headingLevel, ...props }: LogoAnimationProps): ReactNode => {
  const widthAnimationDelay = 0.2;
  const widthAnimationDuration = 0.4;
  const pathAnimationDelays = [0, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 1.0, 1.1, 1.3, 1.4, 1.5].map(
    delay => delay + widthAnimationDuration - 0.1,
  );

  const [spreadLogoGapAnimater, spreadLogoGapAnimate] = useAnimate<ElementRef<'span'>>();
  const [showSubtitleAnimater, showSubtitleAnimate] = useAnimate<ElementRef<'span'>>();

  return (
    <motion.span layout className={flex({ direction: 'column', gap: '2', w: 'fit' })} {...props}>
      <motion.span
        ref={spreadLogoGapAnimater}
        className={flex({
          alignItems: 'center',
          bg: 'pure.dark',
          mixBlendMode: 'darken',
          pointerEvents: 'none',
          shadow: 'xl',
          _dark: {
            bg: 'pure.light',
            mixBlendMode: 'plus-lighter',
          },
          '& svg': {
            fill: 'pure.light',
            _dark: {
              fill: 'pure.dark',
            },
          },
        })}
        initial={{ opacity: 0, width: 0, gap: '28px' }}
        animate={{ opacity: 1, width: 'auto' }}
        transition={{ duration: widthAnimationDuration, delay: widthAnimationDelay, ease: 'easeOut' }}
      >
        <Heading
          level={headingLevel}
          className={css({
            srOnly: true,
          })}
        >
          Hayabusa
        </Heading>
        <svg width='72' height='102' viewBox='0 0 72 102' xmlns='http://www.w3.org/2000/svg'>
          <title>H</title>
          <motion.path
            d='M71.625 23.125V33.375H0V33.25V23.125V0H10.25V23.125H61.375V0H71.625V23.125Z'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[0] }}
          />
          <motion.path
            d='M61.375 58H71.625V68.25V102.625H61.375V68.25H10.25V102.625H0V68.25V58H10.25H61.375Z'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[1] }}
          />
        </svg>
        <svg width='103' height='102' viewBox='0 0 103 102' xmlns='http://www.w3.org/2000/svg'>
          <title>A</title>
          <motion.path
            d='M0 102.5L52 0L102.5 102.5H92.375L58.5 33.25C58.417 33 58.292 32.7083 58.125 32.375C57.958 32.0417 57.583 31.4583 57 30.625C56.5 29.7917 55.958 29.0833 55.375 28.5C54.792 27.8333 54.042 27.2917 53.125 26.875C52.292 26.4583 51.458 26.375 50.625 26.625C49.792 26.7917 48.833 27.4167 47.75 28.5C46.75 29.5833 45.75 31.1667 44.75 33.25C39.917 43.3333 28.375 66.417 10.125 102.5H0Z'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[2] }}
          />
        </svg>
        <svg width='102' height='102' viewBox='0 0 102 102' xmlns='http://www.w3.org/2000/svg'>
          <title>Y</title>
          <motion.path
            d='M101.5 0C101.833 2.1667 102 4.2917 102 6.375C101.833 15.5417 99.458 24 94.875 31.75C90.292 39.5 84.083 45.625 76.25 50.125C68.5 54.5417 60.042 56.75 50.875 56.75C41.792 56.75 33.333 54.5417 25.5 50.125C17.75 45.625 11.583 39.5 7 31.75C2.417 24 0.083 15.5417 0 6.375C0 4.2917 0.125 2.1667 0.375 0H10.5C10.25 2.0833 10.125 4.1667 10.125 6.25V6.375C10.125 10.7917 10.792 15.0833 12.125 19.25C13.458 23.4167 15.375 27.1667 17.875 30.5C20.458 33.8333 23.417 36.75 26.75 39.25C30.083 41.75 33.833 43.7083 38 45.125C42.167 46.4583 46.458 47.125 50.875 47.125C58.208 47.125 65 45.3333 71.25 41.75C77.583 38.0833 82.542 33.125 86.125 26.875C89.792 20.5417 91.625 13.7083 91.625 6.375C91.625 4.2083 91.458 2.0833 91.125 0H101.5Z'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[3] }}
          />
          <motion.path
            d='M41 92.25C41 90.417 41.458 88.708 42.375 87.125C43.292 85.542 44.5 84.292 46 83.375C47.583 82.458 49.333 82 51.25 82C54 82 56.375 83 58.375 85C60.375 87 61.375 89.417 61.375 92.25C61.375 95.083 60.375 97.5 58.375 99.5C56.375 101.5 53.958 102.5 51.125 102.5C48.375 102.5 46 101.5 44 99.5C42 97.5 41 95.083 41 92.25Z'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[4] }}
          />
        </svg>
        <svg width='103' height='102' viewBox='0 0 103 102' xmlns='http://www.w3.org/2000/svg'>
          <title>A</title>
          <motion.path
            d='M0 102.5L52 0L102.5 102.5H92.375L58.5 33.25C58.417 33 58.292 32.7083 58.125 32.375C57.958 32.0417 57.583 31.4583 57 30.625C56.5 29.7917 55.958 29.0833 55.375 28.5C54.792 27.8333 54.042 27.2917 53.125 26.875C52.292 26.4583 51.458 26.375 50.625 26.625C49.792 26.7917 48.833 27.4167 47.75 28.5C46.75 29.5833 45.75 31.1667 44.75 33.25C39.917 43.3333 28.375 66.417 10.125 102.5H0Z'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[5] }}
          />
        </svg>
        <svg width='74' height='102' viewBox='0 0 74 102' xmlns='http://www.w3.org/2000/svg'>
          <title>B</title>
          <motion.path
            d='M0 33.6543V11.3456V10.3257V0H35.439L39.6458 0.127478L43.7251 0.254957C45.3394 0.339908 47.0823 0.679918 48.9517 1.27478C50.9067 1.7847 52.776 2.50704 54.5607 3.44191C56.3454 4.37679 57.8323 5.39662 59.0225 6.50139C59.872 7.26626 60.6797 8.24356 61.4445 9.4334C62.2941 10.6232 63.0171 11.898 63.6117 13.2577C64.2062 14.5325 64.6743 15.8923 65.0139 17.3371C65.4392 18.6968 65.6513 19.9716 65.6513 21.1614V21.2889C65.6513 22.4787 65.481 23.8384 65.1414 25.3682C64.8865 26.8979 64.4612 28.3851 63.8666 29.8299C63.2721 31.2747 62.6347 32.507 61.9545 33.5268H41.9404H42.9602L43.98 33.3993C44.8295 33.3993 45.7647 33.2293 46.7845 32.8894C47.8044 32.5495 48.7395 32.1245 49.5891 31.6146C50.5242 31.0198 51.2891 30.3824 51.8837 29.7024C52.8188 28.7676 53.5837 27.5353 54.1783 26.0056C54.8585 24.3909 55.1981 22.9036 55.1981 21.5438C55.1981 20.2691 54.8585 18.9093 54.1783 17.4645C53.4981 15.9348 52.6485 14.745 51.6287 13.8951C50.7792 13.0453 49.5462 12.3229 47.9318 11.728C46.4021 11.0481 44.9998 10.7082 43.7251 10.7082L42.4503 10.5807L41.1755 10.4532C36.7566 10.3683 29.0222 10.3257 17.9744 10.3257H10.8357L10.9631 33.6543H0Z'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[6] }}
          />
          <motion.path
            d='M69.7306 57.1104C70.3252 58.3002 70.8779 59.7024 71.3879 61.3171C71.9824 62.8469 72.4505 64.4616 72.7901 66.1613C73.1297 67.7757 73.3 69.2636 73.3 70.6231C73.3 72.9177 72.8748 75.4672 72.0252 78.2718C71.2604 81.0763 70.1977 83.7962 68.8383 86.4304C67.4789 88.9799 65.9909 91.1042 64.3765 92.8043C58.3422 99.2628 51.1616 102.62 42.8327 102.875H21.5438H0V57.1104H11.8555V92.5493H42.0678C47.5922 92.5493 52.3089 90.5943 56.2179 86.6853C60.1269 82.7763 62.0819 78.1014 62.0819 72.6627C62.0819 70.0285 61.3599 67.224 59.9148 64.2491C58.4697 61.1897 56.7279 58.8101 54.6882 57.1104H69.7306Z'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[7] }}
          />
        </svg>
        <svg width='103' height='102' viewBox='0 0 103 102' xmlns='http://www.w3.org/2000/svg'>
          <title>U</title>
          <motion.path
            d='M102.618 57.683C101.689 65.9298 98.7503 73.5868 93.7822 80.6552C88.905 87.6398 82.6748 93.1935 75.1015 97.3164C67.609 101.355 59.7025 103.375 51.3719 103.375C43.0414 103.375 35.1318 101.355 27.6424 97.3164C20.1529 93.2773 13.9267 87.8074 8.96169 80.9077C3.99666 73.9231 1.00977 66.3084 0 58.0617V57.683V0H10.3501V57.9354C11.781 67.612 16.4925 75.9012 24.4869 82.801C32.4812 89.6169 41.4005 93.0249 51.2407 93.0249C61.096 93.0249 70.0123 89.5745 77.9995 82.6748C85.9969 75.775 90.7125 67.4444 92.1363 57.683V0H102.497L102.618 57.683Z'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[8] }}
          />
          <motion.path
            d='M44.0293 59.6709C42.0098 57.6514 41 55.2111 41 52.3501C41 49.4891 42.0098 47.0488 44.0293 45.0293C46.0488 43.0098 48.4874 42 51.3552 42C54.2128 42 56.6464 43.0098 58.6659 45.0293C60.6854 47.0488 61.6952 49.4891 61.6952 52.3501C61.6952 55.2111 60.6854 57.6514 58.6659 59.6709C56.6464 61.6905 54.2128 62.7002 51.3552 62.7002C48.4874 62.7002 46.0488 61.6905 44.0293 59.6709Z'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[9] }}
          />
        </svg>
        <svg width='102' height='102' viewBox='0 0 102 102' xmlns='http://www.w3.org/2000/svg'>
          <title>S</title>
          <motion.path
            d='M101.37 57.875H101.5C100.41 65.958 97.41 73.417 92.5 80.25C87.58 87.083 81.41 92.5 74 96.5C66.58 100.5 58.79 102.5 50.62 102.5C42.54 102.5 34.79 100.5 27.37 96.5C19.95 92.5 13.79 87.083 8.87 80.25C3.95 73.417 1 65.958 0 57.875H10.12C11.7 67.292 16.45 75.375 24.37 82.125C32.29 88.792 41.04 92.125 50.62 92.125C58.54 92.125 66.25 89.5 73.75 84.25C81.25 79 86.37 72.625 89.12 65.125C31.95 43.875 3.16 33.25 2.75 33.25C5 27.25 8.66 21.7083 13.75 16.625C18.83 11.5417 24.66 7.5 31.25 4.5C37.83 1.5 44.33 0 50.75 0C60.5 0 70.04 3.25 79.37 9.75C88.79 16.25 95.2 24.0833 98.62 33.25H87.5C84.41 26.9167 79.25 21.5 72 17C64.83 12.4167 57.7 10.125 50.62 10.125C46.7 10.125 42.54 10.9167 38.12 12.5C33.7 14.0833 29.58 16.25 25.75 19C22 21.75 19.04 24.7083 16.87 27.875L101.37 57.875Z'
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[10] }}
          />
        </svg>
        <svg width='101' height='102' viewBox='0 0 101 102' xmlns='http://www.w3.org/2000/svg'>
          <title>A</title>
          <motion.path
            d='M0 102.5L52 0L102.5 102.5H92.375L58.5 33.25C58.417 33 58.292 32.7083 58.125 32.375C57.958 32.0417 57.583 31.4583 57 30.625C56.5 29.7917 55.958 29.0833 55.375 28.5C54.792 27.8333 54.042 27.2917 53.125 26.875C52.292 26.4583 51.458 26.375 50.625 26.625C49.792 26.7917 48.833 27.4167 47.75 28.5C46.75 29.5833 45.75 31.1667 44.75 33.25C39.917 43.3333 28.375 66.417 10.125 102.5H0Z'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: pathAnimationDelays[11] }}
            onAnimationComplete={async () => {
              await spreadLogoGapAnimate(
                spreadLogoGapAnimater.current,
                { gap: '56px' },
                {
                  onComplete: () => showSubtitleAnimate(showSubtitleAnimater.current, { width: 0 }, { delay: 0.8 }),
                },
              );
            }}
          />
        </svg>
      </motion.span>
      <p
        className={css({
          position: 'relative',
          textAlign: 'center',
        })}
      >
        <motion.span
          className={css({
            fontWeight: 'bold',
            fontSize: '6xl',
            color: 'pure.dark',
            _dark: {
              color: 'pure.light',
            },
          })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: widthAnimationDuration + widthAnimationDelay + 0.1, ease: 'easeOut' }}
        >
          The next-gen web User Interface
        </motion.span>
        <motion.span
          ref={showSubtitleAnimater}
          aria-hidden
          className={css({
            position: 'absolute',
            inset: '0',
            h: 'full',
            bg: 'pure.light',
            content: '""',
            _dark: {
              bg: 'pure.dark',
            },
          })}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: widthAnimationDuration, delay: widthAnimationDelay + 0.1, ease: 'easeOut' }}
        />
      </p>
    </motion.span>
  );
};
