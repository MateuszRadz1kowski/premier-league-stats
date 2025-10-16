export default function TeamViewRecentMatches({ recentMatches }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Recent Matches</h2>
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="py-2 px-3">Date</th>
            <th className="py-2 px-3">Competition</th>
            <th className="py-2 px-3 text-center">Match</th>
            <th className="py-2 px-3 text-center">Score</th>
          </tr>
        </thead>
        <tbody>
          {recentMatches.matches.map((match) => (
            <tr
              key={match.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="py-2 px-3">{new Date(match.utcDate).toLocaleDateString()}</td>
              <td className="py-2 px-3 flex items-center gap-2">
                <img
                  src={match.competition.emblem}
                  alt={match.competition.name}
                  className="w-4 h-4"
                />
                {match.competition.name}
              </td>
              <td className="py-2 px-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center gap-1">
                    <img src={match.homeTeam.crest} alt="" className="w-5 h-5" />
                    <span>{match.homeTeam.shortName || match.homeTeam.name}</span>
                  </div>
                  <span className="text-gray-500">vs</span>
                  <div className="flex items-center gap-1">
                    <img src={match.awayTeam.crest} alt="" className="w-5 h-5" />
                    <span>{match.awayTeam.shortName || match.awayTeam.name}</span>
                  </div>
                </div>
              </td>
              <td className="py-2 px-3 text-center font-semibold">
                {match.score.fullTime.home} - {match.score.fullTime.away}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
