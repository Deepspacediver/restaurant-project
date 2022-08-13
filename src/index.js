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

    const homeNav = document.createElement('ul')
    homeNav.textContent = 'Home'
    const menuNav = document.createElement('ul')
    menuNav.textContent = 'Menu'
    const contactNav = document.createElement('ul')
    contactNav.textContent = 'Contact'
    navList.append(homeNav, menuNav, contactNav)
    navContainer.appendChild(navList)

    body.appendChild(navContainer)
}
createNavTab();
createContentDiv();
console.log('from indexjs')