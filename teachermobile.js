const speakers = [
  {
    name: 'Ilhan Muse',
    image: 'assets/teacher-five-removebg-preview.png',
    title: 'Lecturer at Amoud University',
    descripe: 'She has been teachin since 2016, her major is IT',
  },
  {
    name: 'Abdale Ali',
    image: 'assets/teacher-two-removebg-preview.png',
    title: 'Telesom Company',
    descripe: 'He is a head of the technical department at the Telesom Company',
  },
  {
    name: 'Edil Omer',
    image: 'assets/teacher-two-removebg-preview (1).png',
    title: 'Project manager and consultant',
    descripe: 'Edil works as a project manager and consultant in different companies',
  },
  {
    name: 'Salma Hassan',
    image: 'assets/teacher-four-removebg-preview.png',
    title: 'Software Developer',
    descripe: 'Salma is a software developer works with international companies ',
  },
  {
    name: 'Hibak Ahmed',
    image: 'assets/teacher-one-removebg-preview.png',
    title: 'Instructor at Amoud University',
    descripe: 'Hibak works as a finance and accounting specialist teacher',
  },
  {
    name: 'Mohamed Ahmed',
    image: 'assets/teacher-six.jpg',
    title: 'head of somtel company',
    descripe: 'he is the manager of the telecommunication section in the company',
  },
];

const loadMoreBtn = document.querySelector('.see-more');
const featuredSpeakers = document.querySelector('.container');

let speakersShown = 2;

function createSpeakerCard(speaker) {
  const card = document.createElement('section');
  card.classList.add('teacher-wrapper');

  card.innerHTML = `
      <div class="teacher-img">
        <img src="/assets/speaker-back.png" alt="Teachers-back">
        <img src="${speaker.image}" alt="speakers-image" class="overlay-one">
      </div>
    <div class="right-content">
        <h3>${speaker.name}</h3>
        <h5>${speaker.title}</h5>
        <hr>
        <p>${speaker.descripe}</p>
    </div> `;

  return card;
}

function showSpeakers() {
  for (let i = 0; i < featuredSpeakers.children.length; i += 1) {
    if (i < speakersShown) {
      featuredSpeakers.children[i].style.display = 'flex';
    } else {
      featuredSpeakers.children[i].style.display = 'none';
    }
  }
}

for (let i = 0; i < speakers.length; i += 1) {
  featuredSpeakers.appendChild(createSpeakerCard(speakers[i]));
}

loadMoreBtn.addEventListener('click', () => {
  speakersShown += 2;
  if (speakersShown >= featuredSpeakers.children.length) {
    loadMoreBtn.style.display = 'none';
  }
  showSpeakers();
});

if (window.innerWidth < 768) {
  loadMoreBtn.style.display = 'flex';
  // speakersShown = speakers.length;
  speakersShown = 2;
  showSpeakers();
} else {
  loadMoreBtn.style.display = 'none';
  speakersShown = speakers.length;
  showSpeakers();
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    loadMoreBtn.style.display = 'none';
    speakersShown = speakers.length;
    showSpeakers();
  } else {
    loadMoreBtn.style.display = 'flex';
    speakersShown = 2;
    showSpeakers();
  }
});
