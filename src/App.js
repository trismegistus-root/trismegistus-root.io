import logo from './logo.svg';
import './App.css';
import Menu from './Components/Navbar/Navbar';
import ArticleScroll from './Components/Carousel/Carousel';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  return (
    <div>
      <Menu />
      <ArticleScroll/>
    </div>
  );
}

export default App;
