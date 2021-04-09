import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const DeleteFestival = (props) => {
    const [formState, setFormState] = useState({
        festival_name: "",
        location: "",
        duration: "",
        description: "",
        link: ""
    });

    useEffect(() => {
        setFormState(props.festival);
        }, [props.festival]); //need this to be able to render products into the delete field when clicked on the UI

    const handleDeleteFestival = (e) => {
        e.preventDefault();
        props.submit(formState);
    };
    
    return (
        <div>
        <h1>Delete Festival</h1>
        <form onSubmit={handleDeleteFestival}>
            <label>
                Festival Name
                <input name="festival_name" value={formState.festival_name}></input>
            </label>
            <br></br>
            <label>
                Location
                <input name="location" value={formState.location}></input>
            </label>
            <br></br>
            <label>
                Duration
                <input name="duration" value={formState.duration}></input>
            </label>
            <br></br>
            <label>
                Description
                <input name="description" value={formState.description}></input>
            </label>
            <br></br>
            <label>
                Link
                <input name="link" value={formState.link}></input>
            </label>
            <br></br>
            <Button type="submit" style={{ background: "#ff007f" }}>Delete Festival</Button>
        </form>
    </div>
    )
};

export { DeleteFestival };