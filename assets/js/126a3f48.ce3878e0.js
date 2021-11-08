"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[5068],{4137:function(e,t,i){i.d(t,{Zo:function(){return s},kt:function(){return m}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(i),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return i?n.createElement(h,a(a({ref:t},s),{},{components:i})):n.createElement(h,a({ref:t},s))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},3702:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=i(7462),r=i(3366),o=(i(7294),i(4137)),a=["components"],p={title:"Introduction to Application Descriptor Files",sidebar_position:1},l=void 0,c={unversionedId:"development/application-descriptor-files/introduction",id:"development/application-descriptor-files/introduction",isDocsHomePage:!1,title:"Introduction to Application Descriptor Files",description:"Every AIR application has an Application Descriptor File, which is used to tell the AIR tools and runtime about the contents of the application and preferences for its display.",source:"@site/docs/development/application-descriptor-files/introduction.md",sourceDirName:"development/application-descriptor-files",slug:"/development/application-descriptor-files/introduction",permalink:"/docs/development/application-descriptor-files/introduction",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/application-descriptor-files/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction to Application Descriptor Files",sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Basics of user interaction",permalink:"/docs/development/user-interaction/basics-of-user-interaction"},next:{title:"application elements",permalink:"/docs/development/application-descriptor-files/application"}},s=[{value:"The Application Descriptor format",id:"the-application-descriptor-format",children:[],level:3},{value:"Creating and editing your Application Descriptor",id:"creating-and-editing-your-application-descriptor",children:[],level:3}],d={toc:s};function u(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every AIR application has an Application Descriptor File, which is used to tell the AIR tools and runtime about the contents of the application and preferences for its display.\nIt is an XML file with a set of elements that are used at different points in the development process, for example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setting up the name of the application and the icons that will appear when it's installed onto a phone"),(0,o.kt)("li",{parentName:"ol"},"Providing information about AIR Native Extensions that are required by the application"),(0,o.kt)("li",{parentName:"ol"},"Configuring some of the display properties that will be used by the application when it launches on a computer")),(0,o.kt)("p",null,"The descriptor file is required when running an application during development, via the AIR Debug Launcher (ADL), and is provided to the AIR Developer Tool (ADT) when packaging up an application for deployment.\nA packaged AIR application will contain the descriptor file - renamed to a standard ",(0,o.kt)("inlineCode",{parentName:"p"},"application.xml")," - so that it can then be used by the AIR runtime's bootstrap code to load in extensions and perform other runtime configuration."),(0,o.kt)("h3",{id:"the-application-descriptor-format"},"The Application Descriptor format"),(0,o.kt)("p",null,"The application descriptor file has to conform to an XML Schema Definition which is provided as part of the AIR SDK along with a template file that some IDEs use when creating a new project.\nThe format changes over time when new features and capabilities are added, and is versioned by use of a namespace value that matches the version of the AIR runtime which can read the configuration.\nIt is possible for the AIR runtime to read an older version of the application descriptor file, but it cannot read a newer version."),(0,o.kt)("p",null,"The XML file is split up into main sections with some generic information about the application being provided at the top level within the ",(0,o.kt)("inlineCode",{parentName:"p"},"application")," root element. Details on these sections can be\nseen via the navigation bar in this website: as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialWindow")," block that specifies details about the main window to be created by the AIR runtime, there are platform-specific sections that\nare used purely for the operating system which is being targeted by the build or on which the application is running: ",(0,o.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"iPhone"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"macOS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"windows"),"."),(0,o.kt)("h3",{id:"creating-and-editing-your-application-descriptor"},"Creating and editing your Application Descriptor"),(0,o.kt)("p",null,"Most IDEs that support AIR will create an initial Application Descriptor file using details provided in their 'new project' UI, but it is also possible to hand-edit a simple descriptor file.\nThere is a suitable template provided within the AIR SDK (see ",(0,o.kt)("inlineCode",{parentName:"p"},"templates/air/descriptor-template.xml"),"). The application descriptor file can have any filename but is typically either called ",(0,o.kt)("inlineCode",{parentName:"p"},"application.xml"),"\nor named after the application/project name with ",(0,o.kt)("inlineCode",{parentName:"p"},"-app.xml")," appended, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"MyProject-app.xml"),"."),(0,o.kt)("p",null,"For more advanced generation and manipulation of the application descriptor file, including to add dependencies (third party libraries or AIR Native Extensions) into a project, the\nAIR Package Manager (apm) can be used. For more details please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airsdk/apm/wiki"},"apm wiki"),"."))}u.isMDXComponent=!0}}]);