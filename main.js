
document.querySelector('.personal-info').addEventListener('click', ()=>{
    const sideSection = document.querySelector('.side-section');
    sideSection.innerHTML = '<object type="text/html" data="personal-info.html" width="750px" height="412px"></object>'
});

document.querySelector('.educational').addEventListener('click',()=>{
    document.querySelector('.side-section').innerHTML = '<object type="text/html" data="education.html"></object>';
});

document.querySelector('.work-experience').addEventListener('click',()=>{
    document.querySelector('.side-section').innerHTML = '<object type="text/html" data="experience.html"></object>';
});
document.querySelector('.projects').addEventListener('click',()=>{
    document.querySelector('.side-section').innerHTML = '<object type="text/html" data="projects.html"></object>';
});
document.querySelector('.companies').addEventListener('click',()=>{
    document.querySelector('.side-section').innerHTML = '<object type="text/html" data="companies.html"></object>';
});
document.querySelector('.contact-info').addEventListener('click',()=>{
    document.querySelector('.side-section').innerHTML = '<object type="text/html" data="contact-info.html"></object>';
});
document.querySelector('.life-style').addEventListener('click',()=>{
    document.querySelector('.side-section').innerHTML = '<object type="text/html" data="lifestyle.html"></object>';
});
console.log(sideSection);