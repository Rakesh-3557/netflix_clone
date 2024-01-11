import React from "react";
import Netflix from "./netflix";
import Netflix2ndpage from "./Netflix2ndpage";
import Net3rdpage from "./Net3rdpage";
import Net4thpage from "./Net4thpage";
import Net5thpage from './Net5thpage';
import Net6thpage from './Net6thpage';
import "./global.css";
import Netlastpage from "./Netlastpage";




function App(){
    return(
        <div><Netflix/>
        <div><Netflix2ndpage/></div>
        <div><Net3rdpage/></div>
        <div><Net4thpage/></div>
        <div><Net5thpage/></div>
        <div><Net6thpage/></div>
        <div><Netlastpage/></div>
        </div>
       
    )
}
export default App;