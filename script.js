// script.js

// 1) List of schools and their detail‐page filenames
const schools = [
    { name: "Baylor College of Medicine", page: "baylor-college-of-medicine.html" },
    { name: "Fertitta Family College of Medicine at UH", page: "fertitta-family-college-of-medicine.html" },
    { name: "Long School of Medicine at UT San Antonio", page: "long-school-of-medicine-utsa.html" },
    { name: "McGovern Medical School at UT HSC Houston", page: "mcgovern-medical-school-uth.html" },
    { name: "Sam Houston State University College of Osteopathic Medicine", page: "shsu-osteopathic-medicine.html" },
    { name: "Sealy School of Medicine at UTMB – Galveston", page: "sealy-school-of-medicine-utmb.html" },
    { name: "Texas A&M HSC College of Medicine", page: "tamu-college-of-medicine.html" },
    { name: "Texas Tech HSC Paul L Foster SOM at El Paso", page: "ttuhsc-elpaso-som.html" },
    { name: "Texas Tech HSC SOM at Lubbock", page: "ttuhsc-lubbock-som.html" },
    { name: "UNT HSC Texas College of Osteopathic Medicine", page: "unt-tcom.html" },
    { name: "UT Austin Dell Medical School", page: "utaustin-dell-medical-school.html" },
    { name: "UT Rio Grande Valley School of Medicine", page: "utrgv-school-of-medicine.html" },
    { name: "UT Southwestern Medical School", page: "utsouthwestern-medical-school.html" },
    { name: "UT at Tyler School of Medicine", page: "ut-tyler-school-of-medicine.html" },
    { name: "University of South Carolina School of Medicine – Greenville", page: "usc-greenville.html" },
    { name: "University of Mississippi School of Medicine", page: "umississippi-school-of-medicine.html" },
    { name: "East Carolina University Brody School of Medicine", page: "ecu-brody-school.html" },
    { name: "Edward Via College of Osteopathic Medicine (VCOM)", page: "vcom.html" },
    { name: "Nova Southeastern University Dr. Kiran C. Patel College of Osteopathic Medicine", page: "nova-patel-college.html" },
    { name: "Anne Burnett Marion School of Medicine at TCU", page: "tcu-anne-burnett-marion.html" }
  ];
  
  // 2) Grab the container
  const listings = document.getElementById('listings');
  
  // 3) Render function builds local‐link cards
  function render(list) {
    listings.innerHTML = '';
    list.forEach(school => {
      const card = document.createElement('div');
      card.className = 'school-card';
      card.innerHTML = `
        <h3><a href="${school.page}">${school.name}</a></h3>
      `;
      listings.appendChild(card);
    });
  }
  
  // 4) On load, show all
  document.addEventListener('DOMContentLoaded', () => {
    render(schools);
  });
  
