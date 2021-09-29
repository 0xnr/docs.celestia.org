(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{601:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#common-terms-and-expressions"}},[e._v("Common Terms and Expressions")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#system-architecture"}},[e._v("System Architecture")])])]),e._v(" "),a("h2",{attrs:{id:"common-terms-and-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-terms-and-expressions"}},[e._v("#")]),e._v(" Common Terms and Expressions")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("name")]),e._v(" "),a("th",[e._v("description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("App (application)")]),e._v(" "),a("td",[e._v('Alternate name for "'),a("a",{attrs:{href:"https://arxiv.org/abs/1905.09274",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtual sidechain"),a("OutboundLink")],1),e._v('." Celestia apps are sidechains that post all their data onto the Celestia chain to share security.')])]),e._v(" "),a("tr",[a("td",[e._v("Transaction")]),e._v(" "),a("td",[e._v("Request that modifies the consensus-critical state (validator balances and statuses).")])]),e._v(" "),a("tr",[a("td",[e._v("Message")]),e._v(" "),a("td",[e._v("Request that is executed by a non-consensus-critical app.")])])])]),e._v(" "),a("h2",{attrs:{id:"system-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-architecture"}},[e._v("#")]),e._v(" System Architecture")]),e._v(" "),a("p",[e._v("Celestia has a minimal state: the validator set (account balances, validator status, etc.). Changes to the validator set are done with native "),a("em",[e._v("transactions")]),e._v(", distinct from the "),a("em",[e._v("messages")]),e._v(" processed by apps. Transactions are signed and must be processed by clients to determine the validator set, while messages are un-signed data blobs that will usually represent an app's block data.")]),e._v(" "),a("p",[e._v("Transactions pay fees similarly to how they would in a normal blockchain (e.g. Bitcoin), and their side effects are restricted to modifying the validator set and their balances. Transactions can additionally pay fees for the inclusion of a message (identified by a hash) in the same block. The validator set is committed to in the block header, and since the entire system state "),a("em",[e._v("is")]),e._v(" the validator set, this is the only state commitment needed in the header.")]),e._v(" "),a("p",[e._v("One desideratum that will most likely be included is "),a("a",{attrs:{href:"https://github.com/celestiaorg/celestia-specs/blob/066e14fca9de22555abc70dd4bcf4017fd0bfc64/rationale/fees.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("burning a non-proportional amount of coins for each transaction as a network fee"),a("OutboundLink")],1),e._v(". This provides baseline demand for the native coin: as the chain is used more, more coins must be bought then burned to pay for fees.")]),e._v(" "),a("p",[e._v("This architecture has the benefit of allowing a spectrum of clients. Since different components are made available through commitments, client that are only interested in a portion of the block data do not need to download and process the whole block.")]),e._v(" "),a("p",[e._v("Non-consensus full clients have easy and direct access to all the data they need to validate: the transactions. Messages do not need to be validated, as they do not change the state, they simply need to be verified as available.")]),e._v(" "),a("p",[e._v("Light clients are almost identical to full clients here: they simply need to process all the validator set changes (i.e. transactions) and run data availability checks on the rest of the block. Unlike full clients, light clients do not need to verify the signatures of transactions and can instead trust the majority of validators to sign off on validator set changes, with the addition of fraud proofs in case of an invalid signature.")])])}),[],!1,null,null,null);t.default=n.exports}}]);