const customersFB=[
    {
        name: 'jane Doe',
        email: 'johndoe@gmail.com',
        testimonial:'Very happy with my WordPress website! Great friendly service and very responsive.',
        img:'./jin.webp',
    },
    {
        name: 'Choi Anh',
        email: 'keza@gmail.com',
        testimonial:'Freshy excels in every aspect! Their exceptional performance, impressive knowledge of WordPress, and unwavering dedication to their clients sets them apart from other digital design and web developers.',
        img:'./lenny.jpg',
    },
    {
        name:'Spencer Gu',
        email: 'britneygu@gmail.com',
        testimonial:'We highly recommend Freshy for all your website needs. They have been excellent to work with as we developed, implemented, and updated our website. They are extremely responsive and usually responded to any request within hours (if not minutes!).',
        img:'./profile.jpg',
    },
    {
        name:'ISIMBI Ashley',
        email: 'ashley@gmail.com',
        testimonial:'The entire Freshy team was terrific from the outset of conversations through site completion, and was consistently friendly and accommodating; always punctual with updates and helpful suggestions.',
        img:'./rm.jpeg',
    }
];
let j=customersFB.length;
let tc=document.getElementById('feedback');
let nextbt=document.getElementById('next');
let prevbt=document.getElementById('prev');
nextbt.addEventListener('click',()=>{
   i=(j+i+1)%j;
   display();
});
prevbt.addEventListener('click',()=>{
    i=(j+i-1)%j;
    display();
});
let i=0;
let display=()=>{
    tc.innerHTML=`
    <p>${customersFB[i].testimonial}</p>
    <img src="${customersFB[i].img}" alt="">
    <h3>${customersFB[i].name}</h3>
    <p>${customersFB[i].email}</p>
    `;
};
window.onload=display;