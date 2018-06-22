document.querySelector('.toon-input').addEventListener('keyup' , getCharacterItems);

async function getCharacterItems(e) {
  let itemList = '';
  let thumbnail = '';

  const response = await fetch('https://us.api.battle.net/wow/guild/Stormrage/MERCENARIES%20FOR%20AZEROTH?fields=members&locale=en_US&apikey=yku5p7jc26x5pnnj9qy73ufdfh48pgqj');

  const data = await response.json();
  const guildMember = data.members.forEach(member => {
    
  });

  
  // if(e.target.value === ) {

  // } else {

  // }

  
}

// getCharacterItems().then(guild => guild.members.forEach(member => console.log(member.character.name)));