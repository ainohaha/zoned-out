import{g,e as h}from"./data-CmcdGvkR.js";import{o as f}from"./index-CGytuwg9.js";const v=[["Find the parcel","Look up the address on your county’s GIS or assessor map. Write down the parcel number, the owner of record (often an LLC) and the zoning district code."],["Read the use table","Open the zoning ordinance and find the district’s table of uses. If “data center” (or “utility,” “warehouse,” “technology”) is listed as <b>permitted</b>, the project is by right. If it’s <b>special/conditional</b>, or not listed at all, it needs a discretionary decision."],["Request the records","File a public records request for the application, pre-application meetings, NDAs, utility and water-service letters, and any tax-incentive or land-sale drafts. Code names and NDAs are common; ask who the end user is."],["Change the rule, not just the project","Ask council to move data centers out of by-right uses and require a special use permit with a public hearing, a wider notice radius, and disclosure of power, water and generator counts. Ask for a moratorium while those rules are written."],["Show up, on the record","Sign up to speak, submit written comment before the deadline, bring neighbors, and put your evidence in the record (maps, heat, air, the 1930s grade). A packed room changes votes; a written record supports appeals."]],b={comment:{label:"Public comment",body:`To the {{body}} of {{jurisdiction}}:

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

{{name}}, {{neighborhood}}`}},m=[["name","Your name","Your name"],["neighborhood","Neighborhood","e.g. West End"],["jurisdiction","City or county","e.g. DeKalb County, GA"],["body","Deciding body","e.g. Board of Commissioners"],["project","Project","e.g. the Conley Creek data center application"]];async function j(){const o=await g("stats.json"),c=Object.entries(o.coded.tactics).sort((t,e)=>e[1]-t[1]),y=c[0]?.[1]||1,a=document.getElementById("toolkit-body");a.innerHTML=`
    <ol class="tk-steps">
      ${v.map(([t,e],s)=>`<li class="tk-step reveal"><span class="tk-n display">${String(s+1).padStart(2,"0")}</span><h3>${t}</h3><p>${e}</p></li>`).join("")}
    </ol>

    <div class="grid tk-grid">
      <div class="c-7 tk-templates reveal">
        <div class="sec-head"><span class="label">Templates</span><span class="label">Fill once, copy, send</span></div>
        <div class="tabs tk-tabs" role="tablist" aria-label="Template">
          ${Object.entries(b).map(([t,e],s)=>`<button role="tab" id="tk-tab-${t}" aria-controls="tk-text" aria-selected="${s===0}" data-t="${t}">${e.label}</button>`).join("")}
        </div>
        <div class="tk-fields">
          ${m.map(([t,e,s])=>`<label class="field"><span>${e}</span><input class="input" data-k="${t}" placeholder="${h(s)}" /></label>`).join("")}
        </div>
        <label class="sr-only" for="tk-text">Template text</label>
        <textarea id="tk-text" class="textarea tk-text" rows="16" role="tabpanel"></textarea>
        <div class="tk-actions">
          <button class="btn btn-primary" id="tk-copy">Copy text</button>
          <button class="btn" id="tk-dl">Download .txt</button>
          <button class="btn" id="tk-refill" hidden>Refill with my details</button>
          <span class="meta" id="tk-status" role="status" aria-live="polite"></span>
        </div>
      </div>
      <div class="c-5 reveal">
        <div class="sec-head"><span class="label">What worked</span><span class="label">Stopped cases</span></div>
        <p class="tk-lede">Tactics residents used where a project was <b>denied or withdrawn</b>, from the coded sample. Most wins combined several.</p>
        <div class="tk-bars">
          ${c.map(([t,e])=>`<div class="tk-bar"><span class="tk-bar-name">${h(t)}</span><span class="tk-bar-track"><span style="width:${e/y*100}%"></span></span><span class="tk-bar-n num">${e}</span></div>`).join("")}
        </div>
        <p class="source">Count of stopped sites (n = ${o.coded.groups["Discretionary hearing"].blocked+o.coded.groups["No public vote"].blocked+o.coded.groups["Other lever"].blocked+o.coded.groups.Unknown.blocked}) where each tactic was reported. A site can use several.</p>
        <div class="alert warn tk-legal"><b>Not legal advice</b><p>Zoning, notice and records law differ by state and town. Deadlines are strict. A local legal aid, environmental justice clinic or land-use attorney can check your read of the code.</p></div>
      </div>
    </div>`;const n=a.querySelector("#tk-text"),p={};let l="comment",d=!1;const i=()=>{n.value=b[l].body.replace(/\{\{(\w+)\}\}/g,(t,e)=>p[e]||`[${m.find(s=>s[0]===e)?.[1]||e}]`),d=!1},r=a.querySelector("#tk-refill");a.querySelectorAll("[data-k]").forEach(t=>t.addEventListener("input",()=>{p[t.dataset.k]=t.value.trim(),d?r.hidden=!1:i()})),n.addEventListener("input",()=>d=!0),r.addEventListener("click",()=>{i(),r.hidden=!0}),a.querySelector(".tk-tabs").addEventListener("click",t=>{const e=t.target.closest("[data-t]");e&&(l=e.dataset.t,r.hidden=!0,a.querySelectorAll(".tk-tabs [data-t]").forEach(s=>s.setAttribute("aria-selected",String(s===e))),i())});const u=a.querySelector("#tk-status");a.querySelector("#tk-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(n.value),u.textContent="Copied."}catch{n.select(),u.textContent="Press Ctrl/Cmd+C to copy."}}),a.querySelector("#tk-dl").addEventListener("click",()=>{const t=URL.createObjectURL(new Blob([n.value],{type:"text/plain"})),e=Object.assign(document.createElement("a"),{href:t,download:`${l}-letter.txt`});document.body.append(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e3)}),i(),f(a)}export{j as mount};
