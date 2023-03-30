(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{6206:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/rewriting-the-cosmos-kernel-in-rust",function(){return s(1929)}])},3638:function(n,e,s){"use strict";s.d(e,{B:function(){return d}});var a=s(5893),t=s(9008),i=s.n(t),c=s(1163),o=s(7527),r=s(6010);function l(n){let{children:e,className:s}=n;return(0,a.jsx)("div",{className:(0,r.Z)(s,"prose dark:prose-invert"),children:e})}var u=s(3997);function p(n){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",...n,children:(0,a.jsx)("path",{d:"M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function d(n){let{children:e,meta:s,isRssFeed:t=!1,previousPathname:r}=n,d=(0,c.useRouter)();return t?e:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:`${s.title} - Nicolas Giaconia`}),(0,a.jsx)("meta",{name:"description",content:s.description})]}),(0,a.jsx)(o.W,{className:"mt-16 lg:mt-32",children:(0,a.jsx)("div",{className:"xl:relative",children:(0,a.jsxs)("div",{className:"mx-auto max-w-2xl",children:[r&&(0,a.jsx)("button",{type:"button",onClick:()=>d.back(),"aria-label":"Go back to articles",className:"group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0",children:(0,a.jsx)(p,{className:"h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"})}),(0,a.jsxs)("article",{children:[(0,a.jsxs)("header",{className:"flex flex-col",children:[(0,a.jsx)("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",children:s.title}),(0,a.jsxs)("time",{dateTime:s.date,className:"order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",children:[(0,a.jsx)("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"}),(0,a.jsx)("span",{className:"ml-3",children:(0,u.p)(s.date)})]})]}),(0,a.jsx)(l,{className:"mt-8",children:e})]})]})})})]})}},3997:function(n,e,s){"use strict";function a(n){return new Date(`${n}T00:00:00Z`).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}s.d(e,{p:function(){return a}})},1929:function(n,e,s){"use strict";s.r(e),s.d(e,{meta:function(){return c}});var a=s(5893),t=s(1151),i=s(3638);let c={author:"Adam Wathan",date:"2022-07-14",title:"Rewriting the cosmOS kernel in Rust",description:"When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week."},o=n=>(0,a.jsx)(i.B,Object.assign({meta:c},n));function r(n){let e=Object.assign({p:"p",pre:"pre",code:"code",span:"span",h2:"h2",a:"a",ol:"ol",li:"li",em:"em",strong:"strong"},(0,t.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week."}),"\n",(0,a.jsx)(e.pre,{className:"language-rust",children:(0,a.jsxs)(e.code,{className:"language-rust",children:[(0,a.jsx)(e.span,{className:"token keyword",children:"use"})," ",(0,a.jsxs)(e.span,{className:"token namespace",children:["ferris_says",(0,a.jsx)(e.span,{className:"token punctuation",children:"::"})]}),"say",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token keyword",children:"use"})," ",(0,a.jsxs)(e.span,{className:"token namespace",children:["std",(0,a.jsx)(e.span,{className:"token punctuation",children:"::"}),"io",(0,a.jsx)(e.span,{className:"token punctuation",children:"::"})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"stdout",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token class-name",children:"BufWriter"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(e.span,{className:"token keyword",children:"fn"})," ",(0,a.jsx)(e.span,{className:"token function-definition function",children:"main"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword",children:"let"})," stdout ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token function",children:"stdout"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword",children:"let"})," message ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token class-name",children:"String"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"::"}),(0,a.jsx)(e.span,{className:"token function",children:"from"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token string",children:'"Hello fellow hackers"'}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword",children:"let"})," width ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," message",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token function",children:"chars"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token function",children:"count"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n    ",(0,a.jsx)(e.span,{className:"token keyword",children:"let"})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"mut"})," writer ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token class-name",children:"BufWriter"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"::"}),(0,a.jsx)(e.span,{className:"token function",children:"new"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"stdout",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token function",children:"lock"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(e.span,{className:"token function",children:"say"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"message",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token function",children:"as_bytes"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","})," width",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token operator",children:"&"}),(0,a.jsx)(e.span,{className:"token keyword",children:"mut"})," writer",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token function",children:"unwrap"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,a.jsx)(e.p,{children:"I derive a large amount of my self-worth from whether or not Hacker News is impressed with the work I'm doing, so when I realized this, I cancelled all of our existing projects and started migrating everything to Rust immediately."}),"\n",(0,a.jsx)(e.h2,{children:"Sermone fata"}),"\n",(0,a.jsxs)(e.p,{children:["Lorem markdownum, bracchia in redibam! Terque unda puppi nec, linguae posterior\nin utraque respicere candidus Mimasque formae; quae conantem cervice. Parcite\nvariatus, redolentia adeunt. Tyrioque dies, naufraga sua adit partibus celanda\ntorquere temptata, erit maneat et ramos, ",(0,a.jsx)(e.a,{href:"#",children:"iam"})," ait dominari\npotitus! Tibi litora matremque fumantia condi radicibus opusque."]}),"\n",(0,a.jsxs)(e.p,{children:["Deus feram verumque, fecit, ira tamen, terras per alienae victum. Mutantur\nlevitate quas ubi arcum ripas oculos abest. Adest ",(0,a.jsx)(e.a,{href:"#",children:"commissaque\nvictae"})," in gemitus nectareis ire diva\ndotibus ora, et findi huic invenit; fatis? Fractaque dare superinposita\nnimiumque simulatoremque sanguine, at voce aestibus diu! Quid veterum hausit tu\nnil utinam paternos ima, commentaque."]}),"\n",(0,a.jsx)(e.pre,{className:"language-c",children:(0,a.jsxs)(e.code,{className:"language-c",children:["exbibyte_wins ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token function",children:"gigahertz"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token number",children:"3"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\ngrayscaleUtilityClient ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," control_uat",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\npcmciaHibernate ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token function",children:"oop_virus_console"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"text_mountain",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token keyword",children:"if"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"stateWaisFirewire ",(0,a.jsx)(e.span,{className:"token operator",children:">="})," ",(0,a.jsx)(e.span,{className:"token operator",children:"-"}),(0,a.jsx)(e.span,{className:"token number",children:"2"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    jfs ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token number",children:"647065"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"/"})," ",(0,a.jsx)(e.span,{className:"token function",children:"ldapVrml"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"tutorialRestore",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token number",children:"85"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    metal_runtime_parse ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," roomComputingResolution ",(0,a.jsx)(e.span,{className:"token operator",children:"-"})," toolbarUpload ",(0,a.jsx)(e.span,{className:"token operator",children:"+"}),"\n            ipx_nvram_open",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"else"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    maximizeSidebar ",(0,a.jsx)(e.span,{className:"token operator",children:"*="})," ",(0,a.jsx)(e.span,{className:"token function",children:"suffix_url"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"flatbed ",(0,a.jsx)(e.span,{className:"token operator",children:"+"})," ",(0,a.jsx)(e.span,{className:"token number",children:"2"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","})," requirements_encoding_node ",(0,a.jsx)(e.span,{className:"token operator",children:"+"}),"\n            only_qbe_media",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," minicomputer",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,a.jsx)(e.p,{children:"Aere repetiti cognataque natus. Habebat vela solutis saepe munus nondum adhuc\noscula nomina pignora corpus deserat."}),"\n",(0,a.jsx)(e.h2,{children:"Lethaei Pindumve me quae dinumerat Pavor"}),"\n",(0,a.jsx)(e.p,{children:"Idem se saxa fata pollentibus geminos; quos pedibus. Est urnis Herses omnes nec\ndivite: et ille illa furit sim verbis Cyllenius."}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Captus inpleverunt collo"}),"\n",(0,a.jsx)(e.li,{children:"Nec nam placebant"}),"\n",(0,a.jsx)(e.li,{children:"Siquos vulgus"}),"\n",(0,a.jsx)(e.li,{children:"Dictis carissime fugae"}),"\n",(0,a.jsx)(e.li,{children:"A tacitos nulla viginti"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Ungues fistula annoso, ille addit linoque motatque uberior verso\n",(0,a.jsx)(e.a,{href:"#",children:"rubuerunt"})," confine desuetaque. ",(0,a.jsx)(e.em,{children:"Sanguine"})," anteit\nemerguntque expugnacior est pennas iniqui ecce ",(0,a.jsx)(e.strong,{children:"haeret"})," genus: peiora imagine\nfossas Cephisos formosa! Refugitque amata ",(0,a.jsx)(e.a,{href:"#",children:"refelli"}),"\nsupplex. Summa brevis vetuere tenebas, hostes vetantis, suppressit, arreptum\nregna. Postquam conpescit iuvenis habet corpus, et erratica, perdere, tot mota\nars talis."]}),"\n",(0,a.jsx)(e.pre,{className:"language-c",children:(0,a.jsxs)(e.code,{className:"language-c",children:["digital",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"webcam_dual_frequency ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," webmasterMms",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token keyword",children:"if"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token number",children:"5"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"+"})," language_standalone_google",(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    cc_inbox_layout ",(0,a.jsx)(e.span,{className:"token operator",children:"*="})," file_character",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    task ",(0,a.jsx)(e.span,{className:"token operator",children:"+="})," p",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    lockUnicode ",(0,a.jsx)(e.span,{className:"token operator",children:"+="})," ",(0,a.jsx)(e.span,{className:"token function",children:"enterprise_monochrome"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"tokenFunctionPersonal",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," keyVirtual",(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n            adf",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n",(0,a.jsx)(e.span,{className:"token function",children:"windows_binary_esports"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token number",children:"87734"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token function",children:"array"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"restoreRomTopology",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token function",children:"adRaw"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token number",children:"407314"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n        dongleBashThumbnail",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","})," interpreter",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsxs)(e.p,{children:["Sit volat naturam; motu Cancri. Erat pro simul quae valuit quoque timorem quam\nproelia: illo patrio ",(0,a.jsx)(e.em,{children:"esse summus"}),", enim sua serpentibus, Hyleusque. Est coniuge\nrecuso; refert Coroniden ignotos manat, adfectu."]})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(o,Object.assign({},n,{children:(0,a.jsx)(r,n)}))}},9008:function(n,e,s){n.exports=s(3121)},1151:function(n,e,s){"use strict";s.d(e,{ah:function(){return i}});var a=s(7294);let t=a.createContext({});function i(n){let e=a.useContext(t);return a.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=6206)}),_N_E=n.O()}]);