// tracker.js
document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('school-select');
  const addBtn = document.getElementById('add-btn');
  const list   = document.getElementById('tracker-list');

  // load or init
  let apps = JSON.parse(localStorage.getItem('applications') || '[]');

  // render all cards
  function render() {
    list.innerHTML = '';
    apps.forEach((app, idx) => {
      const card = document.createElement('div');
      card.className = 'tracker-card';

      // delete button
      const del = document.createElement('button');
      del.className = 'delete-btn';
      del.textContent = '×';
      del.addEventListener('click', e => {
        e.stopPropagation();
        apps.splice(idx, 1);
        localStorage.setItem('applications', JSON.stringify(apps));
        render();
      });
      card.appendChild(del);

      // title
      const title = document.createElement('h3');
      title.textContent = app.name;
      card.appendChild(title);

      // steps
      const steps = ['Primaries','Secondaries','Interview','Decision'];
      const ul    = document.createElement('ul');
      ul.className = 'tracker-steps';
      steps.forEach((label, i) => {
        const li = document.createElement('li');
        li.textContent = label;
        if (i === app.step) li.classList.add('active');
        ul.appendChild(li);
      });
      card.appendChild(ul);

      // click to advance (with confetti)
      card.addEventListener('click', () => {
        app.step = (app.step + 1) % steps.length;
        localStorage.setItem('applications', JSON.stringify(apps));

        // fire confetti
        confetti({
          particleCount: 60,
          spread: 50,
          origin: { y: 0.6 }
        });

        render();
      });

      list.appendChild(card);
    });
  }

  // add new school
  addBtn.addEventListener('click', () => {
    const name = select.value;
    if (!name) return;
    // prevent duplicates
    if (apps.some(a => a.name === name)) return;
    apps.push({ name, step: 0 });
    localStorage.setItem('applications', JSON.stringify(apps));
    select.selectedIndex = 0;
    render();
  });

  render();
});
