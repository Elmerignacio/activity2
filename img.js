const divleft = (img)=>{
    let div = document.createElement("div")
    div.innerHTML=`<img class="imgs" src="img.png"${img}}>
                    

    `

return div
}
export{divleft}