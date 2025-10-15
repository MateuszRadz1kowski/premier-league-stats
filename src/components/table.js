export default function Table({ standings }) {
  
  return (
    <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 ">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border text-left">Team</th>
                <th className="py-2 px-4 border">Played</th>
                <th className="py-2 px-4 border">Won</th>
                <th className="py-2 px-4 border">Draw</th>
                <th className="py-2 px-4 border">Lost</th>
                <th className="py-2 px-4 border">GD</th>
                <th className="py-2 px-4 border">Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team) => (
                <tr key={team.team.id} className="text-center hover:bg-gray-100">
                  <td className="py-2 px-4 border">{team.position}</td>
                  <td className="py-2 px-4 border text-left flex items-center gap-2">
                    <img
                      src={team.team.crest}
                      alt={team.team.name}
                      className="w-6 h-6"
                    />
                    {team.team.name}
                  </td>
                  <td className="py-2 px-4 border">{team.playedGames}</td>
                  <td className="py-2 px-4 border">{team.won}</td>
                  <td className="py-2 px-4 border">{team.draw}</td>
                  <td className="py-2 px-4 border">{team.lost}</td>
                  <td className="py-2 px-4 border">{team.goalDifference}</td>
                  <td className="py-2 px-4 border font-semibold">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}