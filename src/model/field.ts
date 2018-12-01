import SymbolORM from "./impl/symbol";


export default function field(option: Object = {}) {
  return Reflect.metadata(SymbolORM, option);
}