import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddFestival = (props) => {
    const [formState, setFormState] = useState({
        festival_name: "",
        location: "",
        duration: "",
        description: "",
        link: ""
    });

    const handleFieldChange = (e) => {
        const newState = { ...formState }; //newState will therefore equal whatever is written in the fields
        newState[e.target.name] = e.target.value; 
        setFormState(newState); //updates the formState in the memory
    };

    const handleAddFestival = (e) => {
        e.preventDefault();
        props.submit(
            formState.festival_name,
            formState.location,
            formState.duration,
            formState.description,
            formState.link
        );
    };

    return (
        <div>
            <h1>Add Festival</h1>
            <form onSubmit={handleAddFestival}>
                <label>
                    Festival Name
                    <input name="festival_name" value={formState.festival_name} onChange={handleFieldChange}></input>
                </label>
                <br></br>
                <label>
                    Location
                    <input name="location" value={formState.location} onChange={handleFieldChange}></input>
                </label>
                <br></br>
                <label>
                    Duration
                    <input name="duration" value={formState.duration} onChange={handleFieldChange}></input>
                </label>
                <br></br>
                <label>
                    Description
                    <input name="description" value={formState.description} onChange={handleFieldChange}></input>
                </label>
                <br></br>
                <label>
                    Link
                    <input name="link" value={formState.link} onChange={handleFieldChange}></input>
                </label>
                <br></br>
                <Button type="submit" style={{ background: "#ff007f" }}>Add Festival</Button>
            </form>
        </div>
    )
}

export { AddFestival };