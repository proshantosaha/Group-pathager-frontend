export default async () => {
  if (req.method === "POST") {
    const { username, password } = req.body;

    const response = await fetch(`http://localhost:1337/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

 
    if (response.ok) {
      res.status(200).JSON({ token: data.jwt });
    } else {
      res
        .status(data.statusCODE)
        .JSON({ error: data.message[0].message[0].message });
    }
  } else {
    res.status(405).JSON({ error: "Method not allowed" });
  }
};
