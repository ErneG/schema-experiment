import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Calendar, Clock, Utensils, Wrench, Music } from 'lucide-react';

export const metadata = {
	title: 'Creative Fusion – Festivāls FĀZE',
	description:
		'Where technology meets culture, and innovation meets tradition. Explore our world of music, food, and DIY electronics.',
	openGraph: {
		title: 'Creative Fusion',
		description:
			'Where technology meets culture, and innovation meets tradition. Explore our world of music, food, and DIY electronics.',
		url: 'https://your-domain.com/',
		images: [{ url: 'https://your-domain.com/images/cover.webp' }],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Creative Fusion',
		description:
			'Where technology meets culture, and innovation meets tradition. Explore our world of music, food, and DIY electronics.',
		images: ['https://your-domain.com/images/cover.webp'],
	},
};

export default function HomePage() {
	return (
		<main className="container mx-auto px-4 py-8">
			{/* Hero Section */}
			<section className="relative h-[80vh] rounded-lg overflow-hidden mb-16">
				<Image
					src="/images/cover.webp"
					alt="Festival and Technology Banner"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
				<div className="absolute inset-0 flex items-center p-8 md:p-16">
					<div className="max-w-2xl">
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
							Creative Fusion
						</h1>
						<p className="text-xl text-white/90 mb-8">
							Where technology meets culture, and innovation meets tradition.
							Explore our world of music, food, and DIY electronics.
						</p>
						<div className="flex gap-4">
							<Button asChild size="lg">
								<Link href="/event">Explore Events</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
				<Card className="hover:shadow-lg transition-shadow">
					<CardHeader>
						<div className="flex items-center gap-2 mb-4">
							<Music className="h-6 w-6 text-primary" />
							<CardTitle>Music & Events</CardTitle>
						</div>
						<CardDescription>
							Experience the vibrant world of Latvian music festivals and
							cultural events.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild variant="link" className="p-0">
							<Link href="/event">View Upcoming Events →</Link>
						</Button>
					</CardContent>
				</Card>
			</section>

			{/* Upcoming Event Preview */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-8">Upcoming Event</h2>
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">Festivāls FĀZE&apos;25</CardTitle>
						<CardDescription>
							A two-day showcase of emerging Latvian music talent at the
							historic Zentenes Castle
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="relative aspect-video rounded-lg overflow-hidden">
								<Image
									src="/images/cover.webp"
									alt="Festivāls FĀZE'25"
									fill
									className="object-cover"
								/>
							</div>
							<div className="space-y-4">
								<div className="flex items-center gap-2">
									<Calendar className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">Date</p>
										<p className="font-medium">July 18-19, 2025</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<Clock className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">Time</p>
										<p className="font-medium">3:00 PM - 11:00 PM</p>
									</div>
								</div>
								<Button asChild className="w-full">
									<Link href="/event">Learn More</Link>
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
