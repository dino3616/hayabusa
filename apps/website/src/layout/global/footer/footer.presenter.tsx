import { css, cx } from '@hayabusa/style/css';
import { flex } from '@hayabusa/style/patterns';
import { BrandLogo } from '@hayabusa/ui/component/brand-logo';
import { Link } from '@hayabusa/ui/component/link';
import { ExternalLinkIcon } from '@hayabusa/ui/icon/external-link-icon';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ThemeSwitch } from './component/theme-switch';

type NavigationLinkProps = ComponentPropsWithoutRef<typeof Link>;

const NavigationLink = ({ className, children, ...props }: NavigationLinkProps): ReactNode => (
  <Link
    className={cx(
      'group',
      flex({
        alignItems: 'center',
        gap: '3',
        fontSize: 'lg',
        color: 'mauve.12',
        transition: 'all',
        tablet: { fontSize: 'xl' },
        _hover: { color: 'mauve.11' },
      }),
      className,
    )}
    {...props}
  >
    {children}
  </Link>
);

type FooterProps = Omit<ComponentPropsWithoutRef<'footer'>, 'children' | 'className'>;

export const Footer = ({ ...props }: FooterProps): ReactNode => (
  <footer
    className={flex({
      direction: 'column',
      alignItems: 'center',
      gap: '6',
      w: 'full',
      p: '6',
      tablet: {
        gap: '10',
        p: '10',
      },
    })}
    {...props}
  >
    <div
      className={flex({
        direction: 'column',
        justifyContent: 'space-between',
        gap: '16',
        w: 'full',
        pb: '6',
        borderBottomWidth: '[2px]',
        borderColor: 'mauve.6',
        tablet: {
          gap: '10',
          pb: '10',
        },
        laptop: {
          flexDir: 'row',
        },
      })}
    >
      <div className={flex({ direction: 'column', gap: '5' })}>
        <div className={flex({ direction: 'column', gap: '2' })}>
          <Link href='/' className={css({ transition: 'all', _hover: { opacity: '[0.7]' } })}>
            <span className={css({ srOnly: true })}>Hayabusa</span>
            <BrandLogo aria-hidden className={css({ h: '11', w: 'auto', tablet: { h: '14' } })} />
          </Link>
          <p className={css({ color: 'mauve.11' })}>AI-powered next-generation web user interface.</p>
        </div>
        <ThemeSwitch />
      </div>
      <nav aria-label='footer navigation'>
        <ul className={flex({ flexWrap: 'wrap', gap: '12', tablet: { gap: '16' } })}>
          <li className={flex({ direction: 'column', gap: '4' })}>
            <p className={css({ fontWeight: 'bold', color: 'mauve.11', tablet: { fontSize: 'lg' } })}>Reference</p>
            <ul className={flex({ direction: 'column', gap: '2' })}>
              <li>
                <NavigationLink href='https://github.com/dino3616/hayabusa' external>
                  Source code
                  <ExternalLinkIcon
                    className={css({
                      h: '4',
                      w: '4',
                      stroke: 'mauve.12',
                      transition: 'all',
                      _groupHover: { stroke: 'mauve.11' },
                    })}
                  />
                </NavigationLink>
              </li>
              <li>
                <NavigationLink
                  href='https://www.figma.com/file/luTS1mnDZa3q6i0E0gNEiu/website?type=design&node-id=0%3A1&mode=design&t=2sGaAIVr6RW5elyA-1'
                  external
                >
                  Design
                  <ExternalLinkIcon
                    className={css({
                      h: '4',
                      w: '4',
                      stroke: 'mauve.12',
                      transition: 'all',
                      _groupHover: { stroke: 'mauve.11' },
                    })}
                  />
                </NavigationLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <small className={css({ fontSize: 'sm', color: 'mauve.11' })}>Copyright &copy; shio all right reserved.</small>
  </footer>
);
