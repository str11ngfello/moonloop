import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePowerup } from "./types/moonloop/tx";
import { MsgUpdatePowerup } from "./types/moonloop/tx";
import { MsgDeletePowerup } from "./types/moonloop/tx";
import { MsgCreateContribution } from "./types/moonloop/tx";
import { MsgCreatePowerupTemplate } from "./types/moonloop/tx";
import { MsgFreePower } from "./types/moonloop/tx";
import { MsgDeleteCollection } from "./types/moonloop/tx";
import { MsgUpdatePowerupTemplate } from "./types/moonloop/tx";
import { MsgCreateClass } from "./types/moonloop/tx";
import { MsgDeleteClass } from "./types/moonloop/tx";
import { MsgDeleteContribution } from "./types/moonloop/tx";
import { MsgUpdateClass } from "./types/moonloop/tx";
import { MsgSendPower } from "./types/moonloop/tx";
import { MsgDeleteMintStrategy } from "./types/moonloop/tx";
import { MsgMint } from "./types/moonloop/tx";
import { MsgUpdateMintStrategy } from "./types/moonloop/tx";
import { MsgUpdateCollection } from "./types/moonloop/tx";
import { MsgUpdateContribution } from "./types/moonloop/tx";
import { MsgCreateMintStrategy } from "./types/moonloop/tx";
import { MsgSetCollectionMintStrategy } from "./types/moonloop/tx";
import { MsgCreateCollection } from "./types/moonloop/tx";
import { MsgDeletePowerupTemplate } from "./types/moonloop/tx";
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
    msgCreatePowerup: (data: MsgCreatePowerup) => EncodeObject;
    msgUpdatePowerup: (data: MsgUpdatePowerup) => EncodeObject;
    msgDeletePowerup: (data: MsgDeletePowerup) => EncodeObject;
    msgCreateContribution: (data: MsgCreateContribution) => EncodeObject;
    msgCreatePowerupTemplate: (data: MsgCreatePowerupTemplate) => EncodeObject;
    msgFreePower: (data: MsgFreePower) => EncodeObject;
    msgDeleteCollection: (data: MsgDeleteCollection) => EncodeObject;
    msgUpdatePowerupTemplate: (data: MsgUpdatePowerupTemplate) => EncodeObject;
    msgCreateClass: (data: MsgCreateClass) => EncodeObject;
    msgDeleteClass: (data: MsgDeleteClass) => EncodeObject;
    msgDeleteContribution: (data: MsgDeleteContribution) => EncodeObject;
    msgUpdateClass: (data: MsgUpdateClass) => EncodeObject;
    msgSendPower: (data: MsgSendPower) => EncodeObject;
    msgDeleteMintStrategy: (data: MsgDeleteMintStrategy) => EncodeObject;
    msgMint: (data: MsgMint) => EncodeObject;
    msgUpdateMintStrategy: (data: MsgUpdateMintStrategy) => EncodeObject;
    msgUpdateCollection: (data: MsgUpdateCollection) => EncodeObject;
    msgUpdateContribution: (data: MsgUpdateContribution) => EncodeObject;
    msgCreateMintStrategy: (data: MsgCreateMintStrategy) => EncodeObject;
    msgSetCollectionMintStrategy: (data: MsgSetCollectionMintStrategy) => EncodeObject;
    msgCreateCollection: (data: MsgCreateCollection) => EncodeObject;
    msgDeletePowerupTemplate: (data: MsgDeletePowerupTemplate) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
