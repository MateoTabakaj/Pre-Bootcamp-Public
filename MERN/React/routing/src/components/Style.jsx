import React from "react";
import { useParams } from "react-router-dom";


function Style (){
const { txtcl,bgcl } = useParams();

    return(
        <div style={{backgroundColor:`${bgcl}`}}>
            <h2 style={{color:`${txtcl}`}}>the word is :hello</h2>
        </div>
    )
}

export default Style;