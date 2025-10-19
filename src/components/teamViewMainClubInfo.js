export default function TeamViewMainClubInfo({ teamInfo }) {
	return (
		<div className="bg-white p-6 border border-gray-500">
			<div className="flex items-center gap-4 mb-4">
				<img src={teamInfo.crest} alt={teamInfo.name} className="w-20 h-20" />
				<div>
					<h1 className="text-3xl font-bold mb-1">{teamInfo.name}</h1>
				</div>
			</div>

			<div className="space-y-2 text-sm">
				<p>
					<strong>Founded:</strong> {teamInfo.founded}
				</p>
				<p>
					<strong>Stadium:</strong> {teamInfo.venue}
				</p>
				<p>
					<strong>Address:</strong> {teamInfo.address}
				</p>
				<p>
					<strong>Website:</strong>
					<a
						href={teamInfo.website}
						target="_blank"
						className="text-blue-600 hover:underline"
					>
						{teamInfo.website}
					</a>
				</p>
			</div>

			<div className="mt-5">
				<h2 className="text-lg font-bold mb-2">Competitions</h2>
				<div className="flex flex-wrap gap-3">
					{teamInfo.runningCompetitions.map((comp) => (
						<div
							key={comp.id}
							className="flex items-center gap-2 bg-gray-200 border rounded-md px-3 py-1"
						>
							<img src={comp.emblem} alt={comp.name} className="w-5 h-5" />
							<p className="text-sm font-medium">{comp.name}</p>
						</div>
					))}
				</div>
			</div>

			<div className="mt-5 border-t pt-4">
				<h2 className="text-lg font-bold mb-2">Coach</h2>
				<div className="text-sm">
					<p>
						<strong>{teamInfo.coach?.name}</strong>
					</p>
					<p>{teamInfo.coach?.nationality}</p>
					<p>
						Contract: {teamInfo.coach?.contract?.start} –
						{teamInfo.coach?.contract?.until}
					</p>
				</div>
			</div>
		</div>
	);
}
