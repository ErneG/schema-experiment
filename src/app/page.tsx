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
import {
	Calendar,
	Clock,
	Utensils,
	Wrench,
	Music,
	MapPin,
	Users,
} from 'lucide-react';

export const metadata = {
	title: 'Festivāls FĀZE 2025 – Latvia&apos;s Premier Music & Arts Festival',
	description:
		'Experience Festivāls FĀZE 2025 at Zentenes pils, Latvia&apos;s annual celebration of emerging music talent, interactive art installations, and cultural innovation. Join us for two days of unforgettable performances.',
	openGraph: {
		title: 'Festivāls FĀZE 2025 – Latvia&apos;s Premier Music & Arts Festival',
		description:
			'Experience Festivāls FĀZE 2025 at Zentenes pils, Latvia&apos;s annual celebration of emerging music talent, interactive art installations, and cultural innovation. Join us for two days of unforgettable performances.',
		url: 'https://your-domain.com/',
		images: [{ url: 'https://your-domain.com/images/cover.webp' }],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Festivāls FĀZE 2025 – Latvia&apos;s Premier Music & Arts Festival',
		description:
			'Experience Festivāls FĀZE 2025 at Zentenes pils, Latvia&apos;s annual celebration of emerging music talent, interactive art installations, and cultural innovation. Join us for two days of unforgettable performances.',
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
					alt="Festivāls FĀZE 2025 at Zentenes pils - Latvia's premier music and arts festival"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
				<div className="absolute inset-0 flex items-center p-8 md:p-16">
					<div className="max-w-2xl">
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
							Festivāls FĀZE'25
						</h1>
						<p className="text-xl text-white/90 mb-8">
							Join us at Zentenes pils for Latvia&apos;s most exciting summer
							festival, featuring emerging music talent, interactive art
							installations, and cultural innovation.
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
							<CardTitle>Live Performances</CardTitle>
						</div>
						<CardDescription>
							Experience two days of emerging Latvian music talent at the
							historic Zentenes Castle, featuring indie rock, electronic, and
							folk performances.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild variant="link" className="p-0">
							<Link href="/event">View Full Schedule →</Link>
						</Button>
					</CardContent>
				</Card>

				<Card className="hover:shadow-lg transition-shadow">
					<CardHeader>
						<div className="flex items-center gap-2 mb-4">
							<MapPin className="h-6 w-6 text-primary" />
							<CardTitle>Historic Venue</CardTitle>
						</div>
						<CardDescription>
							Set in the stunning Zentenes pils, just 1.5 hours from Riga,
							combining historic architecture with modern festival experiences.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild variant="link" className="p-0">
							<Link href="/event">Get Directions →</Link>
						</Button>
					</CardContent>
				</Card>

				<Card className="hover:shadow-lg transition-shadow">
					<CardHeader>
						<div className="flex items-center gap-2 mb-4">
							<Users className="h-6 w-6 text-primary" />
							<CardTitle>Community Focus</CardTitle>
						</div>
						<CardDescription>
							Join a vibrant community of music lovers, artists, and cultural
							enthusiasts at Latvia&apos;s fastest-growing summer festival.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild variant="link" className="p-0">
							<Link href="/event">Join Us →</Link>
						</Button>
					</CardContent>
				</Card>
			</section>

			{/* Upcoming Event Preview */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-8">Festivāls FĀZE 2025</h2>
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">
							Two Days of Music & Culture
						</CardTitle>
						<CardDescription>
							Experience the best of emerging Latvian music talent at the
							historic Zentenes Castle, featuring live performances, workshops,
							and immersive art installations.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="relative aspect-video rounded-lg overflow-hidden">
								<Image
									src="/images/cover.webp"
									alt="Festivāls FĀZE 2025 at Zentenes pils - Live music and art festival"
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
								<div className="prose prose-sm">
									<p className="text-muted-foreground">
										Festivāls FĀZE has quickly become a highlight of the Latvian
										summer since its inception in 2021. Join us for an
										unforgettable weekend of music, art, and cultural innovation
										at the historic Zentenes Castle.
									</p>
								</div>
								<Button asChild className="w-full">
									<Link href="/event">View Full Program</Link>
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Venue Section */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-8">
					Historic Venue: Zentenes pils
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Zentenes Castle</CardTitle>
							<CardDescription>
								A stunning 19th-century castle in Tukuma novads, Latvia
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="prose prose-sm">
								<p>
									Zentenes pils, located in the heart of Latvia&apos;s
									countryside, provides the perfect backdrop for Festivāls FĀZE.
									This historic castle combines Gothic and Renaissance
									architecture with modern festival facilities, creating a
									unique atmosphere for music and art.
								</p>
								<ul className="mt-4 space-y-2">
									<li>Multiple performance stages</li>
									<li>Historic castle ruins for intimate performances</li>
									<li>Spacious castle lawn for main stage events</li>
									<li>Workshop tents for interactive sessions</li>
								</ul>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Getting There</CardTitle>
							<CardDescription>
								Easy access from Riga and surrounding areas
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="prose prose-sm">
								<p>
									Zentenes pils is conveniently located just 1 hour and 20
									minutes from Riga city center, making it easily accessible for
									both local and international visitors.
								</p>
								<ul className="mt-4 space-y-2">
									<li>Direct bus service from Rīgas SAO</li>
									<li>Train connection via Tukums</li>
									<li>Ample parking for festival-goers</li>
									<li>Shuttle service from nearby towns</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Music Program Section */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-8">Music Program</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Main Stage</CardTitle>
							<CardDescription>
								Headlining acts and major performances
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="prose prose-sm">
								<p>
									The main stage at Zentenes pils hosts our headline acts,
									featuring the best of Latvian indie rock, electronic, and
									alternative music.
								</p>
								<ul className="mt-4 space-y-2">
									<li>Indie Rock Showcase</li>
									<li>Electronic Live Acts</li>
									<li>Alternative Music Performances</li>
									<li>Special Guest Appearances</li>
								</ul>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Castle Ruins</CardTitle>
							<CardDescription>
								Intimate performances in historic setting
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="prose prose-sm">
								<p>
									The atmospheric castle ruins provide a unique venue for
									acoustic performances and experimental music.
								</p>
								<ul className="mt-4 space-y-2">
									<li>Acoustic Sessions</li>
									<li>Experimental Soundscapes</li>
									<li>Folk Music Performances</li>
									<li>Late Night DJ Sets</li>
								</ul>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Workshop Tent</CardTitle>
							<CardDescription>
								Interactive music sessions and workshops
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="prose prose-sm">
								<p>
									Join our interactive workshops and learn from experienced
									musicians and producers.
								</p>
								<ul className="mt-4 space-y-2">
									<li>Beatmaking Workshops</li>
									<li>DIY Synth Building</li>
									<li>Music Production Tips</li>
									<li>Artist Q&A Sessions</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Cultural Experience Section */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-8">Cultural Experience</h2>
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">Beyond the Music</CardTitle>
						<CardDescription>
							Immerse yourself in Latvian culture and innovation
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="prose prose-sm">
								<h3 className="text-xl font-semibold mb-4">
									Art Installations
								</h3>
								<p>
									Experience interactive art installations that blend
									traditional Latvian elements with modern technology. Our light
									installations and interactive displays create a unique
									festival atmosphere.
								</p>
								<ul className="mt-4 space-y-2">
									<li>Interactive Light Walls</li>
									<li>Music-Reactive Installations</li>
									<li>Traditional Art Displays</li>
									<li>Digital Art Showcase</li>
								</ul>
							</div>
							<div className="prose prose-sm">
								<h3 className="text-xl font-semibold mb-4">Local Culture</h3>
								<p>
									Festivāls FĀZE celebrates Latvian culture through food, art,
									and community activities. Enjoy traditional Latvian cuisine
									with a modern twist at our pop-up kitchen.
								</p>
								<ul className="mt-4 space-y-2">
									<li>Traditional Latvian Food</li>
									<li>Local Craft Vendors</li>
									<li>Cultural Workshops</li>
									<li>Community Activities</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
