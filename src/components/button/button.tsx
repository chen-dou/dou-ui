import React from 'react';
import classNames from 'classnames';

import { ConfigContext } from '../config-provider/index'



import './button.scss'

const tuple = <T extends string[]>(...args: T) => args;
const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text'
);
const ButtonSizes = tuple('large', 'middle', 'small');
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
type ButtonType = typeof ButtonTypes[number];
type ButtonSize = typeof ButtonSizes[number];
type ButtonHTMLType = typeof ButtonHTMLTypes[number];
interface BaseButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  htmlType?:ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
type ButtonProps = Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'> & BaseButtonProps
// interface ButtonProps extends Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>{
//   type?: ButtonType;
//   size?: ButtonSize;
//   disabled?: boolean;
//   className?: string;
//   children?: React.ReactNode;
//   htmlType?:ButtonHTMLType;
//   onClick?: React.MouseEventHandler<HTMLElement>;
// }

const Button: React.FC<ButtonProps> = (props) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('btn');
  const { type, htmlType,size, children, disabled } = props;
  let sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]:type,
      [`${prefixCls}-${sizeCls}`]:sizeCls
    }
  )
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }
  return (
    <button type={htmlType} disabled={disabled} onClick={handleClick} className={classes}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  disabled: false,
  htmlType: 'button'
};
export default Button;
