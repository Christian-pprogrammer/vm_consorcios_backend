import "reflect-metadata";
import { DataSource } from "typeorm";
import { Admin } from "./entity/Admin";
import { Administrator } from "./entity/Administrator";
import { ClienteComprando } from "./entity/ClienteComprando";
import { ClienteVendendo } from "./entity/ClienteVendendo";
import { Configs } from "./entity/Configs";
import { DisplayedConfigs } from "./entity/DisplayedConfigs";
import { SaleFormRegistration } from "./entity/SaleFormRegistration";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "kashin.db.elephantsql.com",
  port: 5432,
  username: "nshjmzam",
  password: "SOL8xdcEkf4QYfOaDFhJAJvI1Y-FTYIu",
  database: "nshjmzam",
  synchronize: true,
  logging: false,
  entities: [
    Admin,
    Configs,
    Administrator,
    ClienteVendendo,
    ClienteComprando,
    DisplayedConfigs,
    SaleFormRegistration,
  ],
  migrations: [],
  subscribers: [],
});
