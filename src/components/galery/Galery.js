import React, { Component } from 'react' 
import Comp1 from "./Photos";  
import Comp2 from "./Videos";
import Footer from '../Footer';
import './Galery.css';
import  arrowDown1 from './arrowDown1.gif';



export class Galery extends Component {  
    constructor() {  
        super();  
        this.state = {  
            name: "ReactJS",  
            showHideComp1: false,  
            showHideComp2: false,  
        };  
        this.hideComponent = this.hideComponent.bind(this);  
    }  

    hideComponent(name) {  
        console.log(name);  
        switch (name) {  
            case "showHideComp1":  
                this.setState({ showHideComp1: !this.state.showHideComp1 });  
                break;  
            case "showHideComp2":  
                this.setState({ showHideComp2: !this.state.showHideComp2 });  
                break;  
            default:
                return null;
        }  
    }  
    render() {  
        const { showHideComp1, showHideComp2 } = this.state;  
        return (  
            <div className="galeryBody"> 

            <div className="showButton">                
                <div className="showB">  
                    <button className="btn btn-info" onClick={() => this.hideComponent("showHideComp1")}>  
                        Fotos 
              </button>  
              <img clasName="arrow-icon" src={arrowDown1}></img>
              
              {showHideComp1 && <Comp1 />} 
              </div> 

              <div>
                    <button className="btn btn-info" onClick={() => this.hideComponent("showHideComp2")}>  
                        Videos 
              </button>  
                {showHideComp2 && <Comp2 />}  
                </div>
            </div>  
            <hr /> <hr /> <hr /> <hr /> <hr /> <hr />
            <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> 
            <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> 
            <Footer />
            </div>

        );  
    }  
}  
   
   
export default Galery  