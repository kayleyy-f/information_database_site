// script.js

// 1) Your full data set (20 schools)…
const schools = [
  { name: "Baylor College of Medicine", page: "baylor-college-of-medicine.html", type: "Private", degree: "MD", size: 185, campus: "Urban" },
  { name: "Fertitta Family College of Medicine at UH", page: "fertitta-family-college-of-medicine.html", type: "Public", degree: "MD", size: 60, campus: "Urban" },
  { name: "Long School of Medicine at UT San Antonio", page: "long-school-of-medicine-utsa.html", type: "Public", degree: "MD", size: 240, campus: "Urban" },
  { name: "McGovern Medical School at UT HSC Houston", page: "mcgovern-medical-school-uth.html", type: "Public", degree: "MD", size: 240, campus: "Urban" },
  { name: "Sam Houston State University College of Osteopathic Medicine", page: "shsu-osteopathic-medicine.html", type: "Public", degree: "DO", size: 187, campus: "Suburban" },
  { name: "Sealy School of Medicine at UTMB – Galveston", page: "sealy-school-of-medicine-utmb.html", type: "Public", degree: "MD", size: 230, campus: "Urban" },
  { name: "Texas A&M HSC College of Medicine", page: "tamu-college-of-medicine.html", type: "Public", degree: "MD", size: 125, campus: "Suburban" },
  { name: "Texas Tech HSC Paul L Foster SOM at El Paso", page: "ttuhsc-elpaso-som.html", type: "Public", degree: "MD", size: 80, campus: "Urban" },
  { name: "Texas Tech HSC SOM at Lubbock", page: "ttuhsc-lubbock-som.html", type: "Public", degree: "MD", size: 150, campus: "Urban" },
  { name: "UNT HSC Texas College of Osteopathic Medicine", page: "unt-tcom.html", type: "Public", degree: "DO", size: 160, campus: "Suburban" },
  { name: "UT Austin Dell Medical School", page: "utaustin-dell-medical-school.html", type: "Public", degree: "MD", size: 50, campus: "Urban" },
  { name: "UT Rio Grande Valley School of Medicine", page: "utrgv-school-of-medicine.html", type: "Public", degree: "MD", size: 56, campus: "Urban" },
  { name: "UT Southwestern Medical School", page: "utsouthwestern-medical-school.html", type: "Public", degree: "MD", size: 230, campus: "Urban" },
  { name: "UT at Tyler School of Medicine", page: "ut-tyler-school-of-medicine.html", type: "Public", degree: "MD", size: 30, campus: "Suburban" },
  { name: "University of South Carolina School of Medicine – Greenville", page: "usc-greenville.html", type: "Public", degree: "MD", size: 66, campus: "Urban" },
  { name: "University of Mississippi School of Medicine", page: "umississippi-school-of-medicine.html", type: "Public", degree: "MD", size: 104, campus: "Urban" },
  { name: "East Carolina University Brody School of Medicine", page: "ecu-brody-school.html", type: "Public", degree: "MD", size: 120, campus: "Urban" },
  { name: "Edward Via College of Osteopathic Medicine (VCOM)", page: "vcom.html", type: "Private", degree: "DO", size: 240, campus: "Suburban" },
  { name: "Nova Southeastern University Dr. Kiran C. Patel College of Osteopathic Medicine", page: "nova-patel-college.html", type: "Private", degree: "DO", size: 240, campus: "Suburban" },
  { name: "Anne Burnett Marion School of Medicine at TCU", page: "tcu-anne-burnett-marion.html", type: "Private", degree: "MD", size: 60, campus: "Urban" }
];

// 2) Grab our filter controls and the listings container
const listingsEl      = document.getElementById('listings');
const typeChecks      = Array.from(document.querySelectorAll('.filter-type'));
const degreeChecks    = Array.from(document.querySelectorAll('.filter-degree'));
const campusChecks    = Array.from(document.querySelectorAll('.filter-campus'));
const sizeSlider      = document.getElementById('size');
const sizeValEl       = document.getElementById('size-val');

// 3) Render function
function render(list) {
  listingsEl.innerHTML = '';
  list.forEach(s => {
    const card = document.createElement('div');
    card.className = 'school-card';
    card.innerHTML = `
      <h3><a href="${s.page}">${s.name}</a></h3>
      <p class="meta">${s.type} • ${s.degree} • Class size: ${s.size}+ • ${s.campus}</p>
    `;
    listingsEl.appendChild(card);
  });
}

// 4) Helper to get checked values
function checkedValues(checkboxes) {
  return checkboxes.filter(cb => cb.checked).map(cb => cb.value);
}

// 5) Apply filters and re-render
function applyFilters() {
  const types   = checkedValues(typeChecks);
  const degs    = checkedValues(degreeChecks);
  const camps   = checkedValues(campusChecks);
  const minSize = parseInt(sizeSlider.value, 10);

  // update slider label
  sizeValEl.textContent = minSize === parseInt(sizeSlider.max,10)
    ? `${minSize}+`
    : minSize;

  const filtered = schools.filter(s => {
    return (types.length === 0    || types.includes(s.type))
        && (degs.length === 0     || degs.includes(s.degree))
        && (camps.length === 0    || camps.includes(s.campus))
        && (s.size >= minSize);
  });

  render(filtered);
}

// 6) Wire up events
typeChecks.forEach(cb => cb.addEventListener('change', applyFilters));
degreeChecks.forEach(cb => cb.addEventListener('change', applyFilters));
campusChecks.forEach(cb => cb.addEventListener('change', applyFilters));
sizeSlider.addEventListener('input', applyFilters);

// 7) Initial load: show everything
document.addEventListener('DOMContentLoaded', () => {
  sizeValEl.textContent = sizeSlider.value + '+';
  render(schools);
});
