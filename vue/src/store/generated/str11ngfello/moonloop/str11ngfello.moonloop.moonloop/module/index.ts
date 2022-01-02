// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateCollection } from "./types/moonloop/tx";
import { MsgDeleteClass } from "./types/moonloop/tx";
import { MsgDeleteContribution } from "./types/moonloop/tx";
import { MsgDeleteInstanceOwner } from "./types/moonloop/tx";
import { MsgDeleteCollection } from "./types/moonloop/tx";
import { MsgUpdateMintStrategy } from "./types/moonloop/tx";
import { MsgUpdateClass } from "./types/moonloop/tx";
import { MsgUpdateClassTemplate } from "./types/moonloop/tx";
import { MsgDeletePowerup } from "./types/moonloop/tx";
import { MsgUpdatePowerup } from "./types/moonloop/tx";
import { MsgCreatePowerup } from "./types/moonloop/tx";
import { MsgCreateMintStrategy } from "./types/moonloop/tx";
import { MsgCreateInstanceOwner } from "./types/moonloop/tx";
import { MsgCreateCollectionOwner } from "./types/moonloop/tx";
import { MsgUpdateCollectionOwner } from "./types/moonloop/tx";
import { MsgSetCollectionMintStrategy } from "./types/moonloop/tx";
import { MsgDeletePowerupTemplate } from "./types/moonloop/tx";
import { MsgSendPower } from "./types/moonloop/tx";
import { MsgCreateClass } from "./types/moonloop/tx";
import { MsgUpdateInstanceOwner } from "./types/moonloop/tx";
import { MsgCreatePowerupTemplate } from "./types/moonloop/tx";
import { MsgDeleteClassTemplate } from "./types/moonloop/tx";
import { MsgMint } from "./types/moonloop/tx";
import { MsgCreateCollection } from "./types/moonloop/tx";
import { MsgDeleteCollectionOwner } from "./types/moonloop/tx";
import { MsgCreateContribution } from "./types/moonloop/tx";
import { MsgDeleteMintStrategy } from "./types/moonloop/tx";
import { MsgFreePower } from "./types/moonloop/tx";
import { MsgUpdatePowerupTemplate } from "./types/moonloop/tx";
import { MsgUpdateContribution } from "./types/moonloop/tx";
import { MsgCreateClassTemplate } from "./types/moonloop/tx";


const types = [
  ["/str11ngfello.moonloop.moonloop.MsgUpdateCollection", MsgUpdateCollection],
  ["/str11ngfello.moonloop.moonloop.MsgDeleteClass", MsgDeleteClass],
  ["/str11ngfello.moonloop.moonloop.MsgDeleteContribution", MsgDeleteContribution],
  ["/str11ngfello.moonloop.moonloop.MsgDeleteInstanceOwner", MsgDeleteInstanceOwner],
  ["/str11ngfello.moonloop.moonloop.MsgDeleteCollection", MsgDeleteCollection],
  ["/str11ngfello.moonloop.moonloop.MsgUpdateMintStrategy", MsgUpdateMintStrategy],
  ["/str11ngfello.moonloop.moonloop.MsgUpdateClass", MsgUpdateClass],
  ["/str11ngfello.moonloop.moonloop.MsgUpdateClassTemplate", MsgUpdateClassTemplate],
  ["/str11ngfello.moonloop.moonloop.MsgDeletePowerup", MsgDeletePowerup],
  ["/str11ngfello.moonloop.moonloop.MsgUpdatePowerup", MsgUpdatePowerup],
  ["/str11ngfello.moonloop.moonloop.MsgCreatePowerup", MsgCreatePowerup],
  ["/str11ngfello.moonloop.moonloop.MsgCreateMintStrategy", MsgCreateMintStrategy],
  ["/str11ngfello.moonloop.moonloop.MsgCreateInstanceOwner", MsgCreateInstanceOwner],
  ["/str11ngfello.moonloop.moonloop.MsgCreateCollectionOwner", MsgCreateCollectionOwner],
  ["/str11ngfello.moonloop.moonloop.MsgUpdateCollectionOwner", MsgUpdateCollectionOwner],
  ["/str11ngfello.moonloop.moonloop.MsgSetCollectionMintStrategy", MsgSetCollectionMintStrategy],
  ["/str11ngfello.moonloop.moonloop.MsgDeletePowerupTemplate", MsgDeletePowerupTemplate],
  ["/str11ngfello.moonloop.moonloop.MsgSendPower", MsgSendPower],
  ["/str11ngfello.moonloop.moonloop.MsgCreateClass", MsgCreateClass],
  ["/str11ngfello.moonloop.moonloop.MsgUpdateInstanceOwner", MsgUpdateInstanceOwner],
  ["/str11ngfello.moonloop.moonloop.MsgCreatePowerupTemplate", MsgCreatePowerupTemplate],
  ["/str11ngfello.moonloop.moonloop.MsgDeleteClassTemplate", MsgDeleteClassTemplate],
  ["/str11ngfello.moonloop.moonloop.MsgMint", MsgMint],
  ["/str11ngfello.moonloop.moonloop.MsgCreateCollection", MsgCreateCollection],
  ["/str11ngfello.moonloop.moonloop.MsgDeleteCollectionOwner", MsgDeleteCollectionOwner],
  ["/str11ngfello.moonloop.moonloop.MsgCreateContribution", MsgCreateContribution],
  ["/str11ngfello.moonloop.moonloop.MsgDeleteMintStrategy", MsgDeleteMintStrategy],
  ["/str11ngfello.moonloop.moonloop.MsgFreePower", MsgFreePower],
  ["/str11ngfello.moonloop.moonloop.MsgUpdatePowerupTemplate", MsgUpdatePowerupTemplate],
  ["/str11ngfello.moonloop.moonloop.MsgUpdateContribution", MsgUpdateContribution],
  ["/str11ngfello.moonloop.moonloop.MsgCreateClassTemplate", MsgCreateClassTemplate],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateCollection: (data: MsgUpdateCollection): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateCollection", value: MsgUpdateCollection.fromPartial( data ) }),
    msgDeleteClass: (data: MsgDeleteClass): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteClass", value: MsgDeleteClass.fromPartial( data ) }),
    msgDeleteContribution: (data: MsgDeleteContribution): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteContribution", value: MsgDeleteContribution.fromPartial( data ) }),
    msgDeleteInstanceOwner: (data: MsgDeleteInstanceOwner): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteInstanceOwner", value: MsgDeleteInstanceOwner.fromPartial( data ) }),
    msgDeleteCollection: (data: MsgDeleteCollection): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteCollection", value: MsgDeleteCollection.fromPartial( data ) }),
    msgUpdateMintStrategy: (data: MsgUpdateMintStrategy): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateMintStrategy", value: MsgUpdateMintStrategy.fromPartial( data ) }),
    msgUpdateClass: (data: MsgUpdateClass): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateClass", value: MsgUpdateClass.fromPartial( data ) }),
    msgUpdateClassTemplate: (data: MsgUpdateClassTemplate): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateClassTemplate", value: MsgUpdateClassTemplate.fromPartial( data ) }),
    msgDeletePowerup: (data: MsgDeletePowerup): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeletePowerup", value: MsgDeletePowerup.fromPartial( data ) }),
    msgUpdatePowerup: (data: MsgUpdatePowerup): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdatePowerup", value: MsgUpdatePowerup.fromPartial( data ) }),
    msgCreatePowerup: (data: MsgCreatePowerup): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreatePowerup", value: MsgCreatePowerup.fromPartial( data ) }),
    msgCreateMintStrategy: (data: MsgCreateMintStrategy): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateMintStrategy", value: MsgCreateMintStrategy.fromPartial( data ) }),
    msgCreateInstanceOwner: (data: MsgCreateInstanceOwner): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateInstanceOwner", value: MsgCreateInstanceOwner.fromPartial( data ) }),
    msgCreateCollectionOwner: (data: MsgCreateCollectionOwner): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateCollectionOwner", value: MsgCreateCollectionOwner.fromPartial( data ) }),
    msgUpdateCollectionOwner: (data: MsgUpdateCollectionOwner): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateCollectionOwner", value: MsgUpdateCollectionOwner.fromPartial( data ) }),
    msgSetCollectionMintStrategy: (data: MsgSetCollectionMintStrategy): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgSetCollectionMintStrategy", value: MsgSetCollectionMintStrategy.fromPartial( data ) }),
    msgDeletePowerupTemplate: (data: MsgDeletePowerupTemplate): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeletePowerupTemplate", value: MsgDeletePowerupTemplate.fromPartial( data ) }),
    msgSendPower: (data: MsgSendPower): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgSendPower", value: MsgSendPower.fromPartial( data ) }),
    msgCreateClass: (data: MsgCreateClass): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateClass", value: MsgCreateClass.fromPartial( data ) }),
    msgUpdateInstanceOwner: (data: MsgUpdateInstanceOwner): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateInstanceOwner", value: MsgUpdateInstanceOwner.fromPartial( data ) }),
    msgCreatePowerupTemplate: (data: MsgCreatePowerupTemplate): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreatePowerupTemplate", value: MsgCreatePowerupTemplate.fromPartial( data ) }),
    msgDeleteClassTemplate: (data: MsgDeleteClassTemplate): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteClassTemplate", value: MsgDeleteClassTemplate.fromPartial( data ) }),
    msgMint: (data: MsgMint): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgMint", value: MsgMint.fromPartial( data ) }),
    msgCreateCollection: (data: MsgCreateCollection): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateCollection", value: MsgCreateCollection.fromPartial( data ) }),
    msgDeleteCollectionOwner: (data: MsgDeleteCollectionOwner): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteCollectionOwner", value: MsgDeleteCollectionOwner.fromPartial( data ) }),
    msgCreateContribution: (data: MsgCreateContribution): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateContribution", value: MsgCreateContribution.fromPartial( data ) }),
    msgDeleteMintStrategy: (data: MsgDeleteMintStrategy): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteMintStrategy", value: MsgDeleteMintStrategy.fromPartial( data ) }),
    msgFreePower: (data: MsgFreePower): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgFreePower", value: MsgFreePower.fromPartial( data ) }),
    msgUpdatePowerupTemplate: (data: MsgUpdatePowerupTemplate): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdatePowerupTemplate", value: MsgUpdatePowerupTemplate.fromPartial( data ) }),
    msgUpdateContribution: (data: MsgUpdateContribution): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateContribution", value: MsgUpdateContribution.fromPartial( data ) }),
    msgCreateClassTemplate: (data: MsgCreateClassTemplate): EncodeObject => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateClassTemplate", value: MsgCreateClassTemplate.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
