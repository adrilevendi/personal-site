jQuery(document).ready(function(){
	gsap.registerPlugin(CSSRulePlugin);

var tl = gsap.timeline();

var rule = CSSRulePlugin.getRule("h1:after"); //get the rule
tl.from('.animate-heading', { y:-60, opacity:0, delay:0.3, duration:1})
tl.to(document.documentElement, { '--hero-h1-y': 0,duration:1, delay:-0.6});

tl.from('.scene', {opacity: 0, marginRight:-100, delay: -0.25});
})

