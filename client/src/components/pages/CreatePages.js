import React from "react";
import {Link} from "react-router-dom";
import {refresh} from "../../services/users.service";

export const CreatePages = () =>{
    return(
        <div>
            <h1>CreatePages</h1>
            <button onClick={()=>{
                const a = refresh()
                console.log(a)
            }
            }>ddkdk</button>
            <Link to={'/links'}><button>fjfvv</button></Link>
        </div>
    )
}