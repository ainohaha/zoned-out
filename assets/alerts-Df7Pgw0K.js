import{getJSON as z,esc as r}from"./data-COdwnUUt.js";import{o as A}from"./main-DC05Kwo4.js";import"./sections-xZ48GWw_.js";import"./reveal-BGnDgJKr.js";const I="tmr:alerts:preview";async function V(a){const c={...a,submittedAt:new Date().toISOString(),source:"zoned-out"};{try{const g=JSON.parse(localStorage.getItem(I)||"[]");g.push(c),localStorage.setItem(I,JSON.stringify(g.slice(-20)))}catch{}return{ok:!0,preview:!0}}}function H(a,c="hearings.ics"){const g=new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+/,""),o=l=>String(l).replace(/([,;\\])/g,"\\$1").replace(/\n/g,"\\n"),d=l=>l.replace(/-/g,""),b=l=>{const h=new Date(`${l}T00:00:00Z`);return h.setUTCDate(h.getUTCDate()+1),h.toISOString().slice(0,10).replace(/-/g,"")},v=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Zoned Out//Alerts//EN","CALSCALE:GREGORIAN"];for(const l of a)v.push("BEGIN:VEVENT",`UID:${l.id}-${d(l.date)}@zoned-out`,`DTSTAMP:${g}`,`DTSTART;VALUE=DATE:${d(l.date)}`,`DTEND;VALUE=DATE:${b(l.date)}`,`SUMMARY:${o(l.title)}`,`DESCRIPTION:${o(l.description)}`,`LOCATION:${o(l.location||"")}`,"END:VEVENT");v.push("END:VCALENDAR");const m=l=>{const h=[];for(;l.length>60;)h.push(l.slice(0,60)),l=" "+l.slice(60);return h.push(l),h.join(`\r
`)},w=URL.createObjectURL(new Blob([v.map(m).join(`\r
`)],{type:"text/calendar"})),D=Object.assign(document.createElement("a"),{href:w,download:c});document.body.append(D),D.click(),D.remove(),setTimeout(()=>URL.revokeObjectURL(w),4e3)}const C={DC0224:{closed:!0,next:"County commissioners unanimously denied the special land use permit on Aug 13, 2026.",date:null,where:null,contact:null,src:"https://www.decaturish.com/news/dekalb/dekalb-commissioners-reject-1-6b-data-center-plan/article_764ca039-a089-40fc-b75a-528c4da075a0.html"},DC0816:{next:"Borough council must vote and issue its written decision on the conditional use permit within 45 days of the Sept 10 final hearing. The vote meeting hasn’t been announced.",date:"2026-10-25",time:"Decision deadline",where:null,contact:"Borough Office · 570-876-1800 · meeting alerts at archbaldpa.gov",src:"https://www.wvia.org/news/local/2026-09-10/archbald-borough-council-decides-against-recusal-listens-to-final-testimony-on-wildcat-ridge-data-center"},DC1396:{next:"The Board of Supervisors still has to hold its own public hearing on the rezoning. No date is set yet; the Planning Commission recommended denial.",date:null,where:"Board Room, Loudoun County Government Center, 1 Harrison St SE, Leesburg",contact:"Board of Supervisors · 703-777-0204 · sign up to speak: 703-777-0200",src:"https://www.loudoun.gov/4853/About-Board-of-Supervisors-Meetings"},DC0770:{next:"City Council meeting with public comment. Council re-passed the ordinances as emergency measures on Sept 3, which blocks a referendum; a resident is suing. Amazon’s site plan is not scheduled yet.",date:"2026-10-15",time:"7 pm",where:"Council Chambers, Room 228, Municipal Building, 69 N South St",contact:"Clerk of Council · 937-383-5546 · clerk@wilmingtonohio.gov",src:"https://wilmingtonohio.gov/meetings/city-council-meeting-october-15-2026"},DC0528:{closed:!0,next:"County commissioners voted 3–2 against the zoning change on Apr 23, 2026, blocking the project.",date:null,where:null,contact:null,src:"https://www.datacenterdynamics.com/en/news/4bn-data-center-rejected-by-nobles-county-minnesota"},DC0467:{next:"City public meeting on permanent data center zoning: a citywide ban, or data centers up to 15 MW by special permit. A court has paused new generators while residents’ permit challenge goes on.",date:"2026-10-07",time:"6:30–8 pm",where:"Lowell Senior Center, 276 Broadway St",contact:"Planning and Development · 978-674-4252 · DPDProjects@lowellma.gov",src:"https://www.lowellma.gov/AgendaCenter/ViewFile/Item/36138?fileID=105736"},DC0697:{next:"Town Board meeting. During its 12-month moratorium the town is drafting a law to ban large data centers; no agenda is posted yet.",date:"2026-10-14",time:"7 pm",where:"Town Hall, 3966 State Highway 23, West Oneonta",contact:"Town Clerk · 607-432-2900 · clerk@townofoneonta.org",src:"https://townofoneonta.org/download_file/view/be77a2e9-37fe-4bd9-b01d-5a4501c47281/241"},DC0730:{next:"Voters decide a citizen charter amendment capping data centers at 25 MW. The city’s data center moratorium runs to Jan 31, 2027.",date:"2026-11-03",time:"Polls 6:30 am–7:30 pm",where:"Your assigned polling place (Delaware County Board of Elections)",contact:"Clerk of Council · 740-965-2684 ext. 260",src:"https://1808delaware.com/sunbury/citizen-data-center-amendment-heads-to-sunbury-voters/"},DC0457:{next:"The citywide one-year data center ban lapses about Jan 28, 2027 unless the Council extends it. Permanent data center zoning rules are still to come.",date:"2027-01-28",time:"About; one year after adoption",where:"Council Chamber, City Hall, 1300 Perdido St",contact:"Clerk of Council · 504-658-1085 · clerkofcouncil@nola.gov",src:"https://council.nola.gov/news/january-2026/new-orleans-city-council-approves-motions-to-study/"},DC0503:{next:"City Commission public hearing and final vote on writing the one-year data center moratorium into the zoning code. Permanent rules and a task force come next.",date:"2026-10-05",time:"7 pm",where:"Commission Chambers, City Hall, 241 W South St",contact:"City of Kalamazoo · 311 or 269-337-8000 · 311@kalamazoocity.org",src:"https://publicmedianet.org/news/community/kalamazoo-advances-zoning-ordinance-to-formalize-data-center-moratorium/"},DC0680:{next:"Town Board meeting with public comment; ask for an update on the new Data Center Task Force. The three-year ban runs to July 1, 2029.",date:"2026-10-22",time:"6 pm",where:"Town Hall, 330 Route 376, Hopewell Junction",contact:"Town Clerk · 845-221-9191",src:"https://eastfishkillny.gov/?page_id=319"},DC0506:{next:"Planning Commission meeting; the committee drafting a data center ordinance reports. No hearing on Microsoft’s rezoning is scheduled yet.",date:"2026-10-12",time:"7 pm",where:"Check the posted agenda: Township Hall, 2910 Alden Nash Ave SE, or Lowell Middle School, 750 Foreman Rd",contact:"Township Clerk · 616-897-7600 · clerk@lowelltwp.org",src:"https://www.lowelltwp.org/Document%20Center/Government/Boards%20&%20Committees/2026%20Meeting%20Schedule.docx"}},W=["By right","No zoning (unregulated)","Site plan review only"],L=[["proposals","New proposals"],["status","Status changes"],["hearings","Hearings & meetings"],["deadlines","Comment deadlines"],["byright","By-right permits filed"]],S=[["AL","Alabama"],["AK","Alaska"],["AZ","Arizona"],["AR","Arkansas"],["CA","California"],["CO","Colorado"],["CT","Connecticut"],["DE","Delaware"],["DC","District of Columbia"],["FL","Florida"],["GA","Georgia"],["HI","Hawaii"],["ID","Idaho"],["IL","Illinois"],["IN","Indiana"],["IA","Iowa"],["KS","Kansas"],["KY","Kentucky"],["LA","Louisiana"],["ME","Maine"],["MD","Maryland"],["MA","Massachusetts"],["MI","Michigan"],["MN","Minnesota"],["MS","Mississippi"],["MO","Missouri"],["MT","Montana"],["NE","Nebraska"],["NV","Nevada"],["NH","New Hampshire"],["NJ","New Jersey"],["NM","New Mexico"],["NY","New York"],["NC","North Carolina"],["ND","North Dakota"],["OH","Ohio"],["OK","Oklahoma"],["OR","Oregon"],["PA","Pennsylvania"],["PR","Puerto Rico"],["RI","Rhode Island"],["SC","South Carolina"],["SD","South Dakota"],["TN","Tennessee"],["TX","Texas"],["UT","Utah"],["VT","Vermont"],["VA","Virginia"],["WA","Washington"],["WV","West Virginia"],["WI","Wisconsin"],["WY","Wyoming"]],T=a=>a.split(",").pop().trim().slice(0,2),M=a=>a?new Date(`${a.length===7?a+"-01":a}T12:00:00`).toLocaleDateString("en-US",a.length===7?{month:"short",year:"numeric"}:{month:"short",day:"numeric",year:"numeric"}):"",B=()=>`
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
      <option value="">Choose a state</option>${S.map(([a,c])=>`<option value="${a}">${c}</option>`).join("")}
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
    <div class="checkrow">${L.map(([a,c])=>`<label class="pill"><input type="checkbox" name="types" value="${a}" checked />${c}</label>`).join("")}</div>
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
  <p class="form-status" role="status" aria-live="polite"></p>`;function R(a,{byRight:c=!1,watched:g=!1}={}){const o=C[a.id]||{},d=W.includes(a.path);return`
  <article class="card watch-card ${c?"is-byright":""} ${g?"is-picked":""}" data-id="${a.id}" data-state="${T(a.jur)}">
    <div class="card-head">
      ${c?"":`<label class="pick"><input type="checkbox" data-pick="${a.id}" ${g?"checked":""} /><span class="sr-only">Select ${r(a.name)}</span></label>`}
      <span class="tag ${c?"solid-ink":"solid-red"}">${c?"Went through by right":r(a.out==="Pending"?"Decision pending":"Tabled / paused")}</span>
      <span class="tag ${d?"solid-acid":""}">${r(a.path)}</span>
    </div>
    <div class="card-body">
      <div><span class="label muted">${r(a.jur)}</span><h3>${r(a.name)}</h3></div>
      ${c?`<div class="alert warn"><b>No hearing. No vote.</b><p>${r(a.notes.split(". ").slice(0,2).join(". "))}.</p></div>`:o.next?`<div class="next"><span class="label">Next</span><p>${r(o.next)}</p>${o.date?`<span class="next-date num">${M(o.date)}</span>${o.time?` <span class="next-time meta">${r(o.time)}</span>`:""}`:""}</div>`:""}
      <dl class="facts">
        <dt>Decided by</dt><dd>${r(a.body)}</dd>
        <dt>Hearing held</dt><dd>${r(a.hear)}${a.opp==="Yes"?", with opposition":""}</dd>
        ${a.veto&&a.veto!=="None"?`<dt>Other lever</dt><dd>${r(a.veto)}</dd>`:""}
        <dt>Last action</dt><dd>${r(a.out)}${a.date?` · ${M(a.date)}`:""}</dd>
        ${!c&&o.where?`<dt>Where</dt><dd>${r(o.where)}</dd>`:""}
        ${!c&&o.contact?`<dt>Contact</dt><dd>${r(o.contact)}</dd>`:""}
      </dl>
      ${c?"":`<details class="notes"><summary>Case notes</summary><p>${r(a.notes)}</p>${a.tac?`<p class="tacs">${a.tac.split(";").map(b=>`<span class="tag">${r(b.trim())}</span>`).join(" ")}</p>`:""}</details>`}
    </div>
    <div class="card-foot">
      ${c?"":`<button class="btn btn-sm btn-primary" data-alert-one="${a.id}">Get alerts</button>`}
      ${!c&&o.date?`<button class="btn btn-sm" data-ics="${a.id}">Add to calendar</button>`:""}
    </div>
  </article>`}async function Y(){const a=await z("atlas/coded.json"),c=Object.fromEntries(a.map(e=>[e.id,e])),g=a.filter(e=>(e.out==="Pending"||e.out==="Tabled/postponed")&&C[e.id]?.src&&!C[e.id].closed).sort((e,t)=>(C[e.id]?.date||"9999").localeCompare(C[t.id]?.date||"9999")),o=new Map;let d=null;const b=document.getElementById("watch"),v=4;let m=0;function w(e=b.dataset.filter||"all"){b.dataset.filter=e;const t=g.filter(i=>e==="all"||T(i.jur)===e),n=Math.max(1,Math.ceil(t.length/v));m=Math.min(m,n-1);const p=t.slice(m*v,m*v+v),u=n>1?`<nav class="pager" aria-label="Watch list pages">
        <button class="pager-btn" data-page="${m-1}" ${m===0?"disabled":""} aria-label="Previous page">←</button>
        ${Array.from({length:n},(i,f)=>`<button class="pager-btn" data-page="${f}" aria-current="${f===m?"page":"false"}">${f+1}</button>`).join("")}
        <button class="pager-btn" data-page="${m+1}" ${m===n-1?"disabled":""} aria-label="Next page">→</button>
        <span class="pager-n meta">${m*v+1}–${m*v+p.length} of ${t.length}</span>
      </nav>`:"";b.innerHTML=`
      <div class="watch-head">
        <div class="watch-tools">
          <label class="pick-all"${t.length?"":" hidden"}><input type="checkbox" data-pick-all ${t.length&&t.every(i=>o.has(i.id))?"checked":""} /> Select all ${e==="all"?"":(S.find(i=>i[0]===e)?.[1]||e)+" "}(${t.length})</label>
          <label class="state-filter"><span class="sr-only">Filter by state</span>
            <select class="select" name="wf">
              <option value="all">All states</option>
              ${S.map(([i,f])=>{const E=g.filter(P=>T(P.jur)===i).length;return`<option value="${i}" ${e===i?"selected":""}>${r(f)}${E?` (${E})`:""}</option>`}).join("")}
            </select>
          </label>
        </div>
        ${o.size?`<div class="pick-bar">
          <span class="pick-n meta">${o.size} selected</span>
          <button type="button" class="linkish" data-pick-clear>Clear</button>
          <button class="btn btn-sm btn-primary" data-alert-picked>Get alerts for ${o.size} →</button>
        </div>`:""}
      </div>
      ${t.length?`<div class="watch-cards watch-live">${p.map(i=>R(i,{watched:o.has(i.id)})).join("")}</div>`:`<div class="watch-empty">
        <p>No open fights we’re tracking in ${r(S.find(i=>i[0]===e)?.[1]||e)} right now.</p>
        <button class="btn btn-sm btn-primary" data-alert-state="${e}">Get alerts for ${r(S.find(i=>i[0]===e)?.[1]||e)}</button>
      </div>`}
      ${u}`}w();const D=e=>e.map(t=>({id:t,c:c[t],d:C[t]})).filter(t=>t.d?.date).map(({id:t,c:n,d:p})=>({id:t,date:p.date,title:`${n.name}: ${p.next}`,location:`${p.where}, ${n.jur}`,description:`${n.jur}. ${n.path}; decided by ${n.body}. Confirm with ${p.contact||"the clerk"}. Evidence: ${n.url||"n/a"}`}));b.addEventListener("change",e=>{if(e.target.name==="wf"){m=0,w(e.target.value);return}const t=b.dataset.filter||"all";if(e.target.matches("[data-pick-all]"))g.filter(n=>t==="all"||T(n.jur)===t).forEach(n=>e.target.checked?o.set(n.id,{name:n.name,jur:n.jur}):o.delete(n.id));else if(e.target.matches("[data-pick]")){const n=c[e.target.dataset.pick];e.target.checked?o.set(n.id,{name:n.name,jur:n.jur}):o.delete(n.id)}else return;w(),k()}),b.addEventListener("click",e=>{const t=e.target.closest("[data-page]");if(t&&!t.disabled){m=+t.dataset.page,w(),b.querySelector(".watch-live")?.scrollIntoView({block:"nearest",behavior:"smooth"});return}const n=e.target.closest("[data-alert-one]");if(n){const i=c[n.dataset.alertOne];o.set(i.id,{name:i.name,jur:i.jur}),w(),k(),$();return}if(e.target.closest("[data-alert-picked]")){$();return}const p=e.target.closest("[data-alert-state]");if(p){s.wmode.value="state",s.querySelector(".where-row").hidden=!0,s.state.hidden=!1,s.state.value=p.dataset.alertState,$({projects:!1});return}if(e.target.closest("[data-pick-clear]")){o.clear(),w(),k();return}const u=e.target.closest("[data-ics]");u&&H(D([u.dataset.ics]),`${u.dataset.ics}.ics`)});const l=document.getElementById("alert-dialog");let h=!0;function $({projects:e=!0}={}){h=e;const t=s.querySelector('[data-f="projects"]');t&&(t.hidden=!e),l.open||l.showModal(),k()}l.addEventListener("click",e=>{(e.target===l||e.target.closest("[data-close-alerts]"))&&l.close()}),document.querySelectorAll("[data-open-alerts]").forEach(e=>e.addEventListener("click",t=>{t.preventDefault(),$({projects:!1})}));const s=document.getElementById("alert-form");s.innerHTML=B();const j=e=>s.querySelector(`[data-f="${e}"]`),y=()=>s.wmode.value==="state";s.addEventListener("change",e=>{e.target.name==="wmode"&&(s.querySelector(".where-row").hidden=y(),s.state.hidden=!y(),(y()?s.state:s.zip).focus())});function k(){const e=s.querySelector("#af-watching");e.innerHTML=o.size?[...o].map(([t,n])=>`<span class="tag solid-ink">${r(n.name)} <button type="button" class="x" data-unwatch="${t}" aria-label="Stop watching ${r(n.name)}">×</button></span>`).join(""):'<span class="hint">None selected. Pick projects in the watch list, or just get alerts for your area.</span>'}s.addEventListener("click",e=>{const t=e.target.closest("[data-unwatch]");t&&(o.delete(t.dataset.unwatch),k(),w()),e.target.closest("[data-close-alerts]")&&l.close(),e.target.closest('a[href^="#"]')&&l.close(),e.target.closest("[data-clear-area]")&&(d=null,x())});function x(){const e=s.querySelector("#af-area");e.hidden=!d,d&&(e.innerHTML=`<span class="tag solid-acid">Area: ${r(d.label)}${d.county?` · ${r(d.county)}`:""} · ${d.radius} mi</span> <button type="button" class="linkish" data-clear-area>Clear</button>`)}A("watch",e=>{o.set(e.id||e.name,{name:e.name,jur:e.jur}),k(),c[e.id]&&w()}),A("area",e=>{d=e,x()}),A("watch",()=>$(),{replay:!1}),A("area",()=>$({projects:!1}),{replay:!1});const N=e=>e.replace(/\D/g,"");function O(){const e=s.email.value.trim(),t=N(s.phone.value),n=s.sms.checked,p=t.length===10||t.length===11&&t[0]==="1",u={email:e?!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e):!(p&&n),phone:t&&(!p||!n)||n&&!t,where:!d&&!(h&&o.size)&&(y()?!s.state.value:!/^\d{5}$/.test(s.zip.value.trim())),types:!s.querySelectorAll("[name=types]:checked").length,consent:!s.consent.checked};for(const[f,E]of Object.entries(u))j(f).classList.toggle("invalid",E);const i=Object.keys(u).find(f=>u[f]);return i&&j(i).querySelector("input, select")?.focus(),!i}s.addEventListener("input",e=>{const t=e.target.closest(".field.invalid");t&&t.classList.remove("invalid")}),s.addEventListener("submit",async e=>{e.preventDefault();const t=s.querySelector(".form-status");if(!O()){t.textContent="Check the highlighted fields.";return}const n={email:s.email.value.trim()||null,phone:N(s.phone.value)||null,sms:s.sms.checked,zip:y()?null:s.zip.value.trim()||null,radius:y()?null:s.radius.value,state:y()&&s.state.value||null,area:d?{lat:+d.lat.toFixed(4),lon:+d.lon.toFixed(4),radiusMi:d.radius,label:d.label,county:d.county}:null,types:[...s.querySelectorAll("[name=types]:checked")].map(u=>u.value),watching:h?[...o.keys()]:[],lang:s.lang.value,consent:!0},p=s.querySelector("[type=submit]");p.disabled=!0,t.textContent="Signing you up…";try{const u=await V(n);s.innerHTML=`
        <div class="form-done">
          <span class="tag solid-acid">${u.preview?"Preview mode · not sent":"Confirmed"}</span>
          <h3 class="display d-md">You're on the list.</h3>
          <p>${u.preview?"This is what would be sent to the alerts service. It is saved only in this browser.":"Check your inbox to confirm. Every alert has a one-click unsubscribe."}</p>
          <dl class="facts">
            <dt>Where</dt><dd>${r(d?`${d.label} · ${d.radius} mi`:n.state?S.find(i=>i[0]===n.state)[1]:n.zip?`ZIP ${n.zip} · ${n.radius==="county"?"whole county":n.radius+" mi"}`:"Selected projects only")}</dd>
            <dt>Alerts</dt><dd>${r(n.types.map(i=>L.find(f=>f[0]===i)[1]).join(", "))}</dd>
            <dt>Watching</dt><dd>${h&&o.size?r([...o.values()].map(i=>i.name).join(", ")):"—"}</dd>
          </dl>
          <p class="meta">Next: <a href="#toolkit">write a public comment</a> or <a href="#posters">make a poster</a> for the next hearing.</p>
        </div>`}catch(u){t.textContent=u.message,p.disabled=!1}})}export{Y as mount};
