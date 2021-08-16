import React from 'react';
import { useState } from 'react';
import Figure from 'react-bootstrap/Figure';

const Article = ({startImage, startHeadline, startRank}) => {
    const [leaning, SetLeaning] = useState('right');
    const [image, setImage] = useState(startImage);
    const [headline, setHeadline] = useState(startHeadline);
    const [rank, setRank] = useState(startRank);
    return(
        <>
        <Figure>
            <Figure.Image
                width = {500}
                height = {500}
                src = {image}
                />
            <Figure.Caption>
                {headline}
            </Figure.Caption>
        </Figure>

        </>
    );
}

export default Article;