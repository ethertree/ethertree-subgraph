// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FruitRedeemed extends ethereum.Event {
  get params(): FruitRedeemed__Params {
    return new FruitRedeemed__Params(this);
  }
}

export class FruitRedeemed__Params {
  _event: FruitRedeemed;

  constructor(event: FruitRedeemed) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _redeemer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _etherAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class JoinTree extends ethereum.Event {
  get params(): JoinTree__Params {
    return new JoinTree__Params(this);
  }
}

export class JoinTree__Params {
  _event: JoinTree;

  constructor(event: JoinTree) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _waterer(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TreePlanted extends ethereum.Event {
  get params(): TreePlanted__Params {
    return new TreePlanted__Params(this);
  }
}

export class TreePlanted__Params {
  _event: TreePlanted;

  constructor(event: TreePlanted) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _startDate(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _endDate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _bounty(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _feeAmt(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _paymentSize(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _paymentFrequency(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get _lapseLimit(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get _minWaterers(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class TreeWatered extends ethereum.Event {
  get params(): TreeWatered__Params {
    return new TreeWatered__Params(this);
  }
}

export class TreeWatered__Params {
  _event: TreeWatered;

  constructor(event: TreeWatered) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _waterer(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Arboretum__statsForTreeResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Arboretum extends ethereum.SmartContract {
  static bind(address: Address): Arboretum {
    return new Arboretum("Arboretum", address);
  }

  feeAmount(id: BigInt): BigInt {
    let result = super.call("feeAmount", "feeAmount(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBigInt();
  }

  try_feeAmount(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feeAmount", "feeAmount(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTimeLeft(id: BigInt): BigInt {
    let result = super.call("getTimeLeft", "getTimeLeft(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBigInt();
  }

  try_getTimeLeft(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTimeLeft",
      "getTimeLeft(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTimeLeftToStart(id: BigInt): BigInt {
    let result = super.call(
      "getTimeLeftToStart",
      "getTimeLeftToStart(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toBigInt();
  }

  try_getTimeLeftToStart(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTimeLeftToStart",
      "getTimeLeftToStart(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isTree(param0: Address): boolean {
    let result = super.call("isTree", "isTree(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isTree(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isTree", "isTree(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lapsePercent(id: BigInt): BigInt {
    let result = super.call("lapsePercent", "lapsePercent(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBigInt();
  }

  try_lapsePercent(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lapsePercent",
      "lapsePercent(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  statsForTree(id: BigInt, user: Address): Arboretum__statsForTreeResult {
    let result = super.call(
      "statsForTree",
      "statsForTree(uint256,address):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id), ethereum.Value.fromAddress(user)]
    );

    return new Arboretum__statsForTreeResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_statsForTree(
    id: BigInt,
    user: Address
  ): ethereum.CallResult<Arboretum__statsForTreeResult> {
    let result = super.tryCall(
      "statsForTree",
      "statsForTree(uint256,address):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id), ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Arboretum__statsForTreeResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  treeCount(): BigInt {
    let result = super.call("treeCount", "treeCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_treeCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("treeCount", "treeCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  trees(param0: BigInt): Address {
    let result = super.call("trees", "trees(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_trees(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("trees", "trees(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class LogJoinCall extends ethereum.Call {
  get inputs(): LogJoinCall__Inputs {
    return new LogJoinCall__Inputs(this);
  }

  get outputs(): LogJoinCall__Outputs {
    return new LogJoinCall__Outputs(this);
  }
}

export class LogJoinCall__Inputs {
  _call: LogJoinCall;

  constructor(call: LogJoinCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _waterer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class LogJoinCall__Outputs {
  _call: LogJoinCall;

  constructor(call: LogJoinCall) {
    this._call = call;
  }
}

export class LogRedeemCall extends ethereum.Call {
  get inputs(): LogRedeemCall__Inputs {
    return new LogRedeemCall__Inputs(this);
  }

  get outputs(): LogRedeemCall__Outputs {
    return new LogRedeemCall__Outputs(this);
  }
}

export class LogRedeemCall__Inputs {
  _call: LogRedeemCall;

  constructor(call: LogRedeemCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _redeemer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _etherAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class LogRedeemCall__Outputs {
  _call: LogRedeemCall;

  constructor(call: LogRedeemCall) {
    this._call = call;
  }
}

export class LogWaterCall extends ethereum.Call {
  get inputs(): LogWaterCall__Inputs {
    return new LogWaterCall__Inputs(this);
  }

  get outputs(): LogWaterCall__Outputs {
    return new LogWaterCall__Outputs(this);
  }
}

export class LogWaterCall__Inputs {
  _call: LogWaterCall;

  constructor(call: LogWaterCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _waterer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class LogWaterCall__Outputs {
  _call: LogWaterCall;

  constructor(call: LogWaterCall) {
    this._call = call;
  }
}

export class PlantCall extends ethereum.Call {
  get inputs(): PlantCall__Inputs {
    return new PlantCall__Inputs(this);
  }

  get outputs(): PlantCall__Outputs {
    return new PlantCall__Outputs(this);
  }
}

export class PlantCall__Inputs {
  _call: PlantCall;

  constructor(call: PlantCall) {
    this._call = call;
  }

  get duration(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get freq(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get payment_size(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get lapse_limit(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get fee_amount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get start_date(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get min_waterers(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class PlantCall__Outputs {
  _call: PlantCall;

  constructor(call: PlantCall) {
    this._call = call;
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}

export class WaterCall extends ethereum.Call {
  get inputs(): WaterCall__Inputs {
    return new WaterCall__Inputs(this);
  }

  get outputs(): WaterCall__Outputs {
    return new WaterCall__Outputs(this);
  }
}

export class WaterCall__Inputs {
  _call: WaterCall;

  constructor(call: WaterCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WaterCall__Outputs {
  _call: WaterCall;

  constructor(call: WaterCall) {
    this._call = call;
  }
}