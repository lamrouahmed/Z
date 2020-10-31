const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);
const characterZ = [{
        name: 'Goku (Super Saiyan)',
        renderName: 'goku_ssj',
        zAssist: {
            a: 'Kamehameha',
            b: 'Flurry Kick',
            c: 'Dragon Storm '
        },
        color: '#F85B1A',
        tier: 'S'
    },
    {
        name: 'Vegeta (Super Saiyan)',
        renderName: 'vegeta_ssj',
        zAssist: {
            a: 'Consecutive Energy Blast',
            b: 'Super Dash Kick',
            c: 'Crushing Knee Kick'
        },
        color: '#2158ac',
        tier: 'S'
    },
    {
        name: 'Piccolo',
        renderName: 'piccolo',
        zAssist: {
            a: 'Homing Energy Blast',
            b: 'Demon Shocker',
            c: 'Demon Slicer'
        },
        color: '#5a7737',
        tier: 'S'
    },
    {
        name: 'Gohan (Teen)',
        renderName: 'gohan_teen',
        zAssist: {
            a: 'Super Dragon Flight',
            b: 'Masendan',
            c: 'Flying Kick'
        },
        color: '#ecbb27',
        tier: 'S'
    },
    {
        name: 'Frieza',
        renderName: 'frieza',
        zAssist: {
            a: 'Death Slash',
            b: 'You might not survive this time',
            c: 'Psychokinesis'
        },
        color: '#8a7996',
        tier: 'S'
    },
    {
        name: 'Captain Ginyu',
        renderName: 'ginyu',
        zAssist: {
            a: 'Strong Jersey',
            b: 'We are the Ginyu Force!',
            c: 'Strong Mixer'
        },
        color: '#34243a',
        tier: 'S'
    },
    {
        name: 'Trunks',
        renderName: 'trunks',
        zAssist: {
            a: 'Change the Future',
            b: 'Masenko',
            c: 'Flurry Slash'
        },
        color: '#3d3d6a',
        tier: 'S'
    },
    {
        name: 'Cell',
        renderName: 'cell',
        zAssist: {
            a: 'Kamehameha',
            b: 'Shoulder Tackle',
            c: 'Perfect Attack'
        },
        color: '#7d9957',
        tier: 'S'
    },
    {
        name: 'Android 18',
        renderName: 'android_18',
        zAssist: {
            a: 'Barrier',
            b: 'Destructo-Disc',
            c: 'Support Attack'
        },
        color: '#3e5eca',
        tier: 'S'
    },
    {
        name: 'Gotenks',
        renderName: 'gotenks',
        zAssist: {
            a: 'Galactic Donuts',
            b: 'Miracle Super Punch',
            c: 'Vengeful Shout'
        },
        color: '#eccb80',
        tier: 'S'
    },
    {
        name: 'Krillin',
        renderName: 'krillin',
        zAssist: {
            a: 'Senzu Bean',
            b: 'Kamehameha',
            c: 'Solar Flare'
        },
        color: '#cc731b',
        tier: 'A'
    },
    {
        name: 'Kid Buu',
        renderName: 'kid_buu',
        zAssist: {
            a: 'Arm Ball',
            b: 'Mystic Ball Attack',
            c: 'Kamehameha'
        },
        color: '#ffcbc6',
        tier: 'S'
    },
    {
        name: 'Majin Buu',
        renderName: 'majin_buu',
        zAssist: {
            a: 'Sweeping Breath',
            b: 'Fat Throw',
            c: 'Cartwheel'
        },
        color: '#ffc1c0',
        tier: 'A'
    },
    {
        name: 'Nappa',
        renderName: 'nappa',
        zAssist: {
            a: 'Blazing Storm',
            b: 'Too bad',
            c: 'Deluxe Bomber'
        },
        color: '#b0794c',
        tier: 'B'
    },
    {
        name: 'Android 16',
        renderName: 'android_16',
        zAssist: {
            a: 'Hell Heat',
            b: 'Hell Impact',
            c: 'Hyper Tackle'
        },
        color: '#5f712c',
        tier: 'B'
    },
    {
        name: 'Yamcha',
        renderName: 'yamcha',
        zAssist: {
            a: 'Wolf Fang Fist',
            b: 'Kamehameha',
            c: 'Wolf Fang Fist: Pack Attack'
        },
        color: '#e29927',
        tier: 'S'
    },
    {
        name: 'Tien',
        renderName: 'tien',
        zAssist: {
            a: 'Dodon Ray',
            b: 'Telekinesis',
            c: 'Volleyball Fist'
        },
        color: '#4a3033',
        tier: 'S'
    },
    {
        name: 'Gohan (Adult)',
        renderName: 'gohan_adult',
        zAssist: {
            a: 'Jet Uppercut',
            b: 'Machine Gun Punch',
            c: 'Masenko'
        },
        color: '#94492e',
        tier: 'A'
    },
    {
        name: 'Hit',
        renderName: 'hit',
        zAssist: {
            a: 'Guard Breaker',
            b: 'Instant Blow',
            c: 'Time Release'
        },
        color: '#7b647d',
        tier: 'S'
    },
    {
        name: 'Goku (SSGSS)',
        renderName: 'goku_blue',
        zAssist: {
            a: 'Dragon Flash Fist',
            b: 'Divine Void Strike',
            c: 'Instant Transmission'
        },
        color: '#dd874f',
        tier: 'S'
    },
    {
        name: 'Vegeta (SSGSS)',
        renderName: 'vegeta_blue',
        zAssist: {
            a: 'Big Bang Attack',
            b: 'Infinity Breaker',
            c: 'Super Dash Kick'
        },
        color: '#477cb7',
        tier: 'S'
    },
    {
        name: 'Beerus',
        renderName: 'beerus',
        zAssist: {
            a: 'Sphere of Destruction',
            b: 'God of Destruction\'s Rampage',
            c: 'God of Destruction\'s Wrath'
        },
        color: '#94799c',
        tier: 'A'
    },
    {
        name: 'Goku Black',
        renderName: 'goku_black',
        zAssist: {
            a: 'Black Kamehameha',
            b: 'Godly Severance',
            c: 'Fierce God Kick'
        },
        color: '#7d6f6f',
        tier: 'B'
    },
    {
        name: 'Android 21',
        renderName: 'android_21',
        zAssist: {
            a: 'Total Detonation Ball',
            b: 'Hors d\'Oeuvre Stab',
            c: 'Snack Time'
        },
        color: '#c5afbd',
        tier: 'S'
    },
    {
        name: 'Goku',
        renderName: 'goku',
        zAssist: {
            a: 'Energy Shockwave',
            b: 'Everyone, lend me your energy!',
            c: 'Kamehameha'
        },
        color: '#d67037',
        tier: 'S'
    },
    {
        name: 'Vegeta',
        renderName: 'vegeta',
        zAssist: {
            a: 'Energy Cutter',
            b: 'Super Dash Kick',
            c: 'Dirty Fireworks'
        },
        color: '#17171eba',
        tier: 'Z'
    },
    {
        name: 'Broly',
        renderName: 'broly',
        zAssist: {
            a: 'Eraser Blow',
            b: 'Machine Gun Shot',
            c: 'Lariat Express'
        },
        color: '#e1c3a2',
        tier: 'Z'
    },
    {
        name: 'Zamasu(Fused)',
        renderName: 'zamasu',
        zAssist: {
            a: 'Divine Order',
            b: 'Eternal Justice',
            c: 'Divine Authority'
        },
        color: '#3c3d3f',
        tier: 'C'
    },
    {
        name: 'Bardock',
        renderName: 'bardock',
        zAssist: {
            a: 'Rebellion Spear',
            b: 'Tyrant Lancer',
            c: 'Rebellion Combination'
        },
        color: '#375347',
        tier: 'S'
    },
    {
        name: 'Vegito(SSGSS)',
        renderName: 'vegito',
        zAssist: {
            a: 'Split Finger Shot',
            b: 'Spiral Heel Shot',
            c: 'Spirit Sword'
        },
        color: '#375a95',
        tier: 'S'
    },
    {
        name: 'Android 17',
        renderName: 'android_17',
        zAssist: {
            a: 'Reverse Gear',
            b: 'Power Blitz Charge',
            c: 'Accel Driver'
        },
        color: '#6d877c',
        tier: 'S'
    },
    {
        name: 'Cooler',
        renderName: 'cooler',
        zAssist: {
            a: 'Death Breaker',
            b: 'Genocidal Uppercut',
            c: 'Death Crasher'
        },
        color: '#615077',
        tier: 'S'
    },
    {
        name: 'Jiren',
        renderName: 'jiren',
        zAssist: {
            a: 'Infinity Rush',
            b: 'Grand Charge',
            c: 'Flash Fist'
        },
        color: '#d2403f',
        tier: 'A'
    },
    {
        name: 'Videl',
        renderName: 'videl',
        zAssist: {
            a: 'Videl Rush',
            b: 'Eagle Rush',
            c: 'Rising Eagle'
        },
        color: '#f2eae6',
        tier: 'B'
    },
    {
        name: 'Goku(GT)',
        renderName: 'goku_gt',
        zAssist: {
            a: 'Kamehameha',
            b: 'Dragon Flash Fist',
            c: 'Power Pole'
        },
        color: '#68616c',
        tier: 'S'
    },
    {
        name: 'Janemba',
        renderName: 'janemba',
        zAssist: {
            a: 'Phantom Assault',
            b: 'Demonic Blade',
            c: 'Hellblade Flurry'
        },
        color: '#997396',
        tier: 'S'
    },
    {
        name: 'Gogeta(SSGSS)',
        renderName: 'gogeta',
        zAssist: {
            a: 'Super Dash Kick',
            b: 'Rising Vortex',
            c: 'Galick Gun'
        },
        color: '#3c7cb5',
        tier: 'S'
    },
    {
        name: 'Broly(DBS)',
        renderName: 'broly_dbs',
        zAssist: {
            a: 'Raging Quake',
            b: 'Eraser Blow',
            c: 'Blaster Cannon'
        },
        color: '#415134',
        tier: 'S'
    },
    {
        name: 'Kefla',
        renderName: 'kefla',
        zAssist: {
            a: 'Super Cannonball',
            b: 'Mighty Kick',
            c: 'Gigantic Breaker'
        },
        color:'#c2446c',
        tier: 'S'
    },
    {
        name: 'Goku(Ultra Instinct)',
        renderName: 'goku_ui',
        zAssist: {
            a: 'Rising Heat',
            b: 'Kamehameha',
            c: 'Unrestrained Will'
        },
        color: '#cfd4d9',
        tier: 'S'
    },
    {
        name: 'Master Roshi',
        renderName: 'roshi',
        zAssist: {
            a: 'Kamehameha',
            b: 'Martial Spirit',
            c: 'Turtle Hermit Flurry'
        },
        color: '#ad884d',
        tier: 'S'
    }
]
const position = {
    point: 0,
    mid: 1,
    anchor: 2
}

const action = {
    next: '+',
    prev: '-'
}

const assist = {
    a: 0,
    b: 1,
    c: 2
}
// const loaded = img => img.complete && typeof img.naturalWidth != 'undefined' && img.naturalWidth != 0;

window.addEventListener('load', () => {
    $('body').classList.add('loaded')
    load();
});

const generateSrc = (character, rendersDir, imgExt) => `./${rendersDir}/${character.renderName}.${imgExt}`;

const changeData = (node, newSrc, newData) => {
    node.src = newSrc
    node.dataset.char = newData.name;
    node.addEventListener('load', () => initializeData());
    //node.classList.add('swaped');
    // setTimeout(() => {
    //     node.classList.remove('swaped');
    // },300)
}

//$$('img[data-position]').forEach(img => img.addEventListener('animationend', e => e.currentTarget.classList.remove('swaped')))


const playAudio = audioSrc => (new Audio(audioSrc)).play();

const charIndex = (characterZ, characterName) => characterZ.map(character => character.name).indexOf(characterName);

const returnIndex = (characterZ, dataset, action) => {
    let index = eval(`${charIndex(characterZ, $(`img[data-position=${dataset.position}]`).dataset.char)} ${action[dataset.direction]} 1`);
    if (index >= characterZ.length) return 0
    else if (index < 0) return characterZ.length - 1
    else return index
}

const swapData = (character, pos, act) => {
    let newIndex = eval(`${position[pos]} ${action[act]} 1`);
    const length = Object.keys(position).length;
    if (newIndex >= length)  newIndex = 0
    else if (newIndex < 0)  newIndex = length - 1
    let newCharName = $$('img[data-position]')[newIndex];
    
    [newCharName.dataset.char, character.dataset.char] = [character.dataset.char, newCharName.dataset.char];
    [newCharName.dataset.assist, character.dataset.assist] = [character.dataset.assist, newCharName.dataset.assist]
    changeData(character, generateSrc(characterZ[charIndex(characterZ, character.dataset.char)], 'renderZ', 'png'), characterZ[charIndex(characterZ, character.dataset.char)]);
    changeData(newCharName, generateSrc(characterZ[charIndex(characterZ, newCharName.dataset.char)], 'renderZ', 'png'), characterZ[charIndex(characterZ, newCharName.dataset.char)])

}

const changeAssist = (character, pos, act) => {
    
    const assistField = $$('.ZassistName > p')[position[pos]];
    const length = Object.keys(assist).length;
    let newAssist = eval(`${assist[character.dataset.assist]} ${action[act]} 1`);
    if (newAssist >= length)  newAssist = 0
    else if (newAssist < 0)  newAssist = length - 1
    const assistType = Object.keys(assist).filter(key =>  assist[key] === newAssist);
    character.dataset.assist = assistType;
    assistField.textContent = characterZ[charIndex(characterZ, character.dataset.char)].zAssist[assistType]
}

//
$$('.Zarrow').forEach(arrow => {
    arrow.addEventListener('click', e => {
        const {
            dataset
        } = e.currentTarget;
        let index = returnIndex(characterZ, dataset, action);
        dataset.action === 'Zchange' && changeData($(`img[data-position=${dataset.position}]`), generateSrc(characterZ[index], 'renderZ', 'png'), characterZ[index])
        dataset.action === 'Zswitch' && swapData($(`img[data-position=${dataset.position}]`), dataset.position, dataset.direction);
        dataset.action === 'Zassist' && changeAssist($(`img[data-position=${dataset.position}]`), dataset.position, dataset.direction);
    })
})


$$('.colors > div').forEach(color => {
    color.addEventListener('click', e => {
        const {
            className
        } = e.currentTarget;
        const charColor = characterZ[charIndex(characterZ, $(`img[data-position=${className}]`).dataset.char)].color
        const newColor = adjust(charColor,random(80));
        console.log(random(100), newColor)
        $(`.charContainer[data-position=${className}]`).style.backgroundColor=`${newColor}`
        e.currentTarget.style.backgroundColor=`${newColor}`
    })
})
// $$('.colors > div').forEach(color => {
//     color.addEventListener('mouseover', e => {
//         const {
//             className
//         } = e.currentTarget;
//     })
// })

$('.generate').addEventListener('click', e => {
    
    const randoms = {
        point: random(characterZ.length, true),
        mid: random(characterZ.length, true),
        anchor: random(characterZ.length, true)
    }
    let uniq= new Set([randoms.point,randoms.mid,randoms.anchor]);
    while(uniq.size < 3) {
        randoms.point = random(characterZ.length, true),
        randoms.mid = random(characterZ.length, true),
        randoms.anchor = random(characterZ.length, true)
        uniq = new Set([randoms.point,randoms.mid,randoms.anchor]);
    }
    $$('img[data-position]').forEach(img => {
        changeData(img, generateSrc(characterZ[randoms[img.dataset.position]],'renderZ', 'png'),characterZ[randoms[img.dataset.position]]);
    })
})
const initializeData = () => {
    const assists = $$('.ZassistName > p');
    const charZ = $$('img[data-position]');
    const charContainer = $$('.charContainer');
    let assistType = '';
    let charName = '';
    
    assists.forEach((assistName, index) => {
        assistType = charZ[index].dataset.assist;
        charName = charZ[index].dataset.char;
        assistName.textContent = characterZ[charIndex(characterZ, charName)].zAssist[assistType];
        if(charName === 'Captain Ginyu' || charName === 'Majin Buu') charZ[index].classList.add('smol')
        else charZ[index].classList.remove('smol')
    })
    charContainer.forEach((container, index) => {
        let characterColor = characterZ[charIndex(characterZ, charZ[index].dataset.char)].color;
        container.style.backgroundColor = characterColor
        $$('.colors > div')[index].style.backgroundColor = characterColor
    })
    
}
initializeData();

// setInterval(() => {
//     $('body').classList.add('loaded');
// },2000)







// fetch(window.location.href, {
//     method: 'get'
// }).then(response => response.text())
//   .then(data => data && $('body').classList.add('loaded'))



function adjust(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}


// function adjust(color, amount) {
//     return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
// }

function random(n, p=undefined) {
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1
    return p ? Math.floor(Math.random()*n) : Math.floor(Math.random()*n) * plusOrMinus
}








function load() {
    let images = [];
    characterZ.forEach(char => {
        if(char.renderName !== 'goku_ssj' &&  char.renderName !== 'vegeta_ssj' && char.renderName !== 'gohan_teen') images.push(new Image().src = generateSrc(char, 'renderZ', 'png'))
    })
}

