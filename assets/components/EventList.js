import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EventList = (props) => {
  const [eventList, setEventList] = useState([]);
  const [localEvents, setLocalEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchLocalEvents();
    fetchSingle();
    setLoading(false);
  }, []);

  const fetchLocalEvents = async () => {
    const response = await axios.get("/api/events");
    setEventList(response.data);
    setLoading(false);
  };

  const fetchSingle = async () => {
    const response = await axios.get("/api/events/3");
    console.log(response.data);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {eventList.map((event, _) => {
          return (
            <div key={event.id} className="col">
              <div className="card shadow-sm">
                <img
                  className="card-img-top"
                  src={
                    // event?.images[0]?.url ||
                    event?.image ||
                    "https://images.unsplash.com/photo-1472653431158-6364773b2a56?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469"
                  }
                  // alt={event?.images[0].alt_text || "image name"}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="text-gray-dark">{event?.description}</p>
                  <p>{event?.price}</p>
                  <p className="text-danger">
                    {props.dateTimeFormat(event.startDateTime)}
                  </p>
                  <Link
                    to={`events/${event.id}`}
                    className="btn btn-primary mx-1"
                  >
                    See more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
