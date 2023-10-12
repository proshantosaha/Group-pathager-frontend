export default async () => {
  if (req.method === "GET") {
    const { token } = req.headers;

    const response = await fetch(
      `http://localhost:1337/api/auth/local/register`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.JSON();

    if (response.ok) {
      res.status(200).JSON(data);
    } else {
      res.status(data.statusCODE).JSON({ error: "Failed to fetch user data" });
    }
  } else {
    res.status(405).JSON({ error: "Method not allowed" });
  }
};
