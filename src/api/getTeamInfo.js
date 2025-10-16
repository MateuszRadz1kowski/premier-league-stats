export async function getTeamInfo(teamId) {
  try {
    const res = await fetch(`/v4/teams/${teamId}`, {
      headers: {
        "X-Auth-Token": "35811dfae35243f6a2549f034bcff645",
      },
    });

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Błąd pobierania danych:", err);
    return null;
  }
}
