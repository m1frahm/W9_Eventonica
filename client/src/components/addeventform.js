import { useState } from "react";

//To reference event info above (note this comes from server.js and id is not handled in front-end)
//{title: 'WIT Panel', location: 'Zoom', eventtime: "29/03/23"}

const AddEventForm = () => {
  //This is the state with the initial values empty"
  const [addevent, setAddEvent] = useState({
    title: "",
    location: "",
    eventtime: "",
  });

  const handleTitleChange = (e) => {
    e.preventDefault();
    let titleUserGives = e.target.value;
    //console.log(titleUserGives); //commenting out this was just to check typing
    setAddEvent((addevent) => ({ ...addevent, title: titleUserGives })); //similar to prior KC (passing new data)
   // console.log(addevent.title);
  };

  const handleLocationChange = (e) => {
    e.preventDefault();
    let locationUserGives = e.target.value;
    //console.log(locationUserGives);
    setAddEvent((addevent) => ({ ...addevent, location: locationUserGives })); //similar to prior KC (passing new data)
    //console.log(addevent.location);
  };

  const handleDateChange = (e) => {
    e.preventDefault();
    let dateUserGives = e.target.value;
    //console.log(dateUserGives);
    setAddEvent((addevent) => ({ ...addevent, eventime: dateUserGives })); //similar to prior KC (passing new data)
    //console.log(addevent.eventtime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddEvent(addevent);
    console.log("This is coming from handle submit",addevent);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Event Title:</label>
      <input
        type="text"
        id="add-event-title"
        placeholder="Title of your Event"
        required
        value={addevent.title} //this indicates we would need state
        onChange={handleTitleChange}
      />

      <label>Placeholder:</label>
      <input
        type="text"
        id="add-event-location"
        placeholder="Location of your Event"
        required
        value={addevent.location} //this indicates we would need state
        onChange={handleLocationChange}
      />

      <label>Date:</label>
      <input
        type="date"
        id="add-event-date"
        value={addevent.eventtime} //this indicates we would need state
        onChange={handleDateChange}
      />
    </form>
  );
};

export default AddEventForm;
