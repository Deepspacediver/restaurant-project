
export function createMenu(){
    const contentDiv = document.getElementById('content')
    contentDiv.appendChild(createMenuItem('yo', 'most delicious meal',"https://images.pexels.com/photos/2233351/pexels-photo-2233351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
    )

}

function createMenuItem(name, description, src){
    const menuItemContainer = document.createElement('div')
    menuItemContainer.classList.add('item-container')
    
    const itemName = document.createElement('div')
    itemName.textContent = name;

    const itemDescription = document.createElement('div')
    itemDescription.textContent = description;

    const itemImage = document.createElement('img')
    itemImage.src = src;

    menuItemContainer.appendChild(itemName)
    menuItemContainer.appendChild(itemDescription)
    menuItemContainer.appendChild(itemImage)

    return menuItemContainer;

}