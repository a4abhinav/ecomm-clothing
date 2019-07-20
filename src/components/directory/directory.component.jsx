import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections:[
                {
                    title:'HATS',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'regular',
                    id: 1
                },
                {
                    title:'JACKETS',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'regular',
                    id: 2
                },
                {
                    title:'SHOES',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'regular',
                    id: 3
                },
                {
                    title:'WOMENS',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 4
                },
                {
                    title:'MENS',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                }
            
            ]
        }
    }

   render(){
       return(
           <div className="directory-menu">
               {
                   this.state.sections.map(({id,title,imageUrl,size}) => (
                       <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                   ))
               }
           </div>
       )
   } 
}

export default Directory;