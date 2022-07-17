var productions = new Array();

var totalProduce = 0;
let price = 45;
let newPrice = 49;

function totalProduction() {
    var sheds = document.getElementById("sheds");
    var shedNumber = sheds.options[sheds.selectedIndex].text;
    var dailyProduction = txtDailyProd.value;
    // console.log(dailyProduction);
    // console.log(shedNumber);
    var prod = { shed: shedNumber, production: dailyProduction };
    productions.push(prod);
    totalProduce = totalProduce + dailyProduction;
    console.log(productions);
    window.alert("Daily production for " + shedNumber + " added.");
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

    console.log("Total Produc "+totalProduce);
    console.log(selling_price);

    var curDiv = document.getElementById("results");

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
