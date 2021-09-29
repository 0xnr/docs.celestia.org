<!--
order: 5
-->
# Networking

- [Wire Format](#wire-format)
  - [AvailableData](#availabledata)
  - [AvailableDataRow](#availabledatarow)
  - [ConsensusProposal](#consensusproposal)
  - [WireTxPayForMessage](#wiretxpayformessage)
- [Invalid Erasure Coding](#invalid-erasure-coding)
  - [ShareProof](#shareproof)
  - [BadEncodingFraudProof](#badencodingfraudproof)
- [Invalid State Update](#invalid-state-update)
  - [StateFraudProof](#statefraudproof)

## Wire Format

### AvailableData

| name                | type                                      | description   |
|---------------------|-------------------------------------------|---------------|
| `availableDataRows` | [AvailableDataRow](#availabledatarow)`[]` | List of rows. |

### AvailableDataRow

| name     | type                                    | description      |
|----------|-----------------------------------------|------------------|
| `shares` | [Share](./data_structures.md#share)`[]` | Shares in a row. |

### ConsensusProposal

Defined as `ConsensusProposal`:

```protobuf
message ConsensusProposal {
  SignedMsgType type = 1;
  int32 round = 2;
  int32 pol_round = 3;
  // 32-byte hash
  // Proposed block header
  Header header = 4;
  AvailableDataHeader da_header = 5;
  // 64-byte signature
  bytes proposer_signature = 6;
}
```

When receiving a new block proposal `proposal` from the network, the following steps are performed in order. _Must_ indicates that peers must be blacklisted (to prevent DoS attacks) and _should_ indicates that the network message can simply be ignored.

1. `proposal.type` must be a `SignedMsgType`.
1. `proposal.round` is processed identically to Tendermint.
1. `proposal.pol_round` is processed identically to Tendermint.
1. `proposal.header` must be well-formed.
1. `proposal.header.version.block` must be [`VERSION_BLOCK`](./consensus.md#constants).
1. `proposal.header.version.app` must be [`VERSION_APP`](./consensus.md#constants).
1. `proposal.header.height` should be previous known height + 1.
1. `proposal.header.chain_id` must be [`CHAIN_ID`](./consensus.md#constants).
1. `proposal.header.time` is processed identically to Tendermint.
1. `proposal.header.last_header_hash` must be previous block's header hash.
1. `proposal.header.last_commit_hash` must be the previous block's commit hash.
1. `proposal.header.consensus_hash` must be the hash of [consensus parameters](./data_structures.md#header).
1. `proposal.header.state_commitment` must be the state root after applying the previous block's transactions.
1. `proposal.header.available_data_original_shares_used` must be at most [`AVAILABLE_DATA_ORIGINAL_SQUARE_MAX ** 2`](./consensus.md#constants).
1. `proposal.header.available_data_root` must be the [root](./data_structures.md#availabledataheader) of `proposal.da_header`.
1. `proposal.header.proposer_address` must be the [correct leader](./consensus.md#leader-selection).
1. `proposal.da_header` must be well-formed.
1. The number of elements in `proposal.da_header.row_roots` and `proposal.da_header.row_roots` must be equal.
1. The number of elements in `proposal.da_header.row_roots` must be the same as computed [here](./data_structures.md#header).
1. `proposal.proposer_signature` must be a valid [digital signature](./data_structures.md#public-key-cryptography) over the header hash of `proposal.header` that recovers to `proposal.header.proposer_address`.
1. For [full nodes](./node_types.md#node-type-definitions), `proposal.da_header` must be the result of computing the roots of the shares (received separately).
1. For [light nodes](./node_types.md#node-type-definitions), `proposal.da_header` should be sampled from for availability.

### WireTxPayForMessage

Defined as `WireTxPayForMessage`:

```protobuf
message WireTxPayForMessage {
  TransactionFee fee = 1;
  uint64 nonce = 2;
  // 8-byte namespace ID
  bytes message_namespace_id = 3;
  uint64 message_size = 4;
  bytes message = 5;
  repeated MessageCommitmentAndSignature message_commitment_and_signature = 6;
}
```

Accepting a `WireTxPayForMessage` into the mempool requires different logic than other transactions in Celestia, since it leverages the paradigm of block proposers being able to malleate transaction data. Unlike [SignedTransactionDataPayForMessage](./data_structures.md#signedtransactiondatapayformessage) (the canonical data type that is included in blocks and committed to with a data root in the block header), each `WireTxPayForMessage` (the over-the-wire representation of the same) has potentially multiple signatures.

Transaction senders who want to pay for a message will create a [SignedTransactionDataPayForMessage](./data_structures.md#signedtransactiondatapayformessage) object, `stx`, filling in the `stx.messageShareCommitment` field [based on the non-interactive default rules](../rationale/message_block_layout.md#non-interactive-default-rules) for `k = AVAILABLE_DATA_ORIGINAL_SQUARE_MAX`, then signing it to get a [transaction](./data_structures.md#transaction) `tx`. This process is repeated with successively smaller `k`s, decreasing by powers of 2 until `k * k <= stx.messageSize`. At that point, there would be insufficient shares to include both the message and transaction. Using the rest of the signed transaction data along with the pairs of `(tx.signedTransactionData.messageShareCommitment, tx.signature)`, a `WireTxPayForMessage` object is constructed.

Receiving a `WireTxPayForMessage` object from the network follows the reverse process: for each `message_commitment_and_signature`, verify using the [based on the non-interactive default rules](../rationale/message_block_layout.md#non-interactive-default-rules) that the signature is valid.

## Invalid Erasure Coding

If a malicious block producer incorrectly computes the 2D Reed-Solomon code for a block's data, a fraud proof for this can be presented. We assume that the light clients have the [AvailableDataHeader](./data_structures.md#availabledataheader) and the [Header](./data_structures.md#header) for each block. Hence, given a [ShareProof](#shareproof), they can verify if the `rowRoot` or `colRoot` specified by `isCol` and `position` commits to the corresponding [Share](./data_structures.md#share). Similarly, given the `height` of a block, they can access all elements within the [AvailableDataHeader](./data_structures.md#availabledataheader) and the [Header](./data_structures.md#header) of the block.

### ShareProof

| name       | type                                                                                        | description                                                                                      |
|------------|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| `share`    | [Share](./data_structures.md#share)                                                         | The share.                                                                                        |
| `proof`    | [NamespaceMerkleTreeInclusionProof](./data_structures.md#namespacemerkletreeinclusionproof) | The Merkle proof of the share in the offending row or column root.                                |
| `isCol`    | `bool`                                                                                      | A Boolean indicating if the proof is from a row root or column root; `false` if it is a row root. |
| `position` | `uint64`                                                                                    | The index of the share in the offending row or column.                                            |

### BadEncodingFraudProof

Defined as `BadEncodingFraudProof`:

```protobuf
// https://github.com/celestiaorg/celestia-specs/blob/master/specs/networking.md#badencodingfraudproof
message BadEncodingFraudProof {
  // height of the block with the offending row or column
  int64 height = 1;
  // the available shares in the offending row or column and their Merkle proofs
  // array of ShareProofs
  repeated ShareProof shareProofs = 2;
  // a Boolean indicating if it is an offending row or column; false if it is a row
  bool isCol = 3;
  // the index of the offending row or column in the square
  uint64 position = 4;
}
```

| name          | type                                                                                  | description                                                                                           |
|---------------|---------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `height`      | [Height](./data_structures.md#type-aliases)                                           | Height of the block with the offending row or column.                                                 |
| `shareProofs` | [ShareProof](#shareproof)`[]`                                                         | The available shares in the offending row or column.                                                 |
| `isCol`       | `bool`                                                                                | A Boolean indicating if it is an offending row or column; `false` if it is a row.                     |
| `position`    | `uint64`                                                                              | The index of the offending row or column in the square.                                               |

## Invalid State Update

If a malicious block producer incorrectly computes the state, a fraud proof for this can be presented. We assume that the light clients have the [AvailableDataHeader](./data_structures.md#availabledataheader) and the [Header](./data_structures.md#header) for each block. Hence, given a [ShareProof](#shareproof), they can verify if the `rowRoot` or `colRoot` specified by `isCol` and `position` commits to the corresponding [Share](./data_structures.md#share). Similarly, given the `height` of a block, they can access all elements within the [AvailableDataHeader](./data_structures.md#availabledataheader) and the [Header](./data_structures.md#header) of the block.

### StateFraudProof

Defined as `StateFraudProof`:

```protobuf
// https://github.com/celestiaorg/celestia-specs/blob/master/specs/networking.md#statefraudproof
message StateFraudProof {
  // height of the block with the intermediate state roots 
  // Subtracting one from height gives the height of the block with the transactions.
  int64 height = 1;
  // shares containing the transactions and their Merkle proofs
  // isCol within the ShareProof must be false.
  // array of ShareProofs
  repeated ShareProof transactionShareProofs = 2;
  // shares containing the intermediate state roots and their Merkle proofs
  // isCol within the ShareProof must be false.
  // array of ShareProofs
  repeated ShareProof isrShareProofs = 3;
  // index for connecting the WrappedIntermediateStateRoot and WrappedTransaction after shares are parsed
  uint64 index = 4;
  // state elements that were changed by the transactions
  // array of StateElements
  repeated StateElement intermediateStateElements = 5;
  // sparse Merkle tree inclusion proofs for the state elements
  // array of SparseMerkleTreeInclusionProofs
  repeated SparseMerkleTreeInclusionProof stateInclusionProofs = 6;
}
```

| name                       | type                                                                                     | description                                                                                                                                                                                            |
|----------------------------|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `height`                   | [Height](./data_structures.md#type-aliases)                                              | Height of the block with the intermediate state roots. Subtracting one from `height` gives the height of the block with the transactions.                                                             |
| `transactionShareProofs`   | [ShareProof](#shareproof)`[]`                                                            | `isCol` of type `bool` must be `false`.                                                                                                                                                                |
| `isrShareProofs`           | [ShareProof](#shareproof)`[]`                                                            | `isCol` of type `bool` must be `false`.                                                                                                                                                                |
| `index`                    | `uint64`                                                                                 | Index for connecting the [WrappedIntermediateStateRoot](./data_structures.md#wrappedintermediatestateroot) and [WrappedTransaction](./data_structures.md#wrappedtransaction) after shares are parsed. |
| `intermediateStateElements`| [StateElement](./data_structures.md#stateelement)`[]`                                    | State elements that were changed by the transactions.                                                                                                                                                  |
| `stateInclusionProofs`     | [SparseMerkleTreeInclusionProof](./data_structures.md#sparsemerkletreeinclusionproof)`[]`| SparseMerkleTree inclusion proofs for the state elements.                                                                                                                                      |
