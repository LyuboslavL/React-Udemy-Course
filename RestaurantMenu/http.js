export async function fetchAvailableMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Can't fetch available meals...`);
  }

  return data;
}

export async function updateUserOrder(order) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order: {
        items: cartCtx.items,
        customer: customerData,
      },
    }),
  });
}
