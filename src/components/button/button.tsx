import React from 'react'
import classNames from 'classnames';

const tuple = <T extends string[]>(...args: T) => args;
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
const ButtonSizes = tuple('large','middle','small')
type ButtonType = typeof ButtonTypes[number];
type ButtonSize = typeof ButtonSizes[number];
interface BaseButtonProps {
  type?:ButtonType,
  size?:ButtonSize
}

const Button:React.FC<BaseButtonProps> = (props) => {
  const {type,size} = props
  console.log(type)
  const classes = classNames(
    'btn',
    {
      [`btn-${type}`]:type,
      [`btn-${size}`]:size
    }
  )
  return (
    <>
      <button className={classes}>233</button>
    </>
  )
}
export default Button