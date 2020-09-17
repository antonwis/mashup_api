import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./controllers/employee.ts";

const router = new Router();

router.get("/api/test/", getEmployees)
  .get("/api/test/:name", getEmployee)
  .post("/api/test/", addEmployee)
  .put("/api/test/:name", updateEmployee)
  .delete("/api/test/:name", deleteEmployee);

export default router;
