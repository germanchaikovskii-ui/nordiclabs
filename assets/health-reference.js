const healthReferencePackages = {
  "api": {
    "name": "Health Intelligence API",
    "headline": "Your signals.<br>Useful responses for your service.",
    "intro": "Define the data your platform can share, the responses it needs and the request volume you expect. Build a proposed integration around that scope.",
    "cards": [
      {
        "name": "Signal & response pilot",
        "scope": "One focused use case",
        "input": "Selected authorized observations",
        "output": "Agreed test responses",
        "description": "Start with a bounded question: how could your existing activity, nutrition or recovery signals support a more useful response to the user?",
        "stages": [
          "A field map of your available observations, timestamps, units, source quality and user permissions.",
          "An agreed input and response contract, purpose, access controls and limited test-data scope.",
          "Sample outputs evaluated for usefulness, missing context and limits against agreed criteria.",
          "A pilot allowance and quote based on expected requests, processing scope and evaluation support."
        ]
      },
      {
        "name": "Adaptive insights integration",
        "scope": "A recurring user workflow",
        "input": "Events + authorized follow-up",
        "output": "Personalized contextual signals",
        "description": "Discuss an ongoing exchange in which user observations inform responses and permitted check-ins add context for the next analysis.",
        "stages": [
          "A map of meals, activity, sleep, recovery or user check-ins relevant to your selected workflow.",
          "Agreed request timing, identity mapping, response fields and permitted feedback events.",
          "Contextual outputs such as hunger windows, energy summaries or recovery-aware suggestions, subject to available data and validated models.",
          "A tailored recurring tariff based on request volume, processing scope, support and agreed usage limits."
        ]
      },
      {
        "name": "Platform-scale partnership",
        "scope": "Multiple agreed workflows",
        "input": "Selected platform data streams",
        "output": "Structured results for your products",
        "description": "Plan a broader integration around your audience, data coverage and operational needs, with outputs and rollout agreed before expansion.",
        "stages": [
          "An inventory of intended workflows, authorized data sources and expected coverage across your platform.",
          "An agreed interface and rollout plan covering access, request patterns and operational responsibilities.",
          "Workflow-specific outputs validated with your team before each agreed expansion.",
          "A negotiated volume plan covering forecast requests, peaks, support, limits and how usage is counted."
        ]
      }
    ]
  },
  "corporate": {
    "name": "Corporate Health",
    "headline": "A programme for your people.<br>A clear purpose for your organisation.",
    "intro": "Choose a programme direction, agree the goals and give employees personal guidance. Evaluate participation and group-level trends while keeping individual health information private.",
    "cards": [
      {
        "name": "Everyday wellbeing",
        "scope": "Personal routines",
        "input": "Voluntary employee participation",
        "output": "Guidance for everyday habits",
        "description": "Discuss individual plans for activity, meals and recovery around working routines. Goals could include more regular movement or improved dietary habits, selected with participants rather than imposed as company-wide health targets.",
        "stages": [
          "An agreed programme goal, target audience, review date and privacy responsibilities.",
          "Private personal goals and guidance adapted to employee routines, with clear onboarding and support.",
          "Voluntary activities and feedback that help participants maintain manageable habits.",
          "An aggregate review of participation and usefulness; programme changes and renewal based on agreed evidence."
        ]
      },
      {
        "name": "Team challenges",
        "scope": "Shared activities",
        "input": "Opt-in teams and fair rules",
        "output": "Participation and recognition",
        "description": "Explore inclusive walking or habit-building challenges, optional internal team rankings and agreed recognition. Participation should be possible across different abilities and working patterns.",
        "stages": [
          "An agreed challenge, accessible alternatives, participation rules and recognition budget.",
          "Private individual guidance alongside team activities; no requirement to share medical records.",
          "Optional team leaderboards and recognition based on participation or agreed activity goals, with non-participation carrying no penalty.",
          "Aggregate engagement and participant feedback reviewed before the next challenge."
        ]
      },
      {
        "name": "Workplace insights",
        "scope": "Organisation-level learning",
        "input": "Protected group-level measures",
        "output": "Trends to investigate",
        "description": "Explore how aggregate wellbeing and activity trends move alongside selected business indicators such as team-level output or service quality. The aim is to identify associations worth investigating, not to claim that a programme caused business results.",
        "stages": [
          "An agreed evaluation question, comparison period, business indicators and data-protection assessment.",
          "A reporting design that separates private employee records from employer-facing aggregate results.",
          "Group-level analysis with minimum reporting groups, suppression of small groups and re-identification safeguards agreed before launch.",
          "A review of trends, data quality and alternative explanations; no individual health-to-performance scoring."
        ]
      },
      {
        "name": "Tailored programme",
        "scope": "A combined programme",
        "input": "Your workforce and priorities",
        "output": "An agreed programme plan",
        "description": "Combine personal guidance, inclusive team initiatives and aggregate evaluation. Discuss recognition or bonus schemes separately, with criteria reviewed for fairness, accessibility and employment-law requirements.",
        "stages": [
          "An agreed combination of programme goals, employee groups, sponsorship and evaluation measures.",
          "Private guidance and onboarding tailored to the agreed working patterns and participant needs.",
          "Optional challenges and recognition with transparent rules; no rewards tied to disclosing sensitive health data or achieving biometric targets.",
          "An aggregate programme review and a decision to adjust, extend or expand, with commercial terms agreed in writing."
        ]
      }
    ]
  }
};
(() => {
const root=document.querySelector('[data-health]');if(!root)return;
const page=healthReferencePackages[root.dataset.health];
function select(index){const item=page.cards[index];
document.querySelectorAll('[data-field]').forEach(el=>el.textContent=item[el.dataset.field]);
document.querySelectorAll('[data-stage]').forEach(el=>el.textContent=item.stages[Number(el.dataset.stage)]);
document.querySelector('#health-proposal').href='mailto:health@nordiclabs.tech?subject='+encodeURIComponent(page.name+' — '+item.name)+'&body='+encodeURIComponent('Reference package: '+item.name+'\n\nPlease describe your goals, intended scope and existing arrangements:');
document.querySelector('#health-status').textContent=item.name+' selected. Scope, stages and proposal updated.';}
document.querySelectorAll('[name="health-package"]').forEach(el=>el.addEventListener('change',()=>select(Number(el.value))));select(0);
})();