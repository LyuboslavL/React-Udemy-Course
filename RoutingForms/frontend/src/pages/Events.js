import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "Football Game" },
  { id: "e2", title: "Museum Visit" },
  { id: "e3", title: "Cooking Class" },
];

const Events = () => {
  return (
    <>
      <h1>Events Page</h1>
      <p>List of all the events.</p>
      <ul>
        {DUMMY_EVENTS.map((ev) => (
          <li key={ev.id}>
            <Link to={ev.id}>{ev.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
