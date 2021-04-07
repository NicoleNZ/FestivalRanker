import React from "react";

const FestivalList = (props) => {
    return (
                        <ul>
                        {props.products.map((el, index) => ( 
                            <li key={index} onClick={() => props.handleClick(index)}>

                            {el.festival_name}

                            </li>
                        ))}
                        </ul>
    );
};

export { FestivalList };
