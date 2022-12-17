import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer';
import AppHeader from './components/app-header';
import useScrollTop from './hooks/useScrollTop';
import routes from './router';
// 集成material库
// import Button from '@mui/material/Button';
// 集成antd库
// import { Button } from 'antd'

function App() {

  useScrollTop() //不管跳转哪个页面都回到顶部

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <div className="page">
        { useRoutes(routes) }
      </div>

      {/* <Button variant="contained">Hello World</Button> */}

      {/* <Button type="primary">Primary Button</Button> */}
     <AppFooter></AppFooter>
    </div>
  );
}

export default App;
