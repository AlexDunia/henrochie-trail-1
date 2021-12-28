// var McButton = $("[data=hamburger-menu]");
// var McBar1 = McButton.find("b:nth-child(1)");
// var McBar2 = McButton.find("b:nth-child(2)");
// var McBar3 = McButton.find("b:nth-child(3)");



// McButton.click( function() {
//   $(this).toggleClass("active");
  
//   if (McButton.hasClass("active")) {
//     McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
//     McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
//           .velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
//     McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
//   } else {
//     McButton.velocity("reverse");
//     McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
//           .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
//     McBar1.velocity("reverse", {delay: 800});
//   }
// });


const mainmenu = document.getElementById("menuItem");


const dnav = document.querySelector(".fcontainer");
 const ddnav = document.querySelector(".ffcontainer");
 const scon = document.querySelector(".smallcontainer");
 const navbar = document.querySelector("#menuItem");

window.addEventListener ("scroll", function () {
const navbarHeight = dnav.getBoundingClientRect().height
const scrollHeight = window.pageYOffset


if (scrollHeight > navbarHeight){
  dnav.classList.add("fixed-nav");
  ddnav.classList.add("fixed-nav");
}
else{
 dnav.classList.remove("fixed-nav");
 ddnav.classList.remove("fixed-nav")
}

}
)


window.addEventListener ("scroll", function () {
const sconheight = scon.getBoundingClientRect().height
const scrollHeight = window.pageYOffset 


if (scrollHeight === sconheight){
   navbar.style.visibility = "hidden"
}

else {
 navbar.style.visibility = "hidden"
}
}
)


 function menutoggle(){
         const menuu = document.querySelector(".menu");

      if (mainmenu.style.visibility === "visible")
          {
          mainmenu.style.visibility = "hidden";

          }
          else 
          {
              mainmenu.style.visibility = "visible";
          }

   }






/*$element.velocity({ 
    width: "500px",
    property2: value2
}, {
    duration: 400,
    easing: "swing",
    queue: "",
    begin: undefined,
    progress: undefined,
    complete: undefined,
    display: undefined,
    visibility: undefined,
    loop: false,
    delay: false,
    mobileHA: true
});*/
