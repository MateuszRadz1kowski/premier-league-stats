export default function TeamViewRecentMatches({ recentMatches, teamInfo }) {
	function getMatchResult(match) {
		const isHome = match.homeTeam.id === teamInfo.id;
		const homeScore = match.score.fullTime.home;
		const awayScore = match.score.fullTime.away;

		let result = "Draw";
		let resultColor = "text-gray-600";

		if (
			(isHome && homeScore > awayScore) ||
			(!isHome && awayScore > homeScore)
		) {
			result = "Win";
			resultColor = "text-green-600 font-semibold";
		} else if (
			(isHome && homeScore < awayScore) ||
			(!isHome && awayScore < homeScore)
		) {
			result = "Loss";
			resultColor = "text-red-600 font-semibold";
		}

		return { result, resultColor };
	}

	return (
		<div className="bg-white border border-gray-500 p-4 overflow-x-auto">
			<h2 className="text-xl font-bold mb-3">Recent Matches</h2>
			<table className="min-w-full text-sm">
				<thead className="bg-gray-200 text-left">
					<tr>
						<th className="py-2 px-3">Date</th>
						<th className="py-2 px-3">Competition</th>
						<th className="py-2 px-3 text-center">Match</th>
						<th className="py-2 px-3 text-center">Score</th>
						<th className="py-2 px-3 text-center">Result</th>
					</tr>
				</thead>
				<tbody>
					{recentMatches.matches.map((match) => {
						const { result, resultColor } = getMatchResult(match);
						const homeScore = match.score.fullTime.home;
						const awayScore = match.score.fullTime.away;

						return (
							<tr key={match.id} className="border-t hover:bg-gray-100">
								<td className="py-2 px-3">
									{new Date(match.utcDate).toLocaleDateString()}
								</td>

								<td className="py-2 px-3 flex items-center gap-2">
									{match.competition.emblem && (
										<img
											src={match.competition.emblem}
											alt={match.competition.name}
											className="w-4 h-4"
										/>
									)}
									<p>{match.competition.name}</p>
								</td>

								<td className="py-2 px-3 text-center">
									<div className="flex items-center justify-center gap-2">
										<div className="flex items-center gap-1">
											<img
												src={match.homeTeam.crest}
												alt=""
												className="w-5 h-5"
											/>
											<p>{match.homeTeam.shortName}</p>
										</div>
										<span className="text-gray-500">vs</span>
										<div className="flex items-center gap-1">
											<img
												src={match.awayTeam.crest}
												alt=""
												className="w-5 h-5"
											/>
											<p>{match.awayTeam.shortName}</p>
										</div>
									</div>
								</td>

								<td className="py-2 px-3 text-center font-medium">
									{homeScore} - {awayScore}
								</td>

								<td className={`py-2 px-3 text-center ${resultColor}`}>
									{result}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
