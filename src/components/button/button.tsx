import React from 'react';
import classNames from 'classnames';
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
type ButtonType = typeof ButtonTypes[number];
type ButtonSize = typeof ButtonSizes[number];
interface BaseButtonProps {
  btnType?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}
type ButtonProps =  React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps


const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, size, children, disabled } = props;
  console.log(btnType);
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
  });
  return (
    <>
      <button disabled={disabled} className={classes}>
        {children}
      </button>
    </>
  );
};
Button.defaultProps = {
  disabled: false,
  btnType: 'default',
  size: 'middle',
};
export default Button;
