import React from 'react'
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/index'


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
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('btn');
  const {type,size} = props
  console.log(type)
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]:type,
      [`${prefixCls}-${size}`]:size
    }
  )
  return (
    <>
      <button className={classes}>233</button>
    </>
  )
}
export default Button