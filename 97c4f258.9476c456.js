(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(r,".").concat(u)]||s[u]||d[u]||o;return n?i.a.createElement(m,b(b({ref:t},c),{},{components:n})):i.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(107)),r={title:"Configuring Your Bee Node",id:"configuration"},b={unversionedId:"installation/configuration",id:"installation/configuration",isDocsHomePage:!1,title:"Configuring Your Bee Node",description:"Your Bee node can be configured by adding arguments terminal command on startup.",source:"@site/docs/installation/configuration.md",permalink:"/docs/installation/configuration",editUrl:"https://github.com/ethersphere/docs.github.io/docs/installation/configuration.md",sidebar:"Balls",previous:{title:"Quick Start",permalink:"/docs/installation/quick-start"},next:{title:"Build from Source",permalink:"/docs/installation/build-from-source"}},l=[{value:"Configuration file",id:"configuration-file",children:[]},{value:"Automatically generate a config file",id:"automatically-generate-a-config-file",children:[]},{value:"Configuration Options",id:"configuration-options",children:[{value:"Global",id:"global",children:[]},{value:"Start",id:"start",children:[]},{value:"--resolver-options",id:"--resolver-options",children:[]},{value:"Environment variables",id:"environment-variables",children:[]},{value:"Precedence Order of Configuration",id:"precedence-order-of-configuration",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Your Bee node can be configured by adding arguments terminal command on startup. "),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"bee start --help")," in your Terminal to get the list of available command line arguments."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("p",null,"In this example, we change the port that the Bee API runs on, enable the Debug API, and set it to listen on port 6666."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"bee start \\\n  --api-addr=:8888 \\\n  --debug-api-enable=true \\\n  --debug-api-addr=:6666\n")),Object(o.b)("h3",{id:"configuration-file"},"Configuration file"),Object(o.b)("p",null,"Bee can also be configured by providing a yaml configuration file using the ",Object(o.b)("inlineCode",{parentName:"p"},"--config")," flag."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"bee start --config ~/bee-config.yaml \n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"bee printconfig &> bee-default.yaml")," to print a default version of the configuration file."))),Object(o.b)("h3",{id:"automatically-generate-a-config-file"},"Automatically generate a config file"),Object(o.b)("p",null,"Configuration files can be easily generated by simply substituting the ",Object(o.b)("inlineCode",{parentName:"p"},"start")," command with ",Object(o.b)("inlineCode",{parentName:"p"},"printconfig")," when starting Bee using the command line."),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("p",null,"Here we substitute ",Object(o.b)("inlineCode",{parentName:"p"},"start")," for ",Object(o.b)("inlineCode",{parentName:"p"},"printconfig")," when specifying arguments at the command line."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"bee printconfig \\\n  --verbosity=5 \\\n  &> bee-config.yaml\n")),Object(o.b)("p",null,"This produces the following file contents, showing the default configuration of Bee, with some added log verbosity:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'api-addr: :8080\nbootnode:\n- /dnsaddr/bootnode.ethswarm.org\nconfig: /Users/sig/.bee.yaml\ncors-allowed-origins: []\ndata-dir: /Users/sig/.bee\ndb-capacity: "5000000"\ndebug-api-addr: :6060\ndebug-api-enable: false\nglobal-pinning-enable: false\nhelp: false\nnat-addr: ""\nnetwork-id: "1"\np2p-addr: :7070\np2p-quic-enable: false\np2p-ws-enable: false\npassword: ""\npassword-file: ""\npayment-threshold: "100000"\npayment-tolerance: "10000"\ntracing-enable: false\ntracing-endpoint: 127.0.0.1:6831\ntracing-service-name: bee\nverbosity: "5"\nwelcome-message: ""\n')),Object(o.b)("h2",{id:"configuration-options"},"Configuration Options"),Object(o.b)("p",null,"Bee provides the following options to customise your node."),Object(o.b)("h3",{id:"global"},"Global"),Object(o.b)("h4",{id:"--config"},"--config"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"/home/<user>/.bee.yaml")),Object(o.b)("p",null,"The location of a yaml configuration file containing configuration instructions. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#configuration-file"}),"configuration"),"."),Object(o.b)("h3",{id:"start"},"Start"),Object(o.b)("h4",{id:"--api-addr"},"--api-addr"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," :8080"),Object(o.b)("p",null,"The ip and port the API will serve http requests from. Ommiting the IP part of the address will cause the server to listen to all requests. Argument values are of the form '132.132.132.132:8080'."),Object(o.b)("h4",{id:"--bootnode"},"--bootnode"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"/dnsaddr/bootnode.ethswarm.org")),Object(o.b)("p",null,"This is a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/multiformats/multiaddr"}),"multiaddr")," specifying the Bee bootnodes used for bootstrapping the network, it can be multiple values. "),Object(o.b)("p",null,"By default a node connects to the Swarm mainnet.  When using a private or test network, network specific bootnodes must be set. "),Object(o.b)("p",null,"Any Bee node in a network can act as a bootnode."),Object(o.b)("h4",{id:"--clef-signer-enable"},"--clef-signer-enable"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Set this to true to enable signing using Ethereum's 'Clef' external signer. Clef is an new feature which requires a corresponding rules files or running in advanced mode to allow for auto-signing of handshakes and cheques."),Object(o.b)("h4",{id:"--clef-signer-endpoint"},"--clef-signer-endpoint"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("strong",{parentName:"p"},"default path for clef for each host operating system")),Object(o.b)("p",null,"You may also specify a custom ipc file path for your Clef signer."),Object(o.b)("h4",{id:"--cors-allowed-origins"},"--cors-allowed-origins"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"[]")),Object(o.b)("p",null,"Http origin domains or wildcards defining these, which the API will allow responses to, e.g."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),'$ bee start --cors-allowed-origins="*"\n$ bee start --cors-allowed-origins="https://website.ethswarm.org"\n')),Object(o.b)("h4",{id:"--data-dir"},"--data-dir"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"/home/<user>/.bee")),Object(o.b)("p",null,"The location on your disk where Bee stores it's data. This consists of the following three types of data..."),Object(o.b)("h5",{id:"1-chunk-data"},"1. Chunk Data"),Object(o.b)("p",null,"This consists of chunks and files that you have pinned locally, cached chunks you have requested, or chunks within your radius of responsibility which you are responsible for serving to your peers."),Object(o.b)("h5",{id:"2-state-data"},"2. State Data"),Object(o.b)("p",null,"This is information about the local state of your Bee node."),Object(o.b)("h5",{id:"3-keystore-data"},"3. Keystore Data"),Object(o.b)("p",null,"These files contain encrypted versions of your private key and should be backed up and kept private."),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Keep the key files in your keystore data directory safe! "),Object(o.b)("p",{parentName:"div"},"They are the cryptographic proof of your network identity and cannot be recovered."))),Object(o.b)("h4",{id:"--db-capacity"},"--db-capacity"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"5000000")),Object(o.b)("p",null,"Chunk database capacity in chunks. A chunk is 4096 kb in size, so the total database capacity in kb can be estimated as ",Object(o.b)("inlineCode",{parentName:"p"},"db-capacity * 4096"),". The default 5,000,000 chunks is therefore approximately 20.5gb. We recommend a minimum of 2.5gb capacity for a node to be able to effectively function in the network. Light nodes that do not participate in storing may be able to specify less."),Object(o.b)("h4",{id:"--debug-api-addr"},"--debug-api-addr"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},":6060")),Object(o.b)("p",null,"The IP and port the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-reference/api-reference"}),"Debug API")," will serve http requests from. "),Object(o.b)("p",null,"Ommiting the IP part of the address will cause the server to listen to all requests."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--debug-api-enable")," must be set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h4",{id:"--debug-api-enable"},"--debug-api-enable"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Set this to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to enable access to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-reference/api-reference"}),"Debug API")),Object(o.b)("h4",{id:"--gateway-mode"},"--gateway-mode"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Set this to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to disable a set of sensitive features in the API to ensure that it is safe to expose your ",Object(o.b)("inlineCode",{parentName:"p"},"api-addr")," to the public internet."),Object(o.b)("h4",{id:"--global-pinning-enable"},"--global-pinning-enable"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Enables the Global Pinning functionality when set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h4",{id:"--nat-address"},"--nat-address"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},'""')),Object(o.b)("p",null,"Sets the expected public IP. Normally this is generated automatically, but in certain circumstances it may be desirable to set it manually."),Object(o.b)("h4",{id:"--network-id"},"--network-id"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"1")),Object(o.b)("p",null,"The network ID for which to accept new connections. Set to 1 for mainnet."),Object(o.b)("h4",{id:"--p2p-addr"},"--p2p-addr"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},":7070")),Object(o.b)("p",null,"The ip and port to listen for p2p protocol messages."),Object(o.b)("h4",{id:"--p2p-quic-enable"},"--p2p-quic-enable"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("h4",{id:"--p2p-ws-enable"},"--p2p-ws-enable"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Enables web-sockets transport for p2p communications."),Object(o.b)("h4",{id:"--password"},"--password"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},'""')),Object(o.b)("p",null,"Password used to decrypt Swarm identity keys. "),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Passing passwords as command line arguments is insecure. Use a password file or environment variables in production environments."))),Object(o.b)("h4",{id:"--password-file"},"--password-file"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},'""')),Object(o.b)("p",null,"The path to a file that contains password for decrypting keys. The empty string assumes no file is presented."),Object(o.b)("h4",{id:"--payment-early"},"--payment-early"),Object(o.b)("p",null,"Amount in BZZ below the peers payment threshold which causes Bee to initiate settlement (default 10000)"),Object(o.b)("h4",{id:"--payment-threshold"},"--payment-threshold"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"100000")),Object(o.b)("p",null,"The threshold in BZZ where you expect to get paid from your peers."),Object(o.b)("h4",{id:"--payment-tolerance"},"--payment-tolerance"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"10000")),Object(o.b)("p",null,"The excess debt above payment threshold in BZZ where you disconnect from your peer."),Object(o.b)("h3",{id:"--resolver-options"},"--resolver-options"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," eth:0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"),Object(o.b)("p",null,"ENS API endpoint for a TLD, with contract address. Multiple values can be provided. "),Object(o.b)("p",null,"Settings should be provided in the format ",Object(o.b)("inlineCode",{parentName:"p"},"[tld:][contract-addr@]url")),Object(o.b)("p",null,"A default top level domain and resolver contract address are provided, but an ENS/Geth endpoint must be provided to enable this functionality."),Object(o.b)("h4",{id:"--standalone"},"--standalone"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Set this flag if we would like the node not to try to connect to the network. Useful for development."),Object(o.b)("h4",{id:"--swap-enable"},"--swap-enable"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"true")),Object(o.b)("h4",{id:"--swap-endpoint"},"--swap-endpoint"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:8545")),Object(o.b)("p",null,"SWAP ethereum blockchain endpoint."),Object(o.b)("h4",{id:"--swap-factory-address"},"--swap-factory-address"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"anointed contract for the current blockchain id")),Object(o.b)("h4",{id:"--swap-initial-deposit"},"--swap-initial-deposit"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"100000000")),Object(o.b)("h4",{id:"--tracing-enable"},"--tracing-enable"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Send tracing spans to the tracing service. More information how to configure and visualize tracing data is available on /docs/bee-developers/useful-dev-info#tracing."),Object(o.b)("h4",{id:"--tracing-endpoint"},"--tracing-endpoint"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"127.0.0.1:6831")),Object(o.b)("p",null,"The URL where the tracing service listens for Thrift protocol UDP messages."),Object(o.b)("h4",{id:"--tracing-service-name"},"--tracing-service-name"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"bee")),Object(o.b)("p",null,"Bee service identifier in tracing spans."),Object(o.b)("h4",{id:"--verbosity"},"--verbosity"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},"info")),Object(o.b)("p",null,"0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=trace"),Object(o.b)("h4",{id:"--welcome-message"},"--welcome-message"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"default")," ",Object(o.b)("inlineCode",{parentName:"p"},'""')),Object(o.b)("p",null,"Custom welcome message to be displayed to peers on succesful connection."),Object(o.b)("h3",{id:"environment-variables"},"Environment variables"),Object(o.b)("p",null,"Bee config may also be passed using environment variables."),Object(o.b)("p",null,"Environment variables are set as variables in your operating systems session or systemd configuration file. To set an environment variable, type the following in your terminal session."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ export VARIABLE_NAME=variableValue\n")),Object(o.b)("p",null,"Verify if it is correctly set by running ",Object(o.b)("inlineCode",{parentName:"p"},"echo $VARIABLE_NAME"),"."),Object(o.b)("p",null,"All available configuration options are also available as prefixed, captilised and underscored environment variables."),Object(o.b)("p",null,"e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"--api-addr")," becomes ",Object(o.b)("inlineCode",{parentName:"p"},"BEE_API_ADDR"),"."),Object(o.b)("h3",{id:"precedence-order-of-configuration"},"Precedence Order of Configuration"),Object(o.b)("p",null,"Configuration is processed in the following ascending priority order of preference:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Command Line Variables"),Object(o.b)("li",{parentName:"ol"},"Environment Variables"),Object(o.b)("li",{parentName:"ol"},"Configuration File")))}p.isMDXComponent=!0}}]);