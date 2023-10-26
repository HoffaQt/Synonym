import { Application } from "express";
import synonymRoutes from "./synonym.route";

export default class Routes {
    constructor(app: Application) {
        app.use("/api/synonyms", synonymRoutes);
    }
}
