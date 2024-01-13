import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const events = useLoaderData();

  // if (events.isError) {
  //   return <p>{events.message}</p>
  // }

  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' }
    // throw new Error('Could not fetch events.')
    throw json({ message: 'Could not fetch events.' }, { status: 500 })
  } else {
    const resData = await response.json();
    return resData.events;
  }
};