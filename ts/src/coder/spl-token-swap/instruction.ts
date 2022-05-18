import * as BufferLayout from "buffer-layout";
import camelCase from "camelcase";
import { PublicKey } from "@solana/web3.js";
import { InstructionCoder } from "../index.js";
import { Idl } from "../../idl.js";

export class SplTokenSwapInstructionCoder implements InstructionCoder {
  constructor(_: Idl) {}

  encode(ixName: string, ix: any): Buffer {
    switch (camelCase(ixName)) {
      case "initialize": {
        return encodeInitialize(ix);
      }
      default: {
        throw new Error(`Invalid instruction: ${ixName}`);
      }
    }
  }
  encodeState(_ixName: string, _ix: any): Buffer {
    throw new Error("SPL token swap does not have state");
  }
}

function encodeInitialize({
  fees,
  swapCurve,
}: any): Buffer {
  let curveParamsBuffer = Buffer.alloc(32);
  const buf = Buffer.from(swapCurve.curveParameters.toArray().reverse());
  buf.copy(curveParamsBuffer);

  return encodeData({
    initialize: {
      ...fees,
      curveType: swapCurve.curveType,
      curveParameters: curveParamsBuffer
    },
  });
}

const LAYOUT = BufferLayout.union(BufferLayout.u8("instruction"));
LAYOUT.addVariant(
  0,
  BufferLayout.struct([
      BufferLayout.nu64("tradeFeeNumerator"),
      BufferLayout.nu64("tradeFeeDenominator"),
      BufferLayout.nu64("ownerTradeFeeNumerator"),
      BufferLayout.nu64("ownerTradeFeeDenominator"),
      BufferLayout.nu64("ownerWithdrawFeeNumerator"),
      BufferLayout.nu64("ownerWithdrawFeeDenominator"),
      BufferLayout.nu64("hostFeeNumerator"),
      BufferLayout.nu64("hostFeeDenominator"),
      BufferLayout.u8("curveType"),
      BufferLayout.blob(32, "curveParameters"),
  ]),
  "initialize"
);


function encodeData(instruction: any): Buffer {
  let b = Buffer.alloc(instructionMaxSpan);
  let span = LAYOUT.encode(instruction, b);
  return b.slice(0, span);
}

const instructionMaxSpan = Math.max(
  // @ts-ignore
  ...Object.values(LAYOUT.registry).map((r) => r.span)
);