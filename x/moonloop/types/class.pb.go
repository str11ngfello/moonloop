// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: moonloop/class.proto

package types

import (
	fmt "fmt"
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

type Class struct {
	CollectionIndex    string `protobuf:"bytes,1,opt,name=collectionIndex,proto3" json:"collectionIndex,omitempty"`
	ClassTemplateIndex string `protobuf:"bytes,2,opt,name=classTemplateIndex,proto3" json:"classTemplateIndex,omitempty"`
	InstanceIndex      string `protobuf:"bytes,3,opt,name=instanceIndex,proto3" json:"instanceIndex,omitempty"`
	Creator            string `protobuf:"bytes,4,opt,name=creator,proto3" json:"creator,omitempty"`
	Owner              string `protobuf:"bytes,5,opt,name=owner,proto3" json:"owner,omitempty"`
}

func (m *Class) Reset()         { *m = Class{} }
func (m *Class) String() string { return proto.CompactTextString(m) }
func (*Class) ProtoMessage()    {}
func (*Class) Descriptor() ([]byte, []int) {
	return fileDescriptor_b19fd057806c6083, []int{0}
}
func (m *Class) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Class) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Class.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Class) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Class.Merge(m, src)
}
func (m *Class) XXX_Size() int {
	return m.Size()
}
func (m *Class) XXX_DiscardUnknown() {
	xxx_messageInfo_Class.DiscardUnknown(m)
}

var xxx_messageInfo_Class proto.InternalMessageInfo

func (m *Class) GetCollectionIndex() string {
	if m != nil {
		return m.CollectionIndex
	}
	return ""
}

func (m *Class) GetClassTemplateIndex() string {
	if m != nil {
		return m.ClassTemplateIndex
	}
	return ""
}

func (m *Class) GetInstanceIndex() string {
	if m != nil {
		return m.InstanceIndex
	}
	return ""
}

func (m *Class) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Class) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func init() {
	proto.RegisterType((*Class)(nil), "str11ngfello.moonloop.moonloop.Class")
}

func init() { proto.RegisterFile("moonloop/class.proto", fileDescriptor_b19fd057806c6083) }

var fileDescriptor_b19fd057806c6083 = []byte{
	// 231 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0xc9, 0xcd, 0xcf, 0xcf,
	0xcb, 0xc9, 0xcf, 0x2f, 0xd0, 0x4f, 0xce, 0x49, 0x2c, 0x2e, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x92, 0x2b, 0x2e, 0x29, 0x32, 0x34, 0xcc, 0x4b, 0x4f, 0x4b, 0xcd, 0xc9, 0xc9, 0xd7, 0x83,
	0x29, 0x81, 0x33, 0x94, 0xb6, 0x33, 0x72, 0xb1, 0x3a, 0x83, 0xd4, 0x0b, 0x69, 0x70, 0xf1, 0x27,
	0xe7, 0xe7, 0xe4, 0xa4, 0x26, 0x97, 0x64, 0xe6, 0xe7, 0x79, 0xe6, 0xa5, 0xa4, 0x56, 0x48, 0x30,
	0x2a, 0x30, 0x6a, 0x70, 0x06, 0xa1, 0x0b, 0x0b, 0xe9, 0x71, 0x09, 0x81, 0xad, 0x08, 0x49, 0xcd,
	0x2d, 0xc8, 0x49, 0x2c, 0x49, 0x85, 0x28, 0x66, 0x02, 0x2b, 0xc6, 0x22, 0x23, 0xa4, 0xc2, 0xc5,
	0x9b, 0x99, 0x57, 0x5c, 0x92, 0x98, 0x97, 0x0c, 0x55, 0xca, 0x0c, 0x56, 0x8a, 0x2a, 0x28, 0x24,
	0xc1, 0xc5, 0x9e, 0x5c, 0x94, 0x9a, 0x58, 0x92, 0x5f, 0x24, 0xc1, 0x02, 0x96, 0x87, 0x71, 0x85,
	0x44, 0xb8, 0x58, 0xf3, 0xcb, 0xf3, 0x52, 0x8b, 0x24, 0x58, 0xc1, 0xe2, 0x10, 0x8e, 0x93, 0xf7,
	0x89, 0x47, 0x72, 0x8c, 0x17, 0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1, 0x1c,
	0xc3, 0x85, 0xc7, 0x72, 0x0c, 0x37, 0x1e, 0xcb, 0x31, 0x44, 0x19, 0xa6, 0x67, 0x96, 0x64, 0x94,
	0x26, 0xe9, 0x25, 0xe7, 0xe7, 0xea, 0x23, 0x7b, 0x5f, 0x1f, 0x1e, 0x42, 0x15, 0x08, 0x66, 0x49,
	0x65, 0x41, 0x6a, 0x71, 0x12, 0x1b, 0x38, 0xb4, 0x8c, 0x01, 0x01, 0x00, 0x00, 0xff, 0xff, 0xf9,
	0x94, 0xb4, 0xaa, 0x45, 0x01, 0x00, 0x00,
}

func (m *Class) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Class) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Class) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintClass(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintClass(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.InstanceIndex) > 0 {
		i -= len(m.InstanceIndex)
		copy(dAtA[i:], m.InstanceIndex)
		i = encodeVarintClass(dAtA, i, uint64(len(m.InstanceIndex)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ClassTemplateIndex) > 0 {
		i -= len(m.ClassTemplateIndex)
		copy(dAtA[i:], m.ClassTemplateIndex)
		i = encodeVarintClass(dAtA, i, uint64(len(m.ClassTemplateIndex)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.CollectionIndex) > 0 {
		i -= len(m.CollectionIndex)
		copy(dAtA[i:], m.CollectionIndex)
		i = encodeVarintClass(dAtA, i, uint64(len(m.CollectionIndex)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintClass(dAtA []byte, offset int, v uint64) int {
	offset -= sovClass(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Class) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.CollectionIndex)
	if l > 0 {
		n += 1 + l + sovClass(uint64(l))
	}
	l = len(m.ClassTemplateIndex)
	if l > 0 {
		n += 1 + l + sovClass(uint64(l))
	}
	l = len(m.InstanceIndex)
	if l > 0 {
		n += 1 + l + sovClass(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovClass(uint64(l))
	}
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovClass(uint64(l))
	}
	return n
}

func sovClass(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozClass(x uint64) (n int) {
	return sovClass(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Class) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowClass
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
			return fmt.Errorf("proto: Class: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Class: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CollectionIndex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClass
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
				return ErrInvalidLengthClass
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthClass
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CollectionIndex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ClassTemplateIndex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClass
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
				return ErrInvalidLengthClass
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthClass
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ClassTemplateIndex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InstanceIndex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClass
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
				return ErrInvalidLengthClass
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthClass
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InstanceIndex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClass
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
				return ErrInvalidLengthClass
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthClass
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClass
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
				return ErrInvalidLengthClass
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthClass
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipClass(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthClass
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
func skipClass(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowClass
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
					return 0, ErrIntOverflowClass
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
					return 0, ErrIntOverflowClass
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
				return 0, ErrInvalidLengthClass
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupClass
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthClass
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthClass        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowClass          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupClass = fmt.Errorf("proto: unexpected end of group")
)
