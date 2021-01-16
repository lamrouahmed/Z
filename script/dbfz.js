//window.location.host + window.location.pathname
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
        tier: 'B'
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
        tier: 'A'
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
        tier: 'Z'
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
        tier: 'B'
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
        tier: 'A'
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
        color: '#192652',
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
        color: '#373839', //#eccb80
        tier: 'Z'
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
        tier: 'S'
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
        tier: 'Z'
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
        tier: 'S'
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
        tier: 'S'
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
        tier: 'A'
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
        tier: 'C'
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
        tier: 'Z'
    },
    {
        name: 'Vegeta',
        renderName: 'vegeta',
        zAssist: {
            a: 'Energy Cutter',
            b: 'Super Dash Kick',
            c: 'Dirty Fireworks'
        },
        color: '#2a2a2b',
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
        tier: 'Z'
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
        tier: 'A'
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
        tier: 'A'
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
        color: '#272844',
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
        color: '#306492',
        tier: 'B'
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
        tier: 'Z'
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
    },
    {
        name: 'Super Baby 2',
        renderName: 'super_baby_2',
        zAssist: {
            a: 'revenge blast',
            b: 'revenge driver',
            c: 'revenge final flash'
        },
        color: '#184959',
        tier: 'S'
    }
]



const ranks = [
    {
        rank: 'Saibaman',
        renderName: 'saibaman'
    },
    {
        rank: 'Earthling',
        renderName: 'earthling'
    },
    {
        rank: 'Namekian',
        renderName: 'namekian'
    },
    {
        rank: 'Saiyan',
        renderName: 'saiyan'
    },
    {
        rank: 'Freiza Clan',
        renderName: 'freiza_clan'
    },
    {
        rank: 'Super Saiyan',
        renderName: 'ssj'
    },
    {
        rank: 'Android',
        renderName: 'android'
    },
    {
        rank: 'Super Saiyan 2',
        renderName: 'ssj2'
    },
    {
        rank: 'Supreme Kai',
        renderName: 'supreme_kai'
    },
    {
        rank: 'Demon',
        renderName: 'demon'
    },
    {
        rank: 'Super Saiyan 3',
        renderName: 'ssj3'
    },
    {
        rank: 'Majin',
        renderName: 'majin'
    },
    {
        rank: 'Super Saiyan God',
        renderName: 'ssg'
    },
    {
        rank: 'Super Saiyan Blue',
        renderName: 'ssb'
    },
    {
        rank: 'Living Legend',
        renderName: 'living_legend'
    },
    {
        rank: 'Super Saiyan Rosé',
        renderName: 'ssr'
    },
    {
        rank: 'Pride Trooper',
        renderName: 'pride_trooper'
    },
    {
        rank: 'Ultra Instinct -Sign-',
        renderName: 'ui_sign'
    },
    {
        rank: 'Super Saiyan Blue Evolved',
        renderName: 'ssb_evolved'
    },
    {
        rank: 'God Of Destruction',
        renderName: 'g.o.d'
    },
    {
        rank: 'Ultra Instinct',
        renderName: 'ui'
    },
    {
        rank: 'Angel',
        renderName: 'angel'
    },
    {
        rank: 'Grand Priest',
        renderName: 'grand_priest'
    },
    {
        rank: 'Zen-Oh',
        renderName: 'zen_oh'
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

const tierZ = {
    Z: 30,
    S: 25,
    A: 20,
    B: 15,
    C: 10
}
// const loaded = img => img.complete && typeof img.naturalWidth != 'undefined' && img.naturalWidth != 0;

const tierCalc = totalP => {
    if(totalP === tierZ.Z * 3) return 'Z'
    if(totalP >= tierZ.S * 3 && totalP < tierZ.Z * 3) return 'S'
    if(totalP >= tierZ.A * 3 && totalP < tierZ.S * 3) return 'A'
    if(totalP >= tierZ.B * 3 && totalP < tierZ.A * 3) return 'B'
    return 'C'
}

window.addEventListener('load', () => {
    $('body').classList.add('loaded')
    //load();
});

const generateSrc = (character, rendersDir, imgExt) => `./${rendersDir}/${character.renderName}.${imgExt}`;

const changeData = (node, newSrc, newData) => {
    node.src = newSrc
    node.dataset.char = newData.name;
    $('.headerLogo  img').classList.add('loading');
    node.addEventListener('load', () => initializeData());
    //node.classList.add('swaped');
    // setTimeout(() => {
    //     node.classList.remove('swaped');
    // },300)
}

//$$('img[data-position]').forEach(img => img.addEventListener('animationend', e => e.currentTarget.classList.remove('swaped')))


$('.gamerTagCheckbox > label').addEventListener('click' , () => {
    const checkbox = $('.gamerTagCheckbox > label input');
    const svg = $('.gamerTagCheckbox label svg');
    checkbox.checked && svg.classList.add('checked')
    !(checkbox.checked) && svg.classList.remove('checked')
})
$('.assistsCheckbox > label').addEventListener('click' , () => {
    const checkbox = $('.assistsCheckbox > label input');
    const svg = $('.assistsCheckbox label svg');
    checkbox.checked && svg.classList.add('checked')
    !(checkbox.checked) && svg.classList.remove('checked')
})
$('.rankCheckbox > label').addEventListener('click' , () => {
    const checkbox = $('.rankCheckbox > label input');
    const svg = $('.rankCheckbox label svg');
    checkbox.checked && svg.classList.add('checked')
    !(checkbox.checked) && svg.classList.remove('checked')
})


const copy = url => {
      const el = document.createElement('textarea');
      el.value = url;
      el.setAttribute('readonly', '');
      el.style = {position: 'absolute', left: '-9999px', display: 'none'};
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      el.remove();
}




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
    $$('.character').forEach(char => char.classList.remove('a', 'b', 'c'));
    $$('img[data-position]').forEach((img, i) => {
        $$('.character')[i].classList.add(img.dataset.assist)
    })
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
    $$('.character')[position[pos]].classList.remove('a', 'b', 'c');
    $$('.character')[position[pos]].classList.add(assistType)
}
const rankImg = $('.rankImg > img');

const changeRank = (Rank, act) => {
    let rankIndex = ranks.findIndex(rankName => rankName.rank === Rank)
    const length = ranks.length;
    let newRank = eval(`${rankIndex} ${action[act]} 1`);
    if (newRank >= length)  newRank = 0
    else if (newRank < 0)  newRank = length - 1
    rankImg.src = generateSrc(ranks[newRank], 'ranks', 'png')
    $('.rankBig > img').src = generateSrc(ranks[newRank], 'ranks', 'png')
    rankImg.dataset.rank = ranks[newRank].rank;
}
//
$$('.arrow').forEach(arrow => {
    arrow.addEventListener('click', e => changeRank(rankImg.dataset.rank, e.currentTarget.dataset.direction)) 
})
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
        $(`.charContainer[data-position=${className}]`).style.backgroundColor=`${newColor}`
        e.currentTarget.style.backgroundColor=`${newColor}`
    })
})
$$('.colors > div').forEach(color => {
    color.addEventListener('mouseover', e => {
        const {
            className
        } = e.currentTarget;

        $$('img[data-position]').forEach(img => {
            img.dataset.position !== className && img.classList.add('lowOp')
            img.dataset.position === className && img.classList.remove('lowOp')
        })
    })
})
$$('.colors > div').forEach(color => {
    color.addEventListener('mouseout', e => {
        $$('img[data-position]').forEach(img => {
            img.classList.remove('lowOp')
        })
    })
})

$('.teamImg').addEventListener('click', () => {
    const elem = $('.teamContainer');
    $('body').classList.add('photoMode')
    // if (elem.requestFullscreen) {
    //     elem.requestFullscreen();
    // } else if (elem.webkitRequestFullscreen) {
    //     elem.webkitRequestFullscreen();
    // } else if (elem.msRequestFullscreen) {
    //     elem.msRequestFullscreen();
    // }
    if($('.gamerTagCheckbox input').checked) {
        $('.gamer').classList.add('hideGamerTag');
    } else {
        $('.gamer').classList.remove('hideGamerTag');
    }
    if($('.assistsCheckbox input').checked) {
        $('.characterContainer').classList.add('hideAssists');
    } else {
        $('.characterContainer').classList.remove('hideAssists');
    }
    if($('.rankCheckbox input').checked) {
        $('.rankBig').classList.add('hideRank');
    } else {
        $('.rankBig').classList.remove('hideRank');
    }
})

document.addEventListener('keydown', e => {
    if($('body').classList.contains('photoMode') && e.key === 'Escape') {
        $('body').classList.remove('photoMode')
        $('.characterContainer').classList.remove('hideAssists');
        $('.gamer').classList.remove('hideGamerTag');
        $('.rankBig').classList.remove('hideRank')
    }
})
// $('.teamTier').addEventListener('click', () => $('body').classList.remove('photoMode'))
$('.generate').addEventListener('click', e => {

    const randoms = {
        point: random(characterZ.length, true),
        mid: random(characterZ.length, true),
        anchor: random(characterZ.length, true)
    }
    const assists = {
        point: random(3, true),
        mid: random(3, true),
        anchor: random(3, true)
    }

    const assistType = Object.keys(assist);
    let uniq= new Set([randoms.point,randoms.mid,randoms.anchor]);
    while(uniq.size < 3) {
        randoms.point = random(characterZ.length, true),
        randoms.mid = random(characterZ.length, true),
        randoms.anchor = random(characterZ.length, true)
        uniq = new Set([randoms.point,randoms.mid,randoms.anchor]);
    }
    $$('img[data-position]').forEach((img,i) => {
        changeData(img, generateSrc(characterZ[randoms[img.dataset.position]],'renderZ', 'png'),characterZ[randoms[img.dataset.position]]);
        $('.headerLogo  img').classList.add('loading');
        img.addEventListener('load', () => $('.headerLogo  img').classList.remove('loading'))
        $$('.character')[i].classList.remove('a', 'b', 'c');

    })
    $$('img[data-position]').forEach((img, i) => {
        let pos = img.dataset.position;
        img.dataset.assist= assistType[assists[pos]];
    })
})

$('.link').addEventListener('click', () => {
    let chars = [];
    $$('img[data-position]').forEach((img, i) => {
         chars[i] = `${img.dataset.position[0]}=${charIndex(characterZ, img.dataset.char)}-${img.dataset.assist}`
    })
    const link = `${window.location.host}${window.location.pathname}?${chars.join('&')}&name=${$('.gamerTag input').value}`;
    copy(link);
    $('.link').classList.remove('copied')
    $('.link').classList.add('copied')
    setTimeout(() => {
        $('.link').classList.remove('copied')
    }, 1000)
})

$$('.orientation > div').forEach(skew => skew.addEventListener('click', e => {
    $('.characterContainer').classList.remove('rightSkew','leftSkew', 'normalSkew')
    $('.characterContainer').classList.add(e.currentTarget.classList[0])
    $$('.orientation > div').forEach(div => div.classList.remove('selected'))
    e.currentTarget.classList.add('selected');
}))
$$('.platform > div').forEach(platform => platform.addEventListener('click', e => {
    if(e.currentTarget.classList.contains('selectedPlatform')) {
        e.currentTarget.classList.remove('selectedPlatform')
        $('.gamer .svg').innerHTML = '';
    } else {
        $$('.platform > div').forEach(div => div.classList.remove('selectedPlatform'))
        e.currentTarget.classList.add('selectedPlatform')
        $('.gamer .svg').innerHTML = $('.selectedPlatform').innerHTML;
    }
}))

const updateGamerTag = e => {
    $('.gamer > p').textContent = e.target.value;
}

$('#gamerTag').addEventListener('input', updateGamerTag);



const initializeData = () => {


    const assists = $$('.ZassistName > p');
    const charZ = $$('img[data-position]');
    const charContainer = $$('.charContainer');
    let assistType = '';
    let charName = '';

    let total = (Array.from(charZ).map(character => tierZ[characterZ[charIndex(characterZ, character.dataset.char)].tier]).reduce((a,b) => a + b, 0));
    $('.teamStrength .tier').textContent = tierCalc(total)
    $('.teamTier p').textContent = tierCalc(total)


    charContainer.forEach((container, index) => {
        let character = characterZ[charIndex(characterZ, charZ[index].dataset.char)];
        container.style.backgroundColor = character.color
        $$('.colors > div')[index].style.backgroundColor = character.color
        $$('.colors > div')[index].textContent = character.tier
    })


    
        assists.forEach((assistName, index) => {
            assistType = charZ[index].dataset.assist;
            charName = charZ[index].dataset.char;
            assistName.textContent = characterZ[charIndex(characterZ, charName)].zAssist[assistType];
            if(charName === 'Captain Ginyu' || charName === 'Majin Buu') charZ[index].classList.add('smol')
            else charZ[index].classList.remove('smol')
            $$('.character')[index].classList.add(assistType)
        })
    
    

      $('.headerLogo  img').classList.remove('loading');

 

    
}

const getUrl = () => {
    const assists = $$('.ZassistName > p');
    const charZ = $$('img[data-position]');
    let assistType = '';
    let charName = '';
    const url = new URL(window.location.href);
    
    let team = [url.searchParams.get('p'), url.searchParams.get('m'), url.searchParams.get('a')]
    let username = url.searchParams.get('name');
    if(team[0] && team[1] && team[2]) {
        team[0] = team[0].split('-');
        team[1] = team[1].split('-');
        team[2] = team[2].split('-');
    
            assists.forEach((assistName, index) => {
                assistType = team[index][1];
                charName = characterZ[team[index][0]].name;
                assistName.textContent = characterZ[team[index][0]].zAssist[assistType];
                $$('img[data-position]')[index].dataset.assist = assistType
                $$('img[data-position]')[index].dataset.char = charName
                changeData($$('img[data-position]')[index], generateSrc(characterZ[team[index][0]], 'renderZ', 'png'), characterZ[team[index][0]]);
                if(charName === 'Captain Ginyu' || charName === 'Majin Buu') charZ[index].classList.add('smol')
                else charZ[index].classList.remove('smol')
                $$('.character')[index].classList.remove('a', 'b', 'c');
                $$('.character')[index].classList.add(assistType)
            })
            $('.gamerTag input').value = username
            $('.gamer > p').textContent = username
    }
  
}
initializeData();
getUrl();
$('.gamer > p').textContent = $('#gamerTag').value;
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
    characterZ.forEach(char => images.push(new Image().src = generateSrc(char, 'renderZ', 'png')))
}



