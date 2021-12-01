import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendPower } from "./types/moonloop/tx";
import { MsgDeletePowerupTemplate } from "./types/moonloop/tx";
import { MsgCreatePowerup } from "./types/moonloop/tx";
import { MsgDeleteClass } from "./types/moonloop/tx";
import { MsgMint } from "./types/moonloop/tx";
import { MsgDeleteCollection } from "./types/moonloop/tx";
import { MsgCreateMintStrategy } from "./types/moonloop/tx";
import { MsgCreateClass } from "./types/moonloop/tx";
import { MsgCreateContribution } from "./types/moonloop/tx";
import { MsgCreateCollection } from "./types/moonloop/tx";
import { MsgUpdateCollection } from "./types/moonloop/tx";
import { MsgUpdatePowerupTemplate } from "./types/moonloop/tx";
import { MsgDeletePowerup } from "./types/moonloop/tx";
import { MsgCreatePowerupTemplate } from "./types/moonloop/tx";
import { MsgCreateClassTemplate } from "./types/moonloop/tx";
import { MsgDeleteContribution } from "./types/moonloop/tx";
import { MsgUpdateContribution } from "./types/moonloop/tx";
import { MsgUpdateClassTemplate } from "./types/moonloop/tx";
import { MsgDeleteMintStrategy } from "./types/moonloop/tx";
import { MsgDeleteClassTemplate } from "./types/moonloop/tx";
import { MsgUpdateClass } from "./types/moonloop/tx";
import { MsgFreePower } from "./types/moonloop/tx";
import { MsgSetCollectionMintStrategy } from "./types/moonloop/tx";
import { MsgUpdatePowerup } from "./types/moonloop/tx";
import { MsgUpdateMintStrategy } from "./types/moonloop/tx";
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
    msgSendPower: (data: MsgSendPower) => EncodeObject;
    msgDeletePowerupTemplate: (data: MsgDeletePowerupTemplate) => EncodeObject;
    msgCreatePowerup: (data: MsgCreatePowerup) => EncodeObject;
    msgDeleteClass: (data: MsgDeleteClass) => EncodeObject;
    msgMint: (data: MsgMint) => EncodeObject;
    msgDeleteCollection: (data: MsgDeleteCollection) => EncodeObject;
    msgCreateMintStrategy: (data: MsgCreateMintStrategy) => EncodeObject;
    msgCreateClass: (data: MsgCreateClass) => EncodeObject;
    msgCreateContribution: (data: MsgCreateContribution) => EncodeObject;
    msgCreateCollection: (data: MsgCreateCollection) => EncodeObject;
    msgUpdateCollection: (data: MsgUpdateCollection) => EncodeObject;
    msgUpdatePowerupTemplate: (data: MsgUpdatePowerupTemplate) => EncodeObject;
    msgDeletePowerup: (data: MsgDeletePowerup) => EncodeObject;
    msgCreatePowerupTemplate: (data: MsgCreatePowerupTemplate) => EncodeObject;
    msgCreateClassTemplate: (data: MsgCreateClassTemplate) => EncodeObject;
    msgDeleteContribution: (data: MsgDeleteContribution) => EncodeObject;
    msgUpdateContribution: (data: MsgUpdateContribution) => EncodeObject;
    msgUpdateClassTemplate: (data: MsgUpdateClassTemplate) => EncodeObject;
    msgDeleteMintStrategy: (data: MsgDeleteMintStrategy) => EncodeObject;
    msgDeleteClassTemplate: (data: MsgDeleteClassTemplate) => EncodeObject;
    msgUpdateClass: (data: MsgUpdateClass) => EncodeObject;
    msgFreePower: (data: MsgFreePower) => EncodeObject;
    msgSetCollectionMintStrategy: (data: MsgSetCollectionMintStrategy) => EncodeObject;
    msgUpdatePowerup: (data: MsgUpdatePowerup) => EncodeObject;
    msgUpdateMintStrategy: (data: MsgUpdateMintStrategy) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
