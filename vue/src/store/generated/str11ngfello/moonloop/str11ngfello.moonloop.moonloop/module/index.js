// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const types = [
    ["/str11ngfello.moonloop.moonloop.MsgCreatePowerup", MsgCreatePowerup],
    ["/str11ngfello.moonloop.moonloop.MsgUpdatePowerup", MsgUpdatePowerup],
    ["/str11ngfello.moonloop.moonloop.MsgDeletePowerup", MsgDeletePowerup],
    ["/str11ngfello.moonloop.moonloop.MsgCreateContribution", MsgCreateContribution],
    ["/str11ngfello.moonloop.moonloop.MsgCreatePowerupTemplate", MsgCreatePowerupTemplate],
    ["/str11ngfello.moonloop.moonloop.MsgFreePower", MsgFreePower],
    ["/str11ngfello.moonloop.moonloop.MsgDeleteCollection", MsgDeleteCollection],
    ["/str11ngfello.moonloop.moonloop.MsgUpdatePowerupTemplate", MsgUpdatePowerupTemplate],
    ["/str11ngfello.moonloop.moonloop.MsgCreateClass", MsgCreateClass],
    ["/str11ngfello.moonloop.moonloop.MsgDeleteClass", MsgDeleteClass],
    ["/str11ngfello.moonloop.moonloop.MsgDeleteContribution", MsgDeleteContribution],
    ["/str11ngfello.moonloop.moonloop.MsgUpdateClass", MsgUpdateClass],
    ["/str11ngfello.moonloop.moonloop.MsgSendPower", MsgSendPower],
    ["/str11ngfello.moonloop.moonloop.MsgDeleteMintStrategy", MsgDeleteMintStrategy],
    ["/str11ngfello.moonloop.moonloop.MsgMint", MsgMint],
    ["/str11ngfello.moonloop.moonloop.MsgUpdateMintStrategy", MsgUpdateMintStrategy],
    ["/str11ngfello.moonloop.moonloop.MsgUpdateCollection", MsgUpdateCollection],
    ["/str11ngfello.moonloop.moonloop.MsgUpdateContribution", MsgUpdateContribution],
    ["/str11ngfello.moonloop.moonloop.MsgCreateMintStrategy", MsgCreateMintStrategy],
    ["/str11ngfello.moonloop.moonloop.MsgSetCollectionMintStrategy", MsgSetCollectionMintStrategy],
    ["/str11ngfello.moonloop.moonloop.MsgCreateCollection", MsgCreateCollection],
    ["/str11ngfello.moonloop.moonloop.MsgDeletePowerupTemplate", MsgDeletePowerupTemplate],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreatePowerup: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreatePowerup", value: MsgCreatePowerup.fromPartial(data) }),
        msgUpdatePowerup: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdatePowerup", value: MsgUpdatePowerup.fromPartial(data) }),
        msgDeletePowerup: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeletePowerup", value: MsgDeletePowerup.fromPartial(data) }),
        msgCreateContribution: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateContribution", value: MsgCreateContribution.fromPartial(data) }),
        msgCreatePowerupTemplate: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreatePowerupTemplate", value: MsgCreatePowerupTemplate.fromPartial(data) }),
        msgFreePower: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgFreePower", value: MsgFreePower.fromPartial(data) }),
        msgDeleteCollection: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteCollection", value: MsgDeleteCollection.fromPartial(data) }),
        msgUpdatePowerupTemplate: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdatePowerupTemplate", value: MsgUpdatePowerupTemplate.fromPartial(data) }),
        msgCreateClass: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateClass", value: MsgCreateClass.fromPartial(data) }),
        msgDeleteClass: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteClass", value: MsgDeleteClass.fromPartial(data) }),
        msgDeleteContribution: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteContribution", value: MsgDeleteContribution.fromPartial(data) }),
        msgUpdateClass: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateClass", value: MsgUpdateClass.fromPartial(data) }),
        msgSendPower: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgSendPower", value: MsgSendPower.fromPartial(data) }),
        msgDeleteMintStrategy: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeleteMintStrategy", value: MsgDeleteMintStrategy.fromPartial(data) }),
        msgMint: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgMint", value: MsgMint.fromPartial(data) }),
        msgUpdateMintStrategy: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateMintStrategy", value: MsgUpdateMintStrategy.fromPartial(data) }),
        msgUpdateCollection: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateCollection", value: MsgUpdateCollection.fromPartial(data) }),
        msgUpdateContribution: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgUpdateContribution", value: MsgUpdateContribution.fromPartial(data) }),
        msgCreateMintStrategy: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateMintStrategy", value: MsgCreateMintStrategy.fromPartial(data) }),
        msgSetCollectionMintStrategy: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgSetCollectionMintStrategy", value: MsgSetCollectionMintStrategy.fromPartial(data) }),
        msgCreateCollection: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgCreateCollection", value: MsgCreateCollection.fromPartial(data) }),
        msgDeletePowerupTemplate: (data) => ({ typeUrl: "/str11ngfello.moonloop.moonloop.MsgDeletePowerupTemplate", value: MsgDeletePowerupTemplate.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
