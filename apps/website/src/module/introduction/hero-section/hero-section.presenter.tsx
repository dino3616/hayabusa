'use client';

import AstronautImage from '@hayabusa/core/asset/astronaut.png';
import { css } from '@hayabusa/style/css';
import { flex } from '@hayabusa/style/patterns';
import { Image, getBackgroundImage as primitiveGetBackgroundImage } from '@hayabusa/ui/component/image';
import { AppleIcon } from '@hayabusa/ui/icon/apple-icon';
import { GooglePlayIcon } from '@hayabusa/ui/icon/google-play-icon';
import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { LogoAnimation } from './component/logo-animation';

type HeroSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'> & {
  getBackgroundImage?: typeof primitiveGetBackgroundImage;
};

export const HeroSection = ({
  getBackgroundImage = primitiveGetBackgroundImage,
  ...props
}: HeroSectionProps): ReactNode => (
  <section
    className={flex({
      pos: 'relative',
      direction: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '32',
      h: 'svh',
    })}
    {...props}
  >
    <div
      aria-hidden
      style={{
        maskImage: getBackgroundImage({ src: AstronautImage, alt: '', quality: 1 }),
        maskSize: 'cover',
        maskPosition: 'center',
      }}
      className={css({
        pos: 'absolute',
        inset: '0',
        w: 'full',
        h: 'full',
        bg: 'iris.1',
        content: '""',
      })}
    />
    <Image
      src={AstronautImage}
      sizes='100vw'
      alt=''
      fill
      priority
      className={css({
        objectFit: 'cover',
        maskImage: 'radial-gradient(circle at top, white, transparent 80%)',
        pointerEvents: 'none',
      })}
    />
    <LogoAnimation headingLevel='h1' />
    <div className={flex({ direction: 'column', gap: '16' })}>
      <motion.div
        className={css({
          pos: 'relative',
          mx: 'auto',
          shadow: 'xl',
        })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span
          aria-hidden
          className={css({
            pos: 'absolute',
            top: '[40%]',
            left: '[50%]',
            transform: 'translate(-50%,0%)',
            w: '[80%]',
            h: '[80%]',
            borderWidth: '[0.5px]',
            borderColor: 'iris.7',
            rounded: 'xl',
            bg: 'iris.3',
            content: '""',
          })}
        />
        <span
          aria-hidden
          className={css({
            pos: 'absolute',
            top: '[20%]',
            left: '[50%]',
            transform: 'translate(-50%,0%)',
            w: '[90%]',
            h: '[90%]',
            borderWidth: '[0.5px]',
            borderColor: 'iris.7',
            rounded: 'xl',
            bg: 'iris.3',
            content: '""',
          })}
        />
        <button
          type='button'
          className={css({
            isolation: 'isolate',
            px: '6',
            py: '3',
            borderWidth: '[2px]',
            borderColor: 'iris.7',
            rounded: 'xl',
            bg: 'iris.3',
            fontSize: '2xl',
            fontWeight: 'bold',
            color: 'iris.11',
            transition: 'colors',
            _hover: {
              bg: 'iris.4',
              borderColor: 'iris.8',
              cursor: 'pointer',
            },
          })}
        >
          Fly in the web
        </button>
      </motion.div>
      <div
        className={flex({
          alignItems: 'center',
          gap: '16',
        })}
      >
        <motion.button
          type='button'
          className={flex({
            alignItems: 'center',
            gap: '2',
            isolation: 'isolate',
            px: '6',
            py: '3',
            borderWidth: '[1px]',
            borderColor: 'iris.7',
            rounded: 'xl',
            shadow: 'xl',
            bg: 'iris.3',
            transition: 'colors',
            _hover: {
              bg: 'iris.4',
              borderColor: 'iris.8',
              cursor: 'pointer',
            },
          })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <GooglePlayIcon
            className={css({
              w: '6',
              h: '6',
            })}
          />
          <span
            className={css({
              fontSize: 'lg',
              fontWeight: 'bold',
              color: 'iris.11',
            })}
          >
            Get on Google Play
          </span>
        </motion.button>
        <motion.button
          type='button'
          className={flex({
            alignItems: 'center',
            gap: '2',
            isolation: 'isolate',
            px: '6',
            py: '3',
            borderWidth: '[1px]',
            borderColor: 'iris.7',
            rounded: 'xl',
            shadow: 'xl',
            bg: 'iris.3',
            transition: 'colors',
            _hover: {
              bg: 'iris.4',
              borderColor: 'iris.8',
              cursor: 'pointer',
            },
          })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <AppleIcon
            className={css({
              w: '6',
              h: '6',
              fill: 'pure.dark',
              _dark: {
                fill: 'pure.light',
              },
            })}
          />
          <span
            className={css({
              fontSize: 'lg',
              fontWeight: 'bold',
              color: 'iris.11',
            })}
          >
            Get on App Store
          </span>
        </motion.button>
      </div>
    </div>
  </section>
);
