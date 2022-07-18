import{z as g,h,k as y,o as l,c as n,d as e,j as b,q as i,D as u,t as d,e as a,A as m,F as x,p as v,i as w}from"./app.c2979c7d.js";import{L as k}from"./Loader.ed50b8f6.js";import"./plugin-vue_export-helper.21dcd24c.js";const S={class:"py-12"},j={class:"p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3"},M=["onSubmit"],V=e("label",{class:"sr-only",for:"name"},"Name",-1),T={key:0,class:"mt-2 text-sm text-red-600"},B={class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},C=e("label",{class:"sr-only",for:"module_code"},"Module Code",-1),D={key:0,class:"mt-2 text-sm text-red-600"},F=e("label",{class:"sr-only",for:"type"},"Type",-1),U=e("option",{value:"core"},"Core",-1),N=e("option",{value:"tutorial"},"Tutorial",-1),O=e("option",{value:"practical"},"Practical",-1),L=[U,N,O],A={key:0,class:"mt-2 text-sm text-red-600"},q=e("label",{class:"sr-only",for:"teacher"},"Teacher",-1),z=["value"],E={key:0,class:"mt-2 text-sm text-red-600"},H=e("label",{class:"sr-only",for:"description"},"Description",-1),P={key:0,class:"mt-2 text-sm text-red-600"},G={class:"mt-4"},I={class:"inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto",type:"submit"},J=e("span",{class:"font-medium mr-3"},"Save",-1),K={key:1,class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Q=e("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},null,-1),R=[Q],Z={__name:"Form",props:{module:Object,teachers:Object,errors:Object},setup(p){const o=p,t=g({sending:!1,form:h({name:null,module_code:null,description:null,type:null,teacher_id:null},{resetOnSuccess:!1})});function f(){let c={headers:{Accept:"application/json"},onStart:()=>t.sending=!0,onFinish:()=>t.sending=!1,preserveScroll:!0};o.module&&o.module.id?t.form.put(route("admin.modules.update",o.module),c):t.form.post(route("admin.modules.store"),c)}return y(()=>{o.module&&_.assign(t.form,o.module)}),(c,r)=>(l(),n("div",S,[e("div",j,[e("form",{onSubmit:b(f,["prevent"]),class:"space-y-4"},[e("div",null,[V,i(e("input",{class:"w-full p-3 text-sm border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500",id:"name",placeholder:"Name",type:"text","onUpdate:modelValue":r[0]||(r[0]=s=>t.form.name=s)},null,512),[[u,t.form.name]]),o.errors.name?(l(),n("p",T,d(o.errors.name),1)):a("",!0)]),e("div",B,[e("div",null,[C,i(e("input",{class:"w-full p-3 text-sm border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500",placeholder:"Module Code",type:"text","onUpdate:modelValue":r[1]||(r[1]=s=>t.form.module_code=s)},null,512),[[u,t.form.module_code]]),o.errors.module_code?(l(),n("p",D,d(o.errors.module_code),1)):a("",!0)]),e("div",null,[F,i(e("select",{class:"py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500",placeholder:"Type","onUpdate:modelValue":r[2]||(r[2]=s=>t.form.type=s)},L,512),[[m,t.form.type]]),o.errors.type?(l(),n("p",A,d(o.errors.type),1)):a("",!0)])]),e("div",null,[q,i(e("select",{class:"py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500",placeholder:"Type","onUpdate:modelValue":r[3]||(r[3]=s=>t.form.teacher_id=s)},[(l(!0),n(x,null,v(o.teachers,s=>(l(),n("option",{value:s.id,key:s.id},d(s.full_name),9,z))),128))],512),[[m,t.form.teacher_id]]),o.errors.teacher?(l(),n("p",E,d(o.errors.teacher),1)):a("",!0)]),e("div",null,[H,i(e("textarea",{class:"w-full p-3 text-sm border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500",placeholder:"Description",rows:"8","onUpdate:modelValue":r[4]||(r[4]=s=>t.form.description=s)},null,512),[[u,t.form.description]]),o.errors.description?(l(),n("p",P,d(o.errors.description),1)):a("",!0)]),e("div",G,[e("button",I,[J,t.sending?(l(),w(k,{key:0})):(l(),n("svg",K,R))])])],40,M)])]))}};export{Z as default};
