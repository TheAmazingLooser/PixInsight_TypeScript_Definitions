/**
 * PixInsight JavaScript Runtime (PJSR) Type Definitions
 * Generated for PixInsight 1.9.4+ (V8 ECMAScript Engine)
 * Includes complete JSDoc documentation, signatures, and process declarations.
 */

// --- PJSR Primitive Types ---
declare type int = number;
declare type uint = number;
declare type uint8 = number;
declare type uint16 = number;
declare type uint32 = number;
declare type uint64 = bigint;
declare type float = number;
declare type double = number;
declare type size_type = number;
declare type TypedArray = Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array;

// --- Global PJSR Core Functions ---
/** Formats a string using printf-style conversion specifications. */
declare function format( fmt: string, ...args: any[] ): string;
/** Requests garbage collection in the V8 runtime. */
declare function gc(): void;
/** Suspends script execution for a specified number of seconds. */
declare function sleep( seconds: number ): void;
/** Suspends script execution for a specified number of milliseconds. */
declare function msleep( milliseconds: number ): void;
/** Converts angle from radians to degrees. */
declare function deg( rad: number ): number;
/** Converts angle from degrees to radians. */
declare function rad( deg: number ): number;
/** Midtone Transfer Function (MTF). */
declare function mtf( m: number, x: number ): number;

// --- Enums & Namespaces ---
declare namespace APASSFlag {
   export const NoMag_B: number;
   export const NoMag_V: number;
   export const NoMag_Y: number;
   export const NoMag_g: number;
   export const NoMag_i: number;
   export const NoMag_r: number;
   export const NoMag_u: number;
   export const NoMag_z_s: number;
   export const PosErrorHigh: number;
}

declare namespace AbsoluteResizeMode {
   export const defaultValue = 0;
   export const ForceHeight = 2;
   export const ForceWidth = 1;
   export const ForceWidthAndHeight = 0;
}

declare namespace Alignment {
   export const Bottom = 2;
   export const Center = 3;
   export const defaultValue = 0;
   export const Expand = 0;
   export const Left = 1;
   export const Right = 2;
   export const Top = 1;
}

declare namespace BackgroundBrush {
   export const defaultValue = 0;
   export const Invalid = -1;
   export const Large = 2;
   export const LargeCrossPattern = 5;
   export const LargeDiagPattern = 8;
   export const Medium = 1;
   export const MediumCrossPattern = 4;
   export const MediumDiagPattern = 7;
   export const Small = 0;
   export const SmallCrossPattern = 3;
   export const SmallDiagPattern = 6;
   export const Solid = 9;
}

declare namespace BitmapFormat {
   export const ARGB32 = 0;
   export const Invalid = -1;
   export const RGB32 = 1;
}

declare namespace BitmapInterpolation {
   export const Bilinear = 1;
   export const NearestNeighbor = 0;
}

declare namespace BrushStyle {
   export const BackwardDiagonalHatch = 9;
   export const ConicalGradient = 14;
   export const CrossDiagonalHatch = 10;
   export const CrossHatch = 7;
   export const Dense = 2;
   export const Empty = 0;
   export const ForwardDiagonalHatch = 8;
   export const HalfTone = 3;
   export const HorizontalHatch = 5;
   export const LinearGradient = 12;
   export const RadialGradient = 13;
   export const Solid = 1;
   export const Sparse = 4;
   export const Textured = 11;
   export const VerticalHatch = 6;
}

declare namespace CheckState {
   export const Checked = 1;
   export const ThirdState = 2;
   export const Unchecked = 0;
}

/**
 * CipherAlgorithm provides enumeration constants for the selection of encryption/decryption algorithms with the Cipher object.
 */
declare namespace CipherAlgorithm {
   export const AES256 = 256;
   export const None = 0;
}

declare namespace ClipCode {
   export const Bottom = 8;
   export const Inside = 0;
   export const Left = 1;
   export const Right = 4;
   export const Top = 2;
}

declare namespace ColorSpace {
   export const CIELab = 3;
   export const CIELch = 4;
   export const CIEXYZ = 2;
   export const Gray = 0;
   export const HSI = 6;
   export const HSV = 5;
   export const RGB = 1;
   export const Unknown = -1;
}

declare namespace CompositionOp {
   export const Add = 14;
   export const Clear = 0;
   export const ColorBurn = 19;
   export const ColorDodge = 18;
   export const Destination = 2;
   export const DestinationAtop = 10;
   export const DestinationIn = 6;
   export const DestinationOut = 8;
   export const DestinationOver = 4;
   export const Difference = 22;
   export const Exclusion = 23;
   export const HardLight = 20;
   export const Max = 13;
   export const Min = 12;
   export const Multiply = 15;
   export const Overlay = 17;
   export const Screen = 16;
   export const SoftLight = 21;
   export const Source = 1;
   export const SourceAtop = 9;
   export const SourceIn = 5;
   export const SourceOut = 7;
   export const SourceOver = 3;
   export const Xor = 11;
}

declare namespace CompressionAlgorithm {
   export const LZ4 = 4;
   export const LZ4HC = 41;
   export const None = 0;
   export const ZLib = 1;
   export const Zstd = 5;
}

declare namespace DataType {
   export const BigInt64Array = 27;
   export const BigUint64Array = 28;
   export const Boolean = 0;
   export const ByteArray = 15;
   export const Complex32 = 11;
   export const Complex64 = 12;
   export const Double = 10;
   export const Float = 9;
   export const Float32Array = 18;
   export const Float64Array = 19;
   export const Int16 = 3;
   export const Int16Array = 22;
   export const Int32 = 5;
   export const Int32Array = 20;
   export const Int64 = 7;
   export const Int8 = 1;
   export const Int8Array = 24;
   export const Matrix = 17;
   export const Real32 = 9;
   export const Real64 = 10;
   export const String = 14;
   export const String16 = 14;
   export const String8 = 13;
   export const UCString = 14;
   export const UTF16String = 14;
   export const UTF8String = 13;
   export const Uint16 = 4;
   export const Uint16Array = 23;
   export const Uint32 = 6;
   export const Uint32Array = 21;
   export const Uint64 = 8;
   export const Uint8 = 2;
   export const Uint8Array = 25;
   export const Uint8ClampedArray = 26;
   export const Undefined = -1;
   export const Vector = 16;
}

declare namespace DisplayChannel {
   export const Alpha = 19;
   export const Blue = 3;
   export const CIE_L = 4;
   export const CIE_X = 11;
   export const CIE_Y = 12;
   export const CIE_Z = 13;
   export const CIE_a = 7;
   export const CIE_b = 8;
   export const CIE_c = 9;
   export const CIE_h = 10;
   export const ChrominanceLFixed = 6;
   export const ChrominanceRG = 5;
   export const Green = 2;
   export const Hue = 14;
   export const Intensity = 18;
   export const Invalid = -1;
   export const Lightness = 4;
   export const RGBK = 0;
   export const Red = 1;
   export const SaturationHSI = 16;
   export const SaturationHSV = 15;
   export const Value = 17;
}

declare namespace FileFlag {
   export const Archive = 4096;
   export const Block = 1;
   export const Character = 2;
   export const Compressed = 8192;
   export const Directory = 16;
   export const Encrypted = 16384;
   export const Execute = 4194304;
   export const ExecuteGroup = 67108864;
   export const ExecuteOthers = 1073741824;
   export const FIFO = 4;
   export const FileAttributes = 1044480;
   export const FilePermissions = 4293918720;
   export const FileType = 255;
   export const Hidden = 32768;
   export const Read = 1048576;
   export const ReadGroup = 16777216;
   export const ReadOnly = 65536;
   export const ReadOthers = 268435456;
   export const Regular = 8;
   export const Socket = 64;
   export const SymbolicLink = 32;
   export const System = 131072;
   export const Temporary = 262144;
   export const Write = 2097152;
   export const WriteGroup = 33554432;
   export const WriteOthers = 536870912;
}

declare namespace FileMode {
   export const AccessMode = 15;
   export const Create = 512;
   export const Open = 256;
   export const OpenMode = 3840;
   export const Read = 1;
   export const ShareMode = 240;
   export const ShareRead = 16;
   export const ShareWrite = 32;
   export const Write = 2;
}

declare namespace FillRule {
   export const OddEven = 0;
   export const Winding = 1;
}

declare namespace FocusStyle {
   export const Click = 2;
   export const NoFocus = 0;
   export const Tab = 1;
   export const TextListTab = 8;
   export const Wheel = 4;
}

declare namespace FontFamily {
   export const Courier = 4;
   export const Decorative = 5;
   export const defaultValue = 0;
   export const Helvetica = 1;
   export const Monospace = 4;
   export const OldEnglish = 5;
   export const SansSerif = 1;
   export const Script = 3;
   export const Serif = 2;
   export const Swiss = 1;
   export const Symbol = 6;
   export const Teletype = 4;
   export const Times = 2;
   export const TypeWriter = 4;
}

declare namespace FontStretch {
   export const Condensed = 75;
   export const Expanded = 125;
   export const ExtraCondensed = 62;
   export const ExtraExpanded = 150;
   export const SemiCondensed = 87;
   export const SemiExpanded = 112;
   export const UltraCondensed = 50;
   export const UltraExpanded = 200;
   export const Unstretched = 100;
}

declare namespace FontWeight {
   export const Black = 900;
   export const Bold = 700;
   export const DemiBold = 600;
   export const ExtraBold = 800;
   export const ExtraLight = 200;
   export const Heavy = 850;
   export const Light = 300;
   export const Medium = 500;
   export const Normal = 400;
   export const Regular = 400;
   export const SemiBold = 600;
   export const Thin = 100;
   export const UltraBold = 800;
   export const UltraLight = 200;
}

declare namespace FrameStyle {
   export const Box = 1;
   export const Flat = 0;
   export const Raised = 2;
   export const Styled = 4;
   export const Sunken = 3;
}

declare namespace GaiaFlag {
   export const BPRPExcess: number;
   export const BPRPExcessHigh: number;
   export const BronzeAstrometry: number;
   export const BronzeDec: number;
   export const BronzeGBPMag: number;
   export const BronzeGMag: number;
   export const BronzeGRPMag: number;
   export const BronzePMDec: number;
   export const BronzePMRA: number;
   export const BronzeParx: number;
   export const BronzePhotometry: number;
   export const BronzeRA: number;
   export const GoldAstrometry: number;
   export const GoldDec: number;
   export const GoldGBPMag: number;
   export const GoldGMag: number;
   export const GoldGRPMag: number;
   export const GoldPMDec: number;
   export const GoldPMRA: number;
   export const GoldParx: number;
   export const GoldPhotometry: number;
   export const GoldRA: number;
   export const GoodAstrometry: number;
   export const GoodPhotometry: number;
   export const LackingData: number;
   export const NoGBPMag: number;
   export const NoGRPMag: number;
   export const NoPM: number;
   export const SilverAstrometry: number;
   export const SilverDec: number;
   export const SilverGBPMag: number;
   export const SilverGMag: number;
   export const SilverGRPMag: number;
   export const SilverPMDec: number;
   export const SilverPMRA: number;
   export const SilverParx: number;
   export const SilverPhotometry: number;
   export const SilverRA: number;
}

declare namespace GradientSpreadMode {
   export const Pad = 0;
   export const Reflect = 1;
   export const Repeat = 2;
}

declare namespace HighPassMode {
   export const Raw = 2;
   export const Rescale = 1;
   export const Truncate = 0;
}

declare namespace ImageMode {
   export const Center = 4;
   export const defaultValue = 0;
   export const DynamicOperation = 7;
   export const EditPreview = 6;
   export const Invalid = -1;
   export const NewPreview = 5;
   export const Pan = 3;
   export const Readout = 0;
   export const ZoomIn = 1;
   export const ZoomOut = 2;
}

declare namespace ImageOp {
   export const Add = 2;
   export const And = 11;
   export const ColorBurn = 17;
   export const ColorDodge = 20;
   export const Dif = 7;
   export const Div = 5;
   export const Exclusion = 27;
   export const HardLight = 23;
   export const LinearBurn = 18;
   export const LinearLight = 25;
   export const Max = 9;
   export const Min = 8;
   export const Mov = 1;
   export const Mul = 4;
   export const Nand = 15;
   export const Nop = 0;
   export const Nor = 14;
   export const Not = 13;
   export const Or = 10;
   export const Overlay = 21;
   export const PinLight = 26;
   export const Pow = 6;
   export const Screen = 19;
   export const SoftLight = 22;
   export const Sub = 3;
   export const VividLight = 24;
   export const Xnor = 16;
   export const Xor = 12;
}

declare namespace ImageType {
   export const Bias = 1;
   export const BinaryRejectionMapHigh = 12;
   export const BinaryRejectionMapLow = 13;
   export const Dark = 2;
   export const DefectMap = 9;
   export const Flat = 3;
   export const Light = 4;
   export const MasterBias = 5;
   export const MasterDark = 6;
   export const MasterFlat = 7;
   export const MasterLight = 8;
   export const RejectionMapHigh = 10;
   export const RejectionMapLow = 11;
   export const SlopeMap = 14;
   export const Unknown = 0;
   export const WeightMap = 15;
}

declare namespace InterpolationAlgorithm {
   export const Auto = -1;
   export const BicubicBSpline = 3;
   export const BicubicSpline = 2;
   export const Bilinear = 1;
   export const CatmullRomSplineFilter = 8;
   export const CubicBSplineFilter = 9;
   export const defaultValue = 2;
   export const Lanczos3 = 4;
   export const Lanczos4 = 5;
   export const Lanczos5 = 6;
   export const MitchellNetravaliFilter = 7;
   export const NearestNeighbor = 0;
}

declare namespace KeyCode {
   export const A = 65;
   export const Alt = 1879048195;
   export const Ampersand = 38;
   export const Apostrophe = 39;
   export const Asterisk = 42;
   export const At = 64;
   export const B = 66;
   export const Backslash = 92;
   export const Backspace = 8;
   export const Bar = 124;
   export const C = 67;
   export const CapsLock = 1879048208;
   export const Circumflex = 94;
   export const Clear = 12;
   export const Colon = 58;
   export const Comma = 44;
   export const Control = 1879048194;
   export const D = 68;
   export const deleteFlag = 268435488;
   export const Dollar = 36;
   export const DoubleQuote = 34;
   export const Down = 268435460;
   export const E = 69;
   export const Eight = 56;
   export const End = 268435968;
   export const Enter = 13;
   export const Equal = 61;
   export const Escape = 27;
   export const Exclamation = 33;
   export const F = 70;
   export const F1 = 134217729;
   export const F10 = 134217738;
   export const F11 = 134217739;
   export const F12 = 134217740;
   export const F13 = 134217741;
   export const F14 = 134217742;
   export const F15 = 134217743;
   export const F16 = 134217744;
   export const F17 = 134217760;
   export const F18 = 134217776;
   export const F19 = 134217792;
   export const F2 = 134217730;
   export const F20 = 134217808;
   export const F21 = 134217824;
   export const F22 = 134217840;
   export const F23 = 134217856;
   export const F24 = 134217872;
   export const F3 = 134217731;
   export const F4 = 134217732;
   export const F5 = 134217733;
   export const F6 = 134217734;
   export const F7 = 134217735;
   export const F8 = 134217736;
   export const F9 = 134217737;
   export const Five = 53;
   export const Four = 52;
   export const G = 71;
   export const Greater = 62;
   export const H = 72;
   export const Help = 1879048960;
   export const Home = 268435712;
   export const I = 73;
   export const Insert = 268435472;
   export const J = 74;
   export const K = 75;
   export const L = 76;
   export const Left = 268435457;
   export const LeftBrace = 123;
   export const LeftBracket = 91;
   export const LeftParenthesis = 40;
   export const LeftQuote = 96;
   export const Less = 60;
   export const M = 77;
   export const Meta = 1879048196;
   export const Minus = 45;
   export const N = 78;
   export const Nine = 57;
   export const NumLock = 1879048224;
   export const NumberSign = 35;
   export const O = 79;
   export const One = 49;
   export const P = 80;
   export const PageDown = 268436480;
   export const PageUp = 268436224;
   export const Pause = 1879048448;
   export const Percent = 37;
   export const Period = 46;
   export const Plus = 43;
   export const Print = 1879048704;
   export const Q = 81;
   export const Question = 63;
   export const R = 82;
   export const _Return = 13;
   export const Right = 268435459;
   export const RightBrace = 125;
   export const RightBracket = 93;
   export const RightParenthesis = 41;
   export const S = 83;
   export const ScrollLock = 1879048240;
   export const Semicolon = 59;
   export const Seven = 55;
   export const Shift = 1879048193;
   export const Six = 54;
   export const Slash = 47;
   export const Space = 32;
   export const SysReq = 1879049216;
   export const T = 84;
   export const Tab = 9;
   export const Three = 51;
   export const Tilde = 126;
   export const Two = 50;
   export const U = 85;
   export const Underscore = 95;
   export const Unknown = 2147483647;
   export const Up = 268435458;
   export const V = 86;
   export const W = 87;
   export const X = 88;
   export const Y = 89;
   export const Z = 90;
   export const Zero = 48;
}

declare namespace KeyModifier {
   export const Alt = 4;
   export const Control = 2;
   export const Meta = 16;
   export const Shift = 1;
   export const SpaceBar = 8;
}

declare namespace KeyboardModifier {
   export const Alt = 4;
   export const Cmd = 32;
   export const Control = 2;
   export const Meta = 16;
   export const None = 0;
   export const Shift = 1;
   export const SpaceBar = 8;
}

declare namespace MaskMode {
   export const defaultValue = 2;
   export const Invalid = -1;
   export const Multiply = 1;
   export const OverlayBlue = 4;
   export const OverlayCyan = 7;
   export const OverlayGreen = 3;
   export const OverlayMagenta = 6;
   export const OverlayOrange = 8;
   export const OverlayRed = 2;
   export const OverlayViolet = 9;
   export const OverlayYellow = 5;
   export const Replace = 0;
}

declare namespace MorphologicalOp {
   export const Closing = 2;
   export const Dilation = 1;
   export const Erosion = 0;
   export const Median = 4;
   export const Midpoint = 6;
   export const Opening = 3;
   export const Selection = 5;
}

declare namespace MouseButton {
   export const Left = 1;
   export const Middle = 4;
   export const Right = 2;
   export const Unknown = 0;
   export const X1 = 16;
   export const X2 = 32;
}

declare namespace PDFVersion {
   export const A1b = 1;
   export const X4 = 3;
   export const _1_4 = 0;
   export const _1_6 = 2;
}

declare namespace PSFStatus {
   export const BadParameters = 2;
   export const FittedOk = 1;
   export const InaccurateSolution = 5;
   export const Invalid = -1;
   export const NoConvergence = 4;
   export const NoSolution = 3;
   export const NotFitted = 0;
   export const UnknownError = 6;
}

declare namespace PSFunction {
   export const Auto = 999;
   export const defaultValue = 0;
   export const Gaussian = 0;
   export const Invalid = -1;
   export const Lorentzian = 8;
   export const Moffat = 1;
   export const Moffat15 = 7;
   export const Moffat25 = 6;
   export const Moffat4 = 5;
   export const Moffat6 = 4;
   export const Moffat8 = 3;
   export const MoffatA = 2;
   export const VariableShape = 9;
}

declare namespace PenCap {
   export const Flat = 0;
   export const Round = 2;
   export const Square = 1;
}

declare namespace PenJoin {
   export const Bevel = 1;
   export const Miter = 0;
   export const Round = 2;
}

declare namespace PenStyle {
   export const Dash = 2;
   export const DashDot = 4;
   export const DashDotDot = 5;
   export const Dot = 3;
   export const Empty = 0;
   export const Solid = 1;
}

declare namespace PixelSampleType {
   export const Complex = 2;
   export const Float = 1;
   export const Integer = 0;
   export const Unknown = -1;
}

declare namespace PlotAxisGridDensity {
   export const MajorAndMinor = 1;
   export const MajorOnly = 0;
}

declare namespace PlotAxisOrientation {
   export const X = 0;
   export const Y = 1;
}

declare namespace PlotAxisScale {
   export const Linear = 0;
   export const Log10 = 1;
}

declare namespace PlotAxisSide {
   export const Bottom = 0;
   export const Left = 2;
   export const Right = 3;
   export const Top = 1;
}

declare namespace PlotAxisTickLabelFormat {
   export const Decimal = 1;
   export const Printf = 3;
   export const Scientific = 2;
   export const SmartCompact = 0;
}

declare namespace PlotEdge {
   export const Bottom = 1;
   export const Left = 2;
   export const Right = 3;
   export const Top = 0;
}

declare namespace PlotLegendPosition {
   export const BottomLeft = 2;
   export const BottomRight = 3;
   export const TopLeft = 0;
   export const TopRight = 1;
}

declare namespace PlotLineInterpolation {
   export const Akima = 1;
   export const CubicSpline = 2;
   export const Linear = 0;
}

declare namespace PlotLineStyle {
   export const Dash = 1;
   export const DashDot = 3;
   export const Dot = 2;
   export const Solid = 0;
}

declare namespace PlotMarkerShape {
   export const Circle = 1;
   export const Cross = 4;
   export const None = 0;
   export const Plus = 5;
   export const Square = 2;
   export const Triangle = 3;
}

declare namespace PlotTitleAlignment {
   export const Center = 1;
   export const Left = 0;
   export const Right = 2;
}

declare namespace PointMatcherTransformation {
   export const defaultValue = 0;
   export const Match = 1;
   export const Projective = 0;
   export const Translation = 2;
   export const Translation_Rotation = 3;
}

declare namespace ProcessError {
   export const Crashed = 1;
   export const FailedToStart = 0;
   export const ReadError = 3;
   export const Timedout = 2;
   export const UnknownError = 5;
   export const WriteError = 4;
}

declare namespace ProcessExitStatus {
   export const Crash = 1;
   export const Normal = 0;
}

declare namespace PropertyAttribute {
   export const Invalid = 4294967295;
   export const NoChange = 2147483648;
   export const NotSerializable = 64;
   export const Permanent = 32;
   export const _Protected = 536870912;
   export const ReadProtected = 2;
   export const Reserved = 268435456;
   export const Storable = 128;
   export const Volatile = 16;
   export const WriteProtected = 1;
}

declare namespace PropertyType {
   export const Auto = 0;
   export const Boolean = 1;
   export const ByteArray = 45;
   export const C32Matrix = 43;
   export const C32Vector = 31;
   export const C64Matrix = 44;
   export const C64Vector = 32;
   export const Complex = 13;
   export const Complex32 = 12;
   export const Complex64 = 13;
   export const Double = 11;
   export const F32Matrix = 41;
   export const F32Point = 16;
   export const F32Rect = 19;
   export const F32Vector = 29;
   export const F64Matrix = 42;
   export const F64Point = 17;
   export const F64Rect = 20;
   export const F64Vector = 30;
   export const FPoint = 17;
   export const FRect = 20;
   export const Float = 10;
   export const Float32 = 10;
   export const Float64 = 11;
   export const I16Matrix = 35;
   export const I16Vector = 23;
   export const I32Matrix = 37;
   export const I32Point = 15;
   export const I32Rect = 18;
   export const I32Vector = 25;
   export const I64Matrix = 39;
   export const I64Vector = 27;
   export const I8Matrix = 33;
   export const I8Vector = 21;
   export const Int = 4;
   export const Int16 = 3;
   export const Int32 = 4;
   export const Int64 = 5;
   export const Int8 = 2;
   export const Invalid = 0;
   export const IsoString = 47;
   export const Matrix = 42;
   export const Point = 15;
   export const Rect = 18;
   export const String = 46;
   export const TimePoint = 14;
   export const UI16Matrix = 36;
   export const UI16Vector = 24;
   export const UI32Matrix = 38;
   export const UI32Vector = 26;
   export const UI64Matrix = 40;
   export const UI64Vector = 28;
   export const UI8Matrix = 34;
   export const UI8Vector = 22;
   export const UInt = 8;
   export const UInt16 = 7;
   export const UInt32 = 8;
   export const UInt64 = 9;
   export const UInt8 = 6;
   export const UTF16String = 46;
   export const UTF8String = 47;
   export const Vector = 30;
}

declare namespace RadialBasisFunction {
   export const DDMMultiquadric = 102;
   export const DDMThinPlateSpline = 101;
   export const DDMVariableOrder = 100;
   export const defaultValue = 1;
   export const Gaussian = 2;
   export const InverseMultiquadric = 4;
   export const InverseQuadratic = 5;
   export const Multiquadric = 3;
   export const ThinPlateSpline = 1;
   export const Unknown = -1;
   export const VariableOrder = 0;
}

declare namespace RandomizationOption {
   export const Alpha = 3;
   export const BinDigits = 32;
   export const defaultValue = 7;
   export const Digits = 4;
   export const FullRange = 2147483648;
   export const HexDigits = 16;
   export const Lowercase = 1;
   export const Symbols = 8;
   export const Uppercase = 2;
}

declare namespace ReadTextOption {
   export const RemoveEmptyLines = 1;
   export const TrimLeadingSpaces = 4;
   export const TrimSpaces = 6;
   export const TrimTrailingSpaces = 2;
}

declare namespace ResizeMode {
   export const AbsoluteCentimeters = 2;
   export const AbsoluteInches = 3;
   export const AbsolutePixels = 1;
   export const defaultValue = 0;
   export const ForceArea = 4;
   export const RelativeDimensions = 0;
}

declare namespace SVGRenderOption {
   export const defaultValue = 1;
   export const Fast = 0;
   export const HighQuality = 16;
   export const IgnoreAspectRatio = 0;
   export const PreserveAspectRatio = 1;
}

declare namespace SeekMode {
   export const FromBegin = 0;
   export const FromCurrent = 1;
   export const FromEnd = 2;
}

declare namespace SourceCodeFlag {
   export const Minimal = 15;
   export const NoDescription = 8;
   export const NoExecutionTime = 2;
   export const NoReadOnlyParams = 4;
   export const NoStartTime = 1;
   export const NoTimeInfo = 3;
}

declare namespace StdButton {
   export const Abort = 5;
   export const Cancel = 2;
   export const Ignore = 7;
   export const No = 4;
   export const NoButton = 0;
   export const NoToAll = 9;
   export const Ok = 1;
   export const Retry = 6;
   export const Yes = 3;
   export const YesToAll = 8;
}

declare namespace StdCursor {
   export const Accept = 9;
   export const Add = 11;
   export const Arrow = 1;
   export const ArrowQuestion = 17;
   export const ArrowWait = 16;
   export const BackwardDiagonalSize = 22;
   export const Checkmark = 7;
   export const CircleMinus = 32;
   export const CirclePlus = 31;
   export const ClosedHand = 28;
   export const Copy = 12;
   export const Cross = 13;
   export const Crossmark = 8;
   export const defaultValue = 1;
   export const DownArrow = 4;
   export const Forbidden = 33;
   export const ForwardDiagonalSize = 21;
   export const Hand = 26;
   export const HorizontalSize = 20;
   export const HorizontalSplit = 25;
   export const Hourglass = 14;
   export const IBeam = 18;
   export const InvArrow = 2;
   export const LeftArrow = 5;
   export const NoCursor = 0;
   export const OpenHand = 27;
   export const PointingHand = 26;
   export const Reject = 10;
   export const RightArrow = 6;
   export const SizeAll = 23;
   export const SquareMinus = 30;
   export const SquarePlus = 29;
   export const UpArrow = 3;
   export const VerticalSize = 19;
   export const VerticalSplit = 24;
   export const Wait = 15;
   export const Watch = 15;
}

declare namespace StdDialogCode {
   export const Cancel = 0;
   export const Ok = 1;
}

declare namespace StdIcon {
   export const Error = 4;
   export const Information = 2;
   export const NoIcon = 0;
   export const Question = 1;
   export const Warning = 3;
}

declare namespace TabPosition {
   export const Bottom = 1;
   export const Left = 2;
   export const Right = 3;
   export const Top = 0;
}

declare namespace TextAlignment {
   export const Bottom = 64;
   export const Center = 132;
   export const defaultValue = 33;
   export const HorzCenter = 4;
   export const Justify = 8;
   export const Left = 1;
   export const Right = 2;
   export const Top = 32;
   export const Unknown = 0;
   export const VertCenter = 128;
}

declare namespace TickStyle {
   export const BothSides = 3;
   export const Bottom = 2;
   export const Left = 1;
   export const NoTicks = 0;
   export const Right = 2;
   export const Top = 1;
}

declare namespace TransparencyMode {
   export const BackgroundBrush = 1;
   export const Color = 2;
   export const defaultValue = 1;
   export const Hide = 0;
   export const Invalid = -1;
}

declare namespace UndoFlag {
   export const All = 1048575;
   export const AstrometricSolution = 256;
   export const DefaultMode = 0;
   export const DeletePropertiesOnEntry = 16777216;
   export const DeletePropertiesOnExit = 33554432;
   export const ExcludeMaskRelations = 1073741824;
   export const ExcludePreviews = 2147483648;
   export const FormatData = 32;
   export const ICCProfile = 4;
   export const ImageId = 64;
   export const Keywords = 8;
   export const NoSwapFile = 4294967295;
   export const PixelData = 1;
   export const RGBWS = 2;
   export const Resolution = 128;
   export const ViewProperties = 65536;
}

declare namespace WritingSystem {
   export const Any = 0;
   export const Arabic = 6;
   export const Armenian = 4;
   export const Bengali = 10;
   export const Cyrillic = 3;
   export const Devanagari = 9;
   export const Georgian = 23;
   export const Greek = 2;
   export const Gujarati = 12;
   export const Gurmukhi = 11;
   export const Hebrew = 5;
   export const Japanese = 27;
   export const Kannada = 16;
   export const Khmer = 24;
   export const Korean = 28;
   export const Lao = 20;
   export const Latin = 1;
   export const Malayalam = 17;
   export const Myanmar = 22;
   export const Nko = 33;
   export const Ogham = 31;
   export const Oriya = 13;
   export const Runic = 32;
   export const SimplifiedChinese = 25;
   export const Sinhala = 18;
   export const Symbol = 30;
   export const Syriac = 7;
   export const Tamil = 14;
   export const Telugu = 15;
   export const Thaana = 8;
   export const Thai = 19;
   export const Tibetan = 21;
   export const TraditionalChinese = 26;
   export const Vietnamese = 29;
}

declare namespace XMLNodeType {
   export const All = 268435711;
   export const AllKnown = 255;
   export const CDATA = 4;
   export const ChildNode = 2147483648;
   export const Comment = 16;
   export const Element = 1;
   export const ProcessingInstructions = 8;
   export const Text = 2;
   export const Undefined = 0;
   export const Unknown = 268435456;
}

declare namespace XMLParserOption {
   export const defaultValue = 0;
   export const IgnoreComments = 1;
   export const IgnoreStrayCharacters = 4;
   export const IgnoreUnknownElements = 2;
   export const NormalizeTextSpaces = 8;
}

declare namespace Console {
   export const abort: Function;
   export const abortEnabled: boolean;
   export const abortRequested: boolean;
   export const beginLog: Function;
   export const clear: Function;
   export const critical: Function;
   export const criticalln: Function;
   export const deprecated: Function;
   export const endLog: Function;
   export const flush: Function;
   export const hide: Function;
   export const isAborted: boolean;
   export const isError: boolean;
   export const isSuspended: boolean;
   export const isWaiting: boolean;
   export const logText: Function;
   export const note: Function;
   export const noteln: Function;
   export const readChar: Function;
   export const readString: Function;
   export const resetStatus: Function;
   export const show: Function;
   export const warning: Function;
   export const warningln: Function;
   export const write: Function;
   export const writeln: Function;
}

declare namespace CoreApplication {
   export const acceleratedWebView: boolean;
   export const activateInstance: Function;
   export const agentName: string;
   export const appDirPath: string;
   export const baseDirPath: string;
   export const binDirPath: string;
   export const caBundleFilePath: string;
   export const clearPendingMessages: Function;
   export const colorDirPath: string;
   export const configDirPath: string;
   export const continueAutoSaveTasks: Function;
   export const dirPath: string;
   export const docDirPath: string;
   export const ensureMinimumVersion: Function;
   export const etcDirPath: string;
   export const filePath: string;
   export const firstInstanceAlive: Function;
   export const hasPendingMessages: boolean;
   export const includeDirPath: string;
   export const instance: number;
   export const instancePID: Function;
   export const isInstanceAlive: Function;
   export const isInstanceRunning: Function;
   export const language: string;
   export const launchInstance: Function;
   export const libDirPath: string;
   export const libraryDirPath: string;
   export const loadResource: Function;
   export const numberOfPendingMessages: number;
   export const otherInstancesRunning: Function;
   export const pauseAutoSaveTasks: Function;
   export const pclVersion: string;
   export const pclVersionBeta: number;
   export const pclVersionBuild: number;
   export const pclVersionMajor: number;
   export const pclVersionMinor: number;
   export const pclVersionRelease: number;
   export const pid: string;
   export const platform: string;
   export const processEvents: Function;
   export const processPendingMessages: Function;
   export const programName: string;
   export const rscDirPath: string;
   export const sendMessage: Function;
   export const srcDirPath: string;
   export const startTime: object;
   export const terminateInstance: Function;
   export const unloadResource: Function;
   export const versionBeta: number;
   export const versionBuild: number;
   export const versionCodename: string;
   export const versionLE: boolean;
   export const versionMajor: number;
   export const versionMinor: number;
   export const versionRelease: number;
   export const versionRevision: number;
}

declare namespace Runtime {
   export const isRoot: boolean;
   export const jsArguments: object;
   export const jsScriptInformation: string;
   export const jsScriptResult: object;
   export const jsVersion: number;
   export const v8Version: string;
}

declare namespace Security {
   export const certifiedDevelopers: Function;
   export const disableSecureScriptSigningEnvironment: Function;
   export const enableSecureScriptSigningEnvironment: Function;
   export const entitlements: Function;
   export const exportSigningKeysFile: Function;
   export const generateCodeSignatureFile: Function;
   export const generateLocalSigningKeysFile: Function;
   export const generateModuleSignatureFile: Function;
   export const generateScriptSignatureFile: Function;
   export const generateSigningKeysFile: Function;
   export const generateXMLSignature: Function;
   export const getCodeSignature: Function;
   export const getModuleSignature: Function;
   export const getScriptSignature: Function;
   export const getXMLSignature: Function;
   export const haveEntitlement: Function;
   export const isSecureScriptSigningEnvironment: Function;
   export const loadSigningKeysFile: Function;
   export const submitCertifiedDeveloperData: Function;
   export const submitCertifiedDeveloperDataWithSigningKeysFile: Function;
   export const validPassword: Function;
}

declare namespace Settings {
   export const canReadGlobal: Function;
   export const canWriteGlobal: Function;
   export const globalVariableExists: Function;
   export const globalVariableType: Function;
   export const keyExists: Function;
   export const lastReadOK: boolean;
   export const read: Function;
   export const readGlobal: Function;
   export const remove: Function;
   export const removeGlobal: Function;
   export const valueExists: Function;
   export const write: Function;
   export const writeGlobal: Function;
}

declare namespace SignatureParser {
   export const normalizeType: Function;
   export const parseConstant: Function;
   export const parseConstructor: Function;
   export const parseMethod: Function;
   export const parseParameters: Function;
   export const parseProperty: Function;
}

declare namespace Stat {
   export const BMV: Function;
   export const BWMV: Function;
   export const MAD: Function;
   export const Qn: Function;
   export const Sn: Function;
   export const avgDev: Function;
   export const bendMidvariance: Function;
   export const biweightMidvariance: Function;
   export const generalizedESDRejection: Function;
   export const initRandomGenerator: Function;
   export const maximum: Function;
   export const mean: Function;
   export const median: Function;
   export const medianAbsDev: Function;
   export const minimum: Function;
   export const modulus: Function;
   export const orderStatistic: Function;
   export const random: Function;
   export const randomArray: Function;
   export const randomFloat32Array: Function;
   export const randomFloat64Array: Function;
   export const randomSeed32: Function;
   export const randomSeed64: Function;
   export const robustChauvenetRejection: Function;
   export const stableAvgDev: Function;
   export const stableMean: Function;
   export const stableModulus: Function;
   export const stableSum: Function;
   export const stableSumOfSquares: Function;
   export const stdDev: Function;
   export const sum: Function;
   export const sumOfSquares: Function;
   export const trimmedMean: Function;
   export const trimmedMeanOfSquares: Function;
   export const twoSidedAvgDev: Function;
   export const twoSidedBWMV: Function;
   export const twoSidedBiweightMidvariance: Function;
   export const twoSidedMAD: Function;
   export const twoSidedMedianAbsDev: Function;
   export const variance: Function;
   export const winsorizedSigmaClippingRejection: Function;
}

declare namespace System {
   export const byteOrder: string;
   export const cpuArchitecture: string;
   export const cpuId: Function;
   export const cpuInfo: Function;
   export const getEnvironmentVariable: Function;
   export const hostName: string;
   export const kernelVersion: string;
   export const msleep: Function;
   export const noop: Function;
   export const offsetFromUTC: Function;
   export const osName: string;
   export const osVersion: string;
   export const physicalMemoryStatus: Function;
   export const platform: string;
   export const replaceEnvironmentVariables: Function;
   export const sleep: Function;
}

declare namespace XML {
   export const collapsedSpaces: Function;
   export const decodedText: Function;
   export const encodedText: Function;
   export const isLineBreakChar: Function;
   export const isNameChar: Function;
   export const isNameStartChar: Function;
   export const isRestrictedChar: Function;
   export const isSpaceChar: Function;
   export const isValidName: Function;
   export const isWhiteSpaceChar: Function;
   export const referenceValue: Function;
   export const trimmedSpaces: Function;
}

declare namespace console {
   export const abort: Function;
   export const abortEnabled: boolean;
   export const abortRequested: boolean;
   export const beginLog: Function;
   export const clear: Function;
   export const critical: Function;
   export const criticalln: Function;
   export const deprecated: Function;
   export const endLog: Function;
   export const flush: Function;
   export const hide: Function;
   export const isAborted: boolean;
   export const isError: boolean;
   export const isSuspended: boolean;
   export const isWaiting: boolean;
   export const logText: Function;
   export const note: Function;
   export const noteln: Function;
   export const readChar: Function;
   export const readString: Function;
   export const resetStatus: Function;
   export const show: Function;
   export const warning: Function;
   export const warningln: Function;
   export const write: Function;
   export const writeln: Function;
}

/**
 * A quadtree [1] is a specialized binary search tree for partitioning of a set of geometric entities in two-dimensional space. Quadtrees have important applications in computational geometry problems requiring efficient rectangular range searching and nearest neighbor queries. This object implements a bucket rectangle quadtree structure. [2]
 * Let o be any object stored in a BRQuadTree structure. There must exist an o.rect property which stores the coordinates of the rectangular region associated with o. The following numeric properties must be defined:
 * where the following constraints must be observed by every object stored in a BRQuadTree structure:
 */
declare class BRQuadTree {
   /**
    * Constructs a new BRQuadTree object with the optional objects, bucketCapacity, and minimum region dimension epsilon.
    */
   constructor( objects?: any[], bucketCapacity?: number, epsilon?: number );
   constructor( objects?: any[], bucketCapacity?: number, epsilon?: number );
   /**
    * The current bucket capacity. This is the maximum number of objects allowed in a leaf quadtree node. The default value is 40, which is appropriate in most practical applications. The optimal value should be found through benchmarks in each particular case.
    */
   readonly bucketCapacity: number;
   /**
    * The minimum allowed dimension of a node region. The default value is 1.0e-8.
    */
   readonly epsilon: number;
   /**
    * The array of object references stored in this quadtree.
    */
   readonly objects: any[];
   /**
    * The root node of this quadtree.
    */
   readonly root: QuadTreeNode;
   /**
    * Returns the average distance between the specified rectangle r and the rectangles associated with all objects found at a prescribed maximum distance defined by the dx and dy increments.
    * This function computes the average distance exclusively for all objects in this quadtree intersecting the search rectangle:
    * { x0: rect.x0 - dx, y0: rect.y0 - dy,
    * x1: rect.x1 + dx, y1: rect.y1 + dy }
    * If excludeRect is specified and not undefined, any object intersecting it will also be ignored.
    * If there are no objects intersecting the search rectangle, the return value is zero conventionally.
    */
   avgDist( r: Rect, dx: number, dy?: number, excludeRect?: Rect ): number;
   avgDist( r: Rect, dx: number, dy: number, excludeRect: Rect ): void;
   /**
    * Builds a new quadtree structure for the specified list of objects.
    * objects
    * Array of objects that will be stored in this quadtree.
    * bucketCapacity
    * The maximum number of objects allowed in a leaf quadtree node. If specified and not undefined, must be ≥ 1. The default value is 40.
    * rect
    * If specified and not undefined, this is the prescribed rectangular search region. Otherwise the search region will be computed automatically.
    * If the tree already stores objects before calling this function, they are removed before building a new tree.
    * If the specified list of objects is empty, this method yields an empty quadtree.
    */
   build( objects?: any[], bucketCapacity?: number, rect?: Rect ): void;
   build( objects?: any[], bucketCapacity?: number, r?: Rect ): void;
   /**
    * Removes all stored object references, as well as the tree structure, yielding an empty quadtree.
    */
   clear(  ): void;
   clear(  ): void;
   /**
    * Counts the number of existing objects in this quadtree within a given rectangular region.
    * rect
    * The rectangular search region.
    * Returns the number of objects that intersect the specified search region.
    */
   count( rect: any ): number;
   count( rect: any ): void;
   /**
    * Returns the height of this quadtree, or the maximum distance in nodes from the root node to a leaf node.
    */
   height(  ): number;
   height(  ): void;
   /**
    * Inserts a reference to the specified object in this quadtree.
    */
   insert( object: object ): void;
   insert( object: object ): void;
   /**
    * Returns true iff this quadtree does not reference any objects.
    */
   isEmpty(  ): boolean;
   isEmpty(  ): void;
   /**
    * Returns true iff this object represents a valid quadtree structure. A valid quadtree has at least a non-null root node.
    */
   isTree(  ): boolean;
   isTree(  ): void;
   /**
    * Returns the leaf node intersecting the specified point, or null if no such leaf node exists in this quadtree.
    */
   leafNodeAt( p: Point ): QuadTreeNode | null;
   leafNodeAt( p: Point ): void;
   /**
    * Returns the minimum distance between the specified rectangle and the rectangles associated with all objects found at a prescribed maximum distance.
    * This function computes the minimum distance exclusively for all objects in this quadtree intersecting the search rectangle:
    * { x0: rect.x0 - dx, y0: rect.y0 - dy,
    * x1: rect.x1 + dx, y1: rect.y1 + dy }
    * If excludeRect is specified and not undefined, any object intersecting it will also be ignored.
    * If there are no objects intersecting the search rectangle, or if only one object intersects the search rectangle, the return value is zero conventionally.
    */
   minDist( r: Rect, dx: number, dy: number, excludeRect: Rect ): number;
   minDist( r: Rect, dx: number, dy: number, excludeRect: Rect ): void;
   /**
    * Returns the tree node (either leaf or structural) intersecting the specified point, or null if no such node exists in this quadtree.
    */
   nodeAt( p: Point ): QuadTreeNode | null;
   nodeAt( p: Point ): void;
   /**
    * Returns the total number of leaf nodes in this quadtree. A leaf node references one or more existing objects in this quadtree.
    */
   numberOfLeafNodes(  ): number;
   numberOfLeafNodes(  ): void;
   /**
    * Returns the total number of nodes in this quadtree, including all structural and leaf nodes.
    */
   numberOfNodes(  ): number;
   numberOfNodes(  ): void;
   /**
    * Regenerates the quadtree structure without null object references.
    * If no bucketCapacity and/or rect arguments are specified, the current tree bucket capacity and search rectangle will be used.
    * Calling this function is useful to optimize the quadtree after a significant amount of object deletions.
    */
   regenerate( bucketCapacity?: number, rect?: Rect ): void;
   regenerate( bucketCapacity?: number, r?: Rect ): void;
   /**
    * Removes all existing references to the specified object in this quadtree. Note that, for performance reasons, the element where this object was stored in the BRQuadTree.objects array is not removed, but assigned with a null value. Null elements are reused dynamically when new objects are inserted in the quadtree.
    */
   remove( object: object ): void;
   remove( object: object ): void;
   /**
    * Removes all objects whose associated rectangular regions include the specified point p.
    */
   removeAtPoint( p: Point ): void;
   removeAtPoint( p: Point ): void;
   /**
    * Removes all objects whose associated rectangular regions intersect the specified region r.
    */
   removeAtRect( r: Rect ): void;
   removeAtRect( r: Rect ): void;
   /**
    * Performs a rectangular range search in this quadtree.
    * rect
    * The rectangular search region.
    * Returns a (possibly empty) array with the indexes of all objects found in this tree within the specified search region.
    * Let A be the array returned by this function. Then the set of objects found within the specified rectangular region is given by:
    * this.objects[A[0]], this.objects[A[1]], ..., this.objects[A[A.length-1]]
    */
   search( r: Rect ): any[];
   search( r: Rect ): void;
   /**
    * Performs a rectangular range search in this quadtree, enumerating all objects found with a callback function.
    * rect
    * The rectangular search region.
    * callback
    * Callback function.
    * data
    * Callback data (optional, undefined by default).
    * The callback function prototype should be:
    * void callback( object, data )
    * The callback function will be called once for each object found in the tree within the specified search region.
    */
   searchWithCallback( r: Rect, callback?: Function, data?: object ): void;
   searchWithCallback( r: Rect, callback?: Function, data?: object ): void;
   /**
    * Performs a recursive tree traversal.
    * The specified function should be of the form:
    * void func( node )
    * The function will be called for each leaf node in this quadtree.
    */
   traverse( func: Function ): void;
   traverse( func: Function ): void;
}

declare class Bitmap {
   constructor(  );
   constructor( width: number, height?: number, pixelFormat?: number );
   constructor( filePath: string );
   constructor( xpmSource: string );
   constructor( data?: ByteArray, format?: string );
   constructor( Uint8Array?: any, format?: string );
   constructor( Uint32Array?: any, format?: string );
   constructor( src: Bitmap, srcRect: Rect );
   constructor( src: Bitmap, x0: number, y0: number, x1: number, y1: number );
   constructor( src: Bitmap );
   static fromSVGData( data?: ByteArray, width?: number, height?: number, pixelRatio?: number, flags?: number ): Bitmap;
   static fromSVGData( Uint8Array?: any, width?: number, height?: number, pixelRatio?: number, flags?: number ): Bitmap;
   static fromSVGFile( filePath: string, width: number, height?: number, pixelRatio?: number, flags?: number ): Bitmap;
   readonly bounds: Rect;
   readonly height: number;
   readonly isEmpty: boolean;
   readonly isPainting: boolean;
   physicalPixelRatio: number;
   pixelFormat: number;
   readonly width: number;
   and( x: number, y: number, src?: Bitmap, x0?: number, y0?: number, x1?: number, y1?: number ): Bitmap;
   and( pos: Point, src?: Bitmap, srcRect?: Rect ): Bitmap;
   and( src: Bitmap ): Bitmap;
   and( x0: number, y0: number, x1: number, y1: number, value: number ): Bitmap;
   and( rect: Rect, value: number ): Bitmap;
   and( value: number ): Bitmap;
   assign( src: Bitmap ): Bitmap;
   clear(  ): Bitmap;
   copy( x: number, y: number, src?: Bitmap, x0?: number, y0?: number, x1?: number, y1?: number ): Bitmap;
   copy( pos: Point, src?: Bitmap, srcRect?: Rect ): Bitmap;
   copy( src: Bitmap ): Bitmap;
   fill( x0: number, y0: number, x1: number, y1: number, value: number ): Bitmap;
   fill( rect: Rect, value: number ): Bitmap;
   fill( value: number ): Bitmap;
   invert( x0: number, y0: number, x1: number, y1: number ): Bitmap;
   invert( rect: Rect ): Bitmap;
   invert(  ): Bitmap;
   invertRect( x0: number, y0: number, x1: number, y1: number ): Bitmap;
   invertRect( rect: Rect ): Bitmap;
   invertRect(  ): Bitmap;
   load( filePath: string ): Bitmap;
   load( data?: ByteArray, format?: string ): Bitmap;
   load( Uint8Array?: any, format?: string ): Bitmap;
   load( Uint32Array?: any, format?: string ): Bitmap;
   mirrored(  ): Bitmap;
   mirroredHorizontally(  ): Bitmap;
   mirroredVertically(  ): Bitmap;
   onPixelDataInvalid( receiver: object, handler: Function ): void;
   or( x: number, y: number, src?: Bitmap, x0?: number, y0?: number, x1?: number, y1?: number ): Bitmap;
   or( pos: Point, src?: Bitmap, srcRect?: Rect ): Bitmap;
   or( src: Bitmap ): Bitmap;
   or( x0: number, y0: number, x1: number, y1: number, value: number ): Bitmap;
   or( rect: Rect, value: number ): Bitmap;
   or( value: number ): Bitmap;
   pixel( p: Point ): number;
   pixel( x: number, y: number ): number;
   pixelData(  ): ArrayBuffer | null;
   replaceColor( x0: number, y0: number, x1: number, y1: number, replaceThis: number, replaceWith: number ): Bitmap;
   replaceColor( rect: Rect, replaceThis: number, replaceWith: number ): Bitmap;
   replaceColor( replaceThis: number, replaceWith: number ): Bitmap;
   rotated( angle?: number, interpolation?: number ): Bitmap;
   save( filePath?: string, quality?: number ): Bitmap;
   scaled( scale: number ): Bitmap;
   scaled( scaleX: number, scaleY?: number, interpolation?: number ): Bitmap;
   scaledTo( size: number ): Bitmap;
   scaledTo( width: number, height?: number, interpolation?: number ): Bitmap;
   setAlpha( x0: number, y0: number, x1: number, y1: number, alpha: number ): Bitmap;
   setAlpha( rect: Rect, alpha: number ): Bitmap;
   setAlpha( alpha: number ): Bitmap;
   setAlpha( pos: Point, src?: Bitmap, srcRect?: Rect, invert?: boolean ): Bitmap;
   setAlpha( src?: Bitmap, srcRect?: Rect, invert?: boolean ): Bitmap;
   setPixel( p: Point, value: number ): Bitmap;
   setPixel( x: number, y: number, value: number ): Bitmap;
   setTransparency( x0: number, y0: number, x1: number, y1: number, transparency: number ): Bitmap;
   setTransparency( rect: Rect, transparency: number ): Bitmap;
   setTransparency( transparency: number ): Bitmap;
   subimage( rect: Rect ): Bitmap;
   subimage( x0: number, y0: number, x1: number, y1: number ): Bitmap;
   toImage( x0: number, y0: number, x1: number, y1?: number, alpha?: boolean ): Image;
   toImage( rect?: Rect, alpha?: boolean ): Image;
   toImage( alpha?: boolean ): Image;
   xor( x: number, y: number, src?: Bitmap, x0?: number, y0?: number, x1?: number, y1?: number ): Bitmap;
   xor( pos: Point, src?: Bitmap, srcRect?: Rect ): Bitmap;
   xor( src: Bitmap ): Bitmap;
   xor( x0: number, y0: number, x1: number, y1: number, value: number ): Bitmap;
   xor( rect: Rect, value: number ): Bitmap;
   xor( value: number ): Bitmap;
   xorRect( x0: number, y0: number, x1: number, y1: number, value: number ): Bitmap;
   xorRect( rect: Rect, value: number ): Bitmap;
   xorRect( value: number ): Bitmap;
}

declare class BitmapBox extends Control {
   constructor( parent?: Control );
   constructor( parent?: Control );
   bitmap: Bitmap;
   boxCanvasColor: number;
   readonly hasBitmap: boolean;
   clear(  ): void;
   clear(  ): void;
   saveBitmap( filePath: string ): void;
   saveBitmap( filePath: string ): void;
}

declare class BitmapIterator extends Array {
   static readonly BITS_PER_PIXEL: number;
   static readonly BYTES_PER_PIXEL: number;
   constructor( bmp: Bitmap );
   constructor( bmp: Bitmap );
   readonly buffer: ArrayBuffer;
   readonly data: Uint32Array;
   readonly height: number;
   readonly isEmpty: boolean;
   readonly isValid: boolean;
   readonly numberOfPixels: number;
   readonly width: number;
   free(  ): void;
   free(  ): void;
}

declare class Brush {
   constructor( color?: number, style?: number );
   constructor( texture: Bitmap );
   constructor( src: Brush );
   color: number;
   readonly isEmpty: boolean;
   readonly isSolid: boolean;
   readonly isTextured: boolean;
   style: number;
   texture: Bitmap;
   assign( src: Brush ): Brush;
}

declare class ByteArray {
   constructor(  );
   constructor( length?: number, value?: any );
   constructor( src?: ByteArray, startIndex?: number, count?: number );
   constructor( src?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number );
   constructor( src: string );
   static fromBase64( base64: string ): ByteArray;
   static fromByteValues( b0?: number, uintb1?: any, arg_?: any ): ByteArray;
   static fromHex( hex: string ): ByteArray;
   static fromURLEncoded( url: string ): ByteArray;
   static stringToLocal8Bit( str?: string, startIndex?: number, count?: number ): ByteArray;
   static stringToMBS( str?: string, startIndex?: number, count?: number ): ByteArray;
   static stringToUTF8( str?: string, startIndex?: number, count?: number ): ByteArray;
   readonly available: number;
   readonly capacity: number;
   readonly isEmpty: boolean;
   readonly length: number;
   readonly lowerBound: number;
   readonly upperBound: number;
   add( value?: number, count?: number ): ByteArray;
   add( s: string ): ByteArray;
   add( a: ByteArray ): ByteArray;
   assign( value?: number, length?: number ): ByteArray;
   assign( src: string ): ByteArray;
   assign( src: ByteArray ): ByteArray;
   at( index: number ): number;
   at( index: number, value: number ): ByteArray;
   binarySearch( value?: number, startIndex?: number, endIndex?: number ): number;
   clear(  ): ByteArray;
   fill( value: number ): ByteArray;
   grow( index?: number, count?: number ): ByteArray;
   hash( seed?: number, startIndex?: number, count?: number ): number;
   hash32( seed?: number, startIndex?: number, count?: number ): number;
   hash64( BigInt?: any, startIndex?: number, count?: number ): bigint;
   insert( index: number, value?: number, count?: number ): ByteArray;
   insert( index: number, s: string ): ByteArray;
   insert( index: number, a: ByteArray ): ByteArray;
   linearSearch( value?: number, startIndex?: number, endIndex?: number ): number;
   remove( index?: number, count?: number ): ByteArray;
   remove(  ): ByteArray;
   replace( startIndex: number, endIndex: number, value?: number, count?: number ): ByteArray;
   replace( startIndex: number, endIndex: number, a: ByteArray ): ByteArray;
   replace( startIndex: number, endIndex: number, s: string ): ByteArray;
   reserve( count: number ): ByteArray;
   reverse(  ): ByteArray;
   secureFill( value?: number ): ByteArray;
   sort(  ): ByteArray;
   squeeze(  ): ByteArray;
   swap( a: ByteArray ): ByteArray;
   toBase64( startIndex?: number, count?: number ): string;
   toFloat32Array( startIndex?: number, count?: number ): Float32Array;
   toFloat64Array( startIndex?: number, count?: number ): Float64Array;
   toHex( startIndex?: number, count?: number ): string;
   toInt16Array( startIndex?: number, count?: number ): Int16Array;
   toInt32Array( startIndex?: number, count?: number ): Int32Array;
   toInt64Array( startIndex?: number, count?: number ): BigInt64Array;
   toInt8Array( startIndex?: number, count?: number ): Int8Array;
   toString( startIndex?: number, count?: number ): string;
   toURLEncoded( startIndex?: number, count?: number ): string;
   toUint16Array( startIndex?: number, count?: number ): Uint16Array;
   toUint32Array( startIndex?: number, count?: number ): Uint32Array;
   toUint64Array( startIndex?: number, count?: number ): BigUint64Array;
   toUint8Array( startIndex?: number, count?: number ): Uint8Array;
   toUint8ClampedArray( startIndex?: number, count?: number ): Uint8ClampedArray;
   utf16ToString( startIndex?: number, count?: number ): string;
   utf8ToString( startIndex?: number, count?: number ): string;
}

/**
 * ChebyshevFit approximates a smooth, vector-valued function in a given interval by expansion with a set of truncated series of Chebyshev polynomials.[1] As is well known, the Chebyshev expansion:[2]
 * where belongs to , is the Chebyshev polynomial of the ith degree, and the 's are polynomial coefficients, is very close to the optimal approximating polynomial that minimizes the error , where varies over the fitting interval .
 * For functions converging strongly after a given series length , one can truncate the Chebyshev series to a smaller length to obtain an approximating polynomial with a maximum error close to .
 * In addition to Chebyshev expansion, truncation, and approximation, this class also implements generation of Chebyshev polynomials to approximate the first derivative and the indefinite integral of the fitted function.
 */
declare class ChebyshevFit {
   /**
    * Generates a new Chebyshev polynomial expansion for a given vector-valued function.
    * f
    * The fitted function. Must be of the form:
    * Vector f( Number x ),
    * where the returned Vector instance must have at least N components.
    * x1
    * The lower bound of the fitting interval.
    * x2
    * The upper bound of the fitting interval.
    * N
    * The function dimension, or the number of components in a function's vector value.
    * n
    * The number of polynomial coefficients in the Chebyshev expansion for each function component. Must be ≥ 2. The default value is 50.
    */
   constructor( f: Function, x1: number, x2: number, N?: number, n?: number );
   constructor( f: Function, x1: number, x2: number, N?: number, n?: number );
   constructor( f: Function, x1: number, x2?: number, n?: number );
   /**
    * This property provides a newly allocated duplicate of the internal array of Chebyshev polynomial coefficients. Each array element stores a Vector instance with the coefficient series for the corresponding function component.
    */
   readonly coefficients: any[];
   /**
    * True if this object contains a valid Chebyshev polynomial expansion.
    */
   readonly isValid: boolean;
   /**
    * The lower bound of the fitting interval. This is the smallest value of the independent variable for which the function has been fitted, and hence the smallest value for which this object can be legally evaluated for function approximation.
    */
   readonly lowerBound: number;
   /**
    * The total number of polynomial coefficients in the Chebyshev expansion. This is the sum of the lengths of the coefficient series for all function components.
    */
   readonly numberOfCoefficients: number;
   /**
    * The number of components in the dependent variable. This is the number of vector components in a fitted or approximated function value.
    */
   readonly numberOfComponents: number;
   /**
    * The total number of polynomial coefficients in the truncated Chebyshev expansion. This is the sum of the lengths of the truncated coefficient series for all function components.
    */
   readonly numberOfTruncatedCoefficients: number;
   /**
    * The upper bound of the fitting interval. This is the largest value of the independent variable for which the function has been fitted, and hence the largest value for which this object can be legally evaluated for function approximation.
    */
   readonly upperBound: number;
   /**
    * Generates and returns a new ChebyshevFit instance that approximates the first derivative of the fitted function.
    * The returned object can be used to evaluate the derivative within the fitting interval of this object, defined by the lowerBound and upperBound properties.
    * The returned object will always own Chebyshev polynomials with the length of the originally fitted series, not of the current truncated lengths, if the polynomial expansions have been truncated.
    */
   derivative(  ): ChebyshevFit;
   derivative(  ): void;
   derivative(  ): void;
   /**
    * Evaluates the truncated Chebyshev polynomial expansion for the specified value x of the independent variable, and returns the approximated function value.
    * The specified evaluation point x must lie within the fitting interval, given by the lowerBound and upperBound properties, which was specified as the x1 and x2 arguments when the function was initially fitted by the class constructor. For performance reasons, this precondition is not verified by this function. If an out-of-range evaluation point is specified, this function will return an unpredictable result.
    * If the polynomial series has been truncated by calling truncate(), this function evaluates the current truncated Chebyshev expansions instead of the original ones.
    */
   evaluate( x: number ): Vector;
   evaluate( x: number ): void;
   evaluate( x: number ): void;
   /**
    * Generates and returns a new ChebyshevFit instance that approximates the indefinite integral of the fitted function.
    * The returned object can be used to evaluate the integral within the fitting interval of this object, as defined by the lowerBound and upperBound properties. The constant of integration is set to a value such that the integral is zero at the lower fitting bound.
    * The returned object will always own Chebyshev polynomials with the length of the originally fitted series, not of the current truncated lengths, if the polynomial expansions have been truncated.
    */
   integral(  ): ChebyshevFit;
   integral(  ): void;
   integral(  ): void;
   /**
    * Returns true iff the Chebyshev polynomial expansion has been truncated for the specified i-th function component. If i < 0 is specified, returns true iff the polynomial expansion has been truncated for one or more function components.
    */
   isTruncated( i?: number ): boolean;
   isTruncated( i?: number ): void;
   /**
    * Returns the number of coefficients in the generated Chebyshev polynomial expansion for the specified zero-based vector component index i. This is the number of coefficients that was specified as the n argument of the class constructor.
    */
   length( i?: number ): number;
   length( i?: number ): void;
   /**
    * Attempts to truncate the Chebyshev polynomial expansion for the specified maximum error epsilon. Returns true iff the expansion could be truncated successfully for all vector components of the fitted function.
    * If is the length of a fitted polynomial series, this function finds a truncated length such that:
    * where is a polynomial coefficient and the zero-based subindex is in the interval .
    * The truncated Chebyshev expansion will approximate the fitted function component with a maximum error close to within the fitting interval.
    * The epsilon argument can be either a scalar or a vector. If a scalar is used, the same truncation error will be applied for all components of the dependent variable. If a vector is specified, the vector components will be applied as truncation errors for their respective function components.
    * The optional parameter mmin is the minimum allowed length of a coefficient series. The value of this parameter is 2 by default, which is the minimum possible number of Chebyshev coefficients in a valid series expansion. Specifying a value greater than 2 can be useful sometimes to impose stricter accuracy constraints on the truncated series.
    * This function does not remove any polynomial coefficients, so the original polynomial expansion remains intact. This means that the fitted polynomials can be truncated successively to achieve different error bounds, as required.
    * When the polynomial series cannot be truncated to achieve the required tolerance in all function components (that is, if either all coefficients for a given component are larger than in absolute value, or if ), this function forces for the components where the requested truncation is not feasible, yielding the original, untruncated Chebyshev polynomials for those components. In that case, this function returns false.
    */
   truncate( epsilon?: number | Vector, mmin?: number ): boolean;
   truncate( epsilon?: number | Vector, mmin?: number ): void;
   /**
    * Returns the number of coefficients in the truncated Chebyshev polynomial expansion for the specified zero-based vector component index i.
    * If i < 0, returns the largest number of polynomial coefficients among all vector components.
    */
   truncatedLength( i?: number ): number;
   truncatedLength( i?: number ): void;
   /**
    * Returns an estimate of the maximum error in the truncated Chebyshev polynomial expansion for the specified zero-based vector component index i.
    * If i < 0, returns the largest expansion error estimate among all vector components.
    */
   truncationError( i?: number ): number;
   truncationError( i?: number ): void;
}

declare class CheckBox extends Control {
   constructor( parent?: Control );
   checked: boolean;
   state: number;
   text: string;
   tristate: boolean;
   onCheck: ( checked: boolean ) => void;
   onClick: ( checked: boolean ) => void;
   onPress: (  ) => void;
   onRelease: (  ) => void;
}

declare class Cipher {
   constructor( algorithm: number, key: string );
   readonly algorithm: number;
   readonly algorithmName: string;
   readonly keyLength: number;
   decrypt( encrypted: ByteArray ): ByteArray;
   encrypt( data: string | ByteArray | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): ByteArray;
}

declare class Color {
   static readonly BLACK: number;
   static readonly BLUE: number;
   static readonly GRAY: number;
   static readonly GREEN: number;
   static readonly RED: number;
   static readonly TRANSPARENT: number;
   static readonly WHITE: number;
   constructor();
   static alpha( rgba: number ): number;
   static alpha( rgba: number ): void;
   static alphaF( rgba: number ): number;
   static alphaF( rgba: number ): void;
   static argbColorToHexString( argb: number ): string;
   static argbColorToHexString( argb: number ): void;
   static blue( rgba: number ): number;
   static blue( rgba: number ): void;
   static blueF( rgba: number ): number;
   static blueF( rgba: number ): void;
   static clearAlpha( rgba: number ): number;
   static clearAlpha( rgba: number ): void;
   static clearBlue( rgba: number ): number;
   static clearBlue( rgba: number ): void;
   static clearGreen( rgba: number ): number;
   static clearGreen( rgba: number ): void;
   static clearRed( rgba: number ): number;
   static clearRed( rgba: number ): void;
   static green( rgba: number ): number;
   static green( rgba: number ): void;
   static greenF( rgba: number ): number;
   static greenF( rgba: number ): void;
   static hsiSaturation( rgba: number ): number;
   static hsiSaturation( rgba: number ): void;
   static hsvSaturation( rgba: number ): number;
   static hsvSaturation( rgba: number ): void;
   static hue( rgba: number ): number;
   static hue( rgba: number ): void;
   static isGray( rgba: number ): boolean;
   static isGray( rgba: number ): void;
   static opaque( rgba: number ): number;
   static opaque( rgba: number ): void;
   static red( rgba: number ): number;
   static red( rgba: number ): void;
   static redF( rgba: number ): number;
   static redF( rgba: number ): void;
   static rgbColorToHexString( rgb: number ): string;
   static rgbColorToHexString( rgb: number ): void;
   static rgbaColor( r: number, g: number, b?: number, a?: number ): number;
   static rgbaColor( r: number, g: number, b?: number, a?: number ): void;
   static rgbaColorF( r: number, g: number, b?: number, a?: number ): number;
   static rgbaColorF( r: number, g: number, b?: number, a?: number ): void;
   static rgbaColorToHexString( rgba: number ): string;
   static rgbaColorToHexString( rgba: number ): void;
   static setAlpha( rgba: number, a: number ): number;
   static setAlpha( rgba: number, a: number ): void;
   static setBlue( rgba: number, b: number ): number;
   static setBlue( rgba: number, b: number ): void;
   static setGreen( rgba: number, g: number ): number;
   static setGreen( rgba: number, g: number ): void;
   static setRed( rgba: number, r: number ): number;
   static setRed( rgba: number, r: number ): void;
   static value( rgba: number ): number;
   static value( rgba: number ): void;
}

declare class ColorComboBox extends ComboBox {
   constructor( parent?: Control, webColors?: boolean );
   constructor( parent?: Control, webColors?: boolean );
   currentColor: number;
   colorForIndex( index: number ): number;
   colorForIndex( index: number ): void;
   /**
    * Deprecated: Use ColorComboBox.currentColor instead.
    */
   setCurrentColor( rgba: number ): void;
   setCurrentColor( rgba: number ): void;
   onColorSelected: ( color: number ) => void;
   onCurrentColorChanged: ( color: number ) => void;
}

declare class ComboBox extends Control {
   constructor( parent?: Control );
   autoCompletion: boolean;
   currentItem: number;
   editEnabled: boolean;
   editText: string;
   iconHeight: number;
   iconWidth: number;
   maxVisibleItemCount: number;
   minItemCharWidth: number;
   readonly numberOfItems: number;
   popupToolTip: string;
   addItem( text?: string, icon?: Bitmap | string | null ): ComboBox;
   clear(  ): ComboBox;
   clearEditText(  ): ComboBox;
   clearItemIcon( itemIndex: number ): ComboBox;
   clearItemText( itemIndex: number ): ComboBox;
   findItem( text?: string, fromIndex?: number, exactMatch?: boolean, caseSensitive?: boolean, useWildcards?: boolean ): number;
   hideList(  ): ComboBox;
   insertItem( index: number, text?: string, icon?: Bitmap | string | null ): ComboBox;
   itemIcon( itemIndex: number ): Bitmap;
   itemText( itemIndex: number ): string;
   removeItem( itemIndex: number ): ComboBox;
   setItemIcon( itemIndex: number, arg1: Bitmap | string | null ): ComboBox;
   setItemText( itemIndex: number, text: string ): ComboBox;
   showList(  ): ComboBox;
   onEditTextUpdated: ( text: string ) => void;
   onItemHighlighted: ( itemIndex: number ) => void;
   onItemSelected: ( itemIndex: number ) => void;
}

declare class Complex {
   constructor(  );
   constructor( re?: number, im?: number );
   constructor( src: Complex );
   constructor(  );
   constructor( re?: number, im?: number );
   constructor( src: Complex );
   static crossPowerSpectrum( a: any[], b: any[] ): any[];
   static crossPowerSpectrum( a: any[], b: any[] ): void;
   static fromPackedArray( packed: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): any[];
   static fromPackedArray( packed: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): void;
   static phaseCorrelation( a: any[], b: any[] ): any[];
   static phaseCorrelation( a: any[], b: any[] ): void;
   static polar( r: number, sinTheta: number, cosTheta: number ): Complex;
   static polar( r: number, thetaRadians: number ): Complex;
   static polar( r: number, sinTheta: number, cosTheta: number ): void;
   static polar( r: number, thetaRadians: number ): void;
   static toPackedFloat32Array( complex: any[] ): Float32Array;
   static toPackedFloat32Array( complex: any[] ): void;
   static toPackedFloat64Array( complex: any[] ): Float64Array;
   static toPackedFloat64Array( complex: any[] ): void;
   im: number;
   imag: number;
   imaginary: number;
   readonly isReal: boolean;
   re: number;
   real: number;
   abs(  ): number;
   abs(  ): void;
   add( c: Complex ): Complex;
   add( r: number ): Complex;
   add( c: Complex ): void;
   add( r: number ): void;
   arg(  ): number;
   arg(  ): void;
   assign( src: Complex ): Complex;
   assign( re?: number, im?: number ): Complex;
   assign( src: Complex ): void;
   assign( re?: number, im?: number ): void;
   conj(  ): Complex;
   conj(  ): void;
   cos(  ): Complex;
   cos(  ): void;
   cosh(  ): Complex;
   cosh(  ): void;
   div( c: Complex ): Complex;
   div( r: number ): Complex;
   div( c: Complex ): void;
   div( r: number ): void;
   exp(  ): Complex;
   exp(  ): void;
   isEqualTo( c: Complex ): boolean;
   isEqualTo( mag: number ): boolean;
   isEqualTo( re: number, im: number ): boolean;
   isEqualTo( c: Complex ): void;
   isEqualTo( mag: number ): void;
   isEqualTo( re: number, im: number ): void;
   isLessThan( c: Complex ): boolean;
   isLessThan( mag: number ): boolean;
   isLessThan( re: number, im: number ): boolean;
   isLessThan( c: Complex ): void;
   isLessThan( mag: number ): void;
   isLessThan( re: number, im: number ): void;
   ln(  ): Complex;
   ln(  ): void;
   log10(  ): Complex;
   log10(  ): void;
   mag(  ): number;
   mag(  ): void;
   mul( c: Complex ): Complex;
   mul( r: number ): Complex;
   mul( c: Complex ): void;
   mul( r: number ): void;
   norm(  ): number;
   norm(  ): void;
   pow( c: Complex ): Complex;
   pow( r: number ): Complex;
   pow( c: Complex ): void;
   pow( r: number ): void;
   setConj(  ): Complex;
   setConj(  ): void;
   setCos(  ): Complex;
   setCos(  ): void;
   setCosh(  ): Complex;
   setCosh(  ): void;
   setExp(  ): Complex;
   setExp(  ): void;
   setLn(  ): Complex;
   setLn(  ): void;
   setLog10(  ): Complex;
   setLog10(  ): void;
   setSin(  ): Complex;
   setSin(  ): void;
   setSinh(  ): Complex;
   setSinh(  ): void;
   setSqrt(  ): Complex;
   setSqrt(  ): void;
   setSymmetric(  ): Complex;
   setSymmetric(  ): void;
   setTan(  ): Complex;
   setTan(  ): void;
   setTanh(  ): Complex;
   setTanh(  ): void;
   sin(  ): Complex;
   sin(  ): void;
   sinh(  ): Complex;
   sinh(  ): void;
   sqrt(  ): Complex;
   sqrt(  ): void;
   sub( c: Complex ): Complex;
   sub( r: number ): Complex;
   sub( c: Complex ): void;
   sub( r: number ): void;
   symmetric(  ): Complex;
   symmetric(  ): void;
   tan(  ): Complex;
   tan(  ): void;
   tanh(  ): Complex;
   tanh(  ): void;
   toArray(  ): any[];
   toArray(  ): void;
   toString(  ): string;
   toString(  ): void;
   toVector(  ): Vector;
   toVector(  ): void;
}

declare class Compression {
   constructor( algorithm: number );
   readonly algorithm: number;
   readonly algorithmName: string;
   byteShuffling: boolean;
   checksums: boolean;
   compressionLevel: number;
   readonly defaultCompressionLevel: number;
   itemSize: number;
   readonly maxCompressionLevel: number;
   subblockSize: number;
   compress( data: string | ByteArray | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): any[];
   uncompress( subblocks: any[] ): ByteArray;
}

declare class ConicalGradientBrush extends Brush {
   constructor( center?: Point, angle?: number, stops?: any[] );
   readonly angle: number;
   readonly center: Point;
   readonly stops: any[];
}

/**
 * The PixInsight platform provides three user interfaces in the PixInsight core application: a graphical user interface, a scripting interface (the PixInsight JavaScript runtime), and a command-line interface. The Console class is a high-level abstraction that represents the Process Console window of the PixInsight core application, which implements most of the command-line and console text input/output functionality in PixInsight.
 * Console is a non-instantiable class; it provides only static properties and methods. A script can use the Console class to perform direct text output operations. The console is often used to display information about ongoing processes, write informative or error messages, and let the user abort a process, among other operations.
 * The console global property is a convenience proxy object that provides the entire functionality of the Console class. You can use the console object and the Console class interchangeably, but console is the most commonly used option in scripts. For example, writing a message to the console can be as simple as:
 * When you need to output formatted data, you can use the format() global method. This method is very similar to the standard printf() C runtime function:
 * PixInsight consoles can understand and reproduce the full set of ISO 8859-1 HTML entities. You see an example on the code fragment above: the &deg; entity prints a degree symbol on the console.
 * The PixInsight console can also interpret a number of tags, in a way similar to HTML, to perform special actions and formatting operations. For example:
 * In this example, the tag moves the cursor after the last character in the console, then the tag (or conditional break) generates a new line only if the current line is not empty. This ensures that subsequent text output will start on an empty line at the end of the current console contents. The and tags write text in a bold type face, and the and pair write text in italics. This is just a minimal fraction of the rich set of tags understood by the PixInsight console.
 * As we describe in detail below, The PixInsight console supports standard ANSI escape codes, and can also be used to render inline HTML contents.
 * It must be pointed out that the entire text output functionality of the Console class is also available in TextBox controls. A script can instantiate a TextBox control to provide rich text-based output as a process log, the output of an external process, or an information panel based on HTML tables, just to name a few possibilities implemented frequently.
 * Here is a comprehensive list of supported console tags at the time of publishing this documentation (April 2026, core version 1.9.4 Lockhart). New functionality implemented through console tags will be documented here as new versions are released.
 * Tag
 * Description
 * Enables/disables bold text.
 * Enables/disables italics text.
 * Enables/disables underlined text.
 * Enables/disables overlined text.
 * Enables/disables subscript text.
 * Enables/disables superscript text.
 * Line break. Can also be specified with the standard \n escape character.
 * Line break, XML compliant (same as ).
 * Conditional line break: sends a line break if the cursor is not at the beginning of an empty line.
 * Conditional line break, XML compliant (same as ).
 * Backspace: deletes the previous character and moves the cursor one step left, only if it is not at the beginning of a line. Can also be specified with the standard \b escape character.
 * Moves the cursor to the end of the console.
 * Moves the cursor to the beginning of the console.
 * Moves the cursor to the previous character, only if it is not at the beginning of a line.
 * Moves the cursor to the next character, only if it is not at the end of a line.
 * Moves the cursor to the end of the current line.
 * Moves the cursor to the beginning of the current line. Can also be specified with the standard \r escape character.
 * Moves the cursor to the previous line, if it is not already at the first line.
 * Moves the cursor to the next line, if it is not already at the last line.
 * Clears the console. Avoid issuing this tag arbitrarily; see the documentation for Console.clear() for more information.
 * Deletes the text from the current cursor position (included) to the end of the current line.
 * Deletes the text from the current cursor position (included) to the beginning of the current line.
 * Deletes the text from the current cursor position (included) to the end of the console.
 * Deletes the text from the current cursor position (included) to the beginning of the console. Avoid issuing this tag arbitrarily; see the documentation for Console.clear() for more information.
 * Disables/enables word wrapping of text lines.
 * Disables/enables tag interpretation, except the tag, which is always interpreted.
 * Disables/enables interpretation of ISO 8859-1 entities.
 * Disables/enables interpretation of tags, except the tag, and ISO 8859-1 entities. is equivalent to (but faster than) .
 * Equivalent to . Useful to show source code fragments.
 * Selects a platform-dependent, monospaced font.
 * Selects a platform-dependent, sans-serif font.
 * Selects a platform-dependent, serif font.
 * Selects the Courier font, or the nearest available monspaced font, depending on the platform.
 * Selects the Helvetica font, or the nearest available sans-serif font, depending on the platform.
 * Selects the Times font, or the nearest available serif font, depending on the platform.
 * Selects the default console font (usually a monospaced font; but user-selectable through preferences).
 * Resets all text settings and styles to default values.
 * If this console corresponds to the processing console window, shows it if it's currently hidden and docked in the PixInsight core application window; otherwise this tag is ignored. Equivalent to calling the Console.show() method.
 * If this console corresponds to the processing console window, hides it if it's currently visible and docked in the PixInsight core application window; otherwise this tag is ignored. Equivalent to calling the Console.hide() method.
 * Processes pending events and updates console contents. Equivalent to calling the CoreApplication.processEvents() method followed by an update of the Process Console window.
 * Causes any pending data to be written immediately to the console. If a log file or buffer is currently enabled, it is also updated by flushing all pending text output. Equivalent to calling the Console.flush() method.
 * Enables/disables HTML mode. In HTML mode, the console interprets and renders a comprehensive set of HTML 4 tags, including full support of tables, as well as a significant part of level 2 CSS (Cascading Style Sheets) directives. In HTML mode, PixInsight console tags are either ignored or interpreted with their corresponding meaning in HTML 4.
 * In addition, the \n, \r and \b escape characters can be used in place of the , and tags, respectively.
 * The PixInsight console fully recognizes and interprets the entire set of HTML 4 character entities, including all ISO 8859-1 characters and all character entities for symbols, mathematical symbols, Greek letters, markup-significant, and internationalization characters.
 * HTML entities are of the form:
 * & ;
 * where is either a numeric character reference[1] or a character entity reference.[2] [3]
 * For example, the following code uses HTML entities to write an angle represented as degrees, minutes, and seconds:
 * The expected console output is:
 * 42°20′44.41″
 * The tag allows you to put the PixInsight console in HTML mode. In this mode you can embed HTML 4 contents directly. For example, this script generates an HTML table with two rows and two columns:
 * The PixInsight console support most of the HTML 4 specification, including a large subset of CSS level 2. For detaled information, refer to the referenced Qt documentation.[4]
 * In HTML mode, that is, within a pair of tags, no PixInsight console tags or ANSI escape codes are recognized or interpreted.
 * The PixInsight console support a large set of ANSI CSI (Control Sequence Introducer) codes. See the referenced documents [5] [6] for a detailed description of ANSI escape codes.
 * The following table describes the supported CSI codes in current versions of PixInsight. ESC represents the escape control character, whose ASCII code is 2710 = 1B16. The CSI sequence is ESC followed by the left square bracket character, represented as the ESC[ sequence. See the examples given at the end of the table.
 * Description
 * ESC[ n A
 * Cursor up n Times (default n=1) (CUU)
 * ESC[ n B
 * Cursor down n Times (default n=1) (CUD)
 * ESC[ n C
 * Cursor forward n Times (default n=1) (CUF)
 * ESC[ n D
 * Cursor backward n Times (default n=1) (CUB)
 * ESC[ n E
 * Cursor to next line n Times (default n=1) (CNL)
 * ESC[ n F
 * Cursor to preceding line n Times (default n=1) (CPL)
 * ESC[ n G
 * Cursor to character absolute column n (default n=1) (CHA)
 * ESC[ n;m H
 * Cursor position to row n and column m (default n=m=1) (CUP)
 * ESC[ n;m f
 * Horizontal & Vertical Position (HVP). Same as H.
 * ESC[ n J
 * Erase in Display (ED):
 * n = 0
 * Erase below up to the end of text. This is the default if no n is specified.
 * n = 1
 * Erase above up to the start of text.
 * n = 2
 * Erase all (entire console).
 * ESC[ n K
 * Erase in Line (EL):
 * n = 0
 * Erase to right up to the end of line. This is the default if no n is specified.
 * n = 1
 * Erase to left up to the start of line.
 * n = 2
 * Erase the whole line.
 * ESC[ n L
 * Insert n line(s) (default n=1) (IL)
 * ESC[ n M
 * Delete n line(s) (default n=1) (DL)
 * ESC[ n P
 * Delete n character(s) (default n=1) (DCH)
 * ESC[ ... m
 * Set graphics rendition (SGR). The ellipsis represents a list of one or more integer arguments separated by semi-colons. The following arguments are recognized:
 * 0
 * Reset all font and color properties to default values.
 * 1
 * Bold font
 * 2
 * Faint (decreased intensity) - ignored (not implemented)
 * 3
 * Italic font
 * 4
 * Underline font
 * 5
 * Blink (slow) - reinterpreted - selects a bold font.
 * 6
 * Blink (fast) - reinterpreted - selects a bold font.
 * 7
 * Inverse colors (swap default foreground and background)
 * 8
 * Invisible - ignored (not implemented)
 * 9
 * Strike out font
 * 21
 * Bold font: disable
 * 22
 * Normal color - ignored (not implemented)
 * 23
 * Italic font: disable
 * 24
 * Underline font: disable
 * 25
 * Blink: disable - reinterpreted - disables bold font (same as 21).
 * 27
 * Inverse colors: disable
 * 28
 * Visible - ignored (not implemented)
 * 29
 * Strike out font: disable
 * Set foreground color to n-30: 0=black, 1=red, 2=green, 3=yellow, 4=blue, 5=magenta, 6=cyan, 7=white.
 * 38
 * KDE's Konsole extended 24-bit color space: Set foreground color (see note below).
 * 39
 * Default foreground color.
 * Set background color to n-40. Colors are the same as for 30 ... 37.
 * 48
 * KDE's Konsole extended 24-bit color space: Set background color (see note below).
 * 49
 * Default background color.
 * 53
 * Overline font
 * 55
 * Overline font: disable
 * ESC[s
 * Save Cursor Position (SCP)
 * ESC[u
 * Restore Cursor Position (RCP)
 * KDE Konsole 24-bit colors use the following format:
 * Select RGB foreground color: ESC[ ... 38;2;r;g;b ... m
 * Select RGB background color: ESC[ ... 48;2;r;g;b ... m
 * where r, g and b are the red, green and blue components in the range [0,255]. See the referenced document [7] for detailed information on these escape codes.
 */
declare class Console {
   /**
    * True iff the current task can be aborted by the user. By setting this property to true, the Pause/Abort push button will be enabled on the Process Console window.
    */
   static abortEnabled: boolean;
   /**
    * True iff the user has requested to abort execution of the current task.
    */
   static readonly abortRequested: boolean;
   /**
    * True iff a running task has been aborted as a result of a direct user request (e.g., by clicking the Pause/Abort button on the Process Console window, or by pressing the Escape key, and answering 'Yes' on the corresponding message box dialog).
    */
   static readonly isAborted: boolean;
   /**
    * True iff a running task has ended with an error condition.
    */
   static readonly isError: boolean;
   /**
    * True iff the running task has been suspended by the PixInsight core application.
    */
   static readonly isSuspended: boolean;
   /**
    * True iff the running task is currently in a wait state.
    */
   static readonly isWaiting: boolean;
   constructor();
   /**
    * Accepts a pending abort request.
    */
   static abort( dontAsk?: boolean ): void;
   /**
    * Starts a new console logging operation. All text written to the console will be automatically stored in a dedicated memory buffer, and each line will be tagged with the corresponding UTC date and time. The logged text will be available in the next call to Console.endLog().
    */
   static beginLog( filePath?: string ): void;
   /**
    * Clears the console. This is a convenience function that simply writes the tag to the console.
    * In general, call this function only in response to an explicit user request to clear the console. Arbitrarily clearing the console is considered bad practice for both scripts and modules.
    */
   static clear(  ): void;
   /**
    * Writes a critical error message to the console.
    * This function writes a Unicode string using standard ANSI terminal color number 1 (red in the default palette). The implementation of this method uses ANSI escape codes.
    * The string written is the (possibly empty) concatenation of the String transformations of all specified values. String transformations are generated by calling the standard toString() method for each value.
    * Returns the total number of characters effectively written to the console.
    */
   static critical( value1?: any, value2?: any, arg_?: any ): number;
   /**
    * Writes a critical error message to the console and appends a newline character ('\n').
    * See the description of Console.critical() for complete information.
    */
   static criticalln( value1?: any, value2?: any, arg_?: any ): number;
   /**
    * Writes a standardized deprecation warning to the console.
    * The generated text has the form:
    * has been deprecated; use instead.
    */
   static deprecated( deprecated: string, useInstead: string ): void;
   /**
    * Terminates an active console logging operation and returns all the logged text encoded in UTF-8 as a new ByteArray instance. See the Console.beginLog() method for complete information. If there is no active console logging operation, this function returns an empty ByteArray object.
    */
   static endLog(  ): ByteArray;
   /**
    * Causes any pending data to be written immediately to the console and forces an immediate repaint of the console's parent window and its contents. If a console logging operation is currently active, it will also be updated by flushing all pending text output to internal memory buffers.
    */
   static flush(  ): void;
   /**
    * Hides the Process Console window in the PixInsight core application.
    * If the animate parameter is true, a graphical animation effect will be applied if it is currently enabled via global preferences. If animate is false, the console window will be hidden immediately without any additional graphical effects.
    * The visibility of the core console window can only be controlled if it is owned by a docked window; the visibility of a floating, top-level window owned by the core application cannot be changed programmatically from a script or module.
    * See also Console.show().
    */
   static hide( animate?: boolean ): void;
   /**
    * Returns the contents of the current console logging buffer if a console logging operation is currently active after a call to Console.beginLog(), without canceling the logging operation. If no console logging operation has been initiated, this function returns an empty ByteArray object.
    * To ensure that up-to-date buffer contents are returned, call Console.flush() before calling this function.
    */
   static logText(  ): ByteArray;
   /**
    * Writes an informative note message to the console.
    * This function writes a Unicode string using standard ANSI terminal color number 2 (green in the default palette). The implementation of this method uses ANSI escape codes.
    * The string written is the (possibly empty) concatenation of the String transformations of all specified values. String transformations are generated by calling the standard toString() method for each value.
    * Returns the total number of characters effectively written to the console.
    */
   static note( value1?: any, value2?: any, arg_?: any ): number;
   /**
    * Writes an informative note message to the console and appends a newline character ('\n').
    * See the description of Console.note() for complete information.
    */
   static noteln( value1?: any, value2?: any, arg_?: any ): number;
   /**
    * Reads a single character from the console and returns it.
    * This function puts the current running task in wait state, then waits until a character can be obtained in the core application's main thread. This usually involves waiting for a keyboard event.
    * Note— This method has not been implemented in the current PJSR version. Calling it has not effect, and zero is always returned.
    */
   static readChar(  ): number;
   /**
    * Reads a string from the console and returns it.
    * This function puts the current running task in wait state, then opens a simple modal dialog box with a single-line edit control, where the user may enter a string. If the user cancels the input dialog, an empty string is returned.
    * Note— This method has not been implemented in the current PJSR version. Calling it has not effect, and an empty string is always returned.
    */
   static readString(  ): string;
   /**
    * Resets the console status.
    * This function is useful to ignore an abort request for the currently running task. For example, if the user requests to abort execution, a script or module may ask whether they really want to cancel. If the user answers 'No', this method can be called to clear the existing abort request condition.
    */
   static resetStatus(  ): void;
   /**
    * Shows the Process Console window in the PixInsight core application.
    * If the animate parameter is true, a graphical animation effect will be applied if it is currently enabled via global preferences. If animate is false, the console window will be shown immediately without any additional graphical effects.
    * The visibility of the core console window can only be controlled if it is owned by a docked window; the visibility of a floating, top-level window owned by the core application cannot be changed programmatically from a script or module.
    * See also Console.hide().
    */
   static show( animate?: boolean ): void;
   /**
    * Writes a warning message to the console.
    * This function writes a Unicode string using standard ANSI terminal color number 5 (magenta in the default palette). The implementation of this method uses ANSI escape codes.
    * The string written is the (possibly empty) concatenation of the String transformations of all specified values. String transformations are generated by calling the standard toString() method for each value.
    * Returns the total number of characters effectively written to the console.
    */
   static warning( value1?: any, value2?: any, arg_?: any ): number;
   /**
    * Writes a warning message to the console and appends a newline character ('\n').
    * See the description of Console.warning() for complete information.
    */
   static warningln( value1?: any, value2?: any, arg_?: any ): number;
   /**
    * Writes text to the console.
    * The string written is the (possibly empty) concatenation of the String transformations of all specified values. String transformations are generated by calling the standard toString() method for each value.
    * Returns the total number of characters effectively written to the console.
    */
   static write( value1?: any, value2?: any, arg_?: any ): number;
   /**
    * Writes text to the console and appends a newline character ('\n').
    * See the description of Console.write() for complete information.
    */
   static writeln( value1?: any, value2?: any, arg_?: any ): number;
}

declare class Control {
   constructor( parent?: Control );
   alternateCanvasColor: number;
   readonly availableScreenRect: Rect;
   backgroundColor: number;
   readonly boundsRect: Rect;
   buttonColor: number;
   buttonTextColor: number;
   canUpdate: boolean;
   canvasColor: number;
   childToFocus: Control;
   readonly childrenRect: Rect;
   clientRect: Rect;
   contextMenuEvents: boolean;
   cssId: string;
   cursor: Cursor;
   readonly dialog: Dialog;
   readonly displayPixelRatio: number;
   enabled: boolean;
   focusStyle: number;
   readonly focusedChild: Control;
   font: Font;
   foregroundColor: number;
   readonly frameRect: Rect;
   hasFocus: boolean;
   height: number;
   highlightColor: number;
   highlightedTextColor: number;
   readonly isActiveWindow: boolean;
   readonly isDialog: boolean;
   readonly isFixedHeight: boolean;
   readonly isFixedWidth: boolean;
   readonly isMaximized: boolean;
   readonly isMinimized: boolean;
   readonly isModal: boolean;
   readonly isUnderMouse: boolean;
   readonly isWindow: boolean;
   maxHeight: number;
   maxWidth: number;
   minHeight: number;
   minWidth: number;
   mouseTracking: boolean;
   nextSiblingToFocus: Control;
   objectId: string;
   parent: Control;
   position: Point;
   readonly resourcePixelRatio: number;
   scaledMaxHeight: number;
   scaledMaxWidth: number;
   scaledMinHeight: number;
   scaledMinWidth: number;
   readonly screenRect: Rect;
   sizer: Sizer;
   readonly smartMinHeight: number;
   readonly smartMinWidth: number;
   styleSheet: string;
   textColor: number;
   toolTip: string;
   visible: boolean;
   readonly visibleRect: Rect;
   width: number;
   readonly window: Control;
   windowOpacity: number;
   windowTitle: string;
   activateWindow(  ): Control;
   adjustToContents(  ): Control;
   bringToFront(  ): Control;
   childByPos( pos: Point ): Control | null;
   childByPos( x: number, y: number ): Control | null;
   controlToLocal( src: Control, pos: Point ): Point;
   controlToLocal( src: Control, x: number, y: number ): Point;
   ensureLayoutUpdated(  ): Control;
   globalToLocal( pos: Point ): Point;
   globalToLocal( x: number, y: number ): Point;
   hide(  ): Control;
   isAncestorOf( child: Control ): boolean;
   localToControl( dst: Control, pos: Point ): Point;
   localToControl( dst: Control, x: number, y: number ): Point;
   localToGlobal( pos: Point ): Point;
   localToGlobal( x: number, y: number ): Point;
   localToParent( pos: Point ): Point;
   localToParent( x: number, y: number ): Point;
   logicalPixelsToPhysical( px: number ): number;
   move( pos: Point ): Control;
   move( x: number, y: number ): Control;
   parentToLocal( pos: Point ): Point;
   parentToLocal( x: number, y: number ): Point;
   physicalPixelsToLogical( px: number ): number;
   render(  ): Bitmap;
   repaint(  ): Control;
   repaint( rect: Rect ): Control;
   repaint( x0: number, y0: number, x1: number, y1: number ): Control;
   resize( width: number, height: number ): Control;
   resize( rect: Rect ): Control;
   restyle(  ): Control;
   scaledResource( filePath: string ): string;
   scaledStyleSheet( cssCode?: string, fontDPI?: number ): string;
   scroll( delta: Point ): Control;
   scroll( dx: number, dy: number ): Control;
   scroll( delta: Point, rect: Rect ): Control;
   scroll( dx: number, dy: number, x0: number, y0: number, x1: number, y1: number ): Control;
   sendToBack(  ): Control;
   setCursorToParent(  ): Control;
   setFixedHeight( height?: number ): Control;
   setFixedSize(  ): Control;
   setFixedSize( width: number, height: number ): Control;
   setFixedSize( rect: Rect ): Control;
   setFixedWidth( width?: number ): Control;
   setMaxHeight( height?: number ): Control;
   setMaxSize(  ): Control;
   setMaxSize( width: number, height: number ): Control;
   setMaxSize( rect: Rect ): Control;
   setMaxWidth( width?: number ): Control;
   setMinHeight( height?: number ): Control;
   setMinSize(  ): Control;
   setMinSize( width: number, height: number ): Control;
   setMinSize( rect: Rect ): Control;
   setMinWidth( width?: number ): Control;
   setScaledFixedHeight( height: number ): Control;
   setScaledFixedSize( width: number, height: number ): Control;
   setScaledFixedSize( rect: Rect ): Control;
   setScaledFixedWidth( width: number ): Control;
   setScaledMaxHeight( height: number ): Control;
   setScaledMaxSize( width: number, height: number ): Control;
   setScaledMaxSize( rect: Rect ): Control;
   setScaledMaxWidth( width: number ): Control;
   setScaledMinHeight( height: number ): Control;
   setScaledMinSize( width: number, height: number ): Control;
   setScaledMinSize( rect: Rect ): Control;
   setScaledMinWidth( width: number ): Control;
   setVariableHeight(  ): Control;
   setVariableSize(  ): Control;
   setVariableWidth(  ): Control;
   show(  ): Control;
   stackUnder( dst: Control ): Control;
   update(  ): Control;
   update( rect: Rect ): Control;
   update( p0: Point, p1: Point ): Control;
   update( x0: number, y0: number, x1: number, y1: number ): Control;
   onChildCreate: ( child: Control ) => void;
   onChildDestroy: ( child: Control ) => void;
   onClose: (  ) => boolean;
   onContextMenu: ( globalX: number, globalY: number, localX: number, localY: number ) => boolean;
   onDestroy: (  ) => void;
   onEnter: (  ) => boolean;
   onGetFocus: (  ) => boolean;
   onHide: (  ) => boolean;
   onKeyPress: ( key: number, modifiers: number ) => boolean;
   onKeyRelease: ( key: number, modifiers: number ) => boolean;
   onLeave: (  ) => boolean;
   onLoseFocus: (  ) => boolean;
   onMouseDoubleClick: ( x: number, y: number, buttons: number, modifiers: number ) => boolean;
   onMouseMove: ( x: number, y: number, buttons: number, modifiers: number ) => boolean;
   onMousePress: ( x: number, y: number, button: number, buttons: number, modifiers: number ) => boolean;
   onMouseRelease: ( x: number, y: number, button: number, buttons: number, modifiers: number ) => boolean;
   onMouseWheel: ( x: number, y: number, dy: number, buttons: number, modifiers: number ) => boolean;
   onMove: ( x: number, y: number, oldX: number, oldY: number ) => boolean;
   onPaint: ( x0: number, y0: number, x1: number, y1: number ) => boolean;
   onResize: ( width: number, height: number, oldWidth: number, oldHeight: number ) => boolean;
   onShow: (  ) => boolean;
}

declare class CoreApplication {
   static readonly acceleratedWebView: boolean;
   static readonly agentName: string;
   static readonly appDirPath: string;
   static readonly baseDirPath: string;
   static readonly binDirPath: string;
   static readonly caBundleFilePath: string;
   static readonly colorDirPath: string;
   static readonly configDirPath: string;
   static readonly dirPath: string;
   static readonly docDirPath: string;
   static readonly etcDirPath: string;
   static readonly filePath: string;
   static readonly hasPendingMessages: boolean;
   static readonly includeDirPath: string;
   static readonly instance: number;
   static readonly language: string;
   static readonly libDirPath: string;
   static readonly libraryDirPath: string;
   static readonly numberOfPendingMessages: number;
   static readonly pclVersion: string;
   static readonly pclVersionBeta: number;
   static readonly pclVersionBuild: number;
   static readonly pclVersionMajor: number;
   static readonly pclVersionMinor: number;
   static readonly pclVersionRelease: number;
   static readonly pid: string;
   static readonly platform: string;
   static readonly programName: string;
   static readonly rscDirPath: string;
   static readonly srcDirPath: string;
   static readonly startTime: Date;
   static readonly versionBeta: number;
   static readonly versionBuild: number;
   static readonly versionCodename: string;
   static readonly versionLE: boolean;
   static readonly versionMajor: number;
   static readonly versionMinor: number;
   static readonly versionRelease: number;
   static readonly versionRevision: number;
   constructor();
   static activateInstance( instance: number ): void;
   static clearPendingMessages(  ): void;
   static continueAutoSaveTasks(  ): void;
   static ensureMinimumVersion( major?: number, minor?: number, release?: number, revision?: number, build?: number, _throw?: boolean ): boolean;
   static firstInstanceAlive(  ): number;
   static instancePID( instance: number ): string;
   static isInstanceAlive( instance: number ): boolean;
   static isInstanceRunning( instance: number ): boolean;
   static launchInstance( instance?: number ): void;
   static loadResource( filePath?: string, rootPath?: string ): boolean;
   static otherInstancesRunning(  ): boolean;
   static pauseAutoSaveTasks(  ): void;
   static processEvents( excludeUserInputEvents?: boolean, iterations?: number ): void;
   static processPendingMessages( milliseconds?: number ): void;
   static sendMessage( instance: number, message?: string, uniqueId?: string ): boolean;
   static terminateInstance( instance: number ): void;
   static unloadResource( filePath?: string, rootPath?: string ): boolean;
}

declare class CryptographicHash {
   static readonly MD5: number;
   static readonly SHA1: number;
   static readonly SHA224: number;
   static readonly SHA256: number;
   static readonly SHA384: number;
   static readonly SHA512: number;
   constructor( algorithm: number );
   readonly algorithm: number;
   readonly algorithmName: string;
   readonly hashLength: number;
   finalize(  ): ByteArray;
   hash( data: string | ByteArray | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): ByteArray;
   initialize(  ): void;
   update( data: string | ByteArray | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): void;
}

declare class Cursor {
   constructor( stdCursor?: number );
   constructor( cursor?: Bitmap | string, hotSpot?: Point );
   constructor( cursor?: Bitmap | string, xHotSpot?: number, yHotSpot?: number );
   constructor( Cursor: any );
   readonly bitmap: Bitmap;
   readonly hotSpot: Point;
   readonly hotX: number;
   readonly hotY: number;
   assign( Cursor: any ): Cursor;
}

declare class DateTimeEditor extends Control {
   constructor( parent?: Control, jd?: number, labelWidth?: number, spinBoxWidth?: number, withTimeControls?: boolean, timeBoxWidth?: number );
   JD: number;
   dateTime: Date;
   dateTimeToolTip: string;
   onDateTimeChanged: ( dateTime: Date ) => void;
   onJDChanged: ( jd: number ) => void;
}

declare class Dialog extends Control {
   constructor( parent?: Control );
   static browseScriptDocumentation( scriptName?: string, title?: string, width?: number, height?: number ): boolean;
   static openBrowser( url?: string, title?: string, width?: number, height?: number ): number;
   result: number;
   userResizable: boolean;
   cancel(  ): void;
   done( exitCode: number ): void;
   execute(  ): number;
   newInstance(  ): void;
   ok(  ): void;
   open(  ): void;
   onExecute: (  ) => void;
   onReturn: ( retVal: number ) => void;
}

declare class Edit extends Control {
   constructor( parent?: Control );
   caretPosition: number;
   readonly hasSelection: boolean;
   readonly isValid: boolean;
   maxLength: number;
   modified: boolean;
   passwordMode: boolean;
   readOnly: boolean;
   rightAlignment: boolean;
   readonly selectedText: string;
   selectionEnd: number;
   selectionStart: number;
   text: string;
   readonly utf8: ByteArray;
   validatingRegExp: string;
   clear(  ): Edit;
   end(  ): Edit;
   home(  ): Edit;
   selectAll(  ): Edit;
   unselect(  ): Edit;
   onCaretPositionUpdated: ( oldPos: number, newPos: number ) => void;
   onEditCompleted: (  ) => void;
   onReturnPressed: (  ) => void;
   onSelectionUpdated: ( selStart: number, selEnd: number ) => void;
   onTextUpdated: ( text: string ) => void;
}

/**
 * ElapsedTime is a platform-independent, monotonically nondecreasing high-resolution time stamp based on hardware time resources that are independent on any external time reference. The underlying implementation uses monotonic clock services on Linux and FreeBSD (via clock_gettime() system calls), performance counters on Windows, and Mach absolute time system services on macOS.
 * Example of use:
 * Timing resolution should be better than one microsecond on all platforms, but the actual resolution achieved is hardware and system dependent.
 */
declare class ElapsedTime {
   /**
    * The conversion factor from time stamp units (or ticks) to seconds.
    * The value of this static property is system-dependent. It can also be machine-dependent on macOS and Windows. On Linux and FreeBSD, this function always returns 1.0e-09, since time stamps are expressed in nanoseconds.
    */
   static readonly ticksToSeconds: number;
   /**
    * Constructs a new ElapsedTime object. If no src object is specified, initializes this object with the current system time, which will be the starting point of subsequent time interval evaluations. If a valid src object is specified, its current state will be duplicated in the newly constructed object.
    */
   constructor( ElapsedTime?: any );
   /**
    * Returns a 64-bit, monotonically nondecreasing time stamp.
    * The returned value is the time elapsed in system-dependent units (also known as ticks) since an arbitrary starting time that will remain invariant during the current execution of the caller script.
    * On Linux and FreeBSD, this function returns the number of nanoseconds elapsed since the starting time. On other platforms, time stamp units are unspecified and possibly machine-dependent.
    * With the current implementation, the accuracy of timestamps should be better than one microsecond on all supported platforms.
    */
   static timeStamp(  ): bigint;
   /**
    * Returns a string representation of the specified time interval t in seconds.
    * The returned string has one of the following formats:
    * Table 1
    * (1) u.uuu us
    * u.uuu is the time t in microseconds if t 0 and t ≤ 60, the integer part of the represented microseconds, milliseconds or seconds will be right-padded in a field of width space characters.
    * The precision argument specifies the maximum number of decimal digits represented, and must be in the [0,3] range. Depending on the magnitude of the specified t argument, the precision will be reduced by one or two units automatically, with a minimum of zero digits. The default precision is 3 digits.
    * The output format is chosen automatically to generate the most significant representation. If the specified interval is negative (toward the past), a minus sign is prepended to the returned string.
    */
   static toString( t?: number, width?: number, precision?: number ): string;
   /**
    * Provides a string representation of the time interval elapsed since the last object initialization. See ElapsedTime.value and ElapsedTime.toString() for detailed information.
    */
   readonly text: string;
   /**
    * The time interval elapsed since the last object initialization, expressed in seconds. An ElapsedTime object is initialized either when it is constructed, or through a subsequent call to the reset() method.
    */
   readonly value: number;
   /**
    * Initializes this ElapsedTime object with a new time stamp, which will be the starting point of subsequent time interval evaluations.
    */
   reset(  ): void;
   /**
    * Returns the time interval in seconds elapsed between the starting points of this object and the specified object t. The result is positive if t precedes this object, negative if this object precedes t, zero if and only if either t and this object are references to the same instance, or if one of the objects has been constructed as a copy of the other.
    */
   since( ElapsedTime: any ): number;
}

/**
 * This class implements ephemerides of solar system bodies computed from data stored in XEPH (Extensible Ephemeris Data format) files.
 * On the PixInsight/PCL platform, the XEPH file format allows for efficient ephemeris calculations through Chebyshev polynomial expansions stored as raw binary data. An XEPH file stores multiple arrays of Chebyshev coefficient series accessible by means of fast indexed file search algorithms and structures, along with auxiliary data and metadata required for ephemeris calculations.
 * Calculation of state vectors (such as position and velocity vectors) for specific objects is performed through a dedicated client subclass, namely EphemerisHandle. This class implements transparent file seek and read operations, as well as fast, lock-free multithreaded evaluation of Chebyshev polynomials.
 * XEPH ephemeris files allow for calculation of rectangular coordinates referred to the axes of the International Celestial Reference System (ICRS/J2000.0). Positions are given in au and velocities in au/day for all solar system objects, except planetocentric coordinates of natural satellites, including the geocentric Moon, for which positions and velocities are given in kilometers and km/day, respectively. Angles (nutations and librations) are given in radians, and time differences (such as TT-TDB) in seconds.
 * An XEPH file storing up-to-date JPL DE/LE ephemeris data is part of all standard PixInsight distributions since 1.8.5 versions released Fall 2018. As of writing this documentation (February 2026), the standard XEPH file provides the complete JPL DE440 planetary and lunar ephemerides. See the EphemerisFile.fundamentalEphemerides static property for detailed information.
 */
declare class EphemerisFile {
   /**
    * A reference to the global asteroid ephemerides file currently defined by the running PixInsight platform.
    * Under normal working conditions, the referenced object provides ephemeris data for a set of asteroids with relevant masses. In a standard asteroid ephemeris file, object identifiers are asteroid numbers and object names are asteroid designations; for example:
    * Identifier
    * Name
    * 1
    * Ceres
    * 2
    * Pallas
    * 3
    * Juno
    * 4
    * Vesta
    * 5
    * Astraea
    * ...
    * ...
    * 702
    * Alauda
    * 703
    * Noemi
    * 704
    * Interamnia
    * ...
    * ...
    * Asteroid ephemeris data are provided relative to the solar system barycenter ("SSB" identifier), with position and velocity coordinates coherent with global fundamental ephemerides.
    * As of writing this documentation, the standard asteroid ephemeris file provides the complete set of 343 asteroids used for the numerical integration of JPL DE440 and DE441 ephemerides.
    */
   static readonly asteroidEphemerides: EphemerisFile;
   /**
    * The full, absolute file path of the global asteroid ephemerides file.
    */
   static readonly asteroidEphemeridesFilePath: string;
   /**
    * The path to the global database file of CIP positions referred to the ITRS.
    * The position of the Celestial Intermediate Pole (CIP) in the International Terrestrial Reference System (ITRS) is necessary to compute polar motion corrections applied to topocentric coordinates of solar system bodies. These corrections are relevant for the topocentric position of the Moon at the milliarcsecond level.
    * In current versions of PixInsight the CIP_ITRS database is a plain text file generated with values provided by the IERS Rapid Service/Prediction Center. As of writing this documentation (February 2026), the main online reference is:
    * https://datacenter.iers.org/data/latestVersion/186_EOP_C01_2000.1846_NOW_V2013_01186.txt
    */
   static readonly cipITRSDataFilePath: string;
   /**
    * The full, absolute file path of the global Delta AT database file. Delta AT is the difference TAI-UTC in seconds.
    */
   static readonly deltaATDataFilePath: string;
   /**
    * The path to the global database file of observed Delta T values.
    * Delta T is the difference TT-UT1 in seconds. In current versions of PixInsight the Delta T database is a plain text file generated with values taken from the following online references:
    * For the period 1657-1956.0:
    * http://maia.usno.navy.mil/ser7/historic_deltat.data (now unavailable)
    * For the period 1956 Jan 19 to the date of release:
    * https://datacenter.iers.org/data/latestVersion/186_EOP_C01_2000.1846_NOW_V2013_01186.txt
    * The Delta T database usually includes a few extrapolated values covering a short period after the date of release. These extrapolated values must always be taken only as approximations; actual Delta T values are unpredictable and can only be known through observations.
    * Delta T data files are expected to follow a simple format where each text line provides a TT/DeltaT pair. The exact format is described at the top of the corresponding file included in the current PixInsight distribution.
    * Outside of the period from 1657 to the last time point included in the Delta T database, the current PixInsight/PCL implementation uses the polynomial expressions published by Fred Espenak and Jean Meeus. [3]
    */
   static readonly deltaTDataFilePath: string;
   /**
    * A reference to the global fundamental ephemerides file currently defined by the running PixInsight platform.
    * Under normal working conditions, the referenced object provides ephemeris data for at least the following objects:
    * Identifier
    * Name
    * Me
    * Mercury
    * Ve
    * Venus
    * EMB
    * Earth-Moon barycenter
    * Ma
    * Mars' barycenter
    * Ju
    * Jupiter's barycenter
    * Sa
    * Saturn's barycenter
    * Ur
    * Uranus' barycenter
    * Ne
    * Neptune's barycenter
    * Pl
    * Pluto's barycenter
    * Mn
    * Moon's geometric center with respect to Earth's center.
    * Sn
    * Sun's geometric center
    * Ea
    * Earth's geometric center
    * With the only exception of the Moon ("Mn" identifier), ephemeris data for all of the objects above are provided relative to the solar system barycenter ("SSB" identifier).
    * Additional items may also be available, depending on specific file versions and compilations:
    * Identifier
    * Name
    * Lbr
    * Lunar librations (Euler angles) in radians
    * Nut
    * Nutation angles in radians
    * TT_TDB
    * TT-TDB difference at the geocenter in seconds.
    * As of writing this documentation (February 2026), the standard fundamental ephemeris file provides the complete JPL DE440 planetary and lunar ephemerides, but nutations, librations and time differences are not included.
    */
   static readonly fundamentalEphemerides: EphemerisFile;
   /**
    * The full, absolute file path of the global fundamental ephemerides file.
    */
   static readonly fundamentalEphemeridesFilePath: string;
   /**
    * A reference to the global Kuiper belt objects (KBOs) ephemerides file currently defined by the running PixInsight platform.
    * As of writing this documentation (February 2026), the default KBO ephemerides file includes the set of 30 most massive known trans-Neptunian objects used in JPL's DE440 numerical integration:
    * Identifier
    * Name
    * 19521
    * Chaos
    * 20000
    * Varuna
    * 28978
    * Ixion
    * 42301
    * 2001 UR163
    * 50000
    * Quaoar
    * 55565
    * 2002 AW197
    * 55637
    * 2002 UX25
    * 84522
    * 2002 TC302
    * 90377
    * Sedna
    * 90482
    * Orcus
    * 90568
    * 2004 GV9
    * 120347
    * Salacia
    * 136108
    * Haumea
    * 136199
    * Eris
    * 136472
    * Makemake
    * 145452
    * 2005 RN43
    * 174567
    * Varda
    * 208996
    * 2003 AZ84
    * 225088
    * Gonggong
    * 230965
    * 2004 XA192
    * 278361
    * 2007 JJ43
    * 307261
    * 2002 MS4
    * 455502
    * 2003 UZ413
    * 523639
    * 2010 RE64
    * 528381
    * 2008 ST291
    * 2004 XR190
    * 2006 QH181
    * 2010 FX86
    * 2010 KZ39
    * 2010 RF43
    * KBO ephemeris data are provided relative to the solar system barycenter ("SSB" identifier), with position and velocity coordinates coherent with global fundamental ephemerides. These ephemerides have been generated by numerical integration with starting state vectors provided by official NASA/JPL asteroid databases.
    */
   static readonly kboEphemerides: EphemerisFile;
   /**
    * The full, absolute file path of the global Kuiper belt objects (KBOs) ephemerides file.
    */
   static readonly kboEphemeridesFilePath: string;
   /**
    * A reference to the global nutation model ephemeris file currently defined by the running PixInsight platform.
    * Under normal running conditions, the referenced object provides Chebyshev polynomial expansions for the current IAU nutation model. As of writing this documentation, the standard nutation model file provides the IAU 2006/2000AR nutation model[4] (MHB2000 luni-solar and planetary nutation with adjustments to match the IAU 2006 precession).[5]
    * The referenced object should provide at least one object with the "IAUNut" identifier, which can be used to approximate the implemented nutation theory with a child EphemerisFile::Handle object.
    */
   static readonly nutationModel: EphemerisFile;
   /**
    * The full, absolute file path of the global nutation model ephemeris file.
    */
   static readonly nutationModelFilePath: string;
   /**
    * A reference to the global short-term asteroid ephemerides file currently defined by the running PixInsight platform.
    * See the EphemerisFile.asteroidEphemerides static property for information on asteroid ephemerides and their status in current versions of PixInsight.
    * Under normal working conditions, the referenced object should be a shortened version (that is, covering a shorter time span) of the standard asteroid ephemerides file. As of writing this documentation, the standard short-term asteroid ephemeris file covers the period from 1950 January 1.0 to 2100 January 32.0.
    */
   static readonly shortTermAsteroidEphemerides: EphemerisFile;
   /**
    * The full, absolute file path of the global short-term asteroid ephemerides file.
    */
   static readonly shortTermAsteroidEphemeridesFilePath: string;
   /**
    * A reference to the global short-term fundamental ephemerides file currently defined by the running PixInsight platform.
    * See the EphemerisFile.fundamentalEphemerides static property for information on fundamental ephemerides and their status in current versions of PixInsight.
    * Under normal running conditions, the referenced object should be a shortened version (that is, covering a shorter time span) of the standard fundamental ephemerides file. As of writing this documentation (February 2026), the standard short-term fundamental ephemeris file provides DE440 ephemerides for the period from 1850 January 1.0 to 2150 December 32.0.
    */
   static readonly shortTermFundamentalEphemerides: EphemerisFile;
   /**
    * The full, absolute file path of the global short-term fundamental ephemerides file.
    */
   static readonly shortTermFundamentalEphemeridesFilePath: string;
   /**
    * A reference to the global short-term Kuiper belt objects (KBOs) ephemerides file currently defined by the running PixInsight platform.
    * See the KBOEphemerides() static member function for information on asteroid ephemerides and their status in current versions of PixInsight.
    * Under normal working conditions, the referenced object should be a shortened version (that is, covering a shorter time span) of the standard KBO ephemerides file. As of writing this documentation, the standard short-term asteroid ephemeris file covers the period from 1950 January 1.0 to 2100 January 32.0.
    */
   static readonly shortTermKBOEphemerides: EphemerisFile;
   /**
    * The full, absolute file path of the global short-term Kuiper belt objects (KBOs) ephemerides file.
    */
   static readonly shortTermKBOEphemeridesFilePath: string;
   /**
    * A reference to the global short-term nutation model ephemeris file currently defined by the running PixInsight platform.
    * See the NutationModel() static member function for information on nutation model ephemerides and their status in current versions of PixInsight.
    * Under normal working conditions, the referenced object should be a shortened version (that is, covering a shorter time span) of the standard nutation model ephemerides file. As of writing this documentation, the standard short-term nutation model file provides the IAU 2006/2000A_R nutation model for the period from 1850 January 1.0 to 2150 December 32.0.
    * The returned object should provide at least one object with the "IAUNut" identifier, which can be used to approximate the implemented nutation theory with a child EphemerisHandle object.
    */
   static readonly shortTermNutationModel: EphemerisFile;
   /**
    * The full, absolute file path of the global short-term nutation model ephemeris file.
    */
   static readonly shortTermNutationModelFilePath: string;
   /**
    * Constructs a new EphemerisFile object. If a filePath argument is specified, the new object will be initialized from the specified ephemeris data file in XEPH format.
    * In the event of errors or invalid data, this constructor will throw the appropriate Error exception.
    */
   constructor( filePath?: string );
   /**
    * Returns the value of Delta AT, or the difference TAI-UTC, corresponding to the specified time point t, which is assumed to represent an instant in the UTC timescale.
    * If possible, this function returns an interpolated value from the global Delta AT database, which will be loaded and parsed upon the first call to this function as a thread-safe procedure. See EphemerisFile.deltaATDataFilePath for more information.
    * UTC does not exist before 1960, so calling this function for a date before that year is a conceptual error. For convenience, zero is returned in such case instead of throwing an exception.
    * The returned value is the difference TAI-UTC in seconds.
    */
   static deltaAT( t: Date ): number;
   /**
    * Returns the value of Delta AT, or the difference TAI-UTC, corresponding to the specified time point in ISO 8601 format, which is assumed to represent an instant in the UTC timescale. See EphemerisFile.deltaAT( Date ) for more information.
    */
   static deltaAT( isoDateTime: string ): number;
   /**
    * Returns the value of Delta AT, or the difference TAI-UTC, corresponding to the specified time point expressed as the sum of two Julian dates, which is assumed to represent an instant in the UTC timescale. See EphemerisFile.deltaAT( Date ) for more information.
    */
   static deltaAT( jd1?: number, jd2?: number ): number;
   /**
    * Returns the value of Delta T, or the difference TT-UT1, corresponding to the specified time point t.
    * If possible, this method returns an interpolated value from the global Delta T database, which will be loaded and parsed upon the first call to this function as a thread-safe procedure. See EphemerisFile.deltaTDataFilePath for more information.
    * Otherwise, if the specified time point falls outside the Delta T database time span, this function will return the value for the closest time point available in the global Delta T database.
    * The returned value is the difference TT-UT1 in seconds.
    */
   static deltaT( t: Date ): number;
   /**
    * Returns the value of Delta T, or the difference TT-UT1, corresponding to the specified time point in ISO 8601 format. See EphemerisFile.deltaT( Date ) for more information.
    */
   static deltaT( isoDateTime: string ): number;
   /**
    * Returns the value of Delta T, or the difference TT-UT1, corresponding to the specified time point expressed as the sum of two Julian dates. See EphemerisFile.deltaT( Date ) for more information.
    */
   static deltaT( jd1?: number, jd2?: number ): number;
   /**
    * The names of one or more persons or groups that have created the data in this XEPH file.
    */
   readonly authors: string;
   /**
    * A brief (single-line) description of this XEPH file.
    */
   readonly briefDescription: string;
   /**
    * The constants stored in the ephemeris data file represented by this object. These constants are name/value pairs, where keys are strings and values are double precision floating point numbers.
    * Typically, for XEPH files that store fundamental JPL DE/LE ephemerides, this property gives the list of constants used by the corresponding DE/LE numerical integration.
    * The provided array is sorted by constant name in ascending order.
    */
   readonly constants: any[];
   /**
    * Copyright information applicable to the data stored in this XEPH file.
    */
   readonly copyright: string;
   /**
    * The date this file was created.
    */
   readonly creationTime: Date;
   /**
    * The software application or program that created this XEPH file.
    */
   readonly creatorApplication: string;
   /**
    * The operating system on which this XEPH file was created.
    */
   readonly creatorOS: string;
   /**
    * A full description of the data stored in this XEPH file.
    */
   readonly description: string;
   /**
    * Ending point of the time span covered by this ephemeris, or the latest time point for which ephemerides can be calculated using this object.
    */
   readonly endTime: Date;
   /**
    * The path of the ephemeris file represented by this object. This property always provides absolute, full file paths.
    */
   readonly filePath: string;
   /**
    * The value of this property is true iff this object has an open ephemeris file and is ready for ephemeris data retrieval.
    */
   readonly isOpen: boolean;
   /**
    * Provides a list of objects describing all of the bodies available in this file for ephemeris calculations.
    * The provided array is sorted by object and origin identifiers (in that order of precedence) in ascending order.
    * Each object stored in the provided array has the following properties:
    * Identifier
    * Type
    * Description
    * objectId
    * String
    * Unique identifier of an object or item for which ephemeris data are available. This is a short string that uniquely identifies the object in the context of an ephemeris file.
    * For example, standard XEPH files serializing JPL DE/LE ephemerides use a two/three letter convention for object identifiers: 'Me', 'Ve', 'EMB', 'Ea', 'Ma', etc, respectively for Mercury, Venus, Earth-Moon barycenter, Earth, Mars, etc. Object identifiers are considered as case-sensitive in XEPH files.
    * originId
    * String
    * Identifier of the origin of coordinates (case-sensitive). This can be the unique identifier of a solar system object, or the identifier of an arbitrary object or location, specific to a particular ephemeris file.
    * For example, if the object provides geocentric coordinates, this member should be "Ea", which is the unique identifier of the Earth's center in standard fundamental ephemerides files. Similarly, if the ephemerides are heliocentric, this member should be "Sn". If the ephemeris data are with respect to the solar system barycenter, this member must be "SSB", also for coherence with fundamental ephemerides.
    * objectName
    * String
    * Optional name of the object or item for which ephemeris data are available. This can be an arbitrary string, such as 'Saturn', 'Iris', or 'C/1996 B2'. Object names are considered as case-insensitive in XEPH files, so all of 'Jupiter', 'jupiter' and 'JUPITER' are equivalent.
    * objectDescription
    * String
    * Optional information about the object and/or the ephemeris data.
    * H
    * Number
    * Absolute asteroid magnitude. H is the visual magnitude of the object as seen at 1 au of the Earth, 1 au from the Sun, and with a phase angle of zero degrees. [1] [2]
    * G
    * Number
    * Asteroid magnitude slope parameter. See the H property for references.
    * M1
    * Number
    * Comet total absolute magnitude. M1 is the visual absolute magnitude of the comet's combined nucleus and coma.
    * For the calculation of apparent comet magnitudes we apply the following equations:
    * Tmag = M1 + 5*log(d) + K1*log(r)
    * Nmag = M2 + 5*log(d) + K2*log(r) + PC*beta
    * where Tmag and Nmag are, respectively, the total (nucleus+coma) and nuclear apparent magnitudes. In these equations, M1 and M2 are the comet's total and nuclear absolute magnitude paranmeters, K1 and K2 are the total and nuclear magnitude slope parameters, PC is the nuclear magnitude phase coefficient, d is the comet's distance to Earth, r is its distance from the Sun, and beta is the phase angle.
    * K1
    * Number
    * Comet total magnitude slope parameter. See the M1 property for information on the calculation of comet apparent magnitudes.
    * M2
    * Number
    * Comet nuclear absolute magnitude. M2 is the visual absolute magnitude of the comet's nucleus. See the M1 property for information on the calculation of comet apparent magnitudes.
    * K2
    * Number
    * Comet nuclear magnitude slope parameter. See the M1 property for information on the calculation of comet apparent magnitudes.
    * PC
    * Number
    * Comet nuclear magnitude phase coefficient. See the M1 property for information on the calculation of comet apparent magnitudes.
    * B_V
    * Number
    * Color index B-V in magnitudes.
    * U_B
    * Number
    * Color index U-B in magnitudes.
    * I_R
    * Number
    * Color index I-R in magnitudes.
    * D
    * Number
    * Diameter of the object in km.
    * A1
    * Number
    * Comet non-gravitational acceleration, radial component (au/day^2).
    * A2
    * Number
    * Comet non-gravitational acceleration, transverse component (au/day^2).
    * A3
    * Number
    * Comet non-gravitational acceleration, normal component (au/day^2).
    * DT
    * Number
    * Comet non-gravitational acceleration, perihelion time offset (days).
    * When one of these properties is unknown or unavailable for the corresponding object, its value is null.
    */
   readonly objects: any[];
   /**
    * The name of the organization responsible for this XEPH file
    */
   readonly organizationName: string;
   /**
    * Starting point of the time span covered by this ephemeris, or the earliest time point for which ephemerides can be calculated using this object.
    */
   readonly startTime: Date;
   /**
    * A title that represents or identifies this XEPH file.
    */
   readonly title: string;
   /**
    * Closes the ephemeris file represented by this object and resets all internal structures to a default, uninitialized state.
    * If a previous file was already opened by this instance, it will be closed and all the associated control and file indexing structures will be destroyed and deallocated. If no file is currently open, calling this method has no effect.
    * Important: If this object has active ephemeris calculation handles, no action will be taken and an Error exception will be thrown. See the EphemerisHandle core object.
    */
   close(  ): void;
   /**
    * Returns the value of an ephemeris constant given by its name.
    * If no constant is available with the specified name (case-insensitive) in the XEPH file represented by this object, this method throws an Error exception.
    */
   constantValue( name: string ): number;
   /**
    * Returns true iff this object knows a numerical constant with the specified name.
    */
   isConstantAvailable( name: string ): boolean;
   /**
    * Returns true iff this instance contains ephemeris data for the specified object, given by its identifier or name, with respect to the specified origin.
    * The specified object string can be either an object identifier (case-sensitive), or an object name (case-insensitive) encoded as UTF-8. For example, all of 'Ju', 'Jupiter', 'jupiter' and 'JUPITER' refer to Jupiter in a standard XEPH file storing fundamental JPL DE/LE ephemerides. In this example, 'Ju' is a case-sensitive object identifier, thus 'ju' and 'JU' are not valid and this method would return false for both of them.
    * origin is the identifier of an origin of coordinates. If this argument is not specified or is an empty string, this method will return true if the file contains any ephemeris data for the specified object, irrespective of the origin. Otherwise an exact match of the origin identifier will be required.
    * See the EphemerisFile.fundamentalEphemerides static property for information about the objects supported by standard XEPH files storing fundamental ephemerides.
    */
   isObjectAvailable( object?: string, origin?: string ): boolean;
   /**
    * Returns the name of the specified object, with respect to the specified origin.
    * Both object and origin must be object identifiers. If origin is not specified or is an empty string, this method will return the name of the first object found with the specified identifier, irrespective of the origin. Otherwise an exact match of the origin identifier will be required.
    * If no object with the required conditions is available in this ephemeris file, this method returns an empty string.
    */
   objectName( object?: string, origin?: string ): boolean;
   /**
    * Initializes this object to give access to the specified ephemeris data file in XEPH format.
    * This member function opens an existing file at the specified filePath, loads and parses its XML header, and loads the file indexes ready for fast access to ephemeris data. The file will remain open until this object is destroyed, or until a new call to this function is made.
    * If a previous file was already opened by this instance, it will be closed and all associated control and file indexing structures will be destroyed and deallocated, before accessing the new file.
    * Important: If this object has active ephemeris calculation handles, no action will be taken and an Error exception will be thrown. See the EphemerisHandle core object.
    */
   open( filePath: string ): void;
   /**
    * Returns an Array with the identifiers, coordinates, and magnitudes of the objects with positions included in the specified image window.
    * window
    * The ImageWindow object with the image for which object visibility will be evaluated.
    * P
    * The Position object that will be used for ephemeris calculations. This object defines the observation time, observer location, and other parameters required to compute positions of solar system bodies. This object will be used to compute ephemerides for all objects available in this ephemeris file.
    * magMax
    * The maximum visual magnitude of the objects returned. If not specified, no upper bound of magnitudes will be imposed on the set of returned objects.
    * magMin
    * The minimum visual magnitude of the objects returned. If not specified, no lower bound of magnitudes will be imposed on the set of returned objects.
    * rect
    * An optional rectangular search region. If specified, only objects with positions within the specified region in image coordinates will be reported.
    * The specified image window must have a valid astrometric solution; otherwise, this function will throw an Error exception. For accurate transformation of celestial coordinates to image coordinates, our native spline-based solutions with arbitrary distortion corrections are generally recommended. Linear solutions are only recommended when the image has already been reprojected linearly (see ImageWindow.astrometricReprojection()); for example, when working with astrometrically generated mosaics. Coordinates will be calculated in the celestial coordinate system of the window's astrometric solution: either ICRS or GCRS.
    * The returned Array will contain the list of visible objects in the image. If no objects available in this ephemeris file are visible in the image with the specified parameters, an empty array will be returned.
    * Each object in the array has the following properties:
    * Property
    * Type
    * Description
    * objectId
    * String
    * The object identifier. See the EphemerisFile.objects property for detailed information on object identifiers and names in XEPH files.
    * objectName
    * String
    * The object's name.
    * alpha
    * Number
    * The right ascension coordinate in degrees, in the [0,360) range.
    * delta
    * Number
    * The declination coordinate in degrees, in the [–90,+90] range.
    * x
    * Number
    * The horizontal (X-axis) image coordinate of the celestial-to-image projection.
    * y
    * Number
    * The vertical (Y-axis) image coordinate of the celestial-to-image projection.
    * magnitude
    * Number
    * The object's visual magnitude at the time of observation.
    */
   visibleObjects( window: ImageWindow, Position?: any, magMax?: any, magMin?: any, rect?: Rect ): any[];
}

/**
 * This class provides access to ephemeris data for a specific object available in an ephemeris file. It can perform basic ephemeris calculations, including state vectors and its first derivatives (such as position and velocity), and performs all the low-level file seek and read operations transparently and efficiently.
 * Data stored in an XEPH ephemeris file generates rectangular coordinates referred to the axes of the International Celestial Reference System (ICRS/J2000.0). Positions are given in au and velocities in au/day for all solar system objects, except planetocentric coordinates of natural satellites, including the geocentric Moon, for which positions and velocities are given in kilometers and km/day, respectively. Angles (nutations and librations) are given in radians, and time differences (such as TT-TDB) in seconds.
 */
declare class EphemerisHandle {
   /**
    * Constructs a new EphemerisHandle object.
    * parent
    * Reference to an open EphemerisFile object providing access to an ephemeris data file in XEPH format.
    * object
    * The identifier or name of the object for which this instance will compute ephemerides.
    * origin
    * The identifier of the origin of coordinates. If this argument is not specified or is an empty string, this object will be created for the first occurrence of ephemeris data available for object in the parent file, irrespective of the origin. In that case, if parent is a standard fundamental ephemerides file, the origin is always the solar system barycenter (identified as "SSB").
    * For a detailed description of object names and identifiers, see the EphemerisFile object.
    * If the specified parent ephemeris file is not open, or if no ephemeris data are available for the specified object and origin in the parent ephemeris file, this constructor will throw an Error exception.
    */
   constructor( EphemerisFile: any, object?: string, origin?: string );
   /**
    * The radial component of the comet non-gravitational acceleration, in au/day^2.
    */
   readonly A1: number | null;
   /**
    * The transverse component of the comet non-gravitational acceleration, in au/day^2.
    */
   readonly A2: number | null;
   /**
    * The normal component of the comet non-gravitational acceleration, in au/day^2.
    */
   readonly A3: number | null;
   /**
    * The color index B-V, in magnitudes.
    */
   readonly B_V: number | null;
   /**
    * The object's diameter in km. When available, this is normally an IRAS diameter for an asteroid.
    */
   readonly D: number | null;
   /**
    * The perihelion time offset parameter of the comet non-gravitational acceleration, in days.
    */
   readonly DT: number | null;
   /**
    * The asteroid magnitude slope parameter. See EphemerisHandle.H for references.
    */
   readonly G: number | null;
   /**
    * Absolute asteroid magnitude. H is the visual magnitude of the object as seen at 1 au of the Earth, 1 au from the Sun, and with a phase angle of zero degrees. [1] [2]
    */
   readonly H: number | null;
   /**
    * The color index I-R, in magnitudes.
    */
   readonly I_R: number | null;
   /**
    * Comet total magnitude slope parameter. See the EphemerisHandle.M1 property for information on the calculation of comet apparent magnitudes.
    */
   readonly K1: number | null;
   /**
    * Comet nuclear magnitude slope parameter. See the EphemerisHandle.M1 property for information on the calculation of comet apparent magnitudes.
    */
   readonly K2: number | null;
   /**
    * Comet total absolute magnitude. M1 is the visual absolute magnitude of the comet's combined nucleus and coma.
    * For the calculation of apparent comet magnitudes we apply the following equations:
    * Tmag = M1 + 5*log(d) + K1*log(r)
    * Nmag = M2 + 5*log(d) + K2*log(r) + PC*beta
    * where Tmag and Nmag are, respectively, the total (nucleus+coma) and nuclear apparent magnitudes. In these equations, M1 and M2 are the comet's total and nuclear absolute magnitude paranmeters, K1 and K2 are the total and nuclear magnitude slope parameters, PC is the nuclear magnitude phase coefficient, d is the comet's distance to Earth, r is its distance from the Sun, and beta is the phase angle.
    */
   readonly M1: number | null;
   /**
    * Comet nuclear absolute magnitude. M2 is the visual absolute magnitude of the comet's nucleus. See the EphemerisHandle.M1 property for information on the calculation of comet apparent magnitudes.
    */
   readonly M2: number | null;
   /**
    * Comet nuclear magnitude phase coefficient. See the EphemerisHandle.M1 property for information on the calculation of comet apparent magnitudes.
    */
   readonly PC: number | null;
   /**
    * Color index U-B in magnitudes.
    */
   readonly U_B: number | null;
   /**
    * The upper bound of the time span for which this instance can calculate ephemerides using the ephemeris data already available. If a time point outside this span is requested, new file seek and read operations must be performed.
    */
   readonly endTime: Date;
   /**
    * The value of this property is true iff the parent ephemeris file provides Chebyshev expansions of state vector derivatives for the object for which this handle computes ephemerides.
    * When no expansions for derivatives are available, derivatives are approximated by numerical differentiation of the Chebyshev expansions for state vectors.
    */
   readonly hasDerivative: boolean;
   /**
    * The unique identifier of the object for which this handle can compute ephemerides.
    */
   readonly objectId: string;
   /**
    * The name of the object for which this handle can compute ephemerides. The returned value can be an empty string if no information about the object name is available in the parent ephemeris file.
    */
   readonly objectName: string;
   /**
    * The unique identifier of the origin of the coordinates computed by this object. For example, if this property is equal to "Ea" or "Sn", the computed coordinates are geocentric or heliocentric, respectively. If the value of this property is "SSB", the origin of coordinates is the solar system barycenter. This happens, for example, with all standard XEPH files providing fundamental ephemerides.
    */
   readonly originId: string;
   /**
    * The lower bound of the time span for which this instance can calculate ephemerides using the ephemeris data already available. If a time point outside this span is requested, new file seek and read operations must be performed.
    */
   readonly startTime: Date;
   /**
    * Computes a state vector for the specified time point t.
    * t is the requested time point in the TDB time scale. Rigorously, this is Teph as defined by JPL, but is equivalent to TDB or TT for all practical purposes.
    * Returns a vector with the components of the computed state. The reference system is ICRS/J2000.0.
    * Rectangular coordinates for position are provided in au, except for the geocentric Moon, for which positions are provided in km.
    * Angles are provided in radians.
    * TT-TDB differences are provided in seconds.
    * If t is either invalid or a time point outside the time span available from the parent ephemeris file, this member function throws an Error exception.
    */
   stateVector( t: Date ): Vector;
   /**
    * Computes a state vector for the specified time point in ISO 8601 format. See EphemerisHandle.stateVector( Date ) for complete information.
    */
   stateVector( isoDateTime: string ): Vector;
   /**
    * Computes a state vector for the specified time point expressed as the sum of two Julian dates. See EphemerisHandle.stateVector( Date ) for complete information.
    */
   stateVector( jd1?: number, jd2?: number ): Vector;
   /**
    * Computes a state vector and its first derivative for the specified time point t.
    * t is the requested time point in the TDB time scale. Rigorously, this is Teph as defined by JPL, but is equivalent to TDB or TT for all practical purposes.
    * Returns an Array object with two elements. The first element is a vector with the components of the computed state. The second element is a vector with the components of the computed first derivative. The reference system is ICRS/J2000.0.
    * Rectangular coordinates for position and velocity are provided in au and au/day, respectively, except for the geocentric Moon, for which position and velocity are provided in km and km/day, respectively.
    * Angles and their variations are provided in radians and radians/day.
    * Time differences (such as TT-TDB) and their variations are provided in seconds and seconds/day.
    * If the parent ephemeris file provides Chebyshev expansions of state vector derivatives for the object being calculated, the components of the returned first derivative vector will be calculated directly from these expansions. Otherwise, the first derivative will be approximated by numerical differentiationof the Chebyshev expansions for state vectors.
    * If t is either invalid or a time point outside the time span available from the parent ephemeris file, this member function throws an Error exception.
    */
   stateVectors( arg0: Date ): any[];
   /**
    * Computes a state vector and its first derivative for the specified time point in ISO 8601 format. See EphemerisHandle.stateVectors( Date ) for complete information.
    */
   stateVectors( isoDateTime: string ): any[];
   /**
    * Computes a state vector and its first derivative for the specified time point expressed as the sum of two Julian dates. See EphemerisHandle.stateVectors( Date ) for complete information.
    */
   stateVectors( jd1?: number, jd2?: number ): any[];
}

declare class EquatorialCoordinatesEditor extends Control {
   constructor( parent?: Control, alpha?: number, delta?: number, precision?: number, degrees?: boolean, labelWidth?: number, spinBoxWidth?: number );
   alpha: number;
   readonly degrees: boolean;
   delta: number;
   readonly isNorth: boolean;
   readonly isSouth: boolean;
   readonly precision: number;
   onCoordinatesChanged: ( alpha: number, delta: number ) => void;
}

declare class ExternalProcess {
   constructor( program?: string, arguments?: any[] );
   static execute( program?: string, arguments?: any[] ): number;
   static startDetached( program?: string, arguments?: any[], workingDirectory?: string ): bigint;
   static startDetached( program?: string, workingDirectory?: string ): bigint;
   readonly bytesAvailable: number;
   readonly bytesToWrite: number;
   environment: any[];
   readonly error: number;
   readonly exitCode: number;
   readonly exitStatus: number;
   readonly isRunning: boolean;
   readonly isStarting: boolean;
   readonly outputData: ByteArray;
   readonly pid: bigint;
   readonly standardError: ByteArray;
   standardInput: ByteArray | string;
   readonly standardOutput: ByteArray;
   readonly stderr: ByteArray;
   stdin: ByteArray | string;
   readonly stdout: ByteArray;
   workingDirectory: string;
   closeStandardError(  ): ExternalProcess;
   closeStandardInput(  ): ExternalProcess;
   closeStandardOutput(  ): ExternalProcess;
   kill(  ): ExternalProcess;
   redirectStandardError( filePath?: string, append?: boolean ): ExternalProcess;
   redirectStandardInput( filePath: string ): ExternalProcess;
   redirectStandardOutput( filePath?: string, append?: boolean ): ExternalProcess;
   redirectStandardOutput( ExternalProcess: any ): ExternalProcess;
   start( program?: string, arguments?: any[] ): ExternalProcess;
   terminate(  ): ExternalProcess;
   waitForDataAvailable( ms?: number ): boolean;
   waitForDataWritten( ms?: number ): boolean;
   waitForFinished( ms?: number ): boolean;
   waitForStarted( ms?: number ): boolean;
   onError: ( errorCode: number ) => void;
   onFinished: ( exitCode: number, exitStatus: number ) => void;
   onStandardErrorDataAvailable: (  ) => void;
   onStandardOutputDataAvailable: (  ) => void;
   onStarted: (  ) => void;
   onStateChanged: ( newState: number ) => void;
}

declare class FITSKeyword {
   constructor(  );
   constructor( name: string, value?: string, comment?: string );
   constructor( FITSKeyword: any );
   comment: string;
   readonly isBoolean: boolean;
   readonly isNull: boolean;
   readonly isNumeric: boolean;
   readonly isString: boolean;
   name: string;
   readonly numericValue: number;
   readonly strippedValue: string;
   value: string;
   assign( FITSKeyword: any ): FITSKeyword;
   toArray(  ): any[];
   toString(  ): string;
   trim(  ): FITSKeyword;
}

declare class FMath {
   static readonly DEG: number;
   static readonly E: number;
   static readonly EPSILON: number;
   static readonly EPSILON32: number;
   static readonly GOLDEN: number;
   static readonly LN10: number;
   static readonly LN2: number;
   static readonly LOG102: number;
   static readonly LOG10E: number;
   static readonly LOG210: number;
   static readonly LOG2E: number;
   static readonly LOWEST: number;
   static readonly LOWEST32: number;
   static readonly MAX: number;
   static readonly MAX32: number;
   static readonly MIN: number;
   static readonly MIN32: number;
   static readonly MJD_OFFSET: number;
   static readonly PI: number;
   static readonly PI2: number;
   static readonly PI4: number;
   static readonly RAD: number;
   static readonly SQRT1_2: number;
   static readonly SQRT2: number;
   static readonly SQRT2_2: number;
   static readonly TT_TAI: number;
   static readonly _1_PI: number;
   static readonly _1_SQRT2: number;
   static readonly _2PI: number;
   static readonly _2_PI: number;
   static readonly _2_SQRT_PI: number;
   static readonly _3PI2: number;
   static readonly _3PI4: number;
   static readonly _5PI4: number;
   static readonly _7PI4: number;
   static readonly k_BWMV: number;
   static readonly k_MAD: number;
   static readonly k_Qn: number;
   static readonly k_Sn: number;
   static readonly k_avgDev: number;
   constructor();
   static abs( x: number ): number;
   static abs( x: number ): void;
   static acos( x: number ): number;
   static acos( x: number ): void;
   static acosh( x: number ): number;
   static acosh( x: number ): void;
   static ahav( x: number ): number;
   static ahav( x: number ): void;
   static angle( x: number ): number;
   static angle( x: number ): void;
   static asin( x: number ): number;
   static asin( x: number ): void;
   static asinh( x: number ): number;
   static asinh( x: number ): void;
   static atan( x: number ): number;
   static atan( x: number ): void;
   static atan2( y: number, x: number ): number;
   static atan2( y: number, x: number ): void;
   static atan2pi( y: number, x: number ): number;
   static atan2pi( y: number, x: number ): void;
   static atanh( x: number ): number;
   static atanh( x: number ): void;
   static cbrt( x: number ): number;
   static cbrt( x: number ): void;
   static ceil( x: number ): number;
   static ceil( x: number ): void;
   static clz32( x: number ): number;
   static clz32( x: number ): void;
   static cos( x: number ): number;
   static cos( x: number ): void;
   static cosh( x: number ): number;
   static cosh( x: number ): void;
   static cotan( x: number ): number;
   static cotan( x: number ): void;
   static cross( x1: number, y1: number, z1: number, x2: number, y2: number, z2: number ): number;
   static cross( x1: number, y1: number, z1: number, x2: number, y2: number, z2: number ): void;
   static decimalToSexagesimal( degrees: number ): [number, number, number, number];
   static decimalToSexagesimal( degrees: number ): void;
   static deg( x: number ): number;
   static deg( x: number ): void;
   static distance2D( x1: number, y1: number, x2: number, y2: number ): number;
   static distance2D( x1: number, y1: number, x2: number, y2: number ): void;
   static distance3D( x1: number, y1: number, z1: number, x2: number, y2: number, z2: number ): number;
   static distance3D( x1: number, y1: number, z1: number, x2: number, y2: number, z2: number ): void;
   static dot( v1: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], v2: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], n: number ): number;
   static dot( v1: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], v2: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], n: number ): void;
   static dot2( x1: number, y1: number, x2: number, y2: number ): number;
   static dot2( x1: number, y1: number, x2: number, y2: number ): void;
   static dot3( x1: number, y1: number, z1: number, x2: number, y2: number, z2: number ): number;
   static dot3( x1: number, y1: number, z1: number, x2: number, y2: number, z2: number ): void;
   static dot4( x1: number, y1: number, z1: number, t1: number, x2: number, y2: number, z2: number, t2: number ): number;
   static dot4( x1: number, y1: number, z1: number, t1: number, x2: number, y2: number, z2: number, t2: number ): void;
   static erf( x: number ): number;
   static erf( x: number ): void;
   static erfinv( x: number ): number;
   static erfinv( x: number ): void;
   static exp( x: number ): number;
   static exp( x: number ): void;
   static expm1( x: number ): number;
   static expm1( x: number ): void;
   static fact( x: number ): number;
   static fact( x: number ): void;
   static floor( x: number ): number;
   static floor( x: number ): void;
   static frac( x: number ): number;
   static frac( x: number ): void;
   static fround( x: number ): number;
   static fround( x: number ): void;
   static hav( x: number ): number;
   static hav( x: number ): void;
   static hypot( v: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): number;
   static hypot( v: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): void;
   static imul( x: number, y: number ): number;
   static imul( x: number, y: number ): void;
   static lnfact( n: number ): number;
   static lnfact( n: number ): void;
   static log( x: number ): number;
   static log( x: number ): void;
   static log10( x: number ): number;
   static log10( x: number ): void;
   static log1p( x: number ): number;
   static log1p( x: number ): void;
   static log2( x: number ): number;
   static log2( x: number ): void;
   static logn( n: number, x: number ): number;
   static logn( n: number, x: number ): void;
   static mas2rad( x: number ): number;
   static mas2rad( x: number ): void;
   static max( v: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): number;
   static max( v: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): void;
   static max2( a: number, b: number ): number;
   static max2( a: number, b: number ): void;
   static max2i( a: number, b: number ): number;
   static max2i( a: number, b: number ): void;
   static max3( a: number, b: number, c: number ): number;
   static max3( a: number, b: number, c: number ): void;
   static max3i( a: number, b: number, c: number ): number;
   static max3i( a: number, b: number, c: number ): void;
   static min( v: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): number;
   static min( v: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): void;
   static min2( a: number, b: number ): number;
   static min2( a: number, b: number ): void;
   static min2i( a: number, b: number ): number;
   static min2i( a: number, b: number ): void;
   static min2rad( x: number ): number;
   static min2rad( x: number ): void;
   static min3( a: number, b: number, c: number ): number;
   static min3( a: number, b: number, c: number ): void;
   static min3i( a: number, b: number, c: number ): number;
   static min3i( a: number, b: number, c: number ): void;
   static mod( x: number, y: number ): number;
   static mod( x: number, y: number ): void;
   static mtf( m: number, x: number ): number;
   static mtf( m: number, x: number ): void;
   static poly( x: number, c?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], n?: number ): number;
   static poly( x: number, c?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], n?: number ): void;
   static pow( x: number, y: number ): number;
   static pow( x: number, y: number ): void;
   static pow10( x: number ): number;
   static pow10( x: number ): void;
   static pow10i( n: number ): number;
   static pow10i( n: number ): void;
   static pow2( x: number ): number;
   static pow2( x: number ): void;
   static rad( x: number ): number;
   static rad( x: number ): void;
   static rad2min( x: number ): number;
   static rad2min( x: number ): void;
   static rad2sec( x: number ): number;
   static rad2sec( x: number ): void;
   static random(  ): number;
   static random(  ): void;
   static range( x: number, a: number, b: number ): number;
   static range( x: number, a: number, b: number ): void;
   static rectangularToSpherical( x: number, y: number, z: number ): [number, number];
   static rectangularToSpherical( x: number, y: number, z: number ): void;
   static rectangularToSpherical2pi( x: number, y: number, z: number ): [number, number];
   static rectangularToSpherical2pi( x: number, y: number, z: number ): void;
   static round( x: number ): number;
   static round( x: number ): void;
   static roundInt( x: number ): number;
   static roundInt( x: number ): void;
   static roundInt64( x: number ): bigint;
   static roundInt64( x: number ): void;
   static roundIntArithmetic( x: number ): number;
   static roundIntArithmetic( x: number ): void;
   static roundTo( x: number, n: number ): number;
   static roundTo( x: number, n: number ): void;
   static sec2rad( x: number ): number;
   static sec2rad( x: number ): void;
   static sexagesimalToDecimal( sign: number, s1?: number, s2?: number, s3?: number ): number;
   static sexagesimalToDecimal( sign: number, s1?: number, s2?: number, s3?: number ): void;
   static sign( x: number ): number;
   static sign( x: number ): void;
   static sin( x: number ): number;
   static sin( x: number ): void;
   static sinh( x: number ): number;
   static sinh( x: number ): void;
   static sphericalToRectangular( lon: number, lat: number ): [number, number, number];
   static sphericalToRectangular( lon: number, lat: number ): void;
   static sphericalToRectangular4( slon: number, clon: number, slat: number, clat: number ): [number, number, number];
   static sphericalToRectangular4( slon: number, clon: number, slat: number, clat: number ): void;
   static sqrt( x: number ): number;
   static sqrt( x: number ): void;
   static tan( x: number ): number;
   static tan( x: number ): void;
   static tanh( x: number ): number;
   static tanh( x: number ): void;
   static trunc( x: number ): number;
   static trunc( x: number ): void;
   static uas2rad( x: number ): number;
   static uas2rad( x: number ): void;
}

/**
 * The File class provides a large set of static and dynamic properties and methods, forming a rich, efficient, platform-independent interface to the local filesystem across all supported operating systems and architectures, including UNIX/Linux, macOS, and Windows. The underlying implementation is essentially the same as that available in the C++ language on the PixInsight/PCL platform.
 * This class always performs synchronous input/output operations. This means that, for example, if you want to generate a new file using the File.writeFile() static method, the calling task will block until the file generation and writing operations are complete.
 * File instances provide dynamic properties and methods that implement the usual file access primitives, such as file pointer movement, file read, and file write operations supporting a large variety of object types and configurations. In addition, static methods include direct file read and write operations implemented as single actions to acquire and store the entire file contents, file and directory management methods, and specialized methods to work with file and directory items in a platform-independent way, among many others.
 */
declare class File {
   /**
    * The absolute, full path to the current working directory.
    */
   static readonly currentWorkingDirectory: string;
   /**
    * The home directory of the current user.
    * On FreeBSD, Linux, and macOS, the value of this property is the value of the HOME environment variable if it is defined, nonempty, and is a valid path to an existing directory. In the extremely weird case this does not happen, the system root directory '/' is provided as a last resort.
    * On Windows, the value of this property is the root directory of the current user's profile. This is normally the value of the USERPROFILE environment variable. In case this fails, the HOMEDRIVE, HOMEPATH and HOME variables are checked for validity. If everything fails, the SYSTEMDRIVE variable is checked, and ultimately, "C:/" is provided.
    */
   static readonly homeDirectory: string;
   /**
    * The maximum number of file descriptors (or file handles) available on the host system for the current user.
    */
   static readonly maxOpenFiles: number;
   /**
    * The root directory of the host machine. Normally, the value of this property is '/' on a Linux/UNIX platform, and something like 'C:/' on Windows.
    */
   static readonly rootDirectory: string;
   /**
    * The system cache storage directory.
    * On FreeBSD, Linux, and Windows, this function is equivalent to File.systemTempDirectory.
    * On macOS, this function returns the user's local cache folder, namely "~/Library/Caches" if it exists (it should), or File.systemTempDirectory otherwise.
    */
   static readonly systemCacheDirectory: string;
   /**
    * The system temporary storage directory.
    * On FreeBSD, Linux, and macOS, the value of this property is the value of the TMPDIR environment variable if it is defined, nonempty, and is a valid path to an existing directory. Otherwise this function returns "/tmp".
    * On Windows, the value of this property is the directory designated for storage of temporary files. Normally this is the value of the TMP or TEMP environment variable. If no valid directory can be retrieved this way, which is extremely weird, this function attempts to return the user's profile directory, as reported by the USERPROFILE variable. If that also fails, "C:/tmp" is returned if it exists, or the current working directory as a last resort.
    */
   static readonly systemTempDirectory: string;
   /**
    * Constructs a new File object. If path is specified, this constructor attempts to open a file at the given path with the given mode, if specified, or a default combination that allows read-only access to an existing file. For supported file open modes, see the FileMode core object.
    * In the event of errors (for example, if an existing file cannot be accessed, or if a new file cannot be created), this constructor throws an appropriate Error exception.
    * On most occasions, one prefers calling one of the following static methods of the File class instead of using this constructor:
    * File.createFile()
    * File.createFileForWriting()
    * File.openFile()
    * File.openFileForReadWrite()
    * File.openFileForReading()
    * File.openOrCreateFile()
    * In other cases, if one simply wants to acquire the entire contents of an existing file, there is no need to create a new File object, and the following static methods can be more convenient:
    * File.readFile()
    * File.readLines()
    * File.readTextFile()
    * The same is true to generate a new file by writing its entire contents in a single operation, passing an existing typed array, ByteArray, or String object:
    * File.writeFile()
    * File.writeTextFile()
    */
   constructor( path?: string, mode?: number );
   /**
    * Appends a suffix string to the current file name in the specified path. Returns the resulting path.
    */
   static appendToName( path: string, suffix: string ): string;
   /**
    * Changes the current file extension in path to a new extension ext. If it is not an empty string, the specified extension must include the leading dot separator.
    * If the specified new extension ext is an empty string, this function returns path with its extension (if any) removed.
    * Returns the resulting path after changing the file extension to the specified value.
    */
   static changeExtension( path: string, ext: string ): string;
   /**
    * A synonym for File.changeExtension().
    */
   static changeSuffix( path: string, newExtension: string ): string;
   static copyFile( targetPath: string, sourcePath?: string, progressFunc?: Function, progressThis?: object ): void;
   /**
    * Copies a symbolic link.
    * targetPath
    * Path to the target file. A new symbolic link will be created at this path, which will point to the same link target as the source link.
    * sourcePath
    * Path to the source link, whose target will be copied to the target link.
    * Note that this function creates a duplicate of the symbolic link itself, not of its pointed file.
    * Note: This static method is only defined on UNIX and Linux platforms. It does not make sense on Windows, where POSIX symbolic links don't exist.
    */
   static copyLink( targetPath: string, sourcePath: string ): void;
   /**
    * Copies access and modification times and access permissions from one file or directory item to another.
    * targetPath
    * Path to the target item whose times and permissions will be changed.
    * sourcePath
    * Path to the source item whose times and permissions will be copied to the target item.
    */
   static copyTimesAndPermissions( targetPath: string, sourcePath: string ): void;
   /**
    * Creates a new directory at the specified dirPath.
    * If createIntermediateDirs is true (the default value) and dirPath specifies one or more parent directories that don't exist, they are created automatically.
    */
   static createDirectory( dirPath?: string, createIntermediateDirs?: boolean ): void;
   /**
    * Returns a newly created file at the specified path, ready for exclusive read/write access.
    * Warning: If a file already exists at the same path, its contents will be truncated to zero length.
    */
   static createFile( path: string ): File;
   /**
    * Returns a newly created file at the specified path, ready for exclusive write-only access.
    * Warning: If a file already exists at the same path, its contents will be truncated to zero length.
    */
   static createFileForWriting( path: string ): File;
   /**
    * Returns true iff a directory at the specified dirPath exists.
    */
   static directoryExists( dirPath: string ): boolean;
   /**
    * Returns true iff a file at the specified filePath exists.
    */
   static exists( filePath: string ): boolean;
   /**
    * Extracts the complete file suffix from the specified path.
    * Returns the extracted complete suffix, or an empty string if no file suffix was found. The returned string includes the leading dot separator.
    * The complete suffix is the ending substring of the file identifier in the specified path, starting with the first occurrence of a dot character. For example, in 'foo.tar.gz' the complete suffix is '.tar.gz'.
    */
   static extractCompleteSuffix( path: string ): string;
   /**
    * Extracts a directory specification from the specified path.
    * Returns the extracted directory specification, or an empty string if no directory was found. On Windows, the drive element of the path is not included.
    * Examples:
    * Path
    * Directory
    * /foo.tar.gz
    * /
    * /foo/bar.tar.gz
    * /foo
    * foo/bar.tar.gz
    * foo
    * C:/Foo/Bar.txt
    * /Foo
    */
   static extractDirectory( path: string ): string;
   /**
    * Extracts a Windows drive specification from the specified path.
    * Returns the extracted drive specification as a new string, or an empty string if no drive was found.
    * This function only makes sense on Windows. On UNIX and Linux operating systems, this function always returns an empty string.
    */
   static extractDrive( path: string ): string;
   /**
    * Extracts a file extension from the specified path.
    * Returns the extracted extension, or an empty string if no file extension was found. The returned extension includes the leading dot separator.
    * Examples:
    * Path
    * Extension
    * /foo/bar.tar.gz
    * .gz
    * C:/Foo/Bar.txt
    * .txt
    */
   static extractExtension( path: string ): string;
   /**
    * Extracts a file name from the specified path.
    * Returns the extracted name, or an empty string if no file name was found. The file extension or suffix is not included.
    * Examples:
    * Path
    * Name
    * /foo/bar.tar.gz
    * bar.tar
    * C:/Foo/Bar.txt
    * Bar
    */
   static extractName( path: string ): string;
   /**
    * Extracts the file name and extension from the specified path. Calling this method is functionally equivalent to:
    * File.extractName( path ) + File.extractExtension( path )
    */
   static extractNameAndExtension( path: string ): string;
   /**
    * A synonym for File.extractNameAndExtension().
    */
   static extractNameAndSuffix( path: string ): string;
   /**
    * A synonym for File.extractExtension().
    */
   static extractSuffix( path: string ): string;
   /**
    * Returns a valid URI with the "file" scheme corresponding to the specified local path.
    * The returned URI is valid as specified by RFC 1738 [1] and RFC 8089.[2] The following characters will always be percent-encoded when present in the specified path:
    * Non-printable US-ASCII characters in the ranges [00-1F] and [7F-FF].
    * Unsafe characters: ' ', ' ', '#', '"', '%', '{', '}', '|', '\', '^', '~', '[', ']', '`'
    * Reserved characters: ';', '?', ':', '@', '=', '&'.
    * The returned URI will include the specified path transformed to a full absolute local path with UNIX directory separators, encoded in UTF-8, percent-encoded as necessary, and prefixed with the "file://" scheme.
    * On Windows, a drive letter will always be present, prefixed with a root directory specifier, and the colon separator will be used; for example:
    * file:///C:/path/to/local%20file.txt
    */
   static fileURI( path: string ): string;
   /**
    * Finds the complete file suffix in the specified path.
    * Returns the character index position of the complete suffix, or -1 if no suffix was found.
    * The complete suffix is the rightmost substring of the path starting with the first occurrence of a dot character. For example, in 'foo.tar.gz' the complete suffix is '.tar.gz'.
    */
   static findCompleteSuffix( path: string ): number;
   /**
    * Finds a Windows drive specification in the specified path.
    * Returns the character index position of the drive specification, or -1 if no drive specification was found.
    * This function only makes sense on Windows. On UNIX and Linux operating systems, this function always returns -1.
    */
   static findDrive( path: string ): number;
   /**
    * Finds a file extension in the specified path.
    * Returns the character index position of the extension, or -1 if no extension was found.
    * The file extension, or file suffix, is the rightmost substring of path starting with the last occurrence of a dot character. For example, in 'foo.tar.gz' the file extension is '.gz'.
    */
   static findExtension( path: string ): number;
   /**
    * Finds a file name in the specified path.
    * Returns the character index position of the name, or -1 if no file name was found.
    * For example, in '/foo/bar.tar.gz' the file name is 'bar'.
    */
   static findName( path: string ): number;
   /**
    * A synonym for File.findExtension().
    */
   static findSuffix( path: string ): number;
   /**
    * Returns the full, absolute local path to the specified path.
    */
   static fullPath( path: string ): string;
   /**
    * Retrieves the storage space available on the device that supports a directory.
    * dirPath must be a path specification to an existing directory on the local filesystem. On Windows, UNC paths are fully supported. Symbolic links are supported on all platforms. If a symbolic link is specified, the returned value refers to the target device.
    * Returns the total number of bytes available on the device that supports the specified directory. The returned value takes into account any disk quotas that might apply to the user associated with the calling process.
    */
   static getAvailableSpace( dirPath: string ): number;
   /**
    * Returns true iff the file at path exists and the current user has read-only access to it.
    */
   static isReadOnly( path: string ): boolean;
   /**
    * Moves and/or renames a file.
    * filePath
    * Current path of the file to move or rename.
    * newFilePath
    * The new file path. If the directory in newFilePath is the same as in filePath, or if no directory is specified, the file is just renamed. If a different directory is specified, the file is also moved.
    * Warning: This function can only move or rename a file to stay in the same physical device. To move a file across devices, use the File.moveFile() static method instead.
    */
   static move( filePath: string, newFilePath: string ): void;
   /**
    * Moves a single file.
    * targetFilePath
    * Path to the target file, which must not exist. If the specified file exists, an Error exception will be thrown.
    * sourceFilePath
    * Path to the source file. This file must exist and must be different from the specified target file.
    * progressFunc
    * An optional function that will be called to provide progress information and the possibility of aborting the file move operation.
    * The specified function should have the following form:
    * Boolean progressFunc( Number totalBytes, Number currentBytes )
    * totalBytes is the total number of bytes being copied. currentBytes is the number of bytes already copied. The function must return true to continue, or false to abort the file move operation.
    * progressThis
    * If progressFunc is specified, this is an object reference that will be seen by the progressFunc function as its this object.
    * For file move operations within the same physical device, this function implements a simple rename operation. In these cases, the progressFunc object (if specified) receives a single call with the total file size in bytes in both arguments.
    * When a file is moved to a different device, this method first copies the source file to the target location using a routine equivalent to File.copy(). Only when the entire file contents have been transferred successfully, the source file is removed.
    * Along with the file contents, file access and modification times, as well as file access permissions, will be preserved by this function.
    * This function does not follow symbolic links. It does not move the file pointed to by a symbolic link, but the link itself. This is only relevant to platforms that support symbolic links (i.e., all of them but Windows).
    * If a progressFunc object is specified and it aborts the file move operation, this method throws an Error exception with the appropriate message. In that case, the source file is guaranteed to remain intact.
    */
   static moveFile( targetPath: string, sourcePath?: string, progressFunc?: Function, progressThis?: object ): void;
   /**
    * A synonym for File.openFileForReadWrite().
    */
   static openFile( filePath: string ): File;
   /**
    * Returns an open existing file at the specified path, ready for exclusive read/write access.
    */
   static openFileForReadWrite( path: string ): File;
   /**
    * Returns an open existing file at the specified path.
    * On Windows, the file is opened for shared read-only access (on UNIX and Linux, file access is handled automatically, so there is no need to define 'sharing modes').
    */
   static openFileForReading( path: string ): File;
   /**
    * Returns an open file at the specified path if it already exists, or a newly created file otherwise, ready for exclusive read/write access.
    */
   static openOrCreateFile( path: string ): File;
   /**
    * Prepends a prefix string to the current file name in the specified path. Returns the resulting path.
    */
   static prependToName( path: string, prefix: string ): string;
   /**
    * Reads the entire contents of an existing file at the specified path and returns them as a contiguous sequence of bytes stored in a ByteArray object.
    */
   static readFile( path?: string, DataTypeByteArray?: any ): ByteArray;
   /**
    * Reads the entire contents of an existing file at the specified path and returns them as a contiguous sequence of integer or floating point scalars stored in a TypedArray object.
    * The dataType argument must be one of:
    * DataType.BigInt64Array
    * DataType.BigUint64Array
    * DataType.Float32Array
    * DataType.Float64Array
    * DataType.Int16Array
    * DataType.Int32Array
    * DataType.Int8Array
    * DataType.Uint16Array
    * DataType.Uint32Array
    * DataType.Uint8Array
    * DataType.Uint8ClampedArray
    * DataType.Vector
    * If DataType.Vector is specified, the returned value will be an instance of the Vector class (which extends Float64Array).
    */
   static readFile( path: string, dataType: number ): Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array;
   /**
    * Reads a contiguous sequence of Unicode characters encoded as UTF-8 from an existing file at the specified path, and returns it as a String object.
    */
   static readFile( path: string, DataTypeUTF8String: any ): string;
   /**
    * Reads a contiguous sequence of Unicode characters encoded as UTF-16 from an existing file at the specified path, and returns it as a String object.
    */
   static readFile( path: string, DataTypeUTF16String: any ): string;
   /**
    * Reads all existing text lines from an existing file at the specified path as 8-bit strings (e.g., ISO 8859-1 or UTF-8 formats) and returns them as an array of String objects.
    * If specified, options must be an ORed combiation of ReadTextOption constants to control the way text lines are extracted and stored.
    * Returns a string list with all existing lines in the specified file. If the file is empty, an empty array is returned.
    * This routine automatically detects and processes line ending sequences characteristic of all supported platforms: UNIX (LF = 0x0A), Windows (CR+LF = 0x0D+0x0A), and legacy Mac (CR = 0x0D).
    */
   static readLines( path?: string, options?: number ): any[];
   /**
    * Reads the entire contents of an existing file at the specified path and returns them as Unicode plain text stored in a String object.
    * The specified file is assumed to store a plain text document encoded in UTF-8, ISO/IEC-8859-1 (or Latin-1), and other 8-bit encodings.
    */
   static readTextFile( path: string ): string;
   /**
    * Removes an existing file at the specified path.
    */
   static remove( path: string ): void;
   /**
    * Removes an existing empty directory at the specified dirPath.
    * The specified directory must be empty, or this function will fail throwing an Error exception.
    */
   static removeDirectory( dirPath: string ): void;
   /**
    * Returns true iff two files or directories, path1 and path2, are mounted on the same physical device.
    * This is relevant to some critical file operations. For example, moving a file on the same device is a simple and fast rename operation. However, moving a file across devices involves copying the entire file contents.
    * This function does not follow symbolic links. It does not consider mounted devices for files pointed to by symbolic links, but for the links themselves. This is only relevant to platforms that support symbolic links (i.e., all of them but Windows).
    */
   static sameDevice( path1: string, path2: string ): boolean;
   /**
    * Returns true iff two file path specifications, path1 and path2, refer to the same file on the local filesystem.
    * On UNIX and Linux platforms, this function compares the device and inode numbers reported by the st_dev and st_ino members of the stat structure, respectively. This pair of numbers uniquely identifies every file on the filesystem, irrespective of file names.
    * On Windows platforms, this function verifies the devices that support both files and, if they are the same, performs a case-insensitive comparison of the canonical absolute versions of the specified paths.
    * This function does not follow symbolic links. It does not consider mounted devices for files pointed to by symbolic links, but for the links themselves. This is only relevant to platforms that support symbolic links (i.e., all of them but Windows).
    */
   static sameFile( path1: string, path2: string ): boolean;
   /**
    * Returns a sanitized version of the specified file name.
    * Sanitization applies the following rules:
    * Illegal and control characters are replaced with white space characters: Illegal characters: / ? : * | " $
    * Unicode C0 control characters: 0x00-0x1f 0x7f
    * Unicode C1 control characters: 0x80-0x9f
    * Any sequences of multiple consecutive white space characters are replaced by single white space characters.
    * Sequences of multiple consecutive white space characters at the beginning and end of the file name (either those initially existing or resulting from illegal character replacement) are removed.
    * The illegal names . and .. (after possible trimming) cause this function to return an empty string.
    * This function can return an empty string if no legal sequence of characters can be found in the specified file name after sanitization.
    */
   static sanitizedName( name: string ): string;
   static searchDirectory( filePath?: string, recursive?: boolean ): any[];
   /**
    * Changes the access permissions of a file or directory.
    * path
    * Path to the existing file or directory whose permissions will be modified.
    * permissions
    * An ORed combination of file permission flags. See the FileFlag class for valid constants.
    * On UNIX and Linux platforms (FreeBSD, GNU Linux, macOS), the read, write and execution permissions can be specified separately for the owner user, for the owner group, and for the rest of users. On Windows, only generic read and write permissions can be set, and there are no execution permissions.
    */
   static setPermissions( path: string, permissions: number ): void;
   /**
    * Enables or disables read-only access to an existing file at the specified path.
    */
   static setReadOnly( path?: string, readOnly?: boolean ): void;
   /**
    * Returns a readable textual representation of a file size with automatic units conversion.
    * sizeInBytes
    * The file size in bytes.
    * precision
    * The number of decimal digits used to represent floating point numbers. The default value is 3.
    * alsoShowBytes
    * Whether to add the size in bytes to the string representation, irrespective of the units used. The default value is false.
    * Examples:
    * console.writeln( File.sizeAsString( 21771472 ) ); // 20.763 MiB
    * console.writeln( File.sizeAsString( 21771472, 2, true ) ); // 20.76 MiB (21771472 bytes)
    * console.writeln( File.sizeAsString( 4727, 4 ) ); // 4.6162 KiB
    */
   static sizeAsString( sizeInBytes?: bigint, precision?: number, alsoShowBytes?: boolean ): string;
   /**
    * Returns a nonexistent, randomly generated file name.
    * directory
    * Name of an existing directory where the generated file name is guaranteed to be unique. If empty or not specified, the current working directory of the calling process will be used.
    * count
    * Number of random characters in the generated file name. Must be at least five characters. The default value is eight characters.
    * prefix
    * An optional prefix that will be prepended to the generated file name.
    * postfix
    * An optional postfix that will be appended to the generated file name.
    * This method returns the full absolute path of a nonexistent file name generated by concatenation of count random characters. For compatibility with case-insensitive file systems (FAT, NTFS), only uppercase characters and decimal digits are used in the generated file name.
    * The returned file name is guaranteed to be unique on the specified directory (or on the current working directory of the calling process if no directory is specified) just after this function returns. Note that since a high-quality random number generator is used to select file name characters, there is no practical chance for a race condition by calling this function from several threads concurrently.
    */
   static uniqueFileName( directory?: string, count?: number, prefix?: string, postfix?: string ): string;
   /**
    * Converts a path from UNIX to Windows. Replaces all occurrences of the '/' UNIX separator with the '\' Windows separator. Returns the transformed string.
    */
   static unixPathToWindows( path: string ): string;
   /**
    * Converts a path from Windows to UNIX syntax. Replaces all occurrences of the '\' Windows separator with the '/' UNIX separator. Returns the transformed string.
    */
   static windowsPathToUnix( path: string ): string;
   /**
    * Creates a new file with the specified contents.
    * path
    * Path to the file that will be created.
    * data
    * Reference to a ByteArray object providing the contents that will be written to the newly created file.
    * Example:
    * function copyFile( targetFilePath, sourceFilePath )
    * {
    * File.writeFile( targetFilePath, File.readFile( sourceFilePath ) );
    * }
    * Warning: If a file already exists at the specified path, its previous contents will be lost after calling this function.
    */
   static writeFile( path: string, data: ByteArray ): void;
   /**
    * Creates a new file with the specified contents.
    * path
    * Path to the file that will be created.
    * data
    * Reference to a TypedArray object providing the contents that will be written to the newly created file. The elements of the array will be written as a contiguous sequence of scalars. The TypedArray type defines the size in bytes of each written element asnd hence the final file size, which will be equal to data.BYTES_PER_ELEMENT * data.length.
    * Warning: If a file already exists at the specified path, its previous contents will be lost after calling this function.
    */
   static writeFile( path: string, data: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): void;
   /**
    * Creates a new file and writes the specified Unicode string.
    * path
    * Path to the file that will be created.
    * data
    * Reference to a String object providing the contents that will be written to the newly created file.
    * dataType
    * Defines the Unicode encoding that will be used to write string characters. The two valid options are DataType.UTF8String (which is the default value) and DataType.UTF16String.
    * Warning: If a file already exists at the specified path, its previous contents will be lost after calling this function.
    */
   static writeFile( path: string, data?: string, dataType?: number ): void;
   /**
    * Creates a new file and writes the specified Unicode string encoded in UTF-8 format.
    * path
    * Path to the file that will be created.
    * text
    * Reference to a String object providing the contents that will be written to the newly created file. The string characters will be written encoded as UTF-8. If no code point outside the [0,255] range exists in the specified text string, the size of the newly created file will be equal to text.length.
    * Warning: If a file already exists at the specified path, its previous contents will be lost after calling this function.
    */
   static writeTextFile( path: string, text: string ): void;
   /**
    * True iff this file allows read access.
    */
   readonly canRead: boolean;
   /**
    * True iff this file allows write access.
    */
   readonly canWrite: boolean;
   /**
    * True iff the file pointer has been moved beyond the end of the file.
    */
   readonly isEOF: boolean;
   /**
    * True iff this object represents an open file.
    */
   readonly isOpen: boolean;
   /**
    * The file mode for this File object. See the FileMode class for supported file mode constants.
    */
   readonly mode: number;
   /**
    * The path of the file represented by this object. File paths are always absolute, full file paths.
    */
   readonly path: string;
   /**
    * The current file position, relative to the beginning of the file represented by this object.
    */
   position: number;
   /**
    * The length in bytes of this file.
    */
   size: number;
   /**
    * Closes an open file. If this file has not been opened, calling this method has no effect.
    * Returns a reference to this file.
    */
   close(  ): File;
   /**
    * Creates a file at the specified path for exclusive read/write access.
    * Returns a reference to this file.
    * Warning: If a file already exists at the same path, its contents will be truncated to zero length.
    */
   create( path: string ): File;
   /**
    * Creates a file at the specified path for exclusive write-only access.
    * Returns a reference to this file.
    * Warning: If a file already exists at the same path, its contents will be truncated to zero length.
    */
   createForWriting( path: string ): File;
   /**
    * Commits any pending write operations.
    * Returns a reference to this file.
    */
   flush(  ): File;
   /**
    * Opens or creates a file.
    * path
    * The path to the file to be opened or created.
    * mode
    * Desired file access, share (Windows only), and opening/creation mode. By default, an existing file will be opened for (exclusive on Windows) read-only access. For supported file open modes, see the FileMode core object.
    * Returns a reference to this file.
    * Warning: If a new file is created and a file already exists at the same path, its contents will be truncated to zero length.
    */
   open( path?: string, mode?: number ): File;
   /**
    * Opens an existing file at path for exclusive read/write access.
    * Returns a reference to this file.
    */
   openForReadWrite( path: string ): File;
   /**
    * Opens an existing file at the specified path for read-only access.
    * On Windows, the file is opened for shared read-only access. On UNIX and Linux, file access is handled automatically, so there is no need to define 'sharing modes'.
    * Returns a reference to this file.
    */
   openForReading( filePath: string ): File;
   /**
    * Opens a file at the specified path if it exists, or creates it otherwise. The file will be opened in exclusive read/write mode.
    * Returns a reference to this file.
    */
   openOrCreate( filePath: string ): File;
   /**
    * Writes the specified text string at the current position in this file. The data_type parameter can be specified to define the type of string that will be written. The two supported options are DataType.UTF8String and DataType.UTF16String. If this parameter is not specified, an UTF-8 string will be written by default.
    * Returns a reference to this file.
    */
   outText( text?: string, data_type?: number ): File;
   /**
    * Writes the specified text string at the current position in this file and appends a newline character. See File.outText() for more information.
    * Returns a reference to this file.
    */
   outTextLn( text?: string, data_type?: number ): File;
   /**
    * If the specified dataType corresponds to a scalar type (such as DataType.Boolean, DataType.Double, DataType.Int32, etc.), reads count objects of the specified type from the current position in this file and returns either a single object if count = 1, or an Array of objects if count > 1.
    * If the specified dataType corresponds to a typed array (such as DataType.Int32Array, DataType.Float64Array, etc.), reads a contiguous sequence of count scalars of the required type and returns a typed array of the same length and item type.
    */
   read( dataType?: number, count?: number ): object;
   /**
    * Reads a contiguous sequence of length bytes from the current file position and returns it as a ByteArray object.
    */
   read( DataTypeByteArray: any, length: number ): ByteArray;
   /**
    * Reads a contiguous sequence of length 64-bit floating point numbers from the current file position and returns it as a Vector object.
    */
   read( DataTypeVector: any, length: number ): Vector;
   /**
    * Reads a contiguous sequence of rows × cols 64-bit floating point numbers from the current file position and returns it as a Matrix object with the same dimensions.
    */
   read( DataTypeMatrix: any, rows: number, cols: number ): Matrix;
   /**
    * Moves the file pointer to the beginning of this file.
    * Returns a reference to this file.
    */
   rewind(  ): File;
   /**
    * Moves the file pointer.
    * dist
    * Distance to move in bytes.
    * mode
    * Seek mode. See the SeekMode class for valid modes. If not specified, the file pointer is moved dist bytes from its current position.
    * Returns the resulting pointer position measured from the file beginning.
    */
   seek( dist?: bigint, mode?: number ): bigint;
   /**
    * Moves the file pointer after the end of the file.
    * Returns the size of this file, that is, the absolute position of the last byte plus one.
    */
   seekEnd(  ): bigint;
   /**
    * Writes a single object of the specified data_type at the current file position. For supported data types, see the DataType class.
    * Returns a reference to this file.
    */
   write( arg0?: object, data_type?: number ): File;
}

declare class FileDialog {
   constructor();
   caption: string;
   filters: any[];
   initialPath: string;
   selectedFileExtension: string;
   execute(  ): boolean;
}

declare class FileDownload extends FileTransfer {
   constructor( url: string, filePath: string );
   readonly contentType: string;
}

declare class FileFind {
   constructor( path?: string );
   readonly attributes: number | null;
   readonly created: Date | null;
   readonly groupId: number | null;
   readonly isDirectory: boolean | null;
   readonly isFile: boolean | null;
   readonly isHidden: boolean | null;
   readonly isSymbolicLink: boolean | null;
   readonly isValid: boolean;
   readonly lastAccessed: Date | null;
   readonly lastModified: Date | null;
   readonly name: string | null;
   readonly numberOfLinks: number | null;
   readonly searchPath: string;
   readonly size: number | null;
   readonly timeCreated: Date | null;
   readonly userId: number | null;
   begin( path: string ): boolean;
   end(  ): void;
   next(  ): boolean;
}

declare class FileFormat {
   static readonly formats: any[];
   constructor( nameExtOrMime?: string, toRead?: boolean, toWrite?: boolean );
   constructor( format: FileFormat );
   readonly canEditPreferences: boolean;
   readonly canRead: boolean;
   readonly canReadIncrementally: boolean;
   readonly canStore16Bit: boolean;
   readonly canStore32Bit: boolean;
   readonly canStore64Bit: boolean;
   readonly canStore8Bit: boolean;
   readonly canStoreAlphaChannels: boolean;
   readonly canStoreColorFilterArrays: boolean;
   readonly canStoreComplex: boolean;
   readonly canStoreDComplex: boolean;
   readonly canStoreDisplayFunctions: boolean;
   readonly canStoreDouble: boolean;
   readonly canStoreFloat: boolean;
   readonly canStoreGrayscale: boolean;
   readonly canStoreICCProfiles: boolean;
   readonly canStoreImageProperties: boolean;
   readonly canStoreKeywords: boolean;
   readonly canStoreProperties: boolean;
   readonly canStoreRGBColor: boolean;
   readonly canStoreRGBWS: boolean;
   readonly canStoreResolution: boolean;
   readonly canStoreThumbnails: boolean;
   readonly canWrite: boolean;
   readonly canWriteIncrementally: boolean;
   readonly description: string;
   readonly fileExtensions: any[];
   readonly icon: Bitmap;
   readonly implementation: string;
   readonly isDeprecated: boolean;
   readonly mimeTypes: any[];
   readonly name: string;
   readonly smallIcon: Bitmap;
   readonly supportsCompression: boolean;
   readonly supportsMultipleImages: boolean;
   readonly supportsViewProperties: boolean;
   readonly version: number;
   editPreferences(  ): void;
   queryFormatStatus(  ): string;
}

declare class FileFormatInstance {
   constructor( format: FileFormat );
   readonly canReadIncrementally: boolean;
   readonly canWriteIncrementally: boolean;
   colorFilterArray: any[];
   displayFunction: any[];
   readonly filePath: string;
   readonly format: FileFormat;
   iccProfile: ByteArray;
   readonly imageFormatInfo: string;
   readonly imageProperties: any[];
   readonly isOpen: boolean;
   keywords: any[];
   readonly properties: any[];
   rgbws: RGBColorSystem;
   selectedImageIndex: number;
   thumbnail: Image;
   readonly wasInexactRead: boolean;
   readonly wasLossyWrite: boolean;
   close(  ): boolean;
   create( filePath?: string, hints?: string, numberOfImages?: number ): boolean;
   createImage( ImageDescription: any ): boolean;
   open( filePath?: string, hints?: string ): any[] | null;
   read( startRow: number, rowCount?: number, channel?: number ): Matrix | null;
   readImage( image: Image ): boolean;
   readImageProperty( id: string ): any | null;
   readProperty( id: string ): any | null;
   setImageId( id: string ): boolean;
   setOptions( ImageDescription: any ): boolean;
   write( buffer: Matrix, startRow?: number, channel?: number ): boolean;
   writeImage( image: Image ): boolean;
   writeImageProperty( id: string, Value?: any, type?: number ): boolean;
   writeProperty( id: string, Value?: any, type?: number ): boolean;
}

declare class FileInfo {
   constructor(  );
   constructor( path: string );
   constructor( src: FileInfo );
   readonly attributes: number;
   readonly completeSuffix: string;
   readonly directory: string;
   readonly drive: string;
   readonly exists: boolean;
   readonly extension: string;
   readonly groupId: number;
   readonly isDirectory: boolean;
   readonly isExecutable: boolean;
   readonly isFile: boolean;
   readonly isHidden: boolean;
   readonly isReadable: boolean;
   readonly isSymbolicLink: boolean;
   readonly isWritable: boolean;
   readonly lastAccessed: Date;
   readonly lastModified: Date;
   readonly name: string;
   readonly nameAndExtension: string;
   readonly nameAndSuffix: string;
   readonly numberOfHardLinks: number;
   readonly path: string;
   readonly size: number;
   readonly suffix: string;
   readonly symbolicLinkTarget: string;
   readonly timeCreated: Date;
   readonly userId: number;
   assign( src: FileInfo ): FileInfo;
   clear(  ): FileInfo;
   refresh( filePath?: string ): FileInfo;
}

declare class FileTransfer {
   constructor();
   readonly bytesTransferred: number;
   readonly isDownload: boolean;
   readonly isUpload: boolean;
   readonly localFilePath: string;
   readonly ok: boolean;
   readonly remoteURL: string;
   readonly responseCode: number;
   readonly totalSpeed: number;
   readonly totalTime: number;
   perform(  ): boolean;
}

declare class FileUpload extends FileTransfer {
   constructor( url: string, filePath: string );
}

declare class FileWatcher {
   constructor( parent?: Control );
   readonly directories: any[];
   readonly files: any[];
   addPath( path: string ): boolean;
   addPaths( paths: any[] ): boolean;
   clear(  ): boolean;
   removePath( path: string ): boolean;
   removePaths( paths: any[] ): boolean;
   onDirectoryChanged: ( dirPath: string ) => void;
   onFileChanged: ( filePath: string ) => void;
}

declare class Font {
   constructor( stdFamiliy?: number, size?: number, unit?: string );
   constructor( family?: string, size?: number, unit?: string );
   constructor( src: Font );
   static families( writingSystem?: number ): any[];
   static isMonospacedFont( family: string ): boolean;
   static isScalableFont( family: string ): boolean;
   static monospacedFamilies( writingSystem?: number ): any[];
   static scalableFamilies( writingSystem?: number ): any[];
   readonly ascent: number;
   bold: boolean;
   readonly descent: number;
   dtpPointSize: number;
   family: string;
   readonly height: number;
   readonly isExactMatch: boolean;
   italic: boolean;
   kerning: boolean;
   letterSpacing: number;
   readonly lineSpacing: number;
   readonly maxWidth: number;
   monospaced: boolean;
   overline: boolean;
   pixelSize: number;
   pointSize: number;
   stretchFactor: number;
   strikeOut: boolean;
   underline: boolean;
   unscaledPointSize: number;
   weight: number;
   wordSpacing: number;
   assign( src: Font ): Font;
   boundingRect( text: string ): Rect;
   isCharDefined( codePoint: number ): boolean;
   isCharDefined( char: string ): boolean;
   tightBoundingRect( text: string ): Rect;
   width( text: string ): number;
}

declare class Frame extends Control {
   constructor( parent?: Control );
   readonly borderWidth: number;
   frameStyle: number;
   lineWidth: number;
}

declare class GeodeticCoordinatesEditor extends Control {
   constructor( parent?: Control, longitude?: number, latitude?: number, altitude?: number, labelWidth?: number, editWidth?: number );
   altitude: number;
   height: number;
   readonly isEast: boolean;
   readonly isNorth: boolean;
   readonly isSouth: boolean;
   readonly isWest: boolean;
   latitude: number;
   longitude: number;
   onCoordinatesChanged: ( longitude: number, latitude: number, altitude: number ) => void;
}

declare class GetDirectoryDialog extends FileDialog {
   constructor(  );
   /**
    * Deprecated: Use GetDirectoryDialog.directoryPath instead.
    */
   readonly directory: string;
   readonly directoryPath: string;
}

declare class Global {
   /**
    * Deprecated: Use CoreApplication.appDirPath instead.
    */
   static readonly coreAppDirPath: string;
   /**
    * Deprecated: Use CoreApplication.baseDirPath instead.
    */
   static readonly coreBaseDirPath: string;
   /**
    * Deprecated: Use CoreApplication.binDirPath instead.
    */
   static readonly coreBinDirPath: string;
   /**
    * Deprecated: Use CoreApplication.colorDirPath instead.
    */
   static readonly coreColorDirPath: string;
   /**
    * Deprecated: Use CoreApplication.dirPath instead.
    */
   static readonly coreDirPath: string;
   /**
    * Deprecated: Use CoreApplication.docDirPath instead.
    */
   static readonly coreDocDirPath: string;
   /**
    * Deprecated: Use CoreApplication.etcDirPath instead.
    */
   static readonly coreEtcDirPath: string;
   /**
    * Deprecated: Use CoreApplication.filePath instead.
    */
   static readonly coreFilePath: string;
   /**
    * Deprecated: Use CoreApplication.programName instead.
    */
   static readonly coreId: string;
   /**
    * Deprecated: Use CoreApplication.includeDirPath instead.
    */
   static readonly coreIncludeDirPath: string;
   /**
    * Deprecated: Use CoreApplication.language instead.
    */
   static readonly coreLanguage: string;
   /**
    * Deprecated: Use CoreApplication.libDirPath instead.
    */
   static readonly coreLibDirPath: string;
   /**
    * Deprecated: Use CoreApplication.libraryDirPath instead.
    */
   static readonly coreLibraryDirPath: string;
   /**
    * Deprecated: Use CoreApplication.platform instead.
    */
   static readonly corePlatform: string;
   /**
    * Deprecated: Use CoreApplication.rscDirPath instead.
    */
   static readonly coreRscDirPath: string;
   /**
    * Deprecated: Use CoreApplication.srcDirPath instead.
    */
   static readonly coreSrcDirPath: string;
   /**
    * Deprecated: Use CoreApplication.versionBeta instead.
    */
   static readonly coreVersionBeta: number;
   /**
    * Deprecated: Use CoreApplication.versionBuild instead.
    */
   static readonly coreVersionBuild: number;
   /**
    * Deprecated: Use CoreApplication.versionCodename instead.
    */
   static readonly coreVersionCodename: string;
   /**
    * Deprecated: Use CoreApplication.versionLE instead.
    */
   static readonly coreVersionLE: boolean;
   /**
    * Deprecated: Use CoreApplication.versionMajor instead.
    */
   static readonly coreVersionMajor: number;
   /**
    * Deprecated: Use CoreApplication.versionMinor instead.
    */
   static readonly coreVersionMinor: number;
   /**
    * Deprecated: Use CoreApplication.versionRelease instead.
    */
   static readonly coreVersionRelease: number;
   /**
    * Deprecated: Use CoreApplication.versionRevision instead.
    */
   static readonly coreVersionRevision: number;
   /**
    * Deprecated: Use Runtime.jsArguments instead.
    */
   static readonly jsArguments: any[];
   /**
    * Deprecated: Use Runtime.jsScriptInformation instead.
    */
   static jsScriptInformation: string;
   /**
    * Deprecated: Use Runtime.jsScriptResult instead.
    */
   static jsScriptResult: boolean;
   /**
    * Deprecated: Use Runtime.jsVersion instead.
    */
   static readonly jsVersion: string;
   /**
    * Deprecated: Use CoreApplication.pclVersion instead.
    */
   static readonly pclId: string;
   /**
    * Deprecated: Use CoreApplication.pclVersionBeta instead.
    */
   static readonly pclVersionBeta: number;
   /**
    * Deprecated: Use CoreApplication.pclVersionBuild instead.
    */
   static readonly pclVersionBuild: number;
   /**
    * Deprecated: Use CoreApplication.pclVersionMajor instead.
    */
   static readonly pclVersionMajor: number;
   /**
    * Deprecated: Use CoreApplication.pclVersionMinor instead.
    */
   static readonly pclVersionMinor: number;
   /**
    * Deprecated: Use CoreApplication.pclVersionRelease instead.
    */
   static readonly pclVersionRelease: number;
   constructor();
   static cerr( text: string ): void;
   static cerrln( text: string ): void;
   static cflush(  ): void;
   static cout( text: string ): void;
   static coutln( text: string ): void;
   /**
    * Deprecated: Use System.cpuId() instead.
    */
   static cpuId( funcId?: number, subfuncId?: number ): [number, number, number, number];
   /**
    * Deprecated: Use System.cpuInfo() instead.
    */
   static cpuInfo(  ): { numberOfLogicalProcessors: number };
   static format( fmt: string, arg_: any ): string;
   /**
    * Deprecated: Don't use it in new code.
    */
   static gc( hardGC?: boolean ): void;
   /**
    * Deprecated: Use System.getEnvironmentVariable() instead.
    */
   static getEnvironmentVariable( varName: string ): string;
   /**
    * Deprecated: Use CoreApplication.loadResource() instead.
    */
   static loadResource( filePath?: string, rootPath?: string ): boolean;
   /**
    * Deprecated: Use String.matchesWildcardPattern() instead.
    */
   static matchesWildSpecification( what: string, wildSpec: string ): boolean;
   /**
    * Deprecated: Use System.msleep() instead.
    */
   static msleep( milliseconds: number ): void;
   /**
    * Deprecated: Use System.physicalMemoryStatus() instead.
    */
   static physicalMemoryStatus(  ): { totalBytes: number, availableBytes: number };
   /**
    * Deprecated: Use CoreApplication.processEvents() instead.
    */
   static processEvents( excludeUserInputEvents?: boolean, iterations?: number ): void;
   /**
    * Deprecated: Use System.replaceEnvironmentVariables() instead.
    */
   static replaceEnvironmentVariables( text: string ): string;
   /**
    * Deprecated: Use File.searchDirectory() instead.
    */
   static searchDirectory( filePath?: string, recursive?: boolean ): any[];
   /**
    * Deprecated: Use System.sleep() instead.
    */
   static sleep( seconds: number ): void;
   /**
    * Deprecated: Use System.offsetFromUTC() instead.
    */
   static systemOffsetFromUTC( dateString?: string ): number;
   /**
    * Deprecated: Use CoreApplication.unloadResource() instead.
    */
   static unloadResource( filePath?: string, rootPath?: string ): boolean;
}

declare class Graphics {
   constructor(  );
   constructor( arg0: Bitmap );
   constructor( arg0: SVG );
   constructor( PDF: any );
   constructor( arg0: Control );
   antialiasing: boolean;
   backgroundBrush: Brush;
   brush: Brush;
   brushOrigin: Point;
   clipRect: Rect;
   clipping: boolean;
   compositionOperator: number;
   font: Font;
   readonly isPainting: boolean;
   opacity: number;
   pen: Pen;
   smoothInterpolation: boolean;
   textAntialiasing: boolean;
   transformationEnabled: boolean;
   transformationMatrix: Matrix;
   transparentBackground: boolean;
   begin( arg0: Bitmap ): Graphics;
   begin( arg0: SVG ): Graphics;
   begin( PDF: any ): Graphics;
   begin( arg0: Control ): Graphics;
   drawArc( center: Point, radius: number, startRadians: number, spanRadians: number ): Graphics;
   drawArc( cx: number, cy: number, radius: number, startRadians: number, spanRadians: number ): Graphics;
   drawBitmap( p: Point, bmp: Bitmap ): Graphics;
   drawBitmap( x: number, y: number, bmp: Bitmap ): Graphics;
   drawBitmapRect( p: Point, bmp: Bitmap, r: Rect ): Graphics;
   drawBitmapRect( x: number, y: number, bmp: Bitmap, r: Rect ): Graphics;
   drawBitmapRect( x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number ): Graphics;
   drawChord( center: Point, radius: number, startRadians: number, spanRadians: number ): Graphics;
   drawChord( cx: number, cy: number, radius: number, startRadians: number, spanRadians: number ): Graphics;
   drawCircle( center: Point, radius: number ): Graphics;
   drawCircle( xc: number, yc: number, radius: number ): Graphics;
   drawEllipse( r: Rect ): Graphics;
   drawEllipse( x0: number, y0: number, x1: number, y1: number ): Graphics;
   drawEllipticArc( r: Rect, startRadians: number, spanRadians: number ): Graphics;
   drawEllipticArc( x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number ): Graphics;
   drawEllipticChord( r: Rect, startRadians: number, spanRadians: number ): Graphics;
   drawEllipticChord( x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number ): Graphics;
   drawEllipticPie( r: Rect, startRadians: number, spanRadians: number ): Graphics;
   drawEllipticPie( x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number ): Graphics;
   drawLine( p1: Point, p2: Point ): Graphics;
   drawLine( x1: number, y1: number, x2: number, y2: number ): Graphics;
   drawPie( center: Point, radius: number, startRadians: number, spanRadians: number ): Graphics;
   drawPie( cx: number, cy: number, radius: number, startRadians: number, spanRadians: number ): Graphics;
   drawPoint( p: Point ): Graphics;
   drawPoint( x: number, y: number ): Graphics;
   drawPolygon( points?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, fillRule?: number ): Graphics;
   drawPolyline( points: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): Graphics;
   drawRect( r: Rect ): Graphics;
   drawRect( x0: number, y0: number, x1: number, y1: number ): Graphics;
   drawRoundedRect( r?: Rect, rx?: number, ry?: number ): Graphics;
   drawRoundedRect( x0: number, y0: number, x1: number, y1?: number, rx?: number, ry?: number ): Graphics;
   drawScaledBitmap( r: Rect, bmp: Bitmap ): Graphics;
   drawScaledBitmap( x0: number, y0: number, x1: number, y1: number, bmp: Bitmap ): Graphics;
   drawScaledBitmapRect( rdst: Rect, bmp: Bitmap, rsrc: Rect ): Graphics;
   drawScaledBitmapRect( rdst: Rect, bmp: Bitmap, sx0: number, sy0: number, sx1: number, sy1: number ): Graphics;
   drawScaledBitmapRect( dx0: number, dy0: number, dx1: number, dy1: number, bmp: Bitmap, sx0: number, sy0: number, sx1: number, sy1: number ): Graphics;
   drawText( p: Point, text: string ): Graphics;
   drawText( x: number, y: number, text: string ): Graphics;
   drawTextRect( r: Rect, text?: string, align?: number ): Graphics;
   drawTextRect( x0: number, y0: number, x1: number, y1: number, text?: string, align?: number ): Graphics;
   drawTiledBitmap( r: Rect, bmp?: Bitmap, origin?: Point ): Graphics;
   drawTiledBitmap( x0: number, y0: number, x1: number, y1: number, bmp?: Bitmap, ox?: number, oy?: number ): Graphics;
   end(  ): Graphics;
   eraseChord( center: Point, radius: number, startRadians: number, spanRadians: number ): Graphics;
   eraseChord( cx: number, cy: number, radius: number, startRadians: number, spanRadians: number ): Graphics;
   eraseCircle( center: Point, radius: number ): Graphics;
   eraseCircle( xc: number, yc: number, radius: number ): Graphics;
   eraseEllipse( r: Rect ): Graphics;
   eraseEllipse( x0: number, y0: number, x1: number, y1: number ): Graphics;
   eraseEllipticChord( r: Rect, startRadians: number, spanRadians: number ): Graphics;
   eraseEllipticChord( x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number ): Graphics;
   eraseEllipticPie( r: Rect, startRadians: number, spanRadians: number ): Graphics;
   eraseEllipticPie( x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number ): Graphics;
   erasePie( center: Point, radius: number, startRadians: number, spanRadians: number ): Graphics;
   erasePie( cx: number, cy: number, radius: number, startRadians: number, spanRadians: number ): Graphics;
   erasePolygon( points?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, fillRule?: number ): Graphics;
   eraseRect( r: Rect ): Graphics;
   eraseRect( x0: number, y0: number, x1: number, y1: number ): Graphics;
   eraseRoundedRect( r?: Rect, rx?: number, ry?: number ): Graphics;
   eraseRoundedRect( x0: number, y0: number, x1: number, y1?: number, rx?: number, ry?: number ): Graphics;
   fillChord( center: Point, radius: number, startRadians: number, spanRadians?: number, brush?: Brush ): Graphics;
   fillChord( cx: number, cy: number, radius: number, startRadians: number, spanRadians?: number, brush?: Brush ): Graphics;
   fillCircle( center: Point, radius?: number, brush?: Brush ): Graphics;
   fillCircle( xc: number, yc: number, radius?: number, brush?: Brush ): Graphics;
   fillEllipse( r?: Rect, brush?: Brush ): Graphics;
   fillEllipse( x0: number, y0: number, x1: number, y1?: number, brush?: Brush ): Graphics;
   fillEllipticChord( r: Rect, startRadians: number, spanRadians?: number, brush?: Brush ): Graphics;
   fillEllipticChord( x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians?: number, brush?: Brush ): Graphics;
   fillEllipticPie( r: Rect, startRadians: number, spanRadians?: number, brush?: Brush ): Graphics;
   fillEllipticPie( x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians?: number, brush?: Brush ): Graphics;
   fillPie( center: Point, radius: number, startRadians: number, spanRadians?: number, brush?: Brush ): Graphics;
   fillPie( cx: number, cy: number, radius: number, startRadians: number, spanRadians?: number, brush?: Brush ): Graphics;
   fillPolygon( points?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, brush?: Brush, fillRule?: number ): Graphics;
   fillRect( r?: Rect, brush?: Brush ): Graphics;
   fillRect( x0: number, y0: number, x1: number, y1?: number, brush?: Brush ): Graphics;
   fillRoundedRect( r?: Rect, rx?: number, ry?: number, brush?: Brush ): Graphics;
   fillRoundedRect( x0: number, y0: number, x1: number, y1?: number, rx?: number, ry?: number, brush?: Brush ): Graphics;
   multiplyTransformation( M: Matrix ): Graphics;
   popState(  ): Graphics;
   pushState(  ): Graphics;
   resetTransformation(  ): Graphics;
   rotateTransformation( angle: number ): Graphics;
   scaleTransformation( sxy: number ): Graphics;
   scaleTransformation( sx: number, sy: number ): Graphics;
   shearTransformation( dxy: number ): Graphics;
   shearTransformation( dx: number, dy: number ): Graphics;
   strokeChord( center: Point, radius: number, startRadians: number, spanRadians?: number, pen?: Pen ): Graphics;
   strokeChord( cx: number, cy: number, radius: number, startRadians: number, spanRadians?: number, pen?: Pen ): Graphics;
   strokeCircle( center: Point, radius?: number, pen?: Pen ): Graphics;
   strokeCircle( xc: number, yc: number, radius?: number, pen?: Pen ): Graphics;
   strokeEllipse( r?: Rect, pen?: Pen ): Graphics;
   strokeEllipse( x0: number, y0: number, x1: number, y1?: number, pen?: Pen ): Graphics;
   strokeEllipticChord( r: Rect, startRadians: number, spanRadians?: number, pen?: Pen ): Graphics;
   strokeEllipticChord( x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians?: number, pen?: Pen ): Graphics;
   strokeEllipticPie( r: Rect, startRadians: number, spanRadians?: number, pen?: Pen ): Graphics;
   strokeEllipticPie( x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians?: number, pen?: Pen ): Graphics;
   strokePie( center: Point, radius: number, startRadians: number, spanRadians?: number, pen?: Pen ): Graphics;
   strokePie( cx: number, cy: number, radius: number, startRadians: number, spanRadians?: number, pen?: Pen ): Graphics;
   strokePolygon( points?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, pen?: Pen ): Graphics;
   strokeRect( r?: Rect, pen?: Pen ): Graphics;
   strokeRect( x0: number, y0: number, x1: number, y1?: number, pen?: Pen ): Graphics;
   strokeRoundedRect( r?: Rect, rx?: number, ry?: number, pen?: Pen ): Graphics;
   strokeRoundedRect( x0: number, y0: number, x1: number, y1?: number, rx?: number, ry?: number, pen?: Pen ): Graphics;
   textRect( r: Rect, text?: string, align?: number ): Rect;
   textRect( x0: number, y0: number, x1: number, y1: number, text?: string, align?: number ): Rect;
   transformed( x: number, y: number ): Point;
   transformed( p: Point ): Point;
   translateTransformation( dx: number, dy: number ): Graphics;
   translateTransformation( p: Point ): Graphics;
}

declare class GridInterpolation {
   constructor(  );
   constructor( r: Rect, S?: SurfaceSpline, delta?: number, verbose?: boolean );
   constructor( r: Rect, S?: SurfacePolynomial, delta?: number, verbose?: boolean );
   constructor( r: Rect, S?: ShepardInterpolation, delta?: number, verbose?: boolean );
   constructor( GridInterpolation: any );
   readonly delta: number;
   readonly isValid: boolean;
   readonly referenceRect: Rect;
   assign( GridInterpolation: any ): GridInterpolation;
   clear(  ): GridInterpolation;
   evaluate( p: Point ): number;
   evaluate( x: number, y: number ): number;
   evaluate( points: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): Float64Array;
   initialize( r: Rect, S?: SurfaceSpline, delta?: number, verbose?: boolean ): GridInterpolation;
   initialize( r: Rect, S?: SurfacePolynomial, delta?: number, verbose?: boolean ): GridInterpolation;
   initialize( r: Rect, S?: ShepardInterpolation, delta?: number, verbose?: boolean ): GridInterpolation;
}

declare class GroupBox extends Control {
   constructor( parent?: Control );
   checked: boolean;
   title: string;
   titleCheckBox: boolean;
   onCheck: ( checked: boolean ) => void;
}

declare class Histogram {
   constructor(  );
   constructor( resolution: number );
   constructor( Histogram: any );
   constructor( image: Image );
   readonly entropy: number;
   readonly isEmpty: boolean;
   readonly lastLevel: number;
   readonly length: number;
   readonly normalizedPeakLevel: number;
   readonly peakCount: number;
   readonly peakLevel: number;
   resolution: number;
   readonly totalCount: number;
   assign( Histogram: any ): Histogram;
   clipHigh( count: bigint ): number;
   clipLow( count: bigint ): number;
   count( level: number ): number;
   generate( image: Image ): Histogram;
   histogramLevel( normalizedLevel: number ): number;
   normalizedClipHigh( count: bigint ): number;
   normalizedClipLow( count: bigint ): number;
   normalizedLevel( level: number ): number;
   resample( Histogram: any ): Histogram;
   toArray(  ): any[];
   toFloat64Array(  ): Float64Array;
   toUint64Array(  ): BigUint64Array;
}

declare class HorizontalSizer extends Sizer {
   constructor(  );
   constructor(  );
   constructor(  );
}

declare class HorizontalSlider extends Slider {
   constructor( parent?: Control );
   constructor( parent?: Control );
   constructor( parent?: Control );
}

declare class Image {
   constructor(  );
   constructor( src: Image );
   constructor( width: number, height?: number, numberOfChannels?: number, colorSpace?: number, bitsPerSample?: number, sampleType?: number );
   constructor( src: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, width: number, height?: number, numberOfChannels?: number, colorSpace?: number );
   static CPSM( a: Image, b: Image ): Image;
   static PCM( a: Image, b: Image ): Image;
   static crossPowerSpectrumMatrix( a: Image, b: Image ): Image;
   static fileExtensionsForMimeType( mimeType: string ): any[];
   static mimeTypesForFileExtension( pathOrExt: string ): any[];
   static newComplexImage( bitsPerSample?: number ): Image;
   static newFloatImage( bitsPerSample?: number ): Image;
   static newUIntImage( bitsPerSample?: number ): Image;
   static phaseCorrelationMatrix( a: Image, b: Image ): Image;
   readonly bitsPerSample: number;
   readonly bounds: Rect;
   colorSpace: number;
   firstSelectedChannel: number;
   readonly hasAlphaChannels: boolean;
   readonly height: number;
   highRangeClippingEnabled: boolean;
   interpolation: number;
   interpolationClamping: number;
   interpolationQuality: number;
   interpolationSmoothness: number;
   interpolationXRadius: number;
   interpolationYRadius: number;
   readonly isColor: boolean;
   readonly isComplex: boolean;
   readonly isEmpty: boolean;
   readonly isGrayscale: boolean;
   readonly isInteger: boolean;
   readonly isReadOnly: boolean;
   readonly isReal: boolean;
   readonly isStatusCompleted: boolean;
   readonly isStatusInitialized: boolean;
   lastSelectedChannel: number;
   lowRangeClippingEnabled: boolean;
   readonly numberOfAlphaChannels: number;
   readonly numberOfAlphaSamples: number;
   readonly numberOfChannels: number;
   readonly numberOfNominalChannels: number;
   readonly numberOfNominalSamples: number;
   readonly numberOfPixels: number;
   readonly numberOfSamples: number;
   readonly numberOfSelectedChannels: number;
   readonly numberOfSelectedPixels: number;
   readonly numberOfSelectedSamples: number;
   rangeClipHigh: number;
   rangeClipLow: number;
   rangeClippingEnabled: boolean;
   readonly sampleType: number;
   selectedChannel: number;
   selectedPoint: Point;
   selectedRect: Rect;
   selectionPoint: Point;
   readonly statusCount: number;
   statusEnabled: boolean;
   statusInfo: string;
   statusInitializationEnabled: boolean;
   readonly statusTotal: number;
   readonly width: number;
   BMV( center?: number, beta?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   BMV( center?: number, beta?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   BWMV( center?: number, sigma?: number, k?: number, reducedLength?: boolean, rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   BWMV( center?: number, sigma?: number, k?: number, reducedLength?: boolean, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   FFT( centered?: boolean ): Image;
   MAD( center?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   MAD( center?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   MLT( numberOfLayers?: number, scalingSequence?: number, layerState?: any[] ): any[];
   MMT( numberOfLayers?: number, scalingSequence?: number, layerState?: any[] ): any[];
   MWT( numberOfLayers?: number, scalingSequence?: number, layerState?: any[], threshold?: number ): any[];
   Qn( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   Qn( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   Sn( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   Sn( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   aTrousWaveletTransform( kernel: Matrix | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], numberOfLayers?: number, scalingSequence?: number, layerState?: any[] ): any[];
   aTrousWaveletTransform( rowVector: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], colVector: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], numberOfLayers?: number, scalingSequence?: number, layerState?: any[] ): any[];
   advanceStatus( count?: bigint ): Image;
   allocate( width: number, height?: number, numberOfChannels?: number, colorSpace?: number ): Image;
   apply( value?: number | Complex, op?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): Image;
   apply( value?: number | Complex, op?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Image;
   apply( src?: Image, op?: number, pos?: Point, channel?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): Image;
   apply( src?: Image, op?: number, pos?: Point, channel?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Image;
   applyDisplayFunction( dp: any[] ): Image;
   applyDisplayFunction( m?: Vector, c0?: Vector, c1?: Vector, r0?: Vector, r1?: Vector ): Image;
   assign( src?: Image, rect?: Rect, firstChannel?: number, lastChannel?: number ): Image;
   averageAbsoluteDeviation( center?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   averageAbsoluteDeviation( center?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   avgDev( center?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   avgDev( center?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   bendMidvariance( center?: number, beta?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   bendMidvariance( center?: number, beta?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   binarize( threshold?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): Image;
   binarize( threshold?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Image;
   biweightMidvariance( center?: number, sigma?: number, k?: number, reducedLength?: boolean, rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   biweightMidvariance( center?: number, sigma?: number, k?: number, reducedLength?: boolean, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   blend( bmp?: Bitmap, rect?: Rect ): Image;
   blend( bmp: Bitmap, pos?: Point, rect?: Rect ): Image;
   blend( bmp: Bitmap, x0: any, y0: any, x1: any, y1: any ): Image;
   blend( bmp: Bitmap, x: any, y: any, x0: any, y0: any, x1: any, y1: any ): Image;
   canPopSelections(  ): boolean;
   completeStatus(  ): Image;
   computeAutoStretch( center?: Vector, sigma?: Vector, clip?: number, targetBkg?: number, linkedRGB?: boolean ): any[];
   convolve( kernel?: Matrix | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], highPassMode?: number, thr0?: number, thr1?: number, interlacing?: number ): Image;
   convolveFFT( respFunc: Matrix | any[] | Image ): Image;
   convolveSeparable( rowVector: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], colVector?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], highPassMode?: number, interlacing?: number ): Image;
   copyStatus( src: Image ): Image;
   count( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   count( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   createAlphaChannels( count: number ): Image;
   crop( fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   crop( fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   cropBy( left: number, top: number, right: number, bottom?: number, fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   cropBy( left: number, top: number, right: number, bottom: number, fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   cropTo( x0: number, y0: number, x1: number, y1?: number, fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   cropTo( x0: number, y0: number, x1: number, y1: number, fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   cropTo( rect?: Rect, fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   cropTo( rect: Rect, fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   deleteAlphaChannel( channel: number ): Image;
   deleteAlphaChannels(  ): Image;
   fastFourierTransform( centered?: boolean ): Image;
   fill( value?: number | Complex, rect?: Rect, firstChannel?: number, lastChannel?: number ): Image;
   fill( value?: number | Complex, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Image;
   fourierTransform( centered?: boolean ): Image;
   free(  ): Image;
   getIntensity( I?: Image, rect?: Rect ): Image;
   getIntensity( I?: Image, x0?: number, y0?: number, x1?: number, y1?: number ): Image;
   getLightness( L?: Image, rect?: Rect ): Image;
   getLightness( L?: Image, x0?: number, y0?: number, x1?: number, y1?: number ): Image;
   getLuminance( Y?: Image, rect?: Rect ): Image;
   getLuminance( Y?: Image, x0?: number, y0?: number, x1?: number, y1?: number ): Image;
   getSamples( samples?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], rect?: Rect, channel?: number ): Image;
   getSamples( samples?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], x0?: number, y0?: number, x1?: number, y1?: number, channel?: number ): Image;
   initializeStatus( info: string, count: number ): Image;
   interpolate( x: number, y?: number, channel?: number ): number;
   interpolate( p?: Point, channel?: number ): number;
   inverseATrousWaveletTransform( layers: any[] ): Image;
   inverseFFT( centered?: boolean ): Image;
   inverseFastFourierTransform( centered?: boolean ): Image;
   inverseFourierTransform( centered?: boolean ): Image;
   inverseMLT( layers: any[] ): Image;
   inverseMMT( layers: any[] ): Image;
   inverseMWT( layers: any[] ): Image;
   inverseMedianWaveletTransform( layers: any[] ): Image;
   inverseMultiscaleLinearTransform( layers: any[] ): Image;
   inverseMultiscaleMedianTransform( layers: any[] ): Image;
   inverseMultiscaleTransform( layers: any[] ): Image;
   inverseStarletTransform( layers: any[] ): Image;
   invert( ref?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): Image;
   invert( ref?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Image;
   logPolarTransform( startAngle?: number, endAngle?: number ): Image;
   maximum( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   maximum( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   maximumPosition( rect?: Rect, firstChannel?: number, lastChannel?: number ): Point;
   maximumPosition( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Point;
   mean( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   mean( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   meanOfSquares( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   meanOfSquares( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   median( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   median( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   medianAbsoluteDeviation( center?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   medianAbsoluteDeviation( center?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   medianWaveletTransform( numberOfLayers?: number, scalingSequence?: number, layerState?: any[], threshold?: number ): any[];
   minimum( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   minimum( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   minimumPosition( rect?: Rect, firstChannel?: number, lastChannel?: number ): Point;
   minimumPosition( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Point;
   mirrorHorizontal(  ): Image;
   mirrorVertical(  ): Image;
   mmtBackgroundResidual( scale?: number ): Float32Array;
   modulus( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   modulus( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   morphologicalTransformation( operator: number, structure?: any[], thr0?: number, thr1?: number, interlacing?: number ): Image;
   multiscaleLinearTransform( numberOfLayers?: number, scalingSequence?: number, layerState?: any[] ): any[];
   multiscaleMedianTransform( numberOfLayers?: number, scalingSequence?: number, layerState?: any[] ): any[];
   noiseKSigma( j?: number, k?: number, eps?: number, maxIter?: number ): [number, number];
   noiseMRS( numberOfLayers?: number, sigma?: number, k?: number ): [number, number];
   norm( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   norm( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   normalize( lower?: number, upper?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): Image;
   normalize( lower?: number, upper?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Image;
   onPixelDataInvalid( receiver: object, handler: Function ): void;
   orderStatistic( k: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   orderStatistic( k: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   pixelData( channel?: number ): ArrayBuffer | null;
   polarTransform( startAngle?: number, endAngle?: number ): Image;
   popSelections(  ): Image;
   pushSelections(  ): Image;
   readRawFile( filePath: string ): Image;
   render( zoomLevel?: number, enableTransparency?: any, fast?: any ): Bitmap;
   resample( scale: number ): Image;
   resample( sx: number, sy?: number, mode?: number, absMode?: number ): Image;
   rescale( lower?: number, upper?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): Image;
   rescale( lower?: number, upper?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Image;
   resetChannelSelection(  ): Image;
   resetRectSelection(  ): Image;
   resetSelections(  ): Image;
   rotate( angle?: number, cx?: number, cy?: number, fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   rotate( angle?: number, cx?: number, cy?: number, fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   rotate( angle?: number, center?: Point, fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   rotate( angle?: number, center?: Point, fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   rotate180(  ): Image;
   rotate90ccw(  ): Image;
   rotate90cw(  ): Image;
   rotateUnclipped( angle?: number, fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   rotateUnclipped( angle: number, fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   sample( p?: Point, channel?: number ): number | Complex;
   sample( x: number, y?: number, channel?: number ): number | Complex;
   setAbs( rect?: Rect, firstChannel?: number, lastChannel?: number ): Image;
   setAbs( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Image;
   setLightness( L?: Image, pos?: Point, rect?: Rect ): Image;
   setLightness( L?: Image, pos?: Point, x0?: number, y0?: number, x1?: number, y1?: number ): Image;
   setLightness( L?: Image, x?: number, y?: number, x0?: number, y0?: number, x1?: number, y1?: number ): Image;
   setLuminance( Y?: Image, pos?: Point, rect?: Rect ): Image;
   setLuminance( Y?: Image, pos?: Point, x0?: number, y0?: number, x1?: number, y1?: number ): Image;
   setLuminance( Y?: Image, x?: number, y?: number, x0?: number, y0?: number, x1?: number, y1?: number ): Image;
   setSample( scalar: number | Complex, p?: Point, channel?: number ): Image;
   setSample( scalar: number | Complex, x: number, y?: number, channel?: number ): Image;
   setSamples( samples?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], rect?: Rect, channel?: number ): Image;
   setSamples( samples?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], x0?: number, y0?: number, x1?: number, y1?: number, channel?: number ): Image;
   shift( fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   shift( fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   shiftBy( dx: number, dy?: number, fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   shiftBy( dx: number, dy: number, fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   shiftTo( x: number, y?: number, fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   shiftTo( x: number, y: number, fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   shiftTo( p?: Point, fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   shiftTo( p: Point, fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   standardDeviation( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   standardDeviation( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   starletTransform( kernel: Matrix | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], numberOfLayers?: number, scalingSequence?: number, layerState?: any[] ): any[];
   starletTransform( rowVector: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], colVector: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], numberOfLayers?: number, scalingSequence?: number, layerState?: any[] ): any[];
   stdDev( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   stdDev( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   sumOfSquares( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   sumOfSquares( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   swap( other: Image ): Image;
   toFloat32Array( rect?: Rect, channel?: number ): Float32Array;
   toFloat32Array( x0?: number, y0?: number, x1?: number, y1?: number, channel?: number ): Float32Array;
   toFloat64Array( rect?: Rect, channel?: number ): Float64Array;
   toFloat64Array( x0?: number, y0?: number, x1?: number, y1?: number, channel?: number ): Float64Array;
   toMatrix( rect?: Rect, channel?: number ): Matrix;
   toMatrix( x0?: number, y0?: number, x1?: number, y1?: number, channel?: number ): Matrix;
   toUint16Array( rect?: Rect, channel?: number ): Uint16Array;
   toUint16Array( x0?: number, y0?: number, x1?: number, y1?: number, channel?: number ): Uint16Array;
   toUint32Array( rect?: Rect, channel?: number ): Uint32Array;
   toUint32Array( x0?: number, y0?: number, x1?: number, y1?: number, channel?: number ): Uint32Array;
   toUint8Array( rect?: Rect, channel?: number ): Uint8Array;
   toUint8Array( x0?: number, y0?: number, x1?: number, y1?: number, channel?: number ): Uint8Array;
   toUint8ClampedArray( rect?: Rect, channel?: number ): Uint8ClampedArray;
   toUint8ClampedArray( x0?: number, y0?: number, x1?: number, y1?: number, channel?: number ): Uint8ClampedArray;
   translate( dx: number, dy?: number, fillValues?: Vector | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): Image;
   translate( dx: number, dy: number, fill_0?: number, fill_1?: number, arg_?: any, fill_n?: number ): Image;
   truncate( lower?: number, upper?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): Image;
   truncate( lower?: number, upper?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): Image;
   twoSidedAverageAbsoluteDeviation( center?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedAverageAbsoluteDeviation( center?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedAvgDev( center?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedAvgDev( center?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedBWMV( center?: number, sigma?: any[] | number, k?: number, reducedLength?: boolean, rect?: Rect, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedBWMV( center?: number, sigma?: any[] | number, k?: number, reducedLength?: boolean, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedBiweightMidvariance( center?: number, sigma?: any[] | number, k?: number, reducedLength?: boolean, rect?: Rect, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedBiweightMidvariance( center?: number, sigma?: any[] | number, k?: number, reducedLength?: boolean, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedMAD( center?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedMAD( center?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedMedianAbsoluteDeviation( center?: number, rect?: Rect, firstChannel?: number, lastChannel?: number ): any[];
   twoSidedMedianAbsoluteDeviation( center?: number, x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): any[];
   variance( rect?: Rect, firstChannel?: number, lastChannel?: number ): number;
   variance( x0?: number, y0?: number, x1?: number, y1?: number, firstChannel?: number, lastChannel?: number ): number;
   writeRawFile( filePath?: string, compression?: number ): Image;
}

declare class ImageDescription {
   constructor(  );
   constructor( ImageDescription: any );
   readonly aperture: number;
   bitsPerSample: number;
   readonly cfaType: string;
   readonly colorSpace: number;
   complexSample: boolean;
   embedColorFilterArray: boolean;
   embedDisplayFunction: boolean;
   embedICCProfile: boolean;
   embedPreviewRects: boolean;
   embedProcessingHistory: boolean;
   embedProperties: boolean;
   embedRGBWS: boolean;
   embedThumbnail: boolean;
   readonly exposure: number;
   readonly focalLength: number;
   readonly height: number;
   readonly id: string;
   ieeefpSampleFormat: boolean;
   imageType: number;
   readonly isoSpeed: number;
   readonly lowerRange: number;
   metricResolution: boolean;
   readonly numberOfChannels: number;
   signedIntegers: boolean;
   readonly supported: boolean;
   readonly upperRange: number;
   readonly width: number;
   xResolution: number;
   yResolution: number;
   assign( ImageDescription: any ): ImageDescription;
}

/**
 * Thanks to this class, you can access image pixels directly at nearly native speed without any intermediation from C++/JavaScript bridge code. ImageIterator uses an extremely nice V8 feature that allows us to create a typed array object whose underlying ArrayBuffer has direct access to the pixel data in a channel of the image, in a completely transparent way. An ImageIterator object behaves like a Matrix instance, where matrix rows and columns allow you to address pixels by their image coordinates using standard array subscript notation.
 * Consider the following example script:
 * This script applies an automatic midtones transfer function (MTF) to all pixel samples of the active image, channel by channel. Of course, the same operation can be implemented in faster ways, but this is a good example to demonstrate how the ImageIterator class works and the performance to be expected. With this example as a starting point, you have all the information you need to start applying image iterators in your scripts to implement sophisticated image processing algorithms.
 * There is a very important aspect of image iterators that must be pointed out. With image iterators, you access the actual pixel data, not an abstraction, unlike other pixel access methods of the Image class, such as Image.sample() and Image.setSample(). For real-valued images, you can use image iterators very easily because the pixel sample values are either 32-bit or 64-bit floating-point numbers. Both data types naturally match the standard JavaScript Number type. The same happens with complex-valued images, where image iterators provide access to a succession of alternate real and imaginary floating-point components.
 * However, if the image stores integer pixel data, you must take into account the image's integer format's nominal range. For example, for a 16-bit integer image, pixel values are in the [0,65535] range, where 0 represents black and 65535=216-1 represents white (note that all integer images store unsigned values in PixInsight). The following script is a modification of the previous one that takes this possibility into account in an optimal way:
 * Note the use of the ImageIterator.toReal() and ImageIterator.toSample() methods. The first function converts a pixel sample to a Number value in the range [0,1]. The second one converts from [0,1] to the image's native range. Of course, these conversions have a computational cost when used in the inner loop of a pixel-by-pixel transformation. That's why we have written two separate functions: one specific to floating-point data, and the other for integer data.
 */
declare class ImageIterator extends Array {
   /**
    * Constructs a new ImageIterator object.
    * image
    * The iterated image.
    * channel
    * The zero-based index of the iterated image channel. For monochrome grayscale images, zero corresponds to the nominal gray channel, and any value > 0 corresponds to an alpha channel. For color images, the indices 0, 1, and 2 correspond to the nominal red, green, and blue image components, and any value > 2 corresponds to an alpha channel. If this parameter is < 0, the currently selected channel will be used (see Image.selectedChannel).
    * The specified image must be valid, that is, non-empty, and the specified channel must exist. Otherwise, an Error exception will be thrown.
    * For images belonging to View objects, a read-only ImageIterator object can be constructed if the View is not aware of a new process. See the isReadOnly property for detailed information.
    */
   constructor( image?: Image, channel?: number );
   constructor( image?: Image, channel?: number );
   /**
    * The number of bits per pixel sample. The value of this property can be 8, 16, 32, or 64, depending on the pixel format of the iterated image.
    */
   readonly bitsPerSample: number;
   /**
    * The underlying ArrayBuffer of this image iterator. This object does not allocate the data accessible through this ImageIterator instance. It provides direct access to the raw pixel data of a channel of the iterated image.
    */
   readonly buffer: ArrayBuffer;
   /**
    * The zero-based index of the iterated image channel.
    */
   readonly channel: number;
   /**
    * A TypedArray instance giving direct access to the pixel data of the iterated image through the buffer property. The type of this property can be Uint8Array, Uint16Array, Uint32Array, Float32Array, or Float64Array, depending on the pixel format of the iterated image. For complex images, each pair of adjacent elements in this array corresponds to the real and imaginary components of each pixel, in that order.
    */
   readonly data: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array;
   /**
    * The height in pixels of the iterated image.
    */
   readonly height: number;
   /**
    * A reference to the iterated image.
    */
   readonly image: Image;
   /**
    * True iff the iterated image stores complex pixels, where each pixel has a real and an imaginary component in 32-bit or 64-bit floating point format.
    */
   readonly isComplex: boolean;
   /**
    * True iff the iterated image stores integer pixels in 8-bit, 16-bit, or 32-bit unsigned integer format.
    */
   readonly isInteger: boolean;
   /**
    * True iff this ImageIterator instance has been constructed in read-only mode. A read-only image iterator allows reading and writing pixel sample values, but any change performed by a write operation does not affect the iterated image. This is because a read-only image iterator allocates a duplicate of the image's iterated channel. In other words, a read-only image iterator is disconnected from its iterated image.
    * A read-only image iterator is automatically constructed when the iterated image belongs to a View object that has not been notified about a running process. For example, the following code creates a new ImageIterator object in read-only mode:
    * let I = new ImageIterator( ImageWindow.activeWindow.mainView.image );
    * I[42][0] = 0; // ### this does not change the iterated image
    * However, with a previous call to the View.beginProcess() method, the iterator is constructed in normal read/write mode, and any write operation modifies actual image pixels.
    * let view = ImageWindow.activeWindow.mainView;
    * view.beginProcess();
    * let I = new ImageIterator( view.image );
    * I[42][0] = 0; // writes to the pixel sample at image coordinates x=0, y=42
    * ...
    * view.endProcess();
    */
   readonly isReadOnly: boolean;
   /**
    * True iff the iterated image stores real pixels in 32-bit or 64-bit floating point format.
    */
   readonly isReal: boolean;
   /**
    * True iff this image iterator is valid. An invalid ImageIterator instance has its buffer property set to null. It cannot, therefore, perform any operations on image pixel data because it has no connection to an existing image. This cannot happen under normal working conditions unless the free() method is invoked for this object.
    */
   readonly isValid: boolean;
   /**
    * The total number of pixels in the iterated image. The value of this property is the product of the image's width and height.
    */
   readonly numberOfPixels: bigint;
   /**
    * The upper bound of the iterated image's native range of valid pixel sample values. For real and complex images, this property is 1, since the native range is [0,1]. For integer images, the value of this property is 2n-1, where n is the number of bits per pixel sample (8, 16, or 32).
    */
   readonly upperRange: number;
   /**
    * The width in pixels of the iterated image.
    */
   readonly width: number;
   /**
    * Releases all internal structures and breaks the connection between this ImageIterator object and its iterated image by setting its buffer property to null. Calling this function is not necessary under normal working conditions, as it is invoked automatically by internal routines.
    */
   free(  ): void;
   free(  ): void;
   /**
    * Returns the specified pixel sample value x converted to the standard real range [0,1]. This function takes into account the native pixel format of the iterated image. For real and complex images, calling this function makes no sense, as the specified x value is always returned. For integer images, the returned value is equal to , where is the number of bits per pixel sample of the iterated image.
    */
   toReal( x: number ): number;
   toReal( x: number ): void;
   /**
    * Returns the specified real pixel sample value x converted from the standard [0,1] range to a pixel sample in the native range of the image. This function takes into account the native pixel format of the iterated image. For real and complex images, calling this function makes no sense, as the specified x value is always returned. For integer images, the returned value is equal to , where is the number of bits per pixel sample of the iterated image.
    */
   toSample( x: number ): number;
   toSample( x: number ): void;
}

declare class ImageView extends Control {
   constructor( parent?: Control, bitmap?: Bitmap, AstrometricMetadata?: any );
   constructor( parent?: Control, bitmap?: Bitmap, AstrometricMetadata?: any );
   readonly isValid: boolean;
   viewportCanvasColor: number;
   appendBottomControl( control: Control ): void;
   appendBottomControl( control: Control ): void;
   appendTopControl( control: Control ): void;
   appendTopControl( control: Control ): void;
   clear(  ): void;
   clear(  ): void;
   forceRedraw(  ): void;
   forceRedraw(  ): void;
   hideCoordinates(  ): void;
   hideCoordinates(  ): void;
   hideToolBar(  ): void;
   hideToolBar(  ): void;
   regenerate( bitmap?: Bitmap, zoomFactor?: number ): void;
   regenerate( bitmap?: Bitmap, zoomFactor?: number ): void;
   reset(  ): void;
   reset(  ): void;
   saveImage( filePath: string ): void;
   saveImage( filePath: string ): void;
   setImage( bitmap?: Bitmap, AstrometricMetadata?: any ): void;
   setImage( bitmap?: Bitmap, AstrometricMetadata?: any ): void;
   setStatusMessage( text: string ): void;
   setStatusMessage( text: string ): void;
   showCoordinates(  ): void;
   showCoordinates(  ): void;
   showToolBar(  ): void;
   showToolBar(  ): void;
   zoom1_1(  ): void;
   zoom1_1(  ): void;
   zoomIn(  ): void;
   zoomIn(  ): void;
   zoomOut(  ): void;
   zoomOut(  ): void;
   zoomToFit(  ): void;
   zoomToFit(  ): void;
   onCustomPaint: ( graphics: Graphics, x0: number, y0: number, x1: number, y1: number ) => void;
}

declare class ImageWindow {
   static readonly activeWindow: ImageWindow;
   static readonly openWindows: any[];
   static readonly swapFilesDirectory: string;
   static readonly windows: any[];
   constructor(  );
   constructor( width: number, height?: number, numberOfChannels?: number, bitsPerSample?: number, floatSample?: boolean, color?: boolean, id?: string );
   constructor( imageId: string );
   constructor( window: ImageWindow );
   static open( url?: string, imageId?: string, formatHints?: string, copy?: boolean ): any[];
   static windowByFilePath( filePath: string ): ImageWindow;
   static windowById( imageId: string ): ImageWindow;
   readonly aperture: number;
   readonly bitsPerSample: number;
   readonly cfaType: string;
   currentView: View;
   readonly exposure: number;
   readonly filePath: string;
   readonly fileURL: string;
   readonly focalLength: number;
   geometry: Rect;
   readonly hasAstrometricSolution: boolean;
   readonly hasMaskReferences: boolean;
   readonly hasPendingUpdates: boolean;
   height: number;
   horizontalResolution: number;
   iconic: boolean;
   imageType: number;
   readonly isACopy: boolean;
   readonly isClosed: boolean;
   readonly isComplexSample: boolean;
   readonly isFloatSample: boolean;
   readonly isModified: boolean;
   readonly isNew: boolean;
   readonly isNull: boolean;
   readonly isWindow: boolean;
   readonly isoSpeed: number;
   keywords: any[];
   readonly mainView: View;
   mask: ImageWindow;
   maskEnabled: boolean;
   maskInverted: boolean;
   maskMode: number;
   maskVisible: boolean;
   metricResolution: boolean;
   mode: number;
   readonly numberOfPreviews: number;
   readonly originalImageId: string;
   overridableImageId: boolean;
   readonly parentImageId: string;
   position: Point;
   readonly previews: any[];
   resolution: number;
   rgbWorkingSpace: RGBColorSystem;
   selectedPreview: View;
   transparencyColor: number;
   transparencyMode: number;
   transparencyVisible: boolean;
   verticalResolution: number;
   readonly viewportHeight: number;
   viewportPosition: Point;
   readonly viewportUpdateRect: Rect;
   readonly viewportWidth: number;
   visible: boolean;
   readonly visibleViewportRect: Rect;
   width: number;
   zoomFactor: number;
   applyColorTransformation( bmp?: Bitmap, view?: View ): void;
   astrometricReprojection( src?: ImageWindow, sourceOffset?: Point, onTargetBounds?: boolean ): void;
   astrometricReprojectionBounds( src: ImageWindow, srcRect: Rect ): Rect;
   astrometricSolutionSummary(  ): string;
   bringToFront(  ): void;
   celestialToImage( eq: Point ): Point;
   celestialToImage( alpha: number, delta: number ): Point;
   celestialToImage( eq?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, packed?: boolean ): any[] | Float64Array;
   celestialToImage( alpha: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, delta?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, packed?: boolean ): any[] | Float64Array;
   clearAstrometricSolution(  ): void;
   close( multiple?: boolean ): number;
   commitPendingUpdates(  ): void;
   copyAstrometricSolution( src: ImageWindow ): void;
   createPreview( rect: Rect, id: string ): View;
   createPreview( x0: number, y0: number, x1: number, y1: number, id: string ): View;
   deiconize(  ): void;
   deletePreview( preview: View ): void;
   deletePreview( id: string ): void;
   deletePreviews(  ): void;
   fitWindow(  ): void;
   forceClose(  ): void;
   go( index: number ): void;
   hide(  ): void;
   iconize(  ): void;
   imageIdFromTemplate( template: string ): string;
   imageScalarToViewport( k: number ): number;
   imageToCelestial( xy: Point ): Point;
   imageToCelestial( x: number, y: number ): Point;
   imageToCelestial( xy?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, packed?: boolean ): any[] | Float64Array;
   imageToCelestial( x: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, y?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, packed?: boolean ): any[] | Float64Array;
   imageToViewport( pos: Point ): Point;
   imageToViewport( x: number, y: number ): Point;
   imageToViewport( rect: Rect ): Rect;
   imageToViewport( x0: number, y0: number, x1: number, y1: number ): Rect;
   isMaskCompatible( mask: ImageWindow ): boolean;
   isMaskCompatible( imageId: string ): boolean;
   isMaskOf( window: ImageWindow ): boolean;
   isMaskOf( imageId: string ): boolean;
   modifyPreview( preview: View, rect?: Rect, newId?: string ): void;
   modifyPreview( preview: View, x0: number, y0: number, x1: number, y1?: number, newId?: string ): void;
   modifyPreview( id: string, rect?: Rect, newId?: string ): void;
   modifyPreview( id: string, x0: number, y0: number, x1: number, y1?: number, newId?: string ): void;
   previewById( id: string ): View | null;
   previewRect( preview: View ): Rect;
   previewRect( id: string ): Rect;
   purge( swapFiles?: boolean, properties?: boolean, notify?: boolean ): void;
   redo( count?: number ): void;
   redoAll(  ): void;
   regenerate(  ): void;
   regenerateAstrometricSolution(  ): void;
   removeMask(  ): void;
   removeMaskReferences(  ): void;
   resolutionAt( xy: Point ): number;
   resolutionAt( x: number, y: number ): number;
   save( allowMessages?: boolean, strict?: boolean ): boolean;
   saveAs( filePath?: string, queryOptions?: boolean, allowMessages?: boolean, strict?: boolean, verifyOverwrite?: boolean, formatHints?: string ): boolean;
   sendToBack(  ): void;
   setMask( arg0?: ImageWindow, invert?: boolean ): void;
   setMask( imageId?: string, invert?: boolean ): void;
   setMask( arg0: null | undefined ): void;
   setResolution( res?: number, metric?: boolean ): void;
   setResolution( xRes: number, yRes?: number, metric?: boolean ): void;
   setSampleFormat( bitsPerSample: number, floatSample: boolean ): void;
   setViewport( center?: Point, zoomFactor?: number ): void;
   setViewport( cx: number, cy?: number, zoomFactor?: number ): void;
   show(  ): void;
   undo( count?: number ): void;
   undoAll(  ): void;
   updateAstrometryMetadata(  ): void;
   updateImageRect( rect: Rect ): void;
   updateImageRect( x0: number, y0: number, x1: number, y1: number ): void;
   updateMaskReferences(  ): void;
   updateViewport(  ): void;
   updateViewportRect( rect: Rect ): void;
   updateViewportRect( x0: number, y0: number, x1: number, y1: number ): void;
   viewportScalarToImage( k: number ): number;
   viewportToImage( pos: Point ): Point;
   viewportToImage( x: number, y: number ): Point;
   viewportToImage( rect: Rect ): Rect;
   viewportToImage( x0: number, y0: number, x1: number, y1: number ): Rect;
   zoomIn(  ): void;
   zoomOut(  ): void;
   zoomToFit( allowZoomIn?: boolean, animate?: boolean ): void;
   zoomToOptimalFit( allowZoomIn?: boolean, animate?: boolean ): void;
}

declare class Label extends Frame {
   constructor( parent?: Control );
   margin: number;
   text: string;
   textAlignment: number;
   useRichText: boolean;
   wordWrapping: boolean;
   clear(  ): Label;
}

declare class LinearFunction {
   constructor(  );
   constructor( x1: number, y1: number, x2: number, y2: number );
   constructor( x: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, y: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array );
   constructor( LinearFunction: any );
   adev: number;
   b: number;
   intercept: number;
   readonly isValid: boolean;
   m: number;
   slope: number;
   assign( LinearFunction: any ): LinearFunction;
   evaluate( x: number ): number;
   fit( x: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, y: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): LinearFunction;
}

declare class LinearGradientBrush extends Brush {
   constructor( start: Point, end?: Point, stops?: any[], spreadMode?: number );
   readonly end: Point;
   readonly spreadMode: number;
   readonly start: Point;
   readonly stops: any[];
   readonly x1: number;
   readonly x2: number;
   readonly y1: number;
   readonly y2: number;
}

interface Math {
   readonly DEG: number;
   readonly EPSILON: number;
   readonly EPSILON32: number;
   readonly GOLDEN: number;
   readonly LOG102: number;
   readonly LOG210: number;
   readonly LOWEST: number;
   readonly LOWEST32: number;
   readonly MAX: number;
   readonly MAX32: number;
   readonly MIN: number;
   readonly MIN32: number;
   readonly MJD_OFFSET: number;
   readonly PI2: number;
   readonly PI4: number;
   readonly RAD: number;
   readonly SQRT2_2: number;
   readonly TT_TAI: number;
   readonly _1_PI: number;
   readonly _1_SQRT2: number;
   readonly _2PI: number;
   readonly _2_PI: number;
   readonly _2_SQRT_PI: number;
   readonly _3PI2: number;
   readonly _3PI4: number;
   readonly _5PI4: number;
   readonly _7PI4: number;
   readonly k_BWMV: number;
   readonly k_MAD: number;
   readonly k_Qn: number;
   readonly k_Sn: number;
   readonly k_avgDev: number;
   /**
    * Deprecated: Use Stat.BMV() instead.
    */
   BMV( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, beta?: number, startIndex?: number, endIndex?: number ): number;
   BMV( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, beta?: number, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.BWMV() instead.
    */
   BWMV( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): number;
   BWMV( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.MAD() instead.
    */
   MAD( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): number;
   MAD( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.Qn() instead.
    */
   Qn( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   Qn( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.Sn() instead.
    */
   Sn( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   Sn( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   ahav( x: number ): number;
   ahav( x: number ): void;
   angle( deg?: number, min?: number, sec?: number ): number;
   angle( deg?: number, min?: number, sec?: number ): void;
   atan2pi( y: number, x: number ): number;
   atan2pi( y: number, x: number ): void;
   /**
    * Deprecated: Use Stat.mean() instead.
    */
   avg( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   avg( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.avgDev() instead.
    */
   avgDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): number;
   avgDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.bendMidvariance() instead.
    */
   bendMidvariance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, beta?: number, startIndex?: number, endIndex?: number ): number;
   bendMidvariance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, beta?: number, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.biweightMidvariance() instead.
    */
   biweightMidvariance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): number;
   biweightMidvariance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): void;
   calendarTimeToJD( date: Date ): number;
   calendarTimeToJD( isoDateTime: string ): number;
   calendarTimeToJD( year: number, month: number, day?: number, dayFraction?: number ): number;
   calendarTimeToJD( date: Date ): void;
   calendarTimeToJD( isoDateTime: string ): void;
   calendarTimeToJD( year: number, month: number, day?: number, dayFraction?: number ): void;
   calendarTimeToJD2( date: Date ): any[];
   calendarTimeToJD2( isoDateTime: string ): any[];
   calendarTimeToJD2( year: number, month: number, day?: number, dayFraction?: number ): any[];
   calendarTimeToJD2( date: Date ): void;
   calendarTimeToJD2( isoDateTime: string ): void;
   calendarTimeToJD2( year: number, month: number, day?: number, dayFraction?: number ): void;
   cotan( x: number ): number;
   cotan( x: number ): void;
   decimalToSexagesimal( degrees: number ): [number, number, number, number];
   decimalToSexagesimal( degrees: number ): void;
   deg( x: number ): number;
   deg( x: number ): void;
   distance2D( x1: number, y1: number, x2: number, y2: number ): number;
   distance2D( x1: number, y1: number, x2: number, y2: number ): void;
   distance3D( x1: number, y1: number, z1: number, x2: number, y2: number, z2: number ): number;
   distance3D( x1: number, y1: number, z1: number, x2: number, y2: number, z2: number ): void;
   erf( x: any ): number;
   erf( x: any ): void;
   erfinv( x: any ): number;
   erfinv( x: any ): void;
   fact( n: number ): number;
   fact( n: number ): void;
   frac( x: number ): number;
   frac( x: number ): void;
   frexp( x: number ): any[];
   frexp( x: number ): void;
   hav( x: number ): number;
   hav( x: number ): void;
   heapSort( arg0?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   heapSort( arg0?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   homography( P1: any[], P2: any[] ): Matrix;
   homography( P1: any[], P2: any[] ): void;
   incompleteBeta( a: number, b: number, x?: number, eps?: number ): number;
   incompleteBeta( a: number, b: number, x?: number, eps?: number ): void;
   /**
    * Deprecated: Use Stat.initRandomGenerator() instead.
    */
   initRandomGenerator( seed?: bigint | number ): void;
   initRandomGenerator( seed?: bigint | number ): void;
   insertionSort( arg0?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   insertionSort( arg0?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   jdToCalendarTime( arg0: any[] ): [number, number, number, number];
   jdToCalendarTime( jd1?: number, jd2?: number ): [number, number, number, number];
   jdToCalendarTime( arg0: any[] ): void;
   jdToCalendarTime( jd1?: number, jd2?: number ): void;
   ldexp( x: number, y: number ): number;
   ldexp( x: number, y: number ): void;
   ln( x: number ): number;
   ln( x: number ): void;
   lnfact( n: number ): number;
   lnfact( n: number ): void;
   lngamma( x: any ): number;
   lngamma( x: any ): void;
   logn( n: number, x: number ): number;
   logn( n: number, x: number ): void;
   /**
    * Deprecated: Use Stat.MAD() instead.
    */
   mad( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): number;
   mad( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): void;
   mas2rad( x: number ): number;
   mas2rad( x: number ): void;
   /**
    * Deprecated: Use Stat.maximum() instead.
    */
   maxElem( v: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): number;
   maxElem( v: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): void;
   /**
    * Deprecated: Use Stat.mean() instead.
    */
   mean( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   mean( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.median() instead.
    */
   median( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   median( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   min2rad( x: number ): number;
   min2rad( x: number ): void;
   /**
    * Deprecated: Use Stat.minimum() instead.
    */
   minElem( v: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): number;
   minElem( v: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): void;
   mod( x: number, y: number ): number;
   mod( x: number, y: number ): void;
   /**
    * Deprecated: Use Stat.modulus() instead.
    */
   modulus( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   modulus( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   mtf( m: number, x: number ): number;
   mtf( m: number, x: number ): void;
   /**
    * Deprecated: Use Stat.orderStatistic() instead.
    */
   orderStatistic( data: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, k?: number, startIndex?: number, endIndex?: number ): number;
   orderStatistic( data: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, k?: number, startIndex?: number, endIndex?: number ): void;
   parseInteger( s?: string, min?: number, max?: number ): number;
   parseInteger( s?: string, min?: number, max?: number ): number;
   parseReal( s?: string, precision?: number, min?: number, max?: number ): number;
   parseReal( s?: string, precision?: number, min?: number, max?: number ): void;
   poly( x: number, c?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], n?: number ): number;
   poly( x: number, c?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], n?: number ): void;
   pow10( x: number ): number;
   pow10( x: number ): void;
   pow10i( n: number ): number;
   pow10i( n: number ): void;
   pow2( x: number ): number;
   pow2( x: number ): void;
   quickSort( arg0?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   quickSort( arg0?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   rad( x: number ): number;
   rad( x: number ): void;
   rad2min( x: number ): number;
   rad2min( x: number ): void;
   rad2sec( x: number ): number;
   rad2sec( x: number ): void;
   random(  ): number;
   random(  ): void;
   /**
    * Deprecated: Use Stat.randomArray() instead.
    */
   randomArray( count: number ): any[];
   randomArray( count: number ): void;
   /**
    * Deprecated: Use Stat.randomFloat32Array() instead.
    */
   randomFloat32Array( count?: number, distribution?: string, distr_p1?: number, distr_p2?: number ): Float32Array;
   randomFloat32Array( count?: number, distribution?: string, distr_p1?: number, distr_p2?: number ): void;
   /**
    * Deprecated: Use Stat.randomFloat64Array() instead.
    */
   randomFloat64Array( count?: number, distribution?: string, distr_p1?: number, distr_p2?: number ): Float64Array;
   randomFloat64Array( count?: number, distribution?: string, distr_p1?: number, distr_p2?: number ): void;
   /**
    * Deprecated: Use Stat.randomSeed32() instead.
    */
   randomSeed32(  ): number;
   randomSeed32(  ): void;
   /**
    * Deprecated: Use Stat.randomSeed64() instead.
    */
   randomSeed64(  ): bigint;
   randomSeed64(  ): void;
   range( x: number, a: number, b: number ): number;
   range( x: number, a: number, b: number ): void;
   roundInt( x: number ): number;
   roundInt( x: number ): void;
   roundInt64( x: number ): bigint;
   roundInt64( x: number ): void;
   roundIntArithmetic( x: number ): number;
   roundIntArithmetic( x: number ): void;
   roundTo( x: number, n: number ): number;
   roundTo( x: number, n: number ): void;
   sec2rad( x: number ): number;
   sec2rad( x: number ): void;
   /**
    * Deprecated: Use Stat.orderStatistic() instead.
    */
   select( data: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, k?: number, startIndex?: number, endIndex?: number ): number;
   select( data: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, k?: number, startIndex?: number, endIndex?: number ): void;
   sexagesimalToDecimal( sign: number, s1?: number, s2?: number, s3?: number ): number;
   sexagesimalToDecimal( sign: number, s1?: number, s2?: number, s3?: number ): void;
   solve( A: Matrix, B: Matrix ): [Matrix, Matrix];
   solve( A: Matrix, B: Matrix ): void;
   /**
    * Deprecated: Use Stat.stableAvgDev() instead.
    */
   stableAvgDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): number;
   stableAvgDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.stableMean() instead.
    */
   stableMean( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   stableMean( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.stableModulus() instead.
    */
   stableModulus( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   stableModulus( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.stableSum() instead.
    */
   stableSum( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   stableSum( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.stableSumOfSquares() instead.
    */
   stableSumOfSquares( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   stableSumOfSquares( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.stdDev() instead.
    */
   standardDeviation( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   standardDeviation( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.stdDev() instead.
    */
   stdDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   stdDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.stdDev() instead.
    */
   stddev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   stddev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.sum() instead.
    */
   sum( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   sum( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.sumOfSquares() instead.
    */
   sumOfSquares( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   sumOfSquares( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
   svd( A: Matrix ): [Matrix, Vector, Matrix];
   svd( A: Matrix ): void;
   /**
    * Deprecated: Use Stat.trimmedMean() instead.
    */
   trimmedMean( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, low?: number, high?: number, startIndex?: number, endIndex?: number ): number;
   trimmedMean( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, low?: number, high?: number, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.trimmedMeanOfSquares() instead.
    */
   trimmedMeanOfSquares( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, low?: number, high?: number, startIndex?: number, endIndex?: number ): number;
   trimmedMeanOfSquares( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, low?: number, high?: number, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.twoSidedAvgDev() instead.
    */
   twoSidedAvgDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): [number, number];
   twoSidedAvgDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.twoSidedBWMV() instead.
    */
   twoSidedBWMV( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): [number, number];
   twoSidedBWMV( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.twoSidedBiweightMidvariance() instead.
    */
   twoSidedBiweightMidvariance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): [number, number];
   twoSidedBiweightMidvariance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): void;
   /**
    * Deprecated: Use Stat.twoSidedMAD() instead.
    */
   twoSidedMAD( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): [number, number];
   twoSidedMAD( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): void;
   uas2rad( x: number ): number;
   uas2rad( x: number ): void;
   uiResourceScalingFactor( scalingFactor: number ): number;
   uiResourceScalingFactor( scalingFactor: number ): void;
   uiResourceScalingFactorForIndex( index: number ): number;
   uiResourceScalingFactorForIndex( index: number ): void;
   uiResourceScalingIndex( scalingFactor: number ): number;
   uiResourceScalingIndex( scalingFactor: number ): void;
   uiScaled( scalingFactor: number, size: number ): number;
   uiScaled( scalingFactor: number, size: number ): void;
   uiScaledResource( scalingFactor: number, resource: string ): number;
   uiScaledResource( scalingFactor: number, resource: string ): void;
   uiScaledResourceForIndex( index: number, resource: string ): number;
   uiScaledResourceForIndex( index: number, resource: string ): void;
   uiUnscaled( scalingFactor: number, size: number ): number;
   uiUnscaled( scalingFactor: number, size: number ): void;
   /**
    * Deprecated: Use Stat.variance() instead.
    */
   variance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   variance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): void;
}

declare class Matrix extends Array {
   static readonly BITS_PER_ELEMENT: number;
   static readonly BYTES_PER_ELEMENT: number;
   constructor( elements: number[] | TypedArray, rows: number, cols: number );
   constructor( elements: number[] | TypedArray, startIndex: number, rows: number, cols: number );
   constructor(  );
   constructor( rows: number, cols: number );
   constructor( value: number, rows: number, cols: number );
   constructor( a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number );
   constructor( M: Matrix );
   constructor( M: Matrix, startRow: number, startCol: number, rows: number, cols: number );
   constructor( a: any[], startIndex: number, rows: number, cols: number );
   constructor( a: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex: number, rows: number, cols: number );
   constructor( a: any[], rows: number, cols: number );
   constructor( a: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, rows: number, cols: number );
   constructor( buffer: ArrayBuffer, rows: number, cols: number );
   constructor(  );
   constructor( rows: number, cols: number );
   constructor( value: number, rows: number, cols: number );
   constructor( a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number );
   constructor( M: Matrix );
   constructor( M: Matrix, startRow: number, startCol: number, rows: number, cols: number );
   constructor( a: any[], startIndex: number, rows: number, cols: number );
   constructor( a: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex: number, rows: number, cols: number );
   constructor( a: any[], rows: number, cols: number );
   constructor( a: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, rows: number, cols: number );
   constructor( buffer: ArrayBuffer, rows: number, cols: number );
   static fromImage( image?: Image, rect?: Rect, channel?: number ): Matrix;
   static fromImage( image?: Image, rect?: Rect, channel?: number ): void;
   static gaussianFilter( sigma?: number, epsilon?: number, rho?: number, theta?: number ): Matrix;
   static gaussianFilter( sigma?: number, epsilon?: number, rho?: number, theta?: number ): void;
   static gaussianFilterBySize( size?: number, epsilon?: number, rho?: number, theta?: number ): Matrix;
   static gaussianFilterBySize( size?: number, epsilon?: number, rho?: number, theta?: number ): void;
   static linearFilter( size?: number, v0?: number, v1?: number ): Matrix;
   static linearFilter( size?: number, v0?: number, v1?: number ): void;
   static moffatFilter( sigma?: number, beta?: number, epsilon?: number, rho?: number, theta?: number ): Matrix;
   static moffatFilter( sigma?: number, beta?: number, epsilon?: number, rho?: number, theta?: number ): void;
   static moffatFilterBySize( size?: number, beta?: number, epsilon?: number, rho?: number, theta?: number ): Matrix;
   static moffatFilterBySize( size?: number, beta?: number, epsilon?: number, rho?: number, theta?: number ): void;
   static unitMatrix( n?: number ): Matrix;
   static unitMatrix( n?: number ): void;
   static variableShapeFilter( sigma?: number, k?: number, epsilon?: number, rho?: number, theta?: number ): Matrix;
   static variableShapeFilter( sigma?: number, k?: number, epsilon?: number, rho?: number, theta?: number ): void;
   static variableShapeFilterBySize( size?: number, k?: number, epsilon?: number, rho?: number, theta?: number ): Matrix;
   static variableShapeFilterBySize( size?: number, k?: number, epsilon?: number, rho?: number, theta?: number ): void;
   readonly buffer: ArrayBuffer;
   readonly cols: number;
   readonly columns: number;
   readonly data: Float64Array;
   readonly isEmpty: boolean;
   readonly numberOfElements: number;
   readonly rows: number;
   BMV( center?: number, beta?: number ): number;
   BMV( center?: number, beta?: number ): void;
   BWMV( center?: number, sigma?: number, k?: number, reducedLength?: boolean ): number;
   BWMV( center?: number, sigma?: number, k?: number, reducedLength?: boolean ): void;
   MAD( center?: number ): number;
   MAD( center?: number ): void;
   Qn(  ): number;
   Qn(  ): void;
   Sn(  ): number;
   Sn(  ): void;
   abs(  ): Matrix;
   abs(  ): void;
   add( M: Matrix ): Matrix;
   add( x: number ): Matrix;
   add( M: Matrix ): void;
   add( x: number ): void;
   addElementWise( M: Matrix ): Matrix;
   addElementWise( M: Matrix ): void;
   apply( x: number, y: number ): Point;
   apply( p: Point ): Point;
   apply( x: number, y: number ): void;
   apply( p: Point ): void;
   applyToPoints( points: any[] ): any[];
   applyToPoints( points: any[] ): void;
   at( ...args: any[] ): any;
   at( ...args: any[] ): any;
   at( ...args: any[] ): any;
   at( ...args: any[] ): any;
   avgDev( center?: number ): number;
   avgDev( center?: number ): void;
   bendMidvariance( center?: number, beta?: number ): number;
   bendMidvariance( center?: number, beta?: number ): void;
   binarySearch( value: number ): [number, number] | null;
   binarySearch( value: number ): void;
   biweightMidvariance( center?: number, sigma?: number, k?: number, reducedLength?: boolean ): number;
   biweightMidvariance( center?: number, sigma?: number, k?: number, reducedLength?: boolean ): void;
   colVector( col: number ): Vector;
   colVector( col: number ): void;
   compare( M: Matrix ): number;
   compare( M: Matrix ): void;
   div( x: number ): Matrix;
   div( x: number ): void;
   divElementWise( M: Matrix ): Matrix;
   divElementWise( M: Matrix ): void;
   flip(  ): Matrix;
   flip(  ): void;
   flipped(  ): Matrix;
   flipped(  ): void;
   inverse(  ): Matrix;
   inverse(  ): void;
   invert(  ): Matrix;
   invert(  ): void;
   invertElementWise(  ): Matrix;
   invertElementWise(  ): void;
   isEqualTo( M: Matrix ): boolean;
   isEqualTo( M: Matrix ): void;
   isLessThan( M: Matrix ): boolean;
   isLessThan( M: Matrix ): void;
   linearSearch( value: number ): [number, number] | null;
   linearSearch( value: number ): void;
   maxElement(  ): number;
   maxElement(  ): void;
   mean(  ): number;
   mean(  ): void;
   median(  ): number;
   median(  ): void;
   minElement(  ): number;
   minElement(  ): void;
   modulus(  ): number;
   modulus(  ): void;
   mul( M: Matrix ): Matrix;
   mul( x: number ): Matrix;
   mul( v: Vector ): Vector;
   mul( M: Matrix ): void;
   mul( x: number ): void;
   mul( v: Vector ): void;
   mulElementWise( M: Matrix ): Matrix;
   mulElementWise( M: Matrix ): void;
   pow( x: number ): Matrix;
   pow( x: number ): void;
   powElementWise( M: Matrix ): Matrix;
   powElementWise( M: Matrix ): void;
   rescale( a?: number, b?: number ): Matrix;
   rescale( a?: number, b?: number ): void;
   rescaled( a?: number, b?: number ): Matrix;
   rescaled( a?: number, b?: number ): void;
   rowVector( row: number ): Vector;
   rowVector( row: number ): void;
   sameDimensions( M: Matrix ): boolean;
   sameDimensions( M: Matrix ): void;
   sameElements( M: Matrix ): boolean;
   sameElements( M: Matrix ): void;
   setAbs(  ): Matrix;
   setAbs(  ): void;
   setRandom(  ): Matrix;
   setRandom(  ): void;
   setSqr(  ): Matrix;
   setSqr(  ): void;
   setSqrt(  ): Matrix;
   setSqrt(  ): void;
   sort( ...args: any[] ): any;
   sort( ...args: any[] ): any;
   sorted(  ): Matrix;
   sorted(  ): void;
   sqr(  ): Matrix;
   sqr(  ): void;
   sqrt(  ): Matrix;
   sqrt(  ): void;
   stableAvgDev( center?: number ): number;
   stableAvgDev( center?: number ): void;
   stableMean(  ): number;
   stableMean(  ): void;
   stableModulus(  ): number;
   stableModulus(  ): void;
   stableSum(  ): number;
   stableSum(  ): void;
   stableSumOfSquares(  ): number;
   stableSumOfSquares(  ): void;
   stdDev(  ): number;
   stdDev(  ): void;
   sub( M: Matrix ): Matrix;
   sub( x: number ): Matrix;
   sub( M: Matrix ): void;
   sub( x: number ): void;
   subElementWise( M: Matrix ): Matrix;
   subElementWise( M: Matrix ): void;
   sum(  ): number;
   sum(  ): void;
   sumOfSquares(  ): number;
   sumOfSquares(  ): void;
   toArray( startRow?: number, startCol?: number, rows?: number, cols?: number ): any[];
   toArray( startRow?: number, startCol?: number, rows?: number, cols?: number ): void;
   toFloat32Array( startRow?: number, startCol?: number, rows?: number, cols?: number ): Float32Array;
   toFloat32Array( startRow?: number, startCol?: number, rows?: number, cols?: number ): void;
   toFloat64Array( startRow?: number, startCol?: number, rows?: number, cols?: number ): Float64Array;
   toFloat64Array( startRow?: number, startCol?: number, rows?: number, cols?: number ): void;
   toImage(  ): Image;
   toImage(  ): void;
   toString( fmt?: any ): string;
   transform( v: Vector ): Vector;
   transform( v: Vector ): void;
   transpose(  ): Matrix;
   transpose(  ): void;
   trimmedMean( low?: number, high?: number ): number;
   trimmedMean( low?: number, high?: number ): void;
   trimmedMeanOfSquares( low?: number, high?: number ): number;
   trimmedMeanOfSquares( low?: number, high?: number ): void;
   truncate( a?: number, b?: number ): Matrix;
   truncate( a?: number, b?: number ): void;
   truncated( a?: number, b?: number ): Matrix;
   truncated( a?: number, b?: number ): void;
   twoSidedAvgDev( center?: number ): [number, number];
   twoSidedAvgDev( center?: number ): void;
   twoSidedBWMV( center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean ): [number, number];
   twoSidedBWMV( center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean ): void;
   twoSidedBiweightMidvariance( center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean ): [number, number];
   twoSidedBiweightMidvariance( center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean ): void;
   twoSidedMAD( center?: number ): [number, number];
   twoSidedMAD( center?: number ): void;
   variance(  ): number;
   variance(  ): void;
}

declare class Menu extends Control {
   constructor( parent?: Control );
   icon: Bitmap;
   text: string;
   toolTipsVisible: boolean;
   addItem( MenuItem: any ): Menu;
   addItems( items: any[] ): Menu;
   addMenu( Menu: any ): Menu;
   addSeparator(  ): Menu;
   execute(  ): MenuItem | null;
   execute( globalPos: Point ): MenuItem | null;
   execute( globalX: number, globalY: number ): MenuItem | null;
}

declare class MenuItem {
   constructor( text?: string, icon?: Bitmap, shortcut?: string );
   checkable: boolean;
   checked: boolean;
   enabled: boolean;
   icon: Bitmap;
   shortcut: string;
   text: string;
   toolTip: string;
   visible: boolean;
   onCheck: ( checked: boolean ) => void;
   onHover: (  ) => void;
   onTrigger: ( checked: boolean ) => void;
}

declare class MessageBox {
   constructor( text?: string, caption?: string, icon?: number, button1?: number, button2?: number, button3?: number, defaultButton?: number, escapeButton?: number );
   caption: string;
   defaultButton: number;
   escapeButton: number;
   firstButton: number;
   icon: number;
   readonly result: number;
   secondButton: number;
   text: string;
   thirdButton: number;
   execute(  ): number;
}

declare class MessageListener {
   constructor( parent?: Control );
   onMessage: ( instance: number, uniqueId: string, message: string ) => void;
}

declare class MetaObject {
   static readonly allObjects: any[];
   static readonly coreObjects: any[];
   static readonly externalObjects: any[];
   static readonly internalObjects: any[];
   static readonly standardObjects: any[];
   constructor( objectId: string );
   static generateExternalPIDocSources( dirPath: string ): number;
   static generateInternalPIDocSources( dirPath: string ): number;
   static objectById( id: string ): MetaObject | null;
   readonly constants: any[];
   readonly constructors: any[];
   readonly eventHandlers: any[];
   readonly hasConstants: boolean;
   readonly hasConstructors: boolean;
   readonly hasEventHandlers: boolean;
   readonly hasMethods: boolean;
   readonly hasProperties: boolean;
   readonly hasStaticMethods: boolean;
   readonly hasStaticProperties: boolean;
   readonly id: string;
   readonly inheritedObjects: any[];
   readonly inheritedStandardObject: string;
   readonly inherits: boolean;
   readonly isExternalObject: boolean;
   readonly isInternalObject: boolean;
   readonly isStandardObject: boolean;
   readonly methods: any[];
   readonly properties: any[];
   readonly requiredFiles: any[];
   readonly staticMethods: any[];
   readonly staticProperties: any[];
   addConstant( id: string, description: string ): void;
   addConstructor( description: string ): void;
   addEventHandler( id: string, description: string ): void;
   addMethod( id: string, description: string ): void;
   addProperty( id: string, readOnly: boolean, description: string ): void;
   addRequiredFile( filePath: string ): void;
   addStaticMethod( id: string, description: string ): void;
   addStaticProperty( id: string, readOnly: boolean, description: string ): void;
   constantsToHTMLSource( withHeader?: boolean ): string;
   constructorsToHTMLSource( withHeader?: boolean ): string;
   deprecate( id?: string, useInstead?: string ): void;
   eventHandlersToHTMLSource( withHeader?: boolean ): string;
   find( id: string ): object | null;
   has( id: string ): boolean;
   hasConstant( id: string ): boolean;
   hasEventHandler( id: string ): boolean;
   hasMethod( id: string ): boolean;
   hasProperty( id: string ): boolean;
   hasStaticMethod( id: string ): boolean;
   hasStaticProperty( id: string ): boolean;
   inherit( parentId: string ): void;
   inheritsFrom( id: string ): boolean;
   methodsToHTMLSource( withHeader?: boolean ): string;
   propertiesToHTMLSource( withHeader?: boolean ): string;
   staticMethodsToHTMLSource( withHeader?: boolean ): string;
   staticPropertiesToHTMLSource( withHeader?: boolean ): string;
   toHTMLSource(  ): string;
   toPIDocSource(  ): string;
}

declare class NetworkTransfer {
   constructor(  );
   readonly aborted: boolean;
   readonly bytesTransferred: number;
   readonly contentType: string;
   readonly customHTTPHeaders: any[];
   readonly errorInformation: string;
   readonly ok: boolean;
   readonly proxyURL: string;
   readonly responseCode: number;
   readonly totalSpeed: number;
   readonly totalTime: number;
   readonly url: string;
   closeConnection(  ): NetworkTransfer;
   download(  ): boolean;
   post( fields: string ): boolean;
   setConnectionTimeout( seconds: number ): NetworkTransfer;
   setCustomHTTPHeaders( headers: any[] | string ): NetworkTransfer;
   setProxyURL( url?: string, userName?: string, userPassword?: string ): NetworkTransfer;
   setSSL( useSSL?: boolean, forceSSL?: boolean, verifyPeer?: boolean, verifyHost?: boolean ): NetworkTransfer;
   setURL( url?: string, userName?: string, userPassword?: string ): NetworkTransfer;
   smtp( mailFrom: string, recipients: any[] | string ): boolean;
   upload( uploadSize?: number ): boolean;
   onDownloadDataAvailable: ( data: ByteArray ) => boolean;
   onTransferProgress: ( dlTotal: number, dlCurrent: number, ulTotal: number, ulCurrent: number ) => boolean;
   onUploadDataRequested: ( maxSize: number ) => ByteArray;
}

declare class NumericControl extends NumericEdit {
   constructor(  );
   constructor( parent: Control );
   exponential: boolean;
   slider: HorizontalSlider;
}

declare class NumericEdit extends Control {
   constructor(  );
   constructor( parent: Control );
   constructor( parent?: Control );
   constructor(  );
   constructor( parent: Control );
   autoEditWidth: boolean;
   edit: Edit;
   fixed: boolean;
   label: Label;
   lowerBound: number;
   precision: number;
   real: boolean;
   sciTriggerExp: number;
   scientific: boolean;
   sign: boolean;
   sizer: HorizontalSizer;
   upperBound: number;
   useRegExp: boolean;
   value: number;
   exponential: boolean;
   enableFixedPrecision( fixed: boolean ): void;
   enableFixedPrecision( fixed: boolean ): void;
   enableFixedSign( sign: boolean ): void;
   enableFixedSign( sign: boolean ): void;
   enableScientificNotation( scientific: boolean ): void;
   enableScientificNotation( scientific: boolean ): void;
   enableValidatingRegExp( useRegExp: boolean ): void;
   enableValidatingRegExp( useRegExp: boolean ): void;
   evaluate(  ): void;
   evaluate(  ): void;
   setPrecision( digits: number ): void;
   setPrecision( digits: number ): void;
   setRange( lowerBound: number, upperBound: number ): void;
   setRange( lowerBound: number, upperBound: number ): void;
   setReal( real: boolean ): void;
   setReal( real: boolean ): void;
   setScientificNotationTriggerExponent( exp10: number ): void;
   setScientificNotationTriggerExponent( exp10: number ): void;
   setValue( value: number ): void;
   setValue( value: number ): void;
   onValueUpdated: ( value: number ) => void;
}

declare class ObserverPosition {
   static readonly EarthEquatorialRadius: number;
   static readonly EarthFlattening: number;
   constructor( longitude?: number, latitude?: number, height?: number, equatorialRadius?: number, flattening?: number, regionalCenter?: Vector, cioBased?: boolean );
   constructor( ObserverPosition: any );
   cioBased: boolean;
   equatorialRadius: number;
   flattening: number;
   height: number;
   lambda: number;
   latitude: number;
   longitude: number;
   phi: number;
   regionalCenter: Vector;
   assign( ObserverPosition: any ): ObserverPosition;
}

declare class OpenFileDialog extends FileDialog {
   constructor(  );
   /**
    * Deprecated: Use OpenFileDialog.filePath instead.
    */
   readonly fileName: string;
   /**
    * Deprecated: Use OpenFileDialog.filePaths instead.
    */
   readonly fileNames: any[];
   readonly filePath: string;
   readonly filePaths: any[];
   multipleSelections: boolean;
   loadImageFilters(  ): OpenFileDialog;
}

declare class PDF {
   constructor(  );
   constructor( filePath: string );
   author: string;
   bottomMargin: number;
   creator: string;
   documentId: string;
   readonly filePath: string;
   readonly fullRect: Rect;
   iccProfile: ByteArray;
   readonly isPainting: boolean;
   landscape: boolean;
   leftMargin: number;
   margins: Rect;
   readonly maxMargins: Rect;
   readonly minMargins: Rect;
   readonly outputData: ByteArray;
   pageSize: Rect;
   readonly paintRect: Rect;
   pdfVersion: number;
   portrait: boolean;
   resolution: number;
   rightMargin: number;
   title: string;
   topMargin: number;
   xmpMetadata: ByteArray;
   newPage(  ): void;
}

declare class PSF {
   constructor(  );
   constructor( PSF: any );
   static fitSources( image: Image, centers: any[], rects?: any[], fn?: number, circular?: boolean, tolerance?: number, growth?: number ): any[];
   static fitStars( image: Image, stars?: any[], fn?: number, circular?: boolean, tolerance?: number, growth?: number ): any[];
   static fwhm( fn: number, sigma?: number, beta?: number ): number;
   static fwtm( fn: number, sigma?: number, beta?: number ): number;
   static volume( fn: number, sigmaX: number, sigmaY?: number, beta?: number ): number;
   A: number;
   B: number;
   b0: Point;
   beta: number;
   c0: Point;
   celestial: boolean;
   circular: boolean;
   flux: number;
   fn: number;
   readonly functionName: string;
   readonly fwhmX: number;
   readonly fwhmY: number;
   readonly fwtmX: number;
   readonly fwtmY: number;
   readonly isValid: boolean;
   mad: number;
   q0: Point;
   signal: number;
   signalCount: number;
   status: number;
   readonly statusText: string;
   sx: number;
   sy: number;
   theta: number;
   readonly value: number;
   readonly volume: number;
   readonly x: number;
   readonly y: number;
   assign( PSF: any ): PSF;
   bounds(  ): Rect;
   fitSource( image: Image, center: Point, rect?: Rect, fn?: number, circular?: boolean, tolerance?: number, growth?: number ): PSF;
   fitStar( image: Image, StarData?: any, fn?: number, circular?: boolean, tolerance?: number, growth?: number ): PSF;
   fwtmBounds(  ): Rect;
   toImage(  ): Image;
}

/** PJSR Process Parameters Runtime Interface */
declare class PJSRParameters {
   static readonly isGlobalTarget: boolean;
   static readonly isViewTarget: boolean;
   static readonly targetView: View | null;
   constructor();
   static clear(  ): void;
   static get( id: string ): string | null;
   static getBoolean( id: string ): boolean | null;
   static getInt( id?: string, radix?: number ): number | null;
   static getInt64( id?: string, radix?: number ): bigint | null;
   static getInteger( id?: string, radix?: number ): number | null;
   static getReal( id: string ): number | null;
   static getString( id: string ): string | null;
   static getUInt( id?: string, radix?: number ): number | null;
   static getUint( id?: string, radix?: number ): number | null;
   static getUint64( id?: string, radix?: number ): bigint | null;
   static has( id: string ): boolean;
   static remove( id: string ): void;
   static set( id: string, Value: any ): void;
}
declare const Parameters: typeof PJSRParameters;

declare class Pen {
   constructor( color?: number, width?: number, style?: number, cap?: number, join?: number );
   constructor( brush?: Brush, width?: number, style?: number, cap?: number, join?: number );
   constructor( src: Pen );
   brush: Brush;
   cap: number;
   color: number;
   readonly isEmpty: boolean;
   readonly isSolid: boolean;
   join: number;
   miterLimit: number;
   style: number;
   width: number;
   assign( src: Pen ): Pen;
}

declare class Plot {
   constructor( PlotManager: any, id: number );
   graphBoxBorderColor: number;
   graphBoxBorderWidth: number;
   readonly id: number;
   legendEnabled: boolean;
   legendPosition: number;
   readonly rect: Rect;
   readonly seriesCount: number;
   readonly seriesIds: any[];
   readonly slotColumns: number;
   readonly slotIndex: number;
   readonly slotRows: number;
   title: string;
   titleAlignment: number;
   titleColor: number;
   titleFontFamily: string;
   titleFontSize: number;
   readonly xAxes: any[];
   readonly xAxis: PlotAxis;
   readonly yAxes: any[];
   readonly yAxis: PlotAxis;
   addLineSeries( x: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, y?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, PlotAxis?: any, PlotAxis_2?: any ): PlotLineSeries;
   addScatterSeries( x: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, y?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, PlotAxis?: any, PlotAxis_2?: any ): PlotScatterSeries;
   clearSeries(  ): void;
   removeSeries( id: number ): boolean;
   removeSeries( PlotSeries: any ): boolean;
}

declare class PlotAxis {
   constructor( PlotSeries: any, id: number );
   constructor( Plot: any, id: number );
   autoFitRange: boolean;
   color: number;
   gridDensity: number;
   gridLineColor: number;
   gridLineStyle: number;
   gridLineWidth: number;
   gridVisible: boolean;
   readonly id: number;
   majorTickColor: number;
   majorTickLength: number;
   majorTickWidth: number;
   minorTickColor: number;
   minorTickLength: number;
   minorTickWidth: number;
   name: string;
   readonly orientation: number;
   range: any[];
   scale: number;
   side: number;
   significantDigits: number;
   tickLabelFormat: number;
   readonly useCount: number;
   visible: boolean;
   moveToBack(  ): PlotAxis;
   moveToFront(  ): PlotAxis;
   moveToIndex( index: number ): PlotAxis;
   setTickAuto( approxMajorCount?: number ): PlotAxis;
   setTickAutoMajorMinor( approxMajorCount: number, minorPerMajor: number ): PlotAxis;
   setTickCustom( majorPositions?: any[], majorLabels?: any[], minorPositions?: any[] ): PlotAxis;
   setTickInterval( origin: number, majorStep?: number, minorSubdivisions?: number ): PlotAxis;
   setVisibility( axisLine: boolean, majorTicks: boolean, minorTicks: boolean, tickLabels: boolean ): PlotAxis;
}

declare class PlotLineSeries extends PlotSeries {
   constructor( Plot: any, id: number );
   interpolation: number;
   lineColor: number;
   lineStyle: number;
   lineWidth: number;
   vertexMarker: number;
   vertexMarkerSize: number;
}

declare class PlotManager {
   constructor( PlotRenderer: any );
   axisEdgePadding: number;
   axisLabelHeight: number;
   axisLabelNameGap: number;
   axisNameHeight: number;
   axisTickLabelGap: number;
   backgroundColor: number;
   fontFamily: string;
   readonly isUpdating: boolean;
   readonly plotCount: number;
   readonly plotIds: any[];
   addPlot( rows: number, cols: number, index: number ): Plot;
   asPNG( width?: number, height?: number ): ByteArray;
   asSVG( width?: number, height?: number ): ByteArray;
   autoAlignSlotGrid(  ): PlotManager;
   beginUpdate(  ): PlotManager;
   cancel(  ): PlotManager;
   clear(  ): PlotManager;
   commit(  ): PlotManager;
   hasPlot( id: number ): boolean;
   plot( id: number ): Plot;
   refresh(  ): PlotManager;
   removePlot( id: number ): boolean;
   saveAsPNG( filePath?: string, width?: number, height?: number ): PlotManager;
   saveAsSVG( filePath?: string, width?: number, height?: number ): PlotManager;
}

declare class PlotRenderer extends Control {
   constructor( parent?: Control );
   backgroundColor: number;
   zoomFactor: number;
   saveAsPDF( filePath?: string, pageWidth?: number, pageHeight?: number, marginLeft?: number, marginTop?: number, marginRight?: number, marginBottom?: number, landscape?: boolean ): void;
}

declare class PlotScatterSeries extends PlotSeries {
   constructor( Plot: any, id: number );
   edgeColor: number;
   edgeWidth: number;
   fillColor: number;
   shape: number;
   size: number;
}

declare class PlotSeries {
   constructor();
   readonly id: number;
   label: string;
   showStatistics: boolean;
   statisticsOverlay: PlotStatisticsOverlay;
   visible: boolean;
   xAxis: PlotAxis;
   readonly xData: Vector;
   yAxis: PlotAxis;
   readonly yData: Vector;
   computeStatistics(  ): object;
   detachXAxis(  ): PlotAxis;
   detachYAxis(  ): PlotAxis;
   setData( x: Vector, y: Vector ): PlotSeries;
}

declare class PlotStatisticsOverlay {
   constructor(  );
   constructor( PlotStatisticsOverlay: any );
   centerLine: boolean;
   centerLineStyle: number;
   centerLineWidth: number;
   centerLneColor: number;
   centroid: boolean;
   centroidColor: number;
   centroidSize: number;
   enabled: boolean;
   madBand: boolean;
   madFillColor: number;
   madLineColor: number;
   medianLine: boolean;
   medianLineColor: number;
   medianLineStyle: number;
   medianLineWidth: number;
   principalAxes: boolean;
   principalAxesColor: number;
   principalAxesWidth: number;
   sigmaBands: boolean;
   sigmaFillColor: number;
   sigmaLevels: any[];
   sigmaLineColor: number;
   sigmaLineStyle: number;
   sigmaLineWidth: number;
   trendLine: boolean;
   trendLineColor: number;
   trendLineStyle: number;
   trendLineWidth: number;
   assign( PlotStatisticsOverlay: any ): PlotStatisticsOverlay;
}

declare class Point {
   constructor(  );
   constructor( src: Point );
   constructor( x: number, y: number );
   constructor( xy: number );
   constructor(  );
   constructor( src: Point );
   constructor( x: number, y: number );
   constructor( xy: number );
   static fromPackedArray( packed: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): any[];
   static fromPackedArray( packed: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): void;
   static toPackedFloat32Array( points: any[] ): Float32Array;
   static toPackedFloat32Array( points: any[] ): void;
   static toPackedFloat64Array( points: any[] ): Float64Array;
   static toPackedFloat64Array( points: any[] ): void;
   x: number;
   y: number;
   add( dx: number, dy: number ): void;
   add( dxy: number ): void;
   add( p: Point ): void;
   add( dx: number, dy: number ): void;
   add( dxy: number ): void;
   add( p: Point ): void;
   assign( x: number, y: number ): void;
   assign( xy: number ): void;
   assign( p: Point ): void;
   assign( x: number, y: number ): void;
   assign( xy: number ): void;
   assign( p: Point ): void;
   distanceTo( x: number, y: number ): number;
   distanceTo( xy: number ): number;
   distanceTo( p: Point ): number;
   distanceTo( x: number, y: number ): void;
   distanceTo( xy: number ): void;
   distanceTo( p: Point ): void;
   distanceToOrigin(  ): number;
   distanceToOrigin(  ): void;
   div( dx: number, dy: number ): void;
   div( dxy: number ): void;
   div( p: Point ): void;
   div( dx: number, dy: number ): void;
   div( dxy: number ): void;
   div( p: Point ): void;
   dot( x: number, y: number ): number;
   dot( xy: number ): number;
   dot( p: Point ): number;
   dot( x: number, y: number ): void;
   dot( xy: number ): void;
   dot( p: Point ): void;
   isEqualTo( x: number, y: number ): boolean;
   isEqualTo( xy: number ): boolean;
   isEqualTo( p: Point ): boolean;
   isEqualTo( x: number, y: number ): void;
   isEqualTo( xy: number ): void;
   isEqualTo( p: Point ): void;
   isLessThan( x: number, y: number ): boolean;
   isLessThan( xy: number ): boolean;
   isLessThan( p: Point ): boolean;
   isLessThan( x: number, y: number ): void;
   isLessThan( xy: number ): void;
   isLessThan( p: Point ): void;
   manhattanDistanceTo( x: number, y: number ): number;
   manhattanDistanceTo( xy: number ): number;
   manhattanDistanceTo( p: Point ): number;
   manhattanDistanceTo( x: number, y: number ): void;
   manhattanDistanceTo( xy: number ): void;
   manhattanDistanceTo( p: Point ): void;
   manhattanDistanceToOrigin(  ): number;
   manhattanDistanceToOrigin(  ): void;
   moveBy( dx: number, dy: number ): void;
   moveBy( dxy: number ): void;
   moveBy( dp: Point ): void;
   moveBy( dx: number, dy: number ): void;
   moveBy( dxy: number ): void;
   moveBy( dp: Point ): void;
   moveTo( x: number, y: number ): void;
   moveTo( xy: number ): void;
   moveTo( p: Point ): void;
   moveTo( x: number, y: number ): void;
   moveTo( xy: number ): void;
   moveTo( p: Point ): void;
   movedBy( dx: number, dy: number ): Point;
   movedBy( dxy: number ): Point;
   movedBy( dp: Point ): Point;
   movedBy( dx: number, dy: number ): void;
   movedBy( dxy: number ): void;
   movedBy( dp: Point ): void;
   movedTo( x: number, y: number ): Point;
   movedTo( xy: number ): Point;
   movedTo( p: Point ): Point;
   movedTo( x: number, y: number ): void;
   movedTo( xy: number ): void;
   movedTo( p: Point ): void;
   mul( dx: number, dy: number ): void;
   mul( dxy: number ): void;
   mul( p: Point ): void;
   mul( dx: number, dy: number ): void;
   mul( dxy: number ): void;
   mul( p: Point ): void;
   rotate( angleRadians: number, xc: number, yc: number ): void;
   rotate( angleRadians?: number, center?: Point ): void;
   rotate( sin: number, cos: number, xc: number, yc: number ): void;
   rotate( sin: number, cos?: number, center?: Point ): void;
   rotate( angleRadians: number, xc: number, yc: number ): void;
   rotate( angleRadians?: number, center?: Point ): void;
   rotate( sin: number, cos: number, xc: number, yc: number ): void;
   rotate( sin: number, cos?: number, center?: Point ): void;
   rotated( angleRadians: number, xc: number, yc: number ): Point;
   rotated( angleRadians?: number, center?: Point ): Point;
   rotated( sin: number, cos: number, xc: number, yc: number ): Point;
   rotated( sin: number, cos?: number, center?: Point ): Point;
   rotated( angleRadians: number, xc: number, yc: number ): void;
   rotated( angleRadians?: number, center?: Point ): void;
   rotated( sin: number, cos: number, xc: number, yc: number ): void;
   rotated( sin: number, cos?: number, center?: Point ): void;
   round(  ): void;
   round(  ): void;
   rounded(  ): Point;
   rounded(  ): void;
   squaredDistanceTo( x: number, y: number ): number;
   squaredDistanceTo( xy: number ): number;
   squaredDistanceTo( p: Point ): number;
   squaredDistanceTo( x: number, y: number ): void;
   squaredDistanceTo( xy: number ): void;
   squaredDistanceTo( p: Point ): void;
   squaredDistanceToOrigin(  ): number;
   squaredDistanceToOrigin(  ): void;
   sub( dx: number, dy: number ): void;
   sub( dxy: number ): void;
   sub( p: Point ): void;
   sub( dx: number, dy: number ): void;
   sub( dxy: number ): void;
   sub( p: Point ): void;
   symmetric(  ): Point;
   symmetric(  ): void;
   symmetrize(  ): void;
   symmetrize(  ): void;
   toArray(  ): [number, number];
   toArray(  ): void;
   toString(  ): string;
   toString(  ): void;
   toVector(  ): Vector;
   toVector(  ): void;
   transform( M: Matrix ): void;
   transform( M: Matrix ): void;
   transformFast( M: Matrix ): void;
   transformFast( M: Matrix ): void;
   transformed( M: Matrix ): Point;
   transformed( M: Matrix ): void;
   transformedFast( M: Matrix ): Point;
   transformedFast( M: Matrix ): void;
   translate( x: number, y: number ): void;
   translate( xy: number ): void;
   translate( p: Point ): void;
   translate( x: number, y: number ): void;
   translate( xy: number ): void;
   translate( p: Point ): void;
   translateBy( dx: number, dy: number ): void;
   translateBy( dxy: number ): void;
   translateBy( dp: Point ): void;
   translateBy( dx: number, dy: number ): void;
   translateBy( dxy: number ): void;
   translateBy( dp: Point ): void;
   translated( x: number, y: number ): Point;
   translated( xy: number ): Point;
   translated( p: Point ): Point;
   translated( x: number, y: number ): void;
   translated( xy: number ): void;
   translated( p: Point ): void;
   translatedBy( dx: number, dy: number ): Point;
   translatedBy( dxy: number ): Point;
   translatedBy( dp: Point ): Point;
   translatedBy( dx: number, dy: number ): void;
   translatedBy( dxy: number ): void;
   translatedBy( dp: Point ): void;
   truncate(  ): void;
   truncate(  ): void;
   truncated(  ): Point;
   truncated(  ): void;
}

declare class PointGridInterpolation {
   constructor(  );
   constructor( r: Rect, Sx: SurfaceSpline, Sy?: SurfaceSpline, delta?: number, verbose?: boolean );
   constructor( r: Rect, Sx: SurfacePolynomial, Sy?: SurfacePolynomial, delta?: number, verbose?: boolean );
   constructor( r: Rect, Sx: ShepardInterpolation, Sy?: ShepardInterpolation, delta?: number, verbose?: boolean );
   constructor( PointGridInterpolation: any );
   readonly delta: number;
   readonly isValid: boolean;
   readonly referenceRect: Rect;
   assign( PointGridInterpolation: any ): PointGridInterpolation;
   clear(  ): PointGridInterpolation;
   evaluate( p: Point ): Point;
   evaluate( x: number, y: number ): Point;
   evaluate( points?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, packed?: boolean ): any[] | Float64Array;
   initialize( r: Rect, Sx: SurfaceSpline, Sy?: SurfaceSpline, delta?: number, verbose?: boolean ): PointGridInterpolation;
   initialize( r: Rect, Sx: SurfacePolynomial, Sy?: SurfacePolynomial, delta?: number, verbose?: boolean ): PointGridInterpolation;
   initialize( r: Rect, Sx: ShepardInterpolation, Sy?: ShepardInterpolation, delta?: number, verbose?: boolean ): PointGridInterpolation;
}

declare class PointShepardInterpolation {
   constructor(  );
   readonly isValid: boolean;
   clear(  ): void;
   evaluate( p: Point ): Point;
   evaluate( x: number, y: number ): Point;
   evaluate( points?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, packed?: boolean ): any[] | Float64Array;
   initialize( P1: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, P2?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, power?: number, radius?: number, smoothing?: number ): void;
}

declare class PointSurfacePolynomial {
   constructor(  );
   constructor( PointSurfacePolynomial: any );
   readonly isValid: boolean;
   assign( PointSurfacePolynomial: any ): PointSurfacePolynomial;
   clear(  ): PointSurfacePolynomial;
   evaluate( p: Point ): Point;
   evaluate( x: number, y: number ): Point;
   evaluate( points?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, packed?: boolean ): any[] | Float64Array;
   initialize( P1: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, P2?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, degree?: number ): PointSurfacePolynomial;
}

declare class PointSurfaceSpline {
   constructor(  );
   constructor( PointSurfaceSpline: any );
   readonly errorX: number;
   readonly errorY: number;
   incrementalFunctionEnabled: boolean;
   readonly isValid: boolean;
   linearFunction: Matrix;
   maxSplinePoints: number;
   readonly pointsX: any[];
   readonly pointsY: any[];
   simplifierRejectFraction: number;
   simplifiersEnabled: boolean;
   readonly truncatedX: boolean;
   readonly truncatedY: boolean;
   readonly valuesX: Vector;
   readonly valuesY: Vector;
   assign( PointSurfaceSpline: any ): PointSurfaceSpline;
   clear(  ): PointSurfaceSpline;
   evaluate( p: Point ): Point;
   evaluate( x: number, y: number ): Point;
   evaluate( points?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, packed?: boolean ): any[] | Float64Array;
   initialize( P1: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, P2?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, smoothness?: number, W?: Vector, order?: number, rbfType?: number, eps?: number, polynomial?: boolean ): PointSurfaceSpline;
   initializeWithInverse( P1: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, P2?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, smoothness?: number, W?: Vector, order?: number, rbfType?: number, eps?: number, polynomial?: boolean ): PointSurfaceSpline;
}

/**
 * This class implements algorithms for the reduction of positions of solar system bodies and stars. It allows for the calculation of geometric, astrometric, proper, apparent, and intermediate places, including geocentric and topocentric coordinates.
 * The implemented vector astrometry and ephemeris calculation algorithms are rigorous and compliant with current IAU and IERS resolutions. Both equinox-based and CIO-based paradigms have been implemented for the calculation of positions that depend on Earth's rotation. The apparent and intermediate places include the following corrections:
 * Vector components are expressed in astronomical units (au) for stars and all solar system bodies except the Moon, for which positions are given inkilometers.
 * As of writing this documentation (October 2018, last updated April 2026), the IAU 2006/2000A[1] precession-nutation theory is implemented (adjusted model with corrections to nutation angles, IAU 2006/2000AR). The standard fundamental ephemerides are JPL's DE440.
 * Most of the reference publications and materials used are cited in this documentation. The main authoritative resource is the latest version of The Explanatory Supplement to the Astronomical Almanac.[2]
 */
declare class Position {
   /**
    * The astronomical unit (au) in kilometers.
    */
   static readonly AU_KM: number;
   /**
    * The speed of light in au per day.
    */
   static readonly C_AU_DAY: number;
   /**
    * The speed of light in kilometers per day.
    */
   static readonly C_KM_DAY: number;
   /**
    * The speed of light in kilometers per second.
    */
   static readonly C_KM_S: number;
   static readonly EARTH_OMEGA: number;
   /**
    * Constructs a Position object initialized for the specified time of calculation t in the specified timescale.
    * The supported time scales are:
    * TT
    * Terrestrial Time. This is the default timescale.
    * TDB
    * Barycentric Dynamical Time.
    * Teph
    * Ephemeris time, as defined by JPL DE/LE numerical integrations. For all purposes, this is equivalent to TDB.
    * UTC
    * Coordinated Universal Time.
    * TAI
    * Atomic International Time.
    * UT1
    * Universal Time.
    * UT
    * Universal Time (same as UT1).
    * timescale string values are considered case-sensitive.
    * All the necessary timescale conversions to compute ephemerides and reduction of positions are performed automatically.
    */
   constructor( t?: Date, timescale?: string );
   /**
    * Constructs a Position object initialized for the specified time of calculation specified as a String instance in ISO 8601 format in the specified timescale.
    * See the constructor with a Date argument for a complete description.
    */
   constructor( isoDateTime?: string, timescale?: string );
   /**
    * Constructs a Position object initialized for the specified time of calculation specified as separate jd1 and jd2 Julian date components in the specified timescale.
    * See the constructor with a Date argument for a complete description.
    */
   constructor( jd1?: number, jd2?: number, timescale?: string );
   /**
    * Constructs a Position object initialized as a duplicate of an existing instance src.
    */
   constructor( Position: any );
   /**
    * Conversion from rectangular ecliptic to rectangular equatorial coordinates.
    * e
    * Rectangular ecliptic coordinates.
    * eps
    * The obliquity of the ecliptic in radians.
    * Returns a vector whose components are the rectangular equatorial coordinates corresponding to the specified ecliptic position e at the epoch where the specified obliquity has been calculated.
    */
   static eclipticToEquatorial( e: Vector, eps: number ): Vector;
   /**
    * Conversion from rectangular ecliptic to rectangular equatorial coordinates.
    * e
    * Rectangular ecliptic coordinates.
    * se
    * Sine of the obliquity of the ecliptic.
    * ce
    * Cosine of the obliquity of the ecliptic.
    * Returns a vector whose components are the rectangular equatorial coordinates corresponding to the specified ecliptic position e at the epoch where the specified obliquity has been calculated.
    */
   static eclipticToEquatorial( e: Vector, se: number, ce: number ): Vector;
   /**
    * Conversion from spherical ecliptic to spherical equatorial coordinates.
    * pLL
    * Spherical ecliptic coordinates, where pLL.x is the longitude, and pLL.y is the latitude, both expressed in radians.
    * eps
    * The obliquity of the ecliptic in radians.
    * Returns a point whose components are the spherical equatorial coordinates corresponding to the specified ecliptic position pLL at the epoch where the specified obliquity has been calculated. The returned Point.x property is the right ascension, and Point.y is the declination, both in radians.
    */
   static eclipticToEquatorial( pLL: Point, eps: number ): Point;
   /**
    * Conversion from spherical ecliptic to spherical equatorial coordinates.
    * pLL
    * Spherical ecliptic coordinates, where pLL.x is the longitude, and pLL.y is the latitude, both expressed in radians.
    * se
    * Sine of the obliquity of the ecliptic.
    * ce
    * Cosine of the obliquity of the ecliptic.
    * Returns a point whose components are the spherical equatorial coordinates corresponding to the specified ecliptic position pLL at the epoch where the specified obliquity has been calculated. The returned Point.x property is the right ascension, and Point.y is the declination, both in radians.
    */
   static eclipticToEquatorial( pLL: Point, se: number, ce: number ): Point;
   /**
    * Conversion from rectangular equatorial to rectangular ecliptic coordinates.
    * q
    * Rectangular equatorial coordinates.
    * eps
    * The obliquity of the ecliptic in radians.
    * Returns a vector whose components are the rectangular ecliptic coordinates corresponding to the specified equatorial position q at the epoch where the specified obliquity has been calculated.
    */
   static equatorialToEcliptic( q: Vector, eps: number ): Vector;
   /**
    * Conversion from rectangular equatorial to rectangular ecliptic coordinates.
    * q
    * Rectangular equatorial coordinates.
    * se
    * Sine of the obliquity of the ecliptic.
    * ce
    * Cosine of the obliquity of the ecliptic.
    * Returns a vector whose components are the rectangular ecliptic coordinates corresponding to the specified equatorial position q at the epoch where the specified obliquity has been calculated.
    */
   static equatorialToEcliptic( q: Vector, se: number, ce: number ): Vector;
   /**
    * Conversion from spherical equatorial to spherical ecliptic coordinates.
    * pRD
    * Spherical equatorial coordinates, where pRD.x is the right ascension, and pLL.y is the declination, both expressed in radians.
    * eps
    * The obliquity of the ecliptic in radians.
    * Returns a point whose components are the spherical ecliptic coordinates corresponding to the specified equatorial position pRD at the epoch where the specified obliquity has been calculated. The returned Point.x property is the ecliptic longitude, and Point.y is the ecliptic latitude, both in radians.
    */
   static equatorialToEcliptic( pRD: Point, eps: number ): Point;
   /**
    * Conversion from spherical equatorial to spherical ecliptic coordinates.
    * pRD
    * Spherical equatorial coordinates, where pRD.x is the right ascension, and pLL.y is the declination, both expressed in radians.
    * se
    * Sine of the obliquity of the ecliptic.
    * ce
    * Cosine of the obliquity of the ecliptic.
    * Returns a point whose components are the spherical ecliptic coordinates corresponding to the specified equatorial position pRD at the epoch where the specified obliquity has been calculated. The returned Point.x property is the ecliptic longitude, and Point.y is the ecliptic latitude, both in radians.
    */
   static equatorialToEcliptic( pRD: Point, se: number, ce: number ): Point;
   /**
    * Conversion from rectangular galactic to ICRS rectangular equatorial coordinates.
    * g
    * Rectangular galactic coordinates.
    * Returns a vector whose components are the calculated rectangular equatorial coordinates in the ICRS.
    * See icrsEquatorialToGalactic( Vector ) for detailed information.
    */
   static galacticToICRSEquatorial( r: Vector ): Vector;
   /**
    * Conversion from rectangular galactic to ICRS rectangular equatorial coordinates.
    * x, y, z
    * Rectangular galactic coordinates.
    * Returns a vector whose components are the calculated rectangular equatorial coordinates in the ICRS.
    * See icrsEquatorialToGalactic( Vector ) for detailed information.
    */
   static galacticToICRSEquatorial( x: number, y: number, z: number ): Vector;
   /**
    * Conversion from spherical galactic to ICRS spherical equatorial coordinates.
    * pLL
    * Spherical galactic coordinates, where pLL.x is the galactic longitude, and pLL.y is the galactic latitude, both expressed in radians.
    * Returns a point whose components are the calculated spherical equatorial coordinates in the ICRS. The returned Point.x property is the right ascension, and Point.y is the declination, both in radians.
    * See icrsEquatorialToGalactic( Vector ) for detailed information.
    */
   static galacticToICRSEquatorial( pLL: Point ): Point;
   /**
    * Conversion from spherical galactic to ICRS spherical equatorial coordinates.
    * lon
    * Galactic longitude in radians.
    * lat
    * Galactic latitude in radians.
    * Returns a point whose components are the calculated spherical equatorial coordinates in the ICRS. The returned Point.x property is the right ascension, and Point.y is the declination, both in radians.
    * See icrsEquatorialToGalactic( Vector ) for detailed information.
    */
   static galacticToICRSEquatorial( lon: number, lat: number ): Point;
   /**
    * Conversion from rectangular equatorial to ICRS rectangular galactic coordinates.
    * q
    * Rectangular equatorial coordinates.
    * Returns a vector whose components are the calculated rectangular galactic coordinates in the ICRS.
    * In this routine we adopt the proposed ICRS coordinates of the galactic pole in Jia-Cheng Liu (2018).[7]
    * The applied conventional definitions are as follows. The ICRS equatorial coordinates of the zero point of galactic coordinates are:
    * α = 17h45m40s.0400
    * δ = –29°00'28".138
    * The equatorial coordinates of the galactic pole, coherent with the ICRS, are:
    * αp = 12h51m36s.7151981
    * δp = +27°06'11".193172
    * Note that these definitions are not consistent with the conventional values currently accepted by the IAU. The current (as of June 2024) galactic coordinate system was defined by the IAU in 1959 in the FK4 B1950.0 reference system.
    */
   static icrsEquatorialToGalactic( q: Vector ): Vector;
   /**
    * Conversion from rectangular equatorial to ICRS rectangular galactic coordinates.
    * x, y, z
    * Rectangular equatorial coordinates.
    * Returns a vector whose components are the calculated rectangular galactic coordinates in the ICRS.
    * See icrsEquatorialToGalactic( Vector ) for detailed information.
    */
   static icrsEquatorialToGalactic( x: number, y: number, z: number ): Vector;
   /**
    * Conversion from spherical equatorial to ICRS spherical galactic coordinates.
    * pRD
    * Spherical equatorial coordinates, where pRD.x is the right ascension, and pLL.y is the declination, both expressed in radians.
    * Returns a point whose components are the calculated spherical galactic coordinates in the ICRS. The returned Point.x property is the galactic longitude, and Point.y is the galactic latitude, both in radians.
    * See icrsEquatorialToGalactic( Vector ) for detailed information.
    */
   static icrsEquatorialToGalactic( pRD: Point ): Point;
   /**
    * Conversion from spherical equatorial to ICRS spherical galactic coordinates.
    * alpha
    * Rioght ascension in radians.
    * delta
    * Declination in radians.
    * Returns a point whose components are the calculated spherical galactic coordinates in the ICRS. The returned Point.x property is the galactic longitude, and Point.y is the galactic latitude, both in radians.
    * See icrsEquatorialToGalactic( Vector ) for detailed information.
    */
   static icrsEquatorialToGalactic( alpha: number, delta: number ): Point;
   /**
    * The Celestial Intermediate Origin (CIO) locator, in radians.
    * Reading this property implicitly calls initEquinoxBasedParameters() if necessary to ensure that all the data required for equinox-based reduction of positions is available.
    */
   readonly CIO: number;
   /**
    * Coordinates of the Celestial Intermediate Pole (CIP) in the GCRS, in radians.
    * Reading this property implicitly calls initEquinoxBasedParameters() if necessary to ensure that all data required for equinox-based reduction of positions is available.
    */
   readonly CIP: Vector;
   /**
    * Coordinates of the Celestial Intermediate Pole (CIP) in the ITRS.
    * If possible, this property returns an interpolated value from the global CIP_ITRS database, which will be loaded and parsed upon the first access as a thread-safe procedure. See EphemerisFile.cipITRSDataFilePath for more information. See also polarMotionEnabled for some practical considerations.
    * Otherwise, if the time of calculation for this object falls outside the CIP_ITRS database time span, this property will return a two-dimensional vector with zero components.
    * The components of the returned 2-D vector are the coordinates xp, yp of the CIP with respect to the ITRS, expressed in radians.
    */
   readonly CIP_ITRS: Vector;
   /**
    * Equation of the origins, expressed in radians.
    * Reading this property implicitly calls initEquinoxBasedParameters() if necessary to ensure that all data required for equinox-based reduction of positions is available.
    */
   readonly EO: number;
   /**
    * Earth rotation angle, expressed in radians.
    * Reading this property implicitly calls initEquinoxBasedParameters() if necessary to ensure that all data required for equinox-based reduction of positions is available.
    */
   readonly ERA: number;
   /**
    * Greenwich apparent sidereal time, expressed in radians.
    * Reading this property implicitly calls initEquinoxBasedParameters() if necessary to ensure that all data required for equinox-based reduction of positions is available.
    */
   readonly GAST: number;
   /**
    * The time of calculation for this object in the Barycentric Dynamical Time (TDB) timescale.
    */
   readonly TDB: Date;
   /**
    * The time of calculation for this object in the Barycentric Dynamical Time (TDB) timescale, given as a Julian date.
    */
   readonly TDB_JD: number;
   /**
    * The time of calculation for this object in the Terrestrial Time (TT) timescale.
    */
   readonly TT: Date;
   /**
    * The time of calculation for this object in the Terrestrial Time (TT) timescale, given as a Julian date.
    */
   readonly TT_JD: number;
   /**
    * The time of calculation for this object in the ephemeris timescale defined by the JPL DE/LE numerical integration. For all purposes this is equivalent to TDB.
    */
   readonly Teph: Date;
   /**
    * The time of calculation for this object in the ephemeris timescale defined by the JPL DE/LE numerical integration, given as a Julian date. Equivalent to TDB for all practical purposes.
    */
   readonly Teph_JD: number;
   /**
    * The time of calculation for this object in the Universal Time (UT1) timescale.
    */
   readonly UT1: Date;
   /**
    * The time of calculation for this object in the Universal Time (UT1) timescale, given as a Julian date.
    */
   readonly UT1_JD: number;
   /**
    * The time of calculation for this object in the Coordinated Universal Time (UTC) timescale.
    */
   readonly UTC: Date;
   /**
    * The time of calculation for this object in the Coordinated Universal Time (UTC) timescale, given as a Julian date.
    */
   readonly UTC_JD: number;
   /**
    * The ICRS barycentric position of the Earth (barycentric rectangular equatorial coordinates) computed for the TDB time of calculation by the class constructor. The components of the returned vector are expressed in au.
    */
   readonly barycentricPositionOfEarth: Vector;
   /**
    * The ICRS barycentric position of the observer (barycentric rectangular equatorial coordinates) computed for the TDB time of calculation. The components of the returned vector are expressed in au.
    */
   readonly barycentricPositionOfObserver: Vector;
   /**
    * The ICRS barycentric position of the Sun (barycentric rectangular equatorial coordinates) computed for the TDB time of calculation by the class constructor. The components of the returned vector are in au.
    */
   readonly barycentricPositionOfSun: Vector;
   /**
    * The ICRS barycentric velocity of the Earth (barycentric rectangular equatorial coordinates) computed for the TDB time of calculation by the class constructor. The components of the returned vector are expressed in au/day.
    */
   readonly barycentricVelocityOfEarth: Vector;
   /**
    * The inverse of the CIO-based combined bias-precession-nutation matrix.
    * Reading this property implicitly calls initCIOBasedParameters() if necessary to ensure that all data required for equinox-based and CIO-based reduction of positions is available.
    */
   readonly cioBPNInverseMatrix: Matrix;
   /**
    * The CIO-based combined bias-precession-nutation matrix.
    * Reading this property implicitly calls initCIOBasedParameters() if necessary to ensure that all data required for equinox-based and CIO-based reduction of positions is available.
    */
   readonly cioBPNMatrix: Matrix;
   /**
    * Mean obliquity of the ecliptic, in radians.
    */
   readonly epsA: number;
   /**
    * The inverse of the equinox-based combined bias-precession-nutation matrix.
    * Reading this property implicitly calls initEquinoxBasedParameters() if necessary to ensure that all data required for equinox-based reduction of positions is available.
    */
   readonly equinoxBPNInverseMatrix: Matrix;
   /**
    * The equinox-based combined bias-precession-nutation matrix.
    * Reading this property implicitly calls initEquinoxBasedParameters() if necessary to ensure that all data required for equinox-based reduction of positions is available.
    */
   readonly equinoxBPNMatrix: Matrix;
   /**
    * The ICRS geocentric position vector of the observer computed for the TDB time of calculation. The components of the returned vector are expressed in km.
    * If polar motion corrections are enabled and valid CIP_ITRS data are available for the current time of calculation, polar motion is taken into account in the calculation of the observer's geocentric position and velocity. See observer for more information.
    * If a valid observer location has not been defined for this object (by setting its observer property), this property provides an empty vector.
    */
   readonly geocentricPositionOfObserver: Vector;
   /**
    * The ICRS geocentric velocity vector of the observer computed for the TDB time of calculation. The components of the returned vector are expressed in km/day.
    * If polar motion corrections are enabled and valid CIP_ITRS data are available for the current time of calculation, polar motion is taken into account in the calculation of the observer's geocentric position and velocity. See observer for more information.
    * If a valid observer location has not been defined for this object (by setting its observer property), this property provides an empty vector.
    */
   readonly geocentricVelocityOfObserver: Vector;
   /**
    * The ICRS heliocentric position of the Earth (heliocentric rectangular equatorial coordinates) computed for the TDB time of calculation by the class constructor. The components of the returned vector are expressed in au.
    */
   readonly heliocentricPositionOfEarth: Vector;
   /**
    * The ICRS heliocentric position of the observer (heliocentric rectangular equatorial coordinates) computed for the TDB time of calculation. The components of the returned vector are expressed in au.
    * If a valid observer location has not been defined for this object (by setting its observer property), this property provides an empty vector.
    */
   readonly heliocentricPositionOfObserver: Vector;
   /**
    * The value of this property is true iff a valid observer location has been defined for this object by setting its observer property.
    */
   readonly isTopocentric: boolean;
   /**
    * The current observer. If no observer has been defined for this object, this property provides a default-constructed structure for a fictitious observer at the geocenter.
    */
   observer: ObserverPosition;
   /**
    * This property is true iff topocentric places take into account polar motion corrections to compute the geocentric position and velocity of the observer. This involves calculation of CIP coordinates with respect to the ITRS, as well as access to a database of CIP/ITRS positions. See the CIP_ITRS property for more details.
    * Polar motion introduces changes at the mas level for calculation of topocentric coordinates of the Moon. For the rest of objects, the effect of polar motion corrections is completely negligible. For topocentric positions of the Moon, polar motion can be necessary to achieve the highest accuracy, but in such case one may also have to take into account a regional geoid referred to the Earth's reference ellipsoid. See the ObserverPosition class.
    */
   polarMotionEnabled: boolean;
   /**
    * Computes the apparent place of a solar system body.
    * The returned vector is the apparent place of the object defined by the specified ephemeris handle H in geocentric or topocentric rectangular equatorial coordinates, calculated for the instant defined by this object in the TT timescale.
    * The implemented reduction algorithm includes the following corrections:
    * Light-travel time.
    * Relativistic deflection of light due to solar gravitation (except for the Sun, the Moon, and any object closer to Earth than the Sun at the time of observation.
    * Aberration of light, including relativistic terms.
    * Frame bias, precession, and nutation. The origin of right ascension is the true equinox of date.
    * The declination coordinate is identical in both equinox-based (apparent) and CIO-based (intermediate) positions. Only the origin of right ascensions differs between the two systems.
    * If a valid observer location has been defined by modifying the observer property, and the specified ObserverPosition structure requires CIO-based transformations (see the ObserverPosition.cioBased property), this function will throw an Error exception.
    */
   apparent( EphemerisHandle: any ): Vector;
   /**
    * Computes the apparent place of a star.
    * The returned vector is the apparent place calculated for the positional star data defined by the specified object S. Its components are geocentric or topocentric rectangular equatorial coordinates, calculated for the instant defined by this object in the TT timescale.
    * The implemented reduction algorithm includes the following corrections:
    * Space motion, including parallax, radial velocity, and proper motions, with corrections for the relativistic Doppler effect.
    * Relativistic deflection of light due to solar gravitation.
    * Aberration of light, including relativistic terms.
    * Frame bias, precession, and nutation. The origin of right ascension is the true equinox of date.
    * The declination coordinate is identical in both equinox-based (apparent) and CIO-based (intermediate) positions. Only the origin of right ascensions differs between the two systems.
    * If a valid observer location has been defined by modifying the observer property, and the specified ObserverPosition structure requires CIO-based transformations (see the ObserverPosition.cioBased property), this function will throw an Error exception.
    */
   apparent( StarPosition: any ): Vector;
   /**
    * Returns the observed visual magnitude of a solar system body.
    * For objects with known H and G values (absolute magnitude and slope parameters, respectively; see EphemerisHandle.H and EphemerisHandle.G), the apparent visual magnitude is calculated applying the algorithm for minor planets described in Bowell et al. (1989).[3] See also The Explanatory Supplement,[2] Section 10.4.3.
    * For objects with known M1 or M2 parameters (absolute total or nuclear comet magnitudes), the apparent visual magnitude is calculated as either the total comet magnitude (nucleus+coma) or, if only M2 is known, the comet nucleus magnitude. The algorithms are described in the documentation for the EphemerisHandle.M1 property.
    * For Mercury, Venus, Mars, Jupiter, Saturn, and Neptune, we apply the equations described in the paper by Mallama et al.[4]
    * For Saturn, we compute the apparent visual magnitude taking into account the planet's rings.
    * For Uranus, Pluto and the Galilean satellites of Jupiter, data from various sources are taken from Table 10.6 of the Explanatory Supplement.[2]
    * If the required data are not available, or if no algorithm is known for the calculation of the apparent visual magnitude of the specified object, this member function returns null.
    * A null value is also returned when the phase angle of the object at the time of calculation is beyond the limits of the set of observations used to generate the underlying models. For Mercury, apparent magnitudes are only calculated for phase angles 2° ≤ i ≤; 170°. For Venus, the magnitude is only calculated for 0° < i ≤ 163°.7. The valid range for Mars is i ≤ 50°.
    */
   apparentVisualMagnitude( EphemerisHandle: any ): number | null;
   /**
    * Constructs a new Position object as a copy of the specified src object.
    */
   assign( Position: any ): Position;
   /**
    * Computes the astrometric place of a solar system body.
    * The returned vector is the astrometric place of the object defined by the specified ephemeris handle H in geocentric or topocentric rectangular equatorial coordinates, calculated for the instant defined by this object in the TT timescale.
    * The implemented reduction algorithm includes the following corrections:
    * Light-travel time.
    * Relativistic deflection of light due to solar gravitation (except for the Sun, the Moon, and any object closer to Earth than the Sun at the time of observation).
    * An astrometric place does not include annual aberration, nutation, and precession corrections. Hence, it is referred to an 'hybrid' reference system, but similar to GCRS J2000.0.
    */
   astrometric( EphemerisHandle: any ): Vector;
   /**
    * Computes the astrometric place of a star.
    * The returned vector is the astrometric place calculated for the positional star data defined by the specified object S. Its components are geocentric or topocentric rectangular equatorial coordinates, calculated for the instant defined by this object in the TT timescale.
    * The implemented reduction algorithm includes the following corrections:
    * Space motion, including parallax, radial velocity, and proper motions, with corrections for the relativistic Doppler effect.
    * Relativistic deflection of light due to solar gravitation.
    * An astrometric place does not include annual aberration, nutation and precession corrections. Hence it is referred to an 'hybrid' reference system, but similar to GCRS J2000.0.
    */
   astrometric( StarPosition: any ): Vector;
   /**
    * Returns the barycentric observation time (also known as Barycentric Julian Date, or BJD) in the TDB timescale for a given position vector and distance.
    * n
    * Position vector from the observer to the object. Only the vector's direction is used; its magnitude will be ignored.
    * d
    * Distance from the observer to the object in au.
    * If the specified distance d is zero or insignificant, the object is assumed to be infinitely far away. If d is greater than 10,000 au, this function applies a two-term Taylor expansion to overcome the limitation imposed by double precision floating point arithmetics in these cases. For smaller distances, the exact expression assuming a spherical waveform is used.
    * If a valid observer location has not been defined for this object (by setting its observer property), the specified position vector n is assumed to define topocentric coordiantes. In this case, the barycentric position of the observer will be used in the calculation. If no valid observer has been defined, the vector n is assumed to represent geocentric coordinates, and a geocentric observer is assumed.
    * This function calculates the Roemer delay expression for the observation time defined by this Position instance in the TDB timescale. In the current version, relativistic effects are ignored, that is, the Saphiro and Einstein delays are not applied. However, these corrections have magnitudes at the microsecond level, which is irrelevant in most applications.
    * The implemented algorithms are those described in eastman (2010).[5]
    * Returns the observation time in the TDB timescale (as provided by the TDB property) plus the calculated time delay.
    */
   barycentricObservationTime( n: Vector, d: number ): Date;
   /**
    * Returns true iff the apparent visual magnitude of the object represented by the specified handle H can be calculated with the current implementation, at the calculation time defined by this instance.
    * Currently, apparent visual magnitudes can be calculated for the following solar system bodies:
    * Objects providing valid H and G parameters (absolute magnitude and slope coefficient). This happens for most asteroids included in standard XEPH files.
    * Objects providing valid M1 or M2 parameters (absolute total or nuclear comet magnitudes). This happens for most comets included in standard XEPH files.
    * Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto.
    * The four Galilean satellites of Jupiter: Io, Europa, Ganymede, and Callisto.
    */
   canComputeApparentVisualMagnitude( EphemerisHandle: any ): boolean;
   /**
    * Returns true iff the comet's apparent visual nuclear magnitude can be calculated at the calculation time defined by this instance for the object represented by the specified handle H.
    * This function returns true only if the object provides a valid M2 parameter, the absolute nuclear comet magnitude. This is the case for many comets included in standard XEPH files.
    */
   canComputeCometApparentVisualNuclearMagnitude( EphemerisHandle: any ): boolean;
   /**
    * Returns true iff the comet's apparent visual total magnitude can be calculated at the calculation time defined by this instance for the object represented by the specified handle H.
    * This function returns true only if the object provides a valid M1 parameter, the absolute total comet magnitude (nucleus and coma). This is the case for most comets included in standard XEPH files.
    */
   canComputeCometApparentVisualTotalMagnitude( EphemerisHandle: any ): boolean;
   /**
    * Returns the comet's apparent visual nuclear magnitude.
    * Nuclear comet magnitudes include the observed brightness of the comet's nucleus, excluding the coma. For information on the calculation of comet magnitudes, see the EphemerisHandle.M1 property.
    * If the required data are not available for the specified object, this function returns null.
    */
   cometApparentVisualNuclearMagnitude( EphemerisHandle: any ): number | null;
   /**
    * Returns the comet's apparent visual total magnitude.
    * Total comet magnitudes include the observed brightness of the comet nucleus and coma. For information on the calculation of comet magnitudes, see the EphemerisHandle.M1 property.
    * If the required data are not available for the specified object, this function returns null.
    */
   cometApparentVisualTotalMagnitude( EphemerisHandle: any ): number | null;
   /**
    * Conversion from spherical equatorial to spherical local horizontal coordinates (azimuth and altitude) for the specified right ascension pRD[0] and declination pRD[1] coordinates in radians. See the version of this function with a single Point argument for detailed information.
    */
   equatorialToHorizontal( pRD: any[] ): Point;
   /**
    * Conversion from spherical equatorial to spherical local horizontal coordinates (azimuth and altitude).
    * q
    * Spherical equatorial coordinates in radians, where q.x is the right ascension, and q.y is the declination.
    * Returns the horizontal coordinates in radians as a point p, where p.x is the azimuth in the range [0,2π) and p.y is the altitude in [-π/2,+π/2]. The horizontal coordinates are calculated at the current local hour angle for the specified right ascension.
    * This function requires valid geodetic coordinates of the observer defined by setting the value of the observer property. If no valid observer coordinates have been defined, this function returns zero horizontal coordinates conventionally.
    * Local hour angles are calculated either from the Greenwich Apparent Sidereal Time (GAST) or the Earth Rotation Angle (ERA), respectively for equinox-based and CIO-based observers.
    * For accurate results, apparent topocentric coordinates should be specified, including corrections for diurnal parallax and diurnal aberration.
    */
   equatorialToHorizontal( pRD: Point ): Point;
   /**
    * Conversion from spherical equatorial to spherical local horizontal coordinates (azimuth and altitude) for the specified right ascension alpha and declination delta coordinates in radians. See the version of this function with a single Point argument for detailed information.
    */
   equatorialToHorizontal( alpha: number, delta: number ): Point;
   /**
    * Computes the geometric position of a solar system body.
    * The components of the returned vector are the geocentric or topocentric rectangular equatorial coordinates for the instant of calculation defined by this object in the TT timescale, accounting for light-travel time, for the body defined by the specified ephemeris handle H.
    * The implemented reduction algorithm includes just the correction for light-travel time, but no corrections for light deflection, annual aberration, nutation, or precession. The position so calculated allows to plot the specified body directly on an existing sky chart referred to GCRS/J2000.0. Note however, that for generation of new graphical representations for a given date using star catalog data, astrometric or proper places should be used instead.
    */
   geometric( EphemerisHandle: any ): Vector;
   /**
    * Computes the geometric position of a star.
    * The components of the returned vector are the geocentric or topocentric rectangular equatorial coordinates for the instant of calculation defined by this object in the TT timescale, for the positional star data defined by the specified object S.
    * The implemented reduction algorithm includes just the corrections for space motion: parallax, radial velocity, and proper motions, when the corresponding data items are nonzero in the specified object S. The space motion vector includes terms to account for the relativistic Doppler effect.
    */
   geometric( StarPosition: any ): Vector;
   /**
    * Calculates all parameters and data structures necessary for CIO-based reduction of positions.
    * This function starts by calling initEquinoxBasedParameters(), so it implicitly calculates all equinox-based parameters. Then it calculates the CIO-based combined bias-precession-nutation matrix. See The Explanatory Supplement,[2] sections 6.7 and 7.2.5.2.
    * Since all of these items depend exclusively on time, they are computed only once in the first call to this function, and subsequent calls will have no effect.
    * Normally, you don't have to call this function directly because it is invoked automatically when necessary by the different position reduction routines.
    */
   initCIOBasedParameters(  ): Position;
   /**
    * Calculates all parameters and data structures necessary for equinox-based reduction of positions.
    * This function calculates the following structures:
    * Precession+bias angles, IAU 2006 precession model, Fukushima-Williams parameterization. See The Explanatory Supplement,[2] sections 6.6.2.2 and 7.2.5.1.
    * Mean obliquity of the ecliptic, IAU 2006 precession model. See The Explanatory Supplement,[2] section 7.2.5.1.
    * Nutation angles, IAU 2006/2000A_R nutation model. See The Explanatory Supplement,[2] section 6.6.1.
    * Combined bias-precession-nutation matrix, equinox-based. See The Explanatory Supplement,[2] sections 6.7 and 7.2.5.1.
    * Position of the Celestial Intermediate Pole (CIP). The Explanatory Supplement,[2] section 6.7.
    * Celestial Intermediate Origin (CIO) locator. The Explanatory Supplement,[2] section 6.7.
    * Equation of the origins (EO). See Wallace (2006)[1] and The Explanatory Supplement,[2] section 6.4.
    * Earth rotation angle (ERA) for the UT1 time of calculation. See IERS Technical Note No. 32 (2003),[6] section 5.4.4.
    * Greenwich Apparent Sidereal Time (GAST), IAU 2006. The Explanatory Supplement,[2] section 6.8.5.
    * Since all of these items depend exclusively on time, they are computed only once in the first call to this function, and subsequent calls will have no effect.
    * Normally, you don't have to call this function directly because it is invoked automatically when necessary by the different position reduction routines.
    */
   initEquinoxBasedParameters(  ): Position;
   /**
    * Computes the intermediate place of a solar system body.
    * The returned vector is the intermediate place of the object defined by the specified ephemeris handle H in geocentric or topocentric rectangular equatorial coordinates, calculated for the instant defined by this object in the TT timescale.
    * The implemented reduction algorithm includes the following corrections:
    * Light-travel time.
    * Relativistic deflection of light due to solar gravitation (except for the Sun, the Moon, and any object closer to Earth than the Sun at the time of observation.
    * Aberration of light, including relativistic terms.
    * Frame bias, precession and nutation. The origin of right ascension is the Celestial Intermediate Origin (CIO), following the IAU recommendations since January 2003.
    * The declination coordinate is identical in both equinox-based (apparent) and CIO-based (intermediate) positions. Only the origin of right ascensions differs between the two systems.
    * If a valid observer location has been defined by modifying the observer property, and the specified ObserverPosition structure requires equinox-based transformations (see the ObserverPosition.cioBased property), this function will throw an Error exception.
    */
   intermediate( EphemerisHandle: any ): Vector;
   /**
    * Computes the intermediate place of a star.
    * The returned vector is the intermediate place calculated for the positional star data defined by the specified object S. Its components are geocentric or topocentric rectangular equatorial coordinates, calculated for the instant defined by this object in the TT timescale.
    * The implemented reduction algorithm includes the following corrections:
    * Space motion, including parallax, radial velocity and proper motions, with corrections for the relativistic Doppler effect.
    * Relativistic deflection of light due to solar gravitation.
    * Aberration of light, including relativistic terms.
    * Frame bias, precession and nutation. The origin of right ascension is the Celestial Intermediate Origin (CIO), following the IAU recommendations since January 2003.
    * The declination coordinate is identical in both equinox-based (apparent) and CIO-based (intermediate) positions. Only the origin of right ascensions differs between the two systems.
    * If a valid observer location has been defined by modifying the observer property, and the specified ObserverPosition structure requires equinox-based transformations (see the ObserverPosition.cioBased property), this function will throw an Error exception.
    */
   intermediate( StarPosition: any ): Vector;
   /**
    * Computes the light-travel time for a solar system body.
    * The returned value is the light-travel time in days for the instant of calculation defined by this object in the TT timescale, calculated for the body defined by the specified ephemeris handle H.
    */
   lightTravelTime( EphemerisHandle: any ): number;
   /**
    * Returns the nutation angles in radians as an Array object, where the first array element is the nutation in longitude, and the second element is the nutation in obliquity. Both angles are expressed in radians.
    * This function calls initEquinoxBasedParameters() to ensure that all data required for equinox-based reduction of positions is available.
    */
   nutationAngles(  ): any[];
   /**
    * The observed phase angle of a solar system body, in radians.
    * The phase angle of a solar system body is the angle between the observer-body and Sun-body vectors.
    */
   phaseAngle( EphemerisHandle: any ): number;
   /**
    * The observed phase angle of a star, in radians.
    * The phase angle of a star is the angle between the observer-star and Sun-star vectors.
    */
   phaseAngle( StarPosition: any ): number;
   /**
    * Computes the proper place of a solar system body.
    * The returned vector is the proper place of the object defined by the specified ephemeris handle H in geocentric or topocentric rectangular equatorial coordinates, calculated for the instant defined by this object in the TT timescale.
    * The implemented reduction algorithm includes the following corrections:
    * Light-travel time.
    * Relativistic deflection of light due to solar gravitation (except for the Sun, the Moon, and any object closer to Earth than the Sun at the time of observation.
    * Aberration of light, including relativistic terms.
    * A proper place does not include nutation and precession corrections; hence, it is referred to the reference coordinate system: GCRS J2000.0.
    */
   proper( EphemerisHandle: any ): Vector;
   /**
    * Computes the proper place of a star.
    * The returned vector is the proper place calculated for the positional star data defined by the specified object S. Its components are geocentric or topocentric rectangular equatorial coordinates, calculated for the instant defined by this object in the TT timescale.
    * The implemented reduction algorithm includes the following corrections:
    * Space motion, including parallax, radial velocity, and proper motions, with corrections for the relativistic Doppler effect.
    * Relativistic deflection of light due to solar gravitation.
    * Aberration of light, including relativistic terms.
    * A proper place does not include nutation and precession corrections; hence, it is referred to the reference coordinate system: GCRS J2000.0.
    */
   proper( StarPosition: any ): Vector;
   /**
    * Computes the true position of a solar system body.
    * The components of the returned vector are the geocentric or topocentric rectangular equatorial coordinates for the calculation instant defined by this object in the TT timescale, without accounting for light-travel time, for the body defined by the specified ephemeris handle H.
    * This function calls geometric( EphemerisHandle ) internally to compute, if necessary, the geometric position with correction for light time, that is, no separate calculation routine is implemented for true positions. The returned vector is only useful to compute the true geocentric or topocentric distance, and for verification purposes.
    */
   true( EphemerisHandle: any ): Vector;
   /**
    * Computes the geometric position of a star.
    * This function has been implemented for completeness. It is a synonym for geometric( StarPosition ). There are no known 'true' positions of stars, since their light-travel time is implicitly included in the space motion equations.
    */
   true( StarPosition: any ): Vector;
   /**
    * Computes the true distance of a solar system body.
    * The true distance is the actual distance from the body to the observer, geocentric or topocentric, at the instant of calculation. This excludes the light-travel time correction.
    */
   trueDistance( EphemerisHandle: any ): number;
   /**
    * Computes the true distance of a star.
    * The returned value is just the norm of the geometric position vector, that is:
    * geometric( S ).l2Norm()
    * This should be an actual distance in au only for stars with known parallaxes. For stars where the parallax is unknown or undefined, this value is meaningless because in such cases position vectors are unit vectors, whose components are also known as direction cosines.
    */
   trueDistance( StarPosition: any ): number;
}

declare class ProcessInstance {
   constructor();
   static fromIcon( iconId: string ): ProcessInstance;
   static icons(  ): any[];
   static iconsByProcessId( processId: string ): any[];
   assign( src: ProcessInstance ): ProcessInstance;
   canExecuteGlobal(  ): boolean;
   canExecuteGlobalOrThrow(  ): ProcessInstance;
   canExecuteOn( view: View ): boolean;
   canExecuteOn( image: Image ): boolean;
   canExecuteOnOrThrow( view: View ): ProcessInstance;
   canExecuteOnOrThrow( image: Image ): ProcessInstance;
   canLaunchInterface(  ): boolean;
   canProcessGlobal(  ): boolean;
   canProcessImages(  ): boolean;
   canProcessViews(  ): boolean;
   description(  ): string;
   executeGlobal(  ): boolean;
   executeOn( view?: View, swapFile?: boolean ): boolean;
   executeOn( image?: Image, hints?: string ): boolean;
   executionTime(  ): number;
   isAssignable(  ): boolean;
   isHistoryUpdater( view: View ): boolean;
   isMaskable( view: View, mask: ImageWindow ): boolean;
   launch(  ): boolean;
   launchInterface(  ): boolean;
   processCategory(  ): string;
   processId(  ): string;
   readIcon( iconId: string ): boolean;
   setDescription( info: string ): ProcessInstance;
   startJD(  ): number;
   toSource( language?: string, varId?: string, indent?: number, flags?: number ): string;
   validate(  ): boolean;
   validateOrThrow(  ): ProcessInstance;
   writeIcon( iconId: string ): boolean;
   writeInstanceAddr( instanceAddr: string ): boolean;
}

declare class PushButton extends Control {
   constructor( parent?: Control );
   defaultButton: boolean;
   icon: Bitmap;
   iconHeight: number;
   iconWidth: number;
   pushed: boolean;
   state: number;
   text: string;
   onClick: ( checked: boolean ) => void;
   onPress: (  ) => void;
   onRelease: (  ) => void;
}

declare class QuadTreeNode {
   constructor(  );
   readonly index: any[];
   readonly ne: QuadTreeNode;
   readonly nw: QuadTreeNode;
   readonly rect: Rect;
   readonly se: QuadTreeNode;
   readonly sw: QuadTreeNode;
   includes( p: Point ): boolean;
   includes( p: Point ): void;
   intersects( r: Rect ): boolean;
   intersects( r: Rect ): void;
   isLeaf(  ): boolean;
   isLeaf(  ): void;
   neRect(  ): Rect;
   neRect(  ): void;
   nwRect(  ): Rect;
   nwRect(  ): void;
   seRect(  ): Rect;
   seRect(  ): void;
   swRect(  ): Rect;
   swRect(  ): void;
}

declare class RANSACPointMatcher {
   constructor(  );
   constructor( RANSACPointMatcher: any );
   readonly H: Matrix;
   readonly M1: any[];
   readonly M2: any[];
   readonly bestIteration: number;
   readonly index: Int32Array;
   readonly inliersFraction: number;
   readonly isValid: boolean;
   klen: number;
   kovl: number;
   kreg: number;
   krms: number;
   maxIterations: number;
   readonly numberOfIterations: number;
   readonly overlapping: number;
   readonly peakErrorX: number;
   readonly peakErrorY: number;
   readonly quality: number;
   readonly regularity: number;
   readonly rmsError: number;
   readonly rmsErrorDeviation: number;
   tolerance: number;
   transformation: number;
   assign( RANSACPointMatcher: any ): RANSACPointMatcher;
   clear(  ): RANSACPointMatcher;
   match( P1: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, P2: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): boolean;
}

declare class RGBColorSystem {
   constructor(  );
   constructor( RGBColorSystem: any );
   constructor( gamma?: number, Y?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, x?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, y?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array );
   static AdobeRGB1998(  ): RGBColorSystem;
   static AppleRGB(  ): RGBColorSystem;
   static BestRGB(  ): RGBColorSystem;
   static BetaRGB(  ): RGBColorSystem;
   static BruceRGB(  ): RGBColorSystem;
   static CIERGB(  ): RGBColorSystem;
   static ColorMatchRGB(  ): RGBColorSystem;
   static NTSCRGB(  ): RGBColorSystem;
   static PALSECAMRGB(  ): RGBColorSystem;
   static ProPhotoRGB(  ): RGBColorSystem;
   static SMPTECRGB(  ): RGBColorSystem;
   static WideGamutRGB(  ): RGBColorSystem;
   static hsiSaturation( R: number, G: number, B: number ): number;
   static hsiSaturation( RGB: any[] | Float32Array | Float64Array ): number;
   static hsiToRGB( H: number, S: number, I: number ): Float64Array;
   static hsiToRGB( HSI: any[] | Float32Array | Float64Array ): Float64Array;
   static hsvSaturation( R: number, G: number, B: number ): number;
   static hsvSaturation( RGB: any[] | Float32Array | Float64Array ): number;
   static hsvToRGB( H: number, S: number, V: number ): Float64Array;
   static hsvToRGB( HSV: any[] | Float32Array | Float64Array ): Float64Array;
   static hue( R: number, G: number, B: number ): number;
   static hue( RGB: any[] | Float32Array | Float64Array ): number;
   static intensity( R: number, G: number, B: number ): number;
   static intensity( RGB: any[] | Float32Array | Float64Array ): number;
   static rgbToHSI( R: number, G: number, B: number ): Float64Array;
   static rgbToHSI( RGB: any[] | Float32Array | Float64Array ): Float64Array;
   static rgbToHSV( R: number, G: number, B: number ): Float64Array;
   static rgbToHSV( RGB: any[] | Float32Array | Float64Array ): Float64Array;
   static sRGB(  ): RGBColorSystem;
   static value( R: number, G: number, B: number ): number;
   static value( RGB: any[] | Float32Array | Float64Array ): number;
   readonly Y: Float32Array;
   readonly cieXNormalizationFactor: number;
   readonly cieXYZToRGBMatrix: Float64Array;
   readonly cieZNormalizationFactor: number;
   readonly cieaNormalizationFactor: number;
   readonly cieaNormalizationOffset: number;
   readonly ciebNormalizationFactor: number;
   readonly ciebNormalizationOffset: number;
   readonly ciecNormalizationFactor: number;
   readonly gamma: number;
   readonly rgbToCIEXYZMatrix: Float64Array;
   readonly srgbGamma: boolean;
   readonly x: Float32Array;
   readonly y: Float32Array;
   assign( RGBColorSystem: any ): RGBColorSystem;
   cieLabToCIELch( L: number, a: number, b: number ): Float64Array;
   cieLabToCIELch( Lab: any[] | Float32Array | Float64Array ): Float64Array;
   cieLabToCIEXYZ( L: number, a: number, b: number ): Float64Array;
   cieLabToCIEXYZ( Lab: any[] | Float32Array | Float64Array ): Float64Array;
   cieLabToRGB( L: number, a: number, b: number ): Float64Array;
   cieLabToRGB( Lab: any[] | Float32Array | Float64Array ): Float64Array;
   cieLchToCIELab( L: number, c: number, h: number ): Float64Array;
   cieLchToCIELab( Lch: any[] | Float32Array | Float64Array ): Float64Array;
   cieLchToRGB( L: number, c: number, h: number ): Float64Array;
   cieLchToRGB( Lch: any[] | Float32Array | Float64Array ): Float64Array;
   cieXYZToCIELab( X: number, Y: number, Z: number ): Float64Array;
   cieXYZToCIELab( XYZ: any[] | Float32Array | Float64Array ): Float64Array;
   cieXYZToRGB( X: number, Y: number, Z: number ): Float64Array;
   cieXYZToRGB( XYZ: any[] | Float32Array | Float64Array ): Float64Array;
   lightness( R: number, G: number, B: number ): number;
   lightness( RGB: any[] | Float32Array | Float64Array ): number;
   rgbToCIELab( R: number, G: number, B: number ): Float64Array;
   rgbToCIELab( RGB: any[] | Float32Array | Float64Array ): Float64Array;
   rgbToCIELch( R: number, G: number, B: number ): Float64Array;
   rgbToCIELch( RGB: any[] | Float32Array | Float64Array ): Float64Array;
   rgbToCIEXYZ( R: number, G: number, B: number ): Float64Array;
   rgbToCIEXYZ( RGB: any[] | Float32Array | Float64Array ): Float64Array;
}

declare class RadialGradientBrush extends Brush {
   constructor( center: Point, radius?: number, focalPoint?: Point, stops?: any[], spreadMode?: number );
   readonly center: Point;
   readonly focalPoint: Point;
   readonly radius: number;
   readonly spreadMode: number;
   readonly stops: any[];
}

declare class RadioButton extends Control {
   constructor( parent?: Control );
   checked: boolean;
   state: number;
   text: string;
   onCheck: ( checked: boolean ) => void;
   onClick: ( checked: boolean ) => void;
   onPress: (  ) => void;
   onRelease: (  ) => void;
}

declare class Rect {
   constructor(  );
   constructor( src: Rect );
   constructor( x0: number, y0: number, x1: number, y1: number );
   constructor( x0: number, y0: number, size: number );
   constructor( width: number, height: number );
   constructor( x: number );
   constructor(  );
   constructor( src: Rect );
   constructor( x0: number, y0: number, x1: number, y1: number );
   constructor( x0: number, y0: number, size: number );
   constructor( width: number, height: number );
   constructor( x: number );
   static fromPackedArray( packed: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): any[];
   static fromPackedArray( packed: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): void;
   static toPackedFloat32Array( rects: any[] ): Float32Array;
   static toPackedFloat32Array( rects: any[] ): void;
   static toPackedFloat64Array( rects: any[] ): Float64Array;
   static toPackedFloat64Array( rects: any[] ): void;
   readonly area: number;
   bottom: number;
   bottomLeft: Point;
   bottomRight: Point;
   center: Point;
   centerX: number;
   centerY: number;
   readonly diagonal: number;
   height: number;
   readonly hypot: number;
   readonly isHorizontalLine: boolean;
   readonly isLine: boolean;
   readonly isNormal: boolean;
   readonly isOrdered: boolean;
   readonly isPoint: boolean;
   readonly isPointOrLine: boolean;
   readonly isRect: boolean;
   readonly isVerticalLine: boolean;
   left: number;
   leftBottom: Point;
   leftTop: Point;
   readonly manhattanDistance: number;
   readonly perimeter: number;
   right: number;
   rightBottom: Point;
   rightTop: Point;
   top: number;
   topLeft: Point;
   topRight: Point;
   width: number;
   x0: number;
   x1: number;
   y0: number;
   y1: number;
   add( dx: number, dy: number ): void;
   add( dx0: number, dy0: number, dx1: number, dy1: number ): void;
   add( dxy: number ): void;
   add( p: Point ): void;
   add( p0: Point, p1: Point ): void;
   add( r: Rect ): void;
   add( dx: number, dy: number ): void;
   add( dx0: number, dy0: number, dx1: number, dy1: number ): void;
   add( dxy: number ): void;
   add( p: Point ): void;
   add( p0: Point, p1: Point ): void;
   add( r: Rect ): void;
   assign( width: number, height: number ): void;
   assign( x: number ): void;
   assign( x0: number, y0: number, size: number ): void;
   assign( x0: number, y0: number, x1: number, y1: number ): void;
   assign( src: Rect ): void;
   assign( width: number, height: number ): void;
   assign( x: number ): void;
   assign( x0: number, y0: number, size: number ): void;
   assign( x0: number, y0: number, x1: number, y1: number ): void;
   assign( src: Rect ): void;
   clipCode( x: number, y: number ): number;
   clipCode( p: Point ): number;
   clipCode( x: number, y: number ): void;
   clipCode( p: Point ): void;
   clipCodeFast( x: number, y: number ): number;
   clipCodeFast( p: Point ): number;
   clipCodeFast( x: number, y: number ): void;
   clipCodeFast( p: Point ): void;
   deflateBy( dx: number, dy: number ): void;
   deflateBy( dxy: number ): void;
   deflateBy( dx: number, dy: number ): void;
   deflateBy( dxy: number ): void;
   deflatedBy( dx: number, dy: number ): Rect;
   deflatedBy( dxy: number ): Rect;
   deflatedBy( dx: number, dy: number ): void;
   deflatedBy( dxy: number ): void;
   div( x: number, y: number ): void;
   div( x0: number, y0: number, x1: number, y1: number ): void;
   div( xy: number ): void;
   div( p: Point ): void;
   div( p0: Point, p1: Point ): void;
   div( r: Rect ): void;
   div( x: number, y: number ): void;
   div( x0: number, y0: number, x1: number, y1: number ): void;
   div( xy: number ): void;
   div( p: Point ): void;
   div( p0: Point, p1: Point ): void;
   div( r: Rect ): void;
   includes( x: number, y: number ): boolean;
   includes( p: Point ): boolean;
   includes( x: number, y: number ): void;
   includes( p: Point ): void;
   includesFast( x: number, y: number ): boolean;
   includesFast( p: Point ): boolean;
   includesFast( x: number, y: number ): void;
   includesFast( p: Point ): void;
   inflateBy( dx: number, dy: number ): void;
   inflateBy( dxy: number ): void;
   inflateBy( dx: number, dy: number ): void;
   inflateBy( dxy: number ): void;
   inflatedBy( dx: number, dy: number ): Rect;
   inflatedBy( dxy: number ): Rect;
   inflatedBy( dx: number, dy: number ): void;
   inflatedBy( dxy: number ): void;
   intersect( x0: number, y0: number, x1: number, y1: number ): void;
   intersect( p0: Point, p1: Point ): void;
   intersect( r: Rect ): void;
   intersect( x0: number, y0: number, x1: number, y1: number ): void;
   intersect( p0: Point, p1: Point ): void;
   intersect( r: Rect ): void;
   intersectFast( x0: number, y0: number, x1: number, y1: number ): void;
   intersectFast( p0: Point, p1: Point ): void;
   intersectFast( r: Rect ): void;
   intersectFast( x0: number, y0: number, x1: number, y1: number ): void;
   intersectFast( p0: Point, p1: Point ): void;
   intersectFast( r: Rect ): void;
   intersection( x0: number, y0: number, x1: number, y1: number ): Rect;
   intersection( p0: Point, p1: Point ): Rect;
   intersection( r: Rect ): Rect;
   intersection( x0: number, y0: number, x1: number, y1: number ): void;
   intersection( p0: Point, p1: Point ): void;
   intersection( r: Rect ): void;
   intersectionFast( x0: number, y0: number, x1: number, y1: number ): Rect;
   intersectionFast( p0: Point, p1: Point ): Rect;
   intersectionFast( r: Rect ): Rect;
   intersectionFast( x0: number, y0: number, x1: number, y1: number ): void;
   intersectionFast( p0: Point, p1: Point ): void;
   intersectionFast( r: Rect ): void;
   intersects( x0: number, y0: number, x1: number, y1: number ): boolean;
   intersects( p0: Point, p1: Point ): boolean;
   intersects( r: Rect ): boolean;
   intersects( x0: number, y0: number, x1: number, y1: number ): void;
   intersects( p0: Point, p1: Point ): void;
   intersects( r: Rect ): void;
   intersectsFast( x0: number, y0: number, x1: number, y1: number ): boolean;
   intersectsFast( p0: Point, p1: Point ): boolean;
   intersectsFast( r: Rect ): boolean;
   intersectsFast( x0: number, y0: number, x1: number, y1: number ): void;
   intersectsFast( p0: Point, p1: Point ): void;
   intersectsFast( r: Rect ): void;
   isEqualTo( x: number, y: number ): boolean;
   isEqualTo( x0: number, y0: number, x1: number, y1: number ): boolean;
   isEqualTo( xy: number ): boolean;
   isEqualTo( p: Point ): boolean;
   isEqualTo( p0: Point, p1: Point ): boolean;
   isEqualTo( r: Rect ): boolean;
   isEqualTo( x: number, y: number ): void;
   isEqualTo( x0: number, y0: number, x1: number, y1: number ): void;
   isEqualTo( xy: number ): void;
   isEqualTo( p: Point ): void;
   isEqualTo( p0: Point, p1: Point ): void;
   isEqualTo( r: Rect ): void;
   isLessThan( x: number, y: number ): boolean;
   isLessThan( x0: number, y0: number, x1: number, y1: number ): boolean;
   isLessThan( xy: number ): boolean;
   isLessThan( p: Point ): boolean;
   isLessThan( p0: Point, p1: Point ): boolean;
   isLessThan( r: Rect ): boolean;
   isLessThan( x: number, y: number ): void;
   isLessThan( x0: number, y0: number, x1: number, y1: number ): void;
   isLessThan( xy: number ): void;
   isLessThan( p: Point ): void;
   isLessThan( p0: Point, p1: Point ): void;
   isLessThan( r: Rect ): void;
   moveBy( dx: number, dy: number ): void;
   moveBy( dxy: number ): void;
   moveBy( dp: Point ): void;
   moveBy( dx: number, dy: number ): void;
   moveBy( dxy: number ): void;
   moveBy( dp: Point ): void;
   moveTo( x: number, y: number ): void;
   moveTo( xy: number ): void;
   moveTo( p: Point ): void;
   moveTo( x: number, y: number ): void;
   moveTo( xy: number ): void;
   moveTo( p: Point ): void;
   movedBy( dx: number, dy: number ): Rect;
   movedBy( dxy: number ): Rect;
   movedBy( dp: Point ): Rect;
   movedBy( dx: number, dy: number ): void;
   movedBy( dxy: number ): void;
   movedBy( dp: Point ): void;
   movedTo( x: number, y: number ): Rect;
   movedTo( xy: number ): Rect;
   movedTo( p: Point ): Rect;
   movedTo( x: number, y: number ): void;
   movedTo( xy: number ): void;
   movedTo( p: Point ): void;
   mul( x: number, y: number ): void;
   mul( x0: number, y0: number, x1: number, y1: number ): void;
   mul( xy: number ): void;
   mul( p: Point ): void;
   mul( p0: Point, p1: Point ): void;
   mul( r: Rect ): void;
   mul( x: number, y: number ): void;
   mul( x0: number, y0: number, x1: number, y1: number ): void;
   mul( xy: number ): void;
   mul( p: Point ): void;
   mul( p0: Point, p1: Point ): void;
   mul( r: Rect ): void;
   order(  ): void;
   order(  ): void;
   ordered(  ): Rect;
   ordered(  ): void;
   resizeBy( dx: number, dy: number ): void;
   resizeBy( dxy: number ): void;
   resizeBy( dx: number, dy: number ): void;
   resizeBy( dxy: number ): void;
   resizeTo( size: number ): void;
   resizeTo( width: number, height: number ): void;
   resizeTo( size: number ): void;
   resizeTo( width: number, height: number ): void;
   resizedBy( dx: number, dy: number ): Rect;
   resizedBy( dxy: number ): Rect;
   resizedBy( dx: number, dy: number ): void;
   resizedBy( dxy: number ): void;
   resizedTo( size: number ): Rect;
   resizedTo( width: number, height: number ): Rect;
   resizedTo( size: number ): void;
   resizedTo( width: number, height: number ): void;
   rotate( angleRadians: number, xc: number, yc: number ): void;
   rotate( angleRadians?: number, center?: Point ): void;
   rotate( sin: number, cos: number, xc: number, yc: number ): void;
   rotate( sin: number, cos?: number, center?: Point ): void;
   rotate( angleRadians: number, xc: number, yc: number ): void;
   rotate( angleRadians?: number, center?: Point ): void;
   rotate( sin: number, cos: number, xc: number, yc: number ): void;
   rotate( sin: number, cos?: number, center?: Point ): void;
   rotated( angleRadians: number, xc: number, yc: number ): Rect;
   rotated( angleRadians?: number, center?: Point ): Rect;
   rotated( sin: number, cos: number, xc: number, yc: number ): Rect;
   rotated( sin: number, cos?: number, center?: Point ): Rect;
   rotated( angleRadians: number, xc: number, yc: number ): void;
   rotated( angleRadians?: number, center?: Point ): void;
   rotated( sin: number, cos: number, xc: number, yc: number ): void;
   rotated( sin: number, cos?: number, center?: Point ): void;
   round(  ): void;
   round(  ): void;
   rounded(  ): Rect;
   rounded(  ): void;
   sub( dx: number, dy: number ): void;
   sub( dx0: number, dy0: number, dx1: number, dy1: number ): void;
   sub( dxy: number ): void;
   sub( p: Point ): void;
   sub( p0: Point, p1: Point ): void;
   sub( r: Rect ): void;
   sub( dx: number, dy: number ): void;
   sub( dx0: number, dy0: number, dx1: number, dy1: number ): void;
   sub( dxy: number ): void;
   sub( p: Point ): void;
   sub( p0: Point, p1: Point ): void;
   sub( r: Rect ): void;
   symmetric(  ): Rect;
   symmetric(  ): void;
   symmetrize(  ): void;
   symmetrize(  ): void;
   toArray(  ): any[];
   toArray(  ): void;
   toString(  ): string;
   toString(  ): void;
   toVector(  ): Vector;
   toVector(  ): void;
   transform( M: Matrix ): void;
   transform( M: Matrix ): void;
   transformFast( M: Matrix ): void;
   transformFast( M: Matrix ): void;
   transformed( M: Matrix ): Rect;
   transformed( M: Matrix ): void;
   transformedFast( M: Matrix ): Rect;
   transformedFast( M: Matrix ): void;
   translate( x: number, y: number ): void;
   translate( xy: number ): void;
   translate( p: Point ): void;
   translate( x: number, y: number ): void;
   translate( xy: number ): void;
   translate( p: Point ): void;
   translateBy( dx: number, dy: number ): void;
   translateBy( dxy: number ): void;
   translateBy( dp: Point ): void;
   translateBy( dx: number, dy: number ): void;
   translateBy( dxy: number ): void;
   translateBy( dp: Point ): void;
   translated( x: number, y: number ): Rect;
   translated( xy: number ): Rect;
   translated( p: Point ): Rect;
   translated( x: number, y: number ): void;
   translated( xy: number ): void;
   translated( p: Point ): void;
   translatedBy( dx: number, dy: number ): Rect;
   translatedBy( dxy: number ): Rect;
   translatedBy( dp: Point ): Rect;
   translatedBy( dx: number, dy: number ): void;
   translatedBy( dxy: number ): void;
   translatedBy( dp: Point ): void;
   truncate(  ): void;
   truncate(  ): void;
   truncated(  ): Rect;
   truncated(  ): void;
   union( x0: number, y0: number, x1: number, y1: number ): Rect;
   union( p0: Point, p1: Point ): Rect;
   union( r: Rect ): Rect;
   union( x0: number, y0: number, x1: number, y1: number ): void;
   union( p0: Point, p1: Point ): void;
   union( r: Rect ): void;
   unionFast( x0: number, y0: number, x1: number, y1: number ): Rect;
   unionFast( p0: Point, p1: Point ): Rect;
   unionFast( r: Rect ): Rect;
   unionFast( x0: number, y0: number, x1: number, y1: number ): void;
   unionFast( p0: Point, p1: Point ): void;
   unionFast( r: Rect ): void;
   unite( x0: number, y0: number, x1: number, y1: number ): void;
   unite( p0: Point, p1: Point ): void;
   unite( r: Rect ): void;
   unite( x0: number, y0: number, x1: number, y1: number ): void;
   unite( p0: Point, p1: Point ): void;
   unite( r: Rect ): void;
   uniteFast( x0: number, y0: number, x1: number, y1: number ): void;
   uniteFast( p0: Point, p1: Point ): void;
   uniteFast( r: Rect ): void;
   uniteFast( x0: number, y0: number, x1: number, y1: number ): void;
   uniteFast( p0: Point, p1: Point ): void;
   uniteFast( r: Rect ): void;
}

declare class Runtime {
   static readonly isRoot: boolean;
   static readonly jsArguments: any[];
   static jsScriptInformation: string;
   static jsScriptResult: boolean;
   static readonly jsVersion: string;
   static readonly v8Version: string;
   constructor();
}

declare class SVG {
   constructor(  );
   constructor( width: number, height: number );
   constructor( filePath?: string, width?: number, height?: number );
   description: string;
   readonly filePath: string;
   height: number;
   readonly isPainting: boolean;
   readonly outputData: ByteArray;
   resolution: number;
   size: Rect;
   title: string;
   viewBox: Rect;
   width: number;
}

declare class SaveFileDialog extends FileDialog {
   constructor(  );
   /**
    * Deprecated: Use SaveFileDialog.filePath instead.
    */
   readonly fileName: string;
   readonly filePath: string;
   overwritePrompt: boolean;
   loadImageFilters(  ): SaveFileDialog;
}

/**
 * ScalarChebyshevFit approximates a smooth, scalar-valued function in a given interval by expansion with a single truncated series of Chebyshev polynomials. ScalarChebyshevFit is a convenient specialization of ChebyshevFit for functions returning a single value; refer to the base class for complete information.
 * In the following script we approximate the function:
 * its derivative:
 * and its indefinite integral:
 * with a Chebyshev polynomial expansion of 50 coefficients. We truncate the series to achieve errors under over the fitting interval , and evaluate the three expansions for several values of reporting the approximation values and errors on the console.
 */
declare class ScalarChebyshevFit extends ChebyshevFit {
   /**
    * Constructs a truncated Chebyshev polynomial expansion with n coefficients to approximate the specified scalar function f in the interval [x1,x2] of the independent variable.
    * See ChebyshevFit for detailed information.
    */
   constructor( f: Function, x1: number, x2?: number, n?: number );
   /**
    * True iff the Chebyshev polynomial expansion has been truncated.
    */
   readonly isTruncated: boolean;
   /**
    * The number of coefficients in the (original, non-truncated) Chebyshev polynomial expansion.
    */
   readonly length: number;
   /**
    * The number of coefficients in the truncated Chebyshev polynomial expansion.
    */
   readonly truncatedLength: number;
   /**
    * An estimate of the maximum error in the truncated Chebyshev polynomial expansion.
    */
   readonly truncationError: number;
   /**
    * Generates and returns a new ScalarChebyshevFit instance that approximates the first derivative of the fitted function.
    * See ChebyshevFit.derivative() for detailed information.
    */
   derivative(  ): ScalarChebyshevFit;
   /**
    * Evaluates the truncated Chebyshev polynomial expansion for the specified value x of the independent variable, and returns the approximated function value.
    */
   evaluate( x: number ): number;
   /**
    * Generates and returns a new ScalarChebyshevFit instance that approximates the indefinite integral of the fitted function.
    * See ChebyshevFit.integral() for detailed information.
    */
   integral(  ): ScalarChebyshevFit;
}

declare class ScrollBox extends Frame {
   constructor( parent?: Control );
   autoScroll: boolean;
   horizontalAutoScroll: boolean;
   horizontalScrollBarVisible: boolean;
   horizontalScrollPosition: number;
   horizontalTracking: boolean;
   lineHeight: number;
   lineWidth: number;
   maxHorizontalScrollPosition: number;
   maxVerticalScrollPosition: number;
   minHorizontalScrollPosition: number;
   minVerticalScrollPosition: number;
   pageHeight: number;
   pageWidth: number;
   scrollBarsVisible: boolean;
   scrollPosition: Point;
   tracking: boolean;
   verticalAutoScroll: boolean;
   verticalScrollBarVisible: boolean;
   verticalScrollPosition: number;
   verticalTracking: boolean;
   readonly viewport: Control;
   hideScrollBars( hide?: boolean ): ScrollBox;
   hideScrollBars( hideHorz: boolean, hideVert: boolean ): ScrollBox;
   setHorizontalScrollRange( min: number, max: number ): ScrollBox;
   setScrollPosition( x: number, y: number ): ScrollBox;
   setScrollPosition( pos: Point ): ScrollBox;
   setVerticalScrollRange( min: number, max: number ): ScrollBox;
   showScrollBars( show?: boolean ): ScrollBox;
   showScrollBars( showHorz: boolean, showVert: boolean ): ScrollBox;
   onHorizontalScrollPosUpdated: ( pos: number ) => void;
   onHorizontalScrollRangeUpdated: ( minPos: number, maxPos: number ) => void;
   onVerticalScrollPosUpdated: ( pos: number ) => void;
   onVerticalScrollRangeUpdated: ( minPos: number, maxPos: number ) => void;
   onViewportScrolled: ( dx: number, dy: number ) => void;
}

declare class SectionBar extends Control {
   constructor( parent?: Control, title?: string, collapsible?: boolean );
   checkBox: CheckBox;
   collapsible: boolean;
   section: Control;
   enableCheckBox(  ): void;
   enableCheckBox(  ): void;
   hasCheckBox(  ): boolean;
   hasCheckBox(  ): void;
   hasSection(  ): boolean;
   hasSection(  ): void;
   isChecked(  ): boolean;
   isChecked(  ): void;
   isCollapsed(  ): boolean;
   isCollapsed(  ): void;
   isExpanded(  ): boolean;
   isExpanded(  ): void;
   setSection( section: Control ): void;
   setSection( section: Control ): void;
   setTitle( title: string ): void;
   setTitle( title: string ): void;
   title(  ): string;
   title(  ): void;
   toggleSection(  ): void;
   toggleSection(  ): void;
   updateIcon(  ): void;
   updateIcon(  ): void;
   updateSection(  ): void;
   updateSection(  ): void;
   onCheckSection: ( sender: SectionBar ) => void;
   onToggleSection: ( sender: SectionBar, toggleBegin: boolean ) => void;
}

declare class Security {
   constructor();
   static certifiedDevelopers(  ): any[];
   static disableSecureScriptSigningEnvironment(  ): void;
   static enableSecureScriptSigningEnvironment(  ): void;
   static entitlements(  ): any[];
   static exportSigningKeysFile( outputFilePath: string, newPassword: string | ByteArray, filePath: string, password: string | ByteArray ): void;
   static generateCodeSignatureFile( outputFilePath: string, inputFilePath: string, developerId: string, publicKey: ByteArray, privateKey: ByteArray ): void;
   static generateCodeSignatureFile( outputFilePath: string, inputFilePath: string, keysFilePath: string, password: string ): void;
   static generateCodeSignatureFile( outputFilePath: string, inputFilePath: string, keysFilePath: string, password: ByteArray ): void;
   static generateLocalSigningKeysFile( outputFilePath: string, password: string ): void;
   static generateLocalSigningKeysFile( outputFilePath: string, password: ByteArray ): void;
   static generateModuleSignatureFile( outputFilePath: string, moduleFilePath: string, entitlements: any[], developerId: string, publicKey: ByteArray, privateKey: ByteArray ): void;
   static generateModuleSignatureFile( outputFilePath: string, moduleFilePath: string, entitlements: any[], keysFilePath: string, password: string ): void;
   static generateModuleSignatureFile( outputFilePath: string, moduleFilePath: string, entitlements: any[], keysFilePath: string, password: ByteArray ): void;
   static generateScriptSignatureFile( outputFilePath: string, scriptFilePath: string, entitlements: any[], developerId: string, publicKey: ByteArray, privateKey: ByteArray ): void;
   static generateScriptSignatureFile( outputFilePath: string, scriptFilePath: string, entitlements: any[], keysFilePath: string, password: string ): void;
   static generateScriptSignatureFile( outputFilePath: string, scriptFilePath: string, entitlements: any[], keysFilePath: string, password: ByteArray ): void;
   static generateSigningKeysFile( outputFilePath: string, developerId: string, password: string ): void;
   static generateSigningKeysFile( outputFilePath: string, developerId: string, password: ByteArray ): void;
   static generateXMLSignature( filePath: string, developerId: string, publicKey: ByteArray, privateKey: ByteArray ): void;
   static generateXMLSignature( filePath: string, keysFilePath: string, password: string ): void;
   static generateXMLSignature( filePath: string, keysFilePath: string, password: ByteArray ): void;
   static getCodeSignature( filePath: string ): object;
   static getModuleSignature( filePath: string ): object;
   static getScriptSignature( filePath: string ): object;
   static getXMLSignature( filePath: string ): object;
   static haveEntitlement( entitlement: string ): boolean;
   static isSecureScriptSigningEnvironment(  ): boolean;
   static loadSigningKeysFile( filePath: string, password?: string, publicKeyOnly?: boolean ): object;
   static loadSigningKeysFile( filePath: string, password?: ByteArray, publicKeyOnly?: boolean ): object;
   static submitCertifiedDeveloperData( developerId: string, publicKey: ByteArray, contactEmail?: string, publicEmail?: string, url?: string, name?: string, info?: string ): void;
   static submitCertifiedDeveloperDataWithSigningKeysFile( keysFilePath: string, password: string | ByteArray, contactEmail?: string, publicEmail?: string, url?: string, name?: string, info?: string ): void;
   static validPassword( password: string | ByteArray ): boolean;
}

declare class Settings {
   static readonly lastReadOK: boolean;
   constructor();
   static canReadGlobal( key: string ): boolean;
   static canWriteGlobal( key: string ): boolean;
   static globalVariableExists( key: string ): boolean;
   static globalVariableType( key: string ): number;
   static keyExists( key: string ): boolean;
   static read( key: string, dataType: number ): object;
   static readGlobal( key: string, dataType: number ): object;
   static remove( key: string ): void;
   static removeGlobal( key: string ): void;
   static valueExists( key: string ): boolean;
   static write( key: string, dataType: number, value: object ): void;
   static writeGlobal( key: string, dataType: number, value: object ): void;
}

declare class ShepardInterpolation {
   constructor(  );
   readonly isValid: boolean;
   power: number;
   radius: number;
   smoothing: number;
   clear(  ): void;
   evaluate( p: Point ): number;
   evaluate( x: number, y: number ): number;
   evaluate( points: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): Float64Array;
   initialize( x: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], y: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], z: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): void;
   initialize( rect: Rect, x: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], y: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], z: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): void;
}

declare class SimpleColorDialog extends Dialog {
   constructor( color?: number, parent?: Control );
   constructor( color?: number, parent?: Control );
   alphaEnabled: boolean;
   color: number;
   grayscale: boolean;
}

declare class Sizer {
   constructor( vertical?: boolean );
   readonly displayPixelRatio: number;
   readonly isHorizontal: boolean;
   readonly isVertical: boolean;
   margin: number;
   readonly numberOfItems: number;
   readonly parentControl: Control;
   scaledMargin: number;
   scaledSpacing: number;
   spacing: number;
   unscaledMargin: number;
   unscaledSpacing: number;
   add( control?: Control, stretchFactor?: number, alignment?: number ): Sizer;
   add( sizer?: Sizer, stretchFactor?: number ): Sizer;
   addScaledSpacing( size: number ): Sizer;
   addSpacing( size?: number, autoScaling?: boolean ): Sizer;
   addStretch( stretchFactor?: number ): Sizer;
   addUnscaledSpacing( size: number ): Sizer;
   has( control: Control ): boolean;
   has( sizer: Sizer ): boolean;
   indexOf( control: Control ): number;
   indexOf( sizer: Sizer ): number;
   insert( index: number, control?: Control, stretchFactor?: number, alignment?: number ): Sizer;
   insert( index: number, sizer?: Sizer, stretchFactor?: number ): Sizer;
   insertScaledSpacing( index: number, size: number ): Sizer;
   insertSpacing( index: number, size?: number, autoScaling?: boolean ): Sizer;
   insertStretch( index?: number, stretchFactor?: number ): Sizer;
   insertUnscaledSpacing( index: number, size: number ): Sizer;
   logicalPixelsToPhysical( size: number ): number;
   physicalPixelsToLogical( size: number ): number;
   remove( control: Control ): Sizer;
   remove( sizer: Sizer ): Sizer;
   setAlignment( control: Control, alignment: number ): Sizer;
   setAlignment( sizer: Sizer, alignment: number ): Sizer;
   setStretchFactor( control: Control, stretchFactor: number ): Sizer;
   setStretchFactor( sizer: Sizer, stretchFactor: number ): Sizer;
}

declare class Slider extends Control {
   constructor( parent?: Control, vertical?: boolean );
   maxValue: number;
   minValue: number;
   normalizedValue: number;
   pageSize: number;
   stepSize: number;
   tickInterval: number;
   tickStyle: number;
   tracking: boolean;
   value: number;
   vertical: boolean;
   setRange( minValue: number, maxValue: number ): Slider;
   onValueUpdated: ( value: number ) => void;
}

declare class SpinBox extends Control {
   constructor( parent?: Control );
   alignment: number;
   autoAdjustWidth: boolean;
   editable: boolean;
   maxValue: number;
   minValue: number;
   minimumValueText: string;
   normalizedValue: number;
   prefix: string;
   stepSize: number;
   suffix: string;
   value: number;
   wrapping: boolean;
   setRange( minValue: number, maxValue: number ): SpinBox;
   onValueUpdated: ( value: number ) => void;
}

/**
 * An instance of the StarData class stores the parameters of a source detected by the StarDetector class.
 * Some properties of this object depend on whether PSF fitting has been enabled in the StarDetector instance that performs the corresponding star detection task. These properties include pos (star position), mad (as a fitting quality estimator), and signal.
 */
declare class StarData {
   /**
    * Constructs a new StarData instance.
    */
   constructor(  );
   /**
    * Constructs a new StarData object as a copy of an existing instance src.
    */
   constructor( StarData: any );
   /**
    * Local background estimate.
    */
   bkg: number;
   /**
    * Total flux above local background.
    */
   flux: number;
   /**
    * Robust average absolute deviation of the fitted PSF with respect to sampled image data. Only meaningful when StarDetector.fitPSF is true.
    */
   mad: number;
   /**
    * Star position in image coordinates. Corresponds to the centroid of the fitted PSF when StarDetector.fitPSF is true; to the barycenter calculated by the star detection algorithm otherwise.
    */
   pos: Point;
   /**
    * Bounding rectangle of the source detection region in image coordinates.
    */
   rect: Rect;
   /**
    * Estimated mean signal over the local background within the PSF fitting region. Nonzero only when PSF fitting is enabled via StarDetector.fitPSF.
    */
   signal: number;
   /**
    * Area of the detected source structure in square pixels.
    */
   size: number;
   /**
    * Sampling region in image coordinates.
    */
   srect: Rect;
   /**
    * The X-coordinate of the star position in image coordinates. Equivalent to pos.x.
    */
   x: number;
   /**
    * The Y-coordinate of the star position in image coordinates. Equivalent to pos.y.
    */
   y: number;
   /**
    * Replaces the properties of this object with those of the specified src object. Returns a reference to this object.
    */
   assign( StarData: any ): StarData;
}

/**
 * This class provides access to the standard star-detection routines available on the PixInsight/PCL platform. The underlying implementation is remarkably robust and efficient, has been extensively tested during many years in numerous processes and applications, and can be adapted to meet the requirements of virtually any practical application thanks to a rich set of parameters.
 * The following script generates a mask with all detected stars in the active image. You can use it to test the variations caused by different StarDetector parameter settings.
 */
declare class StarDetector {
   /**
    * Constructs a new StarDetector object.
    */
   constructor(  );
   /**
    * Constructs a new StarDetector object as a copy of an existing src object.
    */
   constructor( StarDetector: any );
   /**
    * This property is true iff detection of clustered sources is allowed for this object.
    * If this property is false, a local maxima map will be generated to identify and prevent detection of multiple sources that are too close to be separated as individual structures, such as double and multiple stars. In general, barycenter positions cannot be accurately determined for sources with several local maxima. If this parameter is true, non-separable multiple sources will be detectable as single objects. The default value is false.
    */
   allowClusteredSources: boolean;
   /**
    * Stars with measured SNR above this parameter in units of the minimum detection level (as defined by the sensitivity parameter) will always be detected, even if their profiles are too flat for the current peak response. This allows us to force inclusion of bright stars. The default value is 3.0.
    */
   brightThreshold: number;
   /**
    * True iff PSF fitting is enabled for this star detector.
    * When PSF fitting is enabled, a point spread function of the type specified by psfType will be fitted numerically for each detected source. The Levenberg-Marquardt non-linear least squares algorithm will be used to minimize the difference between the fitted function and the pixel sample values in the detection region. This improves the stability of calculated star positions, but for more advanced PSF fitting, you'll probably prefer to leave this option turned off and use the PSF class after star detection.
    * With this property set to true, the pos properties of the detected StarData objects correspond to the centroids of the fitted PSFs instead of the barycenter positions calculated by the star detection algorithm, and the signal properties are robust estimates of the mean signal evaluated over the local background of each star, also from the fitted PSFs.
    * PSF fitting is turned off by default in the StarDetector class.
    */
   fitPSF: boolean;
   /**
    * Size of the hot pixel removal filter.
    * This is the radius in pixels of a median filter applied by the star detector before the structure detection phase. A median filter is very efficient to remove hot pixels. To disable hot pixel removal, set this parameter to zero. The default value is one pixel.
    */
   hotPixelFilterRadius: number;
   /**
    * True iff image inversion is enabled for this star detector.
    * When inversion is enabled, the star detector algorithm will look for dark stars over a bright background. This feature is disabled by default.
    */
   invert: boolean;
   /**
    * Size of the local maxima detection filter.
    * This is the radius in pixels of a square structuring element used to generate a local maxima map, when detection of clustered sources is disabled. The default value is 2, which applies a 5x5 filter.
    */
   localDetectionFilterRadius: number;
   /**
    * The local maxima detection limit.
    * This parameter is a normalized pixel value in the [0,1] range. Structures with pixels above this value will be excluded for local maxima detection. The default value is 0.75.
    */
   localMaximaDetectionLimit: number;
   /**
    * Maximum star distortion.
    * Internally, star distortion is evaluated in units of coverage of a square region circumscribed to each detected structure. The coverage of a perfectly circular star is π/4 (about 0.8). Lower values denote elongated or irregular sources.
    * To isolate the public interface of this class from its internal implementation, this parameter is normalized to the [0,1] range, where 0 and 1 represent minimum and maximum distortion, respectively. This abstraction allows us to change the star detection engine without breaking dependent tools and processes.
    * Use this parameter, if necessary, to control inclusion of elongated stars, complex clusters of stars, and nonstellar image features. The default value is 0.6.
    */
   maxDistortion: number;
   /**
    * Minimum signal-to-noise ratio of a detectable star.
    * Given a source with estimated brightness s, local background b, and local background dispersion n, SNR is evaluated as (s - b)/n. Stars with measured SNR below this parameter won't be detected.
    * The value of this parameter can be increased to limit star detection to a subset of the brightest sources in the image adaptively, instead of imposing an arbitrary limit on the number of detected stars. The default value is zero.
    */
   minSNR: number;
   /**
    * The automatically calculated minimum star size in square pixels.
    * The value reported by this property is only valid after a successful execution of the stars() method with a zero minimum structure size parameter value. See the minStructureSize property for more information.
    */
   readonly minStarSize: number;
   /**
    * Minimum size of a detectable star structure in square pixels.
    * This parameter can be used to prevent the detection of small and bright image artifacts wrongly as stars. This can be useful to work with uncalibrated or poorly calibrated data, especially demosaiced CFA frames where uncorrected hot pixels have generated large bright artifacts that cannot be removed with a median filter, or for rejection of cosmic rays.
    * This parameter can be used in three ways:
    * Automatic mode
    * A zero value enables an adaptive algorithm to find an optimal minimum structure size using statistical analysis techniques. This is the default option.
    * Disabled
    * A value of one turns off minimum structure size rejection since no detectable star can be represented by less than one pixel.
    * Literal value
    * A value > 1 forces using the specified minimum structure size in square pixels.
    */
   minStructureSize: number;
   /**
    * Size of the noise reduction filter.
    * This is the radius in pixels of a Gaussian convolution filter applied to the working image used for calculation of star positions during the star detection phase. Use it only for very low SNR images, where the star detector cannot find reliable stars with default parameters.
    * Be aware that noise reduction will modify star profiles and hence the way star positions are calculated, resulting in a less accurate centroid determination. Under extreme low-SNR conditions, however, this is probably better than working with the actual data anyway.
    * The default value is zero, which effectively disables this feature.
    */
   noiseReductionFilterRadius: number;
   /**
    * Peak sensitivity of the star detection device.
    * Internally, the peak response property of the star detection algorithm is expressed in kurtosis units. For each detected structure, kurtosis is evaluated from all significant pixels with values greater than the estimated mean local background. Peak response is the minimum value of kurtosis necessary to trigger star detection.
    * To isolate the public interface of this class from its internal implementation, this parameter is normalized to the [0,1] range, where 0 and 1 represent minimum and maximum peak response, respectively. This abstraction allows us to change the star detection engine without breaking dependent tools and processes.
    * If you decrease this parameter, stars will need to have stronger (or more prominent) peaks to be detected. This is useful to prevent detection of saturated stars, as well as small nonstellar features. By increasing this parameter, the star detection algorithm will be more sensitive to peakedness, and hence more tolerant with relatively flat image features. The default value is 0.5.
    */
   peakResponse: number;
   /**
    * The centroid tolerance in pixels.
    * When PSF fitting is enabled, the centroid tolerance is the maximum allowed distance in pixels between a detected star position (or barycenter) and the centroid position of the corresponding fitted PSF. Stars where that distance is greater than the value returned by this function will be rejected and excluded for signal estimation. This allows preventing PSF fits departing too much from detected star coordinates, which enforces robustness and stability of the PSF fitting process.
    * The default centroid tolerance is 1.5 pixels.
    */
   psfCentroidTolerance: number;
   /**
    * True if elliptical point spread functions (PSFs) will be fitted when PSF fitting is enabled. Returns false if circular functions will be fitted. Elliptical PSFs are disabled by default.
    */
   psfElliptic: boolean;
   /**
    * The type of point spread function (PSF) fitted numerically when PSF fitting is enabled. See fitPSF and the PSFunction class.
    */
   psfType: number;
   /**
    * Sensitivity of the star detection device.
    * Internally, the sensitivity of the star detection algorithm is expressed in signal-to-noise ratio units with respect to the evaluated dispersion of local background pixels for each detected structure. Given a source with estimated brightness s, local background b, and local background dispersion n, sensitivity is the minimum value of (s - b)/n necessary to trigger star detection.
    * To isolate the public interface of this class from its internal implementation, this parameter is normalized to the [0,1] range, where 0 and 1 represent minimum and maximum sensitivity, respectively. This abstraction allows us to change the star detection engine without breaking dependent tools and processes.
    * Increase this value to favor detection of fainter stars. Decrease it to restrict detection to brighter stars. The default value is 0.5.
    */
   sensitivity: number;
   /**
    * Number of (dyadic) wavelet layers used for structure detection.
    * This parameter determines the size in pixels of the largest image structures that can be detected. With more layers, larger stars (and perhaps also some nonstellar objects) will be detected. The default value is 5, which corresponds to structures in the scale of 32 pixels.
    * Although the current star detection algorithm does not use a wavelet transform for structure detection, this parameter is still expressed as a number of dyadic wavelet layers for convenience and compatibility with existing implementations.
    */
   structureLayers: number;
   /**
    * Upper star detection limit in the normalized [0,1] range.
    * Stars with peak values larger than this value won't be detected. This can be useful to reject all stars brighter than a fixed level systematically. The default value is 1.0, which effectively disables this feature.
    */
   upperLimit: number;
   /**
    * Assigns the specified src object. Copies all star detection parameters in src to this object.
    * Returns a reference to this object.
    */
   assign( StarDetector: any ): StarDetector;
   /**
    * Performs a star detection process with the current parameters. Returns an Array of StarData objects sorted by brightness (flux) in descending order.
    */
   stars( image?: Image, mask?: Image ): any[];
   /**
    * Computes a binary map of star detection structures for the specified image and the current set of star detection parameters.
    * Returns the star detection map as a new image in unsigned 8-bit integer format.
    */
   structureMap( image: Image ): Image;
   /**
    * Isolates star detection structures for the specified image.
    * Returns a new image which is the result of multiplying the specified image by the binarized structure map generated with the current star detection parameters.
    */
   structures( image: Image ): Image;
}

declare class StarPosition {
   constructor( ra?: number, dec?: number, properMotionRA?: number, properMotionDec?: number, parallax?: number, radialVelocity?: number, epoch?: Date | string | number );
   constructor( StarPosition: any );
   alpha: number;
   declination: number;
   delta: number;
   epoch: Date;
   muAlpha: number;
   muDelta: number;
   parallax: number;
   properMotionDec: number;
   properMotionRA: number;
   radialVelocity: number;
   rightAscension: number;
   assign( StarPosition: any ): StarPosition;
}

declare class Stat {
   constructor();
   static BMV( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, beta?: number, startIndex?: number, endIndex?: number ): number;
   static BWMV( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): number;
   static MAD( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): number;
   static Qn( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static Sn( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static avgDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): number;
   static bendMidvariance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, beta?: number, startIndex?: number, endIndex?: number ): number;
   static biweightMidvariance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): number;
   static generalizedESDRejection( data?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, alpha?: number, outliersFraction?: number ): object;
   static initRandomGenerator( seed?: bigint | number ): void;
   static maximum( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static mean( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static median( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static medianAbsDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): number;
   static minimum( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static modulus( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static orderStatistic( data: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, k?: number, startIndex?: number, endIndex?: number ): number;
   static random(  ): number;
   static randomArray( count: number ): any[];
   static randomFloat32Array( count?: number, distribution?: string, distr_p1?: number, distr_p2?: number ): Float32Array;
   static randomFloat64Array( count?: number, distribution?: string, distr_p1?: number, distr_p2?: number ): Float64Array;
   static randomSeed32(  ): number;
   static randomSeed64(  ): bigint;
   static robustChauvenetRejection( data?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, rejectionLimit?: number, largeSampleSize?: number ): object;
   static stableAvgDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): number;
   static stableMean( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static stableModulus( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static stableSum( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static stableSumOfSquares( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static stdDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static sum( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static sumOfSquares( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static trimmedMean( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, low?: number, high?: number, startIndex?: number, endIndex?: number ): number;
   static trimmedMeanOfSquares( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, low?: number, high?: number, startIndex?: number, endIndex?: number ): number;
   static twoSidedAvgDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): [number, number];
   static twoSidedBWMV( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): [number, number];
   static twoSidedBiweightMidvariance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): [number, number];
   static twoSidedMAD( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): [number, number];
   static twoSidedMedianAbsDev( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, center?: number, startIndex?: number, endIndex?: number ): [number, number];
   static variance( data?: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number ): number;
   static winsorizedSigmaClippingRejection( data?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, sigmaLow?: number, sigmaHigh?: number, clipLow?: boolean, clipHigh?: boolean, cutoff?: number ): object;
}

interface String {
   UUID(  ): string;
   UUID(  ): void;
   colonSeparated( container?: object, toString?: Function ): string;
   colonSeparated( container?: object, toString?: Function ): void;
   commaSeparated( container?: object, toString?: Function ): string;
   commaSeparated( container?: object, toString?: Function ): void;
   currentLocalISO8601DateTime( options?: object ): string;
   currentUTCISO8601DateTime( options?: object ): string;
   hyphenSeparated( container?: object, toString?: Function ): string;
   hyphenSeparated( container?: object, toString?: Function ): void;
   hyphenated( container?: object, toString?: Function ): string;
   hyphenated( container?: object, toString?: Function ): void;
   newLineSeparated( container?: object, toString?: Function ): string;
   newLineSeparated( container?: object, toString?: Function ): void;
   random( length?: number, options?: number ): string;
   separated( container?: object, separator?: string, arg_?: any, toString?: Function ): string;
   separated( container?: object, separator?: string, arg_?: any, toString?: Function ): void;
   spaceSeparated( container?: object, toString?: Function ): string;
   spaceSeparated( container?: object, toString?: Function ): void;
   tabSeparated( container?: object, toString?: Function ): string;
   tabSeparated( container?: object, toString?: Function ): void;
   toISO8601DateTime( year: number, month: number, day: number, dayf?: number, tz?: number, options?: object ): string;
   toISO8601DateTime( items?: any[], options?: object ): string;
   toISO8601DateTime( object?: object, options?: object ): string;
   toSexagesimal( sign: number, s1: number, s2: number, s3?: number, options?: object ): string;
   toSexagesimal( items?: any[], options?: object ): string;
   toSexagesimal( degrees?: number, options?: object ): string;
   underscoreSeparated( container?: object, toString?: Function ): string;
   underscoreSeparated( container?: object, toString?: Function ): void;
   clone(  ): string;
   clone(  ): void;
   contains( s: string ): boolean;
   contains( s: string ): void;
   ensureDoubleQuoted(  ): string;
   ensureDoubleQuoted(  ): void;
   ensureEnclosed( q?: string ): string;
   ensureSingleQuoted(  ): string;
   ensureSingleQuoted(  ): void;
   hash( seed?: number ): number;
   hash32( seed?: number ): number;
   hash64( BigInt?: any ): bigint;
   isEmpty(  ): boolean;
   isEmpty(  ): void;
   justifyCenter( width?: number, fill?: string ): string;
   justifyCenter( width?: number, fill?: string ): void;
   justifyLeft( width?: number, fill?: string ): string;
   justifyLeft( width?: number, fill?: string ): void;
   justifyRight( width?: number, fill?: string ): string;
   justifyRight( width?: number, fill?: string ): void;
   matchesWildcardPattern( wildPattern: string ): boolean;
   parseISO8601DateTime(  ): { year: number, month: number, day: number, dayf: number, tz: number };
   parseSexagesimal( separators?: string ): [number, number, number, number];
   sexagesimalToFloat( separators?: string ): number;
   toBoolean(  ): boolean;
   toFloat(  ): number;
   toInt( base?: number ): number;
   toInt64( base?: number ): bigint;
   toUTF8( startIndex: number, count: number ): ByteArray;
   toUTF8( startIndex: number, count: number ): void;
   toUint( base?: number ): number;
   toUint64( base?: number ): bigint;
   tryToBoolean(  ): boolean | null;
   tryToFloat(  ): number | null;
   tryToInt( base?: number ): number | null;
   tryToInt64( base?: number ): bigint | null;
   tryToUint( base?: number ): number | null;
   tryToUint64( base?: number ): bigint | null;
   unquote(  ): string;
   unquote(  ): void;
}

declare class SurfacePolynomial {
   constructor(  );
   constructor( src: SurfacePolynomial );
   readonly degree: number;
   readonly isValid: boolean;
   assign( src: SurfacePolynomial ): SurfacePolynomial;
   clear(  ): SurfacePolynomial;
   evaluate( p: Point ): number;
   evaluate( x: number, y: number ): number;
   evaluate( points: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): Float64Array;
   initialize( x: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], y: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], z: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): SurfacePolynomial;
}

/**
 * Given a finite set of three-dimensional points representing sampled values of a real bivariate function of the form
 * z = f(x,y),
 * The shape-preserving surface simplification algorithm aims to generate a reduced set of points with equivalent geometric properties to within a prescribed maximum error parameter.
 * The implemented algorithm divides the input point space recursively on the XY plane into rectangular regions using custom quadtree structures. For each region, the algorithm finds the orientation of the dominant plane through principal component analysis. The deviation of function values from the dominant plane is evaluated for the points in the region. If the region is considered flat to within a tolerance parameter, its points are replaced with a simplified (reduced) set of points that preserves the local shape of the original function over the region. If the region is tagged as curved, it is further divided using a new quadtree recursion until no additional simplification can be achieved.
 * Surface simplification is a crucial auxiliary tool for enhancing the practical application of surface interpolation and approximation methods. These algorithms enable us to work with large-scale datasets by selecting a subset of essential data points, typically much smaller than the original set, tailored to solve a particular problem. Surface simplification is particularly useful for the application of computationally expensive approximation algorithms, such as thin plate splines. A good example is the computation of high-accuracy astrometric solutions, where surface simplification enables the use of large sets of tens of thousands of stars to generate thin plate spline models of local distortions. Generation of surface splines with the standard implementation, based on the solution of dense linear systems, has O(N3) time complexity, and about O(N2) complexity with algorithms based on Domain Decomposition Method (DDM) techniques. The efficient reduction of input point sets is crucial for the practical application of these essential numerical devices.
 */
declare class SurfaceSimplifier {
   /**
    * Constructs a new SurfaceSimplifier object with default parameters.
    */
   constructor(  );
   /**
    * Constructs a new SurfaceSimplifier object as a copy of an existing instance src.
    */
   constructor( SurfaceSimplifier: any );
   /**
    * Turns inclusion of centroid points on or off for this surface simplifier.
    * When a subregion of the input space is simplified, the surface simplification algorithm replaces the subset of points in the subregion with a simplified, reduced set. If this option is enabled, the average point of the subset, also known as centroid, is also included in the simplified point list. This usually improves the algorithm's shape-preservation behavior, at the cost of a small number of additional points in the simplified point list.
    * Centroid points are included by default.
    */
   centroidInclusionEnabled: boolean;
   /**
    * This property defines a fraction of outlier points to be rejected in each subregion of the point space being simplified for local curvature estimation.
    * Rejecting a sufficient fraction of points makes the surface simplification algorithm more immune to noise in the input data, including erroneous points that may deviate substantially from the true surface represented by the sampled function. The result is a more robust and accurate simplified surface. However, a rejection fraction that is too high may remove significant data, leading to an inaccurate result.
    * The value of this property must be in the (0,1) range. The default value upon construction is 0.2, which is quite appropriate in most cases.
    */
   rejectFraction: number;
   /**
    * Turns outlier rejection on or off for this surface simplifier.
    * When enabled, a prescribed fraction of outlier points (see the rejectFraction property) will be rejected on each subregion for estimation of local curvature. An appropriate amount of rejection is important for achieving a robust result, especially when simplifying noisy data, where outliers may introduce false curvature that prevents efficient simplification.
    */
   rejectionEnabled: boolean;
   /**
    * This property determines the maximum absolute deviation of function values from a plane allowed before triggering simplification of the subset of points within a subregion of the input point space.
    * The value of this property is specified in bivariate function value units, i.e., in Z-axis units. Higher tolerances tend to allow for more simplification, and hence for shorter simplified point lists. However, an excessive tolerance value may degrade the accuracy of the simplified surface in terms of preservation of the original function's structure and shape. This parameter must be carefully tailored to the requirements of the function being simplified and the tasks for which the simplified version will be used.
    */
   tolerance: number;
   /**
    * Replaces the properties of this object with those of the specified src object. Returns a reference to this object.
    */
   assign( SurfaceSimplifier: any ): SurfaceSimplifier;
   /**
    * Attempts to simplify a set of points given by their separate coordinates and function values.
    * x
    * The X coordinates of the input point set.
    * y
    * The Y coordinates of the input point set.
    * z
    * The function values for the input point set.
    * Returns an array of the form:
    * [ Vector xs, Vector ys, Vector zs ]
    * where xs, ys and zs are the coordinates and function values of the simplified surface.
    * If the specified surface can be simplified using the current working parameters defined for this object, the output vectors will have fewer elements (usually much fewer) than the input vectors. Otherwise, exact copies of the input vectors will be assigned to xs, ys, and zs. This will also happen if the input vectors have fewer than four coordinates, since a triangular facet cannot be simplified.
    */
   simplify( x: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], y: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], z: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): any[];
}

declare class SurfaceSpline {
   constructor(  );
   constructor( src: SurfaceSpline );
   readonly isValid: boolean;
   readonly length: number;
   order: number;
   rbfType: number;
   shapeParameter: number;
   smoothing: number;
   usePolynomial: boolean;
   assign( src: SurfaceSpline ): SurfaceSpline;
   clear(  ): SurfaceSpline;
   evaluate( p: Point ): number;
   evaluate( x: number, y: number ): number;
   evaluate( points: any[] | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array ): Float64Array;
   initialize( x: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], y: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], z?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[], w?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | any[] ): SurfaceSpline;
}

declare class System {
   static readonly byteOrder: string;
   static readonly cpuArchitecture: string;
   static readonly hostName: string;
   static readonly kernelVersion: string;
   static readonly osName: string;
   static readonly osVersion: string;
   static readonly platform: string;
   constructor();
   static cpuId( funcId?: number, subfuncId?: number ): [number, number, number, number];
   static cpuInfo(  ): object;
   static getEnvironmentVariable( varName: string ): string;
   static msleep( milliseconds: number ): void;
   static noop(  ): void;
   static offsetFromUTC(  ): number;
   static offsetFromUTC( isoDateTime: string ): number;
   static offsetFromUTC( date: Date ): number;
   static physicalMemoryStatus(  ): object;
   static replaceEnvironmentVariables( text: string ): string;
   static sleep( seconds: number ): void;
}

declare class TabBox extends Control {
   constructor( parent?: Control );
   bottomLeftControl: Control;
   bottomRightControl: Control;
   readonly currentPageControl: Control;
   currentPageIndex: number;
   leftControl: Control;
   readonly numberOfPages: number;
   rightControl: Control;
   tabPosition: number;
   topLeftControl: Control;
   topRightControl: Control;
   addPage( page: Control, label?: string, icon?: Bitmap | string ): TabBox;
   clearControls( clearTopLeft?: boolean, clearTopRight?: boolean, clearBottomLeft?: boolean, clearBottomRight?: boolean ): TabBox;
   clearPageIcon( index: number ): TabBox;
   disablePage( index?: number, disable?: boolean ): TabBox;
   enablePage( index?: number, enable?: boolean ): TabBox;
   insertPage( index: number, page: Control, label?: string, icon?: Bitmap | string ): TabBox;
   isPageEnabled( index: number ): boolean;
   pageControlByIndex( index: number ): Control;
   pageIcon( index: number ): Bitmap;
   pageLabel( index: number ): string;
   pageToolTip( index: number ): string;
   removePage( index: number ): TabBox;
   setPageIcon( index: number, icon: Bitmap | string ): TabBox;
   setPageLabel( index: number, label: string ): TabBox;
   setPageToolTip( index: number, toolTip: string ): TabBox;
   onPageSelected: ( pageIndex: number ) => void;
}

declare class TextBox extends Frame {
   constructor( parent?: Control );
   caretPosition: number;
   readonly hasSelection: boolean;
   readOnly: boolean;
   readonly selectedText: string;
   selectionEnd: number;
   selectionStart: number;
   text: string;
   clear(  ): TextBox;
   end(  ): TextBox;
   home(  ): TextBox;
   insert( text: string ): TextBox;
   selectAll(  ): TextBox;
   unselect(  ): TextBox;
   onCaretPositionUpdated: (  ) => void;
   onRedoAvailable: ( available: boolean ) => void;
   onSelectionUpdated: (  ) => void;
   onTextUpdated: (  ) => void;
   onUndoAvailable: ( available: boolean ) => void;
}

declare class Timer {
   constructor( interval?: number, periodic?: boolean, parent?: Control );
   readonly count: number;
   interval: number;
   readonly isRunning: boolean;
   periodic: boolean;
   precise: boolean;
   readonly remainingTime: number;
   singleShot: boolean;
   start(  ): Timer;
   stop(  ): Timer;
   onTimeout: (  ) => void;
}

declare class ToolButton extends Control {
   constructor( parent?: Control );
   checkable: boolean;
   checked: boolean;
   icon: Bitmap;
   iconHeight: number;
   iconWidth: number;
   pushed: boolean;
   state: number;
   text: string;
   onCheck: ( checked: boolean ) => void;
   onClick: ( checked: boolean ) => void;
   onPress: (  ) => void;
   onRelease: (  ) => void;
}

declare class TreeBox extends Control {
   constructor( parent?: Control );
   alternateRowColor: number;
   currentNode: TreeBoxNode;
   headerSorting: boolean;
   headerVisible: boolean;
   iconHeight: number;
   iconWidth: number;
   indentSize: number;
   multipleSelection: boolean;
   nodeDragging: boolean;
   nodeExpansion: boolean;
   readonly numberOfChildren: number;
   numberOfColumns: number;
   rootDecoration: boolean;
   readonly selectedNodes: any[];
   uniformRowHeight: boolean;
   add( TreeBoxNode: any ): TreeBox;
   adjustColumnWidthToContents( column: number ): TreeBox;
   child( index: number ): TreeBoxNode | null;
   childIndex( TreeBoxNode: any ): number;
   clear(  ): TreeBox;
   columnWidth( column: number ): number;
   deselectAllNodes(  ): TreeBox;
   headerAlignment( column: number ): number;
   headerIcon( column: number ): Bitmap;
   headerText( column: number ): string;
   hideColumn( column?: number, hide?: boolean ): TreeBox;
   insert( index: number, TreeBoxNode: any ): TreeBox;
   isColumnVisible( column: number ): boolean;
   move( fromIndex: number, toIndex: number ): TreeBox;
   nodeByPosition( p: Point ): TreeBoxNode | null;
   nodeByPosition( x: number, y: number ): TreeBoxNode | null;
   nodeRect( TreeBoxNode: any ): Rect;
   remove( index: number ): TreeBox;
   selectAllNodes(  ): TreeBox;
   setColumnWidth( column: number, width: number ): TreeBox;
   setHeaderAlignment( column: number, alignment: number ): TreeBox;
   setHeaderIcon( column: number, icon: Bitmap | string | null ): TreeBox;
   setHeaderText( column: number, text: string ): TreeBox;
   setIconSize( width: number, height: number ): TreeBox;
   setIconSize( size: number ): TreeBox;
   setNodeAtViewportBottom( TreeBoxNode: any ): TreeBox;
   setNodeAtViewportCenter( TreeBoxNode: any ): TreeBox;
   setNodeAtViewportTop( TreeBoxNode: any ): TreeBox;
   /**
    * Deprecated: Use TreeBox.setNodeIntoViewport() instead.
    */
   setNodeIntoView( TreeBoxNode: any ): TreeBox;
   setNodeIntoViewport( TreeBoxNode: any ): TreeBox;
   showColumn( column?: number, show?: boolean ): TreeBox;
   sort( column?: number, ascending?: boolean ): TreeBox;
   onCurrentNodeUpdated: ( TreeBoxNode: any, TreeBoxNode_2: any ) => void;
   onNodeActivated: ( TreeBoxNode: any, column: number ) => void;
   onNodeClicked: ( TreeBoxNode: any, column: number ) => void;
   onNodeCollapsed: ( TreeBoxNode: any ) => void;
   onNodeDoubleClicked: ( TreeBoxNode: any, column: number ) => void;
   onNodeEntered: ( TreeBoxNode: any, column: number ) => void;
   onNodeExpanded: ( TreeBoxNode: any ) => void;
   onNodeSelectionUpdated: (  ) => void;
   onNodeUpdated: ( TreeBoxNode: any, column: number ) => void;
}

declare class TreeBoxNode {
   constructor(  );
   constructor( parentTree?: TreeBox, index?: number );
   constructor( TreeBoxNode?: any, index?: number );
   checkable: boolean;
   checked: boolean;
   enabled: boolean;
   expanded: boolean;
   firstColumnSpanned: boolean;
   readonly numberOfChildren: number;
   readonly parent: TreeBoxNode;
   readonly parentTree: TreeBox;
   selectable: boolean;
   selected: boolean;
   add( TreeBoxNode: any ): TreeBoxNode;
   alignment( column: number ): number;
   backgroundColor( column: number ): number;
   child( index: number ): TreeBoxNode | null;
   clearIcon( column: number ): TreeBoxNode;
   font( column: number ): Font;
   icon( column: number ): Bitmap;
   insert( index: number, TreeBoxNode: any ): TreeBoxNode;
   move( fromIndex: number, toIndex: number ): TreeBoxNode;
   remove( index: number ): TreeBoxNode;
   setAlignment( column: number, alignment: number ): TreeBoxNode;
   setBackgroundColor( column: number, rgba: number ): TreeBoxNode;
   setFont( column: number, font: Font ): TreeBoxNode;
   setIcon( column: number, icon: Bitmap | string | null ): TreeBoxNode;
   setText( column: number, text: string ): TreeBoxNode;
   setTextColor( column: number, rgba: number ): TreeBoxNode;
   setToolTip( column: number, toolTip: string ): TreeBoxNode;
   text( column: number ): string;
   textColor( column: number ): number;
   toolTip( column: number ): string;
}

declare class Vector extends Float64Array {
   constructor(  );
   constructor( length: number );
   constructor( value: number, length: number );
   constructor( src?: Vector, startIndex?: number, endIndex?: number );
   constructor( src?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number );
   constructor( src?: any[], startIndex?: number, endIndex?: number );
   constructor( src?: ArrayBuffer, byteOffset?: number, length?: number );
   constructor(  );
   constructor( length: number );
   constructor( value: number, length: number );
   constructor( src?: Vector, startIndex?: number, endIndex?: number );
   constructor( src?: Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array, startIndex?: number, endIndex?: number );
   constructor( src?: any[], startIndex?: number, endIndex?: number );
   constructor( src?: ArrayBuffer, byteOffset?: number, length?: number );
   static fromSpherical( slon_or_lon: number, clon_or_lat?: number, slat?: number, clat?: number ): Vector;
   static fromSpherical( slon_or_lon: number, clon_or_lat?: number, slat?: number, clat?: number ): void;
   static random( n?: number, distribution?: string, distr_p1?: number, distr_p2?: number ): Vector;
   static random( n?: number, distribution?: string, distr_p1?: number, distr_p2?: number ): void;
   readonly isEmpty: boolean;
   readonly lowerBound: number;
   readonly upperBound: number;
   BMV( center?: number, beta?: number, startIndex?: number, endIndex?: number ): number;
   BMV( center?: number, beta?: number, startIndex?: number, endIndex?: number ): void;
   BWMV( center?: number, sigma?: number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): number;
   BWMV( center?: number, sigma?: number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): void;
   MAD( center?: number, startIndex?: number, endIndex?: number ): number;
   MAD( center?: number, startIndex?: number, endIndex?: number ): void;
   Qn( startIndex?: number, endIndex?: number ): number;
   Qn( startIndex?: number, endIndex?: number ): void;
   Sn( startIndex?: number, endIndex?: number ): number;
   Sn( startIndex?: number, endIndex?: number ): void;
   abs(  ): Vector;
   abs(  ): void;
   add( v: Vector ): Vector;
   add( x: number ): Vector;
   add( v: Vector ): void;
   add( x: number ): void;
   at( index: number ): number;
   at( index: number, value: number ): void;
   at( index: number ): void;
   at( index: number, value: number ): void;
   avgDev( center?: number, startIndex?: number, endIndex?: number ): number;
   avgDev( center?: number, startIndex?: number, endIndex?: number ): void;
   bendMidvariance( center?: number, beta?: number, startIndex?: number, endIndex?: number ): number;
   bendMidvariance( center?: number, beta?: number, startIndex?: number, endIndex?: number ): void;
   binarySearch( value?: number, startIndex?: number, endIndex?: number ): number;
   binarySearch( value?: number, startIndex?: number, endIndex?: number ): void;
   biweightMidvariance( center?: number, sigma?: number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): number;
   biweightMidvariance( center?: number, sigma?: number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): void;
   compare( v: Vector ): number;
   compare( v: Vector ): void;
   cross( v: Vector ): Vector;
   cross( v: Vector ): void;
   div( v: Vector ): Vector;
   div( x: number ): Vector;
   div( v: Vector ): void;
   div( x: number ): void;
   dot( v: Vector ): number;
   dot( v: Vector ): void;
   isEqualTo( v: Vector ): boolean;
   isEqualTo( v: Vector ): void;
   isLessThan( v: Vector ): boolean;
   isLessThan( v: Vector ): void;
   l1norm(  ): number;
   l1norm(  ): void;
   l2norm(  ): number;
   l2norm(  ): void;
   linearSearch( value?: number, startIndex?: number, endIndex?: number ): number;
   linearSearch( value?: number, startIndex?: number, endIndex?: number ): void;
   maxComponent(  ): number;
   maxComponent(  ): void;
   mean( startIndex?: number, endIndex?: number ): number;
   mean( startIndex?: number, endIndex?: number ): void;
   median( startIndex?: number, endIndex?: number ): number;
   median( startIndex?: number, endIndex?: number ): void;
   minComponent(  ): number;
   minComponent(  ): void;
   modulus( startIndex?: number, endIndex?: number ): number;
   modulus( startIndex?: number, endIndex?: number ): void;
   mul( v: Vector ): Vector;
   mul( M: Matrix ): Vector;
   mul( x: number ): Vector;
   mul( v: Vector ): void;
   mul( M: Matrix ): void;
   mul( x: number ): void;
   norm( p: number ): number;
   norm( p: number ): void;
   orderStatistic( k?: number, startIndex?: number, endIndex?: number ): number;
   orderStatistic( k?: number, startIndex?: number, endIndex?: number ): void;
   pow( x: number ): Vector;
   pow( x: number ): void;
   setAbs(  ): Vector;
   setAbs(  ): void;
   setRandom( distribution?: string, distr_p1?: number, distr_p2?: number ): Vector;
   setRandom( distribution?: string, distr_p1?: number, distr_p2?: number ): void;
   setSqr(  ): Vector;
   setSqr(  ): void;
   setSqrt(  ): Vector;
   setSqrt(  ): void;
   setUnit(  ): Vector;
   setUnit(  ): void;
   sort( compareFn?: any ): any;
   sort( compareFn?: any ): any;
   sorted(  ): Vector;
   sorted(  ): void;
   sqr(  ): Vector;
   sqr(  ): void;
   sqrt(  ): Vector;
   sqrt(  ): void;
   stableAvgDev( center?: number, startIndex?: number, endIndex?: number ): number;
   stableAvgDev( center?: number, startIndex?: number, endIndex?: number ): void;
   stableMean( startIndex?: number, endIndex?: number ): number;
   stableMean( startIndex?: number, endIndex?: number ): void;
   stableModulus( startIndex?: number, endIndex?: number ): number;
   stableModulus( startIndex?: number, endIndex?: number ): void;
   stableSum( startIndex?: number, endIndex?: number ): number;
   stableSum( startIndex?: number, endIndex?: number ): void;
   stableSumOfSquares( startIndex?: number, endIndex?: number ): number;
   stableSumOfSquares( startIndex?: number, endIndex?: number ): void;
   stdDev( startIndex?: number, endIndex?: number ): number;
   stdDev( startIndex?: number, endIndex?: number ): void;
   sub( v: Vector ): Vector;
   sub( x: number ): Vector;
   sub( v: Vector ): void;
   sub( x: number ): void;
   sum( startIndex?: number, endIndex?: number ): number;
   sum( startIndex?: number, endIndex?: number ): void;
   sumOfSquares( startIndex?: number, endIndex?: number ): number;
   sumOfSquares( startIndex?: number, endIndex?: number ): void;
   toArray( startIndex?: number, endIndex?: number ): any[];
   toArray( startIndex?: number, endIndex?: number ): void;
   toFloat32Array( startIndex?: number, endIndex?: number ): Float32Array;
   toFloat32Array( startIndex?: number, endIndex?: number ): void;
   toFloat64Array( startIndex?: number, endIndex?: number ): Float64Array;
   toFloat64Array( startIndex?: number, endIndex?: number ): void;
   toSpherical(  ): any[];
   toSpherical(  ): void;
   toSpherical2Pi(  ): any[];
   toSpherical2Pi(  ): void;
   toString( fmt?: any ): string;
   trimmedMean( low?: number, high?: number, startIndex?: number, endIndex?: number ): number;
   trimmedMean( low?: number, high?: number, startIndex?: number, endIndex?: number ): void;
   trimmedMeanOfSquares( low?: number, high?: number, startIndex?: number, endIndex?: number ): number;
   trimmedMeanOfSquares( low?: number, high?: number, startIndex?: number, endIndex?: number ): void;
   twoSidedAvgDev( center?: number, startIndex?: number, endIndex?: number ): [number, number];
   twoSidedAvgDev( center?: number, startIndex?: number, endIndex?: number ): void;
   twoSidedBWMV( center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): [number, number];
   twoSidedBWMV( center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): void;
   twoSidedBiweightMidvariance( center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): [number, number];
   twoSidedBiweightMidvariance( center?: number, sigma?: any[] | object | number, k?: number, reducedLength?: boolean, startIndex?: number, endIndex?: number ): void;
   twoSidedMAD( center?: number, startIndex?: number, endIndex?: number ): [number, number];
   twoSidedMAD( center?: number, startIndex?: number, endIndex?: number ): void;
   unit(  ): Vector;
   unit(  ): void;
   validIndexes( startIndex: number, endIndex: number ): { start: number, end: number };
   validIndexes( startIndex: number, endIndex: number ): void;
   variance( startIndex?: number, endIndex?: number ): number;
   variance( startIndex?: number, endIndex?: number ): void;
}

declare class VerticalSizer extends Sizer {
   constructor(  );
}

declare class VerticalSlider extends Slider {
   constructor( parent?: Control );
}

declare class View {
   constructor(  );
   constructor( id: string );
   constructor( view: View );
   static viewById( viewId: string ): View | null;
   readonly canGoBackward: boolean;
   readonly canGoForward: boolean;
   readonly fullId: string;
   historyIndex: number;
   id: string;
   readonly image: Image;
   readonly initialProcessing: ProcessInstance | any;
   readonly isMainView: boolean;
   readonly isNull: boolean;
   readonly isPreview: boolean;
   readonly isView: boolean;
   readonly isVirtual: boolean;
   readonly processing: ProcessInstance | any;
   readonly properties: any[];
   stf: any[];
   readonly uniqueId: string;
   readonly window: ImageWindow;
   beginProcess( flags?: number ): void;
   cancelProcess(  ): void;
   computeOrFetchProperty( id: string ): any | null;
   computeProperty( id: string ): any | null;
   deleteProperty( id: string ): boolean;
   endProcess(  ): void;
   exportProperties( file: FileFormatInstance ): number;
   hasProperty( id: string ): boolean;
   importProperties( file: FileFormatInstance ): string;
   propertyAttributes( id: string ): number;
   propertySize( id: string ): number;
   propertyType( id: string ): number;
   propertyValue( id: string ): any | null;
   setPropertyAttributes( id: string, attributes: number ): boolean;
   setPropertyValue( id: string, Value?: any, type?: number, attributes?: number ): boolean;
}

declare class ViewList extends Control {
   constructor( parent?: Control );
   currentView: View;
   excludeIdentifiersPattern: string;
   excludedView: View;
   readonly includesMainViews: boolean;
   readonly includesPreviews: boolean;
   getAll(  ): ViewList;
   getMainViews(  ): ViewList;
   getPreviews(  ): ViewList;
   reload(  ): ViewList;
   remove( view: View ): ViewList;
   onCurrentViewUpdated: ( view: View ) => void;
   onViewSelected: ( view: View ) => void;
}

declare class WebView extends Control {
   constructor( parent?: Control );
   backgroundColor: number;
   readonly hasSelection: boolean;
   readonly selectedText: string;
   zoomFactor: number;
   evaluateScript( sourceCode?: string, language?: string ): WebView;
   loadContent( uri: string ): WebView;
   reload(  ): WebView;
   requestHTML(  ): WebView;
   requestPlainText(  ): WebView;
   saveAsPDF( filePath?: string, pageWidth?: number, pageHeight?: number, marginLeft?: number, marginTop?: number, marginRight?: number, marginBottom?: number, landscape?: boolean ): WebView;
   setContent( data?: string | ByteArray | Float32Array | Float64Array | Uint8Array | Uint16Array | Uint32Array | Int32Array | null, mimeType?: string ): WebView;
   setHTML( html: string ): WebView;
   setPlainText( text: string ): WebView;
   stop(  ): WebView;
   onHTMLAvailable: ( html: string ) => void;
   onLoadFinished: ( ok: boolean ) => void;
   onLoadProgress: ( progress: number ) => void;
   onLoadStarted: (  ) => void;
   onPlainTextAvailable: ( text: string ) => void;
   onScriptResultAvailable: ( value: any ) => void;
   onSelectionUpdated: (  ) => void;
}

declare class XML {
   constructor();
   static collapsedSpaces( text: string ): string;
   static decodedText( text: string ): string;
   static encodedText( text?: string, apos?: boolean ): string;
   static isLineBreakChar( char: string | number ): boolean;
   static isNameChar( char: string | number ): boolean;
   static isNameStartChar( char: string | number ): boolean;
   static isRestrictedChar( char: string | number ): boolean;
   static isSpaceChar( char: string | number ): boolean;
   static isValidName( text: string ): boolean;
   static isWhiteSpaceChar( char: string | number ): boolean;
   static referenceValue( reference: string ): string;
   static trimmedSpaces( text: string ): string;
}

declare class XMLAttribute extends XMLComponent {
   constructor(  );
   constructor( name?: string, value?: string );
   constructor( src: XMLAttribute );
   readonly encodedValue: string;
   readonly name: string;
   value: string;
}

declare class XMLAttributeList {
   constructor(  );
   constructor( src: XMLAttributeList );
   readonly isEmpty: boolean;
   readonly length: number;
   attributeValue( name: string ): string;
   clear(  ): XMLAttributeList;
   hasAttribute( name: string ): boolean;
   parse( text: string ): XMLAttributeList;
   removeAttribute( name: string ): XMLAttributeList;
   serialize(  ): string;
   setAttribute( attribute: XMLAttribute ): XMLAttributeList;
   setAttribute( name: string, value: string ): XMLAttributeList;
   setAttributes( attributes: XMLAttributeList ): XMLAttributeList;
   setAttributes( attributes: any[] ): XMLAttributeList;
   sort(  ): XMLAttributeList;
}

declare class XMLCDATA extends XMLNode {
   constructor( data: string );
   constructor( XMLCDATA: any );
   readonly cdata: string;
}

declare class XMLComment extends XMLNode {
   constructor( comment: string );
   constructor( XMLComment: any );
   readonly comment: string;
}

declare class XMLComponent {
   constructor();
   readonly isTopLevel: boolean;
   readonly parentElement: XMLElement | null;
}

declare class XMLDeclaration extends XMLComponent {
   constructor(  );
   constructor( version?: string, encoding?: string, standalone?: boolean );
   constructor( XMLDeclaration: any );
   readonly documentEncoding: string;
   readonly isDefined: boolean;
   readonly isStandaloneDocument: boolean;
   readonly version: string;
   serialize(  ): string;
}

declare class XMLDocTypeDeclaration extends XMLComponent {
   constructor(  );
   constructor( name?: string, definition?: string );
   constructor( XMLDocTypeDeclaration: any );
   readonly definition: string;
   readonly isDefined: boolean;
   readonly name: string;
   serialize(  ): string;
}

declare class XMLDocument {
   constructor(  );
   autoFormatting: boolean;
   docType: XMLDocTypeDeclaration;
   indentSize: number;
   indentTabs: boolean;
   readonly isEmpty: boolean;
   readonly nodeCount: number;
   parserOptions: number;
   rootElement: XMLElement;
   xml: XMLDeclaration;
   addNode( arg0: XMLNode ): XMLDocument;
   addNodes( arg0: any[] ): XMLDocument;
   clear(  ): XMLDocument;
   parse( text: string ): XMLDocument;
   parseFromFile( filePath: string ): XMLDocument;
   serialize(  ): string;
   serializeAsHTML(  ): string;
   serializeAsUTF8(  ): ByteArray;
   serializeAsUTF8HTML(  ): ByteArray;
   serializeToFile( filePath: string ): XMLDocument;
   serializeToFileAsHTML( filePath: string ): XMLDocument;
}

declare class XMLElement extends XMLNode {
   constructor( name?: string, attributes?: XMLAttributeList );
   constructor( parent: XMLElement, name?: string, attributes?: XMLAttributeList );
   constructor( XMLElement: any );
   readonly attributes: XMLAttributeList;
   readonly childCount: number;
   readonly hasAttributes: boolean;
   readonly hasCDATA: boolean;
   readonly hasComments: boolean;
   readonly hasElements: boolean;
   readonly hasProcessingInstructions: boolean;
   readonly hasText: boolean;
   readonly isEmpty: boolean;
   readonly isRootElement: boolean;
   readonly name: string;
   readonly text: string;
   addChildNode( node: XMLNode ): XMLElement;
   addChildNodes( nodes: any[] ): XMLElement;
   attributeValue( name: string ): string;
   childElements( recursive?: boolean ): any[];
   childElementsByName( name?: string, recursive?: boolean ): any[];
   childNodes( types?: number, recursive?: boolean ): any[];
   clearAttributes(  ): XMLElement;
   destroyChildNodes(  ): XMLElement;
   hasAttribute( name: string ): boolean;
   hasChildElementWithName( name?: string, recursive?: boolean ): boolean;
   parseAttributes( text: string ): XMLElement;
   removeAttribute( name: string ): XMLElement;
   serializeAttributes(  ): string;
   setAttribute( attribute: XMLAttribute ): XMLElement;
   setAttribute( name: string, value: string ): XMLElement;
   setAttributes( attributes: XMLAttributeList ): XMLElement;
   setAttributes( attributes: any[] ): XMLElement;
   sortAttributes(  ): XMLElement;
}

declare class XMLNode extends XMLComponent {
   constructor();
   readonly isChildNode: boolean;
   readonly isComment: boolean;
   readonly isElement: boolean;
   readonly isText: boolean;
   readonly location: object;
   readonly nodeType: number;
   serialize( autoFormat?: boolean, indentChar?: string, unsigned?: any, unsigned_2?: any ): string;
   serializeAsHTML( autoFormat?: boolean, indentChar?: string, unsigned?: any, unsigned_2?: any ): string;
}

declare class XMLProcessingInstructions extends XMLNode {
   constructor( target: string, instructions: string );
   constructor( XMLProcessingInstructions: any );
   readonly instructions: string;
   readonly target: string;
}

declare class XMLText extends XMLNode {
   constructor( text?: string, preserveSpaces?: boolean, verbatim?: boolean );
   constructor( XMLText: any );
   readonly preserveSpaces: boolean;
   readonly text: string;
   encodedText(  ): string;
   spaceTransformedText( collapse?: boolean, trim?: boolean ): string;
}

declare class XMLUnknownElement extends XMLNode {
   constructor( name?: string, parameters?: string );
   constructor( XMLUnknownElement: any );
   readonly name: string;
   readonly parameters: string;
}

// --- Installed PixInsight Processes & Tools ---
/**
 * 1 Description
 * Arcsinh stretch is a method of stretching image data while preserving the orignal color (i.e. the original R,G,B ratios) in every pixel of the image. Color is retained from the very faintest object to the very brightest unsaturated star. Contrast this to a traditional gamma curve stretch where the brighter objects become desaturated (i.e. bleached) during the stretch.
 * The user interface has been kept as simple as possible. There are two important parameters: the black point and the stretch factor. The process also relies very heavily on the real-time preview window, so the results can be judged interactively while adjusting the sliders that control those two key parameters.
 * The ArcsinhStretch process is designed to be run on linear (i.e. unstretched) data which has been white balanced and background extracted. When using the real-time preview window, a screen transfer function should not be active because this will upset the appearance of the data in the real-time preview window.
 */
declare class ArcsinhStretch {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   useRGBWS: boolean;
   stretch: number;
   protectHighlights: boolean;
   previewClipped: boolean;
   blackPoint: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: AutomaticBackgroundExtractor
 */
declare class AutomaticBackgroundExtractor {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   writeSampleBoxes: boolean;
   verboseCoefficients: boolean;
   useLuminanceLimits: boolean;
   useBrightnessLimits: boolean;
   unbalance: number;
   tolerance: number;
   targetCorrection: number;
   replaceTarget: boolean;
   polyDegree: number;
   normalize: boolean;
   modelImageSampleFormat: number;
   minBoxFraction: number;
   minBackground: number;
   maxBackground: number;
   justTrySamples: boolean;
   discardModel: boolean;
   deviation: number;
   correctedImageSampleFormat: number;
   correctedImageId: string;
   compareModel: boolean;
   compareFactor: number;
   boxSize: number;
   boxSeparation: number;
   abeDownsample: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: Binarize
 */
declare class Binarize {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   thresholdRK: number;
   thresholdG: number;
   thresholdB: number;
   isGlobal: boolean;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * BlurXTerminator is an AI-powered deconvolution tool designed specifically for astronomical images taken with equipment commonly used by amateur astrophotographers. Not all AI is created equal. AI-based sharpening tools for general photography exist, but they are prone to "inventing" detail that does not in fact exist. They also don't usually handle stars very well. Their neural networks were not trained on astronomical images, so they often make bad "guesses" as to what the original, unblurred scene looks like.
 * The design intent of BlurXTerminator is to recover as much detail as possible based on low-contrast information actually present in an image without fabricating detail that does not in fact exist just for the sake of an image that appears sharper. Great care has been taken in the architecture and training of the neural network to ensure that its output is as faithful as possible to reality if it is properly used.
 * The classical deconvolution algorithms developed by Richardson, Lucy, van Cittert, etc., need two inputs: the image to be deconvolved, and the point spread function (PSF) that the image was blurred by (i.e., convolved with). This PSF must be either assumed from first priniciples or extracted from the input image prior to performing deconvolution. It must be accurate, and it is assumed by these algorithms to be stationary, which is to say that the same PSF applies to the entire image. This is a major limitation: these methods of deconvolution will fail wherever the actual PSF in the image departs from the one provided to the algorithm.
 * BlurXTerminator uses the stars in an image as PSF references. A benefit of this approach, aside from not needing to extract the PSF from an image beforehand, is that the PSF need not be stationary. This allows BlurXTerminator to apply different corrections to different parts of the image, compensating for variations in the PSF across the field of view.
 * BlurXTerminator can correct the following aberrations in limited amounts:
 * First- and second-order coma and astigmatism
 * Trefoil (common with pinched optics and in image corners with some camera lenses)
 * Defocus (poor focus and/or field curvature)
 * Longitudinal and lateral chromatic aberration
 * Motion blur (guiding errors)
 * Seeing/scatter variation per color channel
 * Drizzle upsampling artifacts (2x only)
 * BlurXTerminator can apply different amounts of deconvolution to the stellar and nonstellar features of an image. Trying to recover all of the detail available in nonstellar, extended objects using the classical deconvolution algorithms usually results in dark halos (ringing) around stars. With BlurXTerminator, more sharpening can be applied to the nonstellar parts of an image, bringing out more detail without producing ringing artifacts in most cases.
 * All deconvolution, including the classical algorithms, fundamentally involves guesswork. Mathematically, deconvolution is said to be an ill posed problem: for a given blurry input image, there are many possible sharper images that, if re-blurred, would result in the same input image. Which one is correct, or at least a better guess? No deconvolution tool can be perfect: the goal is rather to produce an output that is highly likely to be correct.
 * A neural network can be thought of as a "universal function approximator." Given a suitable architecture, enough capacity to learn (enough trainable parameters), and appropriate training data and methods, a neural network can approximate with arbitrary precision any mathematical function. Deconvolution is just a mathematical function, albeit a very difficult one. The job of the neural network designer is to develop a network architecture that can perform the types of operations needed to accomplish the task, to make sure it has enough capacity to learn, and particularly to ensure that the training data and methods force the network to learn the desired function without learning any undesirable functions.
 * So-called "generative" behavior, in which a network learns to invent or "hallucinate" detail, is one such undesirable function for a deconvolution tool. There is little to no difference between the architectures of generative and "discriminative" networks that do not invent information. The difference lies in how they are trained.
 * The training method employed for BlurXTerminator's AI is conceptually straightforward. "Ground truth," the target which the network learns to approximate from its input, is simply a large set of very sharp images representative of features commonly found in astronomical scenes. To obtain the input training data, these images are convolved with various point spread functions representative of those commonly produced by optics and the atmosphere. These are well known and covered amply in the literature. The network learns to produce its output by minimizing a "loss function," a number that scores how badly it is performing. Training proceeds until the loss function has an acceptably small value.
 * The choice of the loss function is one critical factor that determines whether a network will become generative. So-called "perceptual" loss functions would result in a network that prioritizes producing an output that "looks sharp" over recovering the actual sharp image. Since the objective of BlurXTerminator is the latter, this type of loss function is not used. Instead, a simple image reconstruction loss is employed, scoring the network's performance only on how well it produces correct output pixel values from its input.
 */
declare class BlurXTerminator {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   sharpen_stars: number;
   sharpen_nonstellar: number;
   overlap: number;
   nonstellar_psf_diameter: number;
   nonstellar_diameter: number;
   ml_version: number;
   lunar_planetary: boolean;
   correct_only: boolean;
   auto_nonstellar_radius: boolean;
   auto_nonstellar_psf: boolean;
   adjust_star_halos: number;
   adjust_halos: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * ChannelCombination can be used either to replace the color components or pixel channels of an existing image, or to generate a new image from existing channels or components. In the first case, ChannelCombination is executed on an existing main view. In the second case, ChannelCombination must be executed in the global context.
 * ChannelCombination supports several color spaces for replacement and combination of color channels or components:
 * The RGB color space. The red (R), green (G) and blue (B) pixel channels are always the first, second and third nominal channels of a RGB color image, respectively.
 * The CIE XYZ linear color space. CIE Y is the linear luminance, while CIE X and CIE Z are two linear chrominance components.
 * The CIE L*a*b* color space. CIE L*, or lightness, is a nonlinear function of the luminance (or CIE Y), while CIE a* and CIE b* are two nonlinear chrominance components. The CIE *a component represents the ratio between red and green for each pixel, and CIE b* represents the ratio between yellow and blue.
 * The CIE L*c*h* color space. CIE L* is, as above, the lightness component. CIE *c, or colorfulness, represents color saturation, and CIE h* is the color hue.
 * The HSV color ordering system, or hue, saturation and value.
 * The HSI color ordering system, or hue, saturation and intensity.
 * Luminance/chrominance separations performed using the CIE XYZ, CIE L*a*b* and CIE L*c*h* color spaces are computed in the current RGB working space of the target image, when the process is executed on a view context, or in the global RGB working space, when the tool is executed globally to generate a new image. RGB working spaces can be defined with the standard RGBWorkingSpace tool.
 * In the HSV and HSI color ordering systems (they are not true color spaces in the colorimetric sense), note that the S component represents different color saturation functions, which we often denote as Sv and Si, respectively, to differentiate them. As there seem to be no standardized definitions of HSV and HSI, we'll describe the equations that define these color ordering systems as we have implemented them on the PixInsight platform:
 * For all color spaces, all components and channels are expected in the normalized [0,1] range. The angular hue components CIE h* and H must be mapped linearly from the [0°,360°[ range to the normalized [0,1[ range. Out-of-range values will generate unpredictable (although stable) results.
 * As most tools that work on different color spaces in PixInsight, ChannelCombination performs color space conversions dynamically. For images managed through the graphical user interface, actual pixel data are always stored in the RGB color space and transformed or converted between different color spaces when required.
 */
declare class ChannelCombination {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   inheritAstrometricSolution: boolean;
   colorSpace: number;
   channels: object;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * The ChannelExtraction tool allows you to obtain individual RGB pixel channels or color space components as newly generated grayscale images. ChannelExtraction does not modify the image to which it is applied, and it can only be applied to color images.
 * ChannelExtraction supports the same color spaces as its cousin tool ChannelCombination:
 * The RGB color space. The red (R), green (G) and blue (B) pixel channels are always the first, second and third nominal channels of a RGB color image, respectively.
 * The CIE XYZ linear color space. CIE Y is the linear luminance, while CIE X and CIE Z are two linear chrominance components.
 * The CIE L*a*b* color space. CIE L*, or lightness, is a nonlinear function of the luminance (or CIE Y), while CIE a* and CIE b* are two nonlinear chrominance components. The CIE *a component represents the ratio between red and green for each pixel, and CIE b* represents the ratio between yellow and blue.
 * The CIE L*c*h* color space. CIE L* is, as above, the lightness component. CIE *c, or colorfulness, represents color saturation, and CIE h* is the color hue.
 * The HSV color ordering system, or hue, saturation and value.
 * The HSI color ordering system, or hue, saturation and intensity.
 * Luminance/chrominance separations performed using the CIE XYZ, CIE L*a*b* and CIE L*c*h* color spaces are computed in the current RGB working space of the target image. RGB working spaces can be defined with the standard RGBWorkingSpace tool.
 * In the HSV and HSI color ordering systems (they are not true color spaces in the colorimetric sense), note that the S component represents different color saturation functions, which we often denote as Sv and Si, respectively, to differentiate them. For a formal description of the PixInsight implementation of HSV and HSI, see the documentation for the ChannelCombination tool.
 */
declare class ChannelExtraction {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   sampleFormat: number;
   inheritAstrometricSolution: boolean;
   colorSpace: number;
   channels: object;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * The ColorCalibration tool performs a balancing of the colors of a linear RGB deep-sky image based on the following documentary criteria:
 * Maximize information representation in the calibrated color image.
 * Don't favor any particular color or spectral type as a white reference.
 * Note that this is a spectrum-agnostic color calibration procedure, very different from other methods based on fixing a white reference with respect to a particular spectral type.
 * Our approach originates from the fact that —in our opinion— the concept of real color makes no sense in deep-sky astrophotography. Real color doesn't exist in the deep sky because, on one hand, the objects represented in a deep-sky image are far beyond the capabilities of the human vision system, and on the other hand, the physical nature, properties and conditions of the deep-sky objects are very different from those of the subjects that can be acquired under normal daylight conditions.
 * 1.1 Working Images
 * The ColorCalibration tool needs two reference images to work. One is the background reference image, whose pixels are used to compute a set of per-channel initial mean background values. The other working image is the white reference image, whose pixels allow computing per-channel color calibration factors, which are applied by multiplication to perform the color balancing. The color calibration procedure works in such a way that the average color of the white reference image would (or will) be neutral (unsaturated gray) after calibration. Note that one or both reference images can be (and use to be) the same image being calibrated, or a suitable subset of it.
 * For the color calibration process to yield coherent results, two conditions must be met:
 * The background reference image must provide a good sample of the true background. In general, this means that the background reference image should be a view or subimage whose pixels are strongly dominated (in the statistical sense) by the sky background, as it has been recorded on the image.
 * The white reference image must provide a sample of a sufficiently rich set of objects, in the colorimetric sense. With a sufficiently large and varied set of objects included in the white reference image, no particular color will be favored and hence our spectral agnosticism will be preserved.
 * Note that meeting the above conditions is the entire responsibility of the user; our ColorCalibration tool will yield incoherent and even wildly wrong results if the user does not provide valid reference images. With a little effort and care though, plausible background and white references can be defined to a sufficient approximation as to achieve excellent results in most practical cases.
 * 1.2 Preconditions
 * Along with valid reference images, our color calibration procedure requires three further conditions:
 * The images must be linear. ColorCalibration won't work with nonlinear (e.g., stretched) images. No consistent color calibration scheme can be implemented with nonlinear data.
 * The image(s) must be accurately calibrated. In particular, illumination must be uniform for the whole corrected image and, if different images are used to define the background and/or white references, those images must also have uniform illumination throughout the entire field. This means that flat fielding must be correctly applied as part of the image calibration process, and any residual additive gradients must also be removed before attempting to perform a valid color calibration. For background modeling and equalization, you can use the DynamicBackgroundExtraction and AutomaticBackgroundExtraction tools in PixInsight.
 * The mean background should be neutral. This is particularly important for the white reference image. Actually, a neutral background reference is not a necessary precondition for the ColorCalibration tool to work correctly; for example, in theory background neutralization could be applied after color calibration. In practice however, a non-neutral background will always contaminate the white reference to some extent, since due to the limited signal-to-noise ratio there is always some uncertainty in the selection of white reference pixels. With a neutral background, even if some background pixels enter the set of white reference pixels, their contribution in terms of color balance will be statistically insignificant, and hence the white reference will be more robust. To neutralize the background, the tool of choice is BackgroundNeutralization in PixInsight.
 * 1.3 Working Modes
 * The ColorCalibration tool can work in three different modes:
 * Range Selection Mode
 * In this mode ColorCalibration gathers all pixels of the white reference image within a prescribed range of pixel values, usually defined to prevent inclusion of black and nearly saturated pixels. This mode can be used to select a suitable astronomical object as white reference. In particular, this working mode allows selecting a nearby spiral galaxy to compute a white reference. The integrated light of a nearby spiral galaxy is a plausible white reference, since it provides a sample of all stellar populations and spectral types, and its redshift is negligible. This method has been proposed by PTeam member Vicent Peris, who first implemented it to calibrate a number of deep sky images taken with large telescopes. According to Vicent, ideal calibration galaxies should have the following properties:
 * Closer than 50 mpc
 * Hubble classifications Sa, Sb, Sc, Scd, SBa, SBb, SBc or SBcd
 * Inclination less than 60 degrees
 * Integrated intrinsic intergalactic and galactic reddening < 0.5 mag in Johnson B
 * Structure Detection Mode
 * By sampling a large set of unsaturated stars of varied spectral types, a plausible white reference can also be defined. To this purpose, ColorCalibration implements a wavelet-based structure detection algorithm that can be used to select all small-scale structures on the white reference image.
 * Manual Mode
 * In this mode you can specify three color correction factors, in case you have estimated them by other means, including a previous execution of the ColorCalibration tool with the same or a different image. This is useful to transport previously calculated color calibration factors between images.
 */
declare class ColorCalibration {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   whiteUseROI: boolean;
   whiteReferenceViewId: string;
   whiteROIY1: number;
   whiteROIY0: number;
   whiteROIX1: number;
   whiteROIX0: number;
   whiteLow: number;
   whiteHigh: number;
   structureLayers: number;
   structureDetection: boolean;
   outputWhiteReferenceMask: boolean;
   outputBackgroundReferenceMask: boolean;
   noiseLayers: number;
   manualWhiteBalance: boolean;
   manualRedFactor: number;
   manualGreenFactor: number;
   manualBlueFactor: number;
   backgroundUseROI: boolean;
   backgroundReferenceViewId: string;
   backgroundROIY1: number;
   backgroundROIY0: number;
   backgroundROIX1: number;
   backgroundROIX0: number;
   backgroundLow: number;
   backgroundHigh: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * All scientific cameras exhibit some degree of blemishes which may impair the faithful reproduction of the light signal. The primary source of the blemishes are physical defects in the sensor structure that may lead to different kinds of artefacts:
 * Hot pixels are produced by individual photosites on the camera with higher than normal dark current rates. They appear as abnormally bright pixels of light on long exposure images.
 * Cold pixels are produced by individual photosites in the camera with lower than usual sensitivity (even as low as zero, a dead pixel). They appear as abnormally dark pixels in otherwise bright areas of an image.
 * Defective rows/columns are rows/columns of pixels that do not work properly. Some columns are entirely dead (dark), some are "hot" (bright), some have just a constant added to what they should typically show.
 * traps Are typical of the CCD cameras. Some pixels are defective and cannot transfer electrons when the image is read out. Therefore the pixels below the trap will be normal. However, those above it are lost because their electrons are trapped in the bad pixel forming a partially bad column.
 * All the above artefact are generally called cosmetic defects.
 * Figure 1 — Example of cosmetic defects
 * Partial hot column in an interlaced CCD
 * Hot pixels in a CCD Camera
 * A good calibration practice can usually correct hot pixels and columns using a master dark frame matching exposure time and temperature with the light frames (see ImageCalibration for further details). Unfortunately, this is not always possible: operations like Dark Frame optimization can lead to an under-correction or an overcorrection of the hot pixels.
 * Calibration, however, cannot correct cold or dead pixel and columns; they remain in the calibrated light frames. The only helpful technique to mitigate their effects is to integrate many subframes with an affective pixel rejection algorithm combined with dithering [1] between single exposures.
 * However, there are many situations where dithering and pixel rejection cannot completely hide cosmetic defects. Therefore is a good pre–processing practice to correct these defects before the registration and integration phase.
 * The scope of CosmeticCorrection is to correct these defects: it should be performed soon after the calibration step and before the debayering step (for Color Filter Array images) or the image registration (see StarAlignement) for monochrome images.
 * It is essential to emphasize that CosmeticCorrection does not reconstruct the missing data in the defective pixel: information in these pixels is completely lost and cannot be recovered. CosmeticCorrection makes an educated guess to calculate a plausible value for the pixel, based on the nearby area, but this is not the real pixel value.
 * Defective pixels should never be used for scientific grade jobs.
 * [mouseover]
 * Hover the image with the mouse pointer to see the effect of CosmeticCorrection application.
 * The image is a small crop on a single 600s frame taken with an SBIG ST2000XM CCD. CosmeticCorrecton used all three defect detection algorithms to perform the CosmeticCorrection step.
 * 1.1 Defect Detection and correction strategies
 * Before correcting defective pixels CosmeticCorrection must identify them: there are three different detection strategies to identify the problematic pixels. in order of execution they are:
 * Master dark based detection
 * Auto detection
 * Defect list
 * Any of these methods may work alone or in synergy with others to achieve the best result.
 * To evaluate the value to replace a defective pixel, CosmeticCorrection uses different surrounding areas structures.
 * The structure changes depending on whether the Color Filter Array (CFA) parameter is active or not. In the following images, the white pixels represent the points measured to determine the central pixel's value.
 * 3x3 Area
 * CFA OFF
 * CFA ON
 * 5x5 Area
 * CFA OFF
 * CFA ON
 * Background sampling Area
 * CFA OFF
 * CFA ON
 * 1.1.1 Master Dark
 * If Use Master Dark is selected, CosmeticCorrection uses a reference master dark to identify hot and cold pixels. The selection is based on two threshold values defined by the Hot Pixel Threshold and Cold Pixel Threshold parameters.
 * CosmeticCorrection search for defects on the reference Masted Dark; when it finds a defective pixel it replace its value:
 * If it is an Hot Pixel the fully corrected value is the average of the pixel in the target image, calculated on a 3x3 Area
 * If it is a Cold Pixel the fully corrected value is the median of the pixel in the target image, calculated on a 5x5 Area
 * The new value is based on the amount parameter.
 * let
 * be the fully corrected value
 * the original value
 * the Amount parameter
 * The new value is:
 * 1.1.2 Auto detection
 * Auto detection detects defective pixels directly on each target image based on the pixel value compared with the surrounding brightness. Let
 * be a robust scale estimator: it describes the dispersion of pixel values around the median value
 * be the Hot sigma parameter
 * be the Cold sigma parameter
 * be the background value evaluated as the median in a Background sampling Area. Here background does not refer to the usual meaning of sky level, it is the median brightness in the neighborhood of the pixel.
 * be the average of the surrounding pixel in a 3x3 sampling Area
 * be the median of the surrounding pixel in a 3x3 sampling Area
 * be the pixel value on the target image in a given position
 * then
 * The pixel is considered HOT if it satisfies all the following conditions
 * : this is the main condition, it compares the pixel value with the surroundings and consider it a defect only if it has a significatively higher value (in a statistical meaning)
 * : this means that pixels surrounded by other bright pixels are not considered HOT
 * : this means that pixel not significatively brighter than the background are not considered HOT
 * The last two conditions helps to make the detection algorithm stronger and less prone to false positives.
 * The pixel is considered COLD if it satisfies all the following conditions
 * A pixel is considered COLD only if it is significatively dimmer (in a statistical meaning) of both the surrounding pixel and the background.
 * The fully corrected value is the average in a 3x3 sampling Area for hot pixels, the median in a Background sampling Area for cold pixels. The new value is based on the amount parameter.
 * let
 * be the fully corrected value
 * the original value
 * the Amount parameter
 * The new value is:
 * 1.1.3 Defect List
 * If Defect List is selected, CosmeticCorrection uses a manually created list of defective areas (see Defect List paramenter). This is especially useful for defective rows or columns that are not perfectly corrected by the previous methods.
 * For each pixel in the defect list a fully corrected value is calculated as the median of the pixel in the target image, calculated on a 5x5 Area.
 * The new pixel value is based on the amount parameter.
 * let
 * be the fully corrected value
 * the original value
 * the Amount parameter
 * The new value is:
 */
declare class CosmeticCorrection {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   useMasterDark: boolean;
   useDefectList: boolean;
   useAutoDetect: boolean;
   transferFn: number;
   targetFrames: object;
   prefix: string;
   postfix: string;
   overwrite: boolean;
   outputExtension: string;
   outputDir: string;
   masterDarkPath: string;
   hotDarkLevel: number;
   hotDarkCheck: boolean;
   hotAutoValue: number;
   hotAutoCheck: boolean;
   generateHistoryProperties: boolean;
   defects: object;
   coldDarkLevel: number;
   coldDarkCheck: boolean;
   coldAutoValue: number;
   coldAutoCheck: boolean;
   cfa: boolean;
   amount: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * Crop is a basic geometrical tool to change the dimensions of a target image by adding or removing margins of user-defined lengths. Crop is a versatile tool that allows working either with absolute dimensions in pixels, centimeters or inches, or with relative dimensions. It can create margins filled with a user-defined color and opacity, remove rows and columns of pixels, or modify the printing resolution of the target image.
 */
declare class Crop {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   yResolution: number;
   xResolution: number;
   topMargin: number;
   rightMargin: number;
   red: number;
   noGUIMessages: boolean;
   mode: number;
   metric: boolean;
   leftMargin: number;
   green: number;
   forceResolution: boolean;
   bottomMargin: number;
   blue: number;
   alpha: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * The standard CurvesTransformation tool implements a set of interpolated functions, or curves. Each curve is generated by interpolation from two or more arbitrary points on the plane, with coordinates in the normalized [0,1] range.
 * Each curve can be applied to a target image pixel-by-pixel to perform an intensity transformation. Each curve point defines a transformation pair: the X coordinate identifies an input value in the [0,1] range, and the Y coordinate defines the corresponding output value of the transformation. For each pixel, its current sample values are used as input values to interpolate from one or more curves, then the interpolated output values replace the original ones. The same interpolation is applied iteratively to every pixel of the target image.
 * Curves can be defined independently for 11 nominal channels and dynamically generated image components:
 * The nominal red, green and blue channels of RGB color images.
 * A combined RGB/K curve that applies equally to the nominal R, G and B channels of color images, and to the nominal gray channel (K) of grayscale images.
 * The active alpha channel (A), which defines image transparency.
 * The L* (lightness), a* (red/green ratio) and b* (blue/yellow ratio) components of the CIE L*a*b* color space.
 * The c* (colorfulness) component of the CIE L*c*h* color space.
 * The H (hue) component of the HSV color ordering system.
 * A special color saturation curve (S) in the HSVL* color space.
 * CurvesTransformation is a versatile and precise tool to adjust the brightness, contrast and chromatic balance properties of images, working on a rich set of luminance and chrominance components.
 */
declare class CurvesTransformation {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   ct: number;
   c: object;
   bt: number;
   b: object;
   at: number;
   a: object;
   St: number;
   S: object;
   Rt: number;
   R: object;
   Lt: number;
   L: object;
   Kt: number;
   K: object;
   Ht: number;
   H: object;
   Gt: number;
   G: object;
   Bt: number;
   B: object;
   At: number;
   A: object;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: Deconvolution
 */
declare class Deconvolution {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   waveletLayers: object;
   useRegularization: boolean;
   useLuminance: boolean;
   toLuminance: boolean;
   scalingFunction: number;
   rangeLow: number;
   rangeHigh: number;
   psfViewId: string;
   psfSigma: number;
   psfShape: number;
   psfRotationAngle: number;
   psfMotionRotationAngle: number;
   psfMotionLength: number;
   psfMode: number;
   psfGaussianSigma: number;
   psfGaussianShape: number;
   psfGaussianRotationAngle: number;
   psfGaussianAspectRatio: number;
   psfFFTSizeLimit: number;
   psfAspectRatio: number;
   numberOfWaveletLayers: number;
   numberOfIterations: number;
   noiseModel: number;
   iterations: object;
   deringingSupportViewId: string;
   deringingSupportAmount: number;
   deringingSupport: boolean;
   deringingDark: number;
   deringingBright: number;
   deringing: boolean;
   convergence: number;
   algorithm: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: DynamicBackgroundExtraction
 */
declare class DynamicBackgroundExtraction {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   tolerance: number;
   targetCorrection: number;
   symmetryCenterY: number;
   symmetryCenterX: number;
   smoothing: number;
   shadowsRelaxation: number;
   selectedSampleFillColor: number;
   selectedSampleColor: number;
   samplesPerRow: number;
   samples: object;
   sampleColor: number;
   replaceTarget: boolean;
   numberOfChannels: number;
   normalize: boolean;
   modelWidth: number;
   modelSampleFormat: number;
   modelId: string;
   modelHeight: number;
   minWeight: number;
   minSampleFraction: number;
   imageWidth: number;
   imageHeight: number;
   ignoreWeights: boolean;
   downsample: number;
   discardModel: boolean;
   derivativeOrder: number;
   defaultSampleRadius: number;
   data: object;
   correctedImageSampleFormat: number;
   correctedImageId: string;
   badSampleFillColor: number;
   badSampleColor: number;
   axisColor: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * The FastRotation process implements orthogonal and specular geometric transformations: rotate 180 degrees, rotate 90 degrees clockwise, rotate 90 degrees counter-clockwise, horizontal mirror and vertical mirror. These operations are collectively knwown as fast rotations on the PixInsight/PCL platform.
 * The most important feature of all fast rotations is that these transformations don't interpolate pixel values; they copy and exchange pixels exclusively to generate the rotated or mirrored output image, and hence apply lossless transformations (also knwon as nondestructive transformations). As far as no pixel is cropped (which never happens with the FastRotation tool), you could apply an unlimited number of fast rotations to an image, and the original pixel values would be preserved in the final image (they would only change their positions with respect to the original).
 */
declare class FastRotation {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   noGUIMessages: boolean;
   mode: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: GREYCstoration
 */
declare class GREYCstoration {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   spatialIntegrationStep: number;
   precision: number;
   numberOfIterations: number;
   noiseScale: number;
   interpolation: number;
   geometryRegularity: number;
   fastApproximation: boolean;
   coupledChannels: boolean;
   contourPreservation: number;
   anisotropy: number;
   angularIntegrationStep: number;
   amplitude: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: HDRMultiscaleTransform
 */
declare class HDRMultiscaleTransform {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   toLuminanceOnly: boolean;
   toLightness: boolean;
   toIntensity: boolean;
   smallScaleDeringing: number;
   scalingFunctionRowFilter: object;
   scalingFunctionName: string;
   scalingFunctionData: object;
   scalingFunctionColFilter: object;
   preserveHue: boolean;
   overdrive: number;
   outputDeringingMaps: boolean;
   numberOfLayers: number;
   numberOfIterations: number;
   midtonesBalanceMode: number;
   midtonesBalance: number;
   medianTransform: boolean;
   luminanceMask: boolean;
   lightnessMask: boolean;
   largeScaleDeringing: number;
   invertedIterations: boolean;
   intensity: number;
   deringing: boolean;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 2 Description
 * The standard histogram manipulation tool in PixInsight is HistogramTransformation. Despite a histogram is a rather simple data structure (it's only a list of integers after all), HistogramTransformation provides one of the most sophisticated user interface resources available in the set of standard PixInsight tools, reflecting the key importance of histograms in image processing.
 * The HistogramTransformation interface is divided into three main sections that we'll describe shortly in this document. From top to bottom, these sections are: the output histograms, the input histograms, and the parameters section. Briefly, the parameters allow you to define a histogram transformation, then you can select an image to load and inspect its current histograms on the input histograms section, and the output histograms automatically predict how the histograms of the resulting image will be after applying the transformation.
 * There are five sets of identical parameters available on the HistogramTransformation interface:
 * Three parameter sets for the red, green and blue channels of RGB color images.
 * A combined RGB/K set that applies equally to the nominal R, G and B channels of color images, and to the nominal gray channel (K) of grayscale images.
 * A specific set of parameters for the active alpha channel (A), which defines image transparency.
 * HistogramTransformation is a high-precision tool for histogram inspection and manipulation. It is the tool of choice for all nonlinear image stretching tasks in PixInsight.
 */
declare class HistogramTransformation {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   H: object;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * The IntegerResample process is a basic geometry tool that allows resizing an image by an integer resampling factor. Downsampling is applied by using average, median, maximum or minimum pixel binning operations, and upsampling is a nondestructive process that performs a simple pixel replication without any interpolation. The tool can also modify the target image's resolution in pixels per inch or pixels per centimeter.
 * For arbitrary image resizing using pixel interpolation algorithms, refer to the Resample tool.
 */
declare class IntegerResample {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   zoomFactor: number;
   yResolution: number;
   xResolution: number;
   subsampleMode: number;
   noGUIMessages: boolean;
   metric: boolean;
   gammaCorrection: boolean;
   forceResolution: boolean;
   downsamplingMode: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: LRGBCombination
 */
declare class LRGBCombination {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   noiseReduction: boolean;
   mc: number;
   mL: number;
   layersRemoved: number;
   layersProtected: number;
   inheritAstrometricSolution: boolean;
   clipHighlights: boolean;
   channels: object;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: LinearFit
 */
declare class LinearFit {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   rejectLow: number;
   rejectHigh: number;
   referenceViewId: string;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * This process implements local histogram equalization with configurable limitation of maximum contrast enhancement. It is based on the CLAHE method (Contrast-Limited Adaptive Histogram Equalization). The main purpose of the process is to enhance local contrast and visibility of structures in low-contrast regions of the image. The process is designed to run on non-linear (already stretched) images.
 * Histogram equalization takes the histogram and computes a transfer curve, which grants more brightness range to higher histogram peaks and less brightness range to histogram valleys. In other words, large areas of similar brightness get more contrast. Local histogram equalization works on individual pixels and computes a transfer curve from the histogram of a pixel neighborhood.
 * The classical histogram equalization algorithm has the drawback of giving most contrast range to high narrow peaks, like a uniform noisy background. This problem is solved with the contrast limit property of the CLAHE method. This parameter limits the maximum slope of the transfer curve and prevents narrow peaks from getting too much contrast, effectively reducing noise promotion.
 */
declare class LocalHistogramEqualization {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   slopeLimit: number;
   radius: number;
   histogramBins: number;
   circularKernel: boolean;
   amount: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: MorphologicalTransformation
 */
declare class MorphologicalTransformation {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   structureWayTable: object;
   structureSize: number;
   structureName: string;
   selectionPoint: number;
   operator: number;
   numberOfIterations: number;
   lowThreshold: number;
   interlacingDistance: number;
   highThreshold: number;
   amount: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * MultiscaleLinearTransform is the successor of the old, now obsolete, ATrousWaveletTransform tool, still included in PixInsight for backward compatibility but deprecated; it performs a multiscale decomposition of the image to separate the different size scales composing the imaged object into separate "layers". The basic algorithm uses wavelets to perform the analisys: wavelets are mathematical functions used to split data sets into different scale (or frequency) components in a hierarchical manner. This decomposition procedure is called a wavelet transform. The alternative algorithm (Multiscale Linear Transform) uses a different technique to reach the same goal.
 * After the decomposition, MultiscaleLinearTransform can manipulate each layer to change its weight or reduce noise selectively with respect to the scale.
 * MultiscaleLinearTransform is a very flexible tool; it allows to perform a vast number of tasks on a Multiscale basis: noise reduction, sharpening, contrast enhancement, dynamic range extension.
 * To understand what a wavelet analysis is, let us use an analogy: imagine that we want to analyze and map the shape of the three–dimensional surface of an object.
 * To do this, we will use probes of different sizes placed on the object and made to crawl over its entire surface, measuring their movements up and down while they follow its surface structures. If we want to be aware of all the finer details, we will use a very thin probe that can go deep inside each single scratch and pit; if we are only interested in the object's general shape, we could use probes with gradually larger tips. In our toolbox, we could have many types of probes with different tip shapes and different sizes for each shape.
 * Given a probe shape, in this way, we can build many different models of the object, this modelling operation divides our object into different layers based on the probe size.
 * We can also decide not to show the actual model but, for each probe size, only the differences between a model and the next one.
 * Following this analogy, the object represents the image to be analyzed, the structure heights is the pixel brightness, the probe shape is the wavelet, the size is the scale factor of the detail, and the single difference between a model and the next one is the wavelet layer or, better, the transform coefficient.
 * The complete mathematical description of wavelet theory goes far beyond the scope of this introduction; it is enough to know that wavelet functions can be defined with many different shapes and using a variety of algorithms. MultiscaleLineare transform implements two different algorithms:
 * Starlet Transform
 * It is an implementation of the Isotropic Undecimated Wavelet Transform [1] also known as à trous [2] (with holes) wavelet transform. It uses a low-pass filter as a wavelet scaling function, applied by interlaced convolutions following a dyadic sequence. it allows to select many scaling funtion to fine tune the wavelet shapes to the caracteristic scales of the imaged object.
 * Multiscale linear transform
 * Although the final result is similar to the starlet transform, it uses multiple Gaussian filters of varying sizes applied by separable convolutions to perform the decomposition.
 * An example of wavelet decomposition will help to fully understand how MultiscaleLinearTransform actually works: the following figure shows a portion of the Lunar surface around Mare Crisium. We have performed a wavelet transform on this image, decomposing it into six separate components at increasing scales. the seventh layer is the residual layer.
 * The decomposition was performed selecting the Starlet transform algorithm using the default linear interpolation (3) scaling funcion.
 * Figure 1 — Example of wavelet decomposition with Starlet algorithm and Linear interpolation scaling function, each layer image shows the transform coefficient at the corresponding image scale (see Layer Preview Mode)
 * Original Image
 * Layer 1 (scale 1)
 * Layer 2 (scale 2)
 * Layer 3 (scale 4)
 * Layer 4 (scale 8)
 * Layer 5 (scale 16)
 * Layer 6 (scale 32)
 * Residual Layer
 * As a second example we want to show how the wavelet shape affects the detected structures: the following image shows the very same multiscale layer (the fourth layer on a dyadic sequence) at varying scaling functions, with the Starlet algorithm and with the Multiscale linear transform algorithm.
 * Figure 2 — Comparision of the same wavelat layer transformation coefficients (see Layer Preview Mode) extacted with different scaling functions and algorithm: Layer 4 with a Dyadic scale series (scale 8)
 * Original Image
 * Starlet with Linear Interpolation scaling function
 * Starlet with B3 Spline scaling function
 * Starlet with Small scale 32 scaling function
 * Starlet with Gaussian (5) scaling function
 * Starlet with Gaussian (11) scaling function
 * Multiscale Linear Transform algorithm
 */
declare class MultiscaleLinearTransform {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   useMultiresolutionSupport: boolean;
   transform: number;
   toLuminance: boolean;
   toChrominance: boolean;
   softThresholding: boolean;
   scalingFunctionRowFilter: object;
   scalingFunctionNoiseSigma: object;
   scalingFunctionName: string;
   scalingFunctionData: object;
   scalingFunctionColFilter: object;
   scaleDelta: number;
   previewMode: number;
   previewLayer: number;
   outputDeringingMaps: boolean;
   noiseThresholdingAmount: number;
   noiseThresholding: boolean;
   noiseThreshold: number;
   lowRange: number;
   linearMaskSmoothness: number;
   linearMaskPreview: boolean;
   linearMaskInverted: boolean;
   linearMaskAmpFactor: number;
   linearMask: boolean;
   linear: boolean;
   layers: object;
   largeScaleFunction: number;
   highRange: number;
   deringingDark: number;
   deringingBright: number;
   deringing: boolean;
   curveBreakPoint: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * MultiscaleMedianTransform performs a multiscale decomposition of the image to separate the different size scales composing the imaged object into separate "layers". Unlike MultiscaleLinearTransform, which uses linear transformations to perform the decomposition, MultiscaleMedianTransform primarily uses a median–based nonlinear transformation.
 * The base algorithm, described by [1] Jean-Luc Starck, has been modified to overcome artifacts introduced by the original rectangular kernel for the median calculation: a multiway circular structuring element is used instead, as described better below.
 * After the decomposition, MultiscaleMedianTransform can manipulate each layer to change its weight or reduce noise selectively with respect to the scale.
 * MultiscaleMedianTransform is a very flexible tool; it allows to perform many tasks on a multiscale basis: noise reduction, sharpening, and contrast enhancement.
 * To understand what a multiscale analysis is, let us use an analogy: imagine that we want to analyze the three-dimensional surface of an object. To do this, we will use probes of different sizes placed on the object and made to crawl over its entire surface, measuring their movements up and down while they follow its surface structures. If we want to be aware of all the finer details, we will use a very thin probe that can go deep inside every single scratch and pit; if we are only interested in the object's general shape, we could use probes with gradually larger tips. In our toolbox, we could have many probes of different sizes.
 * Using different tip sizes, we can build many different models of the object; this modelling operation divides our object into different layers based on the probe size.
 * We can also decide not to show the actual model but, for each probe size, only the differences between the model and the next one.
 * Following this analogy, the object represents the image to be analyzed, the structure height is the pixel brightness, the probe size the scale factor of the detail, and the single difference between a model and the next one is the multiscale layer or, better, the transform coefficient.
 * Besides the pure median–based algorithm MultiscalMediaTransform can use a second one based on a hybrid Median-Wavelet approach; this can better separate significant structures by the random background signal, making it particularly well suited for noise reduction tasks.
 * An example of multiscale decomposition will help to fully understand how MultiscaleMedianTransform actually works: the following figure shows a portion of the Lunar surface around Mare Crisium. We have performed a multiscale decomposition on this image, decomposing it into six separate components at increasing scales. the seventh layer is the residual layer.
 * In the first example the decomposition was performed selecting the Multiscale median transform algorithm.
 * Figure 1 — Example of multiscale decomposition with Multiscale median transform, each layer image shows the transform coefficient at the corresponding image scale (see Layer Preview Mode)
 * Original Image
 * Layer 1 (scale 1)
 * Layer 2 (scale 2)
 * Layer 3 (scale 4)
 * Layer 4 (scale 8)
 * Layer 5 (scale 16)
 * Layer 6 (scale 32)
 * Residual Layer
 * As a second example we performed the same decomposition using the Median–wavelet transform algorithm.
 * Figure 2 — Example of multiscale decomposition with Median–wavelet transform, each layer image shows the transform coefficient at the corresponding image scale (see Layer Preview Mode)
 * Original Image
 * Layer 1 (scale 1)
 * Layer 2 (scale 2)
 * Layer 3 (scale 4)
 * Layer 4 (scale 8)
 * Layer 5 (scale 16)
 * Layer 6 (scale 32)
 * Residual Layer
 */
declare class MultiscaleMedianTransform {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   transform: number;
   toLuminance: boolean;
   toChrominance: boolean;
   scaleDelta: number;
   previewMode: number;
   previewLayer: number;
   medianWaveletThreshold: number;
   lowRange: number;
   linearMaskSmoothness: number;
   linearMaskPreview: boolean;
   linearMaskInverted: boolean;
   linearMaskAmpFactor: number;
   linearMask: boolean;
   linear: boolean;
   layers: object;
   highRange: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: NoiseXTerminator
 */
declare class NoiseXTerminator {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   overlap: number;
   ml_version: number;
   iterations: number;
   frequency_scale: number;
   enable_frequency_separation: boolean;
   enable_color_separation: boolean;
   detail: number;
   denoise_low_freq: number;
   denoise_lf_color: number;
   denoise_lf: number;
   denoise_intensity_low_freq: number;
   denoise_intensity_high_freq: number;
   denoise_intensity: number;
   denoise_high_freq: number;
   denoise_color_low_freq: number;
   denoise_color_high_freq: number;
   denoise_color: number;
   denoise: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: PixelMath
 */
declare class PixelMath {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   variables: string;
   useSingleExpression: boolean;
   use64BitWorkingImage: boolean;
   truncateUpper: number;
   truncateLower: number;
   truncate: boolean;
   symbols: string;
   singleThreaded: boolean;
   showNewImage: boolean;
   rescaleUpper: number;
   rescaleLower: number;
   rescale: boolean;
   outputData: object;
   optimization: boolean;
   newImageWidth: number;
   newImageSampleFormat: number;
   newImageId: string;
   newImageHeight: number;
   newImageColorSpace: number;
   newImageAlpha: boolean;
   generateOutput: boolean;
   expression3: string;
   expression2: string;
   expression1: string;
   expression0: string;
   expression: string;
   createNewImage: boolean;
   clearImageCacheAndExit: boolean;
   cacheGeneratedImages: boolean;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * 1 Description
 * The Resample process is a basic geometric tool that allows resizing a target image using several pixel interpolation algorithms. As in the case of Crop, this tool allows the user to work either with absolute dimensions in pixels, centimeters or inches, or with relative dimensions. It also allows modifying the target image's resolution in pixels per inch or pixels per centimeter.
 * Unlike Crop and FastRotation, which only copy or exchange existing pixel values to different locations on the target image, Resample generates output pixel values by interpolation from source pixels. This is an important difference because pixel interpolation is a destructive operation, in the sense that it cannot be undone to recover the original data. With non-interpolating tools such as Crop and FastRotation, on the other hand, you could apply an unlimited number of operations and, as long as no pixels were cropped, the original pixel values wouldn't be modified.
 */
declare class Resample {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   ySize: number;
   yResolution: number;
   xSize: number;
   xResolution: number;
   smoothness: number;
   noGUIMessages: boolean;
   mode: number;
   metric: boolean;
   interpolation: number;
   gammaCorrection: boolean;
   forceResolution: boolean;
   clampingThreshold: number;
   absoluteMode: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: SCNR
 */
declare class SCNR {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   protectionMethod: number;
   preserveLuminance: boolean;
   preserveLightness: boolean;
   colorToRemove: number;
   amount: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: SpectrophotometricColorCalibration
 */
declare class SpectrophotometricColorCalibration {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   whiteReferenceSpectrum: string;
   whiteReferenceName: string;
   targetSourceCount: number;
   saturationThreshold: number;
   saturationShrinkFactor: number;
   saturationRelative: boolean;
   redFilterWavelength: number;
   redFilterTrCurve: string;
   redFilterName: string;
   redFilterBandwidth: number;
   psfType: number;
   psfStructureLayers: number;
   psfSearchTolerance: number;
   psfNoiseReductionFilterRadius: number;
   psfNoiseLayers: number;
   psfMinStructureSize: number;
   psfMinSNR: number;
   psfMaxStars: number;
   psfHotPixelFilterRadius: number;
   psfGrowth: number;
   psfChannelSearchTolerance: number;
   psfAllowClusteredSources: boolean;
   outputDirectory: string;
   neutralizeBackground: boolean;
   narrowbandOptimizeStars: boolean;
   narrowbandMode: boolean;
   narrowbandIntegrationSteps: number;
   limitMagnitude: number;
   greenFilterWavelength: number;
   greenFilterTrCurve: string;
   greenFilterName: string;
   greenFilterBandwidth: number;
   generateTextFiles: boolean;
   generateStarMaps: boolean;
   generateGraphs: boolean;
   deviceQECurveName: string;
   deviceQECurve: string;
   catalogId: string;
   broadbandIntegrationStepSize: number;
   blueFilterWavelength: number;
   blueFilterTrCurve: string;
   blueFilterName: string;
   blueFilterBandwidth: number;
   backgroundUseROI: boolean;
   backgroundReferenceViewId: string;
   backgroundROIY1: number;
   backgroundROIY0: number;
   backgroundROIX1: number;
   backgroundROIX0: number;
   backgroundLow: number;
   backgroundHigh: number;
   autoLimitMagnitude: boolean;
   applyCalibration: boolean;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: StarXTerminator
 */
declare class StarXTerminator {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   unscreen_stars: boolean;
   unscreen: boolean;
   stars: boolean;
   remove_stars: boolean;
   remove_spikes: boolean;
   remove_reflections: boolean;
   remove_aureoles: boolean;
   overlap: number;
   output_stars: boolean;
   ml_version: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: TGVDenoise
 */
declare class TGVDenoise {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   supportViewId: string;
   supportShadowsClip: number;
   supportRemovedWaveletLayers: number;
   supportPreview: boolean;
   supportMidtonesBalance: number;
   supportHighlightsClip: number;
   supportEnabled: boolean;
   strengthL: number;
   strengthC: number;
   smoothnessL: number;
   smoothnessC: number;
   rgbkMode: boolean;
   maxIterationsL: number;
   maxIterationsC: number;
   filterEnabledL: boolean;
   filterEnabledC: boolean;
   edgeProtectionL: number;
   edgeProtectionC: number;
   convergenceLimitL: number;
   convergenceLimitC: number;
   convergenceEnabledL: boolean;
   convergenceEnabledC: boolean;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}

/**
 * PixInsight Process: UnsharpMask
 */
declare class UnsharpMask {
   constructor();
   executeOn( view: View, swapFile?: boolean ): boolean;
   executeGlobal(): boolean;
   useLuminance: boolean;
   sigma: number;
   rangeLow: number;
   rangeHigh: number;
   outputDeringingMaps: boolean;
   linear: boolean;
   deringingDark: number;
   deringingBright: number;
   deringing: boolean;
   amount: number;
   assign: Function;
   canExecuteGlobal: Function;
   canExecuteGlobalOrThrow: Function;
   canExecuteOn: Function;
   canExecuteOnOrThrow: Function;
   canLaunchInterface: Function;
   canProcessGlobal: Function;
   canProcessImages: Function;
   canProcessViews: Function;
   description: Function;
   executionTime: Function;
   fromIcon: Function;
   icons: Function;
   iconsByProcessId: Function;
   isAssignable: Function;
   isHistoryUpdater: Function;
   isMaskable: Function;
   launch: Function;
   launchInterface: Function;
   processCategory: Function;
   processId: Function;
   readIcon: Function;
   setDescription: Function;
   startJD: Function;
   toSource: Function;
   validate: Function;
   validateOrThrow: Function;
   writeIcon: Function;
   writeInstanceAddr: Function;
}
