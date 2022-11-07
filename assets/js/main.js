// level 2_1

let array = [];

for (let i = 1; i <= 9; i += 1) {
    array.push(`image_00${i}.jpg`)
}
for (let i = 10; i <= 99; i += 1) {
    array.push(`image_0${i}.jpg`)
}
array.push(`image_100.jpg`)

console.log(array)

function imageArray() {
    let returnArray = [];
    for (let i = 1; i <= 100; i += 1) {
        if (i <= 9) {
            array.push(`image_00${i}.jpg`)
        } else if ((i >= 10) && (i < 100)) {
            array.push(`image_0${i}.jpg`)
        } else {
            array.push(`image_${i}.jpg`)
        }
    };
    console.log(returnArray)
}

imageArray()



// level 2_2


function createLoop() {
    let array1 = [];
    let output = document.getElementById("loopOutput");
    const numberOs = array1.toString();
    let input;
    let o = "o";

    for (input = Number(document.getElementById("userInput").value); input > 0; input--) {
        array1.push(o);
    }

    output.innerHTML = `L${numberOs}p`.replaceAll(",", "");

    console.log(array1);
    console.log(output.innerHTML);
}



