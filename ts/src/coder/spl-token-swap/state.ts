import { StateCoder } from "../index.js";
import { Idl } from "../../idl";

export class SplTokenSwapStateCoder implements StateCoder {
  constructor(_idl: Idl) {}

  // TODO

  encode<T = any>(_name: string, _account: T): Promise<Buffer> {
    throw new Error("Need to implement");
  }
  decode<T = any>(_ix: Buffer): T {
    throw new Error("Need to implement");
  }
}
