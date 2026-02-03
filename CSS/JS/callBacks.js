// function welcome(name, callback) {
//     console.log("Welcome " + name);
//     callback();
// }

// function hello(){
//     console.log("Hello Sakshi, How are you?");
// }
// function bye(){
//     console.log("Goodbye Sakshi, See you later!");
// }

// welcome("Sakshi", hello);
// welcome("Sakshi", bye);

// console.log("starting execution");

// setTimeout(() => {
//     console.log("This message is shown after 3 seconds");
// }, 3000);

// console.log("finishing execution");

// setInterval(() => {
//     console.log("This message is shown every 2 seconds");
// }, 2000);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => createTable(data))
.catch(error => console.log("Error:", error));

function createTable(data) {
    const table = document.getElementById("usersTable");

    // Clear table if reloaded
    table.innerHTML = "";

    // ---------- Create Table Header ----------
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Use keys from first object
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // ---------- Create Table Body ----------
    const tbody = document.createElement("tbody");

    data.forEach(item => {
        const row = document.createElement("tr");

        Object.values(item).forEach(value => {
            const td = document.createElement("td");

            // If value is object (address, company), convert to string
            if (typeof value === "object") {
                td.textContent = JSON.stringify(value);
            } else {
                td.textContent = value;
            }

            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}
