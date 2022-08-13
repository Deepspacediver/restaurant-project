import { body } from ".."

export function createHome(){
    const contentDiv = document.getElementById('content')
    
    const homeHeading = document.createElement('div')
    homeHeading.classList.add('home-heading')
    homeHeading.textContent = 'This is the most interesting restaurant'
    contentDiv.appendChild(homeHeading)

    const homeImage = document.createElement('img')
    homeImage.src = "https://images.pexels.com/photos/2233351/pexels-photo-2233351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    contentDiv.appendChild(homeImage)

    const homeDescription = document.createElement('div');
    homeDescription.classList.add('home-description')
    homeDescription.textContent = 'This is the most intereseting resturant. You will not find a better place to eat. Please come here, or else'
    contentDiv.appendChild(homeDescription)
    

    
}