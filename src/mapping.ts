import { BigInt } from "@graphprotocol/graph-ts"
import {
  Arboretum,
  FruitRedeemed,
  JoinTree,
  TreePlanted,
  TreeWatered
} from "../generated/Arboretum/Arboretum"
import { Tree } from "../generated/schema"

export function handleJoinTree(event: JoinTree): void {}

export function handleTreePlanted(event: TreePlanted): void {
 
   let tree = new Tree(event.params._id.toHex())
   tree.startDate = event.params._startDate
   tree.endDate = event.params._endDate
   tree.bounty = event.params._bounty
   tree.fee = event.params._feeAmt
   tree.paymentSize = event.params._paymentSize
   tree.paymentFrequency = event.params._paymentFrequency
   tree.lapseLimit = event.params._lapseLimit
   tree.minWaterers = event.params._minWaterers

   tree.save()


}

export function handleTreeWatered(event: TreeWatered): void {}
