
module.exports = function transform(arr) {
    
    const arr1 = []
    if (Array.isArray(arr) == false)
        throw new Error();
   
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "--double-next") {
                if (i < arr.length - 1) {
                    arr1.push(arr[i + 1])
                }
            }
            else
            if (arr[i] == "--double-prev") {
                if (i > 0) {
                    arr1.push(arr1[arr1.length - 1])
                };
                }
            else
            if (arr[i] == "--discard-next") {
                if (i < arr.length) {
                    arr1.push(undefined)
                    i += 1
                };
            }
            else
            if (arr[i] == "--discard-prev") {
                if (i > 0) {
                    arr1.pop()  
                }
            }
        else
            arr1.push(arr[i])
    }
    const res = arr1.filter(function (x) {
        return x !== undefined;
    });
    return res
};


//while (typeof (arr[i]) != 'string' && i < arr.length)
//    i++

//if (i + 1 == arr.length || i - 1 < 0) {
//    arr.splice(i, 1)
//    continue
//}
//if ((typeof (arr[i]) == 'string' && typeof (arr[i + 2]) == 'string') && (arr[i] == '--discard-next' && (arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev')))
//    arr.splice(i + 2, 1)

//if (arr[i] == '--discard-next')
//    arr.splice(i, 2)
//if (arr[i] == '--discard-prev')
//    arr.splice(i - 1, 2)
//if (arr[i] == '--double-next')
//    arr[i] = arr[i + 1]
//if (arr[i] == '--double-prev')
//    arr[i] = arr[i - 1]
