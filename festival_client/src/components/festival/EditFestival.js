import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const EditFestival = (props) => {
    const [formState, setFormState] = useState({
        festival_name: "",
        location: "",
        duration: "",
        description: "",
        link: ""
    });

    useEffect(() => {
        setFormState(props.festival);
        }, [props.festival]); //need this to be able to render festivals into the edit field when clicked on the UI

    const handleFieldChange = (e) => {
        const newState = { ...formState }; //newState will therefore equal whatever is written in the fields
        newState[e.target.name] = e.target.value; 
        setFormState(newState); //updates the formState in the memory
    };
    
    const handleEditFestival = (e) => {
        e.preventDefault();
        props.submit(formState);
    };
    
    return (
        <div>
            <h1>Edit Festival</h1>
            <form onSubmit={handleEditFestival}>
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
                <Button type="submit" style={{ background: "#ff007f" }}>Edit Festival</Button>
            </form>
        </div>
    )
};

export { EditFestival };