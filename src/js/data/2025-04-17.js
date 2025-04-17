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
    img: "X",
    opts: {
      faction: ["hares"],
      rarity: ["arank"]
    }
},
{ 
    name: "Anby Demara",
    img: "X",
    opts: {
      faction: ["hares", "silver"],
      rarity: ["arank"],
    }
},
{ 
    name: "Billy Kid",
    img: "X",
    opts: {
      faction: ["Hares", "soc"],
      rarity: ["arank"],
    }
},
{ 
    name: "Nekomiya Mana",
    img: "X",
    opts: {
      faction: ["hares"],
      rarity: ["srank"],
    }
},

//belobog
{ 
    name: "Koleda Belobog",
    img: "X",
    opts: {
      faction: ["belobog"],
      rarity: ["srank"],
    }
},
{ 
    name: "Anton Ivanov",
    img: "X",
    opts: {
      faction: ["belobog"],
      rarity: ["arank"],
    }
},
{ 
    name: "Ben Bigger",
    img: "X",
    opts: {
      faction: ["belobog"],
      rarity: ["arank"],
    }
},
{ 
    name: "Grace Howard",
    img: "X",
    opts: {
      faction: ["belobog"],
      rarity: ["srank"],
    }
},

///calydon
{ 
    name: "Caesar King",
    img: "X",
    opts: {
      faction: ["soc"],
      rarity: ["sarnk"],
    }
},
{ 
    name: "Lucy",
    img: "X",
    opts: {
      faction: ["soc"],
      rarity: ["arank"],
    }
},
{ 
    name: "Burnice White",
    img: "X",
    opts: {
      faction: ["soc"],
      rarity: ["srank"],
    }
},
{ 
    name: "Lighter",
    img: "X",
    opts: {
      faction: ["soc"],
      rarity: ["srank"],
    }
},
{ 
    name: "Piper Wheel",
    img: "X",
    opts: {
      faction: ["soc"],
      rarity: ["arank"],
    }
},
{ 
    name: "Pulchra Felini",
    img: "X",
    opts: {
      faction: ["soc"],
      rarity: ["arank"],
    }
},

//mockingbird
{ 
    name: "Hugo Vlad Ravenclock",
    img: "X",
    opts: {
      faction: ["mbird"],
      rarity: ["srank"],
      future: true
    }
},
{ 
    name: "Vivian Banshee",
    img: "X",
    opts: {
      faction: ["mbird"],
      rarity: ["sarnk"],
      future: true,
    }
},

//OBOL SQUAAAAAAAAAAAAAAAAAAAAD
{ 
    name: "Soldier 11",
    img: "X",
    opts: {
      faction: ["nedf", "silver"],
      rarity: ["srank"],
    }
},
{ 
    name: "Trigger",
    img: "X",
    opts: {
      faction: ["nedf"],
      rarity: ["srank"],
    }
},
{ 
    name: "Seed",
    img: "X",
    opts: {
      faction: ["nedf"],
      rarity: ["norank"],
      future: true,
    }
},
{ 
    name: "Orpheus",
    img: "X",
    opts: {
      faction: ["nedf"],
      rarity: ["norank"],
      future: true,
    }
},
{ 
    name: "Captain Magus (Brujas?)",
    img: "X",
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
    img: "X",
    opts: {
      faction: ["victoria"],
      rarity: ["srank"],
    }
},
{ 
    name: "Lycaon",
    img: "X",
    opts: {
      faction: ["victoria"],
      rarity: ["srank"],
    }
},
{ 
    name: "Corin",
    img: "X",
    opts: {
      faction: ["victoria"],
      rarity: ["arank"],
    }
},
{ 
    name: "Ellen Joe",
    img: "X",
    opts: {
      faction: ["victoria"],
      rarity: ["sarnk"],
    }
},

//police
{ 
    name: "Zhu Yuan",
    img: "X",
    opts: {
      faction: ["neps"],
      rarity: ["srank"],
    }
},
{ 
    name: "Jane Doe",
    img: "X",
    opts: {
      faction: ["neps"],
      rarity: ["srank"],
    }
},
{ 
    name: "Seth",
    img: "X",
    opts: {
      faction: ["neps"],
      rarity: ["arank"],
    }
},
{ 
    name: "Qingyi",
    img: "X",
    opts: {
      faction: ["neps"],
      rarity: ["srank"],
    }
},

//hsos 6
{ 
    name: "Hoshimi Miyabi",
    img: "X",
    opts: {
      faction: ["hand", "void"],
      rarity: ["srank"],
    }
},
{ 
    name: "Yanagi",
    img: "X",
    opts: {
      faction: ["hand"],
      rarity: ["srank"],
    }
},
{ 
    name: "Asaba Harumasa",
    img: "X",
    opts: {
      faction: ["hand"],
      rarity: ["srank"],
    }
},
{ 
    name: "Soukaku",
    img: "X",
    opts: {
      faction: ["hand"],
      rarity: ["arank"],
    }
},

//lyra
{ 
    name: "Astra Yao",
    img: "X",
    opts: {
      faction: ["lyra"],
      rarity: ["srank"],
    }
},
{ 
    name: "Evelyn",
    img: "X",
    opts: {
      faction: ["lyra"],
      rarity: ["srank"],
    }
},

//alts
{ 
    name: "Silver Soldier Anby",
    img: "X",
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
