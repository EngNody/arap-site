// body.style.backgroundColor="red";

const mybtn = document.querySelectorAll(".mybtn");
const mysection3 = document.querySelector(".section3");
const container = document.querySelector(".container");
const mycarts = document.querySelector(".mycarts");
const myaddbutton = document.querySelector(".myaddbutton");



// ==========================================================
// Dark mood
// ==========================================================

const mybody = document.getElementById("body");
const myheader = document.getElementsByTagName("header")[0];
const mydark = document.querySelector(".icon-contrast");
const mysections = document.querySelectorAll("section");
const section2 = document.querySelector(".section2");
const section4 = document.querySelector(".section4");
const thetitle = document.querySelector(".title");
const myfavbutton1 = document.querySelectorAll(".myfavbutton1");

mydark.addEventListener("click", (eo) => {
  eo.target.classList.toggle("mytargetdark");
  mybody.classList.toggle("darkbody");
  myheader.classList.toggle("darkheader");
  myaddbutton.classList.toggle("myaddbuttondark");
  container.classList.toggle("mydark");
  khyan.classList.toggle("mydark");
  section4.classList.toggle("section4dark");
  thetitle.classList.toggle("thetitle");
  mycarts.classList.toggle("daark");

  mysections.forEach((item) => {
    item.classList.toggle("sectionsdark");
  });
  myfavbutton1.forEach((item) => {
    item.classList.toggle("myfavbutton1dark");
  });
});

// ====================================================================
//         show and hide ul
// ====================================================================
const ulhed = document.getElementById("ulhed");
const changecolor = document.getElementById("changecolor");

changecolor.addEventListener("mousemove", (eo) => {
  // eo.target.style.display="block"
  ulhed.classList.add("myblock");
});

changecolor.addEventListener("mouseleave", (eo) => {
  // eo.target.style.display="block"
  ulhed.classList.remove("myblock");
});




// ---------------------------------------------------------------------------
// select buy buttons that built in web page only
// ---------------------------------------------------------------------------
// mybtn.forEach((item) => {
// item.addEventListener("click", (eo) => {
// item.style.backgroundColor = "red";
// container.classList.remove("mynone");
// mysection3.classList.add("myblock");
// eo.preventDefault();
// khyan.classList.remove("myblock");
// });
// });

// ------------------------------------------------------------------------------
// {/* <div class="sympolpop">&#10006;</div> */}
// -----------------------------------------------------------------------------
const sympolpop = document.querySelector("#sympolpop");

sympolpop.addEventListener("click", () => {
  mysection3.classList.remove("myblock");
});

// -------------------------------------------------------------------------------
// {/* <button class="aywaa">ايوا ياعم</button> */}
// ------------------------------------------------------------------------------
const khyan = document.querySelector(".khyan");
const aywaa = document.querySelector(".aywaa");

aywaa.addEventListener("click", (params) => {
  container.classList.add("mynone");
  khyan.classList.add("myblock");
  setTimeout((eo) => {
    mysection3.classList.remove("myblock");
  }, 1000);
});
// -------------------------------------------------------
// {/* <h2 class="myaddbutton">Add Cart</h2> */}
// ------------------------------------------------------

myaddbutton.addEventListener("click", (params) => {
  let newcart = `
  <div class="cart">
  <img src="../images/111" alt="">
  <p>new product name</p>
  <p>price</p>
  <button class="mybtn">Buy</button>
</div>`;

  mycarts.innerHTML += newcart;
});

// -------------------------------------------------------------
// select buy buttons that entered by user blus+ buit in buy buttons
// -------------------------------------------------------------
mycarts.addEventListener("click", (eo) => {
  if (eo.target.className == "mybtn") {
    container.classList.remove("mynone");
    mysection3.classList.add("myblock");
    khyan.classList.remove("myblock");
    // eo.target.style.backgroundColor = "red";
    // .style.backgroundColor = "red";
  }
});

// =====================================================================
//     change BG header
// =====================================================================
const BGheader = document.getElementById("BGheader");

BGheader.addEventListener("click", (eo) => {
  let mycolor = Math.random() * 100;
  mycolor = Math.trunc(mycolor);

  let mycolor2 = Math.random() * 100;
  mycolor2 = Math.trunc(mycolor2);

  let mycolor3 = Math.random() * 100;
  mycolor3 = Math.trunc(mycolor3);

  // ============== way 1 ============================
  // let thecolor = `rgb(${mycolor}, ${mycolor2}, ${mycolor3}) `;

  // ============== way 2 ============================
  // let thecolor = `hsl(0, ${mycolor2}%, ${mycolor3}%) `;

  // ============== way 3 ============================
  let mycolor4 = Math.random() * 360;
  mycolor4 = Math.round(mycolor4);

  let thecolor = `hsl(${mycolor4}, ${mycolor2}%, ${mycolor3}%) `;

  myheader.style.backgroundColor = thecolor;
});
// =====================================================================

const funcolor = () => {
  let mycolor2 = Math.random() * 100;
  mycolor2 = Math.trunc(mycolor2);

  let mycolor3 = Math.random() * 100;
  mycolor3 = Math.trunc(mycolor3);

  let mycolor4 = Math.random() * 360;
  mycolor4 = Math.round(mycolor4);
  // we can make one variables instead 3 variables
  let thecolor = `hsl(${mycolor4}, ${mycolor2}%, ${mycolor3}%) `;

  return thecolor;
};

// =====================================================================
//             to change background color title
// =====================================================================

const bgtitle = document.getElementById("BGtitle");

bgtitle.addEventListener("click", (eo) => {
  let haha = funcolor();

  myfavbutton1.forEach((item) => {
    //  if we don't make named function
    // item.style.backgroundColor=thecolor

    // for deferent colors
    // item.style.backgroundColor=funcolor()

    // for the same color
    item.style.backgroundColor = haha;
  });
});
// =====================================================================
//                   to change title color
// =====================================================================
// =====================================================================
const myfuncolor = () => {
  return Math.round(Math.random() * 360);
};
// =====================================================================
// const myfuncolor = () => {

//   return
// }

const Colortitle = document.getElementById("Colortitle");

Colortitle.addEventListener("click", (eo) => {
  let haha = `hsl(${myfuncolor()}, 66%, 55%)`;

  myfavbutton1.forEach((item) => {
    item.style.color = haha;
  });
});

// =====================================================================
//                   to change background sections
//                 by toggle between specific colors
// =====================================================================

const oursections = document.querySelectorAll("section");
const BGsection = document.getElementById("BGsection");

const haya = ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"];
let i = 0;
// ====================================================
//     if else ways
// ====================================================

// BGsection.addEventListener("click",(eo) => {
//   console.log(i);

//   oursections.forEach(item => {

//   item.style.backgroundColor=haya[i]
//   });
//   i++
//   if (i >= haya.length) {
//      i=0
//   }
// })

// ======================================================
// BGsection.addEventListener("click",(eo) => {
//   console.log(i);

//   oursections.forEach(item => {
//     item.style.backgroundColor=haya[i]
//     });
// if (i < haya.length) {
//     i++
// } else {
//   i=0
// }
// })

// })
// ==========================================================
// BGsection.addEventListener("click",(eo) => {

// oursections.forEach(item => {
//   item.style.backgroundColor=haya[i]
// })
// if (i >= haya.length) {
//   i=0
//  } else {
//      i++
//  }
// console.log(i);
// })

// =========================================================
//       acronym way الطريقه المختصره
// =========================================================
// BGsection.addEventListener("click",(eo) => {

//   oursections.forEach(item => {
//     item.style.backgroundColor=haya[i]
//   })

//   i >= haya.length ? i=0 : i++

//   console.log(i);
//   })

// =======================================================
//           random way
// =======================================================

// BGsection.addEventListener("click",(eo) => {

//   let i=Math.trunc(Math.random()*haya.length)

//   oursections.forEach(item => {
//     item.style.backgroundColor=haya[i]
//   })
//   console.log(i);
//   })

// =========================================================
//    change color using rgb and random
// =========================================================

// BGsection.addEventListener("click",(eo) => {

//   let i1=Math.trunc(Math.random()*255)
//   let i2=Math.trunc(Math.random()*255)
//   let i3=Math.trunc(Math.random()*255)

//   oursections.forEach(item => {
//     item.style.backgroundColor=`rgb(${i1},${i2},${i3})`
//   })
//   console.log(i1);
//   console.log(i2);
//   console.log(i3);

// })
// =========================================================

// const random = (eo) => {
//   return Math.trunc(Math.random()*255)
// }

// BGsection.addEventListener("click",(eo) => {

// const random1=random()
// const random2=random()
// const random3=random()

//   oursections.forEach(item => {
//     item.style.backgroundColor=`rgb(${random1},${random2},${random3})`
//   })
// })

// ==========================================================================
//  use HEX dicimal way ------ not use it alot !!!!!!!
// ============================================================

// BGsection.addEventListener("click",(eo) => {
// when use slice
// let random=(Math.random()).toString(16).slice(2,8)
// when don't use slice
// let random=Math.trunc(Math.random()*10000000).toString(16)
// console.log(random)

// oursections.forEach(item => {
//   item.style.backgroundColor=`#${random}`
// })
// })

//=============================================================
//      using HEX without using fore each
//      using HEX by using for
// ============================================================

// BGsection.addEventListener("click",(eo) => {

//     let random=(Math.random()).toString(16).slice(2,8)
//     console.log(random)

// for (let i = 0; i < oursections.length; i++) {
//   const item = oursections[i];
//   console.log(item)
//       item.style.backgroundColor=`#${random}`
// }
// })
// ==============================================================
//       for in method
// ==============================================================
// BGsection.addEventListener("click", (eo) => {
//   let random = Math.random().toString(16).slice(2, 8);
//   console.log(random);

//   for (const i in oursections) {
//     const item = oursections[i];
//     console.log(item)

//       item.style.backgroundColor=`#${random}`
// }
// });

// ==============================================================
//       for of method
// ==============================================================
// BGsection.addEventListener("click", (eo) => {
//   let random = Math.random().toString(16).slice(2, 8);
//   console.log(random);

//   for (const item of oursections) {
//     // console.log(item)
//       item.style.backgroundColor=`#${random}`
// }
// });

// ==============================================================
//       while method
// ==============================================================

// BGsection.addEventListener("click", (eo) => {
//   let random = Math.random().toString(16).slice(2, 8);
//   console.log(random);

// let i=0;
// while (i<oursections.length) {
//       const item = oursections[i];
//       item.style.backgroundColor= `#${random}`;
//       i++;
// }
// })

// ==============================================================
//     do  while method
// ==============================================================

// BGsection.addEventListener("click", (eo) => {
//   let random = Math.random().toString(16).slice(2, 8);
//   console.log(random);

//   let i=0;
// do {
//   const item = oursections[i];
//   item.style.backgroundColor= `#${random}`;
//   i++;
// } while (i<oursections.length);
// })

//=============================================================
//      using HEX by using for(;;)
// ============================================================

BGsection.addEventListener("click", (eo) => {
  let random = Math.random().toString(16).slice(2, 8);
  let i = 0;
  for (;;) {
    if (i < oursections.length) {
      const item = oursections[i];
      item.style.backgroundColor = `#${random}`;
      i++;
    } else {
      break;
    }
  }
});

//=============================================================
//  ====================  auto writing  =======================
// ============================================================

// ===================   my way 1 As array====================
const titleid = document.getElementById("title");

const text = ["C", "o", "u", "r", "s", "e", "s", " 4 ", "A", "r", "a", "b"];
// console.log(i);

const letterplus = () => {
  if (i < text.length) {
    titleid.innerHTML += text[i];
    i++;
    // console.log(i);
  } else {
    titleid.innerHTML = text[0];
    i = 1;
  }
};
setTimeout(() => {
  titleid.innerHTML = "";
  setInterval(() => {
    letterplus();
  }, 1000);
}, 10000);
//   ================== Ali way 2 As string==================
// i = 1;

// const letterplus = () => {
//   const text2 = "Courses4Arab";
//   console.log(i);
//     titleid.innerText =text2.slice(0,i);
//     i++;

//   if (i > text2.length) {
//     // clearInterval(myint); ==== if you want stop it without rebeat it again
//     i=1
//   }
// };

// // const myint = === to use clearInterval
// setInterval(() => {
//   letterplus();
// }, 1000);

//=============================================================
//  ====================  random videos  =======================
// ============================================================

const fieldvideos = document.getElementById("fieldvideos");
const fieldquotes = document.getElementById("fieldquotes");
const randomvideoe = document.querySelector(".randomvideoe");

const ranv = [
  `<iframe class="video" width="460" height="315" src="https://www.youtube-nocookie.com/embed/10wsbG9IsAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/91eN0HHHyik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/XVA9VzDJeyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/E5Q1lD_rw3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/rC6blQtakzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/tZLDEUFtnX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/8x4E8kzYNSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/10wsbG9IsAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZJknc9iqiYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/nceUSuYjNXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ckj9V74HrY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Cbk980jV7Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
];

// ===================random videos==========================

// randomvideoe.addEventListener("click", (eo) => {
//   const random = Math.floor(Math.random() * ranv.length);
//   console.log(random);
//   fieldvideos.innerHTML = ranv[random];
// });

// ===================== anothwr way step per step not random

let v = 1;

randomvideoe.addEventListener("click", () => {
  // console.log(v);
  fieldvideos.innerHTML = ranv[v];
  v++;
  console.log(v);
  // two ways for if correct
  if (v == ranv.length) {
    //  if (v> (ranv.length-1) ){
    v = 0;
  }
  randomhearts();
});

//=============================================================
//  ====================  random quotes  =======================
// ============================================================

const randomquote = document.querySelector(".randomquote");
// const ranq=[`‘‘  الرزاق ’’`,`‘‘   التواب ’’`,`‘‘  الغفور ’’`,`‘‘  الكريم ’’`,`‘‘  الصبور ’’`,`‘‘  الرؤوف ’’`,`‘‘  الرحمن ’’`,`‘‘  الرحيم  ’’`,`‘‘  العدل ’’`] without class quote
const ranq = [
  `<div class="duote"> ‘‘  الرزاق ’’ </div>`,
  `<div class="duote"> ‘‘   التواب ’’  </div>`,
  `<div class="duote"> ‘‘  الغفور ’’ </div>`,
  `<div class="duote"> ‘‘  الكريم ’’ </div>`,
  `<div class="duote"> ‘‘  الصبور ’’ </div>`,
  `<div class="duote"> ‘‘  الرؤوف ’’ </div>`,
  `<div class="duote"> ‘‘  الرحمن ’’ </div>`,
  `<div class="duote"> ‘‘  الرحيم  ’’ </div>`,
  `<div class="duote"> ‘‘  العدل ’’ </div>`,
  `<div class="duote"> ‘‘  لا تتعلق باحد !!! فالناس ليسوا اشجارا وانت لست قردا !!! ه’’ </div>`,
  `<div class="duote"> ‘‘  الثقه بالنفس تصنع المعجزات &#128521;’’ </div>`,
];

randomquote.addEventListener("click", (eo) => {
  const random = Math.floor(Math.random() * ranq.length);
  console.log(random);
  fieldquotes.innerHTML = ranq[random];
  randomhearts();
});

//=============================================================
//  ====================  heart animation  ====================
// ============================================================

const heartsb = document.getElementById("heartsb");
const bowlhearts = document.getElementById("bowlhearts");

heartsb.addEventListener("click", (eo) => {
  // redhearts()
  // greenhearts()
  randomhearts();
  // const myheartintervalred=
  // setInterval(() => {
  //   const myheart=document.createElement("div")

  // bowlhearts.append(myheart)
  // // myheart.innerHTML+= `&#128154;`
  // myheart.innerHTML+= `&#129505;`
  // myheart.classList.add("bowlhearts")

  // let random=Math.random()*100
  // console.log(random);
  // myheart.style.left=`${random}%`
  // myheart.style.animationDuration=`${(Math.random()+1)*2}s`

  // }, 50);

  // setTimeout(() => {
  //   clearInterval(myheartintervalred)
  // }, 5000);

  // const myheartintervalgreen=
  // setInterval(() => {
  //   const myheart=document.createElement("div")

  // bowlhearts.append(myheart)
  // myheart.innerHTML+= `&#128154;`
  // // myheart.innerHTML+= `&#129505;`
  // myheart.classList.add("bowlhearts")

  // let random=Math.random()*100
  // console.log(random);
  // myheart.style.left=`${random}%`
  // myheart.style.animationDuration=`${(Math.random()+1)*2}s`
  // }, 50);

  // setTimeout(() => {
  //   clearInterval(myheartintervalgreen)
  // }, 5000);

  // setTimeout(() => {
  //   //  the correct way Ali didn't do that he make parent element for heartzs and remove() it finally
  //   bowlhearts.innerHTML=""

  // }, 9000);
});

// ==============function all hearts =========================

const randomhearts = () => {
  // ======================red hearts=========================
  // const redhearts = () => {
  const myheartintervalred = setInterval(() => {
    const myheart = document.createElement("div");

    bowlhearts.append(myheart);
    // myheart.innerHTML+= `&#128154;`
    myheart.innerHTML += `&#129505;`;
    myheart.classList.add("bowlhearts");

    let random = Math.random() * 100;
    console.log(random);
    myheart.style.left = `${random}%`;
    myheart.style.animationDuration = `${(Math.random() + 1) * 2}s`;
  }, 50);

  setTimeout(() => {
    clearInterval(myheartintervalred);
  }, 5000);

  setTimeout(() => {
    //  the correct way Ali didn't do that he make parent element for heartzs and remove() it finally
    bowlhearts.innerHTML = "";
  }, 9000);
  // }

  // ======================green hearts=========================
  // const greenhearts = () => {

  const myheartintervalgreen = setInterval(() => {
    const myheart = document.createElement("div");

    bowlhearts.append(myheart);
    myheart.innerHTML += `&#128154;`;
    // myheart.innerHTML+= `&#129505;`
    myheart.classList.add("bowlhearts");

    let random = Math.random() * 100;
    console.log(random);
    myheart.style.left = `${random}%`;
    myheart.style.animationDuration = `${(Math.random() + 1) * 2}s`;
  }, 50);

  setTimeout(() => {
    clearInterval(myheartintervalgreen);
  }, 5000);
  setTimeout(() => {
    //  the correct way Ali didn't do that he make parent element for heartzs and remove() it finally
    bowlhearts.innerHTML = "";
  }, 9000);
};

//=============================================================
//  ==================== Create an Accordion ==================
// ============================================================

const accordion = document.querySelectorAll(".accordion");
const iconplus = document.querySelectorAll(".icon-plus");
const iconminus = document.querySelectorAll(".icon-minus");

// ================== my way ===================

iconplus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    eo.target.parentElement.parentElement.parentElement
      .getElementsByTagName("p")[0]
      .classList.add("myopacity");
    eo.target.parentElement
      .querySelector(".icon-minus")
      .classList.add("myblock");
    eo.target.classList.toggle("myblockn");
  });
});

iconminus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    eo.target.parentElement.parentElement.parentElement
      .getElementsByTagName("p")[0]
      .classList.remove("myopacity");
    eo.target.parentElement
      .querySelector(".icon-plus")
      .classList.remove("myblockn");
    eo.target.classList.toggle("myblock");
  });
});
//my way we add fit content to class myopacity

// ================== ali way ===================
const plus = document.querySelectorAll(".plus");

plus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const content =
      eo.target.parentElement.parentElement.parentElement.getElementsByTagName(
        "p"
      )[0];

    content.classList.toggle("aliopacity");

    eo.target.classList.toggle("hide");

    if (item.classList.contains("hide")) {
      //  item.innerHTML="--";
      item.innerHTML = "_";
      item.style.transform = "translateY(-33px)";
      content.style.height = `${content.scrollHeight}px`;
    } else {
      item.innerText = "+";
      item.style.transform = "translateY(0px)";
      content.style.height = `0`;
    }
  });
});
//=============================================================
//  ==================== Digital clock ========================
// ============================================================

const fieldclock = document.getElementById("fieldclock");

const ourtime = () => {
  const now = new Date();

  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let day = now.getDay();
  switch (day) {
    case 0:
      day = "الاحد";
      break;
    case 1:
      day = "الاثنين";
      break;
    case 2:
      day = "الثلاثاء";
      break;
    case 3:
      day = "الاربعاء";
      break;
    case 4:
      day = "الخميس";
      break;
    case 5:
      day = "الجمعه";
      break;
    case 6:
      day = "السبت";
      break;
  }

  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  // fieldclock.innerHTML= now
  fieldclock.innerHTML = ` ${hour} : ${minutes} : ${seconds} <br> ${day} 
  <br> ${date} / ${month} / ${year} `;
};

setInterval(() => {
  ourtime();
}, 1000);

//=============================================================
//  ======================== slideshow ========================
// ============================================================

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
    element.classList.remove("activespan");
  }

  slidesspan[s].classList.add("activespan");

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
    element.classList.remove("activespan");
  }
  slidesspan[s].classList.add("activespan");
});
// spans click =============================
slidesspan.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    s = index; //this line is very important to connect buttons to ++ or --

    for (let i = 0; i < slidesspan.length; i++) {
      const element = slidesspan[i];
      element.classList.remove("activespan");
    }
    item.classList.add("activespan");

    for (let i = 0; i < buttons.length; i++) {
      const element = buttons[i];

      element.removeAttribute("disabled");

      if (item.classList.contains("slideshowspan1")) {
        activebuttonpre.setAttribute("disabled", "");
      }
      // if (item.classList.contains(`slideshowspan${ourimages.length}`)) {
      //     activebuttonnext.setAttribute("disabled","")
      // }
      //==============another way by using index
      if (index == ourimages.length - 1) {
        activebuttonnext.setAttribute("disabled", "");
      }
    }
    // ali use index instead myitem and this better
    // const myitem=item.innerHTML
    // slidetext.innerHTML = ` Slide #${myitem} of ${ourimages.length}`;
    // imagesshow.innerHTML=ourimages[`${myitem-1}`]
    slidetext.innerHTML = ` Slide # ${index + 1} of ${ourimages.length}`;
    imagesshow.innerHTML = ourimages[index];
  });
});

//=============================================================
//  ======================== bachground slideshow ========================
// ============================================================

const slidebox = document.querySelector(".slidebox");
const fieldslide = document.querySelector("#fieldslide");
const boximg = document.querySelectorAll(".boximg");

boximg.forEach((item) => {
  item.addEventListener("click", (eo) => {
    let mysrc = eo.target.getAttribute("src");
    // console.log(mysrc)

    fieldslide.innerHTML = `<img src="${mysrc}" alt="" class="bigimg">`;
  });
});

//=============================================================
//  ======================== toggle tabs ========================
// ============================================================

// const countries=document.querySelectorAll(".co")
// const benefits=document.querySelector(".benefits")
// const ben=document.querySelectorAll(".ben")

// ============by using change text ===============
// countries.forEach(item => {
//   item.addEventListener("click",(eo) => {

// if (eo.target.classList=="co co1") {
//       // console.log(ben2)

//   benefits.innerHTML=`<span id="ben1" class="ben ben1">11111111111111111111111111111111111111111111
//   111111111111111111111111111111111111111111111111111
//   1111111111111111111111111111111111111111111111111111
//   11111111.</span> `
// }

// if (eo.target.classList=="co co2") {
//   // console.log(ben2)

//   benefits.innerHTML=`<span id="ben2" class="ben ben2">222222222222222232222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222.</span> `
// }

// if (eo.target.classList=="co co3") {
//   // console.log(ben2)

//   benefits.innerHTML=`<span id="ben3" class="ben ben3">3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.</span> `
// }

//   })
// });

// ====================another way by classes

// const ben1=document.querySelector(".ben1")
// const ben2=document.querySelector(".ben2")
// const ben3=document.querySelector(".ben3")

// ============by using change classes ===============
// countries.forEach(item => {
//   item.addEventListener("click",(eo) => {

//  if (eo.target.classList=="co co1") {

//   ben1.classList.remove("myblockn")
//   ben1.classList.add("myblock")
//   ben2.classList.add("myblockn")
//   ben3.classList.add("myblockn")
//   }
// if (eo.target.classList=="co co2") {

//   ben2.classList.remove("myblockn")
//   ben2.classList.add("myblock")
//   ben1.classList.add("myblockn")
//   ben3.classList.add("myblockn")
// }
// if (eo.target.classList=="co co3") {

//   ben3.classList.remove("myblockn")
//   ben3.classList.add("myblock")
//   ben1.classList.add("myblockn")
//   ben2.classList.add("myblockn")
// }
//   })});

// ====================another way by classes

const countries = document.querySelectorAll(".co");
const benefits = document.querySelector(".benefits");
const ben = document.querySelectorAll(".ben");
const ben1 = document.querySelector(".ben1");
const ben2 = document.querySelector(".ben2");
const ben3 = document.querySelector(".ben3");

// ============by using change classes ali way ===============

// there are two ways
// first toggle opacity and height
// second use position absolute and z-index

countries.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    for (let i = 0; i < countries.length; i++) {
      const element = countries[i];
      element.classList.remove("spanactive");
    }
    item.classList.add("spanactive");

    const eachcountry = document.querySelector(".activo");
    eachcountry.classList.remove("activo");

    const hhh = ben[`${index}`];
    hhh.classList.add("activo");
  });
});

// <!-- =============================================================== -->
// <!-- =================== validation form =================== -->
// <!-- =============================================================== -->
const sameform = document.querySelector("#sameform");
const grandpaform = document.querySelector(".grandpaform");
const createaccount = document.querySelector("#createaccount");
const iconcross = document.querySelector(".icon-cross");
const namee = document.querySelector("#name");
const email = document.querySelector("#email");
const psw = document.querySelector("#psw");
const pswrepeat = document.querySelector("#psw-repeat");
const registerbtn=document.querySelector(".registerbtn")

createaccount.addEventListener("click", (eo) => {
  grandpaform.style.transform="scale(1)"
  // sameform.style.transform="scale(0)";
  setTimeout(() => {
    sameform.style.transform="scale(1)"
  }, 500);
});

iconcross.addEventListener("click", (eo) => {
  sameform.style.transform="scale(0)";

  setTimeout(() => {
    grandpaform.style.transform="scale(0)"
  }, 500);
});



const regbtn = () => {
  if (namee.classList.contains("success")
&&email.classList.contains("success")
&&psw.classList.contains("success")
&&pswrepeat.classList.contains("success")) {
  registerbtn.removeAttribute("disabled")
}else{
  registerbtn.setAttribute("disabled","")
}
}


namee.addEventListener("keyup", (eo) => {
  eo.target.classList.add("error");
  if (namee.value.length>3) {
    eo.target.classList.add("success")
    namee.parentElement.getElementsByClassName("icon-check-alt")[0].classList.add("myopacity1")
    namee.parentElement.getElementsByTagName("p")[0].classList.remove("myblock")
}
else  {
  eo.target.classList.remove("success")
  eo.target.classList.add("error")
  namee.parentElement.getElementsByClassName("icon-check-alt")[0].classList.remove("myopacity1")
  namee.parentElement.getElementsByTagName("p")[0].classList.add("myblock")

  }
  regbtn()
});


email.addEventListener("keyup", (eo) => {

  const regEmail=
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // const regPassword=
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (regEmail.test(email.value)) {
    eo.target.classList.add("success")
    email.parentElement.getElementsByClassName("icon-check-alt")[0].classList.add("myopacity1")
    email.parentElement.getElementsByTagName("p")[0].classList.remove("myblock")
}
else  {
  eo.target.classList.remove("success")
  eo.target.classList.add("error")
  email.parentElement.getElementsByClassName("icon-check-alt")[0].classList.remove("myopacity1")
  email.parentElement.getElementsByTagName("p")[0].classList.add("myblock")

  }
  regbtn()
});

psw.addEventListener("keyup",(eo) => {
 
    const regPassword=
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  
    if (regPassword.test(psw.value)) {
      eo.target.classList.add("success")
      eo.target.parentElement.getElementsByClassName("icon-check-alt")[0].classList.add("myopacity1")
      eo.target.parentElement.getElementsByTagName("p")[0].classList.remove("myblock")
  }
  else  {
    eo.target.classList.remove("success")
    eo.target.classList.add("error")
    eo.target.parentElement.getElementsByClassName("icon-check-alt")[0].classList.remove("myopacity1")
    eo.target.parentElement.getElementsByTagName("p")[0].classList.add("myblock")
  
    }
    regbtn()
  });

  pswrepeat.addEventListener("keyup",(eo) => {
 
    // const regPassword=
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  
    if ((psw.value)===(pswrepeat.value)) {
      eo.target.classList.add("success")
      eo.target.parentElement.getElementsByClassName("icon-check-alt")[0].classList.add("myopacity1")
      eo.target.parentElement.getElementsByTagName("p")[0].classList.remove("myblock")
  }
  else  {
    eo.target.classList.remove("success")
    eo.target.classList.add("error")
    eo.target.parentElement.getElementsByClassName("icon-check-alt")[0].classList.remove("myopacity1")
    eo.target.parentElement.getElementsByTagName("p")[0].classList.add("myblock")
  
    }
    regbtn()
  });


// if ((namee.value)==true&& (email.value)==true&&(psw.value)==true&&(pswrepeat.value)==true) {
//   registerbtn.removeAttribute("disabled")
// }


// Ayfttftg6kk@jnjnn.nhh




















