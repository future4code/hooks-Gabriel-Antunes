import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersByName } from "./endpoints/getAllUsersByName";
import { getAllUsersByType } from "./endpoints/getAllUsersByType";
import { getAllUsersSort } from "./endpoints/getAllUsersSort";

// app.get("/users", getAllUsers)

// app.get("/users",getAllUsersByName)

// app.get("/users/:type",getAllUsersByType)

app.get("/users/soo/", getAllUsersSort)
