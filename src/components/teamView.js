import { useEffect, useState } from "react";
import { getTeamInfo } from "../api/getTeamInfo";
import { getTeamRecentMatches } from "../api/getTeamRecentMatches";
import TeamViewMainClubInfo from "./teamViewMainClubInfo";
import TeamViewPlayersInfo from "./teamViewPlayersInfo";
import TeamViewRecentMatches from "./teamViewRecentMatches";
import ResponseFail from "./responseFail";

export default function TeamView({ team, setViewState }) {
	const [loading, setLoading] = useState(false);
	const [teamInfo, setTeamInfo] = useState(null);
	const [recentMatches, setRecentMatches] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const dataTeamInfo = await getTeamInfo(team.id, setError);
			const dataTeamRecentMatches = await getTeamRecentMatches(
				team.id,
				setError
			);
			console.log(dataTeamRecentMatches, dataTeamInfo);
			if (dataTeamInfo && dataTeamRecentMatches) {
				setTeamInfo(dataTeamInfo);
				setRecentMatches(dataTeamRecentMatches);
				setError(false)
			}
			setLoading(false);
		}
		fetchData();
	}, [team]);

	return (
		<div className="p-6 max-w-7xl mx-auto">
			{loading && <p className="text-center text-gray-500">Loading...</p>}
			{error && <ResponseFail />}
			<button
				onClick={() => setViewState({ view: "PLTable", teamView: null })}
				className="mb-6 px-4 py-2 bg-blue-600 text-white rounded"
			>
				← Back to Standings
			</button>

			{teamInfo && recentMatches && (
				<>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
						<TeamViewMainClubInfo teamInfo={teamInfo} />
						<TeamViewRecentMatches
							recentMatches={recentMatches}
							teamInfo={teamInfo}
						/>
					</div>

					<TeamViewPlayersInfo teamInfo={teamInfo} />
				</>
			)}
		</div>
	);
}
