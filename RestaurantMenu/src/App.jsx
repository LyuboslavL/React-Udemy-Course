function App() {
  return (
    <>
      <h1>Steps</h1>
      <ol>
        <li>Create components:</li>
        <ul>
          <li>- for displaying products</li>
          <li>- the cart (in a modal)</li>
          <li>- checkout form (in a modal)</li>
        </ul>
        <li>Fetch meals (GET request)</li>
        <li>Allow users to add/remove items from cart</li>
        <li>
          Send cart and user data (full name, email, street, postal code, city)
          to the backend (POST request)
        </li>
        <li>Handle loading and error states</li>
      </ol>
    </>
  );
}

export default App;
