import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateClass } from "./types/moonloop/tx";
import { MsgCreateMintStrategy } from "./types/moonloop/tx";
import { MsgDeleteMintStrategy } from "./types/moonloop/tx";
import { MsgCreateClassTemplate } from "./types/moonloop/tx";
import { MsgDeleteCollection } from "./types/moonloop/tx";
import { MsgDeletePowerup } from "./types/moonloop/tx";
import { MsgUpdatePowerupTemplate } from "./types/moonloop/tx";
import { MsgCreatePowerup } from "./types/moonloop/tx";
import { MsgCreatePowerupTemplate } from "./types/moonloop/tx";
import { MsgFreePower } from "./types/moonloop/tx";
import { MsgUpdatePowerup } from "./types/moonloop/tx";
import { MsgMint } from "./types/moonloop/tx";
import { MsgDeleteClassTemplate } from "./types/moonloop/tx";
import { MsgUpdateMintStrategy } from "./types/moonloop/tx";
import { MsgDeletePowerupTemplate } from "./types/moonloop/tx";
import { MsgSetCollectionMintStrategy } from "./types/moonloop/tx";
import { MsgCreateCollection } from "./types/moonloop/tx";
import { MsgUpdateContribution } from "./types/moonloop/tx";
import { MsgDeleteContribution } from "./types/moonloop/tx";
import { MsgCreateContribution } from "./types/moonloop/tx";
import { MsgSendPower } from "./types/moonloop/tx";
import { MsgUpdateClass } from "./types/moonloop/tx";
import { MsgDeleteClass } from "./types/moonloop/tx";
import { MsgUpdateCollection } from "./types/moonloop/tx";
import { MsgUpdateClassTemplate } from "./types/moonloop/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgCreateClass: (data: MsgCreateClass) => EncodeObject;
    msgCreateMintStrategy: (data: MsgCreateMintStrategy) => EncodeObject;
    msgDeleteMintStrategy: (data: MsgDeleteMintStrategy) => EncodeObject;
    msgCreateClassTemplate: (data: MsgCreateClassTemplate) => EncodeObject;
    msgDeleteCollection: (data: MsgDeleteCollection) => EncodeObject;
    msgDeletePowerup: (data: MsgDeletePowerup) => EncodeObject;
    msgUpdatePowerupTemplate: (data: MsgUpdatePowerupTemplate) => EncodeObject;
    msgCreatePowerup: (data: MsgCreatePowerup) => EncodeObject;
    msgCreatePowerupTemplate: (data: MsgCreatePowerupTemplate) => EncodeObject;
    msgFreePower: (data: MsgFreePower) => EncodeObject;
    msgUpdatePowerup: (data: MsgUpdatePowerup) => EncodeObject;
    msgMint: (data: MsgMint) => EncodeObject;
    msgDeleteClassTemplate: (data: MsgDeleteClassTemplate) => EncodeObject;
    msgUpdateMintStrategy: (data: MsgUpdateMintStrategy) => EncodeObject;
    msgDeletePowerupTemplate: (data: MsgDeletePowerupTemplate) => EncodeObject;
    msgSetCollectionMintStrategy: (data: MsgSetCollectionMintStrategy) => EncodeObject;
    msgCreateCollection: (data: MsgCreateCollection) => EncodeObject;
    msgUpdateContribution: (data: MsgUpdateContribution) => EncodeObject;
    msgDeleteContribution: (data: MsgDeleteContribution) => EncodeObject;
    msgCreateContribution: (data: MsgCreateContribution) => EncodeObject;
    msgSendPower: (data: MsgSendPower) => EncodeObject;
    msgUpdateClass: (data: MsgUpdateClass) => EncodeObject;
    msgDeleteClass: (data: MsgDeleteClass) => EncodeObject;
    msgUpdateCollection: (data: MsgUpdateCollection) => EncodeObject;
    msgUpdateClassTemplate: (data: MsgUpdateClassTemplate) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
