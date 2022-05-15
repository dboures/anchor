import * as BufferLayout from "buffer-layout";
import { AccountsCoder } from "../index.js";
import { Idl } from "../../idl.js";

export class SplTokenSwapAccountsCoder<A extends string = string>
  implements AccountsCoder
{
  constructor(private idl: Idl) {}

}
