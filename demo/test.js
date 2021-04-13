async function a() {
    console.log("start a")
    await sleep(1000)
    console.log("finish a")
}

async function b() {
    console.log("start b")
    await sleep(2000)
    console.log("finish b")
}

async function c() {
    console.log("start c")
    await sleep(500)
    console.log("finish c")
}


function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

a();
b();
c();

$.get("https://datasource.com", callback);

function callback(returned_data) {
    visualize_data(returned_data)
}