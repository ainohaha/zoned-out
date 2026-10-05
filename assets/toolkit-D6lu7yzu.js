import{getJSON as S,esc as v}from"./data-B22-vvQJ.js";import{observeReveals as E}from"./reveal-BGnDgJKr.js";const L=[["Find the parcel","Look up the address on your county’s GIS or assessor map. Write down the parcel number, the owner of record (often an LLC) and the zoning district code."],["Read the use table","Open the zoning ordinance and find the district’s table of uses. If “data center” (or “utility,” “warehouse,” “technology”) is listed as <b>permitted</b>, the project is by right. If it’s <b>special/conditional</b>, or not listed at all, it needs a discretionary decision."],["Request the records","File a public records request for the application, pre-application meetings, NDAs, utility and water-service letters, and any tax-incentive or land-sale drafts. Code names and NDAs are common; ask who the end user is."],["Change the rule, not just the project","Ask council to move data centers out of by-right uses and require a special use permit with a public hearing, a wider notice radius, and disclosure of power, water and generator counts. Ask for a moratorium while those rules are written."],["Show up, on the record","Sign up to speak, submit written comment before the deadline, bring neighbors, and put your evidence in the record (maps, heat, air). A packed room changes votes; a written record supports appeals."]],w={comment:{label:"Public comment",body:`To the {{body}} of {{jurisdiction}}:

My name is {{name}} and I live in {{neighborhood}}. I am writing about {{project}}.

I ask that you deny this application, or postpone any decision until:
1. The developer discloses the end user, peak electricity demand, water use, and the number and size of backup diesel generators.
2. An independent study of noise, air quality and heat impacts on the surrounding blocks is completed and made public.
3. Residents within at least one mile receive written notice and a public hearing is held at a time working people can attend.

This neighborhood already carries more than its share. Federal maps graded parts of it "hazardous" in the 1930s, and the industrial zoning that followed is why a project like this can land here today. Please put that history, and our testimony, on the record.

Sincerely,
{{name}}
{{neighborhood}}`},records:{label:"Records request",body:`To the Records Officer, {{jurisdiction}}:

Under the state public records law, I request copies of the following records related to {{project}}, from January 1 of last year to the present:

1. All applications, site plans and staff reports.
2. Records of pre-application meetings, including calendars, sign-in sheets and notes.
3. Any non-disclosure or confidentiality agreements between the jurisdiction and the applicant or its agents.
4. Correspondence about electricity, water or sewer service capacity for the site.
5. Drafts or term sheets for any tax abatement, incentive, development agreement, or sale or lease of public land.

I prefer electronic copies. If any record is withheld, please cite the specific exemption. Please contact me before incurring fees over $25.

{{name}}`},council:{label:"Letter asking for a hearing",body:`To the members of the {{body}}, {{jurisdiction}}:

Right now, a data center can be approved in parts of {{jurisdiction}} without a public hearing or a vote. That leaves the residents who will live beside it out of the decision entirely.

I ask you to:
1. Amend the zoning ordinance so data centers require a special or conditional use permit, with a public hearing, in every district.
2. Adopt a moratorium on new data center applications while those rules are written.
3. Require notice to every household within one mile and disclosure of the end user, power, water and generator plans before any hearing.
4. Include a cumulative-impact review for neighborhoods that were historically redlined or already host industrial uses.

Decisions this large belong in public, on the record. I would like to speak at the next meeting where this is discussed.

{{name}}, {{neighborhood}}`}},f=[["name","Your name","Your name"],["neighborhood","Neighborhood","e.g. West End"],["jurisdiction","City or county","e.g. DeKalb County, GA"],["body","Deciding body","e.g. Board of Commissioners"],["project","Project","e.g. the Conley Creek data center application"]];async function q(){const $=await S("stats.json"),p=Object.entries($.coded.tactics).sort((t,e)=>e[1]-t[1]),j=p[0]?.[1]||1,r=document.getElementById("toolkit"),u=(t,e,a,n)=>`
    <div class="c-6 tk-block" data-block="${t}">
      <h3 class="display d-md">${e}</h3>
      <p class="tk-block-lede">${a}</p>
      <button type="button" class="btn btn-acid tk-cta" aria-expanded="false" aria-controls="tk-panel-${t}"><span class="tk-show">${n}</span><span class="tk-hide">Hide</span><span class="tk-sign" aria-hidden="true"><span class="tk-show">+</span><span class="tk-hide">−</span></span></button>
    </div>`;document.getElementById("toolkit-body").innerHTML=`
    <div class="grid tk-blocks">
      ${u("steps","The steps.","Find out whether a project near you is by right, get the records, and push the decision into a public meeting where you can speak.","See the steps")}
      ${u("worked","What worked.","Tactics residents used where a project was <b>denied or withdrawn</b>, from our coded sample. Most wins combined several.","See what worked")}
    </div>
    <div class="tk-panel" id="tk-panel-steps" hidden>
      <ol class="tk-steps">
        ${L.map(([t,e],a)=>`<li class="tk-step"><span class="tk-n display">${String(a+1).padStart(2,"0")}</span><h3>${t}</h3><p>${e}</p></li>`).join("")}
      </ol>
    </div>
    <div class="tk-panel tk-worked" id="tk-panel-worked" hidden>
      <div class="grid tk-worked-body">
        <div class="c-7">
          <div class="tk-bars">
            ${p.map(([t,e],a)=>`<div class="tk-bar" style="--i:${a}"><span class="tk-bar-name">${v(t)}</span><span class="tk-bar-track"><span style="--w:${e/j*100}%"></span></span><span class="tk-bar-n num">${e}</span></div>`).join("")}
          </div>
        </div>
        <div class="c-5">
          <div class="alert warn tk-legal"><b>Not legal advice</b><p>Zoning, notice and records law differ by state and town. Deadlines are strict. A local legal aid, environmental justice clinic or land-use attorney can check your read of the code.</p></div>
        </div>
      </div>
    </div>`;const b=document.getElementById("toolkit-body"),x=t=>b.querySelectorAll(".tk-block").forEach(e=>{const a=e.dataset.block===t;e.classList.toggle("is-open",a),e.querySelector(".tk-cta").setAttribute("aria-expanded",String(a)),document.getElementById(`tk-panel-${e.dataset.block}`).hidden=!a});b.addEventListener("click",t=>{const e=t.target.closest(".tk-block");e&&!t.target.closest("a")&&x(e.classList.contains("is-open")?null:e.dataset.block)}),document.getElementById("tk-templates").innerHTML=`
    <div class="grid tk-grid">
      <div class="c-12 tk-templates reveal">
        <div class="tabs tk-tabs" role="tablist" aria-label="Template">
          ${Object.entries(w).map(([t,e],a)=>`<button role="tab" id="tk-tab-${t}" aria-controls="tk-text" aria-selected="${a===0}" data-t="${t}">${e.label}</button>`).join("")}
        </div>
        <div class="tk-fields">
          ${f.map(([t,e,a])=>`<label class="field"><span>${e}</span><input class="input" data-k="${t}" placeholder="${v(a)}" /></label>`).join("")}
        </div>
        <label class="sr-only" for="tk-text">Template text</label>
        <textarea id="tk-text" class="textarea tk-text" rows="16" role="tabpanel"></textarea>
        <div class="tk-actions">
          <button class="btn btn-primary" id="tk-copy"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="2.5" width="10" height="12" /><path d="M6 2.5V1h4v1.5M5.5 7h5M5.5 10h5" /></svg>Copy text</button>
          <button class="btn" id="tk-dl">Download .txt</button>
          <span class="meta" id="tk-status" role="status" aria-live="polite"></span>
        </div>
      </div>
    </div>`;const l=r.querySelector("#tk-text"),m={};let h="comment";const k=t=>m[t]||`[${f.find(e=>e[0]===t)?.[1]||t}]`;let d=[],o="";const g=()=>{d=[];let t="";const e=w[h].body;let a=0;e.replace(/\{\{(\w+)\}\}/g,(n,i,s)=>{t+=e.slice(a,s);const c=k(i);return d.push({k:i,start:t.length,end:t.length+c.length}),t+=c,a=s+n.length,n}),l.value=o=t+e.slice(a)};l.addEventListener("input",()=>{const t=l.value;let e=0;for(;e<o.length&&e<t.length&&o[e]===t[e];)e++;let a=0;for(;a<o.length-e&&a<t.length-e&&o[o.length-1-a]===t[t.length-1-a];)a++;const n=o.length-a,i=t.length-o.length;d=d.filter(s=>s.end<=e||s.start>=n||e===n&&(e<=s.start||e>=s.end)).map(s=>s.start>=n&&!(s.end<=e)?{...s,start:s.start+i,end:s.end+i}:s),o=t}),r.querySelectorAll("[data-k]").forEach(t=>t.addEventListener("input",()=>{m[t.dataset.k]=t.value.trim();const e=k(t.dataset.k);let a=l.value;d.map((n,i)=>[n,i]).filter(([n])=>n.k===t.dataset.k).reverse().forEach(([n,i])=>{const s=e.length-(n.end-n.start);a=a.slice(0,n.start)+e+a.slice(n.end),n.end+=s,d.slice(i+1).forEach(c=>{c.start+=s,c.end+=s})}),l.value=o=a})),r.querySelector(".tk-tabs").addEventListener("click",t=>{const e=t.target.closest("[data-t]");e&&(h=e.dataset.t,r.querySelectorAll(".tk-tabs [data-t]").forEach(a=>a.setAttribute("aria-selected",String(a===e))),g())});const y=r.querySelector("#tk-status");r.querySelector("#tk-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(l.value),y.textContent="Copied."}catch{l.select(),y.textContent="Press Ctrl/Cmd+C to copy."}}),r.querySelector("#tk-dl").addEventListener("click",()=>{const t=URL.createObjectURL(new Blob([l.value],{type:"text/plain"})),e=Object.assign(document.createElement("a"),{href:t,download:`${h}-letter.txt`});document.body.append(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e3)}),g(),E(r)}export{q as mount};
