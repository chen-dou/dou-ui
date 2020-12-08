import {
  ConfigConsumer,
  ConfigContext,
} from './context';

// export interface ConfigProviderProps {
//   prefixCls?: string;
//   children?: React.ReactNode;
// }
// const ConfigProvider: React.FC<ConfigProviderProps> = props => {
//   const {prefixCls,children} = props
//   const getPrefixClsWrapper = (context: ConfigConsumerProps) => {
//     return (suffixCls: string, customizePrefixCls?: string) => {
//       const { prefixCls } = props;

//       if (customizePrefixCls) return customizePrefixCls;

//       const mergedPrefixCls = prefixCls || context.getPrefixCls('');

//       return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
//     };
//   };
//   return (<ConfigContext.Provider value={config}>
//             {children}
//         </ConfigContext.Provider>)
// }

export {
  ConfigContext,
  ConfigConsumer
};