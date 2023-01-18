import swaggerUI from "swagger-ui-express";

import { app } from ".";
import swaggerJSON from "./swagger.json";

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.listen(3333, () =>
  console.log("Server is running! Acess: http://localhost:3333")
);
