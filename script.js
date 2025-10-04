const API_BASE = "https://767ef729-5e14-4e6a-a039-2b095606745e-00-132ci6akf1tqt.sisko.replit.dev";

async function loadGroup(group) {
  try {
    document.getElementById("error").innerText = "";
    const res = await fetch(`${API_BASE}/${group}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();

    const tbody = document.getElementById("standings-body");
    tbody.innerHTML = "";

    data.forEach(team => {
      const row = `<tr>
        <td>${team.name}</td>
        <td>${team.played}</td>
        <td>${team.wins}</td>
        <td>${team.losses}</td>
        <td>${team.points}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  } catch (err) {
    document.getElementById("error").innerText = "Error loading data.";
    console.error(err);
  }
}

// Load Group A by default
loadGroup("A");
