document.querySelector('.get-item').addEventListener('click', getGuildies);

function getGuildies() {
  const members = [];

  // fetch('https://us.api.battle.net/wow/guild/Stormrage/Mercenaries%20for%20Azeroth?fields=members&locale=en_US&apikey=yku5p7jc26x5pnnj9qy73ufdfh48pgqj')
  
  fetch('https://api.iextrading.com/1.0/stock/wmt/quote')
    // .then(res => res.json())
    // .then(guild => {
    //   guild.members.forEach(member => {
    //     members.push(member);
    //   })
    // })
    .then(res => res.json())
    .then(data => {
      console.log(data.open);
    })
    // .then(character => {
    //   let itemList = '';
    //   let thumbnail = '';
    //   const items = character.items;
    //   // console.log(items);
    //   console.log(items);
    //   thumbnail += `
    //   <h2>${character.name}</h2>
    //   <h5><strong>Average ilvl:</strong> ${items.averageItemLevel}</h5>
    //   <img src="http://render-us.worldofwarcraft.com/character/${character.thumbnail}">
    //   `;
    //   itemList += `
    //   <ul>
    //     <li><strong>Helm : </strong>${items.head.name}</li>
    //     <li><strong>Neck : </strong>${items.neck.name}</li>
    //     <li><strong>Shoulder : </strong>${items.shoulder.name}</li>
    //     <li><strong>Back : </strong>${items.back.name}</li>
    //     <li><strong>Chest : </strong>${items.chest.name}</li>
    //     <li><strong>Wrist : </strong>${items.wrist.name}</li>
    //     <li><strong>Hands : </strong>${items.hands.name}</li>
    //     <li><strong>Waist : </strong>${items.waist.name}</li>
    //     <li><strong>Legs : </strong>${items.legs.name}</li>
    //     <li><strong>Feet : </strong>${items.feet.name}</li>
    //     <li><strong>Ring 1 : </strong>${items.finger1.name}</li>
    //     <li><strong>Ring 2 : </strong>${items.finger2.name}</li>
    //     <li><strong>Trinket 1 : </strong>${items.trinket1.name}</li>
    //     <li><strong>Trinket 2 : </strong>${items.trinket2.name}</li>
    //     <li><strong>Main Hand : </strong>${items.mainHand.name}</li>
    //     <li><strong>HK : </strong>${character.totalHonorableKills}</li>
    //   </ul>
    //   `;
    //   document.querySelector('.items').innerHTML = itemList;
    //   document.querySelector('.thumbnail').innerHTML = thumbnail;
    // })
}