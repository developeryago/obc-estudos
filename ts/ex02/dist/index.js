let planets = [];
function createPlanet(name, coordinate, situation) {
    planets.push({ name,
        coordinate,
        situation,
        satellites: []
    });
    alert(`O Planeta ${name}, foi registrado!`);
}
function findPlanet(name) {
    let planet = planets.find(el => el.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do Planeta ${planet.name} foi atualizada para ${situation}`);
}
function addSatellite(planet, satelliteName) {
    planet.satellites.push(satelliteName);
    alert(`O satélite ${satelliteName} foi adicionado ao planeta ${planet.name}`);
}
function removeSatellite(planet, satelliteName) {
    const indexSatellite = planet.satellites.indexOf(satelliteName);
    planet.satellites.splice(indexSatellite, 1);
    alert(`O satélite ${satelliteName} foi removido de ${planet.name}`);
}
// while (true) {
//     const option = Number(prompt(`------Lista de Planetas------
//     1) Salvar novo Planeta
//     2) Alterar situação de um Planeta
//     3) Adicionar satálite à Planetas
//     4) Remover satélite de Planetas
//     5) Exibir todos os Planetas registrados
//     6) Sair`))
//     if (option === 1) {
//         const name = prompt("Qual o nome do planeta? ")
//         const coordinate1  = Number(prompt("Coordenada 1: "))
//         const coordinate2  = Number(prompt("Coordenada 2: "))
//         const coordinate3  = Number(prompt("Coordenada 3: "))
//         const coordinate4  = Number(prompt("Coordenada 4: "))
//         const situation = Number(prompt(`Qual a situação? 
//         1) Habitado
//         2) Habitável
//         3) Inabitável
//         4) Inexporado`
//         ))
//         if (situation === 1) {
//             const st = "habitado"
//             createPlanet(name,[coordinate1, coordinate2, coordinate3, coordinate4], st)
//         } else if (situation === 2) {
//             const st = "habitável"
//             createPlanet(name,[coordinate1, coordinate2, coordinate3, coordinate4], st)
//         } else if (situation === 3) {
//             const st = "inabitável"
//             createPlanet(name,[coordinate1, coordinate2, coordinate3, coordinate4], st)
//         } else if (situation === 4) {
//             const st = "inexplorado"
//             createPlanet(name,[coordinate1, coordinate2, coordinate3, coordinate4], st)
//         }
//     } else if (option === 2) {
//         const planet = "Qual o nome do planeta? "
//         const situation = Number(prompt(`Qual a situação? 
//         1) Habitado
//         2) Habitável
//         3) Inabitável
//         4) Inexporado`))
//         if (situation === 1) {
//             const st = "habitado"
//             updateSituation(st, planet)
//         } else if (situation === 2) {
//             const st = "habitável"
//             updateSituation(st, planet)
//         } else if (situation === 3) {
//             const st = "inabitável"
//             updateSituation(st, planet)
//         } else if (situation === 4) {
//             const st = "inexplorado"
//             updateSituation(st, planet)
//         }
//     } else if (option === 3) {
//     }
// }
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = prompt(`Informe a situação do Planeta:
        1) Habitado
        2) Habitável
        3) nabitável
        4) Inexplorado`);
        switch (situationInput) {
            case "1":
                situation = "Habitado";
                validSituation = true;
                break;
            case "2":
                situation = "Habitável";
                validSituation = true;
                break;
            case "3":
                situation = "Inabitável";
                validSituation = true;
                break;
            case "4":
                situation = "Inexplorado";
                validSituation = true;
                break;
            default:
                alert("Situação inválida");
                break;
        }
    }
    return situation;
}
function promptValidPlanet(callbackfn) {
    const planetName = prompt("Informe o nome do Planeta: ");
    const planet = findPlanet(planetName);
    if (planet) {
        callbackfn(planet);
    }
    else {
        alert("Planeta não encontrado! retornando ao menu");
    }
}
function firstMenuOption() {
    const name = prompt("Qual o nome do planeta? ");
    const coordinate1 = Number(prompt("Coordenada 1: "));
    const coordinate2 = Number(prompt("Coordenada 2: "));
    const coordinate3 = Number(prompt("Coordenada 3: "));
    const coordinate4 = Number(prompt("Coordenada 4: "));
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}
    Coordenadas: (${coordinate1}, ${coordinate2}, ${coordinate3}, ${coordinate4})
    Situação: ${situation}?`);
    if (confirmation) {
        createPlanet(name, [coordinate1, coordinate2, coordinate3, coordinate4], situation);
    }
}
function secondMenuOption() {
    promptValidPlanet(planet => {
        const situation = promptValidSituation();
        updateSituation(situation, planet);
    });
}
function thirdMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt("Qual o nome do satélite que deseja adicionar? ");
        addSatellite(planet, satellite);
    });
}
function fourthMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt("Qual o nome do satélite que deseja remover? ");
        removeSatellite(planet, satellite);
    });
}
function showPlanets() {
    let list = `Planetas registrados: \n`;
    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinate;
        list += `
        Planeta: ${planet.name}
        Coordenada: (${a}, ${b}, ${c}, ${d})
        Situação: ${planet.situation}`;
        planet.satellites.forEach(satellite => {
            list += `
            Satélites: - ${satellite} \n`;
        });
    });
    alert(list);
}
let option = 0;
while (option !== 6) {
    const menu = `------Lista de Planetas------
    1) Salvar novo Planeta
    2) Alterar situação de um Planeta
    3) Adicionar satálite à Planetas
    4) Remover satélite de Planetas
    5) Exibir todos os Planetas registrados
    6) Sair`;
    let userOption = Number(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            showPlanets();
            break;
        case 6:
            alert("Encerrando o sistema");
            option = 6;
            break;
        default:
            alert("Opção inválida! Escolha uma opção entre 1 e 6.");
    }
}
