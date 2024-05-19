# Solidity API

## VoluntariadoUFV

### Contract
VoluntariadoUFV : github/hugocis/VoluntariadoUFV/contracts/VoluntariadoUFV.sol

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

