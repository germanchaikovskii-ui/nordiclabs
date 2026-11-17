const referenceSolutions = {
  "construction": {
    "name": "Construction",
    "title": "Automated Construction Progress Monitoring",
    "scope": "Industrial construction site: 20,000 m²",
    "fleet": "1 drone and 1 quadruped robot",
    "integration": "Primavera P6, BIM",
    "purpose": "Physical progress verification, construction deviations and reporting.",
    "image": "construction-overview.webp",
    "alt": "Illustrative industrial construction site with digital monitoring",
    "stages": [
      "An agreed site scope, inspection routes and baseline BIM and schedule data.",
      "A defined server, network and data-access setup for site imagery and progress records.",
      "A drone and quadruped configured for agreed capture routes, with operating procedures.",
      "Site observations linked to BIM elements and Primavera P6 activities through agreed interfaces.",
      "Progress checks and deviation reports tested against site evidence and agreed acceptance criteria.",
      "Commissioned workflows, team training and operating documentation, with agreed support."
    ],
    "area": "20,000 m²",
    "siteLabel": "Industrial construction site"
  },
  "warehouse": {
    "name": "Warehouse",
    "title": "Autonomous Warehouse Intelligence",
    "scope": "Warehouse: 10,000 m²",
    "fleet": "1 autonomous mobile robot with vision sensors",
    "integration": "WMS, ERP",
    "purpose": "Inventory verification, location monitoring and discrepancy detection.",
    "image": "fleet.webp",
    "alt": "Illustrative robotic fleet; equipment selection depends on the agreed warehouse scope",
    "stages": [
      "An agreed aisle and inventory scope, with baseline WMS and ERP records.",
      "A defined compute, network and data-access setup for inventory observations.",
      "A mobile robot with vision sensors configured for agreed routes, with operating procedures.",
      "Observed items and locations linked to WMS and ERP records through agreed interfaces.",
      "Inventory checks and discrepancy reports tested against agreed samples and acceptance criteria.",
      "Commissioned warehouse workflows, team training and documentation, with agreed support."
    ],
    "area": "10,000 m²",
    "siteLabel": "Warehouse"
  },
  "manufacturing": {
    "name": "Manufacturing",
    "title": "Autonomous Production Intelligence",
    "scope": "Production facility: 5,000 m²",
    "fleet": "1 quadruped inspection robot with appropriate sensors",
    "integration": "MES, SCADA, CMMS",
    "purpose": "Automated equipment inspections, process monitoring and anomaly identification.",
    "image": "inspection.webp",
    "alt": "Illustrative robotic inspection of industrial equipment",
    "stages": [
      "An agreed equipment and inspection scope, with baseline production and maintenance records.",
      "A defined compute, network and data-access setup for inspection and process data.",
      "A quadruped and selected sensors configured for inspection routes, with operating procedures.",
      "Inspection observations linked to MES, SCADA and CMMS records through agreed interfaces.",
      "Inspection checks and anomaly reports tested against equipment evidence and agreed acceptance criteria.",
      "Commissioned inspection workflows, team training and documentation, with agreed support."
    ],
    "area": "5,000 m²",
    "siteLabel": "Production facility"
  }
};
const referenceCostComponents = [
  {
    "component": "Assessment & engineering",
    "rental": "One-time scope fee",
    "purchase": "One-time scope fee",
    "prices": null
  },
  {
    "component": "Server & compute",
    "rental": "Supplied under service agreement¹",
    "purchase": "Owned hardware or your compute¹",
    "prices": null
  },
  {
    "component": "Robots & sensors",
    "rental": "Recurring equipment rental",
    "purchase": "Customer-owned equipment",
    "prices": null
  },
  {
    "component": "Installation",
    "rental": "Setup fee or included, as agreed",
    "purchase": "One-time commissioning",
    "prices": null
  },
  {
    "component": "Systems integration",
    "rental": "Initial integration scope²",
    "purchase": "Initial integration scope²",
    "prices": null
  },
  {
    "component": "Output validation",
    "rental": "Initial setup + agreed services²",
    "purchase": "Initial setup + agreed changes²",
    "prices": null
  },
  {
    "component": "Software licensing",
    "rental": "Recurring agreed fees",
    "purchase": "Agreed licence and recurring fees",
    "prices": null
  },
  {
    "component": "Support & updates",
    "rental": "Agreed recurring service",
    "purchase": "Optional service contract",
    "prices": null
  }
];
(() => {
// Keep a static HTML fallback; structured data drives the enhanced comparison.
const costGrid = document.querySelector('#cost-grid');
costGrid.replaceChildren(...referenceCostComponents.map(cost => {
  const row = document.createElement('article');
  const heading = document.createElement('h3');
  heading.textContent = cost.component;
  row.append(heading);
  for (const model of ['rental', 'purchase']) {
    const column = document.createElement('div');
    const label = document.createElement('p');
    label.className = 'eyebrow';
    label.textContent = model === 'rental' ? 'Rental' : 'Purchase';
    const description = document.createElement('p');
    description.textContent = cost[model];
    column.append(label, description);
    row.append(column);
  }
  return row;
}));
const status=document.querySelector('#selection-status');
function select(key){const data=referenceSolutions[key]; if(!data)return;
document.querySelectorAll('[data-field]').forEach(el=>el.textContent=data[el.dataset.field]);
document.querySelectorAll('[data-stage]').forEach(el=>el.textContent=data.stages[Number(el.dataset.stage)]);
document.querySelector('#proposal-link').href='mailto:robotics@nordiclabs.tech?subject='+encodeURIComponent(data.name+' tailored proposal')+'&body='+encodeURIComponent('Reference: '+data.scope+'\nFleet: '+data.fleet+'\nSystems: '+data.integration+'\n\nPlease describe your site, priorities and preferred commercial model:');
status.textContent=data.name+' selected. Configuration, implementation stages, cost context and proposal updated.';}
document.querySelectorAll('[name="scenario"]').forEach(input=>input.addEventListener('change',()=>select(input.value)));
select(document.querySelector('[name="scenario"]:checked').value);
})();
