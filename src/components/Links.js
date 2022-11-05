import React from "react";

export default function Links(props){
    console.log(props);

return (
    <div className="links">
        <h3>{props.name}</h3>
        <a href=" ">{props.url}</a>
    </div>
)
}