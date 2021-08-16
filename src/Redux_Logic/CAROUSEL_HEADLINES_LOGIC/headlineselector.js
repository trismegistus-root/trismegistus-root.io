//For use with carousel headlines. For now, only 3 articles are necessary. 
import * as content from './headlinecontent';


export function article1 (view) {
    switch(view){
        case 'Left Wing':
            return content.article1.left
        case 'Right Wing': 
            return content.article1.right
        case 'Libertarian':
            return content.article1.lib
        default:
            return content.article1.right
    }
}

export function article2 (view) {
    switch(view){
        case 'Left Wing':
            return content.article2.left
        case 'Right Wing': 
            return content.article2.right
        case 'Libertarian':
            return content.article2.lib
        default:
            return content.article2.right
    }
}

export function article3 (view) {
    switch(view){
        case 'Left Wing':
            return content.article3.left
        case 'Right Wing': 
            return content.article3.right
        case 'Libertarian':
            return content.article3.lib
        default:
            return content.article3.right
    }
}