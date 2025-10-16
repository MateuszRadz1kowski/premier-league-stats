import { useEffect, useState } from "react";
import { getTeamInfo } from "../api/getTeamInfo";
import { getTeamRecentMatches } from "../api/getTeamRecentMatches";
import TeamViewMainClubInfo from "./teamViewMainClubInfo";
import TeamViewPlayersInfo from "./teamViewPlayersInfo";
import TeamViewRecentMatches from "./teamViewRecentMatches";

export default function TeamView({ team, setViewState, currentSeason }) {
  const [loading, setLoading] = useState(false);
  const [teamInfo, setTeamInfo] = useState(null);
  const [recentMatches, setRecentMatches] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const dataTeamInfo = await getTeamInfo(team.id);
      const dataTeamRecentMatches = await getTeamRecentMatches(team.id);
      if (dataTeamInfo && dataTeamRecentMatches) {
        setTeamInfo(dataTeamInfo);
        setRecentMatches(dataTeamRecentMatches);
      }
      setLoading(false);
    }
    fetchData();
  }, [team]);

  if (loading)
    return <p className="text-center text-gray-500 mt-10 text-lg">Loading team data...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <button
        onClick={() => setViewState({ view: "PLTable", teamView: null })}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Standings
      </button>

      {teamInfo && recentMatches && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <TeamViewMainClubInfo teamInfo={teamInfo} />
            <TeamViewRecentMatches recentMatches={recentMatches} />
          </div>

          <TeamViewPlayersInfo teamInfo={teamInfo} />
        </>
      )}
    </div>
  );
}
