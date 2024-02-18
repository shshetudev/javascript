// General structure of try..catch
/**
 * try {
 *  // Exception/Error throwing code -> NumberFormatException
 * } catch(Exception e) {
 *  // We will handle this exception here
 * } finally {
 *  // Whatever happens this block will execute
 * }
 */

function getMonthName(month) {
    const months = [
       "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]; // Array[String]
    // IndexOutOfBoundError/Exception

    if(months[month]) { // months[1]
        return months[month];
    } else {
        throw new Error("Invalid Month number")
    }
}

function handleError(exception) { // exception -> argument
    console.log(exception)
}

function close() {
    console.log("Closing the program")
}
/////////////////////////// Demonstration //////////
let myMonth = -1
try {
    // statements to try
    let monthName = getMonthName(myMonth)
    console.log(monthName)
}catch(e) {
    handleError(e)
} finally {
    close()
}