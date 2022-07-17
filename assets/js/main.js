var productions = new Array();

let totalProduce = 0;
let price = 45;
let newPrice = 49;

function totalProduction() {
    var sheds = document.getElementById("sheds");
    var shedNumber = sheds.options[sheds.selectedIndex].text;

    if(txtDailyProd.value===""){
        window.alert("Please enter daily production of the selected shed.");
        return;
    }

    var dailyProduction = parseInt(txtDailyProd.value);
    // console.log(dailyProduction);
    // console.log(shedNumber);
    var prod = { shed: shedNumber, production: dailyProduction };
    productions.push(prod);
    totalProduce += dailyProduction;
    console.log("Total Produce " + totalProduce);
    console.log(productions);
    window.alert("Daily production for " + shedNumber + " added.");
    txtDailyProd.value = "";

    var curDiv = document.getElementById("totals");

    var newDiv = document.createElement("div");
    var divContent = document.createTextNode("Your production in " + shedNumber + " will be Ksh " + dailyProduction);

    newDiv.appendChild(divContent);

    curDiv.appendChild(newDiv);
}


var months = new Array();
months.push({ days: 31, name: "January" });
months.push({ days: 28, name: "February" });
months.push({ days: 31, name: "March" });
months.push({ days: 30, name: "April" });
months.push({ days: 31, name: "May" });
months.push({ days: 30, name: "June" });
months.push({ days: 31, name: "July" });
months.push({ days: 31, name: "August" });
months.push({ days: 30, name: "September" });
months.push({ days: 31, name: "October" });
months.push({ days: 30, name: "November" });
months.push({ days: 31, name: "December" });

function incomeOverTime(selling_price, time) {
    var totalIncome = 0;
    var totalYearIncome = 0;

    console.log("Total Produc " + totalProduce);
    console.log(selling_price);
    console.log(time);

    var curDiv = document.getElementById("results");
    curDiv.innerHTML = "";

    if(selling_price===""){
        window.alert("Please enter amount per litre to continue.");
        return;
    }

    if(time==""){
        window.alert("Please period to continue.");
        return;
    }


    if (time === "weekly") {
        totalIncome = totalProduce * 7 * selling_price;

        console.log(totalIncome);

        var newDiv = document.createElement("div");
        var divContent = document.createTextNode("Your " + time + " income will be Ksh " + totalIncome);

        newDiv.appendChild(divContent);

        curDiv.appendChild(newDiv);
    } else if (time === "yearly") {
        totalYearIncome = totalProduce * 365 * selling_price;


        var newDiv = document.createElement("div");
        var divContent = document.createTextNode("Your " + time + " income will be Ksh " + totalYearIncome);
        newDiv.appendChild(divContent);

        curDiv.appendChild(newDiv);
    }
}

function wholeYearReport() {

    var curDiv = document.getElementById("results");
    curDiv.innerHTML = "";

    for (var x = 0; x < months.length; x++) {
        var newDiv = document.createElement("div");
        totalIncome = price * totalProduce * months[x].days;
        var divContent = document.createTextNode("Your income for " + months[x].name + " will be Ksh " + totalIncome);
        newDiv.appendChild(divContent);

        curDiv.appendChild(newDiv);

    }
}
