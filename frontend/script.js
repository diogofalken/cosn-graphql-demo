async function makeGrapqlCall(query) {
  const res = await fetch("http://0.0.0.0:4000/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({query}),
  });
  const data = await res.json();
  return data;
}

async function getUsers() {
  const res = await fetch("http://0.0.0.0:4000/users");
  const data = await res.json();
  return data;
}

async function getUser(id) {
  const res = await fetch(`http://0.0.0.0:4000/users/${id}`);
  const data = await res.json();
  return data;
}

function createRow({ id, name }) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<th scope="row">${id}</th><td>${name}</td>`;
  return tr;
}

function populateTable(tableId, users) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = "";
  for (const user of users) {
    const tr = createRow(user);
    tbody.appendChild(tr);
  }
}

document.querySelector("#fetch-rest").addEventListener(
  "click",
   async function () {
    // 1. Fetch users

    // 2. For each user, get its name

    // 3. Populate the table with array of users
    populateTable("rest", []);
  },
);

document.querySelector("#fetch-graphql").addEventListener(
  "click",
  async function () {
    // 1. Fetch users

    // 2. Populate the table with array of users
    populateTable("graphql", []);
  },
);
