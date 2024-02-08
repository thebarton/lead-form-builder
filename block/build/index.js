(()=>{"use strict";var e,t={840:()=>{const e=window.wp.blocks,t=window.React,r=(window.wp.i18n,window.wp.element),a=window.wp.components,o=window.wp.blockEditor,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/lead-form-builder","version":"0.1.0","title":"Lead Form Builder","category":"text","icon":"feedback","keywords":["contact form","lead form builder","themehunk"],"description":"Lead Form Builder is a contact form builder as well as lead generator.","example":{},"supports":{"html":false},"textdomain":"lead-form-builder","attributes":{"formid":{"type":"string","default":1},"title":{"type":"string"},"formList":{"type":"object"},"randerForm":{"type":"string","default":"[lead-form form-id=1 title=Contact Us]"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}'),{name:l,...i}=n;(0,e.registerBlockType)(l,{...i,edit:function({attributes:e,setAttributes:n,isSelected:l}){const[i,s]=(0,r.useState)(!1),[d,c]=(0,r.useState)(!1),m=wp.data.select("core").getSite();!1===i&&m&&s(m.url);const{formid:p,title:f,randerForm:u,formList:w}=e;wp.element.createElement,(0,r.useEffect)((()=>{(async()=>{try{const e={data:p,title:f};await fetch(ajaxurl,{method:"POST",body:new URLSearchParams({action:"lead_form_builderr_data",data:JSON.stringify(e)})}).then((e=>e.json())).then((e=>{e.data.lfb_form&&e.data.lfb_form.length&&c(!0),n({formList:e.data.lfb_form,randerForm:e.data.lfb_rander})})).catch((e=>{console.error("Error in AJAX request:",e)}))}catch(e){console.error("Error fetching data:",e)}})()}),[p,f]);const b=e=>{window.open(`${i}/wp-admin/admin.php?page=${e}`,"_blank")};return(0,t.createElement)("div",{...(0,o.useBlockProps)()},l&&(0,t.createElement)(o.InspectorControls,{key:"setting"},(0,t.createElement)(a.Panel,{header:"lfb"},(0,t.createElement)(a.PanelBody,{title:"Lead Form Builder",initialOpen:!0},d&&(0,t.createElement)(a.SelectControl,{label:"Slect Lead Form",value:p,options:[{disabled:!0,label:"Select Form",value:""},...w&&w.map((function(e,t){return{label:e.form_title,value:e.id}}))],onChange:e=>n({formid:e})}),(0,t.createElement)(a.TextControl,{label:"Form Title",value:f,onChange:e=>n({title:e})}),(0,t.createElement)(a.Button,{variant:"secondary",onClick:()=>b("wplf-plugin-menu")},"Customize Lead Form")))),d&&(h=u,wp.element.RawHTML({children:h})),!1===d&&(0,t.createElement)(a.Button,{variant:"primary",onClick:()=>b("add-new-form")},"Create New Form"));var h},save:function({attributes:e}){return o.useBlockProps.save(),null}})}},r={};function a(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,r,o,n)=>{if(!r){var l=1/0;for(c=0;c<e.length;c++){for(var[r,o,n]=e[c],i=!0,s=0;s<r.length;s++)(!1&n||l>=n)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(i=!1,n<l&&(l=n));if(i){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,o,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[l,i,s]=r,d=0;if(l.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)var c=s(a)}for(t&&t(r);d<l.length;d++)n=l[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},r=globalThis.webpackChunkexample_static=globalThis.webpackChunkexample_static||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=a.O(void 0,[431],(()=>a(840)));o=a.O(o)})();