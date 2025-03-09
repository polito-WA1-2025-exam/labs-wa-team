// Lab01 - Exam topic: Guess Who?

import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
dayjs.extend(localizedFormat);

// /**
//  * @constructor Constructs a `BaseStats` object, used to collect the basic statistics of a `Pokémon` (all on a scal of 1 to 15)
//  * @param {Number} hp HP (Health Points) of the `Pokémon`
//  * @param {Number} attack Attack level of the `Pokémon`
//  * @param {Number} defense Defense level of the `Pokémon`
//  * @param {Number} specialAttack Special attack level of the `Pokémon`
//  * @param {Number} specialDefense Special defense level of the `Pokémon`
//  * @param {Number} speed Speed level of the `Pokémon`
//  * @return {BaseStats} `BaseStats` object
//  */
// function BaseStats(hp, attack, defense, specialAttack, specialDefense, speed) {
//     this.hp = hp;
//     this.attack = attack;
//     this.defense = defense;
//     this.specialAttack = specialAttack;
//     this.specialDefense = specialDefense;
//     this.speed = speed;

//     /**
//      * Returns all the information about the `BaseStats` object in string format  
//      * @returns string representation of `BaseStats` object 
//      */
//     this.toString = () => {
//         return `{ HP = ${this.hp}, Attack = ${this.attack}, Defense = ${this.defense}, Special Attack = ${this.specialAttack}, Special Defense = ${this.specialDefense}, Speed = ${this.speed} }`;
//     }    
// }

// /**
//  * @constructor Constructs a `Pokémon` object
//  * @param {String} name Name of the `Pokémon`
//  * @param {Number} id Identification number of the `Pokémon` 
//  * @param {String} description Description of the `Pokémon`
//  * @param {Number} height Height of the `Pokémon` (in centimeters)
//  * @param {Number} weight Weight of the `Pokémon` (in pounds)
//  * @param {String} gender Gender of the `Pokémon`(male or female)
//  * @param {String} category Category of the `Pokémon`
//  * @param {String} ability Ability of the `Pokémon`
//  * @param {Array<String>} type List of types of the `Pokémon` (ex: fire, water, etc.)
//  * @param {Array<String>} weakness List of weaknesses of the `Pokémon` (ex: water, electric, etc.)
//  * @param {BaseStats} stats Basic statistics of the `Pokémon` (HP, attack, defense, special attack, special defense, speed)
//  * @param {Array<String>} evolutions Evolution list of the `Pokémon`
//  * @return {Pokémon} `Pokémon` object
//  */
// function Pokémon(name, id, description, height, weight, gender, category, ability, type, weakness, stats, evolutions) {
//     this.name = name;
//     this.id = id;
//     this.description = description;
//     this.height = height;
//     this.weight = weight;
//     this.gender = gender;
//     this.category = category;
//     this.ability = ability;
//     this.type = type;
//     this.weakness = weakness;
//     this.stats = stats;
//     this.evolutions = evolutions || [];

//     /**
//      * Returns all the information about the `Pokémon` object in string format  
//      * @returns string representation of `Pokémon` object 
//      */
//     this.toString = () => {
//         return  `\tName: ${this.name}\n\tID: #${String(this.id).padStart(4, "0")}\n\tDescription: ${this.description}\n\tHeight: ${this.height} cm\n\t` +
//                 `Weight: ${this.weight} lbs\n\tGender: ${this.gender}\n\tCategory: ${this.category}\n\tAbility: ${this.ability}\n\t` + 
//                 `Type: ${this.type.toString()}\n\tWeakness: ${this.weakness}\n\tStats: ${this.stats.toString()}\n\t` +
//                 `Evolutions: ${this.evolutions ? this.evolutions : "There are no other evolutions for this Pokémon"}`;
//     }
// }

/**
 * Extract a random selection of the elements of the input array, generating and returning another array of the specified length 
 * @param {Array<any>} array Input array from which to extract the subsets of elements
 * @param {Number} numOfElements Number of elements to be selected from the input array (output array's length)
 * @returns {Array<any>} Output array generated taking a random subset of inputs elements
 */
function randomSelector(array, numOfElements) {
    const selection = [];
    while(selection.length != numOfElements) {
        const index = Math.round(Math.random() * (array.length - 1));
        if(!selection.find(el => el === array[index]))
            selection.push(array[index]);
    }
    return selection;
}

// TEST CODE
// const test = [1, 2, 3, 4, 5, 6, 7]
// console.log(test);
// let randSampleTest = randomSelector(test, 3);
// console.log(randSampleTest);
// randSampleTest = randomSelector(test, 1)[0];
// console.log(randSampleTest);

/**
 * @constructor Constructs a `Pokémon` object
 * @param {String} name Unique name of the `Pokémon`
 * @param {Number} id Unique ID of the `Pokémon` 
 * @param {String} gender Gender of the `Pokémon`(male, female, male/female, unknown)
 * @param {Array<String>} type List of types of the `Pokémon` (ex: fire, water, etc.)
 * @param {Array<String>} weakness List of weaknesses of the `Pokémon` (ex: water, electric, etc.)
 * @param {Array<String>} evolutions Evolution list of the `Pokémon`
 * @return {Pokémon} `Pokémon` object
 */
function Pokémon(name, id, gender, type, weakness, evolutions) {
    this.name = name;
    this.id = id;
    this.gender = gender;
    this.type = type;
    this.weakness = weakness;
    this.evolutions = evolutions || [];

    /**
     * Returns all the information about the `Pokémon` object in string format  
     * @returns string representation of `Pokémon` object 
     */
    this.toString = () => {
        return  `\tName: ${this.name}\n\tID: #${String(this.id).padStart(4, "0")}\n\tGender: ${this.gender}\n\t` + 
                `Type: ${this.type.toString()}\n\tWeakness: ${this.weakness}\n\t` +
                `Evolutions: ${this.evolutions.length !== 0 ? this.evolutions : "This Pokémon does not evolve"}`;
    }
}

// TEST CODE
const testPokémon1 = new Pokémon("Charizard", 6, "Male/Female", ["Fire", "Flying"], ["Water", "Electric", "Rock"], ["Charmander", "Charmeleon", "Charizard"]);
// console.log(testPokémon1.toString());
const testPokémon2 = new Pokémon("Squirtle", 7, "Male/Female", ["Water"], ["Grass", "Electric"], ["Squirtle", "Wartortle", "Blastoise"]);
// console.log("\n" + testPokémon2.toString());
const testPokémon3 = new Pokémon("Ivysaur", 2, "Male/Female", ["Grass", "Poison"], ["Fire", "Ice", "Flying", "Psychic"], ["Bulbasaur", "Ivysaur", "Venusaur"]);
// console.log("\n" + testPokémon3);
const testPokémons = [testPokémon1, testPokémon2, testPokémon3];
testPokémons.push(new Pokémon("Darkrai", 491, "Unknown", ["Dark"], ["Fighting, Bug, Fairy"], null));
testPokémons.push(new Pokémon("Pikachu", 25, "Male/Female", ["Electric"], ["Ground"], ["Pihcu", "Pikachu", "Raichu"]));

/**
 * @constructor Constructs a `Catalog` object implementing Pokémon's domain
 * @param {Array<Pokémon>} pokémons Array of Pokémons
 * @return {Array<Pokémon>} List of Pokémons that can be selected for a given Match
 */
function Catalog(pokémons) {
    this.pokémons = pokémons || [];

    /**
     * Add the given Pokémon to the `Catalog
     * @param {Pokémon} pokémon Pokémon to be added
     */
    this.add = (pokémon) => {
        if(!this.pokémons.find(p => p.id === pokémon.id))
            this.pokémons.push(pokémon);
    }

    /**
     * Remove from the `Catalog` the Pokémon with the given ID
     * @param {Number} pokémonId  ID of the Pokémon to be removed 
     */
    this.remove = (pokémonId) => {
        this.pokémons = this.pokémons.filter(p => p.id != pokémonId);
    }

    /**
     * Prints in a clear way all the information about the `Catalog` object  
    */
    this.print = () => console.log(`Pokémon's Catalog:\n${this.toString()}`);

    /**
     * Returns all the information about the `Catalog` object in string format  
     * @returns string representation of `Catalog` object 
     */
    this.toString = () => {
        let str = "";
        let cnt = 0;
        for(const p of this.pokémons)
            str += p.toString() + (cnt++ == this.pokémons.length - 1 ? "" : "\n\n");
        return str;
    }
}

// TEST CODE
const testCatalog = new Catalog(testPokémons);
// const testCatalog = new Catalog(testPokémon1, testPokémon2);
// testCatalog.add(testPokémon3);
// testCatalog.add(testPokémon1);
testCatalog.print();
// testCatalog.remove(testPokémon2.id);
// testCatalog.print();

/**
 * @constructor Constructs a `Player` object
 * @param {Boolean} loggedIn Status of the `Player` (true: logged-in user, false: anonymous user)
 * @param {String} username Username of the `Player` used to log-in (null for anonymous users)
 * @param {Number} id Unique ID of the `Player` (null for anonymous users)
 * @param {Array<Macth>} history History of `Player`'s played Matches (list containing only the Matches completed by the user, null for anonymous users)
 * @param {Number} totScore Total score of the `Player` (sum of all scores obtained by the user, undefined for anonymous users)
 */
function Player(loggedIn, username, id, history, totScore) {
    this.loggedIn = loggedIn;
    this.username = this.loggedIn ? username : null;
    this.id = this.loggedIn ? id : null;
    this.history = this.loggedIn ? (history || []) : null;
    this.totScore = this.loggedIn ? totScore : null;

    /**
     * Add a Match to the history of the `Player` and update his total score (only if he's a logged-in user)    
     * @param {Match} match Match to be added to `Player`'s history
     */
    this.addMatch = (match) => { 
        if(this.loggedIn && match.isTerminated) {
            this.history.push(match);
            this.totScore += match.score;
        }
    };

    /**
     * Returns all the information about the `Player` object in string format
     * @returns string representation of `Player` object
     */
    this.toString = () => {
        if(!this.loggedIn)
            return `\tStatus: Anonymous`;  
        return  `\tStatus: ${this.loggedIn ? "Logged-in" : "Anonymous"}\n\tUsername: ${this.username}\n\tID: ${this.id}\n\t` +
                `History: ${this.history ? this.history.map(m => m.toStringForHistory()) : this.history}\n\tTotal score: ${this.totScore}\n`;
    }
}

// TEST CODE
const testPlayer1 = new Player(true, "TestLoggedPlayer1", 1, undefined, 0);
const testPlayer2 = new Player(false, "TestAnonymousPlayer", 3, null, 20);
// console.log("\nPlayer Info:\n" + testPlayer1.toString());
// console.log("Player Info:\n" + testPlayer2.toString());

/**
 * @constructor Constructs a `Match` object
 * @param {Number} id Unique ID of the `Match`
 * @param {Catalog} catalog Catalog from which the list of Pokémons used for the `Match` will be selected
 * @param {Player} player Player of the `Match`
 * @param {dayjs|String} date Date of the `Match` (by default it's null)
 * @param {Number} difficulty Difficulty level of the `Match`(1: easy = 12 Pokémons, 2: medium = 24 Pokémons, 3: hard = 36 Pokémons)
 * @param {Catalog} pokémons Array of Pokémons (smaller Catalog) randomly extracted from the available Catalog for this `Match`
 * @param {Array<Guess>} guesses Set of Guesses of the `Match`
 * @return {Match} `Match` object
 */
function Match(id, catalog, player, date, difficulty, pokémons, guesses) {
    this.id = id;
    this.catalog = catalog;
    this.player = player;
    this.date = dayjs(date) || null;
    this.difficulty = difficulty;
    this.pokémons = pokémons || new Catalog(randomSelector(this.catalog.pokémons, 12 * this.difficulty));
    this.secretPokémon = randomSelector(this.catalog.pokémons, 1)[0];  // secret Pokémon that must be guessed by the Player to win the `Match`
    this.isTerminated = false; // status of the `Match` (initially is not terminated)
    this.guesses = guesses || [];
    this.score = 0; // current score of the `Match` (initially is 0)

    /**
     * Changes the status of the `Match` in terminated and, if the Player is a logged-in user then it updates also his history and total score
     * with the information about this `Match`
     */
    this.terminate = () => {
        this.isTerminated = true;
        this.player.addMatch(this);
    }

    this.addGuess = (guess) => {
        this.guesses.push(guess);
        // TODO: update the score of the Match based on the new Guess
        // ...
    }

    /**
     * Prints in a clear way all the information about the `Match` object 
    */
    this.print = () => console.log(this.toString());

    /**
     * Returns all the information about the `Match` object in string format  
     * @returns string representation of `Match` object 
     */
    this.toString = () => {
        return  `\n************************************************** MATCH'S INFO ***************************************************\n` +
                `ID: ${this.id}\nPlayer:\n${this.player.toString().split("\n").map(line => "\t" + line).join("\n")}` + 
                `Date: ${(this.date.isValid()) ? this.date.format('LL') : "null"}\nDifficulty: ${this.difficulty}\n` +                
                `Secret Pokémon:\n${this.secretPokémon.toString()}\nSelected Pokémons:\n${this.pokémons.toString()}\n` +
                `Guesses: ${this.guesses ? "{ " + this.guesses.map(g => g.id) + " }" : this.guesses}\nStatus: ${this.isTerminated}\n` +
                `Score: ${this.score}` +
                `\n*******************************************************************************************************************\n`;
    }

    /**
     * Returns partial information about the `Match` object in string format (used for displaying it in the history of a given Player)
     * @returns string representation of `Match` object 
     */
    this.toStringForHistory = () => {
        return  `\n\tDate: ${(this.date.isValid()) ? this.date.format('LL') : "null"}\n\tDifficulty: ${this.difficulty}\n\t` +                
                `Secret Pokémon:\n\t${this.secretPokémon.toString()}\n\tScore: ${this.score}`;
    }
}

// TEST CODE
// const match1 = new Match(1, c1, player1, dayjs(), 1, c1, p2, null, true, 1);
// match1.print();

// 5. Define a constructor for Guess
// Each match consists of a set of guesses. In each guess, the player will select one 
// property from a list, and select one possible value of that property out of the 
// possible value options. Upon confirming this selection, the application will tell 
// the player whether the guess was correct or not (i.e., whether the secret item’s 
// property value matches the player’s guess). The application will then ‘disable’ all 
// the items on-screen that are incompatible with the guess.

/**
 * @constructor Constructs a `Guess` object
 * @param {Number} id ID of the `Guess`
 * @param {Array<Array<any>>} properties Set of properties and corresponding values associated to Pokémon's domain 
 * @param {Boolean} isCorrect Status of the `Guess` (true/false)
 */
function Guess(id, properties, isCorrect) {
    this.id = id;
    this.properties = properties || [];
    this.isCorrect = isCorrect;

    /**
     * Returns all the information about the `Guess` object in string format  
     * @returns string representation of `Guess` object 
     */    
    this.toString = () => {
        // ...
    }
}