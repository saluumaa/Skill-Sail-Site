const speakers = [
  {
    name: 'Ilhan Muse',
    image: '/assets/teacher-five-removebg-preview.png',
    title: 'Lecturer at Amoud University',
    descripe: 'She has been teachin since 2016, her major is IT',
  },
  {
    name: 'Abdale Ali',
    image: '/assets/teacher-two-removebg-preview.png',
    title: 'Telesom Company',
    descripe: 'He is a head of the technical department at the Telesom Company',
  },
  {
    name: 'Edil Omer',
    image: '/assets/teacher-two-removebg-preview (1).png',
    title: 'Project manager and consultant',
    descripe: 'Edil works as a project manager and consultant in different companies',
  },
  {
    name: 'Salma Hassan',
    image: '/assets/teacher-four-removebg-preview.png',
    title: 'Software Developer',
    descripe: 'Salma is a software developer works with international companies ',
  },
  {
    name: 'Hibak Ahmed',
    image: '/assets/teacher-one-removebg-preview.png',
    title: 'Instructor at Amoud University',
    descripe: 'Hibak works as a finance and accounting specialist teacher',
  },
];

const loadMoreBtn = document.querySelector('.see-more');
const featuredSpeakers = document.querySelector('.container');

loadMoreBtn.addEventListener('click', () => {
  loadMoreBtn.classList.toggle('hide');
  let speakerCount = 2;
  featuredSpeakers.innerHTML += '';
  for (let i = speakerCount; i < speakerCount + 5; i += 1) {
    if (i >= speakers.length) {
      break;
    }

    const speaker = speakers[i];
    const speakerDiv = document.createElement('section');
    speakerDiv.className = 'teacher-wrapper';
    speakerDiv.innerHTML = `
      <div class="teacher-img">
      <img src="/assets/speaker-back.png" alt="">
      <img src="${speaker.image}" alt="" class="overlay-one">
  </div>
  <div class="right-content">
      <h3>${speaker.name}</h3>
      <h5>${speaker.title}</h5>
      <hr>
      <p>${speaker.descripe}</p>
  </div> `;
    featuredSpeakers.appendChild(speakerDiv);
  }
  speakerCount += 5;
});

const mainfeature = document.querySelector('.desk-featured-speaker');
const featuredteachers = document.createElement('div');
featuredteachers.className = 'container';

let speakerCount = 0;
featuredteachers.innerHTML += '';
for (let i = speakerCount; i < speakerCount + 5; i += 1) {
  if (i >= speakers.length) {
    break;
  }

  const speaker = speakers[i];
  const teacherDiv = document.createElement('section');
  teacherDiv.className = 'teacher-wrapper';
  teacherDiv.innerHTML = `
      <div class="teacher-img">
      <img src="/assets/speaker-back.png" alt="">
      <img src="${speaker.image}" alt="" class="overlay-one">
  </div>
  <div class="right-content">
      <h3>${speaker.name}</h3>
      <h5>${speaker.title}</h5>
      <hr>
      <p>${speaker.descripe}</p>
  </div> `;
  featuredteachers.appendChild(teacherDiv);
  mainfeature.appendChild(featuredteachers);
}
speakerCount += 5;
