import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-details");
  const event = data.event;
  return (
    <>
      <EventForm event={event} />
    </>
  );
}

export default EditEventPage;

export async function action({ request, params }) {
  const id = params.id;

  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    date: data.get("date"),
  };

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: "Could not edit event." }, { status: 500 });
  }

  return redirect("/events/");
}
