import React from "react";
import API from "../../utils/API";

const Row = () => {
    API.getUser()
    .then(res=>
        console.log(res.data.results)        
        );

    return (
        <div className="row">
            This is the row!
        </div>
    );
}
 
export default Row;