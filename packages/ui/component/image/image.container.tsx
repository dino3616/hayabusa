'use client';

import type { Property } from 'csstype';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import { forwardRef, useRef, useState } from 'react';
import { Skeleton } from '#ui/component/skeleton';
import { useRefComposer } from '#ui/hook/ref-composer';
import { Image as ImagePresenter } from './image.presenter';

type ImageProps = Omit<ComponentPropsWithoutRef<typeof ImagePresenter>, 'placeholder'>;

export const Image = forwardRef<ElementRef<typeof ImagePresenter>, ImageProps>(({ priority, ...props }, ref) => {
  const [isLoaded, setIsLoaded] = useState<boolean>();
  const innerImageRef = useRef<HTMLImageElement>(null);
  const refComposer = useRefComposer<HTMLImageElement>();

  const placeholder = priority ? undefined : 'blur';

  return (
    <Skeleton
      variant={{
        'effect-hidden': isLoaded || !placeholder,
      }}
      style={{
        position: innerImageRef.current?.style.position as Property.Position,
        inset: innerImageRef.current?.style.inset,
        top: innerImageRef.current?.style.top,
        right: innerImageRef.current?.style.right,
        bottom: innerImageRef.current?.style.bottom,
        left: innerImageRef.current?.style.left,
        borderRadius: innerImageRef.current?.style.borderRadius,
        borderEndEndRadius: innerImageRef.current?.style.borderEndEndRadius,
        borderTopLeftRadius: innerImageRef.current?.style.borderTopLeftRadius,
        borderTopRightRadius: innerImageRef.current?.style.borderTopRightRadius,
        borderEndStartRadius: innerImageRef.current?.style.borderEndStartRadius,
        borderStartEndRadius: innerImageRef.current?.style.borderStartEndRadius,
        borderBottomLeftRadius: innerImageRef.current?.style.borderBottomLeftRadius,
        borderStartStartRadius: innerImageRef.current?.style.borderStartStartRadius,
        borderBottomRightRadius: innerImageRef.current?.style.borderBottomRightRadius,
      }}
    >
      <ImagePresenter
        ref={refComposer(innerImageRef, ref)}
        placeholder={placeholder}
        priority={priority}
        onLoadStart={() => setIsLoaded(false)}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </Skeleton>
  );
});
