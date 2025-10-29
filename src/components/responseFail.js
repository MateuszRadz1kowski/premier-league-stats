export default function ResponseFail() {
	return (
		<div
			className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
			role="alert"
		>
			<strong className="font-bold">Error! </strong>
			<p className="block sm:inline">
				Something went wrong. Please try again later. 
			</p>
			<p className="block sm:inline">
				Most probable error is too many requests, please wait few moments
			</p>
		</div>
	);
}
