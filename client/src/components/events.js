import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from "react-bootstrap/CardGroup";

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
  //if you decide to pass different data, you must change the props (bc pass data from parent)
  return (
    <CardGroup className="Events">
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          location={event.location}
          time={event.eventtime}
        />
      ))}
    </CardGroup>
  );
}

export default Events;
