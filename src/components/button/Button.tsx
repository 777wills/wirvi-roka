// eslint-disable-next-line no-unused-vars
import React from 'react';

import './button.scss';

import classNames from 'classnames';
import { IButton } from '@components/button';

const namespace = 'wirfy-button';

export const Button = ({
  children,
  className,
  color = 'is-primary',
  icon,
  isDisabled = false,
  isFullwidth = false,
  isInverted = false,
  isLight = false,
  isLoading = false,
  isOutlined = false,
  isResponsive = false,
  isRounded = false,
  isStatic = false,
  onClick,
  size,
  state,
  style,
  text,
}: IButton) => {
  const buttonClasses = classNames(namespace, 'button', color, {
    [`${className}`]: className,
    'is-fullwidth': isFullwidth,
    'is-inverted': isInverted,
    'is-light': isLight,
    'is-loading': isLoading,
    'is-outlined': isOutlined,
    'is-responsive': isResponsive,
    'is-rounded': isRounded,
    'is-static': isStatic,
    [`${size}`]: size,
    [`${state}`]: state,
  });

  const iconClasses = classNames('icon', {
    'is-small': icon && !text,
    [`${namespace}__icon`]: icon && text,
  });

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      style={style}
      onClick={onClick}>
      {icon && <span className={iconClasses}>{icon}</span>}
      {text && <span>{text}</span>}
      {children}
    </button>
  );
};

export default Button;
