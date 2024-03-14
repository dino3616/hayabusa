'use client';

import NextImage, { getImageProps } from 'next/image';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import { forwardRef, useMemo } from 'react';

const isImageSourceRemote = (src: string | unknown): src is string => typeof src === 'string';

type ImageProps = ComponentPropsWithoutRef<typeof NextImage>;

export const Image = forwardRef<ElementRef<typeof NextImage>, ImageProps>(({ src, blurDataURL, ...props }, ref) => {
  const remoteBlurDataURL = useMemo(
    () => (isImageSourceRemote(src) ? `/_next/image?url=${encodeURIComponent(src)}&w=8&q=70` : undefined),
    [src],
  );

  return <NextImage ref={ref} src={src} blurDataURL={remoteBlurDataURL || blurDataURL} {...props} />;
});

export const getBackgroundImage = ({ ...props }: ImageProps) => {
  const imageSet = getImageProps(props)
    .props.srcSet?.split(', ')
    .map(src => src.split(' '))
    .map(([url, dpi]) => `url("${url}") ${dpi}`)
    .join(', ');

  return `image-set(${imageSet})`;
};
