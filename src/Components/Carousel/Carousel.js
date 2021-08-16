import Carousel from 'react-bootstrap/Carousel';
//import Article from '../Article/Article';
import pelosi from '../../articleimages/pelosi.jpg';
import {useState} from 'react';
import store from '../../Redux_Logic/store';
import * as headlines from '../../Redux_Logic/CAROUSEL_HEADLINES_LOGIC/headlines';

const ArticleScroll = () => {

    const [choice, setChoice] = useState(null);

    return (
        <>
        <Carousel variant = 'dark' bg = 'dark'>

            
            <Carousel.Item style = {{'height':'800px'}} interval = {3500}>
                <img className="d-block w-100" 
                    src = {pelosi}/>
                <Carousel.Caption>
                    <div style = {{backgroundColor: 'whitesmoke'}}>
                    <h3>{headlines.article1.left}</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item style = {{'height':'800px'}} interval = {3500}>
                <Carousel.Caption>
                    <h3>Second Article</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item style = {{'height':'800px'}} interval = {3500}>
                <Carousel.Caption>
                    <h3>Third Article</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}

export default ArticleScroll;