import {createHome} from "./homepage/homepage"
import "./main.css"
import { createMenu } from "./menu/menu"

export const body = document.querySelector('body')
export function createContentDiv(){
    const contentDiv = document.createElement('div')
    contentDiv.setAttribute("id", "content")
    body.appendChild(contentDiv)
}

function createNavTab() {
    const navContainer = document.createElement('div')
    navContainer.classList.add('nav-container')
    body.appendChild(navContainer)

    const navList = document.createElement('ul')
    navList.classList.add('nav-list')

    const homeNav = document.createElement('li')
    homeNav.textContent = 'Home'
    const menuNav = document.createElement('li')
    menuNav.textContent = 'Menu'
    const contactNav = document.createElement('li')
    contactNav.textContent = 'Contact'
    navList.append(homeNav, menuNav, contactNav)
    navContainer.appendChild(navList)

    body.appendChild(navContainer)
}
function createFooter(){
    const footer = document.createElement('div')
    footer.classList.add('footer')

    body.appendChild(footer)
}

createNavTab();
createContentDiv();
createFooter();
const htmlElements = (()=>{

    const contentDiv = document.getElementById('content')
    const navList = document.getElementsByClassName('nav-list')
    const listItems = Array.from(document.querySelectorAll('li'))

    return {
        contentDiv,
        navList,
        listItems,
    }
})();

window.addEventListener('load', createHome())

function changePage(){
    htmlElements.listItems.forEach(item => {
        item.addEventListener('click', (e)=>{
            clearContent()
            if(e.target.textContent === 'Home') createHome()
            else if(e.target.textContent ==='Menu') createMenu()
        })
    })

}
function clearContent(){
    while(htmlElements.contentDiv.firstChild){
        htmlElements.contentDiv.firstChild.remove()
        console.log(htmlElements.contentDiv)
    }

}
changePage()
// createHome()
console.log('from indexjs')