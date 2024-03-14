import type React from 'react';
import { useCallback, useRef } from 'react';

type Ref<T> = React.Ref<T> | undefined | false | 0 | '';

// HACK: This function is based on Torvin/react-ref-composer.
// NOTE: It had not been maintained for three years, so it could not be used as an external package.
export const useRefComposer = <T,>() => {
  const ref = useRef<T | null>(null);
  const prevRefs = useRef<Ref<T>[]>();

  const cb = useCallback((val: T | null) => {
    ref.current = val;
    prevRefs.current!.forEach(ref => updateRef(ref, val));
  }, []);

  return useCallback(
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity:
    (...refs: Ref<T>[]) => {
      if (prevRefs.current) {
        if (prevRefs.current.length !== refs.length) {
          throw new Error(`args length mismatch: old length: ${prevRefs.current.length}, new length: ${refs.length}`);
        }

        for (let i = 0; i < refs.length; i++) {
          const oldRef = prevRefs.current[i];
          if (oldRef !== refs[i]) {
            updateRef(oldRef, null);
          }
        }

        for (let i = 0; i < refs.length; i++) {
          const oldRef = prevRefs.current[i];
          const newRef = refs[i];
          if (oldRef !== newRef) {
            prevRefs.current[i] = newRef;
            updateRef(newRef, ref.current);
          }
        }
      }

      prevRefs.current = refs;
      return cb;
    },
    [cb],
  );
};

const updateRef = <T,>(ref: Ref<T>, value: T | null) => {
  if (!ref) {
    return;
  }

  if (typeof ref === 'function') {
    ref(value);
  } else if ('current' in ref) {
    (ref as React.MutableRefObject<T | null>).current = value;
  } else {
    throw new Error('First argument should be a React ref or a falsy value.');
  }
};
