import adjectives from './adjectives.js'
import nouns from './nouns.js'

window.generateName = generateName;

export function generateName() {
  var nameContainer = document.getElementById("name")
  var newAdj = adjectives[Math.floor(Math.random()*adjectives.length)]
  var newNoun = nouns[Math.floor(Math.random()*nouns.length)]
  var newName = "That " + newAdj + " " + newNoun + " Yang Wen-Li!"
  console.log(newName)
  nameContainer.textContent = newName
}