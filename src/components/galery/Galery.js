import React, { Component } from 'react' 
import Comp1 from "./Photos";  
import Comp2 from "./Videos";
import Footer from '../Footer';


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
                <div>  
                    <button className="btn btn-info" onClick={() => this.hideComponent("showHideComp1")}>  
                        Fotos 
              </button>  
              {showHideComp1 && <Comp1 />} 
              </div> 

              <div>
                    <button className="btn btn-info" onClick={() => this.hideComponent("showHideComp2")}>  
                        Videos 
              </button>  
              <hr />  
                {showHideComp2 && <Comp2 />}  
                <hr /> 
                </div>
            </div>  
            <Footer />
            </div>

        );  
    }  
}  
   
   
export default Galery  