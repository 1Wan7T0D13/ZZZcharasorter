dataSetVersion = "2025-04-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Select all Factions",
    key: "faction",
    tooltip: "Check this to sort through all factions",
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
    name: "Future characters",
      key: "future",
      tooltip: "This is for characters who will be released in the future",
      checked: true,
  },
  
  {
    name: "Add notable NPCs",
      key: "npc",
      tooltip: "Check this to add notable NPCs",
      checked: true,
  },

  {
  name: "Select by rarity",
    key: "rarity",
    tooltip: "Check this to sort all rarities",
    checked: true,
    sub: 
    [ 
      {name: "S-Ranks", key: "srank"},
      {name: "A-Ranks", key: "arank"},
      {name: "Unknown Rank", key: "norank"},
    ]
  },
  {
    name: "Add character alts",
      key: "altform",
      tooltip: "Check this to add alternative forms of character",
      checked: true,
  },
  {
    name: "Add skins",
      key: "skin",
      tooltip: "Check this to add skins",
      checked: false,
  },

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
      rarity: ["arank"],
    }
},
{ 
    name: "Billy Kid",
    img: "billy.png",
    opts: {
      faction: ["Hares", "soc"],
      rarity: ["arank"],
    }
},
{ 
    name: "Nekomiya Mana",
    img: "nekomata.png",
    opts: {
      faction: ["hares"],
      rarity: ["srank"],
    }
},

//belobog
{ 
    name: "Koleda Belobog",
    img: "koleda.png",
    opts: {
      faction: ["belobog"],
      rarity: ["srank"],
    }
},
{ 
    name: "Anton Ivanov",
    img: "anton.png",
    opts: {
      faction: ["belobog"],
      rarity: ["arank"],
    }
},
{ 
    name: "Ben Bigger",
    img: "ben.png",
    opts: {
      faction: ["belobog"],
      rarity: ["arank"],
    }
},
{ 
    name: "Grace Howard",
    img: "grace.png",
    opts: {
      faction: ["belobog"],
      rarity: ["srank"],
    }
},

///calydon
{ 
    name: "Caesar King",
    img: "caesar.png",
    opts: {
      faction: ["soc"],
      rarity: ["sarnk"],
    }
},
{ 
    name: "Lucy",
    img: "lucy.png",
    opts: {
      faction: ["soc"],
      rarity: ["arank"],
    }
},
{ 
    name: "Burnice White",
    img: "burnice.png",
    opts: {
      faction: ["soc"],
      rarity: ["srank"],
    }
},
{ 
    name: "Lighter",
    img: "lighter.png",
    opts: {
      faction: ["soc"],
      rarity: ["srank"],
    }
},
{ 
    name: "Piper Wheel",
    img: "piper.png",
    opts: {
      faction: ["soc"],
      rarity: ["arank"],
    }
},
{ 
    name: "Pulchra Felini",
    img: "pulchra.png",
    opts: {
      faction: ["soc"],
      rarity: ["arank"],
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
      future: true,
    }
},

//OBOL SQUAAAAAAAAAAAAAAAAAAAAD
{ 
    name: "Soldier 11",
    img: "soldier11",
    opts: {
      faction: ["nedf", "silver"],
      rarity: ["srank"],
    }
},
{ 
    name: "Trigger",
    img: "trigger.png",
    opts: {
      faction: ["nedf"],
      rarity: ["srank"],
    }
},
{ 
    name: "Seed",
    img: "SEED.png",
    opts: {
      faction: ["nedf"],
      rarity: ["norank"],
      future: true,
    }
},
{ 
    name: "Orpheus",
    img: "orpheus.png",
    opts: {
      faction: ["nedf"],
      rarity: ["norank"],
      future: true,
    }
},
{ 
    name: "Captain Magus (Brujas?)",
    img: "magus.png",
    opts: {
      faction: ["nedf"],
      rarity: ["norank"],
      future: true,
      npc: true,
    }
},

//victoria
{ 
    name: "Rina",
    img: "rina.png",
    opts: {
      faction: ["victoria"],
      rarity: ["srank"],
    }
},
{ 
    name: "Lycaon",
    img: "lycaon.png",
    opts: {
      faction: ["victoria"],
      rarity: ["srank"],
    }
},
{ 
    name: "Corin",
    img: "corin.png",
    opts: {
      faction: ["victoria"],
      rarity: ["arank"],
    }
},
{ 
    name: "Ellen Joe",
    img: "ellen.png",
    opts: {
      faction: ["victoria"],
      rarity: ["sarnk"],
    }
},

//police
{ 
    name: "Zhu Yuan",
    img: "zhuyuan.png",
    opts: {
      faction: ["neps"],
      rarity: ["srank"],
    }
},
{ 
    name: "Jane Doe",
    img: "jane.png",
    opts: {
      faction: ["neps"],
      rarity: ["srank"],
    }
},
{ 
    name: "Seth",
    img: "seth.png",
    opts: {
      faction: ["neps"],
      rarity: ["arank"],
    }
},
{ 
    name: "Qingyi",
    img: "qingyi.png",
    opts: {
      faction: ["neps"],
      rarity: ["srank"],
    }
},

//hsos 6
{ 
    name: "Hoshimi Miyabi",
    img: "miyabi.png",
    opts: {
      faction: ["hand", "void"],
      rarity: ["srank"],
    }
},
{ 
    name: "Yanagi",
    img: "yanagi.png",
    opts: {
      faction: ["hand"],
      rarity: ["srank"],
    }
},
{ 
    name: "Asaba Harumasa",
    img: "harumasa.png",
    opts: {
      faction: ["hand"],
      rarity: ["srank"],
    }
},
{ 
    name: "Soukaku",
    img: "soukaku.png",
    opts: {
      faction: ["hand"],
      rarity: ["arank"],
    }
},

//lyra
{ 
    name: "Astra Yao",
    img: "astra.png",
    opts: {
      faction: ["lyra"],
      rarity: ["srank"],
    }
},
{ 
    name: "Evelyn",
    img: "evelyn.png",
    opts: {
      faction: ["lyra"],
      rarity: ["srank"],
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
    img: "X",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Lieutenant Colonel Dan",
    img: "X",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Sunbringer",
    img: "X",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Joyous",
    img: "X",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Colonel Vike",
    img: "X",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Leader of the Falkenhayn Mercenary Troupe",
    img: "X",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},
{ 
    name: "Professor Arche",
    img: "X",
    opts: {
      faction: ["void"],
      rarity: ["norank"],
      npc: true
    }
},

//idols
{ 
    name: "Robot girl",
    img: "X",
    opts: {
      faction: ["idols"],
      rarity: ["norank"],
      future: true
    }
}, 
{ 
    name: "Angel girl",
    img: "X",
    opts: {
      faction: ["idols"],
      rarity: ["norank"],
      future: true
    }
}, 
{ 
    name: "Blonde girl",
    img: "X",
    opts: {
      faction: ["idols"],
      rarity: ["norank"],
      future: true
    }
}, 

//npcs somewhen idk

];
