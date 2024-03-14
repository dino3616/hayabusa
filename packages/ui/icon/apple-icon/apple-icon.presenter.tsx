import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FaApple } from 'react-icons/fa';

type AppleIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const AppleIcon = ({ ...props }: AppleIconProps): ReactNode => <FaApple {...props} />;
