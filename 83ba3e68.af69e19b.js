(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,h=b["".concat(i,".").concat(p)]||b[p]||u[p]||o;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(107)),i={title:"Start Your Node",id:"start-your-node"},c={unversionedId:"getting-started/start-your-node",id:"getting-started/start-your-node",isDocsHomePage:!1,title:"Start Your Node",description:"With Bee installed, simply type bee start in your Terminal.",source:"@site/docs/getting-started/start-your-node.md",permalink:"/docs/getting-started/start-your-node",editUrl:"https://github.com/ethersphere/docs.github.io/docs/getting-started/start-your-node.md",sidebar:"Balls",previous:{title:"Connectivity",permalink:"/docs/installation/connectivity"},next:{title:"Working With Your Node",permalink:"/docs/getting-started/working-with-your-node"}},s=[{value:"Create Your Wallet",id:"create-your-wallet",children:[]},{value:"SWAP Bandwidth Incentives",id:"swap-bandwidth-incentives",children:[]},{value:"Join the Swarm",id:"join-the-swarm",children:[]},{value:"Getting help",id:"getting-help",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With Bee installed, simply type ",Object(o.b)("inlineCode",{parentName:"p"},"bee start")," in your Terminal. "),Object(o.b)("p",null,"This command will start Bee for the first time and prompt you to create your Bee wallet."),Object(o.b)("h2",{id:"create-your-wallet"},"Create Your Wallet"),Object(o.b)("p",null,"When you first run Bee, you will be asked to input a user password. It is important to choose a strong unique password, as this will protect your valuable ",Object(o.b)("strong",{parentName:"p"},"private key")," which is generated during startup. "),Object(o.b)("p",null,"This secret key is stored encrypted in your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/configuration#--data-dir"}),"Bee data directory")," (usually ",Object(o.b)("inlineCode",{parentName:"p"},"~/.bee"),"). It represents your Swarm Address - your anonymous identity in Swarm."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"bee start\n> Welcome to the Swarm.... Bzzz Bzzzz Bzzzz\n                \\     /\n            \\    o ^ o    /\n              \\ (     ) /\n   ____________(%%%%%%%)____________\n  (     /   /  )%%%%%%%(  \\   \\     )\n  (___/___/__/           \\__\\___\\___)\n     (     /  /(%%%%%%%)\\  \\     )\n      (__/___/ (%%%%%%%) \\___\\__)\n              /(       )\\\n            /   (%%%%%)   \\\n                 (%%%)\n                   !\nPassword:\n")),Object(o.b)("h2",{id:"swap-bandwidth-incentives"},"SWAP Bandwidth Incentives"),Object(o.b)("p",null,"SWAP mode is now enabled by default for testing on Swarm mainnet, you must include configuration paramaters specifying a valid ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://goerli.net/"}),"Goerli Testnet")," RPC endpoint. You can run your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/goerli/testnet"}),"own Goerli node"),", or use a RPC provider such as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://rpc.slock.it/goerli"}),"rpc.slock.it/goerli")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://infura.io/"}),"Infura"),"."),Object(o.b)("p",null,"When running your Bee node with SWAP enabled for the first time, your Bee node will deploy a 'chequebook' contract using the canonical factory contract which is deployed by Swarm. A factory is used to ensure every node is using legitimate and verifiable chequebook contracts. Once the chequebook is deployed, Bee will deposit a certain amount of gBZZ (Goerli BZZ tokens) in the chequebook contract so that it can pay other nodes in return for their services."),Object(o.b)("p",null,"In order to interact with the Goerli blockchain to deploy contracts and make payments, we must fund our account with Goerli ETH (GETH), and to make payments in return for services our account must also own some Goerli BZZ (gBZZ). We can get both tokens for trial purposes from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://faucet.ethswarm.org/"}),"Swarm Goerli Faucet"),"."),Object(o.b)("p",null,"To find out your Ethereum address, we can simply run our Bee node and point it at the Goerli rpc endpoint."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"bee start \\\n  --verbosity 5 \\\n  --swap-endpoint https://rpc.slock.it/goerli \\\n  --debug-api-enable\n  --bootnode /dnsaddr/bootnode.staging.ethswarm.org\n")),Object(o.b)("p",null,"Since we haven't yet funded our account, we will see a message in our logs asking us to fund our Ethereum account. Navigate to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://faucet.ethswarm.org/"}),"Swarm Goerli Faucet")," and submit your address, ensuring it is prepended with the characters ",Object(o.b)("inlineCode",{parentName:"p"},"0x")," to the faucet, fill out the recaptcha and wait for confirmation that your gETH and gBZZ have been dispensed."),Object(o.b)("p",null,"Now, we can run our Bee node and we will start to see Bee creating and waiting for transactions to complete. Please be patient as this might take a few moments."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"INFO[2020-09-28T14:59:38+01:00] no chequebook found, deploying new one.\nINFO[2020-09-28T14:59:39+01:00] deploying new chequebook in transaction 5c2949675b49d069c4c5755e1901aa59fa4224ea2a763efe78a5293f36e04370\nINFO[2020-09-28T14:59:57+01:00] deployed chequebook at address a22c864fe5bd53cc3ae130709647a0e60e67f714\nINFO[2020-09-28T14:59:57+01:00] depositing 100000000 token into new chequebook\nINFO[2020-09-28T14:59:57+01:00] sent deposit transaction c25714a0569131707513c68f6108553bb861131253230a606a26d390e790e0f1\nINFO[2020-09-28T15:00:12+01:00] successfully deposited to chequebook\n")),Object(o.b)("p",null,"Now our chequebook is deployed, and credited with an initial deposit of gBZZ ready to be given to reward our fellow busy Bee nodes for their services. You will also provide services, and be rewarded by your peers for services you provide for them."),Object(o.b)("p",null,"For more info on bandwidth accounting, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/swap"}),"SWAP Bandwidth Accounting"),"."),Object(o.b)("h2",{id:"join-the-swarm"},"Join the Swarm"),Object(o.b)("p",null,"If all goes well, you will see your node automatically begin to connect to other Bee nodes all over the world. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"INFO[2020-08-29T11:55:16Z] greeting <Hi I am a very buzzy bee bzzzz bzzz bzz. \ud83d\udc1d> from peer: b6ae5b22d4dc93ce5ee46a9799ef5975d436eb63a4b085bfc104fcdcbda3b82c\n")),Object(o.b)("p",null,"Now your node will begin to request chunks of data that fall within your ",Object(o.b)("em",{parentName:"p"},"radius of responsibilty")," - data that you will then serve to other p2p clients running in the swarm. Your node will then begin to respond to requests for these chunks from other peers, for which you will soon be rewarded in BZZ."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Incentivisation")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In Swarm, storing chunks of data, serving and forwarding them to other nodes earns you rewards - get ready for exciting incentivisation features coming soon at Swarm Live!"))),Object(o.b)("p",null,"Your Bee client has now generated an elliptic curve keypair similar to an Ethereum wallet. These are stored in your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/configuration#--data-dir"}),"data directory"),", in the ",Object(o.b)("inlineCode",{parentName:"p"},"keys")," folder."),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Keep Your Keys and Password Safe!")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Your keys and password are very important, back these files up and store them in a secure place that only you have access to. With great privacy comes great responsibility - while no-one will ever be able to guess your key, but you will not be able to recover them if you lose them either, so be sure to look after them well and keep secure backups."))),Object(o.b)("h2",{id:"getting-help"},"Getting help"),Object(o.b)("p",null,"The CLI has documentation build-in. Running ",Object(o.b)("inlineCode",{parentName:"p"},"bee")," gives you an entry point to the documentation. Running ",Object(o.b)("inlineCode",{parentName:"p"},"bee start -h")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bee start --help")," will tell you how you can configure you bee node via the command line arguments."),Object(o.b)("p",null,"You may also check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/configuration"}),"configuration guide"),", or simply run your Bee terminal command with the ",Object(o.b)("inlineCode",{parentName:"p"},"--help")," flag, eg. ",Object(o.b)("inlineCode",{parentName:"p"},"bee start --help")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bee --help"),"."))}d.isMDXComponent=!0}}]);