export default function TeamViewMainClubInfo({ teamInfo }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border">
      <div className="flex items-center gap-4 mb-4">
        <img src={teamInfo.crest} alt={teamInfo.name} className="w-20 h-20" />
        <div>
          <h1 className="text-3xl font-bold mb-1">{teamInfo.name}</h1>
          <p className="text-gray-600 italic">{teamInfo.clubColors}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <p><strong>Founded:</strong> {teamInfo.founded}</p>
        <p><strong>Stadium:</strong> {teamInfo.venue}</p>
        <p><strong>Address:</strong> {teamInfo.address}</p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={teamInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {teamInfo.website}
          </a>
        </p>
      </div>

      <div className="mt-5">
        <h2 className="text-lg font-semibold mb-2">Competitions</h2>
        <div className="flex flex-wrap gap-3">
          {teamInfo.runningCompetitions.map((comp) => (
            <div
              key={comp.id}
              className="flex items-center gap-2 bg-gray-50 border rounded-md px-3 py-1"
            >
              <img src={comp.emblem} alt={comp.name} className="w-5 h-5" />
              <span className="text-sm font-medium">{comp.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">Coach</h2>
        <div className="text-sm">
          <p><strong>{teamInfo.coach?.name}</strong></p>
          <p>{teamInfo.coach?.nationality}</p>
          <p>
            Contract: {teamInfo.coach?.contract?.start || "?"} –{" "}
            {teamInfo.coach?.contract?.end || "?"}
          </p>
        </div>
      </div>
    </div>
  );
}
