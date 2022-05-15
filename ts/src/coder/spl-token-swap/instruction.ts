import * as BufferLayout from "buffer-layout";
import camelCase from "camelcase";
import { PublicKey } from "@solana/web3.js";
import { InstructionCoder } from "../index.js";
import { Idl } from "../../idl.js";

export class SplTokenSwapInstructionCoder implements InstructionCoder {
  constructor(_: Idl) {}

  encode(ixName: string, ix: any): Buffer {
    switch (camelCase(ixName)) {
      // case "initializeMint": {
      //   return encodeInitializeMint(ix);
      // }
      default: {
        throw new Error(`Invalid instruction: ${ixName}`);
      }
    }
  }
  encodeState(_ixName: string, _ix: any): Buffer {
    throw new Error("SPL token does not have state");
  }
}
