var home = document.getElementById("home");

    var typewriter = new Typewriter(home, {
        loop: true
    });
    
typewriter.typeString("Hi! I'm <span style='color:rgb(158,37,24);'><strong>Kartick Gulati</strong></span>")
    .pauseFor(1500)
    .deleteChars(14)
    .typeString("a <span style='color:rgb(158,37,24);'><strong>Full Stack Web Developer</strong></span>")
    .pauseFor(1500)
    .deleteChars(24)
    .typeString("<span style='color:rgb(158,37,24);'><strong>Competitive Coder</strong></span>")
    .pauseFor(1500)
    .deleteChars(20)
    .typeString(" <span style='color:rgb(158,37,24);'><strong>Tech Aficionado</strong></span>")
    .pauseFor(2000)
    .start()





