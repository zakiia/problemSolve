// problem 4
function humanForm(people){
    let human = '';
    for(let i = 0; i < people.length; i++){
        if((people[i].length) % 2 != 0){
            human = people[i];
            break;
        }
    }
    return human;
}
const somePeople = humanForm(['abul', 'babul', 'jabullah','kabul', 'gabul', 'labul', 'habul']);
console.log(somePeople);