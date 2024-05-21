"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4698],{2111:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(4848),a=t(8453);const r={title:"custom validation",tag:["backend","spring","custom validation"]},l=void 0,s={id:"web/backend/spring/constraint-validator",title:"custom validation",description:"\ub0b4\uc6a9 \uc815\ub9ac",source:"@site/docs/resource/web/backend/spring/constraint-validator.md",sourceDirName:"web/backend/spring",slug:"/web/backend/spring/constraint-validator",permalink:"/resource/web/backend/spring/constraint-validator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"custom validation",tag:["backend","spring","custom validation"]},sidebar:"tutorialSidebar",previous:{title:"Cache Abstraction",permalink:"/resource/web/backend/spring/cache-abstraction/"},next:{title:"scheduler thread pool \uad6c\uc131\ud558\uae30",permalink:"/resource/web/backend/spring/scheduling-In-springboot"}},o={},c=[{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"Custom \uc5b4\ub178\ud14c\uc774\uc158",id:"custom-\uc5b4\ub178\ud14c\uc774\uc158",level:2},{value:"Validator",id:"validator",level:2},{value:"\uc0ac\uc6a9\ubd80",id:"\uc0ac\uc6a9\ubd80",level:2},{value:"Reference",id:"reference",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\ub0b4\uc6a9-\uc815\ub9ac",children:"\ub0b4\uc6a9 \uc815\ub9ac"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc77c\ubc18\uc801\uc73c\ub85c @NotNull\uacfc \uac19\uc774 \ubbf8\ub9ac \uc815\uc758\ub41c \uc5b4\ub178\ud14c\uc774\uc158 \uae30\ubc18\uc73c\ub85c INPUT\uac12\uc744 \uac80\uc99d\ud55c\ub2e4."}),"\n",(0,i.jsx)(e.li,{children:"\ud558\uc9c0\ub9cc \ub354 \uad6c\uccb4\uc801\uc778 \uac80\uc99d\uc744 \uc6d0\ud560 \ub54c Custom Validation\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"custom-\uc5b4\ub178\ud14c\uc774\uc158",children:"Custom \uc5b4\ub178\ud14c\uc774\uc158"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@Documented\n@Constraint(validatedBy = ContactNumberValidator.class)\n@Target( { ElementType.METHOD, ElementType.FIELD })\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface ContactNumberConstraint {\n    String message() default "Invalid phone number";\n    Class<?>[] groups() default {};\n    Class<? extends Payload>[] payload() default {};\n}\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"message\ub294 \uc624\ub958 \uba54\uc2dc\uc9c0"}),"\n",(0,i.jsx)(e.li,{children:"\ub2e4\ub978 \ucf54\ub4dc\ub294 \ud45c\uc900 \uc591\uc2dd\uc5d0 \ub9de\ucd94\uae30 \uc704\ud55c \ucf54\ub4dc\ub4e4\uc774\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"validator",children:"Validator"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public class ContactNumberValidator implements \n  ConstraintValidator<ContactNumberConstraint, String> {\n  \n    @Override\n    public void initialize(ContactNumberConstraint contactNumber) {\n    }\n\n    @Override\n    public boolean isValid(String contactField,\n      ConstraintValidatorContext cxt) {\n        return contactField != null && contactField.matches("[0-9]+")\n          && (contactField.length() > 8) && (contactField.length() < 14);\n    }\n\n}\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc5b4\ub178\ud14c\uc774\uc158\uc5d0\uc11c \uc815\uc758\ud588\ub4ef \uac80\uc99d\uc5d0 \uc0ac\uc6a9\ud560 \uac80\uc99d \uac1d\uccb4\uac00 \ud544\uc694\ud568"}),"\n",(0,i.jsx)(e.li,{children:"ConstraintValidator\ub97c implements\ud558\uace0 isValid()\uac00 \ud544\uc218\uc774\ub2e4."}),"\n",(0,i.jsxs)(e.li,{children:["ConstraintValidator\uc5d0 \uc704\uc5d0\uc11c \uad6c\ud604\ud55c \uc5b4\ub178\ud14c\uc774\uc158\uacfc \uac80\uc99d\ud560 \uac1d\uccb4 \ud0c0\uc785\uc744 \uc815\uc758\ud574\uc918\uc57c \ud55c\ub2e4.","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ubc94\uc6a9\uc801 \uc0ac\uc6a9\uc744 \uc6d0\ud558\uba74 Object\ub97c \ub123\uc5b4\ub3c4 \ub41c\ub2e4"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\uc989, \ud2b9\uc815 \uac1d\uccb4\ub97c \uac80\uc99d\ud558\ub294 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud558\uac8c \ub41c\ub2e4"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\uc0ac\uc6a9\ubd80",children:"\uc0ac\uc6a9\ubd80"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'    @PostMapping("/addValidatePhone")\n    public String submitForm(@Valid ValidatedPhone validatedPhone,\n      BindingResult result, Model m) {\n        if(result.hasErrors()) {\n            return "phoneHome";\n        }\n        m.addAttribute("message", "Successfully saved phone: "\n          + validatedPhone.toString());\n        return "phoneHome";\n    }  \n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ValidatedPhone \ub0b4\ubd80\uc5d0 String \ud544\ub4dc\uac00 \uc788\uace0 @ContactNumberConstraint\uac00 \uc801\uc6a9\ub418\uc5b4 \uc788\ub2e4\uace0 \uac00\uc815"}),"\n",(0,i.jsx)(e.li,{children:"@Valid \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 \uac80\uc99d\uc774 \uc801\uc6a9\ub428"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://www.baeldung.com/spring-mvc-custom-validator",children:"Custom Validation"})}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>s});var i=t(6540);const a={},r=i.createContext(a);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);