package types

import (
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// moonloop module event types
const (
	EventPowerupRefundAtTime = "refund-at-time"
	EventPowerupActivated    = "powerup-activated"
)

func NewPowerupRefundAtTimeEvent(collectionIndex string, classIndex string, powerupTemplateIndex string, instanceIndex string, refundAtTime int32) sdk.Event {
	return sdk.NewEvent(
		EventPowerupRefundAtTime,
		sdk.NewAttribute("collectionIndex", collectionIndex),
		sdk.NewAttribute("classIndex", classIndex),
		sdk.NewAttribute("powerupTemplateIndex", powerupTemplateIndex),
		sdk.NewAttribute("instanceIndex", instanceIndex),
		sdk.NewAttribute("refundAt", strconv.Itoa(int(refundAtTime))),
	)
}

func NewPowerupActivatedEvent(collectionIndex string, classIndex string, powerupTemplateIndex string, instanceIndex string, startTime int32, endTime int32) sdk.Event {
	return sdk.NewEvent(
		EventPowerupActivated,
		sdk.NewAttribute("collectionIndex", collectionIndex),
		sdk.NewAttribute("classIndex", classIndex),
		sdk.NewAttribute("powerupTemplateIndex", powerupTemplateIndex),
		sdk.NewAttribute("instanceIndex", instanceIndex),
		sdk.NewAttribute("startTime", strconv.Itoa(int(startTime))),
		sdk.NewAttribute("endTime", strconv.Itoa(int(endTime))),
	)
}
