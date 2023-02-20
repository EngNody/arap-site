//=============================================================
//  ======================== slideshow ========================
// ============================================================

// <!-- =========================================================== -->
// <!-- ======================  ali way =========================== -->
// <!-- =========================================================== -->

// const slidebox=document.querySelector(".slidebox")
// const fieldslide=document.querySelector("#fieldslide")
const slidesspan = document.querySelectorAll(".slideshowspan");
const activebuttonnext = document.getElementById("activebuttonnext");
const activebuttonpre = document.getElementById("activebuttonpre");
const imagesshow = document.getElementById("imagesshow");
const slidetext = document.querySelector("#slidetext");
const buttons = document.querySelectorAll(".buttons");
let s = 0;

const ourimages = [
  ` <img src="/images/slideshow11.jfif" alt="amazing background" class="bigimg activeimage" id="slideshowpicture1" class="slideshowpicture">`,
  ` <img src="/images/slideshow2.jfif" alt="amazing background" class="bigimg" id="slideshowpicture2" class="slideshowpicture">`,
  ` <img src="/images/slideshow3.jfif" alt="amazing background" class="bigimg" id="slideshowpicture3" class="slideshowpicture">`,
  ` <img src="/images/slideshow4.jfif" alt="amazing background" class="bigimg" id="slideshowpicture4" class="slideshowpicture">`,
  ` <img src="/images/slideshow5.jfif" alt="amazing background" class="bigimg" id="slideshowpicture5" class="slideshowpicture">`,
  ` <img src="/images/slideshow16.jfif" alt="amazing background" class="bigimg" id="slideshowpicture7" class="slideshowpicture">`,
  ` <img src="/images/slideshow17.jfif" alt="amazing background" class="bigimg" id="slideshowpicture8" class="slideshowpicture">`,
  ` <img src="/images/slideshow12.jfif" alt="amazing background" class="bigimg" id="slideshowpicture9" class="slideshowpicture">`,

];

imagesshow.innerHTML = ourimages[s];
slidetext.innerHTML = `Slide # ${s + 1} of ${ourimages.length}`;

// next > ========================
activebuttonnext.addEventListener("click", (eo) => {
  activebuttonpre.removeAttribute("disabled");

  s++;

  if (s == ourimages.length - 1) {
    eo.target.setAttribute("disabled", "");
  }
  slidetext.innerHTML = ` Slide # ${s + 1} of ${ourimages.length}`;

  imagesshow.innerHTML = ourimages[s];
  // slidetext.innerHTML=(s+1);

  for (let i = 0; i < slidesspan.length; i++) {
    const element = slidesspan[i];
    element.classList.remove("activespan")
}

slidesspan[s].classList.add("activespan")

// item.innerHTML+=1

// console.log(object);

});

// pre < =============================
activebuttonpre.addEventListener("click", (eo) => {
  activebuttonnext.removeAttribute("disabled");

  s--;
  slidetext.innerHTML = ` Slide # ${s + 1} of ${ourimages.length}`;

  if (s == 0) {
    eo.target.setAttribute("disabled", "");
  }

  imagesshow.innerHTML = ourimages[s];
  // slidetext.innerHTML=(s+1);
  // get active span by get class active or use for 
for (let i = 0; i < slidesspan.length; i++) {
  const element = slidesspan[i];
  element.classList.remove("activespan")
}
slidesspan[s].classList.add("activespan")

});
// spans click =============================
slidesspan.forEach((item, index) => {
 item.addEventListener("click",(eo) => {

  s=index; //this line is very important to connect buttons to ++ or --

for (let i = 0; i < slidesspan.length; i++) {
    const element = slidesspan[i];
    element.classList.remove("activespan")

}
item.classList.add("activespan")

for ( let i = 0; i < buttons.length; i++) {
    const element = buttons[i];

    element.removeAttribute("disabled")

    if (item.classList.contains("slideshowspan1")) {
        activebuttonpre.setAttribute("disabled","")
    }
    // if (item.classList.contains(`slideshowspan${ourimages.length}`)) {
    //     activebuttonnext.setAttribute("disabled","")
    // }  
    //==============another way by using index
     if (index==(ourimages.length-1)) {
        activebuttonnext.setAttribute("disabled","")
    }  
  }
// ali use index instead myitem and this better 
// const myitem=item.innerHTML
// slidetext.innerHTML = ` Slide #${myitem} of ${ourimages.length}`;
// imagesshow.innerHTML=ourimages[`${myitem-1}`]
slidetext.innerHTML = ` Slide # ${index+1} of ${ourimages.length}`;
imagesshow.innerHTML=ourimages[index]

}); 
})

























//=============================================================
//  ======================== my first method ========================
// ============================================================



// const slidesspan=document.querySelectorAll(".slideshowspan")
// const activebuttonnext=document.getElementById("activebuttonnext")
// const imagesshow=document.getElementById("imagesshow")
// const slidetext=document.querySelector("#slidetext")
// let s=0

// slidesspan.forEach(item => {

// item.addEventListener("click",(eo) => {

// for (let s = 0; s < slidesspan.length; s++) {
//   let element = slidesspan[s];
//   // if(element == slidesspan[0]) {
//   //   console.log("hi first");
//   // }
//   element.classList.remove("activespan")
// }

//   item.classList.add("activespan")

// const activebuttonpre=document.getElementById("activebuttonpre")

// if (item.classList.contains("slideshowspan1")) {
//   console.log("hi first");
//   activebuttonpre.setAttribute("disabled","")
//   imagesshow.innerHTML=`<img src="/images/slideshow11.jfif" alt="amazing background" class="bigimg" id="slideshowpicture1"> `
//   slidetext.innerHTML=`1`
// }else{
//   activebuttonpre.removeAttribute("disabled")
// }
// if (item.classList.contains("slideshowspan2")) {
//   imagesshow.innerHTML=`<img src="/images/slideshow2.jfif" alt="amazing background" class="bigimg" id="slideshowpicture1"> `
//   slidetext.innerHTML=`2`
// }
// if (item.classList.contains("slideshowspan3")) {
//   imagesshow.innerHTML=`<img src="/images/slideshow3.jfif" alt="amazing background" class="bigimg" id="slideshowpicture1"> `
//   slidetext.innerHTML=`3`
// }
// if (item.classList.contains("slideshowspan4")) {
//   imagesshow.innerHTML=`<img src="/images/slideshow4.jfif" alt="amazing background" class="bigimg" id="slideshowpicture1"> `
//   slidetext.innerHTML=`4`
// }
// if (item.classList.contains("slideshowspan5")) {
//   imagesshow.innerHTML=`<img src="/images/slideshow5.jfif" alt="amazing background" class="bigimg" id="slideshowpicture1"> `
//   slidetext.innerHTML=`5`
// }
// if (item.classList.contains("slideshowspan6")) {
//   imagesshow.innerHTML=`<img src="/images/slideshow16.jfif" alt="amazing background" class="bigimg" id="slideshowpicture1"> `
//   slidetext.innerHTML=`6`
// }
// if (item.classList.contains("slideshowspan7")) {
//   console.log("hi end");
//   activebuttonnext.setAttribute("disabled","")
//   imagesshow.innerHTML=`<img src="/images/slideshow17.jfif" alt="amazing background" class="bigimg" id="slideshowpicture1"> `
//   slidetext.innerHTML=`7`
// }else{
//   activebuttonnext.removeAttribute("disabled")
// }

// })
// });
// // ==================================================================================================================
// activebuttonnext.addEventListener("click",(eo) => {

//   slidesspan.forEach(item => {

// // for (let s = 0; s < slidesspan.length; s++) {
//   let element = slidesspan[s];
//   console.log(element)
// s++
//   // if(element == slidesspan[0]) {
//   //   console.log("hi first");
//   // }
//   element.classList.remove("activespan")
// // }

//   item.classList.add("activespan")

// if (s<slidesspan.length) {
//    element = slidesspan[s+1];
//    console.log(element)

//   // console.log(s);
// }
// })

// activebuttonnext.addEventListener("click",(eo) => {

//   if (s<slidesspan.length) {
//     //  element = slidesspan[s+1];
//     s++
//      console.log(element)
//      item.classList.add("activespan")

//     // console.log(s);
//   }
// })







