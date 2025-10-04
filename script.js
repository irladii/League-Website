// ✅ Set your correct Replit backend URL here
const API_BASE = "https://767ef729-5e14-4e6a-a039-2b095606745e-00-132ci6akf1tqt.sisko.replit.dev/api/standings";

async function loadGroup(group = "") {
  try {
    document.getElementById("error").innerText = "";

    // If no group selected, call the main API
    const url = group ? `${API_BASE}/${group}` : API_BASE;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();
    const tbody = document.getElementById("standings-body");
    tbody.innerHTML = "";

    data.forEach(team => {
      const row = `
  <tr>
    <td>${team.fullname}</td>
    <td>${team.matches_played}</td>
    <td>${team.wins}</td>
    <td>${team.losses}</td>
    <td>${team.points}</td>
  </tr>
`;
        </tr>`;
      tbody.innerHTML += row;
    });
  } catch (err) {
    console.error(err);
    document.getElementById("error").innerText = "Error loading data.";
  }
}

// Automatically load when site opens
window.onload = () => loadGroup();
