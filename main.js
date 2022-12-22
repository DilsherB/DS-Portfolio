const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('collapsibleNavbar');

// eslint-disable-next-line no-undef
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((n) => {
  n.addEventListener('click', () => { bsCollapse.toggle(); });
});

const projects = [
  {
    id: 1,
    name: 'Multi-post Stories',
    company: 'Gain+Glory',
    description: 'This project was built for a multinational company. In it I applied E-commerce. User will be able to add the items in cart and on check out he can select payment method. He also can add delivery address.',
    featureImage: 'project1.svg',
    tools: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://dilsherb.github.io/Portfolio/',
    source: 'https://github.com/DilsherB/Portfolio',
  },
  {
    id: 2,
    name: 'Multi-post Stories',
    company: 'Gain+Glory',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featureImage: 'project2.svg',
    tools: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://dilsherb.github.io/Portfolio/',
    source: 'https://github.com/DilsherB/Portfolio',
  },
  {
    id: 3,
    name: 'Multi-post Stories',
    company: 'Gain+Glory',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featureImage: 'project3.svg',
    tools: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://dilsherb.github.io/Portfolio/',
    source: 'https://github.com/DilsherB/Portfolio',
  },
  {
    id: 4,
    name: 'Multi-post Stories',
    company: 'Gain+Glory',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featureImage: 'project4.svg',
    tools: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://dilsherb.github.io/Portfolio/',
    source: 'https://github.com/DilsherB/Portfolio',
  },
  {
    id: 5,
    name: 'Multi-post Stories',
    company: 'Gain+Glory',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featureImage: 'project1.svg',
    tools: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://dilsherb.github.io/Portfolio/',
    source: 'https://github.com/DilsherB/Portfolio',
  },
  {
    id: 6,
    name: 'Multi-post Stories',
    company: 'Gain+Glory',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featureImage: 'project2.svg',
    tools: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://dilsherb.github.io/Portfolio/',
    source: 'https://github.com/DilsherB/Portfolio',
  },
];

const myProjetcs = document.querySelector('#recentWorks');
projects.forEach((project) => {
  const works = document.createElement('works');
  works.innerHTML = `
  <section class="row d-flex justify-content-around">
    <div class="col-md-4 my-3">
        <div class="card">
            <img src="images/${project.featureImage}" alt="Project ${project.id}">
            <div class="card-body">
                <h5 class="card-title text-center">${project.name}<br> ${project.company}</h5>
                <div class="d-flex justify-content-around">
                    <button class="btn btn-secondary btn-outline-success px-1 rounded-3" disabled>${project.tools[0]}</button>
                    <button class="btn btn-secondary btn-outline-success px-1 rounded-3" disabled>${project.tools[1]}</button>
                    <button class="btn btn-secondary btn-outline-success px-1 rounded-3" disabled>${project.tools[2]}</button>
                    <button class="btn btn-secondary btn-outline-success px-1 rounded-3" disabled>${project.tools[3]}</button>
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-success m-3 showModal" data-bs-toggle="modal" data-bs-target="#project${project.id}">See Project</button>
                    <div class="modal fade" id="project${project.id}">
                        <div class="modal-dialog bg-white rounded-3">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <img class="mx-2" src="images/${project.featureImage}" alt="Project ${project.id}">
                                <div class="d-flex justify-content-between m-2">
                                  <h3> ${project.name}</h3>
                                  <div>
                                    <a href="https://dilsherb.github.io/Portfolio/" target="_blank">  
                                      <button type="button" class="btn btn-success px-1">See live
                                        <i class="fa fa-arrow-up-right-from-square fa-lg"></i>
                                      </button>
                                    </a>
                                    <a href="https://github.com/DilsherB/DS-Portfolio" target="_blank">
                                      <button type="button" class="btn btn-success px-1">See source
                                        <i class="fa-brands fa-github fa-lg"></i>
                                      </button>
                                    </a>
                                  </div>
                                </div>
                                  <ul class="py- p-0 d-flex" id="body${project.id}">
                                      <li class="btn btn-sm bg-light" disabled>${project.tools[0]}</button>
                                      <li class="btn ms-2 btn-sm bg-light" disabled>${project.tools[1]}</button>
                                      <li class="btn ms-2 btn-sm bg-light" disabled>${project.tools[2]}</button>
                                      <li class="btn ms-2 btn-sm bg-light" disabled>${project.tools[3]}</button>
                                  </ul>
                                <div class="mb-3"> ${project.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
    `;
  myProjetcs.appendChild(works);
});