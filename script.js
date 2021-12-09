//varoiables declaration 

const btnPortfolio=document.querySelector("button")
const sectionPotrfolio=document.querySelector('.portfolio')

const scrollToPortfolio =()=>{
    sectionPotrfolio.scrollIntoView({behavior: "smooth"})
}

btnPortfolio.addEventListener('click',scrollToPortfolio)