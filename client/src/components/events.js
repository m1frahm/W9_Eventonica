import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from "react-bootstrap/CardGroup";
import AddEventForm from "./addeventform";

function Events() {
  const [events, setEvents] = useState([]); // using state to handle list of events

  useEffect(() => {
    fetch("http://localhost:8080/api/events")
      .then((response) => response.json())
      .then((events) => {
        setEvents(events);
        console.log("Events fetched...", events); //console.log just for checking
      });
  }, []);

// const postRequest = (newEvent) => {
//   console.log("From the parent", newEvent);
//   return fetch("http://localhost:8080/api/events", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newEvent),
//       })
//       .then((response) => { // function takes in response
//         return response.json(); //functions takes response as Json
//       })
//       .then((data) => { // this function takes data
//         //console.log("From the front", data);
//         console.log("From the front",data);
//         //setEvents((events) => [...events, data]) //this data is the data i want
//       })
//     }

  
  return (
    <div><CardGroup className="Events">
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          location={event.location}
          time={event.eventtime}
        />
      ))}
    </CardGroup>
    {/* <AddEventForm postRequest={postRequest}/> */}
    </div>
  );
}

export default Events;
