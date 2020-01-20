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
    favoriteToys: [],
    play: function(toy) {
    if (toy === "frisbee") {
        this.favoriteToys.push(toy);
    }
}
}

fatCat.bark("mailmain");
fatCat.beg("treats");
fatCat.play("frisbee");
console.log(fatCat.favoriteToys);
