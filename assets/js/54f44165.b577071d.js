"use strict";(self.webpackChunkgaucho_website=self.webpackChunkgaucho_website||[]).push([[152],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9170:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1},s="Installation",u={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Gaucho is only available for amd64bit systems, you may need to build Gaucho from source code if your system is not available",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/gaucho/docs/getting-started/installation",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/gaucho/docs/intro"},next:{title:"Creating Tasks",permalink:"/gaucho/docs/getting-started/creating-tasks"}},p=[{value:"Linux",id:"linux",children:[{value:"Installing Snap",id:"installing-snap",children:[]}]},{value:"Windows",id:"windows",children:[]},{value:"Mac",id:"mac",children:[]}],c={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Gaucho is only available for amd64bit systems, you may need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced-guides/build-from-source"},"build Gaucho from source code")," if your system is not available"))),(0,i.kt)("p",null,"Before installing Gaucho, you will need to ",(0,i.kt)("a",{parentName:"p",href:"/download"},"download")," a version suitable for your system."),(0,i.kt)("h2",{id:"linux"},"Linux"),(0,i.kt)("p",null,"There are several options available to install Gaucho in Linux systems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"zip")," folder containing a binary file along with all the required files to execute directly in Linux systems"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".deb")," file for Debian and Ubuntu systems. You can install the package using a suitable installer or running   ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ./gaucho.deb\n"))),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"https://appimage.org/"},"AppImage")," file that can be executed directly or installed in multiple Linux systems"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},".snap")," file for Ubuntu-based systems. If you plan on installing the snap version, please follow the instructions below.")),(0,i.kt)("h3",{id:"installing-snap"},"Installing Snap"),(0,i.kt)("p",null,"Gaucho is published in the ",(0,i.kt)("a",{parentName:"p",href:"https://snapcraft.io"},"Snap Store")," and can be downloaded and installed directly from there."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://snapcraft.io/gaucho"},(0,i.kt)("img",{parentName:"a",src:"https://snapcraft.io/static/images/badges/en/snap-store-black.svg",alt:"Get it from the Snap Store"}))),(0,i.kt)("p",null,"Alternatively it can be installed from the Ubuntu Store or using the terminal."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"From the Ubuntu Store"),(0,i.kt)("br",{parentName:"p"}),"\n",'Go to the Ubuntu Software Store and search for "Gaucho". Then click on "install".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ubuntu Store Gaucho",src:n(3857).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using Snap"),(0,i.kt)("br",{parentName:"p"}),"\n","You can install the snap version of Gaucho using the terminal instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"snap install gaucho\n")),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("p",null,"You can run Gaucho directly as a portable ",(0,i.kt)("inlineCode",{parentName:"p"},"gaucho.x.x.x.exe")," file, no installation required."),(0,i.kt)("p",null,"Alternatively, you can execute the installer ",(0,i.kt)("inlineCode",{parentName:"p"},"gauchoSetup.x.x.x.exe"),". The installer will guide you through the process."),(0,i.kt)("h2",{id:"mac"},"Mac"),(0,i.kt)("p",null,"The compressed folder contains the standalone app to be executed or installed in mac. An invalid certificate warning may appear."))}d.isMDXComponent=!0},3857:function(e,t){t.Z="data:image/png;base64,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"}}]);