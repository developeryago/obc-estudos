function sandSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o!"));
    return spaceship;
}
function acelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velociade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("A valocidade se mant\u00E9m");
    }
}
var spaceshipName = prompt("Insira o nome da nave: ");
var spaceshipCapitain = prompt("Insira o nome do piloto: ");
var MilleniumFalcon = sandSpaceship(spaceshipName, spaceshipCapitain);
var spped = Number(prompt("Digite a velocidade que deseja alcançar: "));
acelerate(spped, MilleniumFalcon);
