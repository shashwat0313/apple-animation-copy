const N = 40
let interval = 50;
const heights = []

$('#root').height(N * 10 + 30)

$(document).ready(function () {
    for (let i = 0; i < N; i++) {
        heights.push({ height: i})
    }

    console.log(heights.sort(() => Math.random() - 0.5));

    for (let i = 0; i < N; i++) {
        $('#root').append(`<div class="bar" id="${i}"></div`)
        $(`#${i}`).height(heights[i].height * 10 + 10)
    }
});

let beginIndex = 0, minimumHeight = 200, minIdx = 0, temp, i = 0, j = 0;

function mysortInterval() {
    console.log("called");
    const sortInterval = setInterval(() => {
        console.log('executing');
        if (i < N - 1) {
            minimumHeight = 200;
            for (let j = beginIndex; j < N; j++) {
                if (heights[j].height < minimumHeight) {
                    minimumHeight = heights[j].height;
                    minIdx = j;
                }
            }
    
            temp = heights[beginIndex]
            heights[beginIndex] = heights[minIdx]
            heights[minIdx] = temp
            
            $(`#${beginIndex}`).height(heights[beginIndex].height * 10 + 10)
            $(`#${minIdx}`).height(heights[minIdx].height * 10 + 10)
            
            beginIndex++;
            i++;
        }
        else { clearInterval(sortInterval) }
    }, interval);
}

$('#start').click(function () {
    mysortInterval()
});

// mysortInterval()

// function mySort() {
//     setInterval(() => {
//         r = Math.floor(Math.random()*N);
//         r2 = Math.floor(Math.random()*N);
//         console.log(r);
//     }, 50);
// }

// function mySort2() {
//     let beginIndex = 0, minimumHeight = 200, minIdx = 0, temp;
//     for (let i = 0; i < N - 1; i++) {
//         //find min
//         minimumHeight = 200;
//         for (let j = beginIndex; j < N; j++) {
//             if (heights[j].height < minimumHeight) {
//                 minimumHeight = heights[j].height;
//                 minIdx = j;
//             }
//         }
//         temp = heights[beginIndex]
//         heights[beginIndex] = heights[minIdx]
//         heights[minIdx] = temp

//         $(`#${beginIndex}`).height(heights[beginIndex].height * 10 + 10)
//         $(`#${minIdx}`).height(heights[minIdx].height * 10 + 10)

//         beginIndex++;
//     }
// }

//         $(`#${r2}`).height(r*10)