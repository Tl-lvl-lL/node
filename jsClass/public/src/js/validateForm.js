let form = document.getElementById('form'),
    button = document.getElementById('button'),
    phone = document.getElementById('phone'),
    nick = document.getElementById('nick'),
    anotherContent = phone.value,
    content = nick.value,
    contents = nick.id,
    contentElement = form.attributes.getNamedItem('id'),
    removeElement = form.attributes.removeNamedItem('id'),
    contentElements = form.attributes


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(contentElements,
                contentElement,
                removeElement,
                contentElements,
                anotherContent,
                content,contents);
})

button.addEventListener('click',(e)=>{
    // e.preventDefault()
    console.log('first');
})
