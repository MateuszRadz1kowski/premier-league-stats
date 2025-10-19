import { useEffect, useState } from "react";
import { getSeasonStandings } from "./api/getSeasonStandings";
import Table from "./components/table";
import TeamView from "./components/teamView";
import ResponseFail from "./components/responseFail";
import TopScorers from "./components/topScorers";

export default function App() {
	const [standings, setStandings] = useState(null);
	const [season, setSeason] = useState("2025");
	const [matchday, setMatchday] = useState(38);
	const [loading, setLoading] = useState(false);
	const [viewState, setViewState] = useState({
		view: "PLTable",
		teamView: null,
	});
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const data = await getSeasonStandings(season, matchday, setError);
			console.log(data);
			if (data) {
				setStandings(data.standings?.[0]?.table || []);
			}
			setLoading(false);
		}

		fetchData();
	}, [season, matchday]);

	const randomMatchday = () => {
		const randomDay = Math.floor(Math.random() * 38) + 1;
		const randomSeason =
			Math.floor(Math.random() * [2025, 2024, 2023].length) + 2023;
		setMatchday(randomDay);
		setSeason(randomSeason);
	};

	return (
		<div className="p-6">
			{loading && <p className="text-center text-gray-500">Loading...</p>}
			{error && <ResponseFail />}
			<h1 className="text-3xl font-bold mb-6 text-center">
				Premier League Standings
			</h1>

			{viewState.view == "PLTable" &&
				!loading &&
				standings &&
				standings.length > 0 && (
					<div>
						<div className="flex justify-center items-center mb-6">
							<select
								value={season}
								onChange={(e) => setSeason(e.target.value)}
								className="border p-2 rounded-md text-lg"
							>
								{[2025, 2024, 2023].map((season) => (
									<option value={season}>
										{season}/{season + 1}
									</option>
								))}
							</select>

							<input
								type="number"
								min={1}
								max={38}
								placeholder="Matchday"
								onChange={(e) => setMatchday(e.target.value)}
								className="border p-2 rounded-md text-lg w-32 ml-5"
							/>

							<button
								onClick={randomMatchday}
								className="bg-gray-600 text-white py-2 px-4 rounded-lg ml-5"
							>
								Random Matchday
							</button>
						</div>
						<Table standings={standings} setViewState={setViewState} />
						<TopScorers season={season} matchday={matchday} />
					</div>
				)}
			{viewState.view === "teamView" && (
				<div>
					<TeamView
						team={viewState.teamView}
						setViewState={setViewState}
						currentSeason={season}
					/>
				</div>
			)}
		</div>
	);
}
