function loading(){
    var tl=gsap.timeline()

gsap.to(".yellow1",{
    top:"-100%",
    
    duration:0.6,
    ease:"expo.out "
})

tl.from(".yellow2",{
    top:"100%",
    delay:0.7,
    duration:0.9,
    ease:"expo.out"
},"anim")
tl.to(".loader h1",{
    delay:0.6,
    duration:0.9,
    
    color:"black"
    
},"anim")
tl.to(".loader",{
    opacity:0,
    display:"none"
},)
}
loading();
function loco(){
    const scroll = new LocomotiveScroll({
        el:document.querySelector('.main'),
        smooth:true
    })
    document.querySelector(".back i").addEventListener("click",()=>{
        scroll.scrollTo(0);
    })
    var elem=document.querySelectorAll(".elem")
    var p=document.querySelector(".p2")
    elem.forEach(function(el){
        el.addEventListener("mouseenter",()=>{
            var bg=el.getAttribute("data-img")
            p.style.backgroundImage=`url(${bg})`
        })
    })
}
loco();