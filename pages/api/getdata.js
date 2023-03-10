import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "ecomerce_website",
    user: "root",
    password: ""
  });
  try {
    const query = "SELECT title, image, price FROM samsung_data";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ products: data });
  } catch (error) {
    // unhide to check error
    // res.status(500).json({ error: error.message });
  }
}