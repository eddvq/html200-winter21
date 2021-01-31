let moons = ["Triton", "Oberon", "Europa", "Hyperion", "Callisto"];

moons.push("Phobos");

moons.splice(2,1);

let newMoons = moons.join(', ');

console.log(newMoons);
