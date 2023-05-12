let nums = [1,2,3,4,5];
let nums2 = [6,7,8];

function verificarElementosArray(arr) {
    if(arr.length >=5) {
        console.log("Muitos Elementos");
    } else {
        console.log("poucos elementos");
    }
}

verificarElementosArray(nums);
verificarElementosArray(nums2);