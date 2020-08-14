jQuery(document).ready(function(){
	gsap.registerPlugin(CSSRulePlugin);
	// gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

var rule = CSSRulePlugin.getRule("h1:after"); //get the rule
tl.from('.animate-heading', { y:-60, opacity:0, delay:0.3, duration:1})
tl.to(document.documentElement, { '--hero-h1-y': 0,duration:1, delay:-0.6});

tl.from('.scene', {opacity: 0, x:150, delay: -0.25});

//barba

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n)
  })
}

function pageLeaveAnimation () {
  // $('#sideMenu').removeClass('active');

  var t = gsap.timeline();

  t.to('.loading-screen',
    {
      height: "100%",
      // skewX: "100%",
      duration: 1
    });

    t.to('.loading-screen', {
      y: "-100%",
      duration: 0.5
    });

    t.set('.loading-screen', {y:0, height: 0, skewX: 0});
}



$(function () {
  barba.init({
      sync: true,
   
    transitions: [{
       async leave(data) {
  
        const done = this.async();  
        pageLeaveAnimation();
  
  
        await delay(1000);
        done();
  
  
      },
       async enter(data) {
        // pageEnterAnimation()
      }
    }],

  });
  
});

//barba

function elasticsInit() {
                let n = document.querySelectorAll(".elasticbox")
                  , o = []
                  , e = {
                    x: 0,
                    y: 0
                };
                function t(n) {
                    o.forEach(o=>{
                        o.container.classList == n.target.classList && (o.mouseIn = !0,
                        console.log(o.mouseIn),
                        null != o.anim && o.anim.kill())
                    }
                    )
                }
                function a(n) {
                    o.forEach((o,e)=>{
                        if (o.container.classList == n.target.classList) {
                            if (o.mouseIn = !1,
                            o.anim = TweenLite.to(o.handlePos, 1, {
                                x: o.handleInitPos.x,
                                y: o.handleInitPos.y,
                                ease: Elastic.easeOut.config(1, .3)
                            }),
                            transitioning)
                                return;
                            audios[e].currentTime = 0,
                            audios[e].play()
                        }
                    }
                    )
                }
                function i(n) {
                    let o = n.target.getBoundingClientRect();
                    e.x = n.clientX - o.left,
                    e.y = n.clientY - o.top
                }
                n.forEach((n,e)=>{
                    let s = document.createElement("canvas")
                      , l = s.getContext("2d")
                      , c = l.canvas.width = n.offsetWidth
                      , r = l.canvas.height = n.offsetHeight;
                    n.classList.add("boxid_" + e),
                    n.appendChild(s),
                    o.push({
                        ctx: l,
                        canvas: s,
                        container: n,
                        mouseIn: !1,
                        handlePos: {
                            x: c / 2,
                            y: r / 2
                        },
                        handleInitPos: {
                            x: c / 2,
                            y: r / 2
                        },
                        anim: null
                    }),
                    window.isMobile || (n.addEventListener("mouseenter", t),
                    n.addEventListener("mouseleave", a),
                    n.addEventListener("mousemove", i))
                }
                ),
                window.addEventListener("resize", function() {
                    o.forEach((o,e)=>{
                        o.ctx.canvas.width = n[e].offsetWidth,
                        o.ctx.canvas.height = n[e].offsetHeight
                    }
                    )
                }),
                RAF.subscribe("elasticsRAF", function() {
                    o.forEach((o,t)=>{
                        let a = o.ctx.canvas.width = n[t].offsetWidth
                          , i = o.ctx.canvas.height = n[t].offsetHeight;
                        o.mouseIn && (o.handlePos.x += .5 * (e.x - o.handlePos.x),
                        o.handlePos.y += .5 * (e.y - o.handlePos.y)),
                        o.ctx.clearRect(0, 0, a, i),
                        o.ctx.beginPath(),
                        o.ctx.moveTo(a / 2, 0),
                        o.ctx.quadraticCurveTo(o.handlePos.x, o.handlePos.y, a / 2, i),
                        o.ctx.stroke(),
                        o.ctx.closePath()
                    }
                    )
                })
            }


// Follow cursor discover projects

$('#projectsLinkWrapper').mouseleave(function (e) {
    // TweenMax.to(this, 0.3, {height: 150, width: 230});
    TweenMax.to('#projectsLink', 0.3,{scale:1, x: 0, y: 0});
  });

$('#projectsLinkWrapper').mouseenter(function (e) {
    // TweenMax.to(this, 0.3, {height: 150, width: 230});
    TweenMax.to('#projectsLink', 0.3, { scale: 1.08 });
  });

$('#projectsLinkWrapper').mousemove(function (e) {
    callParallax(e);
    console.log('df');
  });

  function callParallax(e) {
    // parallaxIt(e, '.btn-smart__rect', $('.btn-smart'), 80);
    parallaxIt(e, '#projectsLink', $('#projectsLinkWrapper'), 40);
  }

  function parallaxIt(e, target, parent, movement) {
    var $this = $(parent);
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    gsap.to(target, 0.3, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement,
      ease: Power2.easeOut
    });
  }


})// End doc ready



