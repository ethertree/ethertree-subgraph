// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Tree extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Tree entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Tree entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Tree", id.toString(), this);
  }

  static load(id: string): Tree | null {
    return store.get("Tree", id) as Tree | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get startDate(): BigInt {
    let value = this.get("startDate");
    return value.toBigInt();
  }

  set startDate(value: BigInt) {
    this.set("startDate", Value.fromBigInt(value));
  }

  get endDate(): BigInt {
    let value = this.get("endDate");
    return value.toBigInt();
  }

  set endDate(value: BigInt) {
    this.set("endDate", Value.fromBigInt(value));
  }

  get bounty(): BigInt {
    let value = this.get("bounty");
    return value.toBigInt();
  }

  set bounty(value: BigInt) {
    this.set("bounty", Value.fromBigInt(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get paymentSize(): BigInt {
    let value = this.get("paymentSize");
    return value.toBigInt();
  }

  set paymentSize(value: BigInt) {
    this.set("paymentSize", Value.fromBigInt(value));
  }

  get paymentFrequency(): BigInt {
    let value = this.get("paymentFrequency");
    return value.toBigInt();
  }

  set paymentFrequency(value: BigInt) {
    this.set("paymentFrequency", Value.fromBigInt(value));
  }

  get lapseLimit(): BigInt {
    let value = this.get("lapseLimit");
    return value.toBigInt();
  }

  set lapseLimit(value: BigInt) {
    this.set("lapseLimit", Value.fromBigInt(value));
  }

  get minWaterers(): BigInt {
    let value = this.get("minWaterers");
    return value.toBigInt();
  }

  set minWaterers(value: BigInt) {
    this.set("minWaterers", Value.fromBigInt(value));
  }
}
