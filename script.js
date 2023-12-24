let hamburger=document.querySelector('.bannerSection figure span')
let menuBar=document.querySelector('.bannerSection nav')
let bannerSection=document.querySelector('.bannerSection')
hamburger.addEventListener("click",(event)=>{
    event.preventDefault();
    menuBar.classList.toggle("menuBarShow")
    bannerSection.classList.toggle("bannerSectionMob")
})