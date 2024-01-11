import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h2>Event Details</h2>
      <p>Details on a chosen event: {params.id}</p>
    </>
  );
};

export default EventDetailsPage;
