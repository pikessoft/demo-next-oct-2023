import { routes } from "./routes";

const getUsers = async (setLoading: any) => {
  const res = await fetch(`${routes?.listUsers}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    setLoading(false);
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export { getUsers };
