import { useRouteLoaderData, json } from "react-router-dom";

import EventItem from '../components/EventItem';

const EventDetailsPage = () => {
  const data = useRouteLoaderData('event-details');

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailsPage;

export async function loader({ request, params }) {
  const id = params.id

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({ message: 'Could not fetch this event.' }, { status: 500 });
  } else {
    return response;
  }
}