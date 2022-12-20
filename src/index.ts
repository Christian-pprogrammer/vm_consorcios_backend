import express from "express";
import { api } from "./api";
import { AppDataSource } from "./data-source";
import cors from "cors";
import errorHandler from "./middlewares/error-handler";

AppDataSource.initialize()
  .then(async () => {
    console.log("DB ready");

    const app = express();

    app.use(express.json());
    app.use(cors());

    app.use("/api", api);

    app.use(errorHandler());

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => console.log("server listening on 4000"));
  })
  .catch((error) => console.log(error));
