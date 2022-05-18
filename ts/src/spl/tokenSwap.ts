import { PublicKey } from "@solana/web3.js";
import { Program } from "../program/index.js";
import Provider from "../provider.js";
import { SplTokenSwapCoder } from "../coder/spl-token-swap/index.js";

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
          name: "tokenProgram";
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
  ],
  accounts: [
    {
      name: "tokenSwap";
      type: {
        kind: "struct";
        fields: [
          {
            name: "version";
            type: "u8";
          },
          {
            name: "isInitialized";
            type: "u8";
          },
          {
            name: "bumpSeed";
            type: "u8";
          },
          {
            name: "tokenProgramId";
            type: "publicKey";
          },
          {
            name: "tokenAccountA";
            type: "publicKey";
          },
          {
            name: "tokenAccountB";
            type: "publicKey";
          },
          {
            name: "tokenPool";
            type: "publicKey";
          },
          {
            name: "mintA";
            type: "publicKey";
          },
          {
            name: "mintB";
            type: "publicKey";
          },
          {
            name: "feeAccount";
            type: "publicKey";
          },
          {
            name: "tradeFeeNumerator";
            type: "u64";
          },
          {
            name: "tradeFeeDenominator";
            type: "u64";
          },
          {
            name: "ownerTradeFeeNumerator";
            type: "u64";
          },
          {
            name: "ownerTradeFeeDenominator";
            type: "u64";
          },
          {
            name: "ownerWithdrawFeeNumerator";
            type: "u64";
          },
          {
            name: "ownerWithdrawFeeDenominator";
            type: "u64";
          },
          {
            name: "hostFeeNumerator";
            type: "u64";
          },
          {
            name: "hostFeeDenominator";
            type: "u64";
          },
          {
            name: "curveType";
            type: "u8";
          },
          {
            name: "curveParameters";
            type: {
              array: ["bytes", 32];
            };
          }
        ];
      };
    },
  ];
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
            name: "tokenProgram",
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
    ],
    accounts: [
      {
        name: "tokenSwap",
        type: {
          kind: "struct",
          fields: [
            {
              name: "version",
              type: "u8",
            },
            {
              name: "isInitialized",
              type: "u8",
            },
            {
              name: "bumpSeed",
              type: "u8",
            },
            {
              name: "tokenProgramId",
              type: "publicKey",
            },
            {
              name: "tokenAccountA",
              type: "publicKey",
            },
            {
              name: "tokenAccountB",
              type: "publicKey",
            },
            {
              name: "tokenPool",
              type: "publicKey",
            },
            {
              name: "mintA",
              type: "publicKey",
            },
            {
              name: "mintB",
              type: "publicKey",
            },
            {
              name: "feeAccount",
              type: "publicKey",
            },
            {
              name: "tradeFeeNumerator",
              type: "u64",
            },
            {
              name: "tradeFeeDenominator",
              type: "u64",
            },
            {
              name: "ownerTradeFeeNumerator",
              type: "u64",
            },
            {
              name: "ownerTradeFeeDenominator",
              type: "u64",
            },
            {
              name: "ownerWithdrawFeeNumerator",
              type: "u64",
            },
            {
              name: "ownerWithdrawFeeDenominator",
              type: "u64",
            },
            {
              name: "hostFeeNumerator",
              type: "u64",
            },
            {
              name: "hostFeeDenominator",
              type: "u64",
            },
            {
              name: "curveType",
              type: "u8",
            },
            {
              name: "curveParameters",
              type: {
                array: ["bytes", 32],
              },
            }
          ],
        },
      },
    ],
  }; // TODO