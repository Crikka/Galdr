import Koa, { Context, Middleware } from "koa";
import router from 'koa-route';

import SymbolService from "./impl/symbol";

import "reflect-metadata";


export function get(value: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let middlewares: Middleware[] = Reflect.getMetadata(SymbolService, target) || [];

    middlewares.push(router.get(value, descriptor.value));

    Reflect.defineMetadata(SymbolService, middlewares, target);
  };
}

export function head(value: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let middlewares: Middleware[] = Reflect.getMetadata(SymbolService, target) || [];

    middlewares.push(router.head(value, descriptor.value));

    Reflect.defineMetadata(SymbolService, middlewares, target);
  };
}

export function post(value: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let middlewares: Middleware[] = Reflect.getMetadata(SymbolService, target) || [];

    middlewares.push(router.post(value, descriptor.value));

    Reflect.defineMetadata(SymbolService, middlewares, target);
  };
}

export function put(value: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let middlewares: Middleware[] = Reflect.getMetadata(SymbolService, target) || [];

    middlewares.push(router.put(value, descriptor.value));

    Reflect.defineMetadata(SymbolService, middlewares, target);
  };
}

export function patch(value: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let middlewares: Middleware[] = Reflect.getMetadata(SymbolService, target) || [];

    middlewares.push(router.patch(value, descriptor.value));

    Reflect.defineMetadata(SymbolService, middlewares, target);
  };
}

export function del(value: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let middlewares: Middleware[] = Reflect.getMetadata(SymbolService, target) || [];

    middlewares.push(router.del(value, descriptor.value));

    Reflect.defineMetadata(SymbolService, middlewares, target);
  };
}
