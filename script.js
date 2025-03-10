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

  const newCard = document.createElement('div');
  newCard.classList = 'card';


  const cardImage = document.createElement('img');
  cardImage.src = img;
  
  
  const cardData = document.createElement('div');
  cardData.classList = 'data';
  
  const cardName = document.createElement('h6');
  cardName.classList = 'name';
  cardName.innerHTML = name;
  cardData.append(cardName);

  const cardRole = document.createElement('p');
  cardRole.classList = 'role';
  cardRole.innerHTML = role;
  cardData.append(cardRole);

  const cardEmail = document.createElement('a');
  cardEmail.classList = 'email';
  cardEmail.innerHTML = email;
  cardEmail.href = '#';
  cardData.append(cardEmail);


  newCard.append(cardImage);
  newCard.append(cardData);


  cardsToAppend.push(newCard);
});


console.log(cardsToAppend);


const cardsList = document.querySelector('.members-cards');
cardsToAppend.forEach(card => {
  cardsList.append(card);
});