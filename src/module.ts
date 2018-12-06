import Koa from "koa";


export abstract class Module {
  abstract Handle(koa: Koa) : void;
}