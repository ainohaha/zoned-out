import{getJSON as O,esc as o}from"./data-O2ZHKVoJ.js";import{o as E}from"./bus-BOL5mWWo.js";const D="tmr:alerts:preview";async function I(t){const l={...t,submittedAt:new Date().toISOString(),source:"zoned-out"};{try{const p=JSON.parse(localStorage.getItem(D)||"[]");p.push(l),localStorage.setItem(D,JSON.stringify(p.slice(-20)))}catch{}return{ok:!0,preview:!0}}}function S(t,l="hearings.ics"){const p=new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+/,""),c=a=>String(a).replace(/([,;\\])/g,"\\$1").replace(/\n/g,"\\n"),d=a=>a.replace(/-/g,""),i=a=>{const u=new Date(`${a}T00:00:00Z`);return u.setUTCDate(u.getUTCDate()+1),u.toISOString().slice(0,10).replace(/-/g,"")},h=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Zoned Out//Alerts//EN","CALSCALE:GREGORIAN"];for(const a of t)h.push("BEGIN:VEVENT",`UID:${a.id}-${d(a.date)}@zoned-out`,`DTSTAMP:${p}`,`DTSTART;VALUE=DATE:${d(a.date)}`,`DTEND;VALUE=DATE:${i(a.date)}`,`SUMMARY:${c(a.title)}`,`DESCRIPTION:${c(a.description)}`,`LOCATION:${c(a.location||"")}`,"END:VEVENT");h.push("END:VCALENDAR");const y=a=>{const u=[];for(;a.length>60;)u.push(a.slice(0,60)),a=" "+a.slice(60);return u.push(a),u.join(`\r
`)},g=URL.createObjectURL(new Blob([h.map(y).join(`\r
`)],{type:"text/calendar"})),v=Object.assign(document.createElement("a"),{href:g,download:l});document.body.append(v),v.click(),v.remove(),setTimeout(()=>URL.revokeObjectURL(g),4e3)}const w={DC0224:{next:"Board of Commissioners hearing on the deferred special land use permit",date:"2026-10-27",where:"County administration building, commission chambers",contact:"Clerk to the Board · clerk@dekalb.example.gov"},DC0816:{next:"Borough council’s written conditional-use decision due (45 days after final testimony)",date:"2026-10-25",where:"Borough council chambers",contact:"Borough Secretary · secretary@archbald.example.gov"},DC1396:{next:"Board of Supervisors public hearing on the rezoning (planning commission recommended denial)",date:"2026-10-14",where:"County government center, board room",contact:"Clerk to the Board · clerk@loudoun.example.gov"},DC0770:{next:"City re-notices and rehears the rezoning ordinances under court order",date:"2026-10-20",where:"City council chambers",contact:"Clerk of Council · clerk@wilmington.example.gov"},DC0528:{next:"Public comment closes on the environmental review (AUAR)",date:"2026-10-30",where:"Written comments to the county",contact:"Planning & Zoning · zoning@nobles.example.gov"},DC0467:{next:"State air-permit comment deadline for new diesel generators",date:"2026-10-17",where:"State environmental agency, written comment",contact:"Permit office · airpermits@state.example.gov"},DC0697:{next:"Moratorium ends; town drafting a data center prohibition",date:"2027-05-01",where:"Town board meeting",contact:"Town Clerk · clerk@oneonta.example.gov"},DC0730:{next:"Moratorium expires; 330-acre rezoning could return",date:"2027-01-01",where:"City council chambers",contact:"Clerk of Council · clerk@sunbury.example.gov"},DC0457:{next:"Citywide one-year data center ban lapses unless extended",date:"2027-01-28",where:"City council chambers",contact:"Council Research · council@nola.example.gov"},DC0503:{next:"Commission work session on permanent data center rules",date:"2026-11-03",where:"City hall, commission chambers",contact:"City Clerk · clerk@kalamazoo.example.gov"},DC0680:{next:"Three-year moratorium in effect",date:"2029-06-01",where:"Town board meeting",contact:"Town Clerk · clerk@eastfishkill.example.gov"},DC0506:{next:"Application suspended until water and wastewater needs are disclosed",date:null,where:"Township board meeting",contact:"Township Clerk · clerk@lowelltwp.example.gov"}},P=["By right","No zoning (unregulated)","Site plan review only"],M=["DC0063","DC0098","DC0102","DC0336"],j=[["proposals","New proposals"],["status","Status changes"],["hearings","Hearings & meetings"],["deadlines","Comment deadlines"],["byright","By-right permits filed"]],k=t=>t.split(",").pop().trim().slice(0,2),T=t=>t?new Date(`${t.length===7?t+"-01":t}T12:00:00`).toLocaleDateString("en-US",t.length===7?{month:"short",year:"numeric"}:{month:"short",day:"numeric",year:"numeric"}):"",z=()=>`
  <h3 id="alert-form-title" class="display d-sm">Sign up for local alerts</h3>
  <p class="alert warn form-mode"><b>Preview mode</b>This studio build has no mail service connected. Sign-ups stay in your browser and nothing is sent.</p>
  <div class="field" data-f="email">
    <label for="af-email">Email</label>
    <input id="af-email" name="email" type="email" class="input" autocomplete="email" inputmode="email" placeholder="you@example.org" />
    <span class="err">Enter a valid email, or give a phone number for text alerts instead.</span>
  </div>
  <div class="field" data-f="phone">
    <label for="af-phone">Mobile for text alerts <span class="muted">(optional)</span></label>
    <input id="af-phone" name="phone" type="tel" class="input" autocomplete="tel" inputmode="tel" placeholder="(555) 555-0123" />
    <label class="pill sms"><input type="checkbox" name="sms" /> Text me hearing reminders</label>
    <span class="err">Enter a 10-digit U.S. number and tick “Text me” to get texts.</span>
  </div>
  <div class="field" data-f="where">
    <label for="af-zip">Where</label>
    <div class="where-row">
      <input id="af-zip" name="zip" class="input" inputmode="numeric" autocomplete="postal-code" maxlength="5" placeholder="ZIP code" />
      <select id="af-radius" name="radius" class="select" aria-label="Radius">
        <option value="1">within 1 mi</option><option value="3" selected>within 3 mi</option><option value="5">within 5 mi</option>
        <option value="10">within 10 mi</option><option value="25">within 25 mi</option><option value="county">whole county</option>
      </select>
    </div>
    <div class="area-chip" id="af-area" hidden></div>
    <span class="hint">Or use <a href="#tracker">Near me</a> on the tracker and press “Get alerts for this area.”</span>
    <span class="err">Enter a 5-digit ZIP, or pick an area on the map.</span>
  </div>
  <fieldset class="field" data-f="types">
    <legend>Tell me about</legend>
    <div class="checkrow">${j.map(([t,l])=>`<label class="pill"><input type="checkbox" name="types" value="${t}" checked />${l}</label>`).join("")}</div>
    <span class="err">Pick at least one kind of alert.</span>
  </fieldset>
  <div class="field">
    <span class="label-like">Projects you're watching</span>
    <div class="watching" id="af-watching"><span class="hint">None yet. Press “Watch” on a project.</span></div>
  </div>
  <fieldset class="field">
    <legend>Language</legend>
    <div class="checkrow"><label class="pill"><input type="radio" name="lang" value="en" checked />English</label><label class="pill"><input type="radio" name="lang" value="es" />Español</label></div>
  </fieldset>
  <div class="field" data-f="consent">
    <label class="consent"><input type="checkbox" name="consent" /> <span>I want alerts about data center proposals near me. I can unsubscribe at any time. My contact details are used only for these alerts and never sold or shared.</span></label>
    <span class="err">Please confirm to sign up.</span>
  </div>
  <button class="btn btn-primary" type="submit">Sign me up</button>
  <p class="form-status" role="status" aria-live="polite"></p>`;function A(t,{byRight:l=!1,watched:p=!1}={}){const c=w[t.id]||{},d=P.includes(t.path);return`
  <article class="card watch-card ${l?"is-byright":""}" data-id="${t.id}" data-state="${k(t.jur)}">
    <div class="card-head">
      <span class="tag ${l?"solid-ink":"solid-red"}">${l?"Went through by right":o(t.out==="Pending"?"Decision pending":"Tabled / paused")}</span>
      <span class="tag ${d?"solid-acid":""}">${o(t.path)}</span>
    </div>
    <div class="card-body">
      <div><span class="label muted">${o(t.jur)}</span><h3>${o(t.name)}</h3></div>
      ${l?`<div class="alert warn"><b>No hearing. No vote.</b><p>${o(t.notes.split(". ").slice(0,2).join(". "))}.</p></div>`:c.next?`<div class="next"><span class="label">Next</span><p>${o(c.next)}</p>${c.date?`<span class="next-date num">${T(c.date)}</span> <span class="tag demo">Demo date</span>`:""}</div>`:""}
      <dl class="facts">
        <dt>Decided by</dt><dd>${o(t.body)}</dd>
        <dt>Hearing held</dt><dd>${o(t.hear)}${t.opp==="Yes"?", with opposition":""}</dd>
        ${t.veto&&t.veto!=="None"?`<dt>Other lever</dt><dd>${o(t.veto)}</dd>`:""}
        <dt>Last action</dt><dd>${o(t.out)}${t.date?` · ${T(t.date)}`:""}</dd>
        ${!l&&c.where?`<dt>Where</dt><dd>${o(c.where)} <span class="tag demo">Demo</span></dd>`:""}
        ${!l&&c.contact?`<dt>Contact</dt><dd>${o(c.contact)} <span class="tag demo">Demo</span></dd>`:""}
        ${t.pnw!=null?`<dt>Tract non-white</dt><dd>${t.pnw.toFixed(1)}%</dd>`:""}
      </dl>
      ${l?"":`<details class="notes"><summary>Case notes</summary><p>${o(t.notes)}</p>${t.tac?`<p class="tacs">${t.tac.split(";").map(i=>`<span class="tag">${o(i.trim())}</span>`).join(" ")}</p>`:""}</details>`}
    </div>
    <div class="card-foot">
      ${l?"":`<button class="btn btn-sm ${p?"btn-ink":""}" data-watch="${t.id}" aria-pressed="${p}">${p?"✓ Watching":"Watch"}</button>`}
      ${!l&&c.date?`<button class="btn btn-sm" data-ics="${t.id}">Add to calendar</button>`:""}
      ${/^https?:/.test(t.url||"")?`<a class="linkish" href="${o(t.url)}" target="_blank" rel="noopener">Evidence ↗</a>`:""}
    </div>
  </article>`}async function U(){const t=await O("atlas/coded.json"),l=Object.fromEntries(t.map(e=>[e.id,e])),p=t.filter(e=>e.out==="Pending"||e.out==="Tabled/postponed").sort((e,s)=>(w[e.id]?.date||"9999").localeCompare(w[s.id]?.date||"9999")),c=M.map(e=>l[e]).filter(Boolean),d=new Map;let i=null;const h=document.getElementById("watch"),y=[...new Set(p.map(e=>k(e.jur)))].sort();function g(e=h.dataset.filter||"all"){h.dataset.filter=e;const s=p.filter(n=>e==="all"||k(n.jur)===e);h.innerHTML=`
      <div class="watch-head">
        <h3 class="display d-sm">Watch list</h3>
        <p class="meta muted">${p.length} live fights from the coded sample, soonest first. Project facts are real; meeting logistics are <span class="tag demo">Demo</span> placeholders until a live feed is connected.</p>
        <div class="checkrow state-filter" role="group" aria-label="Filter by state">
          <label class="pill"><input type="radio" name="wf" value="all" ${e==="all"?"checked":""} />All</label>
          ${y.map(n=>`<label class="pill"><input type="radio" name="wf" value="${n}" ${e===n?"checked":""} />${n}</label>`).join("")}
        </div>
      </div>
      <div class="watch-cards">${s.map(n=>A(n,{watched:d.has(n.id)})).join("")}</div>
      <div class="watch-head byright-head">
        <h3 class="display d-sm">Already through: no hearing</h3>
        <p class="meta muted">What “by right” looks like after the fact. Alerts for by-right permit filings are the only early warning these places could have had.</p>
      </div>
      <div class="watch-cards">${c.map(n=>A(n,{byRight:!0})).join("")}</div>
      ${p.some(n=>w[n.id]?.date)?'<button class="btn btn-ink" id="ics-all">Add all dated items to calendar (.ics)</button>':""}`}g();const v=e=>e.map(s=>({id:s,c:l[s],d:w[s]})).filter(s=>s.d?.date).map(({id:s,c:n,d:r})=>({id:s,date:r.date,title:`${n.name}: ${r.next}`,location:`${r.where}, ${n.jur}`,description:`${n.jur}. ${n.path}; decided by ${n.body}. DEMO DATE: confirm with ${r.contact}. Evidence: ${n.url||"n/a"}`}));h.addEventListener("change",e=>{e.target.name==="wf"&&g(e.target.value)}),h.addEventListener("click",e=>{const s=e.target.closest("[data-watch]");if(s){const r=l[s.dataset.watch];d.has(r.id)?d.delete(r.id):d.set(r.id,{name:r.name,jur:r.jur}),g(),$();return}const n=e.target.closest("[data-ics]");n&&S(v([n.dataset.ics]),`${n.dataset.ics}.ics`),e.target.id==="ics-all"&&S(v(p.map(r=>r.id)),"data-center-hearings.ics")});const a=document.getElementById("alert-form");a.innerHTML=z();const u=e=>a.querySelector(`[data-f="${e}"]`);function $(){const e=a.querySelector("#af-watching");e.innerHTML=d.size?[...d].map(([s,n])=>`<span class="tag solid-ink">${o(n.name)} <button type="button" class="x" data-unwatch="${s}" aria-label="Stop watching ${o(n.name)}">×</button></span>`).join(""):'<span class="hint">None yet. Press “Watch” on a project.</span>'}a.addEventListener("click",e=>{const s=e.target.closest("[data-unwatch]");s&&(d.delete(s.dataset.unwatch),$(),g()),e.target.closest("[data-clear-area]")&&(i=null,C())});function C(){const e=a.querySelector("#af-area");e.hidden=!i,i&&(e.innerHTML=`<span class="tag solid-acid">Area: ${o(i.label)}${i.county?` · ${o(i.county)}`:""} · ${i.radius} mi</span> <button type="button" class="linkish" data-clear-area>Clear</button>`)}E("watch",e=>{d.set(e.id||e.name,{name:e.name,jur:e.jur}),$(),l[e.id]&&g()}),E("area",e=>{i=e,C()});const x=e=>e.replace(/\D/g,"");function L(){const e=a.email.value.trim(),s=x(a.phone.value),n=a.sms.checked,r=s.length===10||s.length===11&&s[0]==="1",m={email:e?!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e):!(r&&n),phone:s&&(!r||!n)||n&&!s,where:!i&&!/^\d{5}$/.test(a.zip.value.trim()),types:!a.querySelectorAll("[name=types]:checked").length,consent:!a.consent.checked};for(const[b,N]of Object.entries(m))u(b).classList.toggle("invalid",N);const f=Object.keys(m).find(b=>m[b]);return f&&u(f).querySelector("input, select")?.focus(),!f}a.addEventListener("input",e=>{const s=e.target.closest(".field.invalid");s&&s.classList.remove("invalid")}),a.addEventListener("submit",async e=>{e.preventDefault();const s=a.querySelector(".form-status");if(!L()){s.textContent="Check the highlighted fields.";return}const n={email:a.email.value.trim()||null,phone:x(a.phone.value)||null,sms:a.sms.checked,zip:a.zip.value.trim()||null,radius:a.radius.value,area:i?{lat:+i.lat.toFixed(4),lon:+i.lon.toFixed(4),radiusMi:i.radius,label:i.label,county:i.county}:null,types:[...a.querySelectorAll("[name=types]:checked")].map(m=>m.value),watching:[...d.keys()],lang:a.lang.value,consent:!0},r=a.querySelector("[type=submit]");r.disabled=!0,s.textContent="Signing you up…";try{const m=await I(n);a.innerHTML=`
        <div class="form-done">
          <span class="tag solid-acid">${m.preview?"Preview mode · not sent":"Confirmed"}</span>
          <h3 class="display d-md">You're on the list.</h3>
          <p>${m.preview?"This is what would be sent to the alerts service. It is saved only in this browser.":"Check your inbox to confirm. Every alert has a one-click unsubscribe."}</p>
          <dl class="facts">
            <dt>Where</dt><dd>${o(i?`${i.label} · ${i.radius} mi`:`ZIP ${n.zip} · ${n.radius==="county"?"whole county":n.radius+" mi"}`)}</dd>
            <dt>Alerts</dt><dd>${o(n.types.map(f=>j.find(b=>b[0]===f)[1]).join(", "))}</dd>
            <dt>Watching</dt><dd>${d.size?o([...d.values()].map(f=>f.name).join(", ")):"—"}</dd>
          </dl>
          <p class="meta">Next: <a href="#toolkit">write a public comment</a> or <a href="#posters">make a poster</a> for the next hearing.</p>
        </div>`}catch(m){s.textContent=m.message,r.disabled=!1}})}export{U as mount};
