import {createHome} from "./homepage/homepage"
import "./main.css"

export const body = document.querySelector('body')
function createContentDiv(){
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
// createHome()
console.log('from indexjs')