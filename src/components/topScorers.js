import { useEffect, useState } from "react";
import { getTopScorers } from "../api/getTopScorers";
import ResponseFail from "./responseFail";

export default function TopScorers({ season, matchday }) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const data = await getTopScorers(season, setError);
			console.log(data);
			if (data) {
				setData(data);
			}
			setLoading(false);
		}
		fetchData();
	}, [season, matchday]);

	return (
		<div className="bg-white p-6 border border-gray-500 w-full max-w-4xl mx-auto">
			{loading && <p className="text-center text-gray-500">Loading...</p>}
			{error && <ResponseFail />}
			{data && (
				<>
					<div className="w-full flex flex-col items-center mb-6 text-center">
						<div className="flex items-center gap-3">
							<img
								src={data.competition.emblem}
								alt={data.competition.name}
								className="w-8 h-8"
							/>
							<h2 className="text-2xl font-bold">
								{data.competition.name} Top Scorers
							</h2>
						</div>
					</div>

					<table className="min-w-full text-sm">
						<thead className="bg-gray-300">
							<tr>
								<th className="py-2 px-3 text-left">#</th>
								<th className="py-2 px-3 text-left">Player</th>
								<th className="py-2 px-3 text-left">Team</th>
								<th className="py-2 px-3 text-center">Matches</th>
								<th className="py-2 px-3 text-center">Goals</th>
								<th className="py-2 px-3 text-center">Assists</th>
							</tr>
						</thead>

						<tbody>
							{data.scorers.map((player, index) => (
								<tr key={player.player.id} className=" hover:bg-gray-100 ">
									<td className="py-2 px-3">{index + 1}</td>

									<td className="py-2 px-3">
										<div className="flex flex-col">
											<p className="font-medium">{player.player.name}</p>
											<p className="text-gray-500 text-xs">
												{player.player.nationality}
											</p>
										</div>
									</td>

									<td className="py-2 px-3">
										<div className="flex items-center gap-2">
											{player.team.crest && (
												<img
													src={player.team.crest}
													alt={player.team.name}
													className="w-5 h-5"
												/>
											)}
											<span>{player.team.shortName}</span>
										</div>
									</td>

									<td className="py-2 px-3 text-center">
										{player.playedMatches}
									</td>

									<td className="py-2 px-3 text-center text-green-400 font-bold">
										{player.goals}
									</td>

									<td className="py-2 px-3 text-center">
										{player.assists ?? "-"}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
		</div>
	);
}
