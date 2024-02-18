// Handle exception by two ways:
// 1. throwing a known exception
// 2. Try catch block

// create a function to find the months
var monthName = ""
function getMonthName(monthNum) {
    const months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ]

    if(months[monthNum]) {  // "Dec" -> true
        return months[monthNum] // "Dec"
    } else {
        throw new Error("Invalid Month Number")
    }
}
//Runtime error or exception
try {
    monthName = getMonthName(12)
    console.log(monthName)
} catch(e) { //e -> exception/error
 console.log(e)
 console.log("Unknown month!")
}

