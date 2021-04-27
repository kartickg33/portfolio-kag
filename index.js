var home = document.getElementById("home");

    var typewriter = new Typewriter(home, {
        loop: true
    });
    
typewriter.typeString("Hi! I'm Kartick Gulati")
    .pauseFor(2500)
    .deleteChars(14)
    .typeString('a <strong>Full Stack Web Developer</strong>')
    .pauseFor(2500)
    .deleteChars(24)
    .typeString('<strong>Competitive Coder</strong>')
    .pauseFor(2500)
    .start();


