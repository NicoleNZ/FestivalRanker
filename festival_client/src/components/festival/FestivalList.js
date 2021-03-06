import React from "react";

const FestivalList = (props) => {
    return (
                        <ul>
                            <h2>Festival List</h2>
                        {props.festivals.map((el, index) => ( 
                            <li key={index} onClick={() => props.handleClick(index)}>

                            {el.festival_name}

                            </li>
                        ))}
                        </ul>
    );
};

export { FestivalList };
