import { useState } from "react";

const AddEventForm = () => {

    //To reference event info (note this comes from server.js and id is not handled in front-end)
    //{title: 'WIT Panel', location: 'Zoom', eventtime: "29/03/23"} 
    <form>
        <label>Event Title</label>
            <input
                type="text"
                id="add-event-title"
                placeholder="The Title of your Event"
                required
                value={event.title} //this indicates we would need state
                onChange={handleTitleChange}
    </>
)
}

export default AddEventForm;
