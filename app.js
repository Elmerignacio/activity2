let sectionOne = document.getElementById("sectionOne")

import {  divright} from "./info.js"
import { divleft } from "./img.js"

const data = {
title: "My profile info",
text: "Hello, I'm Elmer Ignacio, an IT student. I'm passionate about technology and eager to learn more in the field of information technology.",
button: "Contact Us",
img: "img.png"
}


    
const {title, text, button, img}=data
sectionOne.append(divright(title, text, button))
sectionOne.append(divleft(img))



let sectionTwo = document.getElementById("sectionTwo")
import { card } from "./card.js"

const cards = {
    title1: "PROJECT COMPLETE",
    img1: "images.jpg",
    text1: "Bitcoin is a type of digital money that operates without a central authority, like a bank. It's created, stored, and traded electronically. Think of it as virtual coins you can use to buy things online or invest in, but instead of physical coins or bills, they exist only in digital form on the internet.",
    button1: "Learn More",
    img2: "images.jpg",
    text2: " Bitcoin is a type of digital money that operates without a central authority, like a bank. It's created, stored, and traded electronically. Think of it as virtual coins you can use to buy things online or invest in, but instead of physical coins or bills, they exist only in digital form on the internet.",
    button2: "Learn More",
    img3: "images.jpg",
    text3: "Bitcoin is a type of digital money that operates without a central authority, like a bank. It's created, stored, and traded electronically. Think of it as virtual coins you can use to buy things online or invest in, but instead of physical coins or bills, they exist only in digital form on the internet.",
    button3: "Learn More",
    }

const {title1, img1, text1, button1, img2,text2, button2, img3,text3, button3}=cards
sectionTwo.append(card(title1, img1, text1, button1, img2,text2, button2, img3,text3, button3))