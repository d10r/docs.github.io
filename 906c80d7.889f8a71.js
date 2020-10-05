(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=d(n),u=a,m=l["".concat(i,".").concat(u)]||l[u]||s[u]||r;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(6),r=(n(0),n(107)),i={title:"Working With Your Node",id:"working-with-your-node"},c={unversionedId:"getting-started/working-with-your-node",id:"getting-started/working-with-your-node",isDocsHomePage:!1,title:"Working With Your Node",description:"Now that you have created your Swarm wallet and your Bee node has begun to participate in the global swarm network, we can use the Debug API to take a closer look at what's happening with your node.",source:"@site/docs/getting-started/working-with-your-node.md",permalink:"/docs/getting-started/working-with-your-node",editUrl:"https://github.com/ethersphere/docs.github.io/docs/getting-started/working-with-your-node.md",sidebar:"Balls",previous:{title:"Start Your Node",permalink:"/docs/getting-started/start-your-node"},next:{title:"Upload and Download Files",permalink:"/docs/getting-started/upload-and-download"}},b=[{value:"Debug API",id:"debug-api",children:[]}],p={rightToc:b};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Now that you have created your Swarm wallet and your Bee node has begun to participate in the global swarm network, we can use the Debug API to take a closer look at what's happening with your node."),Object(r.b)("h3",{id:"debug-api"},"Debug API"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-reference/api-reference"}),"Debug API")," provides a privileged environment where you are able to interact with your Bee node to get more information about the status of your node."),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Never expose your Debug API to the public internet, make sure to use a firewall or bind to ",Object(r.b)("em",{parentName:"p"},"localhost"),", as we have in the example below."))),Object(r.b)("p",null,"To use the Debug API we must first configure Bee to enable it, as it is disabled by default."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ bee start --debug-api-enable --debug-api-addr=localhost:6060\n")),Object(r.b)("h4",{id:"checking-connectivity"},"Checking Connectivity"),Object(r.b)("p",null,"First, let's check how many nodes we are currently connected to."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -s http://localhost:6060/peers | jq '.peers | length'\n23\n")),Object(r.b)("p",null,"Great! We can see that we are currently connected and sharing data with 23 other nodes!"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Here we are using the ",Object(r.b)("inlineCode",{parentName:"p"},"jq")," command line utility to count the amount of objects in the ",Object(r.b)("inlineCode",{parentName:"p"},"peers")," array in the JSON response we have received from our Debug API, learn more about how to install and use ",Object(r.b)("inlineCode",{parentName:"p"},"jq")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://stedolan.github.io/jq/"}),"here"),"."))),Object(r.b)("h4",{id:"inspect-network-topology"},"Inspect Network Topology"),Object(r.b)("p",null,"We can gain even more insight into how your Bee client is becoming a part of the global network your using the ",Object(r.b)("inlineCode",{parentName:"p"},"topology")," endpoint."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET http://localhost:6060/topology | jq\n")),Object(r.b)("p",null,"In this example, our node is beginning to form a healthy network. We hope to see our node adding and connecting to nodes in as many bins as possible. Learn more about promiximity order bins and how your Bee node becomes part of the ordered p2p network in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/find-out-more/the-book-of-swarm"}),"The Book of Swarm"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "baseAddr": "793cdae71d51b0ffc09fecd1c5b063560150cf2e1d55058bad4a659be5894ab1",\n  "population": 159,\n  "connected": 19,\n  "timestamp": "2020-08-27T19:24:16.451187+01:00",\n  "nnLowWatermark": 2,\n  "depth": 4,\n  "bins": {\n    "bin_0": {\n      "population": 77,\n      "connected": 4,\n      "...": "..."\n    },\n    "bin_1": {\n        "population": 37,\n        "connected": 4,\n        }\n    }\n  }\n}\n')),Object(r.b)("p",null,"Find out more about what you can do with the Debug API ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-reference/api-reference"}),"here"),"."))}d.isMDXComponent=!0}}]);