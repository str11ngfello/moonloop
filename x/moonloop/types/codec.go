package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateCollection{}, "moonloop/CreateCollection", nil)
	cdc.RegisterConcrete(&MsgUpdateCollection{}, "moonloop/UpdateCollection", nil)
	cdc.RegisterConcrete(&MsgDeleteCollection{}, "moonloop/DeleteCollection", nil)
	cdc.RegisterConcrete(&MsgCreateClass{}, "moonloop/CreateClass", nil)
	cdc.RegisterConcrete(&MsgUpdateClass{}, "moonloop/UpdateClass", nil)
	cdc.RegisterConcrete(&MsgDeleteClass{}, "moonloop/DeleteClass", nil)
	cdc.RegisterConcrete(&MsgCreateMintStrategy{}, "moonloop/CreateMintStrategy", nil)
	cdc.RegisterConcrete(&MsgUpdateMintStrategy{}, "moonloop/UpdateMintStrategy", nil)
	cdc.RegisterConcrete(&MsgDeleteMintStrategy{}, "moonloop/DeleteMintStrategy", nil)
	cdc.RegisterConcrete(&MsgCreateContribution{}, "moonloop/CreateContribution", nil)
	cdc.RegisterConcrete(&MsgUpdateContribution{}, "moonloop/UpdateContribution", nil)
	cdc.RegisterConcrete(&MsgDeleteContribution{}, "moonloop/DeleteContribution", nil)
	cdc.RegisterConcrete(&MsgCreatePowerupTemplate{}, "moonloop/CreatePowerupTemplate", nil)
	cdc.RegisterConcrete(&MsgUpdatePowerupTemplate{}, "moonloop/UpdatePowerupTemplate", nil)
	cdc.RegisterConcrete(&MsgDeletePowerupTemplate{}, "moonloop/DeletePowerupTemplate", nil)
	cdc.RegisterConcrete(&MsgCreatePowerup{}, "moonloop/CreatePowerup", nil)
	cdc.RegisterConcrete(&MsgUpdatePowerup{}, "moonloop/UpdatePowerup", nil)
	cdc.RegisterConcrete(&MsgDeletePowerup{}, "moonloop/DeletePowerup", nil)
	cdc.RegisterConcrete(&MsgSetCollectionMintStrategy{}, "moonloop/SetCollectionMintStrategy", nil)
	cdc.RegisterConcrete(&MsgSendPower{}, "moonloop/SendPower", nil)
	cdc.RegisterConcrete(&MsgFreePower{}, "moonloop/FreePower", nil)
	cdc.RegisterConcrete(&MsgMint{}, "moonloop/Mint", nil)
	cdc.RegisterConcrete(&MsgCreateClassTemplate{}, "moonloop/CreateClassTemplate", nil)
	cdc.RegisterConcrete(&MsgUpdateClassTemplate{}, "moonloop/UpdateClassTemplate", nil)
	cdc.RegisterConcrete(&MsgDeleteClassTemplate{}, "moonloop/DeleteClassTemplate", nil)
	cdc.RegisterConcrete(&MsgCreateCollectionOwner{}, "moonloop/CreateCollectionOwner", nil)
	cdc.RegisterConcrete(&MsgUpdateCollectionOwner{}, "moonloop/UpdateCollectionOwner", nil)
	cdc.RegisterConcrete(&MsgDeleteCollectionOwner{}, "moonloop/DeleteCollectionOwner", nil)
	cdc.RegisterConcrete(&MsgCreateInstanceOwner{}, "moonloop/CreateInstanceOwner", nil)
	cdc.RegisterConcrete(&MsgUpdateInstanceOwner{}, "moonloop/UpdateInstanceOwner", nil)
	cdc.RegisterConcrete(&MsgDeleteInstanceOwner{}, "moonloop/DeleteInstanceOwner", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCollection{},
		&MsgUpdateCollection{},
		&MsgDeleteCollection{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateClass{},
		&MsgUpdateClass{},
		&MsgDeleteClass{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMintStrategy{},
		&MsgUpdateMintStrategy{},
		&MsgDeleteMintStrategy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateContribution{},
		&MsgUpdateContribution{},
		&MsgDeleteContribution{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePowerupTemplate{},
		&MsgUpdatePowerupTemplate{},
		&MsgDeletePowerupTemplate{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePowerup{},
		&MsgUpdatePowerup{},
		&MsgDeletePowerup{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSetCollectionMintStrategy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendPower{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgFreePower{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMint{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateClassTemplate{},
		&MsgUpdateClassTemplate{},
		&MsgDeleteClassTemplate{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCollectionOwner{},
		&MsgUpdateCollectionOwner{},
		&MsgDeleteCollectionOwner{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateInstanceOwner{},
		&MsgUpdateInstanceOwner{},
		&MsgDeleteInstanceOwner{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
