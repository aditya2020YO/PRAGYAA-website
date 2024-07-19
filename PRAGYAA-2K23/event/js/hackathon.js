const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('#modal');
const contact_modal = document.querySelector('#contact-modal');
const description = document.querySelector('#description');
const rule_list = document.querySelector('#rule-list');
const close = document.querySelector('.btn-close');
const contact = document.querySelector('.btn-contact');
const contact_close = document.querySelector('.btn-contact-close');
const contact_1 = document.querySelector('#contact-name-1');
const contact_no_1 = document.querySelector('#contact-number-1');
const contact_2 = document.querySelector('#contact-name-2');
const contact_no_2 = document.querySelector('#contact-number-2');
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


var currentEvent = {};


cardContainer.addEventListener('click', (event) => {
    const target = event.target.id;
    if(target)
    {
        currentEvent = events[target];
        description.innerHTML = currentEvent.description;
        
        currentEvent.rules.forEach((rule)=>{
            var node = document.createElement("li");
            var textnode = document.createTextNode('- '+rule); 
            node.appendChild(textnode);
            node.classList.add('text-gray-200');
            rule_list.appendChild(node);
        });
        
        modal.classList.remove('hidden');
        
    }
});

close.addEventListener('click', () => {
    modal.classList.remove('animate__rollIn');
    modal.classList.add('animate__rollOut');
    contact_modal.classList.add('hidden');
    setTimeout(()=>{
        modal.classList.add('hidden');
        modal.classList.remove('animate__rollOut');
        modal.classList.add('animate__rollIn');
        rule_list.innerHTML = '';
    }, 1000);
});

contact.addEventListener('click', () => {
    contact_1.innerHTML = currentEvent.contact[0].name;
    contact_no_1.innerHTML = currentEvent.contact[0].number;
    contact_2.innerHTML = currentEvent.contact[1].name;
    contact_no_2.innerHTML = currentEvent.contact[1].number;
    contact_modal.classList.remove('hidden');
});

contact_close.addEventListener('click', () => {
    contact_modal.classList.remove('animate__zoomIn');
    contact_modal.classList.add('animate__zoomOut');
    setTimeout(()=>{
        contact_modal.classList.add('hidden');
        contact_modal.classList.remove('animate__zoomOut');
        contact_modal.classList.add('animate__zoomIn');
    }, 1000);
});

const events = {
    'face-the-nation':{
        description:'Hackathon is a software-based competition that challenges participants to solve a series of real-life problems and puzzles. The competition is typically held over a period of 36 hours continuous and is open to team of 3-4 members. Participants in Hackathon are tasked to solve real life problem statements over the domain of Web Development and Machine Learning / Artificial Intelligence. Teams need to decide the domain in which they want to work on. For web development team need to create a web app according to the problem statement provided. For ML/AI the team need to work on algorithm and open-source dataset to provide a solution to given problem statement',
          rules:[
            
          ],  
        
        contact:[
            {
                name:'shantanu',
                number:'9370515039'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'house-of-mini':{
        description:'Lights… Camera… Action! Action speaks louder than words. This event gives you and your team an opportunity to make a mini-version of a film on the given topics. A beautiful script, great acting, creativity, etc. are fundamentals of a film. Can you and your team rise to the challenge? Win this event and get some exciting cash prizes.',
        rules:[
            
        ],
        contact:[
            {
                name:'',
                number:''
            }, 
            {
                name:'',
                number:''
            }
        ]
    },

}