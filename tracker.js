// tracker.js
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('school-input');
  const addBtn = document.getElementById('add-btn');
  const list  = document.getElementById('tracker-list');

  // load or init
  let apps = JSON.parse(localStorage.getItem('applications') || '[]');

  // render all cards
  function render() {
    list.innerHTML = '';
    apps.forEach((app, idx) => {
      const card = document.createElement('div');
      card.className = 'tracker-card';

      const title = document.createElement('h3');
      title.textContent = app.name;
      card.appendChild(title);

      // steps
      const steps  = ['Primaries','Secondaries','Interview','Decision'];
      const ul     = document.createElement('ul');
      ul.className = 'tracker-steps';
      steps.forEach((label, i) => {
        const li = document.createElement('li');
        li.textContent = label;
        if (i === app.step) li.classList.add('active');
        ul.appendChild(li);
      });
      card.appendChild(ul);

      // advance on click
      card.addEventListener('click', () => {
        app.step = (app.step + 1) % steps.length;
        localStorage.setItem('applications', JSON.stringify(apps));
        render();
      });

      list.appendChild(card);
    });
  }

  // add new school
  addBtn.addEventListener('click', () => {
    const name = input.value.trim();
    if (!name) return;
    apps.push({ name, step: 0 });
    localStorage.setItem('applications', JSON.stringify(apps));
    input.value = '';
    render();
  });

  render();
});
