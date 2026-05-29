// Get Random Dog Image function by API Calling. 

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);
// })

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (err) {
//         console.log("Error - ", err);
//         return "NO Image Found";
//     }
// }



// Get Random Cat Fact function by API Calling.

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     // console.log(fact);

//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })



// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (err) {
//         console.log("Error - ", err);
//         return "NO Fact Found";
//     }
// }



// Generate Random Dad Joke function using by API. 

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const header = { headers: { Accept: "application/json" } };
//         let res = await axios.get(url, header);
//         console.log(res.data.joke);
//     } catch (err) {
//         console.log(err);
//     }
// }






let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    if (colArr.length === 0) {
        list.innerText = "No college found.";
        return;
    }

    for (col of colArr) {
        console.log(col.name, col["state province"]);
        let li = document.createElement("li");

        let state = col["state-province"] ? col["state-province"] : "N/A";

        li.innerHTML = `<strong>${col.name}</strong><br><small>State: ${state}</small>`;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        console.log("College not found");
        return [];
    }
}
