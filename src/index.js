import 'dotenv/config';
// import { app } from "./server.js";
import { app } from "./Routes/api.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server was started. Port ${PORT}`)
})