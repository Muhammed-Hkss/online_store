import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './apps/Login';
import Register from './apps/Register';
import Main from './components/Main';
import PrivateRoutes from './components/PrivateRoutes';
import About from './page/About';
import Favorite from './page/Favorite';
import ProductMore from './page/ProductMore';
import Basket from './page/Basket';
import Test from './Test';
import { routesList } from './utils/routesList';
import Account from './page/Account';
import Settings from './page/Settings';

function App() {
  return (
    <>
      <div className='App'></div>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/user/register' element={<Register/>} />
          <Route path='/auth/login' element={<Login/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/favorite' element={<Favorite/>} />
          <Route path='/product/:id' element={<ProductMore/>} />



          <Route element={<PrivateRoutes/>}>
            <Route path='/account' element={<Account/>} />
            <Route path='/basket' element={<Basket/>} />
            <Route path='/settings' element={<Settings/>} />
          </Route>


          <Route path='/test' element={<Test/>} />



          
        </Routes>
    </>
  );
}

export default App;
