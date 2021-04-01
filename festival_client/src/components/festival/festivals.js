import { useEffect } from "react";

export const Festival = () => {
    
    useEffect(() => {}, []);
        fetch('http://localhost:3000/festivals')
        .then(response => response.json())
        .then(data => console.log("festivals: ", data))
    
    return (
        <div>
            <h1>Festival Ranker</h1>
        </div>
    );
}