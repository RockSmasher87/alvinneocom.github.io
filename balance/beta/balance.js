// balance javascript
// written with <3 by alvinneocom on github

/*
    TODO:
    Add branching endings
    Finish years 5-10
    Change game difficulty
    Realism mode
    xinOS version???
    Comment code
*/


let year = 0;
let population = 1000;
// die if population = 0?
let inputreq = true;
let out = document.getElementById("out");
let buttons = document.getElementsByClassName("buttons");
let happiness = 100;
// die if happiness = 0, definitely
let starvation = 0;
// die if starvation = 100
let supplies = 100;
// no immediate death, just slow trickle of gaining starvation if supplies = 0
let gaincoefficient = 1;
// this should help with supply gaining options by limiting the amount of supplies gained
let consumption = 20;
// this is intentional; the user must implement conservation methods and get supplies to win
let infighting = 5;
// infighting; increases over time
let incoef = 1;
// infighting coefficient. increases with improper management.

/*
    removed since none of the formulas use it
    // just does reciprocals
    function reciprocal(n)
    {
        return 1 / n;
    }
*/

// start the game
function start()
{
    document.getElementById("startup").style = "display: none;";
    document.getElementById("game").style = "";
}

// remove button display
function noButtons()
{
    // causes a glitch with the buttons, therefore not necessary
    return;
    // buttons.forEach(element => element.style = "display: none;");
}

// play the game
function game(n)
{
    // various deaths and messages programmed in
    if(year === 11)
    {
        out.innerHTML = "";
        noButtons();
        inputreq = false;
    }
    else if(starvation >= 100) 
    {
        out.innerHTML = "Your journey ends here. After months of starvation, everyone left. Make sure to manage supplies correctly. Your utopian community lasted ";
        out.innerHTML += year;
        out.innerHTML += " years.";
        noButtons();
        inputreq = false;
        return;
    }
    else if(population <= 0)
    {
        out.innerHTML = "Your journey ends here. Your utopian community has failed because everyone left or died. Make sure to make your utopian community attractive. Your utopian community lasted ";
        out.innerHTML += year;
        out.innerHTML += " years.";
        noButtons();
        inputreq = false;
        return;
    }
    else if(happiness <= 0)
    {
        out.innerHTML = "Your journey ends here. Your utopian community failed after months of infighting. This was a common cause of the demise of utopian communities. Make sure to manage infighting properly. Your utopian community lasted ";
        out.innerHTML += year;
        out.innerHTML += " years.";
        noButtons();
        inputreq = false;
        return;
    }
    else if(year <= 10 && inputreq === true)
    {
        out.innerHTML = "";
        if(year > 1 && supplies > 0)
        {
            // supply rules
            supplies -= consumption;
            if(supplies < 0)
            {
                supplies = 0;
            }
        }
        if(year > 1 && supplies === 0)
        {
            // starvation rules; any attempts to fix anything after this are designed to fail.
            starvation += consumption;
            let popcoef = Math.round((year + 20) * Math.log(population) * Math.log(starvation));
            population -= popcoef;
            if(starvation > 100)
            {
                starvation = 100;
            }
            if(population < 0)
            {
                population = 0;
            }
        }
        if(year > 1)
        {
            // might as well put stat rules here
            out.innerHTML += "Supplies: " + supplies + "% | Population: " + population + " | " + "Happiness: " + happiness + "% | Starvation: " + starvation + "%<br>";
            // happiness rules; also designed to kill the user.
            // i can't get the algorithm to work; will do this later.
            infighting += Math.round(incoef * Math.log(happiness));
            happiness -= infighting;
            if(happiness < 0)
            {
                happiness = 0;
            }
        }
    }

    // year one rules
    if(year === 1)
    {
        // this is multiple due to the length
        out.innerHTML = "This year will be used as a tutorial year, to teach you how to play the game.<br>";
        out.innerHTML += "Year: ";
        out.innerHTML += year;
        out.innerHTML += " - You'll get an ending after 10 years. There is no &quot;best ending&quot;. There are a few endings.<br>";
        out.innerHTML += "Supplies: ";
        out.innerHTML += supplies;
        out.innerHTML += "% - This is the percentage of supplies you have. You can't have more than 100%. Supplies are used to supply food, build things, etc. etc. When supplies reach 0, starvation starts.<br>";
        out.innerHTML += "Population: ";
        out.innerHTML += population;
        out.innerHTML += " - This is the amount of people in your town. Generally, you want it to be high. There is no limit to how high your population can be. When the population reaches 0, the game ends.<br>";
        out.innerHTML += "Happiness: ";
        out.innerHTML += happiness;
        out.innerHTML += "% - This is the percentage of happy people in your utopian community. You want this to be above 50% most of the time. Below that, infighting can start. At 0%, the game ends.<br>";
        out.innerHTML += "Starvation: ";
        out.innerHTML += starvation;
        out.innerHTML += "% - This is the percentage of starving people in your town. Generally, you want this to be below 50% to be safe. At 100%, the game ends.<br>";
        out.innerHTML += "Now, press a random button for a prize. Each one is a minor buff which will help you win the game."
    }
    // from here on out, there aren't very many comments. however, the code is extremely readable and explains itself.
    // most of this is just storyline.
    else if(year === 2)
    {
        // prize 1 is population
        // prize 2 is gain coef
        // prize 3 is supplies
        if(n === 1)
        {
            population += 250;
            out.innerHTML += "Some people decided to visit your town and recommended it to their friends. Their friends recommended the town to their friends, and... you get it. Population increased by 250 (takes effect next year).<br>";
        }
        else if(n === 2)
        {
            gaincoefficient += 0.25;
            out.innerHTML += "Turns out the area where you settled has lots of resources and abandoned places. You will have a minor supply earning buff for the rest of the game (takes effect next year).<br>";
        }
        else if(n === 3)
        {
            supplies = 125;
            out.innerHTML += "Your supply chambers can fit more than you thought. Your supplies are now above 100%. (Note: You cannot earn more than 100% supplies)<br>";
        }
        out.innerHTML += "The people are happy with you right now. Everything's good. What's your first move?<br>1. Tell the people to be considerate of the environment. | 2. Tell the people to act as one group. | 3. Tell the people to do whatever they want.<br>";
    }
    else if(year === 3)
    {
        if(n === 1)
        {
            out.innerHTML += "You've lowered supply consumption quite a bit. Good job!<br>";
            consumption -= 5;
        }
        else if(n === 2)
        {
            out.innerHTML += "People are acting as one for once. Infighting will be lowered a bit. Everyone was so inspired by your talk they lowered their supply consumption a bit too.<br>";
            incoef -= 0.99;
            consumption -= 5;
        }
        else if(n === 3)
        {
            out.innerHTML += "Seriously? Did you think that would fix anything? Everyone's mad at you. Look at what you've done.<br>";
            incoef += 10;
        }
        out.innerHTML += "The people have talked, and they want materials to make a farm. It will take supplies at first, but will supposedly get more supplies in the long run.<br>1. Accept | 2. Deny | 3. Accept, but make a small farm.<br>";
    }
    else if(year === 4)
    {
        if(n === 1)
        {
            let probability = Math.floor(Math.random() * 100);
            if(probability <= 25)
            {
                supplies = 100;
                starvation = 0;
                gaincoefficient += 0.5;
                incoef -= 0.5;
                out.innerHTML += "You took the chance, and you did it! The farm's open. Your supplies are back to normal again. Plus, you get a supply gaining buff for later.<br>";
            }
            else
            {
                supplies = 75;
                starvation = 0;
                gaincoefficient = 0.75;
                incoef += 0.5;
                out.innerHTML += "You took the chance, and you failed... The farm was a large failure, and increased infighting. You got some supplies, though.<br>";
            }
        }
        else if(n === 2)
        {
            incoef += 0.75;
            gaincoefficient += 0.25;
            out.innerHTML += "Refusing the farm only made things worse. Infighting has been increased, but you have a small supply earning buff for later.<br>";
        }
        else if(n === 3)
        {
            let probability = Math.floor(Math.random() * 100);
            if(probability <= 20)
            {
                supplies = 100;
                starvation = 0;
                gaincoefficient += 0.5;
                incoef -= 0.5;
                out.innerHTML += "Miraculously, you did it. The farm's open. Your supplies are back to normal again, you get a supply gaining buff, and infighting is down.<br>";
            }
            else
            {
                incoef += 0.5;
                gaincoefficient = 0.75;
                out.innerHTML += "The farm was destined to fail. Your poor decisions have just created more infighting...<br>"; 
            }
        }
        out.innerHTML += "The people want to make some parks so that people can enjoy themselves there. Do it?<br>1. Sure. | 2. No. | 3. I hate parks, they give me bad memories.<br>";
    }
    else if(year === 5)
    {
        if(n === 1)
        {
        }
        else if(n === 2)
        {
        }
        else if(n === 3)
        {
        }
    }
}

// input processing
function input(n)
{
    // no input if not needed
    if(!inputreq)
    {
        alert("Input not accepted.");
        return;
    }
    // year 0 rules
    if(year === 0)
    {
        // start game (normal mode)
        if(n === 1)
        {
            year++;
            game(0);
        }
        // start game (realism mode)
        if(n === 2)
        {
            alert("Sorry, but realism mode is not available yet.");
            return;
        }
        // deny input
        if(n === 3)
        {
            alert("Funny. Try again.");
            return;
        }
    }
    else
    {
        // for all other years there are 3 options, so this doesn't matter.
        year++;
        game(n);
    }
}