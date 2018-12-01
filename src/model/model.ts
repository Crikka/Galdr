import "reflect-metadata";

import SymbolORM from "./impl/symbol";


export default function model<T extends { new(...args: any[]): {} }>(constructor: T) {
  class Model extends constructor {
    constructor(...args: any[]) {
      super(...args);

      // Only iterate on final class
      if (this.constructor === Model) {
        let meta_fields: any = {};

        for (let key of Object.keys(this)) {
          if (Reflect.hasMetadata(SymbolORM, this, key)) {
            meta_fields[key] = {
              type: Reflect.getMetadata("design:type", this, key),
              option: Reflect.getMetadata(SymbolORM, this, key),
            }
          }
        }

        Reflect.defineMetadata(SymbolORM, meta_fields, this);
      }
    }
  }

  return Model;
}
