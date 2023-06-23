const N = 40
let interval = 700;
// let timeout = interval/4;   //will be using four quarters of time
const heights = []
let animationColor = 'white';
let basecolor = 'red'
isRunning = false;
let status_message = 'Not Running'


$('#root').height(N * 10 + 30)
$('body').css('background-color', 'black')
document.getElementById('status').innerHTML = status_message;
$('#status').css('color', 'white');

function shuffle() {
    heights.sort(() => Math.random() - 0.5);
    for (let i = 0; i < N; i++) {
        $('#root').append(`<div style="background-color:${basecolor};" class="bar" id="${i}"></div`)
        $(`#${i}`).height(heights[i].height * 10 + 10)
    }
}

$(document).ready(function () {
    for (let i = 0; i < N; i++) {
        heights.push({ height: i })
    }
    shuffle()
});

let beginIndex = 0, minimumHeight = 200, minIdx = 0, temp, i = 0, j = 0;

function resetVars() {
    beginIndex = 0, minimumHeight = 200, minIdx = 0, temp, i = 0, j = 0;
}

function animator() {
    let startIndex = beginIndex - 2, endIndex = beginIndex + 6;

    setInterval(() => {
        for (let z = startIndex; z <= endIndex; z++) {
            $(`#${z}`).css('background-color', animationColor);
        }
        startIndex++;
        endIndex++;
        if (startIndex != 0) {
            $(`#${startIndex - 1}`).css('background-color', basecolor);
        }
    }, 7);
}

let sortInterval = null;

function mysortInterval() {
    console.log("called");
    sortInterval = setInterval(() => {
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
        else {
            resetVars();
            status_message = "Not Running";
            document.getElementById('status').innerHTML = status_message;
            clearInterval(sortInterval);
        }
        setTimeout(() => {
            animator()
        }, 100);//350 remaining
    }, 400);

}

$('#start').click(() => {
    if (isRunning) { return }
    else {
        mysortInterval()
        status_message = 'Running'
        document.getElementById('status').innerHTML = status_message;
    }
});

$("#reset").click(() => {
    $("#root").empty();
    clearInterval(sortInterval);
    shuffle()
    status_message = 'Not running'
    document.getElementById('status').innerHTML = status_message;
    resetVars()
});

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