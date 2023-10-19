const btn1 = document.querySelector('.dark-mode-btn');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const ModeButton = document.querySelector('.input-text-for-search');

const resize = () => {

    let screen = window.innerWidth
    let y = 0.0254 * screen + 14.676
    let y1 = (-0.01106) * screen + 85.4412;
    y1 = Math.floor(Math.ceil(y1))
    main.style.height = `${y1}vh`
    document.querySelectorAll('*').forEach((el) => {
        if(el.classList.contains('material-symbols-outlined')) return
        el.style.fontSize = `${y}px`


    })
}

window.addEventListener('resize', () => {
    resize()
});
resize()


const addDataToMain = async (heading, paragraphs) => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1')
    const p = document.createElement('p');
    h1.textContent = heading;
    p.innerHTML = paragraphs
    div.append(h1, p);
    div.classList.add('container')
    main.append(div)
}
btn1.addEventListener('click', () => {

    if (body.classList.contains('dark-mode')) {

        document.querySelectorAll('*').forEach((el) => {
            el.classList.remove('dark-mode')
        })
        btn1.textContent = 'Dark Mode'
        return
    }
    document.querySelectorAll('*').forEach((el) => {
        el.classList.add('dark-mode')
    })
    btn1.textContent = 'White Mode'

})
addDataToMain('Bold Text', '<b> this is bold text </b>')