(() => {
  const section = document.querySelector('.infrastructure-world');
  if (!section) return;
  const svg = section.querySelector('.world-signals');
  const button = section.querySelector('.world-toggle');
  const stages = [...section.querySelectorAll('[data-world-stage]')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  // Representative land locations; these are not facilities or reported incidents.
  const places = [[-123,49],[-118,34],[-99,20],[-74,41],[-80,26],[-46,-23],[-74,4],[-70,-33],[-58,-34],[-1,52],[14,50],[28,60],[-6,33],[8,9],[30,-26],[37,0],[45,25],[29,40],[73,19],[78,29],[104,31],[127,37],[139,36],[101,14],[106,-6],[121,14],[151,-33],[115,-31]];
  let nodes = [], elapsed = 0, last = 0, timer, visible = false, paused = false;
  function build() {
    const order = places.map(p => ({p,sort:Math.random()})).sort((a,b)=>a.sort-b.sort);
    svg.replaceChildren();
    nodes = order.map(({p},i) => {
      const x=(p[0]+180)*3, y=(85-p[1])*3.6;
      const side=Math.random()>.5?1:-1, dy=Math.random()>.5?21:-21;
      const group=document.createElementNS('http://www.w3.org/2000/svg','g');
      group.setAttribute('class','world-cluster');
      group.setAttribute('transform',`translate(${x} ${y})`);
      group.innerHTML=`<path class="world-circuit" d="M0 0h${side*15}v${dy}h${side*18}"/><path class="world-electric" d="M0 0h${side*15}v${dy}h${side*18}"/><circle class="world-risk" cx="${side*33}" cy="${dy}" r="3.5"/><circle class="world-pulse" r="10"/><rect class="world-rack" x="-5" y="-7" width="10" height="14" rx="1"/><path class="world-rack-detail" d="M-3 -3h6M-3 1h6M-3 5h4"/>`;
      svg.append(group);
      return {group,start:i*.7,state:''};
    });
  }
  function render() {
    const reduced = motion.matches;
    for (const node of nodes) {
      const age=elapsed-node.start;
      const state=reduced?'stable':elapsed>28?'hidden':age<0?'hidden':age<2?'new':age<5?'risk':'stable';
      if (state===node.state) continue;
      node.state=state;
      node.group.classList.toggle('is-visible',state!=='hidden');
      node.group.dataset.state=state;
    }
    const phase = elapsed<5?0:elapsed<17?1:2;
    stages.forEach((el,i)=>el.classList.toggle('is-current',reduced||i===phase));
  }
  function tick() {
    const now=performance.now();elapsed+=(now-last)/1000;last=now;
    if(elapsed>=31){elapsed=0;build();}
    render();
  }
  function sync() {
    clearInterval(timer);timer=null;
    const run=visible&&!document.hidden&&!paused&&!motion.matches;
    section.classList.toggle('world-running',run);
    button.hidden=motion.matches;
    button.textContent=paused?'Resume animation':'Pause animation';
    if(motion.matches)render();
    if(run){last=performance.now();timer=setInterval(tick,120);}
  }
  button.addEventListener('click',()=>{paused=!paused;sync();});
  motion.addEventListener('change',()=>{render();sync();});
  document.addEventListener('visibilitychange',sync);
  build();render();
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.05}).observe(section);
  else {visible=true;sync();}
})();
