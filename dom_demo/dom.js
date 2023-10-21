console.log('DOM Demo!')

console.log(document)

console.log(document.body)


const myTitle = document.getElementById('title')
console.log(myTitle)
myTitle.innerText = 'NEW TITLE'

const ps = document.getElementsByTagName('p')
console.log(ps)
for (let p of ps){
    console.log(p.innerText)
    p.innerText = 'replaced'
};

const found = document.getElementsByClassName('find-me')
console.log(found)
found[0].className = "text-primary"
myTitle.innerText = '<p>New Title</p>'
myTitle.innerText = '<p class="text-danger">New Title</p>'

const imgs = document.getElementsByTagName('img')
console.log(imgs)
imgs[0].src ='https://picsum.photos/150'

const input = document.getElementById('pokemon')
input.value="Starting Val"

const changeColor = (event) => {
    console.log(event)
    const button = event.target
    if(button.className=='btn btn-primary'){
        button.className = 'btn btn-danger'
    } else if (button.className=='btn btn-danger'){
        button.className = 'btn btn-success'
    } else{
        button.className = 'btn btn-primary'
    }
}

const button2 = document.createElement('button')
button2.innerText = 'Click Me 2'
button2.className = 'btn btn-danger'
button2.onclick = changeColor
document.body.append(button2)

const button3 = document.createElement('button')
button3.innerText='click me 3'
button3.className ='btn btn-success'
document.body.append(button3)
//button3.addEventListener(type_of_event, callbackFunc)
button3.addEventListener('click', changeColor)

const form = document.querySelector('form#my-form input')
form.addEventListener('submit', (e)=>{
    //for Submit events, you neet to preventDefault()
    e.preventDefault()
    console.log(e);
    const myValue = e.target[0].value
    const myValue1 = e.target.poke.value
    console.log(myValue)
})

button3.addEventListener('click', ()=>{
    const container = document.querySelector('div.container')
    const text = document.createElement('h3')
    text.innerText = 'newly generated text'
    container.append(text)
})