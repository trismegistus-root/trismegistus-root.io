import Carousel from 'react-bootstrap/Carousel';
//import Article from '../Article/Article';
import pelosi from '../../Redux_Logic/CAROUSEL_HEADLINES_LOGIC/carousel_images/pelosi.jpg';
import {useState} from 'react';
import store from '../../Redux_Logic/store';
import * as headlines from '../../Redux_Logic/CAROUSEL_HEADLINES_LOGIC/headlineselector';
import { useSelector, useDispatch } from 'react-redux';

const ArticleScroll = () => {

    const viewSelector = useSelector((state)=>state.view);
    const [view, setView] = useState(viewSelector);
    
    return (
        <>
        <Carousel variant = 'dark' bg = 'dark'>


            <Carousel.Item style = {{'height':'800px'}} interval = {3500}>
                <img className="d-block w-100" 
                    src = {pelosi}/>
                <Carousel.Caption>
                    <div style = {{backgroundColor: 'whitesmoke', height: '50px'}}>
                    <h3>
                        {headlines.article1(viewSelector)}
                    </h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item style = {{'height':'800px'}} interval = {3500}>
                <Carousel.Caption>
                    <h3>
                        {headlines.article2(viewSelector)}
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item style = {{'height':'800px'}} interval = {3500}>
                <Carousel.Caption>
                    <h3>
                        {headlines.article3(viewSelector)}
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
        </>
    );
}

export default ArticleScroll;