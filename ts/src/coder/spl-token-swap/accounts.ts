import * as BufferLayout from "buffer-layout";
import { publicKey, uint64 } from "./buffer-layout.js";
import { AccountsCoder } from "../index.js";
import { Idl, IdlTypeDef } from "../../idl.js";
import { accountSize } from "../common.js";

export class SplTokenSwapAccountsCoder<A extends string = string>
  implements AccountsCoder
{
  constructor(private idl: Idl) {}
  public async encode<T = any>(
    accountName: string,
    account: T
  ): Promise<Buffer> {
    switch (accountName) {
      case "tokenSwap": {
        const buffer = Buffer.alloc(324);
        const len = TOKEN_SWAP_ACCOUNT_LAYOUT.encode(account, buffer);
        return buffer.slice(0, len);
      }
      default: {
        throw new Error(`Invalid account name: ${accountName}`);
      }
    }
  }

  public decode<T = any>(accountName: string, ix: Buffer): T {
    return this.decodeUnchecked(accountName, ix);
  }

  public decodeUnchecked<T = any>(accountName: string, ix: Buffer): T {
    throw new Error("Method not implemented.");
  }

  public memcmp(accountName: string, appendData?: any) {
    throw new Error("Method not implemented.");
  }

  public size(idlAccount: IdlTypeDef): number {
    return accountSize(this.idl, idlAccount) ?? 0;
  }

}

const TOKEN_SWAP_ACCOUNT_LAYOUT = BufferLayout.struct([
  BufferLayout.u8("version"),
  BufferLayout.u8("isInitialized"),
  BufferLayout.u8("bumpSeed"),
  publicKey("tokenProgramId"),
  publicKey("tokenAccountA"),
  publicKey("tokenAccountB"),
  publicKey("tokenPool"),
  publicKey("mintA"),
  publicKey("mintB"),
  publicKey("feeAccount"),
  uint64("tradeFeeNumerator"),
  uint64("tradeFeeDenominator"),
  uint64("ownerTradeFeeNumerator"),
  uint64("ownerTradeFeeDenominator"),
  uint64("ownerWithdrawFeeNumerator"),
  uint64("ownerWithdrawFeeDenominator"),
  uint64("hostFeeNumerator"),
  uint64("hostFeeDenominator"),
  BufferLayout.u8("curveType"),
  BufferLayout.blob(32, "curveParameters"),
]);
