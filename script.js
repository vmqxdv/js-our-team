const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const cardsToAppend = [];

teamMembers.forEach(member => {
  const { name, role, email, img } = member;

  const cardHTML = `
    <div class="card">
      <img src="${img}" alt="${name}">
      <div class="data">
        <h6 class="name">${name}</h6>
        <p class="role">${role}</p>
        <a href="#" class="email">${email}</a>
      </div>
    </div>
  `;

  cardsToAppend.push(cardHTML);
});


const cardsList = document.querySelector('.members-cards');
cardsList.innerHTML = cardsToAppend.join('');