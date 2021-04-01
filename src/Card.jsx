import React, { Component } from "react" ;

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import s105 from "./image/105.png";





export default class Card extends Component{



       side(){
          const sideUrl = s105 ;
           if(this.props.element.selected){
           return this.props.backSide ;
           }
          
        return  sideUrl ;
        }
    
      render(){
      return    (
 
            <div  className="cardSide"  onClick={()=>this.props.onCheck(this.props.element)}  >   
                       <img src={this.side()} alt="asfa" /> 

           </div>
 );
      }

}

