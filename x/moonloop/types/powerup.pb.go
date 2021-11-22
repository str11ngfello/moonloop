// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: moonloop/powerup.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Powerup struct {
	CollectionIndex      string     `protobuf:"bytes,1,opt,name=collectionIndex,proto3" json:"collectionIndex,omitempty"`
	ClassIndex           string     `protobuf:"bytes,2,opt,name=classIndex,proto3" json:"classIndex,omitempty"`
	PowerupTemplateIndex string     `protobuf:"bytes,3,opt,name=powerupTemplateIndex,proto3" json:"powerupTemplateIndex,omitempty"`
	InstanceIndex        string     `protobuf:"bytes,4,opt,name=instanceIndex,proto3" json:"instanceIndex,omitempty"`
	Balance              types.Coin `protobuf:"bytes,5,opt,name=balance,proto3" json:"balance"`
	StartTime            int32      `protobuf:"varint,6,opt,name=startTime,proto3" json:"startTime,omitempty"`
	EndTime              int32      `protobuf:"varint,7,opt,name=endTime,proto3" json:"endTime,omitempty"`
	NumActivations       int32      `protobuf:"varint,8,opt,name=numActivations,proto3" json:"numActivations,omitempty"`
	Fees                 types.Coin `protobuf:"bytes,9,opt,name=fees,proto3" json:"fees"`
	AcceptingPower       bool       `protobuf:"varint,10,opt,name=acceptingPower,proto3" json:"acceptingPower,omitempty"`
	Creator              string     `protobuf:"bytes,11,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *Powerup) Reset()         { *m = Powerup{} }
func (m *Powerup) String() string { return proto.CompactTextString(m) }
func (*Powerup) ProtoMessage()    {}
func (*Powerup) Descriptor() ([]byte, []int) {
	return fileDescriptor_c512482da0d05eb5, []int{0}
}
func (m *Powerup) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Powerup) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Powerup.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Powerup) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Powerup.Merge(m, src)
}
func (m *Powerup) XXX_Size() int {
	return m.Size()
}
func (m *Powerup) XXX_DiscardUnknown() {
	xxx_messageInfo_Powerup.DiscardUnknown(m)
}

var xxx_messageInfo_Powerup proto.InternalMessageInfo

func (m *Powerup) GetCollectionIndex() string {
	if m != nil {
		return m.CollectionIndex
	}
	return ""
}

func (m *Powerup) GetClassIndex() string {
	if m != nil {
		return m.ClassIndex
	}
	return ""
}

func (m *Powerup) GetPowerupTemplateIndex() string {
	if m != nil {
		return m.PowerupTemplateIndex
	}
	return ""
}

func (m *Powerup) GetInstanceIndex() string {
	if m != nil {
		return m.InstanceIndex
	}
	return ""
}

func (m *Powerup) GetBalance() types.Coin {
	if m != nil {
		return m.Balance
	}
	return types.Coin{}
}

func (m *Powerup) GetStartTime() int32 {
	if m != nil {
		return m.StartTime
	}
	return 0
}

func (m *Powerup) GetEndTime() int32 {
	if m != nil {
		return m.EndTime
	}
	return 0
}

func (m *Powerup) GetNumActivations() int32 {
	if m != nil {
		return m.NumActivations
	}
	return 0
}

func (m *Powerup) GetFees() types.Coin {
	if m != nil {
		return m.Fees
	}
	return types.Coin{}
}

func (m *Powerup) GetAcceptingPower() bool {
	if m != nil {
		return m.AcceptingPower
	}
	return false
}

func (m *Powerup) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*Powerup)(nil), "str11ngfello.moonloop.moonloop.Powerup")
}

func init() { proto.RegisterFile("moonloop/powerup.proto", fileDescriptor_c512482da0d05eb5) }

var fileDescriptor_c512482da0d05eb5 = []byte{
	// 386 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0x31, 0xaf, 0xd3, 0x30,
	0x10, 0xc7, 0x63, 0x5e, 0xdf, 0xcb, 0xab, 0x9f, 0x00, 0xc9, 0xaa, 0x90, 0xa9, 0x90, 0x89, 0x10,
	0x42, 0x99, 0x12, 0xa5, 0x9d, 0x18, 0x29, 0x13, 0x62, 0x41, 0x51, 0x27, 0x36, 0xc7, 0x75, 0x83,
	0x25, 0xc7, 0x17, 0xc5, 0x6e, 0x29, 0xdf, 0x82, 0x6f, 0xc4, 0xda, 0xb1, 0x23, 0x13, 0x42, 0xed,
	0x17, 0x41, 0x71, 0x9a, 0xb6, 0x54, 0x0c, 0x6c, 0x77, 0xff, 0xff, 0xcf, 0xf6, 0xdd, 0xf9, 0xf0,
	0xb3, 0x0a, 0xc0, 0x68, 0x80, 0x3a, 0xad, 0xe1, 0xab, 0x6c, 0x56, 0x75, 0x52, 0x37, 0xe0, 0x80,
	0x30, 0xeb, 0x9a, 0x2c, 0x33, 0xe5, 0x52, 0x6a, 0x0d, 0x49, 0x0f, 0x9d, 0x82, 0xf1, 0xa8, 0x84,
	0x12, 0x3c, 0x9a, 0xb6, 0x51, 0x77, 0x6a, 0xcc, 0x04, 0xd8, 0x0a, 0x6c, 0x5a, 0x70, 0x2b, 0xd3,
	0x75, 0x56, 0x48, 0xc7, 0xb3, 0x54, 0x80, 0x32, 0x9d, 0xff, 0xea, 0xc7, 0x0d, 0x0e, 0x3f, 0x75,
	0xef, 0x90, 0x18, 0x3f, 0x15, 0xa0, 0xb5, 0x14, 0x4e, 0x81, 0xf9, 0x60, 0x16, 0x72, 0x43, 0x51,
	0x84, 0xe2, 0x61, 0x7e, 0x2d, 0x13, 0x86, 0xb1, 0xd0, 0xdc, 0xda, 0x0e, 0x7a, 0xe4, 0xa1, 0x0b,
	0x85, 0x4c, 0xf0, 0xe8, 0x58, 0xfc, 0x5c, 0x56, 0xb5, 0xe6, 0x4e, 0x76, 0xe4, 0x8d, 0x27, 0xff,
	0xe9, 0x91, 0xd7, 0xf8, 0xb1, 0x32, 0xd6, 0x71, 0x23, 0x8e, 0xf0, 0xc0, 0xc3, 0x7f, 0x8b, 0xe4,
	0x2d, 0x0e, 0x0b, 0xae, 0xdb, 0x9c, 0xde, 0x46, 0x28, 0x7e, 0x98, 0x3c, 0x4f, 0xba, 0x0e, 0x93,
	0xb6, 0xc3, 0xe4, 0xd8, 0x61, 0xf2, 0x1e, 0x94, 0x99, 0x0d, 0xb6, 0xbf, 0x5e, 0x06, 0x79, 0xcf,
	0x93, 0x17, 0x78, 0x68, 0x1d, 0x6f, 0xdc, 0x5c, 0x55, 0x92, 0xde, 0x45, 0x28, 0xbe, 0xcd, 0xcf,
	0x02, 0xa1, 0x38, 0x94, 0x66, 0xe1, 0xbd, 0xd0, 0x7b, 0x7d, 0x4a, 0xde, 0xe0, 0x27, 0x66, 0x55,
	0xbd, 0x13, 0x4e, 0xad, 0x79, 0x3b, 0x02, 0x4b, 0xef, 0x3d, 0x70, 0xa5, 0x92, 0x29, 0x1e, 0x2c,
	0xa5, 0xb4, 0x74, 0xf8, 0x7f, 0x75, 0x79, 0xb8, 0xbd, 0x9c, 0x0b, 0x21, 0x6b, 0xa7, 0x4c, 0xe9,
	0xff, 0x81, 0xe2, 0x08, 0xc5, 0xf7, 0xf9, 0x95, 0xda, 0x96, 0x27, 0x1a, 0xc9, 0x1d, 0x34, 0xf4,
	0xc1, 0xcf, 0xa5, 0x4f, 0x67, 0x1f, 0xb7, 0x7b, 0x86, 0x76, 0x7b, 0x86, 0x7e, 0xef, 0x19, 0xfa,
	0x7e, 0x60, 0xc1, 0xee, 0xc0, 0x82, 0x9f, 0x07, 0x16, 0x7c, 0xce, 0x4a, 0xe5, 0xbe, 0xac, 0x8a,
	0x44, 0x40, 0x95, 0x5e, 0x2e, 0x4f, 0x7a, 0xda, 0xb0, 0xcd, 0x39, 0x74, 0xdf, 0x6a, 0x69, 0x8b,
	0x3b, 0xbf, 0x15, 0xd3, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0xf6, 0x53, 0x11, 0x1a, 0x85, 0x02,
	0x00, 0x00,
}

func (m *Powerup) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Powerup) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Powerup) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintPowerup(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x5a
	}
	if m.AcceptingPower {
		i--
		if m.AcceptingPower {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x50
	}
	{
		size, err := m.Fees.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintPowerup(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x4a
	if m.NumActivations != 0 {
		i = encodeVarintPowerup(dAtA, i, uint64(m.NumActivations))
		i--
		dAtA[i] = 0x40
	}
	if m.EndTime != 0 {
		i = encodeVarintPowerup(dAtA, i, uint64(m.EndTime))
		i--
		dAtA[i] = 0x38
	}
	if m.StartTime != 0 {
		i = encodeVarintPowerup(dAtA, i, uint64(m.StartTime))
		i--
		dAtA[i] = 0x30
	}
	{
		size, err := m.Balance.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintPowerup(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x2a
	if len(m.InstanceIndex) > 0 {
		i -= len(m.InstanceIndex)
		copy(dAtA[i:], m.InstanceIndex)
		i = encodeVarintPowerup(dAtA, i, uint64(len(m.InstanceIndex)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.PowerupTemplateIndex) > 0 {
		i -= len(m.PowerupTemplateIndex)
		copy(dAtA[i:], m.PowerupTemplateIndex)
		i = encodeVarintPowerup(dAtA, i, uint64(len(m.PowerupTemplateIndex)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ClassIndex) > 0 {
		i -= len(m.ClassIndex)
		copy(dAtA[i:], m.ClassIndex)
		i = encodeVarintPowerup(dAtA, i, uint64(len(m.ClassIndex)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.CollectionIndex) > 0 {
		i -= len(m.CollectionIndex)
		copy(dAtA[i:], m.CollectionIndex)
		i = encodeVarintPowerup(dAtA, i, uint64(len(m.CollectionIndex)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPowerup(dAtA []byte, offset int, v uint64) int {
	offset -= sovPowerup(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Powerup) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.CollectionIndex)
	if l > 0 {
		n += 1 + l + sovPowerup(uint64(l))
	}
	l = len(m.ClassIndex)
	if l > 0 {
		n += 1 + l + sovPowerup(uint64(l))
	}
	l = len(m.PowerupTemplateIndex)
	if l > 0 {
		n += 1 + l + sovPowerup(uint64(l))
	}
	l = len(m.InstanceIndex)
	if l > 0 {
		n += 1 + l + sovPowerup(uint64(l))
	}
	l = m.Balance.Size()
	n += 1 + l + sovPowerup(uint64(l))
	if m.StartTime != 0 {
		n += 1 + sovPowerup(uint64(m.StartTime))
	}
	if m.EndTime != 0 {
		n += 1 + sovPowerup(uint64(m.EndTime))
	}
	if m.NumActivations != 0 {
		n += 1 + sovPowerup(uint64(m.NumActivations))
	}
	l = m.Fees.Size()
	n += 1 + l + sovPowerup(uint64(l))
	if m.AcceptingPower {
		n += 2
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovPowerup(uint64(l))
	}
	return n
}

func sovPowerup(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPowerup(x uint64) (n int) {
	return sovPowerup(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Powerup) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPowerup
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Powerup: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Powerup: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CollectionIndex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPowerup
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPowerup
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CollectionIndex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ClassIndex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPowerup
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPowerup
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ClassIndex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PowerupTemplateIndex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPowerup
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPowerup
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PowerupTemplateIndex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InstanceIndex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPowerup
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPowerup
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InstanceIndex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Balance", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthPowerup
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPowerup
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Balance.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field StartTime", wireType)
			}
			m.StartTime = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.StartTime |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EndTime", wireType)
			}
			m.EndTime = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EndTime |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NumActivations", wireType)
			}
			m.NumActivations = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NumActivations |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Fees", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthPowerup
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPowerup
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Fees.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 10:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field AcceptingPower", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.AcceptingPower = bool(v != 0)
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPowerup
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPowerup
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPowerup(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPowerup
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPowerup(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPowerup
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPowerup
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPowerup
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPowerup
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPowerup
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPowerup        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPowerup          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPowerup = fmt.Errorf("proto: unexpected end of group")
)
