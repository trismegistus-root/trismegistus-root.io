import './App.css';
import Menu from './Components/Navbar/Navbar';
import ArticleScroll from './Components/Carousel/Carousel';


function App() {
  return (
    <div>
      <Menu />
      <div style = {{height: '100px'}}> </div>
      <ArticleScroll/>
    </div>
  );
}

export default App;
