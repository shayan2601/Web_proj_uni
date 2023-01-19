import nc from "next-connect";
import cors from "cors";

const handler = nc()
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch('http://localhost:8080/php_work/login.php', config);
    const data = res.json(response);
    console.log("DONE", data)
  });

export default handler;