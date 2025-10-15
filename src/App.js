import { useEffect, useState } from "react";
import { getSeasonStandings } from "./api/getSeasonStandings";
import Table from "./components/table";

export default function App() {
  const [standings, setStandings] = useState(null);
  const [season, setSeason] = useState("2025");
  const [matchday, setMatchday] = useState(38);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getSeasonStandings(season, matchday);
      console.log(data);
      if (data) {
        setStandings(data.standings?.[0]?.table || []);
      }
      setLoading(false);
    }

    fetchData();
  }, [season,matchday]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Premier League Standings</h1>

      <div className="flex justify-center items-center gap-4 mb-6">
  <select
    value={season}
    onChange={(e) => setSeason(e.target.value)}
    className="border p-2 rounded-md text-lg"
  >
    {[2025,2024, 2023, 2022, 2021, 2020, 2019,2018,2017].map((season) => (
      <option key={season} value={season}>
        {season}/{season + 1}
      </option>
    ))}
  </select>

  <input type="number"min={1}max={38}placeholder="Matchday"onChange={(e) => setMatchday(Number(e.target.value))}className="border p-2 rounded-md text-lg w-32"/>
</div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {!loading && standings && standings.length > 0 && (
        <Table standings={standings} />
      )}
    </div>
  );
}
