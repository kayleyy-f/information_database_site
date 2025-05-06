// script.js

// 1) List of schools
const schools = [
  { name: "Baylor College of Medicine", url: "https://www.bcm.edu" },
  { name: "Fertitta Family College of Medicine at UH", url: "https://www.uh.edu/medicine" },
  { name: "Long School of Medicine at UT San Antonio", url: "https://health.utsa.edu/long-school-of-medicine/" },
  { name: "McGovern Medical School at UT HSC Houston", url: "https://med.uth.edu/mcgovern/" },
  { name: "Sam Houston State University College of Osteopathic Medicine", url: "https://osteopathic.shsu.edu/" },
  { name: "Sealy School of Medicine at UTMB – Galveston", url: "https://www.utmb.edu/medicine" },
  { name: "Texas A&M HSC College of Medicine", url: "https://medicine.tamu.edu/" },
  { name: "Texas Tech HSC Paul L Foster SOM at El Paso", url: "https://elpaso.ttuhsc.edu/medicine/" },
  { name: "Texas Tech HSC SOM at Lubbock", url: "https://www.ttuhsc.edu/school-of-medicine/" },
  { name: "UNT HSC Texas College of Osteopathic Medicine", url: "https://tcom.unt.edu/" },
  { name: "UT Austin Dell Medical School", url: "https://dellmed.utexas.edu/" },
  { name: "UT Rio Grande Valley School of Medicine", url: "https://www.utrgv.edu/som/" },
  { name: "UT Southwestern Medical School", url: "https://www.utsouthwestern.edu/" },
  { name: "UT at Tyler School of Medicine", url: "https://www.uttyler.edu/medicine/" },
  { name: "University of South Carolina School of Medicine – Greenville", url: "https://sc.edu/study/colleges_schools/medicine_greenville/" },
  { name: "University of Mississippi School of Medicine", url: "https://www.umc.edu/som/" },
  { name: "East Carolina University Brody School of Medicine", url: "https://medicine.ecu.edu/" },
  { name: "Edward Via College of Osteopathic Medicine (VCOM)", url: "https://www.vcom.edu/" },
  { name: "Nova Southeastern University Dr. Kiran C. Patel College of Osteopathic Medicine", url: "https://osteopathic.nova.edu/" },
  { name: "Anne Burnett Marion School of Medicine at TCU", url: "https://medicine.tcu.edu/" }
];

// 2) Render function
function render(list) {
  const listings = document.getElementById('listings');
  listings.innerHTML = '';
  list.forEach(school => {
    const card = document.createElement('div');
    card.className = 'school-card';
    card.innerHTML = `
      <h3><a href="${school.url}" target="_blank">${school.name}</a></h3>
    `;
    listings.appendChild(card);
  });
}

// 3) On page load, show all schools
document.addEventListener('DOMContentLoaded', () => {
  render(schools);
});
