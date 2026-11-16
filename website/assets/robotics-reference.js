const referenceSolutions = {
  "construction": {
    "name": "Construction AI",
    "title": "Automated Construction Progress Monitoring",
    "scope": "Industrial construction site: 20,000 m²",
    "fleet": "1 drone and 1 quadruped robot",
    "integration": "Primavera P6, BIM",
    "purpose": "Physical progress verification, construction deviations and reporting.",
    "image": "construction-overview.webp",
    "alt": "Illustrative industrial construction site with digital monitoring",
    "stages": [
      "Survey site access, flight constraints and inspection routes. Deliver an agreed scope and a baseline of schedule and BIM data.",
      "Define the deployment architecture, network access and compute requirements for site imagery and progress records.",
      "Deploy the reference drone and quadruped, configure capture routes and document operating procedures.",
      "Map observations to BIM elements and Primavera P6 activities through agreed interfaces.",
      "Configure progress checks and deviation reports. Validate results against agreed site evidence and acceptance criteria.",
      "Commission the agreed workflows, train the responsible team and hand over operating documentation and support arrangements."
    ]
  },
  "warehouse": {
    "name": "Warehouse AI",
    "title": "Autonomous Warehouse Intelligence",
    "scope": "Warehouse: 10,000 m²",
    "fleet": "1 autonomous mobile robot with vision sensors",
    "integration": "WMS, ERP",
    "purpose": "Inventory verification, location monitoring and discrepancy detection.",
    "image": "fleet.webp",
    "alt": "Illustrative robotic fleet; equipment selection depends on the agreed warehouse scope",
    "stages": [
      "Survey aisles, inventory identifiers and operating constraints. Deliver an agreed inspection scope and a baseline of WMS and ERP records.",
      "Define compute, network coverage and data access for warehouse observations and inventory records.",
      "Deploy the reference mobile robot and vision sensors, configure routes and document safe operating procedures.",
      "Map observed items and locations to WMS and ERP records through agreed interfaces.",
      "Configure inventory checks and discrepancy reporting. Validate observations against agreed inventory samples and acceptance criteria.",
      "Commission warehouse workflows, train the operating team and hand over documentation and support arrangements."
    ]
  },
  "manufacturing": {
    "name": "Manufacturing AI",
    "title": "Autonomous Production Intelligence",
    "scope": "Production facility: 5,000 m²",
    "fleet": "1 quadruped inspection robot with appropriate sensors",
    "integration": "MES, SCADA, CMMS",
    "purpose": "Automated equipment inspections, process monitoring and anomaly identification.",
    "image": "inspection.webp",
    "alt": "Illustrative robotic inspection of industrial equipment",
    "stages": [
      "Survey equipment, inspection points and operating constraints. Deliver an agreed inspection scope and baseline of available production and maintenance records.",
      "Define compute, network segmentation and access requirements for inspection and process data.",
      "Deploy the reference quadruped and selected sensors, configure inspection routes and document operating procedures.",
      "Map inspection observations to MES, SCADA and CMMS records through agreed interfaces.",
      "Configure inspection checks and anomaly reporting. Validate findings against agreed equipment evidence and acceptance criteria.",
      "Commission inspection workflows, train the responsible team and hand over operating documentation and support arrangements."
    ]
  }
};
const referenceCostComponents = [
  {
    "component": "Assessment and engineering",
    "rental": "One-time scope and engineering fee, as agreed.",
    "purchase": "One-time scope and engineering fee.",
    "prices": null
  },
  {
    "component": "Server infrastructure or customer-provided compute",
    "rental": "Supplied hardware under the service agreement, or customer-provided compute.",
    "purchase": "Customer-owned supplied hardware, or customer-provided compute.",
    "prices": null
  },
  {
    "component": "Robots, drones and sensors",
    "rental": "Recurring equipment rental under the agreed service scope.",
    "purchase": "One-time acquisition of customer-owned equipment.",
    "prices": null
  },
  {
    "component": "Installation and commissioning",
    "rental": "One-time setup, or included in the recurring agreement if agreed.",
    "purchase": "One-time installation and commissioning.",
    "prices": null
  },
  {
    "component": "Enterprise software integration",
    "rental": "One-time integration scope; ongoing changes priced separately as agreed.",
    "purchase": "One-time integration scope; ongoing changes priced separately as agreed.",
    "prices": null
  },
  {
    "component": "AI configuration and validation",
    "rental": "Initial configuration and validation; recurring services as agreed.",
    "purchase": "One-time configuration and validation; subsequent changes as agreed.",
    "prices": null
  },
  {
    "component": "Software licensing",
    "rental": "Recurring service and licensing charges as agreed.",
    "purchase": "Licensing terms and any recurring fees specified in the agreement.",
    "prices": null
  },
  {
    "component": "Maintenance, support and updates",
    "rental": "Recurring managed-service scope as agreed.",
    "purchase": "Optional service contracts; equipment responsibilities defined at handover.",
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
const image=document.querySelector('#scenario-image');image.src='../../assets/robotics/'+data.image;image.alt=data.alt;
document.querySelector('#proposal-link').href='mailto:robotics@nordiclabs.tech?subject='+encodeURIComponent(data.name+' tailored proposal')+'&body='+encodeURIComponent('Reference: '+data.scope+'\nFleet: '+data.fleet+'\nSystems: '+data.integration+'\n\nPlease describe your site, priorities and preferred commercial model:');
status.textContent=data.name+' selected. Configuration, implementation stages, cost context and proposal updated.';}
document.querySelectorAll('[name="scenario"]').forEach(input=>input.addEventListener('change',()=>select(input.value)));
select(document.querySelector('[name="scenario"]:checked').value);
const motion=matchMedia('(prefers-reduced-motion: reduce)');let observer;
function animate(){if(observer)observer.disconnect();document.querySelectorAll('.ref-stages li').forEach(el=>el.classList.remove('ref-pending'));if(motion.matches||!('IntersectionObserver' in window))return;
observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('ref-pending');observer.unobserve(entry.target);}}),{threshold:0.08});
document.querySelectorAll('.ref-stages li').forEach(el=>{el.classList.add('ref-pending');observer.observe(el);});}
motion.addEventListener('change',animate);animate();
})();
