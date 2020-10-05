(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(2),s=a(6),r=(a(0),a(107)),c={title:"PSS Messaging",id:"pss"},o={unversionedId:"advanced/pss",id:"advanced/pss",isDocsHomePage:!1,title:"PSS Messaging",description:"Out of the ashes of Ethereum's vision for a leak-proof decentralised anonymous messaging system - Whisper - comes PSS. Swarm provides the ability to send messages that appear to be normal Swarm traffic, but are in fact messages that may be received and decrypted to reveal their content only by the specific nodes they were intended to be received by.",source:"@site/docs/advanced/pss.md",permalink:"/docs/advanced/pss",editUrl:"https://github.com/ethersphere/docs.github.io/docs/advanced/pss.md",sidebar:"Balls",previous:{title:"Store with Encryption",permalink:"/docs/getting-started/store-with-encryption"},next:{title:"Track Upload Status",permalink:"/docs/advanced/tags"}},i=[{value:"Subscribe and Receive Messages",id:"subscribe-and-receive-messages",children:[]},{value:"Send Messages",id:"send-messages",children:[]},{value:"Send Messages in a Test Network",id:"send-messages-in-a-test-network",children:[]}],b={rightToc:i};function l(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Out of the ashes of Ethereum's vision for a leak-proof decentralised anonymous messaging system - Whisper - comes PSS. Swarm provides the ability to send messages that appear to be normal Swarm traffic, but are in fact messages that may be received and decrypted to reveal their content only by the specific nodes they were intended to be received by."),Object(r.b)("p",null,"PSS provides a pub-sub facility that can be used for a variety of tasks. Nodes are able to listen to messages received for a specific topic in their nearest neighbourhood and create messages destined for another neighbourhood which are sent over the network using Swarm's usual data dissemination protocols."),Object(r.b)("h3",{id:"subscribe-and-receive-messages"},"Subscribe and Receive Messages"),Object(r.b)("p",null,"Once your Bee node is up and running, you will be able to subscribe to feeds using websockets. For testing, it is useful to use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/crate/websocat/1.0.1"}),"websocat")," command line utility."),Object(r.b)("p",null,"Here we subscribe to the topic ",Object(r.b)("inlineCode",{parentName:"p"},"test-topic")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"websocat ws://localhost:8080/pss/subscribe/test-topic\n")),Object(r.b)("p",null,"Our node is now watching for new messages received in it's nearest neighbourhood."),Object(r.b)("h3",{id:"send-messages"},"Send Messages"),Object(r.b)("p",null,"Messages can be sent simply by sending a ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," request to the PSS api endpoint."),Object(r.b)("p",null,"When sending messages, we must specify a 'target' prefix of the recipients swarm address, a partial address representing their neighbourhood. Currently the length of this prefix is recommended to be two bytes, which will work well until the network has grown to a size of ca. 20-50K nodes. We must also provide the public key, so that Bee can encrypt the message in such a way that it may only be read by the intended recipient."),Object(r.b)("p",null,"For example, if we want to send a PSS message with ",Object(r.b)("strong",{parentName:"p"},"topic")," ",Object(r.b)("inlineCode",{parentName:"p"},"test-topic")," to a node with address..."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"7bc50a5d79cb69fa5a0df519c6cc7b420034faaa61c175b88fc4c683f7c79d96")," "),Object(r.b)("p",null,"...and public key..."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"0349f7b9a6fa41b3a123c64706a072014d27f56accd9a0e92b06fe8516e470d8dd")),Object(r.b)("p",null,"...we must include the ",Object(r.b)("strong",{parentName:"p"},"target")," ",Object(r.b)("inlineCode",{parentName:"p"},"7bc5")," and the public key itself as a query argument."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'curl -XPOST \\\nlocalhost:8082/pss/send/test/7bc5?recipient=0349f7b9a6fa41b3a123c64706a072014d27f56accd9a0e92b06fe8516e470d8dd \\\n--data "Hello Swarm"\n')),Object(r.b)("h3",{id:"send-messages-in-a-test-network"},"Send Messages in a Test Network"),Object(r.b)("p",null,"Now, let's see this in action by setting up two Bee nodes on a test network, connecting them, and sending PSS messages from one to the other."),Object(r.b)("p",null,"First start two Bee nodes. We will start them with distinct ports for the api, debug api and p2p port so that there are no conflicts, since they will be running on the same computer. "),Object(r.b)("p",null,"Run the following command to start the first node. Note that we are passing ",Object(r.b)("inlineCode",{parentName:"p"},'""')," to the ",Object(r.b)("inlineCode",{parentName:"p"},"--bootnode")," argument so that our nodes will not connect to a network."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'bee start \\\n    --api-addr=:8082 \\\n    --debug-api-enable \\\n    --debug-api-addr=:6062 \\\n    --data-dir=/tmp/bee2 \\\n    --bootnode="" \\\n    --p2p-addr=:7072 \\\n    --swap-enable=false\n')),Object(r.b)("p",null,"We must make a note of the Swarm overlay address, underlay address and public key which are created once each node has started. We find this information from the addresses endpoint of the Debug API."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s localhost:6062/addresses | jq\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "overlay": "7bc50a5d79cb69fa5a0df519c6cc7b420034faaa61c175b88fc4c683f7c79d96",\n  "underlay": [\n    "/ip4/127.0.0.1/tcp/7072/p2p/16Uiu2HAmP9i7VoEcaGtHiyB6v7HieoiB9v7GFVZcL2VkSRnFwCHr",\n    "/ip4/192.168.0.10/tcp/7072/p2p/16Uiu2HAmP9i7VoEcaGtHiyB6v7HieoiB9v7GFVZcL2VkSRnFwCHr",\n    "/ip6/::1/tcp/7072/p2p/16Uiu2HAmP9i7VoEcaGtHiyB6v7HieoiB9v7GFVZcL2VkSRnFwCHr"\n  ],\n  "ethereum": "0x0000000000000000000000000000000000000000",\n  "public_key": "0349f7b9a6fa41b3a123c64706a072014d27f56accd9a0e92b06fe8516e470d8dd"\n}\n')),Object(r.b)("p",null,"Now the same for the second node."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'bee start \\\n    --api-addr=:8083 \\\n    --debug-api-enable \\\n    --debug-api-addr=:6063 \\\n    --data-dir=/tmp/bee3 \\\n    --bootnode="" \\\n    --p2p-addr=:7073 \\\n    --swap-enable=false\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s localhost:6063/addresses | jq\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "overlay": "a231764383d7c46c60a6571905e72021a90d506ef8db06750f8a708d93fe706e",\n  "underlay": [\n    "/ip4/127.0.0.1/tcp/7073/p2p/16Uiu2HAmAqJkKJqZjNhuDtepc8eBANM9TvagaWUThfTN5NkfmKTq",\n    "/ip4/192.168.0.10/tcp/7073/p2p/16Uiu2HAmAqJkKJqZjNhuDtepc8eBANM9TvagaWUThfTN5NkfmKTq",\n    "/ip6/::1/tcp/7073/p2p/16Uiu2HAmAqJkKJqZjNhuDtepc8eBANM9TvagaWUThfTN5NkfmKTq",\n    "/ip4/81.98.94.4/tcp/25178/p2p/16Uiu2HAmAqJkKJqZjNhuDtepc8eBANM9TvagaWUThfTN5NkfmKTq"\n  ],\n  "ethereum": "0x0000000000000000000000000000000000000000",\n  "public_key": "02d68d57d9f3fe539990cdf03e7de96d56a5c68b42515bc465acec4edc5cedfe35"\n}\n')),Object(r.b)("p",null,"Because we configured the nodes to start with no bootnodes, neither node should have peers yet."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s localhost:6062/peers | jq\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s localhost:6063/peers | jq\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "peers": []\n}\n')),Object(r.b)("p",null,"Let's connect node 2 to node 1 using the localhost (127.0.0.1) underlay address for node 1 that we have noted earlier."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -XPOST \\\n  localhost:6063/connect/ip4/127.0.0.1/tcp/7072/p2p/16Uiu2HAmP9i7VoEcaGtHiyB6v7HieoiB9v7GFVZcL2VkSRnFwCHr\n")),Object(r.b)("p",null,"Now, if we check our peers endpoint for node 1, we can see our nodes are now peered together."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s localhost:6062/peers | jq\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "peers": [\n    {\n      "address": "a231764383d7c46c60a6571905e72021a90d506ef8db06750f8a708d93fe706e"\n    }\n  ]\n}\n')),Object(r.b)("p",null,"Of course, since we are p2p, node 2 will show node 1 as a peer too."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s localhost:6063/peers | jq\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "peers": [\n    {\n      "address": "7bc50a5d79cb69fa5a0df519c6cc7b420034faaa61c175b88fc4c683f7c79d96"\n    }\n  ]\n}\n')),Object(r.b)("p",null,"We will use ",Object(r.b)("inlineCode",{parentName:"p"},"websocat")," to listen for PSS messages topic ID ",Object(r.b)("inlineCode",{parentName:"p"},"test-topic")," on our first node."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"websocat ws://localhost:8082/pss/subscribe/test-topic\n")),Object(r.b)("p",null,"Now we can use PSS to send a message from our second node to our first node. "),Object(r.b)("p",null,"Since our first node has a 2 byte address prefix of ",Object(r.b)("inlineCode",{parentName:"p"},"a231"),", we will specify this as the ",Object(r.b)("inlineCode",{parentName:"p"},"targets")," section in our POST request's URL. We must also include the public key of the recipient as a query parameter so that the message can be encrypted in a way only our recipient can decrypt."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'curl \\\n  -XPOST "localhost:8083/pss/send/test-topic/7bc5?recipient=0349f7b9a6fa41b3a123c64706a072014d27f56accd9a0e92b06fe8516e470d8dd"\\\n  --data "Hello Swarm"\n')),Object(r.b)("p",null,"The PSS API endpoint will now create a PSS message for it's recipient in the form of a 'Trojan Chunk' and send this into the network so that it may be pushed to the correct neighbourhood. Once it is received by it's destination target it will be decrypted and determined to be a message with the topic we are listening for. Our second node will decrypt the data and we'll see a message pop up in our ",Object(r.b)("inlineCode",{parentName:"p"},"websocat")," console!"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"sig :: ~ \xbb websocat ws://localhost:8082/pss/subscribe/test-topic\nHello Swarm\n")),Object(r.b)("p",null,"Congratulations! \ud83c\udf89 You have sent your first encrypted, zero leak message over Swarm!"))}l.isMDXComponent=!0},107:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var b=s.a.createContext({}),l=function(e){var t=s.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return s.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return a?s.a.createElement(m,o(o({ref:t},b),{},{components:a})):s.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<r;b++)c[b]=a[b];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);