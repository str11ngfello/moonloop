package types

import (
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// moonloop module event types
const (
	EventPowerupIndex        = "powerup_index"
	EventPowerupRefundAtTime = "powerup_refund_at_time"
	EventPowerupActivate     = "powerup_activated"
	EventPowerupDeactivate   = "powerup_deactivated"
	EventPowerupRecharge     = "powerup_recharge"
)

func NewPowerupRefundAtTimeEvent(collectionIndex string, classTemplateIndex string, powerupTemplateIndex string, instanceIndex string, refundAtTime int32) sdk.Event {
	return sdk.NewEvent(
		EventPowerupRefundAtTime,
		sdk.NewAttribute("collection_index", collectionIndex),
		sdk.NewAttribute("class_index", classTemplateIndex),
		sdk.NewAttribute("powerup_template_index", powerupTemplateIndex),
		sdk.NewAttribute("instance_index", instanceIndex),
		sdk.NewAttribute("refund_at", strconv.Itoa(int(refundAtTime))),
	)
}

func EmitPowerupActivatedEvents(ctx sdk.Context, collectionIndex string, classTemplateIndex string, powerupTemplateIndex string, instanceIndex string, startTime int32, endTime int32) {
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			EventPowerupIndex,
			sdk.NewAttribute("collection_index", collectionIndex),
			sdk.NewAttribute("class_index", classTemplateIndex),
			sdk.NewAttribute("powerup_template_index", powerupTemplateIndex),
			sdk.NewAttribute("instance_index", instanceIndex),
		),
	)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			EventPowerupActivate,
			sdk.NewAttribute("start_time", strconv.Itoa(int(startTime))),
			sdk.NewAttribute("end_time", strconv.Itoa(int(endTime))),
		),
	)
}

func NewPowerupRechargeEvent(collectionIndex string, classTemplateIndex string, powerupTemplateIndex string, instanceIndex string, timeToAdd int32, newEndTime int32) sdk.Event {
	return sdk.NewEvent(
		EventPowerupRecharge,
		sdk.NewAttribute("collection_index", collectionIndex),
		sdk.NewAttribute("class_index", classTemplateIndex),
		sdk.NewAttribute("powerup_template_index", powerupTemplateIndex),
		sdk.NewAttribute("instance_index", instanceIndex),
		sdk.NewAttribute("time_to_add", strconv.Itoa(int(timeToAdd))),
		sdk.NewAttribute("new_end_time", strconv.Itoa(int(newEndTime))),
	)
}

func EmitPowerupDeactivatedEvents(ctx sdk.Context, collectionIndex string, classTemplateIndex string, powerupTemplateIndex string, instanceIndex string) {
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			EventPowerupIndex,
			sdk.NewAttribute("collection_index", collectionIndex),
			sdk.NewAttribute("class_index", classTemplateIndex),
			sdk.NewAttribute("powerup_template_index", powerupTemplateIndex),
			sdk.NewAttribute("instance_index", instanceIndex),
		),
	)
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			EventPowerupDeactivate,
			sdk.NewAttribute("test", "test"),
		),
	)
}
