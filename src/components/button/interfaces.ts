import { CSSProperties, ReactElement } from 'react';

type colorButton =
  | 'is-black'
  | 'is-danger'
  | 'is-dark'
  | 'is-ghost'
  | 'is-info'
  | 'is-link'
  | 'is-primary'
  | 'is-success'
  | 'is-text'
  | 'is-warning'
  | 'is-white';

type sizeButton = 'is-large' | 'is-medium' | 'is-normal' | 'is-small';

type stateButton = 'is-active' | 'is-focused' | 'is-hovered';

export interface IButton {
  /**
   * Elements or components that go inside the button
   */
  children?: string | ReactElement | ReactElement[];
  /**
   * Classes that you want to apply to the button
   */
  className?: string;
  /**
   * Button color
   */
  color?: colorButton;
  /**
   * Button icon
   */
  icon?: JSX.Element;
  /**
   * Disable the button
   */
  isDisabled?: boolean;
  /**
   * Full width button
   */
  isFullwidth?: boolean;
  /**
   * Invert the colors of the button's text and background
   */
  isInverted?: boolean;
  /**
   * The light color of the color assigned to the button
   */
  isLight?: boolean;
  /**
   * Loading Button
   */
  isLoading?: boolean;
  /**
   * Outlined button
   */
  isOutlined?: boolean;
  /**
   * Adjust the size according to the screen
   */
  isResponsive?: boolean;
  /**
   * Rounded button
   */
  isRounded?: boolean;
  /**
   * Non-interactive button
   */
  isStatic?: boolean;
  /**
   * Click event
   */
  onClick?: () => void;
  /**
   * Button size
   */
  size?: sizeButton;
  /**
   * Button state
   */
  state?: stateButton;
  /**
   * Styles that you want to apply to the button
   */
  style?: CSSProperties;
  /**
   * Button text
   */
  text?: string;
}
