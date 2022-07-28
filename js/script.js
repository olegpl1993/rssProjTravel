'use strict'

//скрипт большого слайдера -------------------------------------------------------------------
let slider = document.querySelector(".destinations__slideRow"); //слайдер
slider.style.left = "-660px"; //по центру
let left = parseInt(slider.style.left); //текущее значение 
//сдвиг вправо
function slideRight() {
    document.querySelector(".destinations__point1").style.background = "rgba(242, 120, 92, 1)";
    document.querySelector(".destinations__point2").style.background = "rgba(242, 120, 92, 0.5)";
    document.querySelector(".destinations__point3").style.background = "rgba(242, 120, 92, 0.5)";
    left = parseInt(slider.style.left); //обновляет текущую позицию  
    if (left < 200) { //проверка текущего значение
        left += 10; //прибавляет пиксили
        slider.style.left = `${left}px`; //записывает новую позицыю
        setTimeout(slideRight, 1); //рекурсивно выполняет функцию с задержкой 1млс
    }
}
//выравнивание по центру
function slideCenter() {
    document.querySelector(".destinations__point1").style.background = "rgba(242, 120, 92, 0.5)";
    document.querySelector(".destinations__point2").style.background = "rgba(242, 120, 92, 1)";
    document.querySelector(".destinations__point3").style.background = "rgba(242, 120, 92, 0.5)";
    left = parseInt(slider.style.left); //обновляет текущую позицию
    if (left < -660) { //проверка текущего значение
        left += 10; //прибавляет пиксили
        slider.style.left = `${left}px`; //записывает новую позицыю
        setTimeout(slideCenter, 1); //рекурсивно выполняет функцию с задержкой 1млс
    }
    if (left > -660) { //проверка текущего значение
        left -= 10; //отнимает пиксили
        slider.style.left = `${left}px`; //записывает новую позицыю
        setTimeout(slideCenter, 1); //рекурсивно выполняет функцию с задержкой 1млс
    }
}
//сдвиг влево
function slideLeft() {
    document.querySelector(".destinations__point1").style.background = "rgba(242, 120, 92, 0.5)";
    document.querySelector(".destinations__point2").style.background = "rgba(242, 120, 92, 0.5)";
    document.querySelector(".destinations__point3").style.background = "rgba(242, 120, 92, 1)";
    left = parseInt(slider.style.left); //обновляет текущую позицию 
    if (left > -1510) { //проверка текущего значение
        left -= 10; //отнимает пиксили
        slider.style.left = `${left}px`; //записывает новую позицыю
        setTimeout(slideLeft, 1); //рекурсивно выполняет функцию с задержкой 1млс
    }
}
//слушатели нажайтий
document.querySelector(".destinations__slide1").addEventListener("click", slideRight);
document.querySelector(".destinations__slide2").addEventListener("click", slideCenter);
document.querySelector(".destinations__slide3").addEventListener("click", slideLeft);
//----------------------------------------------------------------------------------------------------

// скрипт мобильного слайдера ------------------------------------------------------------------------
const mLeftArrow = document.querySelector(".mdestinations__arrowLeft");
const mRightArrow = document.querySelector(".mdestinations__arrowRight");
const mSlider = document.querySelector(".mdestinations__slideRow");
const mPoint1 = document.querySelector(".mdestinations__point1");
const mPoint2 = document.querySelector(".mdestinations__point2");
const mPoint3 = document.querySelector(".mdestinations__point3");
function mElementOff() { //делает неактивными все елементы
    mPoint1.classList.remove("activePoint");
    mPoint2.classList.remove("activePoint");
    mPoint3.classList.remove("activePoint");
    mLeftArrow.classList.remove("activeArrow");
    mRightArrow.classList.remove("activeArrow");
}
mRightArrow.addEventListener("click", () => {
    if (mSlider.classList.contains("_img2")) {
        mElementOff();
        mSlider.classList.add("_img3");
        mPoint3.classList.add("activePoint");
        mLeftArrow.classList.add("activeArrow");
    }
    if (!(mSlider.classList.contains("_img2"))) {
        mElementOff();
        mSlider.classList.add("_img2");
        mPoint2.classList.add("activePoint");
        mRightArrow.classList.add("activeArrow");
        mLeftArrow.classList.add("activeArrow");
    }
})
mLeftArrow.addEventListener("click", () => {
    if (mSlider.classList.contains("_img2")) {
        mElementOff();
        mSlider.classList.remove("_img2");
        mPoint1.classList.add("activePoint");
        mRightArrow.classList.add("activeArrow");
    }
    if (mSlider.classList.contains("_img3")) {
        mElementOff();
        mSlider.classList.remove("_img3");
        mSlider.classList.add("_img2");
        mPoint2.classList.add("activePoint");
        mRightArrow.classList.add("activeArrow");
        mLeftArrow.classList.add("activeArrow");
    }
})

//----------------------------------------------------------------------------------------------------

//меню бургер ----------------------------------------------------------------------------------------
const menuBox = document.querySelector(".burger__box");
const menu = document.querySelector(".burger__menu");
const liMenu = document.querySelectorAll(".burger__menuLi");
const cross = document.querySelector(".burger__menuIcon");
const burger = document.querySelector(".header__burger");
burger.addEventListener("click", () => {
    document.body.classList.add("_lock");
    menuBox.classList.add("_active");
});
cross.addEventListener("click", () => {
    document.body.classList.remove("_lock");
    menuBox.classList.remove("_active");
});
liMenu.forEach(element => {
    element.addEventListener("click", () => {
        document.body.classList.remove("_lock");
        menuBox.classList.remove("_active");
    });
});
menu.addEventListener("click", (e) => {
    e.stopPropagation(); //отменяет всплытие (отменяет выполнение ивента menuBox)
});
menuBox.addEventListener("click", () => {
    document.body.classList.remove("_lock");
    menuBox.classList.remove("_active");
});

//--------------------------------------------------------------------------------------------------------------

//POP-UP --------------------------------------------------------------------------------------------------------
//открытие и закрытие POPUP
const lpopup = document.querySelector(".lpopup__box");
const loginbtn = document.querySelector(".header__button");
const burgerAcc = document.querySelector(".burger__acc");
loginbtn.addEventListener("click", () => {
    lpopup.classList.add("_active");
    document.body.classList.add("_lock");
})
burgerAcc.addEventListener("click", () => {
    lpopup.classList.add("_active");
    document.body.classList.add("_lock");
})
lpopup.addEventListener("click", (e) => {
    if (e.target.classList.contains("lpopup__box")) {
        lpopup.classList.remove("_active");
        document.body.classList.remove("_lock");
    }
})
//вывод алерта
const mailInput = document.querySelector(".lpopup__mailInput");
const passInput = document.querySelector(".lpopup__passInput");
const signin = document.querySelector(".lpopup__signin");
const rmailInput = document.querySelector(".rpopup__mailInput");
const rpassInput = document.querySelector(".rpopup__passInput");
const rsignin = document.querySelector(".rpopup__signin");
signin.addEventListener("click", () => {
    let mail = mailInput.value;
    let pass = passInput.value;
    alert(`Mail: ${mail} / Pass: ${pass}`);
})
rsignin.addEventListener("click", () => {
    let mail = rmailInput.value;
    let pass = rpassInput.value;
    alert(`Mail: ${mail} / Pass: ${pass}`);
})
//смена блока логин и регистрация
const register = document.querySelector(".popup__register");
const log = document.querySelector(".rpopup__log");
const loginBlock = document.querySelector(".lpopup");
const createBlock = document.querySelector(".rpopup");
register.addEventListener("click", () => {
    loginBlock.classList.add("_none");
    createBlock.classList.add("_block");
})
log.addEventListener("click", () => {
    loginBlock.classList.remove("_none");
    createBlock.classList.remove("_block");
})
//--------------------------------------------------------------------------------------------------------------

//самооценка работы---------------------------------------------------------------------------------------------
console.log("Слайдер изображений в секции destinations +50");
console.log("Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50");
console.log("(Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25");

console.log("Количество балов 125");
//-------------------------------------------------------------------------------------------------------------