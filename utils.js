
const createElement = (tagName, className, content)=>{
    const newElement = document.createElement(tagName)
    newElement.setAttribute('class', className)
    newElement.innerHTML = content
    return newElement
}