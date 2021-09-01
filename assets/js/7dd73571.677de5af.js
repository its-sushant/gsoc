"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[1482],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),c=i,h=p["".concat(s,".").concat(c)]||p[c]||d[c]||r;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8654:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={title:"Week 1",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},s=void 0,u={unversionedId:"2021/buildsystem/updates/2021-06-11",id:"2021/buildsystem/updates/2021-06-11",isDocsHomePage:!1,title:"Week 1",description:"\x3c!--",source:"@site/docs/2021/buildsystem/updates/2021-06-11.md",sourceDirName:"2021/buildsystem/updates",slug:"/2021/buildsystem/updates/2021-06-11",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-11",editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/buildsystem/updates/2021-06-11.md",tags:[{label:"gsoc21",permalink:"/gsoc/docs/tags/gsoc-21"},{label:"buildsystem",permalink:"/gsoc/docs/tags/buildsystem"},{label:"ci/cd",permalink:"/gsoc/docs/tags/ci-cd"},{label:"cmake",permalink:"/gsoc/docs/tags/cmake"}],version:"current",frontMatter:{title:"Week 1",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},sidebar:"2021",previous:{title:"Community Bonding",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-05-28"},next:{title:"Week 2",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-18"}},m=[{value:"Meeting 3",id:"meeting-3",children:[{value:"Attendees",id:"attendees",children:[]},{value:"Week 1 Progress",id:"week-1-progress",children:[]},{value:"Discussions",id:"discussions",children:[]},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",children:[]}]}],d={toc:m};function p(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"meeting-3"},"Meeting 3"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(June 11th, 2021)")),(0,r.kt)("p",null,"In this third meeting, I demoed the working build system, currently building executables and libraries, a lot of queries were resolved about writing version files and attaching commits and hashes to the build. "),(0,r.kt)("h3",{id:"attendees"},"Attendees"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mcjaeger"},"Michael C. Jaeger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/shaheemazmalmmd"},"Shaheem Azmal M MD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/GMishx"},"Gaurav Mishra")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ag4ums"},"Anupam Ghosh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hastagAB"},"Ayush Bhardwaj")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/itssingh"},"Sarita Singh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/avinal"},"Avinal Kumar"))),(0,r.kt)("h3",{id:"week-1-progress"},"Week 1 Progress"),(0,r.kt)("p",null,"This week was mainly focused on analyzing the previous build system and framing a skeleton for the new build system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Created the build configuration ",(0,r.kt)("a",{href:"https://github.com/avinal/FOSSology/wiki/agents-spec#agents-configuration-list"},"analysis table"),"."),(0,r.kt)("li",{parentName:"ul"},"Completed the basic skeleton."),(0,r.kt)("li",{parentName:"ul"},"Completed the CMake configuration for libraries"),(0,r.kt)("li",{parentName:"ul"},"To test the current progress, follow the instructions ",(0,r.kt)("a",{href:"https://github.com/avinal/FOSSology/wiki#test-the-new-system-only-gcc-with-make-and-ninja-tested-for-now"},"here")),(0,r.kt)("li",{parentName:"ul"},"Test on ",(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/avinal/FOSSology/tree/avinal/feat/cmake-buildsystem"},"GitPod")," right inside your browser.")),(0,r.kt)("h3",{id:"discussions"},"Discussions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What are the flags needed for C and C++?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"-g")," flag enables debug."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"-O2")," flag is used for optimizing."),(0,r.kt)("li",{parentName:"ul"},"In FOSSology these two flags are used together by default for all build purposes because it is desired to have an optimized binary but some level of debugging information is also desired."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The Makefiles have some compile-time preprocessor macro definitions that need to be passed to each build.")," The Makefiles have all the path values passed as ",(0,r.kt)("inlineCode",{parentName:"li"},"'\"..value..\"'")," format ",(0,r.kt)("em",{parentName:"li"},"(double quote inside single quotes)"),", however the commands produced by CMake have ",(0,r.kt)("inlineCode",{parentName:"li"},'\\"..value..\\"')," format ",(0,r.kt)("em",{parentName:"li"},"(escaped double quotes)"),". Are they the same or it needs to be changed?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Currently, there is nothing to determine if they work the same or not, but if the compiler would not have accepted them then, it would have thrown an error. As long it is working these should be fine, but will need to be checked in the final build."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Are all libraries in FOSSology static?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No, by default no library is static. The format ",(0,r.kt)("inlineCode",{parentName:"li"},"lib<library-name>.a")," is confusing but no need to worry about it for now, if this is working fine then no problem."),(0,r.kt)("li",{parentName:"ul"},"In general, this format denotes a static library."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How to add the version and commit information to the builds?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"I have gone through ",(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/pipermail/cmake/2018-October/068383.html"},"this thread")," on CMake's official mailing list. And they have suggested a lot of options, but unable to decide which option to use. Gaurav said he will see into this thread and for now, I should try writing a shell script and test if that works."),(0,r.kt)("li",{parentName:"ul"},"Same can be tested for the version too."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What is")," ",(0,r.kt)("inlineCode",{parentName:"li"},"_squareVisitor.h.pre")," ",(0,r.kt)("strong",{parentName:"li"},"used for?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"They are used to generate source code at build time."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Is there any inheritance structure in the build system?")," ",(0,r.kt)("em",{parentName:"li"},"(Michael)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For now, I am writing separate modules for the default operations needed in most configurations. The final structure will be decided in the final build."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Where are all the binaries produced?")," ",(0,r.kt)("em",{parentName:"li"},"(Gaurav)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"They are located in the build folder with the same directory structure as the original project."),(0,r.kt)("li",{parentName:"ul"},"While installing the same will be used and none of the source folders are ever disturbed."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Are all flags taken from the Makefiles itself?")," ",(0,r.kt)("em",{parentName:"li"},"(Anupam)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Yes and No, there are some flags that CMake uses by default, they can be altered by changing the value for ",(0,r.kt)("inlineCode",{parentName:"li"},"CMAKE_C_FLAGS")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"CMAKE_CXX_FLAGS"),". One can also append their flags. Since not all compilation requires all the flags, I have taken the default one into cache variables, and others are appended while configuring for a particular project.")))),(0,r.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try the ",(0,r.kt)("inlineCode",{parentName:"li"},"monkbulk")," in monk and ",(0,r.kt)("inlineCode",{parentName:"li"},"makefile.sa")," in nomos."),(0,r.kt)("li",{parentName:"ul"},"Try adding the version and commit hash info."),(0,r.kt)("li",{parentName:"ul"},"Implement writing version files for each build."),(0,r.kt)("li",{parentName:"ul"},"Add proper comments in the ",(0,r.kt)("inlineCode",{parentName:"li"},"CMakeLists.txt")," files.")))}p.isMDXComponent=!0}}]);