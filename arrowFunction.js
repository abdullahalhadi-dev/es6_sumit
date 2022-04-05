// var javascript = {
//     name:"JavaScript",
//     libraries:["React", "Angular", "Vue"],
//     printLibraries:function(){
//         //var self =this;
//         this.libraries.forEach((a) => {
//             console.log(`${this.name} loves ${a}`);
//         });
//     }
// }

// javascript.printLibraries();



// const searchInput = document.querySelector(".search");
// const display = document.querySelector(".result");
// const thanks = document.querySelector(".thanks");

// function show(){
//     display.innerHTML = this.value;
//     var self = this;
//     setTimeout(function (){
//         thanks.innerHTML = `You are typed: ${self.value}`;
//     }, 1000);
// }

// searchInput.addEventListener("keyup", show);




function Person(name){
    this.name = name;
}

var sakib = new Person('sakib');
console.log(sakib);