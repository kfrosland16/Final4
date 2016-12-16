/**
 * Created by Katlyn on 12/15/16
 *   @author Katlyn Frosland (kfrosland@student.ncmich.edu)
 *   @version 0.0.2
 *   @summary final || created: 12.15.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let AmountOfEachBox;
let taxOnCookies;

function main() {
    if (continueResponse == null) {
        setCookieNames();
        setContinueResponse();
    }
}
}
main();

function welcome() {
    console.log(`\nWelcome to my cookie application: `);
}

main();

function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setCookieNames();
cookieNames[0] = 'Thin Mint';
cookieNames[1] = 'Samoas';
cookieNames[2] = 'Tagalongs';
cookieNames[3] = 'Trefoils';
cookieNames[4] = 'Do-si-dos';
cookieNames[5] = 'Lemonades';
cookieNames[6] = 'Savannah Smiles';
cookieNames[7] = 'Thanks-A-Lot';
cookieNames[8] = 'Toffee-tastic';
cookieNames[9] = 'Trios';
cookieNames[10] = 'Girl Scout Smores';
}

function setAmountOfEachBox
cookie = PROMPT.questionInt(`\nHow many boxes would you like? Enter a number 1-50: 5.00`)
if (cookieNames > 1 || cookieNames < 50) {
    console.log(`\nreturn setCookieNames;
    }
    else {
        cookieNames = cookieNames - 1;
    }
}

function setTaxOnCookies() {
   taxOnCookies = PROMPT.questionINT(`\nThe tax on each box of cookies number of boxes: 1-50 `);
    if (taxOnCookie > 1.20 || taxOnCookie < 0) {
        console.log(`\nIncorrect input please try again: `);
        return setTaxOnCookies(); 
    }
}

function printShowCharge() {
    console.log(`\nYour amount for cookies $${cookieNames[AmountOfEachBox][TaxOnCookies]}
}

