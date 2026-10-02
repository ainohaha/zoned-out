import{getJSON as L,esc as o}from"./data-O2ZHKVoJ.js";import{o as T}from"./main-DTeBxp67.js";import"./sections-0dlh3HCY.js";import"./reveal-BGnDgJKr.js";const P="tmr:alerts:preview";async function H(t){const r={...t,submittedAt:new Date().toISOString(),source:"zoned-out"};{try{const b=JSON.parse(localStorage.getItem(P)||"[]");b.push(r),localStorage.setItem(P,JSON.stringify(b.slice(-20)))}catch{}return{ok:!0,preview:!0}}}function z(t,r="hearings.ics"){const b=new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+/,""),m=d=>String(d).replace(/([,;\\])/g,"\\$1").replace(/\n/g,"\\n"),C=d=>d.replace(/-/g,""),x=d=>{const h=new Date(`${d}T00:00:00Z`);return h.setUTCDate(h.getUTCDate()+1),h.toISOString().slice(0,10).replace(/-/g,"")},v=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Zoned Out//Alerts//EN","CALSCALE:GREGORIAN"];for(const d of t)v.push("BEGIN:VEVENT",`UID:${d.id}-${C(d.date)}@zoned-out`,`DTSTAMP:${b}`,`DTSTART;VALUE=DATE:${C(d.date)}`,`DTEND;VALUE=DATE:${x(d.date)}`,`SUMMARY:${m(d.title)}`,`DESCRIPTION:${m(d.description)}`,`LOCATION:${m(d.location||"")}`,"END:VEVENT");v.push("END:VCALENDAR");const i=d=>{const h=[];for(;d.length>60;)h.push(d.slice(0,60)),d=" "+d.slice(60);return h.push(d),h.join(`\r
`)},c=URL.createObjectURL(new Blob([v.map(i).join(`\r
`)],{type:"text/calendar"})),f=Object.assign(document.createElement("a"),{href:c,download:r});document.body.append(f),f.click(),f.remove(),setTimeout(()=>URL.revokeObjectURL(c),4e3)}const D={DC0224:{next:"Board of Commissioners hearing on the deferred special land use permit",date:"2026-10-27",where:"County administration building, commission chambers",contact:"Clerk to the Board · clerk@dekalb.example.gov"},DC0816:{next:"Borough council’s written conditional-use decision due (45 days after final testimony)",date:"2026-10-25",where:"Borough council chambers",contact:"Borough Secretary · secretary@archbald.example.gov"},DC1396:{next:"Board of Supervisors public hearing on the rezoning (planning commission recommended denial)",date:"2026-10-14",where:"County government center, board room",contact:"Clerk to the Board · clerk@loudoun.example.gov"},DC0770:{next:"City re-notices and rehears the rezoning ordinances under court order",date:"2026-10-20",where:"City council chambers",contact:"Clerk of Council · clerk@wilmington.example.gov"},DC0528:{next:"Public comment closes on the environmental review (AUAR)",date:"2026-10-30",where:"Written comments to the county",contact:"Planning & Zoning · zoning@nobles.example.gov"},DC0467:{next:"State air-permit comment deadline for new diesel generators",date:"2026-10-17",where:"State environmental agency, written comment",contact:"Permit office · airpermits@state.example.gov"},DC0697:{next:"Moratorium ends; town drafting a data center prohibition",date:"2027-05-01",where:"Town board meeting",contact:"Town Clerk · clerk@oneonta.example.gov"},DC0730:{next:"Moratorium expires; 330-acre rezoning could return",date:"2027-01-01",where:"City council chambers",contact:"Clerk of Council · clerk@sunbury.example.gov"},DC0457:{next:"Citywide one-year data center ban lapses unless extended",date:"2027-01-28",where:"City council chambers",contact:"Council Research · council@nola.example.gov"},DC0503:{next:"Commission work session on permanent data center rules",date:"2026-11-03",where:"City hall, commission chambers",contact:"City Clerk · clerk@kalamazoo.example.gov"},DC0680:{next:"Three-year moratorium in effect",date:"2029-06-01",where:"Town board meeting",contact:"Town Clerk · clerk@eastfishkill.example.gov"},DC0506:{next:"Application suspended until water and wastewater needs are disclosed",date:null,where:"Township board meeting",contact:"Township Clerk · clerk@lowelltwp.example.gov"}},q=["By right","No zoning (unregulated)","Site plan review only"],W=[["proposals","New proposals"],["status","Status changes"],["hearings","Hearings & meetings"],["deadlines","Comment deadlines"],["byright","By-right permits filed"]],R=[["AL","Alabama"],["AK","Alaska"],["AZ","Arizona"],["AR","Arkansas"],["CA","California"],["CO","Colorado"],["CT","Connecticut"],["DE","Delaware"],["DC","District of Columbia"],["FL","Florida"],["GA","Georgia"],["HI","Hawaii"],["ID","Idaho"],["IL","Illinois"],["IN","Indiana"],["IA","Iowa"],["KS","Kansas"],["KY","Kentucky"],["LA","Louisiana"],["ME","Maine"],["MD","Maryland"],["MA","Massachusetts"],["MI","Michigan"],["MN","Minnesota"],["MS","Mississippi"],["MO","Missouri"],["MT","Montana"],["NE","Nebraska"],["NV","Nevada"],["NH","New Hampshire"],["NJ","New Jersey"],["NM","New Mexico"],["NY","New York"],["NC","North Carolina"],["ND","North Dakota"],["OH","Ohio"],["OK","Oklahoma"],["OR","Oregon"],["PA","Pennsylvania"],["PR","Puerto Rico"],["RI","Rhode Island"],["SC","South Carolina"],["SD","South Dakota"],["TN","Tennessee"],["TX","Texas"],["UT","Utah"],["VT","Vermont"],["VA","Virginia"],["WA","Washington"],["WV","West Virginia"],["WI","Wisconsin"],["WY","Wyoming"]],j=t=>t.split(",").pop().trim().slice(0,2),V=t=>t?new Date(`${t.length===7?t+"-01":t}T12:00:00`).toLocaleDateString("en-US",t.length===7?{month:"short",year:"numeric"}:{month:"short",day:"numeric",year:"numeric"}):"",G=()=>`
  <h3 id="alert-form-title" class="display d-sm">Get alerts for new projects</h3>
  <div class="field" data-f="email">
    <label for="af-email">Email</label>
    <input id="af-email" name="email" type="email" class="input" autocomplete="email" inputmode="email" placeholder="you@example.org" />
    <span class="err">Enter a valid email, or give a phone number for text alerts instead.</span>
  </div>
  <div class="field" data-f="phone">
    <label for="af-phone">Mobile for text alerts <span class="muted">(optional)</span></label>
    <input id="af-phone" name="phone" type="tel" class="input" autocomplete="tel" inputmode="tel" placeholder="(555) 555-0123" />
    <label class="consent sms"><input type="checkbox" name="sms" /> <span>Receive alerts via text?</span></label>
    <span class="err">Enter a 10-digit U.S. number and tick “Receive alerts via text” to get texts.</span>
  </div>
  <div class="field" data-f="where">
    <span class="label-like">Where</span>
    <div class="checkrow where-mode" role="radiogroup" aria-label="Alerts by">
      <label class="pill"><input type="radio" name="wmode" value="zip" checked />ZIP code</label>
      <label class="pill"><input type="radio" name="wmode" value="state" />State</label>
    </div>
    <select id="af-state" name="state" class="select" aria-label="State" hidden>
      <option value="">Choose a state</option>${R.map(([t,r])=>`<option value="${t}">${r}</option>`).join("")}
    </select>
    <div class="where-row">
      <input id="af-zip" name="zip" class="input" inputmode="numeric" autocomplete="postal-code" maxlength="5" placeholder="ZIP code" aria-label="ZIP code" />
      <select id="af-radius" name="radius" class="select" aria-label="Radius">
        <option value="1">within 1 mi</option><option value="3" selected>within 3 mi</option><option value="5">within 5 mi</option>
        <option value="10">within 10 mi</option><option value="25">within 25 mi</option><option value="county">whole county</option>
      </select>
    </div>
    <div class="area-chip" id="af-area" hidden></div>
    <span class="err">Enter a 5-digit ZIP or choose a state (or select a project).</span>
  </div>
  <fieldset class="field" data-f="types">
    <legend>Tell me about</legend>
    <div class="checkrow">${W.map(([t,r])=>`<label class="pill"><input type="checkbox" name="types" value="${t}" checked />${r}</label>`).join("")}</div>
    <span class="err">Pick at least one kind of alert.</span>
  </fieldset>
  <div class="field" data-f="projects">
    <span class="label-like">Projects</span>
    <div class="watching" id="af-watching"><span class="hint">None selected. Pick projects in the watch list, or just get alerts for your area.</span></div>
  </div>
  <fieldset class="field">
    <legend>Language</legend>
    <div class="checkrow lang-row"><label class="pill"><input type="radio" name="lang" value="en" checked />English</label><label class="pill"><input type="radio" name="lang" value="es" />Español</label></div>
  </fieldset>
  <div class="field" data-f="consent">
    <label class="consent"><input type="checkbox" name="consent" /> <span>I want alerts about data center proposals near me. I can unsubscribe at any time. My contact details are used only for these alerts and never sold or shared.</span></label>
    <span class="err">Please confirm to sign up.</span>
  </div>
  <button class="btn btn-primary" type="submit">Sign me up</button>
  <p class="form-status" role="status" aria-live="polite"></p>`;function Y(t,{byRight:r=!1,watched:b=!1}={}){const m=D[t.id]||{},C=q.includes(t.path);return`
  <article class="card watch-card ${r?"is-byright":""} ${b?"is-picked":""}" data-id="${t.id}" data-state="${j(t.jur)}">
    <div class="card-head">
      ${r?"":`<label class="pick"><input type="checkbox" data-pick="${t.id}" ${b?"checked":""} /><span class="sr-only">Select ${o(t.name)}</span></label>`}
      <span class="tag ${r?"solid-ink":"solid-red"}">${r?"Went through by right":o(t.out==="Pending"?"Decision pending":"Tabled / paused")}</span>
      <span class="tag ${C?"solid-acid":""}">${o(t.path)}</span>
    </div>
    <div class="card-body">
      <div><span class="label muted">${o(t.jur)}</span><h3>${o(t.name)}</h3></div>
      ${r?`<div class="alert warn"><b>No hearing. No vote.</b><p>${o(t.notes.split(". ").slice(0,2).join(". "))}.</p></div>`:m.next?`<div class="next"><span class="label">Next</span><p>${o(m.next)}</p>${m.date?`<span class="next-date num">${V(m.date)}</span> <span class="tag demo">Demo date</span>`:""}</div>`:""}
      <dl class="facts">
        <dt>Decided by</dt><dd>${o(t.body)}</dd>
        <dt>Hearing held</dt><dd>${o(t.hear)}${t.opp==="Yes"?", with opposition":""}</dd>
        ${t.veto&&t.veto!=="None"?`<dt>Other lever</dt><dd>${o(t.veto)}</dd>`:""}
        <dt>Last action</dt><dd>${o(t.out)}${t.date?` · ${V(t.date)}`:""}</dd>
        ${!r&&m.where?`<dt>Where</dt><dd>${o(m.where)} <span class="tag demo">Demo</span></dd>`:""}
        ${!r&&m.contact?`<dt>Contact</dt><dd>${o(m.contact)} <span class="tag demo">Demo</span></dd>`:""}
        ${t.pnw!=null?`<dt>Tract non-white</dt><dd>${t.pnw.toFixed(1)}%</dd>`:""}
      </dl>
      ${r?"":`<details class="notes"><summary>Case notes</summary><p>${o(t.notes)}</p>${t.tac?`<p class="tacs">${t.tac.split(";").map(x=>`<span class="tag">${o(x.trim())}</span>`).join(" ")}</p>`:""}</details>`}
    </div>
    <div class="card-foot">
      ${r?"":`<button class="btn btn-sm btn-primary" data-alert-one="${t.id}">Get alerts</button>`}
      ${!r&&m.date?`<button class="btn btn-sm" data-ics="${t.id}">Add to calendar</button>`:""}
      ${/^https?:/.test(t.url||"")?`<a class="linkish" href="${o(t.url)}" target="_blank" rel="noopener">Evidence ↗</a>`:""}
    </div>
  </article>`}async function _(){const[t,r]=await Promise.all([L("atlas/coded.json"),L("atlas/dc.json")]),b=Object.fromEntries(t.map(e=>[e.id,e])),m=["Pre-proposal","Proposed","Expanding"],C=r.cols.indexOf("status"),x=e=>r.rows[+e.slice(2)-1]?.[C],v=t.filter(e=>(e.out==="Pending"||e.out==="Tabled/postponed")&&m.includes(x(e.id))).sort((e,a)=>(D[e.id]?.date||"9999").localeCompare(D[a.id]?.date||"9999")),i=new Map;let c=null;const f=document.getElementById("watch"),d=[...new Set(v.map(e=>j(e.jur)))].sort(),h=4;let g=0;function $(e=f.dataset.filter||"all"){f.dataset.filter=e;const a=v.filter(l=>e==="all"||j(l.jur)===e),s=Math.max(1,Math.ceil(a.length/h));g=Math.min(g,s-1);const u=a.slice(g*h,g*h+h),p=s>1?`<nav class="pager" aria-label="Watch list pages">
        <button class="pager-btn" data-page="${g-1}" ${g===0?"disabled":""} aria-label="Previous page">←</button>
        ${Array.from({length:s},(l,w)=>`<button class="pager-btn" data-page="${w}" aria-current="${w===g?"page":"false"}">${w+1}</button>`).join("")}
        <button class="pager-btn" data-page="${g+1}" ${g===s-1?"disabled":""} aria-label="Next page">→</button>
        <span class="pager-n meta">${g*h+1}–${g*h+u.length} of ${a.length}</span>
      </nav>`:"";f.innerHTML=`
      <div class="watch-head">
        <h3 class="display d-sm">Watch list</h3>
        <p class="meta muted">${v.length} live fights from the coded sample, soonest first. Project facts are real; meeting logistics are <span class="tag demo">Demo</span> placeholders until a live feed is connected.</p>
        <div class="pick-bar">
          <label class="pick-all"><input type="checkbox" data-pick-all ${a.length&&a.every(l=>i.has(l.id))?"checked":""} /> Select all ${e==="all"?"":e+" "}(${a.length})</label>
          <span class="pick-n meta">${i.size?`${i.size} selected`:"Select projects to get alerts about them"}</span>
          <button class="btn btn-sm btn-primary" data-alert-picked ${i.size?"":"disabled"}>Get alerts${i.size?` for ${i.size}`:""} →</button>
        </div>
        <div class="checkrow state-filter" role="group" aria-label="Filter by state">
          <label class="pill"><input type="radio" name="wf" value="all" ${e==="all"?"checked":""} />All</label>
          ${d.map(l=>`<label class="pill"><input type="radio" name="wf" value="${l}" ${e===l?"checked":""} />${l}</label>`).join("")}
        </div>
      </div>
      <div class="watch-cards watch-live">${u.map(l=>Y(l,{watched:i.has(l.id)})).join("")}</div>
      ${p}
      ${v.some(l=>D[l.id]?.date)?'<button class="btn btn-ink" id="ics-all">Add all dated items to calendar (.ics)</button>':""}`}$();const N=e=>e.map(a=>({id:a,c:b[a],d:D[a]})).filter(a=>a.d?.date).map(({id:a,c:s,d:u})=>({id:a,date:u.date,title:`${s.name}: ${u.next}`,location:`${u.where}, ${s.jur}`,description:`${s.jur}. ${s.path}; decided by ${s.body}. DEMO DATE: confirm with ${u.contact}. Evidence: ${s.url||"n/a"}`}));f.addEventListener("change",e=>{if(e.target.name==="wf"){g=0,$(e.target.value);return}const a=f.dataset.filter||"all";if(e.target.matches("[data-pick-all]"))v.filter(s=>a==="all"||j(s.jur)===a).forEach(s=>e.target.checked?i.set(s.id,{name:s.name,jur:s.jur}):i.delete(s.id));else if(e.target.matches("[data-pick]")){const s=b[e.target.dataset.pick];e.target.checked?i.set(s.id,{name:s.name,jur:s.jur}):i.delete(s.id)}else return;$(),E()}),f.addEventListener("click",e=>{const a=e.target.closest("[data-page]");if(a&&!a.disabled){g=+a.dataset.page,$(),f.querySelector(".watch-live")?.scrollIntoView({block:"nearest",behavior:"smooth"});return}const s=e.target.closest("[data-alert-one]");if(s){const p=b[s.dataset.alertOne];i.set(p.id,{name:p.name,jur:p.jur}),$(),E(),S();return}if(e.target.closest("[data-alert-picked]")){S();return}const u=e.target.closest("[data-ics]");u&&z(N([u.dataset.ics]),`${u.dataset.ics}.ics`),e.target.id==="ics-all"&&z(N(v.map(p=>p.id)),"data-center-hearings.ics")});const y=document.getElementById("alert-dialog");let A=!0;function S({projects:e=!0}={}){A=e;const a=n.querySelector('[data-f="projects"]');a&&(a.hidden=!e),y.open||y.showModal(),E()}y.addEventListener("click",e=>{(e.target===y||e.target.closest("[data-close-alerts]"))&&y.close()}),document.querySelectorAll("[data-open-alerts]").forEach(e=>e.addEventListener("click",a=>{a.preventDefault(),S({projects:!1})}));const n=document.getElementById("alert-form");n.innerHTML=G();const I=e=>n.querySelector(`[data-f="${e}"]`),k=()=>n.wmode.value==="state";n.addEventListener("change",e=>{e.target.name==="wmode"&&(n.querySelector(".where-row").hidden=k(),n.state.hidden=!k(),(k()?n.state:n.zip).focus())});function E(){const e=n.querySelector("#af-watching");e.innerHTML=i.size?[...i].map(([a,s])=>`<span class="tag solid-ink">${o(s.name)} <button type="button" class="x" data-unwatch="${a}" aria-label="Stop watching ${o(s.name)}">×</button></span>`).join(""):'<span class="hint">None selected. Pick projects in the watch list, or just get alerts for your area.</span>'}n.addEventListener("click",e=>{const a=e.target.closest("[data-unwatch]");a&&(i.delete(a.dataset.unwatch),E(),$()),e.target.closest("[data-close-alerts]")&&y.close(),e.target.closest('a[href^="#"]')&&y.close(),e.target.closest("[data-clear-area]")&&(c=null,M())});function M(){const e=n.querySelector("#af-area");e.hidden=!c,c&&(e.innerHTML=`<span class="tag solid-acid">Area: ${o(c.label)}${c.county?` · ${o(c.county)}`:""} · ${c.radius} mi</span> <button type="button" class="linkish" data-clear-area>Clear</button>`)}T("watch",e=>{i.set(e.id||e.name,{name:e.name,jur:e.jur}),E(),b[e.id]&&$()}),T("area",e=>{c=e,M()}),T("watch",()=>S(),{replay:!1}),T("area",()=>S({projects:!1}),{replay:!1});const O=e=>e.replace(/\D/g,"");function B(){const e=n.email.value.trim(),a=O(n.phone.value),s=n.sms.checked,u=a.length===10||a.length===11&&a[0]==="1",p={email:e?!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e):!(u&&s),phone:a&&(!u||!s)||s&&!a,where:!c&&!(A&&i.size)&&(k()?!n.state.value:!/^\d{5}$/.test(n.zip.value.trim())),types:!n.querySelectorAll("[name=types]:checked").length,consent:!n.consent.checked};for(const[w,U]of Object.entries(p))I(w).classList.toggle("invalid",U);const l=Object.keys(p).find(w=>p[w]);return l&&I(l).querySelector("input, select")?.focus(),!l}n.addEventListener("input",e=>{const a=e.target.closest(".field.invalid");a&&a.classList.remove("invalid")}),n.addEventListener("submit",async e=>{e.preventDefault();const a=n.querySelector(".form-status");if(!B()){a.textContent="Check the highlighted fields.";return}const s={email:n.email.value.trim()||null,phone:O(n.phone.value)||null,sms:n.sms.checked,zip:k()?null:n.zip.value.trim()||null,radius:k()?null:n.radius.value,state:k()&&n.state.value||null,area:c?{lat:+c.lat.toFixed(4),lon:+c.lon.toFixed(4),radiusMi:c.radius,label:c.label,county:c.county}:null,types:[...n.querySelectorAll("[name=types]:checked")].map(p=>p.value),watching:A?[...i.keys()]:[],lang:n.lang.value,consent:!0},u=n.querySelector("[type=submit]");u.disabled=!0,a.textContent="Signing you up…";try{const p=await H(s);n.innerHTML=`
        <div class="form-done">
          <span class="tag solid-acid">${p.preview?"Preview mode · not sent":"Confirmed"}</span>
          <h3 class="display d-md">You're on the list.</h3>
          <p>${p.preview?"This is what would be sent to the alerts service. It is saved only in this browser.":"Check your inbox to confirm. Every alert has a one-click unsubscribe."}</p>
          <dl class="facts">
            <dt>Where</dt><dd>${o(c?`${c.label} · ${c.radius} mi`:s.state?R.find(l=>l[0]===s.state)[1]:s.zip?`ZIP ${s.zip} · ${s.radius==="county"?"whole county":s.radius+" mi"}`:"Selected projects only")}</dd>
            <dt>Alerts</dt><dd>${o(s.types.map(l=>W.find(w=>w[0]===l)[1]).join(", "))}</dd>
            <dt>Watching</dt><dd>${A&&i.size?o([...i.values()].map(l=>l.name).join(", ")):"—"}</dd>
          </dl>
          <p class="meta">Next: <a href="#toolkit">write a public comment</a> or <a href="#posters">make a poster</a> for the next hearing.</p>
        </div>`}catch(p){a.textContent=p.message,u.disabled=!1}})}export{_ as mount};
