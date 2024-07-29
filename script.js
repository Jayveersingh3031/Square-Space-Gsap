var tl=gsap.timeline();

tl.from("#nav img,#nav h3,#nav button",{
    y:-100,
    delay:0.5,
    stagger:0.2,
    opacity:0
})

tl.from("#main h1",{
    y:100,
    stagger:0.2,
    opacity:0
})

tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.3
})

tl.from("h5",{
    sacle:0,
    opacity:0,
})

tl.to("h5",{
    y:50,
    repeat:-1,
    yoyo:true,
    duration:0.6
})