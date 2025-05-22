import { redirect } from 'next/navigation';

export default function EventPage() {
	redirect('/festivals-FAZE-2025');
	return (
		<div>
			<h1>Event Page</h1>
		</div>
	);
}
