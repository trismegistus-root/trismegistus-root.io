import Carousel from 'react-bootstrap/Carousel';
//import Article from '../Article/Article';
import store from '../../Redux_Logic/store';
import * as headlines from '../../Redux_Logic/CAROUSEL_HEADLINES_LOGIC/headlineselector';
import { useSelector } from 'react-redux';
import * as image from '../../Redux_Logic/CAROUSEL_HEADLINES_LOGIC/imageselector';


const ArticleScroll = () => {

    const viewSelector = useSelector((state)=>state.view);
    
    return (
        <>
        <Carousel variant = 'dark' bg = 'dark'>


            <Carousel.Item style = {{'height':'800px'}} interval = {3500}>
                <img className="d-block w-100" 
                    src = {image.article1(viewSelector)}/>
                <Carousel.Caption>
                    <div style = {{backgroundColor: 'whitesmoke', height: '50px'}}>
                    <h3>
                        {headlines.article1(viewSelector)}
                    </h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item style = {{'height':'800px'}} interval = {3500}>
                <img className="d-block w-100" 
                    src = {image.article2(viewSelector)}/>
                <Carousel.Caption>
                    <div style = {{backgroundColor: 'whitesmoke', height: '50px'}}>
                    <h3>
                        {headlines.article2(viewSelector)}
                    </h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item style = {{'height':'800px'}} interval = {3500}>
                <img className="d-block w-100" 
                    src = {image.article3(viewSelector)}/>
                <Carousel.Caption>
                    <div style = {{backgroundColor: 'whitesmoke', height: '50px'}}>
                    <h3>
                        {headlines.article3(viewSelector)}
                    </h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
        </>
    );
}

export default ArticleScroll;