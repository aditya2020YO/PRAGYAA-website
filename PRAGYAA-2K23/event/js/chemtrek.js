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
    'threaded-ideas':{
        description:'As children, we have often wondered how a soda rocket is created. With the same idea, we have this event in which participants must use chemicals to drive cars of specific dimensions the greatest distance possible.',
        rules:[

        ],
        contact:[
            {
                name:'Vinay',
                number:'9987953644'
            }, 
            {
                name:'Prajwal',
                number:'9579241764'
            }
        ]
    },
    'technochem':{
        description:'Hustle Chemist, or Chemoboss, is going to be an event that will be held under chemtrails by ChESA in collaboration with Pragyaa. In this event, we are going to accept participants in groups of 3–4 students and assign them specific tasks that they will have to complete to proceed in the competition. These tasks will be related to basic chemistry (e.g., basic reactions, etc.) and will follow a storyline so that the participants can feel the story the tasks are taking them through to reach the final task. This event will focus on the teamwork of the participants and how quickly they can think of a solution to the task given to them using their combined knowledge, making it competitive and fun at the same time.',
        rules:[
            
        ],
        contact:[
            {
                name:'Vinay',
                number:'9987953644'
            }, 
            {
                name:'Prajwal',
                number:'9579241764'
            }
        ]
    },

}