import type { BuiltInModule } from "node:process";

declare const getBuiltinModule: <ID extends keyof BuiltInModule>(moduleSpecifier: ID) => Promise<BuiltInModule[ID]>;
