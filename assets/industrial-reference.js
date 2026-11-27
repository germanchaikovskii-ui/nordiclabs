const industrialReferences = {
  "nuclear": {
    "name": "Nuclear Industrial AI",
    "headline": "Your project knowledge.<br>One connected AI environment.",
    "intro": "Connect engineering documents, requirements and delivery records to the processes your team already uses. Choose where the system runs; define what it supports.",
    "cases": [
      {
        "name": "Engineering & document review",
        "scope": "Project documentation",
        "systems": "DMS \u00b7 engineering records",
        "outcome": "Traceable preliminary checks",
        "description": "Connect document revisions, agreed requirements and engineering reviews so specialists can examine findings with their source evidence.",
        "stages": [
          "An agreed document scope, review responsibilities and baseline of available requirements and revisions.",
          "An agreed hosting architecture, access model and compute requirements for controlled project records.",
          "Document registers and approved sources connected through agreed interfaces, with revision identifiers retained.",
          "Preliminary review rules configured around the project basis, with source-linked findings and human approval steps.",
          "Sample reviews checked by responsible specialists against source documents and agreed acceptance criteria.",
          "A commissioned review workflow, trained users, operating documentation and agreed support."
        ]
      },
      {
        "name": "Procurement & construction readiness",
        "scope": "Project delivery",
        "systems": "Procurement \u00b7 warehouse \u00b7 schedule",
        "outcome": "Readiness with evidence",
        "description": "Relate equipment requirements, orders, delivery records and construction evidence to planned work packages and readiness reviews.",
        "stages": [
          "An agreed equipment and work-package scope, with owners for procurement, warehouse and readiness records.",
          "An agreed hosting architecture and controlled access to commercial, equipment and construction information.",
          "Selected order, receipt, schedule and construction records connected using agreed equipment and work-package identifiers.",
          "Readiness checks and exception reports configured to expose missing evidence and items needing review.",
          "Sample work packages reconciled against orders, receipts and construction evidence with responsible teams.",
          "A commissioned readiness workflow, trained project teams and documented review and support arrangements."
        ]
      },
      {
        "name": "Configuration & operating records",
        "scope": "Asset and change history",
        "systems": "DMS \u00b7 asset records \u00b7 maintenance",
        "outcome": "A traceable engineering record",
        "description": "Connect equipment records, approved changes and maintenance history so teams can find the evidence behind the current configuration.",
        "stages": [
          "An agreed asset scope and baseline of configuration records, change responsibilities and maintenance data.",
          "An agreed hosting and access model for engineering history and selected operating records.",
          "Selected documents, asset identifiers, approved changes and maintenance records connected through agreed interfaces.",
          "Traceability and completeness checks configured, with findings routed to responsible specialists.",
          "Sample asset histories checked against approved records and agreed acceptance criteria.",
          "A commissioned information workflow, trained users and documented ownership and support arrangements."
        ]
      }
    ]
  },
  "conventional": {
    "name": "Conventional Industrial AI",
    "headline": "Your business processes.<br>One connected AI environment.",
    "intro": "Connect documents, production, procurement and project records so your teams can review the same evidence and act on it. Deploy the system where it fits your infrastructure.",
    "cases": [
      {
        "name": "Operating business",
        "scope": "Production and operations",
        "systems": "ERP \u00b7 production \u00b7 finance",
        "outcome": "A shared operational picture",
        "description": "Bring selected production, material and financial records together to prepare reports and highlight exceptions for management review.",
        "stages": [
          "An agreed business scope, source-system map and owners for production, procurement and financial records.",
          "An agreed hosting architecture, compute requirements and access controls for enterprise information.",
          "Selected ERP, production and financial records connected through available, agreed interfaces.",
          "Reporting rules and exception checks configured around the decisions your team needs to make.",
          "Sample reports reconciled with source records and reviewed by responsible business teams.",
          "Commissioned reporting workflows, trained users and documented operating and support arrangements."
        ]
      },
      {
        "name": "New construction project",
        "scope": "Project delivery",
        "systems": "DMS \u00b7 procurement \u00b7 project schedule",
        "outcome": "Progress linked to the plan",
        "description": "Connect document status, procurement, deliveries and construction reports to work packages so teams can review readiness and deviations.",
        "stages": [
          "An agreed project scope and baseline of documents, work packages, delivery records and schedule activities.",
          "An agreed hosting and access model for project teams and controlled delivery information.",
          "Selected document, procurement, warehouse and progress records linked to agreed work-package identifiers.",
          "Readiness and deviation checks configured, with draft reports for responsible project teams.",
          "Sample work packages checked against source reports, receipts and the agreed schedule baseline.",
          "Commissioned project workflows, trained teams and documented handover and support."
        ]
      },
      {
        "name": "Procurement & warehouse",
        "scope": "Materials and supply",
        "systems": "ERP \u00b7 procurement \u00b7 WMS",
        "outcome": "Orders connected to availability",
        "description": "Relate purchase orders, supplier updates and warehouse records to material needs, making discrepancies visible for review.",
        "stages": [
          "An agreed material scope, source-system map and owners for orders, supplier updates and stock records.",
          "An agreed hosting architecture and access model for supply and inventory information.",
          "Selected order, delivery and warehouse records connected using agreed material identifiers.",
          "Availability checks and discrepancy reports configured around material requirements and review workflows.",
          "Sample material records reconciled with orders and receipts against agreed acceptance criteria.",
          "Commissioned supply workflows, trained teams and documented responsibilities and support."
        ]
      }
    ]
  }
};
(() => {
const main=document.querySelector('[data-industrial]');
if(!main)return;
const page=industrialReferences[main.dataset.industrial];
function select(index){
 const selected=page.cases[index];
 document.querySelectorAll('[data-field]').forEach(el=>el.textContent=selected[el.dataset.field]);
 document.querySelectorAll('[data-stage]').forEach(el=>el.textContent=selected.stages[Number(el.dataset.stage)]);
 document.querySelector('#industrial-proposal').href='mailto:industrial@nordiclabs.tech?subject='+encodeURIComponent(page.name+' — '+selected.name)+'&body='+encodeURIComponent('Reference scope: '+selected.name+'\n\nPlease describe your existing systems, priorities and preferred hosting environment:');
 document.querySelector('#industrial-status').textContent=selected.name+' selected. Scope, delivery stages and proposal updated.';
}
document.querySelectorAll('[name="industrial-case"]').forEach(el=>el.addEventListener('change',()=>select(Number(el.value))));
select(0);
})();
