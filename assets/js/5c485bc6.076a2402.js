"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[6515],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7823:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),s=["components"],o={title:"Basics of XML",sidebar_position:2},l=void 0,c={unversionedId:"development/core-actionscript-classes/working-with-xml/basics-of-xml",id:"development/core-actionscript-classes/working-with-xml/basics-of-xml",isDocsHomePage:!1,title:"Basics of XML",description:"XML is a standard way of representing structured information so that it is easy for computers to work with and reasonably easy for people to write and understand. XML is an abbreviation for eXtensible Markup Language. The XML standard is available at https://www.w3.org/XML/ .",source:"@site/docs/development/core-actionscript-classes/working-with-xml/basics-of-xml.md",sourceDirName:"development/core-actionscript-classes/working-with-xml",slug:"/development/core-actionscript-classes/working-with-xml/basics-of-xml",permalink:"/docs/development/core-actionscript-classes/working-with-xml/basics-of-xml",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-xml/basics-of-xml.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Basics of XML",sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/development/core-actionscript-classes/working-with-xml/index"},next:{title:"The E4X approach to XML processing",permalink:"/docs/development/core-actionscript-classes/working-with-xml/e4x-approach-to-xml-processing"}},m=[{value:"Getting started with XML",id:"getting-started-with-xml",children:[],level:2},{value:"Learning more about XML",id:"learning-more-about-xml",children:[],level:2},{value:"ActionScript classes for working with XML",id:"actionscript-classes-for-working-with-xml",children:[],level:2},{value:"Important concepts and terms",id:"important-concepts-and-terms",children:[],level:2}],p={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"XML is a standard way of representing structured information so that it is easy for computers to work with and reasonably easy for people to write and understand. XML is an abbreviation for eXtensible Markup Language. The XML standard is available at ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/XML/"},"https://www.w3.org/XML/")," ."),(0,i.kt)("p",null,"XML offers a standard and convenient way to categorize data, to make it easier to read, access, and manipulate. XML uses a tree structure and tag structure that is similar to HTML. Here is a simple example of XML data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<song>\n    <title>What you know?</title>\n    <artist>Steve and the flubberblubs</artist>\n    <year>1989</year>\n    <lastplayed>2006-10-17-08:31</lastplayed>\n</song>\n")),(0,i.kt)("p",null,"XML data can also be more complex, with tags nested in other tags as well as attributes and other structural components. Here is a more complex example of XML data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<album>\n    <title>Questions, unanswered</title>\n    <artist>Steve and the flubberblubs</artist>\n    <year>1989</year>\n    <tracks>\n        <song tracknumber="1" length="4:05">\n            <title>What do you know?</title>\n            <artist>Steve and the flubberblubs</artist>\n            <lastplayed>2006-10-17-08:31</lastplayed>\n        </song>\n        <song tracknumber="2" length="3:45">\n            <title>Who do you know?</title>\n            <artist>Steve and the flubberblubs</artist>\n            <lastplayed>2006-10-17-08:35</lastplayed>\n        </song>\n        <song tracknumber="3" length="5:14">\n            <title>When do you know?</title>\n            <artist>Steve and the flubberblubs</artist>\n            <lastplayed>2006-10-17-08:39</lastplayed>\n        </song>\n        <song tracknumber="4" length="4:19">\n            <title>Do you know?</title>\n            <artist>Steve and the flubberblubs</artist>\n            <lastplayed>2006-10-17-08:44</lastplayed>\n        </song>\n    </tracks>\n</album>\n')),(0,i.kt)("p",null,"Notice that this XML document contains other complete XML structures within it (such as the song tags with their children). It also demonstrates other XML structures such as attributes ( tracknumber and length in the song tags), and tags that contain other tags rather than containing data (such as the tracks tag)."),(0,i.kt)("h2",{id:"getting-started-with-xml"},"Getting started with XML"),(0,i.kt)("p",null,"If you have little or no experience with XML, here is a brief description of the most common aspects of XML data. XML data is written in plain-text form, with a specific syntax for organizing the information into a structured format. Generally, a single set of XML data is known as an XML document . In XML format, data is organized into elements (which can be single data items or containers for other elements) using a hierarchical structure. Every XML document has a single element as the top level or main item; inside this root element there may be a single piece of information, although there are more likely to be other elements, which in turn contain other elements, and so forth. For example, this XML document contains the information about a music album:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<song tracknumber="1" length="4:05">\n    <title>What do you know?</title>\n    <artist>Steve and the flubberblubs</artist>\n    <mood>Happy</mood>\n    <lastplayed>2006-10-17-08:31</lastplayed>\n</song>\n')),(0,i.kt)("p",null,"Each element is distinguished by a set of tags \u2014the element\u2019s name wrapped in angle brackets (less-than and greater-than signs). The opening tag, indicating the start of the element, has the element name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<title>\n")),(0,i.kt)("p",null,"The closing tag, which marks the end of the element, has a forward slash before the element\u2019s name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"</title>\n")),(0,i.kt)("p",null,"If an element contains no content, it can be written as an empty element (sometimes called a self-closing element). In XML, this element:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<lastplayed/>\n")),(0,i.kt)("p",null,"is identical to this element:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<lastplayed></lastplayed>\n")),(0,i.kt)("p",null,'In addition to the element\u2019s content contained between the opening and closing tags, an element can also include other values, known as attributes , defined in the element\u2019s opening tag. For example, this XML element defines a single attribute named length , with the value "4:19" :'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<song length="4:19"></song>\n')),(0,i.kt)("p",null,"Each XML element has content, which is either a single value, one or more XML elements, or nothing (for an empty element)."),(0,i.kt)("h2",{id:"learning-more-about-xml"},"Learning more about XML"),(0,i.kt)("p",null,"To learn more about working with XML, there are a number of additional books and resources for learning more about XML, including these web sites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"W3Schools XML Tutorial: ",(0,i.kt)("a",{parentName:"li",href:"http://w3schools.com/xml/"},"http://w3schools.com/xml/")),(0,i.kt)("li",{parentName:"ul"},"XMLpitstop tutorials, discussion lists, and more: ",(0,i.kt)("a",{parentName:"li",href:"http://xmlpitstop.com/"},"http://xmlpitstop.com/"))),(0,i.kt)("h2",{id:"actionscript-classes-for-working-with-xml"},"ActionScript classes for working with XML"),(0,i.kt)("p",null,"ActionScript 3.0 includes several classes that are used for working with XML-structured information. The two main classes are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XML"),": Represents a single XML element, which can be an XML document with multiple children or a single-value element within a document."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XMLList"),": Represents a set of XML elements. An XMLList object is used when there are multiple XML elements that are \u201csiblings\u201d (at the same level, and contained by the same parent, in the XML document\u2019s hierarchy). For instance, an XMLList instance would be the easiest way to work with this set of XML elements (presumably contained in an XML document):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<artist type="composer">Fred Wilson</artist>\n<artist type="conductor">James Schmidt</artist>\n<artist type="soloist">Susan Harriet Thurndon</artist>\n')),(0,i.kt)("p",null,"For more advanced uses involving XML namespaces, ActionScript also includes the Namespace and QName classes. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"using-xml-namespaces"},"Using XML namespaces"),"."),(0,i.kt)("p",null,"In addition to the built-in classes for working with XML, ActionScript 3.0 also includes several operators that provide specific functionality for accessing and manipulating XML data. This approach to working with XML using these classes and operators is known as ECMAScript for XML (E4X), as defined by the ECMA-357 edition 2 specification."),(0,i.kt)("h2",{id:"important-concepts-and-terms"},"Important concepts and terms"),(0,i.kt)("p",null,"The following reference list contains important terms you will encounter when programming XML handling routines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Element")," A single item in an XML document, identified as the content contained between a starting tag and an ending tag (including the tags). XML elements can contain text data or other elements, or can be empty."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Empty element")," An XML element that contains no child elements. Empty elements are often written as self-closing tags (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"<element/>"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Document")," A single XML structure. An XML document can contain any number of elements (or can consist only of a single empty element); however, an XML document must have a single top-level element that contains all the other elements in the document."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node")," Another name for an XML element."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Attribute")," A named value associated with an element that is written into the opening tag of the element in ",(0,i.kt)("inlineCode",{parentName:"li"},'attributename="value"')," format, rather than being written as a separate child element nested inside the element.")))}u.isMDXComponent=!0}}]);