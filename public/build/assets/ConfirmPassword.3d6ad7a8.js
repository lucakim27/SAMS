import{g as d,o as l,h as c,w as r,a,u as o,H as m,d as e,n as u,i as f,j as _}from"./app.ee471600.js";import{_ as p,a as w}from"./Guest.0cf70441.js";import{_ as b,a as h,b as x}from"./ValidationErrors.a779d42c.js";const V=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),g=["onSubmit"],v={class:"flex justify-end mt-4"},y=_(" Confirm "),N={__name:"ConfirmPassword",setup(C){const s=d({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return($,t)=>(l(),c(p,null,{default:r(()=>[a(o(m),{title:"Confirm Password"}),V,a(b,{class:"mb-4"}),e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[a(h,{for:"password",value:"Password"}),a(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":t[0]||(t[0]=n=>o(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),e("div",v,[a(w,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:r(()=>[y]),_:1},8,["class","disabled"])])],40,g)]),_:1}))}};export{N as default};