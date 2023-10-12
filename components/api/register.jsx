export default async () => {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    const response = await fetch(
      `http://localhost:1337/api/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    );
    const data = await response.JSON();

    if (response.ok) {
      res.status(200).JSON({ message: "User registered successfully" });
    } else {
      res
        .status(data.statusCODE)
        .JSON({ error: data.message[0].message[0].message });
    }
  } else {
    res.status(405).JSON({ error: "Method not allowed" });
  }
};
