import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteClass } from "./types/moonloop/tx";
import { MsgUpdatePowerupTemplate } from "./types/moonloop/tx";
import { MsgSetCollectionMintStrategy } from "./types/moonloop/tx";
import { MsgUpdateMintStrategy } from "./types/moonloop/tx";
import { MsgUpdateClass } from "./types/moonloop/tx";
import { MsgDeletePowerupTemplate } from "./types/moonloop/tx";
import { MsgUpdateContribution } from "./types/moonloop/tx";
import { MsgDeleteMintStrategy } from "./types/moonloop/tx";
import { MsgCreatePowerupTemplate } from "./types/moonloop/tx";
import { MsgDeleteCollection } from "./types/moonloop/tx";
import { MsgCreateContribution } from "./types/moonloop/tx";
import { MsgDeletePowerup } from "./types/moonloop/tx";
import { MsgUpdatePowerup } from "./types/moonloop/tx";
import { MsgDeleteContribution } from "./types/moonloop/tx";
import { MsgCreateMintStrategy } from "./types/moonloop/tx";
import { MsgFreePower } from "./types/moonloop/tx";
import { MsgSendPower } from "./types/moonloop/tx";
import { MsgMint } from "./types/moonloop/tx";
import { MsgCreatePowerup } from "./types/moonloop/tx";
import { MsgCreateCollection } from "./types/moonloop/tx";
import { MsgUpdateCollection } from "./types/moonloop/tx";
import { MsgCreateClass } from "./types/moonloop/tx";
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
    msgDeleteClass: (data: MsgDeleteClass) => EncodeObject;
    msgUpdatePowerupTemplate: (data: MsgUpdatePowerupTemplate) => EncodeObject;
    msgSetCollectionMintStrategy: (data: MsgSetCollectionMintStrategy) => EncodeObject;
    msgUpdateMintStrategy: (data: MsgUpdateMintStrategy) => EncodeObject;
    msgUpdateClass: (data: MsgUpdateClass) => EncodeObject;
    msgDeletePowerupTemplate: (data: MsgDeletePowerupTemplate) => EncodeObject;
    msgUpdateContribution: (data: MsgUpdateContribution) => EncodeObject;
    msgDeleteMintStrategy: (data: MsgDeleteMintStrategy) => EncodeObject;
    msgCreatePowerupTemplate: (data: MsgCreatePowerupTemplate) => EncodeObject;
    msgDeleteCollection: (data: MsgDeleteCollection) => EncodeObject;
    msgCreateContribution: (data: MsgCreateContribution) => EncodeObject;
    msgDeletePowerup: (data: MsgDeletePowerup) => EncodeObject;
    msgUpdatePowerup: (data: MsgUpdatePowerup) => EncodeObject;
    msgDeleteContribution: (data: MsgDeleteContribution) => EncodeObject;
    msgCreateMintStrategy: (data: MsgCreateMintStrategy) => EncodeObject;
    msgFreePower: (data: MsgFreePower) => EncodeObject;
    msgSendPower: (data: MsgSendPower) => EncodeObject;
    msgMint: (data: MsgMint) => EncodeObject;
    msgCreatePowerup: (data: MsgCreatePowerup) => EncodeObject;
    msgCreateCollection: (data: MsgCreateCollection) => EncodeObject;
    msgUpdateCollection: (data: MsgUpdateCollection) => EncodeObject;
    msgCreateClass: (data: MsgCreateClass) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
