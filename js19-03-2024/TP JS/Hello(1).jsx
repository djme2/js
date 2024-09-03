// Import de la bibliothèque React et de la fonction useState pour gérer l'état
import React, { useState } from 'react';

// Définition du composant Hello
const Hello = () => {
  
  // Utilisation de useState pour créer une variable d'état 'sentence' avec une valeur initiale "Hello, world !"
  const [sentence, setSentence ] = useState("Hello, world !") ;
    
  // Fonction pour modifier le texte affiché lors du clic sur le bouton
  function changeText(){
    setSentence("Bonjour Jhon doe")
  }

  // Définition d'un tableau d'objets représentant différents fruits
  const fruits = [
    { name: 'Banane', ripe : true , prix: 5.2},
    { name: 'Pomme', ripe : false ,prix: 0.5},
    { name: 'Fraise', ripe : true  ,prix: 1},
    { name: 'Orange', ripe : false  , prix: 10},
    { name: 'Raisin', ripe : true  ,prix: 2.5},
  ];

  // Filtrage des fruits dont le prix est supérieur à 7 pour créer un nouveau tableau 'fruitsMurs'
  const fruitsMurs = fruits.filter(element => element.prix > 7 );

  // Affichage des fruits filtrés dans la console
  console.log("fruits Murs : ",fruitsMurs);

  // Création d'une copie du tableau de fruits en utilisant le spread operator '...'
  // Ajout d'un nouvel élément 'Ananas' à la copie
  const fruitsCopie = [...fruits, { name: 'Ananas', ripe : true  ,prix: 245}]

  // Affichage de la copie et du tableau d'origine dans la console
  console.log("fruit copie", fruitsCopie);
  console.log("fruit origin", fruits);

  // Rendu du composant
  return (
    <div>
      {/* Affichage de la phrase stockée dans 'sentence' */}
      <p>{sentence}</p>
      {/* Bouton qui déclenche la fonction 'changeText' au clic */}
      <button onClick={changeText}> click here</button>

      {/* Titre de la liste de fruits */}
      <h2>Liste de fruits</h2>

      {/* Utilisation de map pour afficher chaque fruit et son prix */}
      {
        fruitsCopie.map((fruit, index) => (
          <div key={index}>
            <hr />
            <p> Nom : {fruit.name}  </p>
            <p> prix : {fruit.prix} € </p>
          </div>
          
        ))
      }
    </div>
  )
}

// Export du composant Hello
export default Hello;
