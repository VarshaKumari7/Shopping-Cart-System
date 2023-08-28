import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Registration from "./components/Registration/registration";
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <Routes>
        <Route path="/" element={<Registration />}/>
        <Route path="login" element={<Login />}/>
        </Routes>
      </div>
    </Provider>
    </BrowserRouter>
 
  );
}
export default App;