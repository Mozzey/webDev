document.querySelector('.toon-input').addEventListener('keyup', getMemberItems);
document.querySelector('.get-item').addEventListener('click', getMember);

function getMember(e) {
  console.log('get blizz data');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://us.api.battle.net/wow/guild/Stormrage/MERCENARIES%20FOR%20AZEROTH?fields=members&locale=en_US&apikey=yku5p7jc26x5pnnj9qy73ufdfh48pgqj', true);


  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);;
      
      let output = '';

      response.members.forEach(member => {
        output += `<li>${JSON.stringify(member)}</li>`;
      });

      
      document.querySelector('.members').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}

function getMemberItems(e) {
  fetch('https://us.api.battle.net/wow/character/Stormrage/Alwysperfect?fields=items&locale=en_US&apikey=yku5p7jc26x5pnnj9qy73ufdfh48pgqj')
    .then(res => res.json()
    .then(data => {
      let itemList = '';
      let thumbnail = '';
      let toonName = e.target.value;
      const items = data.items;
      if(toonName === data.name) {
        thumbnail += `
        <h2>${data.name}</h2>
        <h5><strong>Average ilvl:</strong> ${items.averageItemLevel}</h5>
        <img src="http://render-us.worldofwarcraft.com/character/${data.thumbnail}">
        `;
        itemList += `
        <ul>
          <li><strong>Helm : </strong>${items.head.name}</li>
          <li><strong>Neck : </strong>${items.neck.name}</li>
          <li><strong>Shoulder : </strong>${items.shoulder.name}</li>
          <li><strong>Back : </strong>${items.back.name}</li>
          <li><strong>Chest : </strong>${items.chest.name}</li>
          <li><strong>Wrist : </strong>${items.wrist.name}</li>
          <li><strong>Hands : </strong>${items.hands.name}</li>
          <li><strong>Waist : </strong>${items.waist.name}</li>
          <li><strong>Legs : </strong>${items.legs.name}</li>
          <li><strong>Feet : </strong>${items.feet.name}</li>
          <li><strong>Ring 1 : </strong>${items.finger1.name}</li>
          <li><strong>Ring 2 : </strong>${items.finger2.name}</li>
          <li><strong>Trinket 1 : </strong>${items.trinket1.name}</li>
          <li><strong>Trinket 2 : </strong>${items.trinket2.name}</li>
          <li><strong>Main Hand : </strong>${items.mainHand.name}</li>
          <li><strong>HK : </strong>${data.totalHonorableKills}</li>
        </ul>
        `;
        document.querySelector('.items').innerHTML = itemList;
        document.querySelector('.thumbnail').innerHTML = thumbnail;
      } else {
        document.querySelector('.items').innerHTML = '';
        document.querySelector('.thumbnail').innerHTML = '';
      }

      thumbnail += `
        <h2>${data.name}</h2>
        <h5><strong>Average ilvl:</strong> ${items.averageItemLevel}</h5>
        <img src="http://render-us.worldofwarcraft.com/character/${data.thumbnail}">
        `;
        itemList += `
        <ul>
          <li><strong>Helm : </strong>${items.head.name}</li>
          <li><strong>Neck : </strong>${items.neck.name}</li>
          <li><strong>Shoulder : </strong>${items.shoulder.name}</li>
          <li><strong>Back : </strong>${items.back.name}</li>
          <li><strong>Chest : </strong>${items.chest.name}</li>
          <li><strong>Wrist : </strong>${items.wrist.name}</li>
          <li><strong>Hands : </strong>${items.hands.name}</li>
          <li><strong>Waist : </strong>${items.waist.name}</li>
          <li><strong>Legs : </strong>${items.legs.name}</li>
          <li><strong>Feet : </strong>${items.feet.name}</li>
          <li><strong>Ring 1 : </strong>${items.finger1.name}</li>
          <li><strong>Ring 2 : </strong>${items.finger2.name}</li>
          <li><strong>Trinket 1 : </strong>${items.trinket1.name}</li>
          <li><strong>Trinket 2 : </strong>${items.trinket2.name}</li>
          <li><strong>Main Hand : </strong>${items.mainHand.name}</li>
          <li><strong>HK : </strong>${data.totalHonorableKills}</li>
        </ul>
        `;
        document.querySelector('.items').innerHTML = itemList;
        document.querySelector('.thumbnail').innerHTML = thumbnail;
    })
    .catch(err => console.log(err))
  );
}