const fatCat = {
    name: "Fat Cat",
    species: "Dog",
    nicknames: ["buddy", "guy", "friend"],
    age: 2,
    bark: function (something) {
        console.log(`Fat Cat barks at ${something}`)
    },
    beg: function(treat) {
        console.log(`Fat Cat begs for ${treat}`)
    },
    play: function(toy) {
        console.log(`Fat Cat begs to play with ${toy}`)
    }
}

fatCat.bark("mailmain");
fatCat.beg("treats");
fatCat.play("frisbee");