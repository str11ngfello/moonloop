// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const types = [
    ["/cosmonaut.moonloop.moonloop.MsgDeleteClass", MsgDeleteClass],
    ["/cosmonaut.moonloop.moonloop.MsgUpdatePowerupTemplate", MsgUpdatePowerupTemplate],
    ["/cosmonaut.moonloop.moonloop.MsgSetCollectionMintStrategy", MsgSetCollectionMintStrategy],
    ["/cosmonaut.moonloop.moonloop.MsgUpdateMintStrategy", MsgUpdateMintStrategy],
    ["/cosmonaut.moonloop.moonloop.MsgUpdateClass", MsgUpdateClass],
    ["/cosmonaut.moonloop.moonloop.MsgDeletePowerupTemplate", MsgDeletePowerupTemplate],
    ["/cosmonaut.moonloop.moonloop.MsgUpdateContribution", MsgUpdateContribution],
    ["/cosmonaut.moonloop.moonloop.MsgDeleteMintStrategy", MsgDeleteMintStrategy],
    ["/cosmonaut.moonloop.moonloop.MsgCreatePowerupTemplate", MsgCreatePowerupTemplate],
    ["/cosmonaut.moonloop.moonloop.MsgDeleteCollection", MsgDeleteCollection],
    ["/cosmonaut.moonloop.moonloop.MsgCreateContribution", MsgCreateContribution],
    ["/cosmonaut.moonloop.moonloop.MsgDeletePowerup", MsgDeletePowerup],
    ["/cosmonaut.moonloop.moonloop.MsgUpdatePowerup", MsgUpdatePowerup],
    ["/cosmonaut.moonloop.moonloop.MsgDeleteContribution", MsgDeleteContribution],
    ["/cosmonaut.moonloop.moonloop.MsgCreateMintStrategy", MsgCreateMintStrategy],
    ["/cosmonaut.moonloop.moonloop.MsgFreePower", MsgFreePower],
    ["/cosmonaut.moonloop.moonloop.MsgSendPower", MsgSendPower],
    ["/cosmonaut.moonloop.moonloop.MsgMint", MsgMint],
    ["/cosmonaut.moonloop.moonloop.MsgCreatePowerup", MsgCreatePowerup],
    ["/cosmonaut.moonloop.moonloop.MsgCreateCollection", MsgCreateCollection],
    ["/cosmonaut.moonloop.moonloop.MsgUpdateCollection", MsgUpdateCollection],
    ["/cosmonaut.moonloop.moonloop.MsgCreateClass", MsgCreateClass],
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
        msgDeleteClass: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgDeleteClass", value: MsgDeleteClass.fromPartial(data) }),
        msgUpdatePowerupTemplate: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgUpdatePowerupTemplate", value: MsgUpdatePowerupTemplate.fromPartial(data) }),
        msgSetCollectionMintStrategy: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgSetCollectionMintStrategy", value: MsgSetCollectionMintStrategy.fromPartial(data) }),
        msgUpdateMintStrategy: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgUpdateMintStrategy", value: MsgUpdateMintStrategy.fromPartial(data) }),
        msgUpdateClass: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgUpdateClass", value: MsgUpdateClass.fromPartial(data) }),
        msgDeletePowerupTemplate: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgDeletePowerupTemplate", value: MsgDeletePowerupTemplate.fromPartial(data) }),
        msgUpdateContribution: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgUpdateContribution", value: MsgUpdateContribution.fromPartial(data) }),
        msgDeleteMintStrategy: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgDeleteMintStrategy", value: MsgDeleteMintStrategy.fromPartial(data) }),
        msgCreatePowerupTemplate: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgCreatePowerupTemplate", value: MsgCreatePowerupTemplate.fromPartial(data) }),
        msgDeleteCollection: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgDeleteCollection", value: MsgDeleteCollection.fromPartial(data) }),
        msgCreateContribution: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgCreateContribution", value: MsgCreateContribution.fromPartial(data) }),
        msgDeletePowerup: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgDeletePowerup", value: MsgDeletePowerup.fromPartial(data) }),
        msgUpdatePowerup: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgUpdatePowerup", value: MsgUpdatePowerup.fromPartial(data) }),
        msgDeleteContribution: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgDeleteContribution", value: MsgDeleteContribution.fromPartial(data) }),
        msgCreateMintStrategy: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgCreateMintStrategy", value: MsgCreateMintStrategy.fromPartial(data) }),
        msgFreePower: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgFreePower", value: MsgFreePower.fromPartial(data) }),
        msgSendPower: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgSendPower", value: MsgSendPower.fromPartial(data) }),
        msgMint: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgMint", value: MsgMint.fromPartial(data) }),
        msgCreatePowerup: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgCreatePowerup", value: MsgCreatePowerup.fromPartial(data) }),
        msgCreateCollection: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgCreateCollection", value: MsgCreateCollection.fromPartial(data) }),
        msgUpdateCollection: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgUpdateCollection", value: MsgUpdateCollection.fromPartial(data) }),
        msgCreateClass: (data) => ({ typeUrl: "/cosmonaut.moonloop.moonloop.MsgCreateClass", value: MsgCreateClass.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
