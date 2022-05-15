import { Idl } from "../../idl.js";
import { Coder } from "../index.js";
import { SplTokenSwapInstructionCoder } from "./instruction.js";
import { SplTokenSwapStateCoder } from "./state.js";
import { SplTokenSwapAccountsCoder } from "./accounts.js";
import { SplTokenSwapEventsCoder } from "./events.js";

/**
 * Coder for the SPL token program.
 */
export class SplTokenCoder implements Coder {
  readonly instruction: SplTokenSwapInstructionCoder;
  readonly accounts: SplTokenSwapAccountsCoder;
  readonly state: SplTokenSwapStateCoder;
  readonly events: SplTokenSwapEventsCoder;

  constructor(idl: Idl) {
    this.instruction = new SplTokenSwapInstructionCoder(idl);
    this.accounts = new SplTokenSwapAccountsCoder(idl);
    this.state = new SplTokenSwapStateCoder(idl);
    this.events = new SplTokenSwapEventsCoder(idl);
  }
}
