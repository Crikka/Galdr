import Koa, { Context, Middleware } from "koa";
import router from 'koa-route';

import SymbolService from "./impl/symbol";

import "reflect-metadata";


export default function serve<T>(service: T, koa: Koa) {
  let middlewares: any = Reflect.getMetadata(SymbolService, service);
  if (!middlewares) middlewares = [];

  for (let middleware of middlewares) {
    koa.use(middleware);
  }
}

