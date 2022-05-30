import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
  },{
  method: "post",
  route: "/users",
  controller: UserController,
  action: "SignIn"
},{
  method: "psot",
  route: "/users",
  controller: UserController,
  action: "login"
},{
  method: "get",
  route: "/users/:id",
  controller: UserController,
  action: "one"
},  {
  method: "post",
  route: "/users",
  controller: UserController,
  action: "save"
}, {
  method: "delete",
  route: "/users/:id",
  controller: UserController,
  action: "remove"
},{
  method: "get",
  route: "/users/friends",
  controller: UserController,
  action: "friend"
}]