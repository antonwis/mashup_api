import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
//import { Database } from 'https://deno.land/x/denodb/mod.ts';
import router from "./routes.ts";

// dotenv import loads .env file automagically
import "https://deno.land/x/dotenv/load.ts";

console.log(Deno.env.get("DB_URL"));

// Port number can't be listened if it's from Deno.env -- Bug??
// const port_from_env = Deno.env.get("PORT");  // 5000
const port = 5000;

const env = Deno.env.toObject();
const PORT = Number(env.PORT) || 5000;

const app = new Application();




app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on port ${PORT}`);

await app.listen(`localhost:${PORT}`);
