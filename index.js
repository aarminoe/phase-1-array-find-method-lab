// code your solution here
/*
function superbowlWin(array) {
    const foundW = array.find(isW)
    if (foundW.result === 'W') {
        return foundW.year
    }
    else {
        return undefined
    }
}

function isW(element) {
    return element.result === 'W'
}



/*
//Works
function superbowlWin(array) {
    for (const win of array) {
        if (win.result === 'W') {
            return win.year
        }
    }
}
*/


function superbowlWin(array) {
    let obj = array.find(isW)
    return obj.year
}

function isW(element) {
   return element.result === 'W'
}