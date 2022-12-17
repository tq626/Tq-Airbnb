import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';



import theme from './assets/theme';
import store from './store'
import App from '@/App';
// 导入重置样式文件
import 'normalize.css'
// 引入
import 'antd/dist/reset.css'
import './assets/css/index.less'
// import "./assets/css/index.less"
// @ => src: webpack
// 问题: react脚手架隐藏webpack
// 解决一: npm run eject
// 解决二: craco => create-react-app config (安装 npm i @craco/craco@alpha -D) alpha版本 


// ReactDOM.createRoot.render() 这个方法是将所有的虚拟DOM转换成真实DOM
// 每个组件里面的render()是将元素转换成虚拟DOM

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 路由中是异步加载, 所以用Suspense包裹起来更好不会报错 */}  
    {/* 组件<Provider store={store}> 需要包裹组件<Suspense fallback="loading"> 因为组件有用到异步加载, 如果组件<Provider store={store}>没有包裹组件<Suspense fallback="loading"> 那么store在给异步组件提供数据的时候可能该组件还没有加载出来, 异步加载的js文件发出去的事件dispatch() 解决方案: 将组件<Provider store={store}>包裹组件<Suspense fallback="loading"> */}
    <Provider store={store}> 
      <Suspense fallback="loading">   
          <ThemeProvider theme={theme}>
            <HashRouter>
              <App />
            </HashRouter>
          </ThemeProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>
);

