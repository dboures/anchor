import { Program, Provider } from "../index.js";
import { program as tokenProgram, SplToken } from "./token.js";
import { program as tokenSwapProgram, SplTokenSwap } from "./tokenSwap.js";

export { SplToken } from "./token.js";
export { SplTokenSwap } from "./tokenSwap.js";

export class Spl {
  public static token(provider?: Provider): Program<SplToken> {
    return tokenProgram(provider);
  }

  public static tokenSwap(provider?: Provider): Program<SplTokenSwap> {
    return tokenSwapProgram(provider);
  }
}
