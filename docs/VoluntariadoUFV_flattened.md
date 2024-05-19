# Solidity API

## IERC20Errors

_Standard ERC20 Errors
Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC20 tokens._

### Contract
IERC20Errors : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Standard ERC20 Errors
Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC20 tokens.

## IERC721Errors

_Standard ERC721 Errors
Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens._

### Contract
IERC721Errors : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Standard ERC721 Errors
Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens.

## IERC1155Errors

_Standard ERC1155 Errors
Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens._

### Contract
IERC1155Errors : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Standard ERC1155 Errors
Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens.

## Math

_Standard math utilities missing in the Solidity language._

### Contract
Math : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Standard math utilities missing in the Solidity language.

 --- 
### Functions:
### tryAdd

```solidity
function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256)
```

_Returns the addition of two unsigned integers, with an overflow flag._

### trySub

```solidity
function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256)
```

_Returns the subtraction of two unsigned integers, with an overflow flag._

### tryMul

```solidity
function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256)
```

_Returns the multiplication of two unsigned integers, with an overflow flag._

### tryDiv

```solidity
function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256)
```

_Returns the division of two unsigned integers, with a division by zero flag._

### tryMod

```solidity
function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256)
```

_Returns the remainder of dividing two unsigned integers, with a division by zero flag._

### max

```solidity
function max(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the largest of two numbers._

### min

```solidity
function min(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the smallest of two numbers._

### average

```solidity
function average(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the average of two numbers. The result is rounded towards
zero._

### ceilDiv

```solidity
function ceilDiv(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the ceiling of the division of two numbers.

This differs from standard division with `/` in that it rounds towards infinity instead
of rounding towards zero._

### mulDiv

```solidity
function mulDiv(uint256 x, uint256 y, uint256 denominator) internal pure returns (uint256 result)
```

Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or
denominator == 0.

_Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv) with further edits by
Uniswap Labs also under MIT license._

### mulDiv

```solidity
function mulDiv(uint256 x, uint256 y, uint256 denominator, enum Math.Rounding rounding) internal pure returns (uint256)
```

Calculates x * y / denominator with full precision, following the selected rounding direction.

### sqrt

```solidity
function sqrt(uint256 a) internal pure returns (uint256)
```

_Returns the square root of a number. If the number is not a perfect square, the value is rounded
towards zero.

Inspired by Henry S. Warren, Jr.'s "Hacker's Delight" (Chapter 11)._

### sqrt

```solidity
function sqrt(uint256 a, enum Math.Rounding rounding) internal pure returns (uint256)
```

Calculates sqrt(a), following the selected rounding direction.

### log2

```solidity
function log2(uint256 value) internal pure returns (uint256)
```

_Return the log in base 2 of a positive value rounded towards zero.
Returns 0 if given 0._

### log2

```solidity
function log2(uint256 value, enum Math.Rounding rounding) internal pure returns (uint256)
```

_Return the log in base 2, following the selected rounding direction, of a positive value.
Returns 0 if given 0._

### log10

```solidity
function log10(uint256 value) internal pure returns (uint256)
```

_Return the log in base 10 of a positive value rounded towards zero.
Returns 0 if given 0._

### log10

```solidity
function log10(uint256 value, enum Math.Rounding rounding) internal pure returns (uint256)
```

_Return the log in base 10, following the selected rounding direction, of a positive value.
Returns 0 if given 0._

### log256

```solidity
function log256(uint256 value) internal pure returns (uint256)
```

_Return the log in base 256 of a positive value rounded towards zero.
Returns 0 if given 0.

Adding one to the result gives the number of pairs of hex symbols needed to represent `value` as a hex string._

### log256

```solidity
function log256(uint256 value, enum Math.Rounding rounding) internal pure returns (uint256)
```

_Return the log in base 256, following the selected rounding direction, of a positive value.
Returns 0 if given 0._

### unsignedRoundsUp

```solidity
function unsignedRoundsUp(enum Math.Rounding rounding) internal pure returns (bool)
```

_Returns whether a provided rounding mode is considered rounding up for unsigned integers._

## StorageSlot

_Library for reading and writing primitive types to specific storage slots.

Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.
This library helps with reading and writing to such slots without the need for inline assembly.

The functions in this library return Slot structs that contain a `value` member that can be used to read or write.

Example usage to set ERC1967 implementation slot:
```solidity
contract ERC1967 {
    bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

    function _getImplementation() internal view returns (address) {
        return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;
    }

    function _setImplementation(address newImplementation) internal {
        require(newImplementation.code.length > 0);
        StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;
    }
}
```_

### Contract
StorageSlot : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Library for reading and writing primitive types to specific storage slots.

Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.
This library helps with reading and writing to such slots without the need for inline assembly.

The functions in this library return Slot structs that contain a `value` member that can be used to read or write.

Example usage to set ERC1967 implementation slot:
```solidity
contract ERC1967 {
    bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

    function _getImplementation() internal view returns (address) {
        return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;
    }

    function _setImplementation(address newImplementation) internal {
        require(newImplementation.code.length > 0);
        StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;
    }
}
```

 --- 
### Functions:
### getAddressSlot

```solidity
function getAddressSlot(bytes32 slot) internal pure returns (struct StorageSlot.AddressSlot r)
```

_Returns an `AddressSlot` with member `value` located at `slot`._

### getBooleanSlot

```solidity
function getBooleanSlot(bytes32 slot) internal pure returns (struct StorageSlot.BooleanSlot r)
```

_Returns an `BooleanSlot` with member `value` located at `slot`._

### getBytes32Slot

```solidity
function getBytes32Slot(bytes32 slot) internal pure returns (struct StorageSlot.Bytes32Slot r)
```

_Returns an `Bytes32Slot` with member `value` located at `slot`._

### getUint256Slot

```solidity
function getUint256Slot(bytes32 slot) internal pure returns (struct StorageSlot.Uint256Slot r)
```

_Returns an `Uint256Slot` with member `value` located at `slot`._

### getStringSlot

```solidity
function getStringSlot(bytes32 slot) internal pure returns (struct StorageSlot.StringSlot r)
```

_Returns an `StringSlot` with member `value` located at `slot`._

### getStringSlot

```solidity
function getStringSlot(string store) internal pure returns (struct StorageSlot.StringSlot r)
```

_Returns an `StringSlot` representation of the string storage pointer `store`._

### getBytesSlot

```solidity
function getBytesSlot(bytes32 slot) internal pure returns (struct StorageSlot.BytesSlot r)
```

_Returns an `BytesSlot` with member `value` located at `slot`._

### getBytesSlot

```solidity
function getBytesSlot(bytes store) internal pure returns (struct StorageSlot.BytesSlot r)
```

_Returns an `BytesSlot` representation of the bytes storage pointer `store`._

## Arrays

_Collection of functions related to array types._

### Contract
Arrays : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Collection of functions related to array types.

 --- 
### Functions:
### findUpperBound

```solidity
function findUpperBound(uint256[] array, uint256 element) internal view returns (uint256)
```

_Searches a sorted `array` and returns the first index that contains
a value greater or equal to `element`. If no such index exists (i.e. all
values in the array are strictly less than `element`), the array length is
returned. Time complexity O(log n).

`array` is expected to be sorted in ascending order, and to contain no
repeated elements._

### unsafeAccess

```solidity
function unsafeAccess(address[] arr, uint256 pos) internal pure returns (struct StorageSlot.AddressSlot)
```

_Access an array in an "unsafe" way. Skips solidity "index-out-of-range" check.

WARNING: Only use if you are certain `pos` is lower than the array length._

### unsafeAccess

```solidity
function unsafeAccess(bytes32[] arr, uint256 pos) internal pure returns (struct StorageSlot.Bytes32Slot)
```

_Access an array in an "unsafe" way. Skips solidity "index-out-of-range" check.

WARNING: Only use if you are certain `pos` is lower than the array length._

### unsafeAccess

```solidity
function unsafeAccess(uint256[] arr, uint256 pos) internal pure returns (struct StorageSlot.Uint256Slot)
```

_Access an array in an "unsafe" way. Skips solidity "index-out-of-range" check.

WARNING: Only use if you are certain `pos` is lower than the array length._

### unsafeMemoryAccess

```solidity
function unsafeMemoryAccess(uint256[] arr, uint256 pos) internal pure returns (uint256 res)
```

_Access an array in an "unsafe" way. Skips solidity "index-out-of-range" check.

WARNING: Only use if you are certain `pos` is lower than the array length._

### unsafeMemoryAccess

```solidity
function unsafeMemoryAccess(address[] arr, uint256 pos) internal pure returns (address res)
```

_Access an array in an "unsafe" way. Skips solidity "index-out-of-range" check.

WARNING: Only use if you are certain `pos` is lower than the array length._

## Context

_Provides information about the current execution context, including the
sender of the transaction and its data. While these are generally available
via msg.sender and msg.data, they should not be accessed in such a direct
manner, since when dealing with meta-transactions the account sending and
paying for execution may not be the actual sender (as far as an application
is concerned).

This contract is only required for intermediate, library-like contracts._

### Contract
Context : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Provides information about the current execution context, including the
sender of the transaction and its data. While these are generally available
via msg.sender and msg.data, they should not be accessed in such a direct
manner, since when dealing with meta-transactions the account sending and
paying for execution may not be the actual sender (as far as an application
is concerned).

This contract is only required for intermediate, library-like contracts.

 --- 
### Functions:
### _msgSender

```solidity
function _msgSender() internal view virtual returns (address)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes)
```

### _contextSuffixLength

```solidity
function _contextSuffixLength() internal view virtual returns (uint256)
```

## Pausable

_Contract module which allows children to implement an emergency stop
mechanism that can be triggered by an authorized account.

This module is used through inheritance. It will make available the
modifiers `whenNotPaused` and `whenPaused`, which can be applied to
the functions of your contract. Note that they will not be pausable by
simply including this module, only once the modifiers are put in place._

### Contract
Pausable : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Contract module which allows children to implement an emergency stop
mechanism that can be triggered by an authorized account.

This module is used through inheritance. It will make available the
modifiers `whenNotPaused` and `whenPaused`, which can be applied to
the functions of your contract. Note that they will not be pausable by
simply including this module, only once the modifiers are put in place.

 --- 
### Modifiers:
### whenNotPaused

```solidity
modifier whenNotPaused()
```

_Modifier to make a function callable only when the contract is not paused.

Requirements:

- The contract must not be paused._

### whenPaused

```solidity
modifier whenPaused()
```

_Modifier to make a function callable only when the contract is paused.

Requirements:

- The contract must be paused._

 --- 
### Functions:
### constructor

```solidity
constructor() internal
```

_Initializes the contract in unpaused state._

### paused

```solidity
function paused() public view virtual returns (bool)
```

_Returns true if the contract is paused, and false otherwise._

### _requireNotPaused

```solidity
function _requireNotPaused() internal view virtual
```

_Throws if the contract is paused._

### _requirePaused

```solidity
function _requirePaused() internal view virtual
```

_Throws if the contract is not paused._

### _pause

```solidity
function _pause() internal virtual
```

_Triggers stopped state.

Requirements:

- The contract must not be paused._

### _unpause

```solidity
function _unpause() internal virtual
```

_Returns to normal state.

Requirements:

- The contract must be paused._

 --- 
### Events:
### Paused

```solidity
event Paused(address account)
```

_Emitted when the pause is triggered by `account`._

### Unpaused

```solidity
event Unpaused(address account)
```

_Emitted when the pause is lifted by `account`._

## Ownable

_Contract module which provides a basic access control mechanism, where
there is an account (an owner) that can be granted exclusive access to
specific functions.

The initial owner is set to the address provided by the deployer. This can
later be changed with {transferOwnership}.

This module is used through inheritance. It will make available the modifier
`onlyOwner`, which can be applied to your functions to restrict their use to
the owner._

### Contract
Ownable : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Contract module which provides a basic access control mechanism, where
there is an account (an owner) that can be granted exclusive access to
specific functions.

The initial owner is set to the address provided by the deployer. This can
later be changed with {transferOwnership}.

This module is used through inheritance. It will make available the modifier
`onlyOwner`, which can be applied to your functions to restrict their use to
the owner.

 --- 
### Modifiers:
### onlyOwner

```solidity
modifier onlyOwner()
```

_Throws if called by any account other than the owner._

 --- 
### Functions:
### constructor

```solidity
constructor(address initialOwner) internal
```

_Initializes the contract setting the address provided by the deployer as the initial owner._

### owner

```solidity
function owner() public view virtual returns (address)
```

_Returns the address of the current owner._

### _checkOwner

```solidity
function _checkOwner() internal view virtual
```

_Throws if the sender is not the owner._

### renounceOwnership

```solidity
function renounceOwnership() public virtual
```

_Leaves the contract without owner. It will not be possible to call
`onlyOwner` functions. Can only be called by the current owner.

NOTE: Renouncing ownership will leave the contract without an owner,
thereby disabling any functionality that is only available to the owner._

### transferOwnership

```solidity
function transferOwnership(address newOwner) public virtual
```

_Transfers ownership of the contract to a new account (`newOwner`).
Can only be called by the current owner._

### _transferOwnership

```solidity
function _transferOwnership(address newOwner) internal virtual
```

_Transfers ownership of the contract to a new account (`newOwner`).
Internal function without access restriction._

 --- 
### Events:
### OwnershipTransferred

```solidity
event OwnershipTransferred(address previousOwner, address newOwner)
```

## IERC165

_Interface of the ERC165 standard, as defined in the
https://eips.ethereum.org/EIPS/eip-165[EIP].

Implementers can declare support of contract interfaces, which can then be
queried by others ({ERC165Checker}).

For an implementation, see {ERC165}._

### Contract
IERC165 : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Interface of the ERC165 standard, as defined in the
https://eips.ethereum.org/EIPS/eip-165[EIP].

Implementers can declare support of contract interfaces, which can then be
queried by others ({ERC165Checker}).

For an implementation, see {ERC165}.

 --- 
### Functions:
### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_Returns true if this contract implements the interface defined by
`interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._

## ERC165

_Implementation of the {IERC165} interface.

Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check
for the additional interface id that will be supported. For example:

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);
}
```_

### Contract
ERC165 : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Implementation of the {IERC165} interface.

Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check
for the additional interface id that will be supported. For example:

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);
}
```

 --- 
### Functions:
### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

_See {IERC165-supportsInterface}._

inherits IERC165:

## IERC1155Receiver

_Interface that must be implemented by smart contracts in order to receive
ERC-1155 token transfers._

### Contract
IERC1155Receiver : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Interface that must be implemented by smart contracts in order to receive
ERC-1155 token transfers.

 --- 
### Functions:
### onERC1155Received

```solidity
function onERC1155Received(address operator, address from, uint256 id, uint256 value, bytes data) external returns (bytes4)
```

_Handles the receipt of a single ERC1155 token type. This function is
called at the end of a `safeTransferFrom` after the balance has been updated.

NOTE: To accept the transfer, this must return
`bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
(i.e. 0xf23a6e61, or its own function selector)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operator | address | The address which initiated the transfer (i.e. msg.sender) |
| from | address | The address which previously owned the token |
| id | uint256 | The ID of the token being transferred |
| value | uint256 | The amount of tokens being transferred |
| data | bytes | Additional data with no specified format |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` if transfer is allowed |

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address operator, address from, uint256[] ids, uint256[] values, bytes data) external returns (bytes4)
```

_Handles the receipt of a multiple ERC1155 token types. This function
is called at the end of a `safeBatchTransferFrom` after the balances have
been updated.

NOTE: To accept the transfer(s), this must return
`bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`
(i.e. 0xbc197c81, or its own function selector)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operator | address | The address which initiated the batch transfer (i.e. msg.sender) |
| from | address | The address which previously owned the token |
| ids | uint256[] | An array containing ids of each token being transferred (order and length must match values array) |
| values | uint256[] | An array containing amounts of each token being transferred (order and length must match ids array) |
| data | bytes | Additional data with no specified format |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` if transfer is allowed |

inherits IERC165:
### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_Returns true if this contract implements the interface defined by
`interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._

## IERC1155

_Required interface of an ERC1155 compliant contract, as defined in the
https://eips.ethereum.org/EIPS/eip-1155[EIP]._

### Contract
IERC1155 : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Required interface of an ERC1155 compliant contract, as defined in the
https://eips.ethereum.org/EIPS/eip-1155[EIP].

 --- 
### Functions:
### balanceOf

```solidity
function balanceOf(address account, uint256 id) external view returns (uint256)
```

_Returns the value of tokens of token type `id` owned by `account`.

Requirements:

- `account` cannot be the zero address._

### balanceOfBatch

```solidity
function balanceOfBatch(address[] accounts, uint256[] ids) external view returns (uint256[])
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.

Requirements:

- `accounts` and `ids` must have the same length._

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external
```

_Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,

Emits an {ApprovalForAll} event.

Requirements:

- `operator` cannot be the caller._

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) external view returns (bool)
```

_Returns true if `operator` is approved to transfer ``account``'s tokens.

See {setApprovalForAll}._

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data) external
```

_Transfers a `value` amount of tokens of type `id` from `from` to `to`.

WARNING: This function can potentially allow a reentrancy attack when transferring tokens
to an untrusted contract, when invoking {onERC1155Received} on the receiver.
Ensure to follow the checks-effects-interactions pattern and consider employing
reentrancy guards when interacting with untrusted contracts.

Emits a {TransferSingle} event.

Requirements:

- `to` cannot be the zero address.
- If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.
- `from` must have a balance of tokens of type `id` of at least `value` amount.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
acceptance magic value._

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data) external
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.

WARNING: This function can potentially allow a reentrancy attack when transferring tokens
to an untrusted contract, when invoking {onERC1155BatchReceived} on the receiver.
Ensure to follow the checks-effects-interactions pattern and consider employing
reentrancy guards when interacting with untrusted contracts.

Emits either a {TransferSingle} or a {TransferBatch} event, depending on the length of the array arguments.

Requirements:

- `ids` and `values` must have the same length.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
acceptance magic value._

inherits IERC165:
### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_Returns true if this contract implements the interface defined by
`interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._

 --- 
### Events:
### TransferSingle

```solidity
event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)
```

_Emitted when `value` amount of tokens of type `id` are transferred from `from` to `to` by `operator`._

### TransferBatch

```solidity
event TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)
```

_Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all
transfers._

### ApprovalForAll

```solidity
event ApprovalForAll(address account, address operator, bool approved)
```

_Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to
`approved`._

### URI

```solidity
event URI(string value, uint256 id)
```

_Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.

If an {URI} event was emitted for `id`, the standard
https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value
returned by {IERC1155MetadataURI-uri}._

inherits IERC165:

## IERC1155MetadataURI

_Interface of the optional ERC1155MetadataExtension interface, as defined
in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP]._

### Contract
IERC1155MetadataURI : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Interface of the optional ERC1155MetadataExtension interface, as defined
in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP].

 --- 
### Functions:
### uri

```solidity
function uri(uint256 id) external view returns (string)
```

_Returns the URI for token type `id`.

If the `\{id\}` substring is present in the URI, it must be replaced by
clients with the actual token type ID._

inherits IERC1155:
### balanceOf

```solidity
function balanceOf(address account, uint256 id) external view returns (uint256)
```

_Returns the value of tokens of token type `id` owned by `account`.

Requirements:

- `account` cannot be the zero address._

### balanceOfBatch

```solidity
function balanceOfBatch(address[] accounts, uint256[] ids) external view returns (uint256[])
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.

Requirements:

- `accounts` and `ids` must have the same length._

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external
```

_Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,

Emits an {ApprovalForAll} event.

Requirements:

- `operator` cannot be the caller._

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) external view returns (bool)
```

_Returns true if `operator` is approved to transfer ``account``'s tokens.

See {setApprovalForAll}._

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data) external
```

_Transfers a `value` amount of tokens of type `id` from `from` to `to`.

WARNING: This function can potentially allow a reentrancy attack when transferring tokens
to an untrusted contract, when invoking {onERC1155Received} on the receiver.
Ensure to follow the checks-effects-interactions pattern and consider employing
reentrancy guards when interacting with untrusted contracts.

Emits a {TransferSingle} event.

Requirements:

- `to` cannot be the zero address.
- If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.
- `from` must have a balance of tokens of type `id` of at least `value` amount.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
acceptance magic value._

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data) external
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.

WARNING: This function can potentially allow a reentrancy attack when transferring tokens
to an untrusted contract, when invoking {onERC1155BatchReceived} on the receiver.
Ensure to follow the checks-effects-interactions pattern and consider employing
reentrancy guards when interacting with untrusted contracts.

Emits either a {TransferSingle} or a {TransferBatch} event, depending on the length of the array arguments.

Requirements:

- `ids` and `values` must have the same length.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
acceptance magic value._

inherits IERC165:
### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_Returns true if this contract implements the interface defined by
`interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._

 --- 
### Events:
inherits IERC1155:
### TransferSingle

```solidity
event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)
```

_Emitted when `value` amount of tokens of type `id` are transferred from `from` to `to` by `operator`._

### TransferBatch

```solidity
event TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)
```

_Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all
transfers._

### ApprovalForAll

```solidity
event ApprovalForAll(address account, address operator, bool approved)
```

_Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to
`approved`._

### URI

```solidity
event URI(string value, uint256 id)
```

_Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.

If an {URI} event was emitted for `id`, the standard
https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value
returned by {IERC1155MetadataURI-uri}._

inherits IERC165:

## ERC1155

_Implementation of the basic standard multi-token.
See https://eips.ethereum.org/EIPS/eip-1155
Originally based on code by Enjin: https://github.com/enjin/erc-1155_

### Contract
ERC1155 : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

Implementation of the basic standard multi-token.
See https://eips.ethereum.org/EIPS/eip-1155
Originally based on code by Enjin: https://github.com/enjin/erc-1155

 --- 
### Functions:
### constructor

```solidity
constructor(string uri_) internal
```

_See {_setURI}._

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

_See {IERC165-supportsInterface}._

### uri

```solidity
function uri(uint256) public view virtual returns (string)
```

_See {IERC1155MetadataURI-uri}.

This implementation returns the same URI for *all* token types. It relies
on the token type ID substitution mechanism
https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].

Clients calling this function must replace the `\{id\}` substring with the
actual token type ID._

### balanceOf

```solidity
function balanceOf(address account, uint256 id) public view virtual returns (uint256)
```

_See {IERC1155-balanceOf}._

### balanceOfBatch

```solidity
function balanceOfBatch(address[] accounts, uint256[] ids) public view virtual returns (uint256[])
```

_See {IERC1155-balanceOfBatch}.

Requirements:

- `accounts` and `ids` must have the same length._

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) public virtual
```

_See {IERC1155-setApprovalForAll}._

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) public view virtual returns (bool)
```

_See {IERC1155-isApprovedForAll}._

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data) public virtual
```

_See {IERC1155-safeTransferFrom}._

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data) public virtual
```

_See {IERC1155-safeBatchTransferFrom}._

### _update

```solidity
function _update(address from, address to, uint256[] ids, uint256[] values) internal virtual
```

_Transfers a `value` amount of tokens of type `id` from `from` to `to`. Will mint (or burn) if `from`
(or `to`) is the zero address.

Emits a {TransferSingle} event if the arrays contain one element, and {TransferBatch} otherwise.

Requirements:

- If `to` refers to a smart contract, it must implement either {IERC1155Receiver-onERC1155Received}
  or {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.
- `ids` and `values` must have the same length.

NOTE: The ERC-1155 acceptance check is not performed in this function. See {_updateWithAcceptanceCheck} instead._

### _updateWithAcceptanceCheck

```solidity
function _updateWithAcceptanceCheck(address from, address to, uint256[] ids, uint256[] values, bytes data) internal virtual
```

_Version of {_update} that performs the token acceptance check by calling
{IERC1155Receiver-onERC1155Received} or {IERC1155Receiver-onERC1155BatchReceived} on the receiver address if it
contains code (eg. is a smart contract at the moment of execution).

IMPORTANT: Overriding this function is discouraged because it poses a reentrancy risk from the receiver. So any
update to the contract state after this function would break the check-effect-interaction pattern. Consider
overriding {_update} instead._

### _safeTransferFrom

```solidity
function _safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data) internal
```

_Transfers a `value` tokens of token type `id` from `from` to `to`.

Emits a {TransferSingle} event.

Requirements:

- `to` cannot be the zero address.
- `from` must have a balance of tokens of type `id` of at least `value` amount.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
acceptance magic value._

### _safeBatchTransferFrom

```solidity
function _safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data) internal
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.

Emits a {TransferBatch} event.

Requirements:

- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
acceptance magic value.
- `ids` and `values` must have the same length._

### _setURI

```solidity
function _setURI(string newuri) internal virtual
```

_Sets a new URI for all token types, by relying on the token type ID
substitution mechanism
https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].

By this mechanism, any occurrence of the `\{id\}` substring in either the
URI or any of the values in the JSON file at said URI will be replaced by
clients with the token type ID.

For example, the `https://token-cdn-domain/\{id\}.json` URI would be
interpreted by clients as
`https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`
for token type ID 0x4cce0.

See {uri}.

Because these URIs cannot be meaningfully represented by the {URI} event,
this function emits no events._

### _mint

```solidity
function _mint(address to, uint256 id, uint256 value, bytes data) internal
```

_Creates a `value` amount of tokens of type `id`, and assigns them to `to`.

Emits a {TransferSingle} event.

Requirements:

- `to` cannot be the zero address.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
acceptance magic value._

### _mintBatch

```solidity
function _mintBatch(address to, uint256[] ids, uint256[] values, bytes data) internal
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.

Emits a {TransferBatch} event.

Requirements:

- `ids` and `values` must have the same length.
- `to` cannot be the zero address.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
acceptance magic value._

### _burn

```solidity
function _burn(address from, uint256 id, uint256 value) internal
```

_Destroys a `value` amount of tokens of type `id` from `from`

Emits a {TransferSingle} event.

Requirements:

- `from` cannot be the zero address.
- `from` must have at least `value` amount of tokens of type `id`._

### _burnBatch

```solidity
function _burnBatch(address from, uint256[] ids, uint256[] values) internal
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.

Emits a {TransferBatch} event.

Requirements:

- `from` cannot be the zero address.
- `from` must have at least `value` amount of tokens of type `id`.
- `ids` and `values` must have the same length._

### _setApprovalForAll

```solidity
function _setApprovalForAll(address owner, address operator, bool approved) internal virtual
```

_Approve `operator` to operate on all of `owner` tokens

Emits an {ApprovalForAll} event.

Requirements:

- `operator` cannot be the zero address._

inherits IERC1155Errors:
inherits IERC1155MetadataURI:
inherits IERC1155:
inherits ERC165:
inherits IERC165:

 --- 
### Events:
inherits IERC1155Errors:
inherits IERC1155MetadataURI:
inherits IERC1155:
### TransferSingle

```solidity
event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)
```

_Emitted when `value` amount of tokens of type `id` are transferred from `from` to `to` by `operator`._

### TransferBatch

```solidity
event TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)
```

_Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all
transfers._

### ApprovalForAll

```solidity
event ApprovalForAll(address account, address operator, bool approved)
```

_Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to
`approved`._

### URI

```solidity
event URI(string value, uint256 id)
```

_Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.

If an {URI} event was emitted for `id`, the standard
https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value
returned by {IERC1155MetadataURI-uri}._

inherits ERC165:
inherits IERC165:

## ERC1155Pausable

_ERC1155 token with pausable token transfers, minting and burning.

Useful for scenarios such as preventing trades until the end of an evaluation
period, or having an emergency switch for freezing all token transfers in the
event of a large bug.

IMPORTANT: This contract does not include public pause and unpause functions. In
addition to inheriting this contract, you must define both functions, invoking the
{Pausable-_pause} and {Pausable-_unpause} internal functions, with appropriate
access control, e.g. using {AccessControl} or {Ownable}. Not doing so will
make the contract pause mechanism of the contract unreachable, and thus unusable._

### Contract
ERC1155Pausable : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

ERC1155 token with pausable token transfers, minting and burning.

Useful for scenarios such as preventing trades until the end of an evaluation
period, or having an emergency switch for freezing all token transfers in the
event of a large bug.

IMPORTANT: This contract does not include public pause and unpause functions. In
addition to inheriting this contract, you must define both functions, invoking the
{Pausable-_pause} and {Pausable-_unpause} internal functions, with appropriate
access control, e.g. using {AccessControl} or {Ownable}. Not doing so will
make the contract pause mechanism of the contract unreachable, and thus unusable.

 --- 
### Functions:
### _update

```solidity
function _update(address from, address to, uint256[] ids, uint256[] values) internal virtual
```

_See {ERC1155-_update}.

Requirements:

- the contract must not be paused._

inherits Pausable:
### paused

```solidity
function paused() public view virtual returns (bool)
```

_Returns true if the contract is paused, and false otherwise._

### _requireNotPaused

```solidity
function _requireNotPaused() internal view virtual
```

_Throws if the contract is paused._

### _requirePaused

```solidity
function _requirePaused() internal view virtual
```

_Throws if the contract is not paused._

### _pause

```solidity
function _pause() internal virtual
```

_Triggers stopped state.

Requirements:

- The contract must not be paused._

### _unpause

```solidity
function _unpause() internal virtual
```

_Returns to normal state.

Requirements:

- The contract must be paused._

inherits ERC1155:
### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

_See {IERC165-supportsInterface}._

### uri

```solidity
function uri(uint256) public view virtual returns (string)
```

_See {IERC1155MetadataURI-uri}.

This implementation returns the same URI for *all* token types. It relies
on the token type ID substitution mechanism
https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].

Clients calling this function must replace the `\{id\}` substring with the
actual token type ID._

### balanceOf

```solidity
function balanceOf(address account, uint256 id) public view virtual returns (uint256)
```

_See {IERC1155-balanceOf}._

### balanceOfBatch

```solidity
function balanceOfBatch(address[] accounts, uint256[] ids) public view virtual returns (uint256[])
```

_See {IERC1155-balanceOfBatch}.

Requirements:

- `accounts` and `ids` must have the same length._

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) public virtual
```

_See {IERC1155-setApprovalForAll}._

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) public view virtual returns (bool)
```

_See {IERC1155-isApprovedForAll}._

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data) public virtual
```

_See {IERC1155-safeTransferFrom}._

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data) public virtual
```

_See {IERC1155-safeBatchTransferFrom}._

### _updateWithAcceptanceCheck

```solidity
function _updateWithAcceptanceCheck(address from, address to, uint256[] ids, uint256[] values, bytes data) internal virtual
```

_Version of {_update} that performs the token acceptance check by calling
{IERC1155Receiver-onERC1155Received} or {IERC1155Receiver-onERC1155BatchReceived} on the receiver address if it
contains code (eg. is a smart contract at the moment of execution).

IMPORTANT: Overriding this function is discouraged because it poses a reentrancy risk from the receiver. So any
update to the contract state after this function would break the check-effect-interaction pattern. Consider
overriding {_update} instead._

### _safeTransferFrom

```solidity
function _safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data) internal
```

_Transfers a `value` tokens of token type `id` from `from` to `to`.

Emits a {TransferSingle} event.

Requirements:

- `to` cannot be the zero address.
- `from` must have a balance of tokens of type `id` of at least `value` amount.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
acceptance magic value._

### _safeBatchTransferFrom

```solidity
function _safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data) internal
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.

Emits a {TransferBatch} event.

Requirements:

- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
acceptance magic value.
- `ids` and `values` must have the same length._

### _setURI

```solidity
function _setURI(string newuri) internal virtual
```

_Sets a new URI for all token types, by relying on the token type ID
substitution mechanism
https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].

By this mechanism, any occurrence of the `\{id\}` substring in either the
URI or any of the values in the JSON file at said URI will be replaced by
clients with the token type ID.

For example, the `https://token-cdn-domain/\{id\}.json` URI would be
interpreted by clients as
`https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`
for token type ID 0x4cce0.

See {uri}.

Because these URIs cannot be meaningfully represented by the {URI} event,
this function emits no events._

### _mint

```solidity
function _mint(address to, uint256 id, uint256 value, bytes data) internal
```

_Creates a `value` amount of tokens of type `id`, and assigns them to `to`.

Emits a {TransferSingle} event.

Requirements:

- `to` cannot be the zero address.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
acceptance magic value._

### _mintBatch

```solidity
function _mintBatch(address to, uint256[] ids, uint256[] values, bytes data) internal
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.

Emits a {TransferBatch} event.

Requirements:

- `ids` and `values` must have the same length.
- `to` cannot be the zero address.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
acceptance magic value._

### _burn

```solidity
function _burn(address from, uint256 id, uint256 value) internal
```

_Destroys a `value` amount of tokens of type `id` from `from`

Emits a {TransferSingle} event.

Requirements:

- `from` cannot be the zero address.
- `from` must have at least `value` amount of tokens of type `id`._

### _burnBatch

```solidity
function _burnBatch(address from, uint256[] ids, uint256[] values) internal
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.

Emits a {TransferBatch} event.

Requirements:

- `from` cannot be the zero address.
- `from` must have at least `value` amount of tokens of type `id`.
- `ids` and `values` must have the same length._

### _setApprovalForAll

```solidity
function _setApprovalForAll(address owner, address operator, bool approved) internal virtual
```

_Approve `operator` to operate on all of `owner` tokens

Emits an {ApprovalForAll} event.

Requirements:

- `operator` cannot be the zero address._

inherits IERC1155Errors:
inherits IERC1155MetadataURI:
inherits IERC1155:
inherits ERC165:
inherits IERC165:

 --- 
### Events:
inherits Pausable:
### Paused

```solidity
event Paused(address account)
```

_Emitted when the pause is triggered by `account`._

### Unpaused

```solidity
event Unpaused(address account)
```

_Emitted when the pause is lifted by `account`._

inherits ERC1155:
inherits IERC1155Errors:
inherits IERC1155MetadataURI:
inherits IERC1155:
### TransferSingle

```solidity
event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)
```

_Emitted when `value` amount of tokens of type `id` are transferred from `from` to `to` by `operator`._

### TransferBatch

```solidity
event TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)
```

_Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all
transfers._

### ApprovalForAll

```solidity
event ApprovalForAll(address account, address operator, bool approved)
```

_Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to
`approved`._

### URI

```solidity
event URI(string value, uint256 id)
```

_Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.

If an {URI} event was emitted for `id`, the standard
https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value
returned by {IERC1155MetadataURI-uri}._

inherits ERC165:
inherits IERC165:

## VoluntariadoUFV

### Contract
VoluntariadoUFV : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV_flattened.sol

 --- 
### Functions:
### constructor

```solidity
constructor(address initialOwner) public
```

### setURI

```solidity
function setURI(string newuri) public
```

### pause

```solidity
function pause() public
```

### unpause

```solidity
function unpause() public
```

### mint

```solidity
function mint(address account, uint256 id, uint256 amount, bytes data) public
```

### mintBatch

```solidity
function mintBatch(address to, uint256[] ids, uint256[] amounts, bytes data) public
```

### _update

```solidity
function _update(address from, address to, uint256[] ids, uint256[] values) internal
```

inherits ERC1155Pausable:
inherits Pausable:
### paused

```solidity
function paused() public view virtual returns (bool)
```

_Returns true if the contract is paused, and false otherwise._

### _requireNotPaused

```solidity
function _requireNotPaused() internal view virtual
```

_Throws if the contract is paused._

### _requirePaused

```solidity
function _requirePaused() internal view virtual
```

_Throws if the contract is not paused._

### _pause

```solidity
function _pause() internal virtual
```

_Triggers stopped state.

Requirements:

- The contract must not be paused._

### _unpause

```solidity
function _unpause() internal virtual
```

_Returns to normal state.

Requirements:

- The contract must be paused._

inherits Ownable:
### owner

```solidity
function owner() public view virtual returns (address)
```

_Returns the address of the current owner._

### _checkOwner

```solidity
function _checkOwner() internal view virtual
```

_Throws if the sender is not the owner._

### renounceOwnership

```solidity
function renounceOwnership() public virtual
```

_Leaves the contract without owner. It will not be possible to call
`onlyOwner` functions. Can only be called by the current owner.

NOTE: Renouncing ownership will leave the contract without an owner,
thereby disabling any functionality that is only available to the owner._

### transferOwnership

```solidity
function transferOwnership(address newOwner) public virtual
```

_Transfers ownership of the contract to a new account (`newOwner`).
Can only be called by the current owner._

### _transferOwnership

```solidity
function _transferOwnership(address newOwner) internal virtual
```

_Transfers ownership of the contract to a new account (`newOwner`).
Internal function without access restriction._

inherits ERC1155:
### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

_See {IERC165-supportsInterface}._

### uri

```solidity
function uri(uint256) public view virtual returns (string)
```

_See {IERC1155MetadataURI-uri}.

This implementation returns the same URI for *all* token types. It relies
on the token type ID substitution mechanism
https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].

Clients calling this function must replace the `\{id\}` substring with the
actual token type ID._

### balanceOf

```solidity
function balanceOf(address account, uint256 id) public view virtual returns (uint256)
```

_See {IERC1155-balanceOf}._

### balanceOfBatch

```solidity
function balanceOfBatch(address[] accounts, uint256[] ids) public view virtual returns (uint256[])
```

_See {IERC1155-balanceOfBatch}.

Requirements:

- `accounts` and `ids` must have the same length._

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) public virtual
```

_See {IERC1155-setApprovalForAll}._

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) public view virtual returns (bool)
```

_See {IERC1155-isApprovedForAll}._

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data) public virtual
```

_See {IERC1155-safeTransferFrom}._

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data) public virtual
```

_See {IERC1155-safeBatchTransferFrom}._

### _updateWithAcceptanceCheck

```solidity
function _updateWithAcceptanceCheck(address from, address to, uint256[] ids, uint256[] values, bytes data) internal virtual
```

_Version of {_update} that performs the token acceptance check by calling
{IERC1155Receiver-onERC1155Received} or {IERC1155Receiver-onERC1155BatchReceived} on the receiver address if it
contains code (eg. is a smart contract at the moment of execution).

IMPORTANT: Overriding this function is discouraged because it poses a reentrancy risk from the receiver. So any
update to the contract state after this function would break the check-effect-interaction pattern. Consider
overriding {_update} instead._

### _safeTransferFrom

```solidity
function _safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data) internal
```

_Transfers a `value` tokens of token type `id` from `from` to `to`.

Emits a {TransferSingle} event.

Requirements:

- `to` cannot be the zero address.
- `from` must have a balance of tokens of type `id` of at least `value` amount.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
acceptance magic value._

### _safeBatchTransferFrom

```solidity
function _safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data) internal
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.

Emits a {TransferBatch} event.

Requirements:

- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
acceptance magic value.
- `ids` and `values` must have the same length._

### _setURI

```solidity
function _setURI(string newuri) internal virtual
```

_Sets a new URI for all token types, by relying on the token type ID
substitution mechanism
https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].

By this mechanism, any occurrence of the `\{id\}` substring in either the
URI or any of the values in the JSON file at said URI will be replaced by
clients with the token type ID.

For example, the `https://token-cdn-domain/\{id\}.json` URI would be
interpreted by clients as
`https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`
for token type ID 0x4cce0.

See {uri}.

Because these URIs cannot be meaningfully represented by the {URI} event,
this function emits no events._

### _mint

```solidity
function _mint(address to, uint256 id, uint256 value, bytes data) internal
```

_Creates a `value` amount of tokens of type `id`, and assigns them to `to`.

Emits a {TransferSingle} event.

Requirements:

- `to` cannot be the zero address.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
acceptance magic value._

### _mintBatch

```solidity
function _mintBatch(address to, uint256[] ids, uint256[] values, bytes data) internal
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.

Emits a {TransferBatch} event.

Requirements:

- `ids` and `values` must have the same length.
- `to` cannot be the zero address.
- If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
acceptance magic value._

### _burn

```solidity
function _burn(address from, uint256 id, uint256 value) internal
```

_Destroys a `value` amount of tokens of type `id` from `from`

Emits a {TransferSingle} event.

Requirements:

- `from` cannot be the zero address.
- `from` must have at least `value` amount of tokens of type `id`._

### _burnBatch

```solidity
function _burnBatch(address from, uint256[] ids, uint256[] values) internal
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.

Emits a {TransferBatch} event.

Requirements:

- `from` cannot be the zero address.
- `from` must have at least `value` amount of tokens of type `id`.
- `ids` and `values` must have the same length._

### _setApprovalForAll

```solidity
function _setApprovalForAll(address owner, address operator, bool approved) internal virtual
```

_Approve `operator` to operate on all of `owner` tokens

Emits an {ApprovalForAll} event.

Requirements:

- `operator` cannot be the zero address._

inherits IERC1155Errors:
inherits IERC1155MetadataURI:
inherits IERC1155:
inherits ERC165:
inherits IERC165:

 --- 
### Events:
inherits ERC1155Pausable:
inherits Pausable:
### Paused

```solidity
event Paused(address account)
```

_Emitted when the pause is triggered by `account`._

### Unpaused

```solidity
event Unpaused(address account)
```

_Emitted when the pause is lifted by `account`._

inherits Ownable:
### OwnershipTransferred

```solidity
event OwnershipTransferred(address previousOwner, address newOwner)
```

inherits ERC1155:
inherits IERC1155Errors:
inherits IERC1155MetadataURI:
inherits IERC1155:
### TransferSingle

```solidity
event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)
```

_Emitted when `value` amount of tokens of type `id` are transferred from `from` to `to` by `operator`._

### TransferBatch

```solidity
event TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)
```

_Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all
transfers._

### ApprovalForAll

```solidity
event ApprovalForAll(address account, address operator, bool approved)
```

_Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to
`approved`._

### URI

```solidity
event URI(string value, uint256 id)
```

_Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.

If an {URI} event was emitted for `id`, the standard
https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value
returned by {IERC1155MetadataURI-uri}._

inherits ERC165:
inherits IERC165:

