export default function TeamViewPlayersInfo({ teamInfo }) {
	return (
		<div className="bg-white p-6 border border-gray-500">
			<h2 className="text-2xl font-bold mb-6">Squad</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{teamInfo.squad.map((player) => (
					<div
						key={player.id}
						className="border rounded-md p-3 bg-gray-50 hover:bg-gray-200"
					>
						<h3 className="font-bold text-base mb-1">{player.name}</h3>
						<p className="text-sm text-gray-700">
							<strong>Position:</strong> {player.position}
						</p>
						<p className="text-sm text-gray-700">
							<strong>Nationality:</strong> {player.nationality}
						</p>
						<p className="text-sm text-gray-700">
							<strong>Birth:</strong>
							{new Date(player.dateOfBirth).toLocaleDateString()}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
