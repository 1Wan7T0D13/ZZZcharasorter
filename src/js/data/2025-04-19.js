dataSetVersion = "2025-04-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Select by Factions",
    key: "faction",
    tooltip: "Check this to choose factions",
    checked: true,
    sub: 
    [
      {name: "Random Play", key: "random"},
      {name: "Cunning Hares", key: "hares"},
      {name: "Belobog Heavy Industry", key: "belobog"},
      {name: "Sons of Calydon", key: "soc"},
      {name: "Mockingbird", key: "mbird"},
      {name: "Angels of Delusion", key: "idols"},
      {name: "Victoria Housekeeping Co.", key: "victoria"},
      {name: "N.E.D.F.", tooltip: "Includes Obol Squad",  key: "nedf"},
      {name: "N.E.P.S.", tooltip: "Includes Criminal Invistigation Team", key: "neps"},
      {name: "H.A.N.D.", tooltip: "Includes Section 6", key: "hand"},
      {name: "Start of Lyra", key: "lyra"},
      {name: "Yunkui Summit", key: "yunkui"},
      {name: "Silver Squad", key: "silver"},
      {name: "Void Hunters", key: "void"},
      {name: "Unknown Faction", key: "nofact"},

      // {name: "X", key: "X"}, empty don't change
    ]
  },
  
  {
    name: "Select by rarity",
    key: "rarity",
    tooltip: "Check this to choose rarities",
    checked: false,
    sub: 
    [ 
      {name: "S-Ranks", key: "srank"},
      {name: "A-Ranks", key: "arank"},
      {name: "Unknown Rank", key: "norank"},
    ]
  },

  {
    name: "Remove future characters",
      key: "future",
      tooltip: "This is for characters who will be released in the future",
      checked: false,
  },
  
  {
    name: "Remove notable NPCs",
      key: "npc",
      tooltip: "Check this to add notable NPCs",
      checked: false,
  },


  {
    name: "Remove character alts",
      key: "altform",
      tooltip: "Check this to add alternative forms of character",
      checked: false,
  },
  {
    name: "Remove skins",
      key: "skin",
      tooltip: "Check this to add skins",
      checked: true,
  }

];

dataSet[dataSetVersion].characterData = [

//{ 
    //name: "X",
    //img: "X",
    //opts: {
      //faction: ["X", "X"],
      //rarity: ["X"],
      //future: X,
      //npc: X,
      //altform: X,
      //skin: X
    //}
//}, 
//THIS IS EMPTY DON'T FUCKING CHANGE

//begin chars buhhhhh
//cunning hares
{ 
    name: "Nicole Demara",
    img: "nicole.png",
    opts: {
      faction: ["hares"],
      rarity: ["arank"]
    }
},
{ 
    name: "Anby Demara",
    img: "anbyfour.png",
    opts: {
      faction: ["hares", "silver"],
      rarity: ["arank"]
    }
},
{ 
    name: "Billy Kid",
    img: "billy.png",
    opts: {
      faction: ["Hares", "soc"],
      rarity: ["arank"]
    }
},
{ 
    name: "Nekomiya Mana",
    img: "nekomata.png",
    opts: {
      faction: ["hares"],
      rarity: ["srank"]
    }
},

//belobog
{ 
    name: "Koleda Belobog",
    img: "koleda.png",
    opts: {
      faction: ["belobog"],
      rarity: ["srank"]
    }
},
{ 
    name: "Anton Ivanov",
    img: "anton.png",
    opts: {
      faction: ["belobog"],
      rarity: ["arank"]
    }
},
{ 
    name: "Ben Bigger",
    img: "ben.png",
    opts: {
      faction: ["belobog"],
      rarity: ["arank"]
    }
},
{ 
    name: "Grace Howard",
    img: "grace.png",
    opts: {
      faction: ["belobog"],
      rarity: ["srank"]
    }
},

///calydon
{ 
    name: "Caesar King",
    img: "caesar.png",
    opts: {
      faction: ["soc"],
      rarity: ["sarnk"]
    }
},
{ 
    name: "Lucy",
    img: "lucy.png",
    opts: {
      faction: ["soc"],
      rarity: ["arank"]
    }
},
{ 
    name: "Burnice White",
    img: "burnice.png",
    opts: {
      faction: ["soc"],
      rarity: ["srank"]
    }
},
{ 
    name: "Lighter",
    img: "lighter.png",
    opts: {
      faction: ["soc"],
      rarity: ["srank"]
    }
},
{ 
    name: "Piper Wheel",
    img: "piper.png",
    opts: {
      faction: ["soc"],
      rarity: ["arank"]
    }
},
{ 
    name: "Pulchra Felini",
    img: "pulchra.png",
    opts: {
      faction: ["soc"],
      rarity: ["arank"]
    }
},

//mockingbird
{ 
    name: "Hugo Vlad Ravenclock",
    img: "hugovlad.png",
    opts: {
      faction: ["mbird"],
      rarity: ["srank"],
      future: true
    }
},
{ 
    name: "Vivian Banshee",
    img: "vivian.png",
    opts: {
      faction: ["mbird"],
      rarity: ["sarnk"],
      future: true
    }
},

//OBOL SQUAAAAAAAAAAAAAAAAAAAAD
{ 
    name: "Soldier 11",
    img: "soldier11",
    opts: {
      faction: ["nedf", "silver"],
      rarity: ["srank"]
    }
},
{ 
    name: "Trigger",
    img: "trigger.png",
    opts: {
      faction: ["nedf"],
      rarity: ["srank"]
    }
},
{ 
    name: "Seed",
    img: "SEED.png",
    opts: {
      faction: ["nedf"],
      rarity: ["norank"],
      future: true
    }
},
{ 
    name: "Orpheus",
    img: "orpheus.png",
    opts: {
      faction: ["nedf"],
      rarity: ["norank"],
      future: true
    }
},
{ 
    name: "Captain Magus (Brujas?)",
    img: "magus.png",
    opts: {
      faction: ["nedf"],
      rarity: ["norank"],
      future: true,
      npc: true
    }
},

//victoria
{ 
    name: "Rina",
    img: "rina.png",
    opts: {
      faction: ["victoria"],
      rarity: ["srank"]
    }
},
{ 
    name: "Lycaon",
    img: "lycaon.png",
    opts: {
      faction: ["victoria"],
      rarity: ["srank"]
    }
},
{ 
    name: "Corin",
    img: "corin.png",
    opts: {
      faction: ["victoria"],
      rarity: ["arank"]
    }
},
{ 
    name: "Ellen Joe",
    img: "ellen.png",
    opts: {
      faction: ["victoria"],
      rarity: ["sarnk"]
    }
},

//police
{ 
    name: "Zhu Yuan",
    img: "zhuyuan.png",
    opts: {
      faction: ["neps"],
      rarity: ["srank"]
    }
},
{ 
    name: "Jane Doe",
    img: "jane.png",
    opts: {
      faction: ["neps"],
      rarity: ["srank"]
    }
},
{ 
    name: "Seth",
    img: "seth.png",
    opts: {
      faction: ["neps"],
      rarity: ["arank"]
    }
},
{ 
    name: "Qingyi",
    img: "qingyi.png",
    opts: {
      faction: ["neps"],
      rarity: ["srank"]
    }
},

//hsos 6
{ 
    name: "Hoshimi Miyabi",
    img: "miyabi.png",
    opts: {
      faction: ["hand", "void"],
      rarity: ["srank"]
    }
},
{ 
    name: "Yanagi",
    img: "yanagi.png",
    opts: {
      faction: ["hand"],
      rarity: ["srank"]
    }
},
{ 
    name: "Asaba Harumasa",
    img: "harumasa.png",
    opts: {
      faction: ["hand"],
      rarity: ["srank"]
    }
},
{ 
    name: "Soukaku",
    img: "soukaku.png",
    opts: {
      faction: ["hand"],
      rarity: ["arank"]
    }
},

//lyra
{ 
    name: "Astra Yao",
    img: "astra.png",
    opts: {
      faction: ["lyra"],
      rarity: ["srank"]
    }
},
{ 
    name: "Evelyn",
    img: "evelyn.png",
    opts: {
      faction: ["lyra"],
      rarity: ["srank"]
    }
},

//alts
{ 
    name: "Silver Soldier Anby",
    img: "anbyfive",
    opts: {
      faction: ["silver", "hares"],
      rarity: ["srank"],
      altform: true
    }
},

//void hunters
{ 
    name: "Swordmaster",
    img: "npcswordmaster.png",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Lieutenant Colonel Dan",
    img: "npcbatyasida.png",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Sunbringer",
    img: "npcsunbringer.png",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Joyous",
    img: "src/assets/chars/npcjoyous.png",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Colonel Vike",
    img: "src/assets/chars/npcvike.png",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Leader of the Falkenhayn Mercenary Troupe",
    img: "src/assets/chars/npcvoidmercenaryboss.png",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Professor Arche",
    img: "src/assets/chars/npcarche.png",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},

//idols
{ 
    name: "Robot girl",
    img: "src/assets/chars/idolyutane.png",
    opts: {
      faction: ["idols"],
      rarity: ["norank"],
      future: true
    }
}, 
{ 
    name: "Angel girl",
    img: "src/assets/chars/idolsariel.png",
    opts: {
      faction: ["idols"],
      rarity: ["norank"],
      future: true
    }
}, 
{ 
    name: "Blonde girl",
    img: "src/assets/chars/idolchinatsu.png",
    opts: {
      faction: ["idols"],
      rarity: ["norank"],
      future: true
    }
}, 

//yunkui
{ 
    name: "Yi Xuan",
    img: "src/assets/chars/yixuan.png",
    opts: {
      faction: ["yunkyi"],
      rarity: ["norank"],
      future: true
    }
}, 
{ 
    name: "Jufufu",
    img: "src/assets/chars/jufufu.png",
    opts: {
      faction: ["yunkyi"],
      rarity: ["norank"],
      future: true
    }
}, 
{ 
    name: "Pan Yinhu",
    img: "src/assets/chars/panyinhu.png",
    opts: {
      faction: ["yunkui"],
      rarity: ["norank"],
      future: true
    }
}, 
  
//npc
{ 
    name: "Asha",
    img: "src/assets/chars/npcasha.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
}, 
{ 
    name: "Bellum",
    img: "src/assets/chars/npcbellum.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Bertha",
    img: "src/assets/chars/npcbertha.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Bid Daddy",
    img: "src/assets/chars/npcbigdaddy.png",
    opts: {
      faction: ["soc"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Justin Bringer",
    img: "src/assets/chars/npcbringer.png",
    opts: {
      faction: ["neps"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Chop",
    img: "src/assets/chars/npcchop.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Coco",
    img: "src/assets/chars/npccoco.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Elfy",
    img: "src/assets/chars/npcelfy.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Enzo",
    img: "src/assets/chars/npcenzo.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Eous",
    img: "src/assets/chars/npceous.png",
    opts: {
      faction: ["random"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Girl A",
    img: "src/assets/chars/npcgirla.png",
    opts: {
      faction: ["silver"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Unknown thiren guy",
    img: "src/assets/chars/npcguyidk.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Hartman Ravenclock",
    img: "src/assets/chars/npchartmanravenclock.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Howl",
    img: "src/assets/chars/npchowl.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Inky",
    img: "src/assets/chars/npcinky.png",
    opts: {
      faction: ["random"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Lyla",
    img: "src/assets/chars/npclyla.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Miyabi's mother",
    img: "src/assets/chars/npcmiyabimom.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Monica",
    img: "src/assets/chars/npcmonica.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Mors",
    img: "src/assets/chars/npcmors.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Null_Face",
    img: "src/assets/chars/npcnullface.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Old Duyi",
    img: "src/assets/chars/npcoldduyi.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Perlman",
    img: "src/assets/chars/npcperlman.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Pompey",
    img: "src/assets/chars/npcpompey.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Rain",
    img: "src/assets/chars/npcrain.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Ray",
    img: "src/assets/chars/npcray.png",
    opts: {
      faction: ["nedf"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Roland",
    img: "src/assets/chars/npcrolands.png",
    opts: {
      faction: ["nedf"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Sarah",
    img: "src/assets/chars/npcsarah.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Unknown guy",
    img: "src/assets/chars/npcseriousguy.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Sjal",
    img: "src/assets/chars/npcsjal.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Susie",
    img: "src/assets/chars/npcsusie.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Tin Master",
    img: "src/assets/chars/npctinmaster.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Tomiya",
    img: "src/assets/chars/npctomiya.png",
    opts: {
      faction: ["neps"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Twiggy",
    img: "src/assets/chars/npctwiggy.png",
    opts: {
      faction: ["silver"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Venus",
    img: "src/assets/chars/npcvenus.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Joran De Winter",
    img: "src/assets/chars/npcwinter.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Tessa De Winter",
    img: "src/assets/chars/npcwinter2.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      npc: true
    }
},

//2.x teaser unknowns
{ 
    name: "Racoon girl",
    img: "src/assets/chars/racoongirl.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      future: true
    }
}, 
{ 
    name: "Alice",
    img: "src/assets/chars/alice.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      future: true
    }
}, 
{ 
    name: "Zhao",
    img: "src/assets/chars/zhao.png",
    opts: {
      faction: ["nofact"],
      rarity: ["norank"],
      future: true
    }
}
];
