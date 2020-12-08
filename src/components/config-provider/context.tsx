import React from 'react'
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls:(suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `dou-${suffixCls}` : 'dou';
  }
})
export interface ConfigConsumerProps{
  getPrefixCls:(suffixCls?: string, customizePrefixCls?: string)=>string
}

export const ConfigConsumer = ConfigContext.Consumer