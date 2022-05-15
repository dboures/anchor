import { PublicKey } from "@solana/web3.js";
import { Program } from "../program/index.js";
import Provider from "../provider.js";
import { SplTokenSwapCoder } from "../coder/spl-token-swap/tokenSwap.js";

const TOKEN_SWAP_PROGRAM_ID = new PublicKey(
  "SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8"
);

export function program(provider?: Provider): Program<SplTokenSwap> {
  return new Program<SplTokenSwap>(IDL, TOKEN_SWAP_PROGRAM_ID, provider, coder());
}

export function coder(): SplTokenSwapCoder {
  return new SplTokenSwapCoder(IDL);
}

/**
 * SplTokenSwap IDL.
 */
export type SplTokenSwap = {
  version: "0.1.0";
  name: "spl_token_swap";
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "swap";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenA";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenB";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "destination";
          isMut: true;
          isSigner: false;
        },
        {
          name: "token_program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "fees",
          type: {
            defined: "Fees"
          }
        },
        {
          name: "swapCurve";
          type: {
            defined: "SwapCurve"
          }
        }
      ];
    },
  ]
}; // TODO


  export const IDL: SplTokenSwap = {
    version: "0.1.0",
    name: "spl_token_swap",
    instructions: [
      {
        name: "initialize",
        accounts: [
          {
            name: "swap",
            isMut: true,
            isSigner: true,
          },
          {
            name: "authority",
            isMut: false,
            isSigner: false,
          },
          {
            name: "tokenA",
            isMut: false,
            isSigner: false,
          },
          {
            name: "tokenB",
            isMut: false,
            isSigner: false,
          },
          {
            name: "poolMint",
            isMut: true,
            isSigner: false,
          },
          {
            name: "feeAccount",
            isMut: false,
            isSigner: false,
          },
          {
            name: "destination",
            isMut: true,
            isSigner: false,
          },
          {
            name: "token_program",
            isMut: false,
            isSigner: false,
          }
        ],
        args: [
          {
            name: "fees",
            type: {
              defined: "Fees"
            }
          },
          {
            name: "swapCurve",
            type: {
              defined: "SwapCurve"
            }
          }
        ],
      },
    ]
  }; // TODO