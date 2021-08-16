import * as image from './imagecontent';

export function article1 (view) {
    switch(view){
        case 'Left Wing':
            return image.article1.left
        case 'Right Wing': 
            return image.article1.right
        case 'Libertarian':
            return image.article1.lib
        default:
            return image.article1.right
    }
}

export function article2 (view) {
    switch(view){
        case 'Left Wing':
            return image.article2.left
        case 'Right Wing': 
            return image.article2.right
        case 'Libertarian':
            return image.article2.lib
        default:
            return image.article2.right
    }
}

export function article3 (view) {
    switch(view){
        case 'Left Wing':
            return image.article3.left
        case 'Right Wing': 
            return image.article3.right
        case 'Libertarian':
            return image.article3.lib
        default:
            return image.article3.right
    }
}