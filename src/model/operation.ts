import SymbolORM from "./impl/symbol";


export function save(model: any) {
  console.log(Reflect.getMetadata(SymbolORM, model));
}