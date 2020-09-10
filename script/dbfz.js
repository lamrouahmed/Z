const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);
const characterZ = [{
        name: 'Goku (Super Saiyan)',
        renderName: 'goku_ssj',
        zAssist: {
            a: 'Kamehameha',
            b: 'Flurry Kick',
            c: 'Dragon Storm '
        }
    },
    {
        name: 'Vegeta (Super Saiyan)',
        renderName: 'vegeta_ssj',
        zAssist: {
            a: 'Consecutive Energy Blast',
            b: 'Super Dash Kick',
            c: 'Crushing Knee Kick'
        }
    },
    {
        name: 'Piccolo',
        renderName: 'piccolo',
        zAssist: {
            a: 'Homing Energy Blast',
            b: 'Demon Shocker',
            c: 'Demon Slicer'
        }
    },
    {
        name: 'Gohan (Teen)',
        renderName: 'gohan_teen',
        zAssist: {
            a: 'Super Dragon Flight',
            b: 'Masendan',
            c: 'Flying Kick'
        }
    },
    {
        name: 'Frieza',
        renderName: 'frieza',
        zAssist: {
            a: 'Death Slash',
            b: 'You might not survive this time',
            c: 'Psychokinesis'
        }
    },
    {
        name: 'Captain Ginyu',
        renderName: 'ginyu',
        zAssist: {
            a: 'Strong Jersey',
            b: 'We are the Ginyu Force!',
            c: 'Strong Mixer'
        }
    },
    {
        name: 'Trunks',
        renderName: 'trunks',
        zAssist: {
            a: 'Change the Future',
            b: 'Masenko',
            c: 'Flurry Slash'
        }
    },
    {
        name: 'Cell',
        renderName: 'cell',
        zAssist: {
            a: 'Kamehameha',
            b: 'Shoulder Tackle',
            c: 'Perfect Attack'
        }
    },
    {
        name: 'Android 18',
        renderName: 'android_18',
        zAssist: {
            a: 'Barrier',
            b: 'Destructo-Disc',
            c: 'Support Attack'
        }
    },
    {
        name: 'Gotenks',
        renderName: 'gotenks',
        zAssist: {
            a: 'Galactic Donuts',
            b: 'Miracle Super Punch',
            c: 'Vengeful Shout'
        }
    },
    {
        name: 'Krillin',
        renderName: 'krillin',
        zAssist: {
            a: 'Senzu Bean',
            b: 'Kamehameha',
            c: 'Solar Flare'
        }
    },
    {
        name: 'Kid Buu',
        renderName: 'kid_buu',
        zAssist: {
            a: 'Arm Ball',
            b: 'Mystic Ball Attack',
            c: 'Kamehameha'
        }
    },
    {
        name: 'Majin Buu',
        renderName: 'majin_buu',
        zAssist: {
            a: 'Sweeping Breath',
            b: 'Fat Throw',
            c: 'Cartwheel'
        }
    },
    {
        name: 'Nappa',
        renderName: 'nappa',
        zAssist: {
            a: 'Blazing Storm',
            b: 'Too bad',
            c: 'Deluxe Bomber'
        }
    },
    {
        name: 'Android 16',
        renderName: 'android_16',
        zAssist: {
            a: 'Hell Heat',
            b: 'Hell Impact',
            c: 'Hyper Tackle'
        }
    },
    {
        name: 'Yamcha',
        renderName: 'yamcha',
        zAssist: {
            a: 'Wolf Fang Fist',
            b: 'Kamehameha',
            c: 'Wolf Fang Fist: Pack Attack'
        }
    },
    {
        name: 'Tien',
        renderName: 'tien',
        zAssist: {
            a: 'Dodon Ray',
            b: 'Telekinesis',
            c: 'Volleyball Fist'
        }
    },
    {
        name: 'Gohan (Adult)',
        renderName: 'gohan_adult',
        zAssist: {
            a: 'Jet Uppercut',
            b: 'Machine Gun Punch',
            c: 'Masenko'
        }
    },
    {
        name: 'Hit',
        renderName: 'hit',
        zAssist: {
            a: 'Guard Breaker',
            b: 'Instant Blow',
            c: 'Time Release'
        }
    },
    {
        name: 'Goku (SSGSS)',
        renderName: 'goku_blue',
        zAssist: {
            a: 'Dragon Flash Fist',
            b: 'Divine Void Strike',
            c: 'Instant Transmission'
        }
    },
    {
        name: 'Vegeta (SSGSS)',
        renderName: 'vegeta_blue',
        zAssist: {
            a: 'Big Bang Attack',
            b: 'Infinity Breaker',
            c: 'Super Dash Kick'
        }
    },
    {
        name: 'Beerus',
        renderName: 'beerus',
        zAssist: {
            a: 'Sphere of Destruction',
            b: 'God of Destruction\'s Rampage',
            c: 'God of Destruction\'s Wrath'
        }
    },
    {
        name: 'Goku Black',
        renderName: 'goku_black',
        zAssist: {
            a: 'Black Kamehameha',
            b: 'Godly Severance',
            c: 'Fierce God Kick'
        }
    },
    {
        name: 'Android 21',
        renderName: 'android_21',
        zAssist: {
            a: 'Total Detonation Ball',
            b: 'Hors d\'Oeuvre Stab',
            c: 'Snack Time'
        }
    },
    {
        name: 'Goku',
        renderName: 'goku',
        zAssist: {
            a: 'Energy Shockwave',
            b: 'Everyone, lend me your energy!',
            c: 'Kamehameha'
        }
    },
    {
        name: 'Vegeta',
        renderName: 'vegeta',
        zAssist: {
            a: 'Energy Cutter',
            b: 'Super Dash Kick',
            c: 'Dirty Fireworks'
        }
    },
    {
        name: 'Broly',
        renderName: 'broly',
        zAssist: {
            a: 'Eraser Blow',
            b: 'Machine Gun Shot',
            c: 'Lariat Express'
        }
    },
    {
        name: 'Zamasu(Fused)',
        renderName: 'zamasu',
        zAssist: {
            a: 'Divine Order',
            b: 'Eternal Justice',
            c: 'Divine Authority'
        }
    },
    {
        name: 'Bardock',
        renderName: 'bardock',
        zAssist: {
            a: 'Rebellion Spear',
            b: 'Tyrant Lancer',
            c: 'Rebellion Combination'
        }
    },
    {
        name: 'Vegito(SSGSS)',
        renderName: 'vegito',
        zAssist: {
            a: 'Split Finger Shot',
            b: 'Spiral Heel Shot',
            c: 'Spirit Sword'
        }
    },
    {
        name: 'Android 17',
        renderName: 'android_17',
        zAssist: {
            a: 'Reverse Gear',
            b: 'Power Blitz Charge',
            c: 'Accel Driver'
        }
    },
    {
        name: 'Cooler',
        renderName: 'cooler',
        zAssist: {
            a: 'Death Breaker',
            b: 'Genocidal Uppercut',
            c: 'Death Crasher'
        }
    },
    {
        name: 'Jiren',
        renderName: 'jiren',
        zAssist: {
            a: 'Infinity Rush',
            b: 'Grand Charge',
            c: 'Flash Fist'
        }
    },
    {
        name: 'Videl',
        renderName: 'videl',
        zAssist: {
            a: 'Videl Rush',
            b: 'Eagle Rush',
            c: 'Rising Eagle'
        }
    },
    {
        name: 'Goku(GT)',
        renderName: 'goku_gt',
        zAssist: {
            a: 'Kamehameha',
            b: 'Dragon Flash Fist',
            c: 'Power Pole'
        }
    },
    {
        name: 'Janemba',
        renderName: 'janemba',
        zAssist: {
            a: 'Phantom Assault',
            b: 'Demonic Blade',
            c: 'Hellblade Flurry'
        }
    },
    {
        name: 'Gogeta(SSGSS)',
        renderName: 'gogeta',
        zAssist: {
            a: 'Super Dash Kick',
            b: 'Rising Vortex',
            c: 'Galick Gun'
        }
    },
    {
        name: 'Broly(DBS)',
        renderName: 'broly_dbs',
        zAssist: {
            a: 'Raging Quake',
            b: 'Eraser Blow',
            c: 'Blaster Cannon'
        }
    },
    {
        name: 'Kefla',
        renderName: 'kefla',
        zAssist: {
            a: 'Super Cannonball',
            b: 'Mighty Kick',
            c: 'Gigantic Breaker'
        }
    },
    {
        name: 'Goku(Ultra Instinct)',
        renderName: 'goku_ui',
        zAssist: {
            a: 'Rising Heat',
            b: 'Kamehameha',
            c: 'Unrestrained Will'
        }
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
const generateSrc = (character, rendersDir, imgExt) => `./${rendersDir}/${character.renderName}.${imgExt}`;
const changeData = (node, newSrc, newData) => {
    node.src = newSrc
    node.dataset.char = newData.name;
}
const playAudio = audioSrc => (new Audio(audioSrc)).play();
const charIndex = (characterZ, characterName) => characterZ.map(character => character.name).indexOf(characterName);
const returnIndex = (characterZ, dataset, action) => {
    let index = eval(`${charIndex(characterZ, $(`img[data-position=${dataset.position}]`).dataset.char)} ${action[dataset.direction]} 1`);
    if (index >= characterZ.length) return 0
    else if (index < 0) return characterZ.length - 1
    else return index

}





$$('.Zarrow').forEach(arrow => {
    arrow.addEventListener('click', e => {
        const {
            dataset
        } = e.currentTarget;

        let index = returnIndex(characterZ, dataset, action);
        dataset.action === 'Zswitch' && changeData($(`img[data-position=${dataset.position}]`), generateSrc(characterZ[index], 'renderZ', 'png'), characterZ[index])
    })
})