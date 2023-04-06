/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.38.0
  Forc version: 0.35.5
  Fuel-Core version: 0.17.3
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Enum } from "./common";

export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export type InvalidErrorInput = Enum<{ IncorrectAssetId: ContractIdInput, NotEnoughTokens: BigNumberish, OnlyOwner: IdentityInput }>;
export type InvalidErrorOutput = Enum<{ IncorrectAssetId: ContractIdOutput, NotEnoughTokens: BN, OnlyOwner: IdentityOutput }>;

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;
export type ItemInput = { id: BigNumberish, price: BigNumberish, owner: IdentityInput, metadata: string, total_bought: BigNumberish };
export type ItemOutput = { id: BN, price: BN, owner: IdentityOutput, metadata: string, total_bought: BN };

interface ContractAbiInterface extends Interface {
  functions: {
    buy_item: FunctionFragment;
    get_count: FunctionFragment;
    get_item: FunctionFragment;
    initialize_owner: FunctionFragment;
    list_item: FunctionFragment;
    withdraw_funds: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'buy_item', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_count', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_item', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'initialize_owner', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'list_item', values: [BigNumberish, string]): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw_funds', values: []): Uint8Array;

  decodeFunctionData(functionFragment: 'buy_item', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_count', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_item', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'initialize_owner', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'list_item', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw_funds', data: BytesLike): DecodedValue;
}

export class ContractAbi extends Contract {
  interface: ContractAbiInterface;
  functions: {
    buy_item: InvokeFunction<[item_id: BigNumberish], void>;
    get_count: InvokeFunction<[], BN>;
    get_item: InvokeFunction<[item_id: BigNumberish], ItemOutput>;
    initialize_owner: InvokeFunction<[], IdentityOutput>;
    list_item: InvokeFunction<[price: BigNumberish, metadata: string], void>;
    withdraw_funds: InvokeFunction<[], void>;
  };
}
