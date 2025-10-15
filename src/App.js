import { useEffect, useState } from "react";

export default function App() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    async function getTable() {
      try {
        const res = await fetch("http://localhost:5000/api/table");
        const data = await res.json();

        const standingsTable = data.standings[0].table;
        setTable(standingsTable);
      } catch (err) {
        console.error("Błąd pobierania danych:", err);
      }
    }

    getTable();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Premier League Standings</h1>
      <div>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Team</th>
              <th className="px-4 py-2 border">Played</th>
              <th className="px-4 py-2 border">Won</th>
              <th className="px-4 py-2 border">Draw</th>
              <th className="px-4 py-2 border">Lost</th>
              <th className="px-4 py-2 border">GF</th>
              <th className="px-4 py-2 border">GA</th>
              <th className="px-4 py-2 border">GD</th>
              <th className="px-4 py-2 border">Points</th>
            </tr>
          </thead>
          <tbody>
            {table.map((team) => (
              <tr key={team.team.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{team.position}</td>
                <td className="px-4 py-2 border flex items-center gap-2">
                  <img
                    src={team.team.crest}
                    alt={team.team.name}
                    className="w-6 h-6 object-contain"
                  />
                  {team.team.name}
                </td>
                <td className="px-4 py-2 border text-center">{team.playedGames}</td>
                <td className="px-4 py-2 border text-center">{team.won}</td>
                <td className="px-4 py-2 border text-center">{team.draw}</td>
                <td className="px-4 py-2 border text-center">{team.lost}</td>
                <td className="px-4 py-2 border text-center">{team.goalsFor}</td>
                <td className="px-4 py-2 border text-center">{team.goalsAgainst}</td>
                <td className="px-4 py-2 border text-center">{team.goalDifference}</td>
                <td className="px-4 py-2 border text-center">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
