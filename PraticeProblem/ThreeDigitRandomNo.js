var a = 1;
var all = new Array();
for (var i = 0; i < 10; i++) {
    var count = 0;
    for (var j = 0; j <  Math.floor(Math.random()*(999-100+1)+100); j++) {
        
        all[i] = count;
        count++;
    }
    console.log("3 digit numbers are " +  count);
}


    var max = Math.max.apply(null, all); // get the max of the array
    all.splice(all.indexOf(max), 1); // remove max from the array
    console.log("2nd largest number " +Math.max.apply(null, all)); // get the 2nd max

    var min = Math.min.apply(null, all); // get the min of the array
    all.splice(all.indexOf(min), 1); // remove min from the array
    console.log("2nd smallest number " +Math.min.apply(null, all)); // get the 2nd min


