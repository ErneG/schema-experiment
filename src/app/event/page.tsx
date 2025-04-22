// pages/event.tsx

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	Calendar,
	Clock,
	MapPin,
	Ticket,
	Users,
	Car,
	Bus,
	Train,
} from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function EventPage() {
	const data = {
		title: "Festivāls FĀZE'25",
		shortDescription:
			'A two-day showcase of emerging Latvian music talent at the historic Zentenes Castle, featuring live performances, workshops, and immersive art installations.',
		fullUrl: 'https://your-domain.com/event',
		image:
			'https://static.wixstatic.com/media/0da768_880a3209e3744cd0a96b66835a01b8c5.png/v1/crop/x_0,y_0,w_256,h_256,q_85,enc_auto/0da768_880a3209e3744cd0a96b66835a01b8c5.png',
		startDate: '2025-07-18T15:00',
		endDate: '2025-07-19T23:00',
		location: {
			name: 'Zentenes pils',
			address: {
				streetAddress: 'Zentenes pils 1',
				addressLocality: 'Zentene',
				addressRegion: 'Tukuma novads',
				postalCode: '3124',
				addressCountry: 'LV',
			},
		},
		schedule: [
			{
				date: '2025-07-18',
				events: [
					{ time: '15:00', title: 'Gates Open' },
					{ time: '16:00', stage: 'Main Stage', title: 'Lokāli DJ Set' },
					{ time: '17:30', stage: 'Castle Lawn', title: 'Spēlētājs Trio' },
					{
						time: '19:00',
						stage: 'Main Stage',
						title: 'Indie Folk Collective',
					},
					{
						time: '21:00',
						stage: 'Castle Ruins',
						title: 'Midnight Soundscape',
					},
				],
			},
			{
				date: '2025-07-19',
				events: [
					{ time: '12:00', title: 'Workshops: Beatmaking & DIY Synth' },
					{
						time: '14:00',
						stage: 'Workshop Tent',
						title: 'Panel: Music Production Tips',
					},
					{ time: '16:00', stage: 'Main Stage', title: 'Indie Rock Showcase' },
					{ time: '18:30', stage: 'Castle Lawn', title: 'Electronic Live Act' },
					{
						time: '20:00',
						stage: 'Main Stage',
						title: 'Headliner: Alt-Rock Sensation',
					},
					{ time: '22:00', title: 'Closing DJ Ceremony' },
				],
			},
		],
		offers: [
			{
				name: 'Early Bird Ticket',
				url: 'https://www.fazeevents.lv/event-details/faze25',
				price: '20.00',
				currency: 'EUR',
				availability: 'InStock',
			},
			{
				name: 'Two-Day Pass',
				url: 'https://www.fazeevents.lv/event-details/faze25',
				price: '30.00',
				currency: 'EUR',
				availability: 'InStock',
			},
		],
		organizer: {
			name: 'Biedrība FĀZE events',
			url: 'https://www.fazeevents.lv',
		},
	};

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: data.title,
		startDate: data.startDate,
		endDate: data.endDate,
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		location: {
			'@type': 'Place',
			name: data.location.name,
			address: {
				'@type': 'PostalAddress',
				streetAddress: data.location.address.streetAddress,
				addressLocality: data.location.address.addressLocality,
				addressRegion: data.location.address.addressRegion,
				postalCode: data.location.address.postalCode,
				addressCountry: data.location.address.addressCountry,
			},
		},
		image: [data.image],
		description: data.shortDescription,
		workFeatured: data.schedule.flatMap((day) =>
			day.events.map((evt) => evt.title)
		),
		offers: data.offers.map((offer) => ({
			'@type': 'Offer',
			name: offer.name,
			url: offer.url,
			price: offer.price,
			priceCurrency: offer.currency,
			availability: `https://schema.org/${offer.availability}`,
		})),
		organizer: {
			'@type': 'Organization',
			name: data.organizer.name,
			url: data.organizer.url,
		},
	};

	return (
		<>
			<Head>
				<title>{data.title} – My Test Site</title>
				<meta name="description" content={data.shortDescription} />
				<link rel="canonical" href={data.fullUrl} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>
			<main className="container max-w-4xl mx-auto py-8 px-4">
				<Card className="mb-8">
					<CardHeader>
						<CardTitle className="text-3xl font-bold">{data.title}</CardTitle>
						<CardDescription className="text-lg">
							{data.shortDescription}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="relative aspect-video w-full mb-6 rounded-lg overflow-hidden">
							<Image
								src="/images/cover.webp"
								alt="Festivāls FĀZE'25 banner"
								fill
								className="object-cover"
								priority
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div className="space-y-4">
								<div className="flex items-center gap-2">
									<Calendar className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">Date</p>
										<p className="font-medium">
											{new Date(data.startDate).toLocaleDateString()} –{' '}
											{new Date(data.endDate).toLocaleDateString()}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<Clock className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">Time</p>
										<p className="font-medium">
											{new Date(data.startDate).toLocaleTimeString()} –{' '}
											{new Date(data.endDate).toLocaleTimeString()}
										</p>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<div className="flex items-center gap-2">
									<MapPin className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">Location</p>
										<p className="font-medium">{data.location.name}</p>
										<p className="text-sm text-muted-foreground">
											{data.location.address.streetAddress},{' '}
											{data.location.address.addressLocality}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<Users className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">Organizer</p>
										<Link
											href={data.organizer.url}
											className="font-medium text-primary hover:underline"
										>
											{data.organizer.name}
										</Link>
									</div>
								</div>
							</div>
						</div>

						<Separator className="my-6" />

						<Tabs defaultValue="day1" className="w-full">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="day1">
									{new Date(data.schedule[0].date).toLocaleDateString()}
								</TabsTrigger>
								<TabsTrigger value="day2">
									{new Date(data.schedule[1].date).toLocaleDateString()}
								</TabsTrigger>
							</TabsList>
							{data.schedule.map((day, index) => (
								<TabsContent key={index} value={`day${index + 1}`}>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Time</TableHead>
												<TableHead>Stage</TableHead>
												<TableHead>Event</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{day.events.map((event, eventIndex) => (
												<TableRow key={eventIndex}>
													<TableCell className="font-medium">
														{event.time}
													</TableCell>
													<TableCell>{event.stage || '-'}</TableCell>
													<TableCell>{event.title}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TabsContent>
							))}
						</Tabs>

						<Separator className="my-6" />

						<div className="space-y-6">
							<div>
								<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
									<Ticket className="h-5 w-5" />
									Tickets
								</h2>
								<div className="grid gap-4">
									{data.offers.map((offer, index) => (
										<Link
											key={index}
											href={offer.url}
											className="text-sm text-primary hover:underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Card>
												<CardContent className="p-4">
													<div className="flex items-center justify-between">
														<div>
															<h3 className="font-medium">{offer.name}</h3>
															<p className="text-sm text-muted-foreground">
																{offer.availability === 'InStock'
																	? 'Available'
																	: 'Sold Out'}
															</p>
														</div>
														<div className="text-right">
															<p className="font-medium">
																{offer.price} {offer.currency}
															</p>
														</div>
													</div>
												</CardContent>
											</Card>
										</Link>
									))}
								</div>
							</div>

							<div>
								<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
									<MapPin className="h-5 w-5" />
									How to Get There
								</h2>
								<div className="grid gap-6">
									<Card>
										<CardContent className="p-4">
											<div className="flex items-start gap-3">
												<Car className="h-5 w-5 text-muted-foreground mt-1" />
												<div>
													<h3 className="font-medium mb-2">By Car</h3>
													<p className="text-muted-foreground">
														Zentenes pils is located just 1 hour and 20 minutes
														drive from Riga city center.
													</p>
												</div>
											</div>
										</CardContent>
									</Card>

									<Card>
										<CardContent className="p-4">
											<div className="flex items-start gap-3">
												<Bus className="h-5 w-5 text-muted-foreground mt-1" />
												<div>
													<h3 className="font-medium mb-2">By Bus from Riga</h3>
													<p className="text-muted-foreground">
														Take a bus from &quot;Rīgas SAO&quot; to
														&quot;Zentenes pagrieziens&quot;. Then enjoy a
														short, scenic walk (approximately 4km, about 1
														hour). Buses run every 2 hours. Check schedules at{' '}
														<Link
															href="https://1188.lv"
															className="text-primary hover:underline"
															target="_blank"
															rel="noopener noreferrer"
														>
															1188.lv
														</Link>
													</p>
												</div>
											</div>
										</CardContent>
									</Card>

									<Card>
										<CardContent className="p-4">
											<div className="flex items-start gap-3">
												<Train className="h-5 w-5 text-muted-foreground mt-1" />
												<div>
													<h3 className="font-medium mb-2">
														By Train/Bus via Tukums
													</h3>
													<p className="text-muted-foreground">
														Take a train or bus to Tukums, then transfer to a
														bus to &quot;Zentene&quot;. The bus will drop you
														off right at Zentenes pils. Check schedules at{' '}
														<Link
															href="https://1188.lv"
															className="text-primary hover:underline"
															target="_blank"
															rel="noopener noreferrer"
														>
															1188.lv
														</Link>
													</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>

							<div>
								<h2 className="text-xl font-semibold mb-4">
									About the Festival
								</h2>
								<div className="prose prose-sm max-w-none">
									<p>
										Festivāls FĀZE katru gadu pulcē labākos jaunos Latvijas
										mūziķus un māksliniekus vēsturiskajā Zentenes pilī. Mērķis
										ir radīt intīmu, radošu vidi, kurā mūzika, māksla un
										tehnoloģijas saplūst vienotā pieredzē. Piedāvājam gan
										koncertus, gan interaktīvas darbnīcas, gan izstādes
										instalācijas.
									</p>
									<p>
										Pirmā Festivāla FĀZE notika 2021. gadā un guva lielu
										atsaucību, piesaistot ap 500 apmeklētāju. Kopš tā laika
										festivāls ir izaudzis gan pēc apmeklētāju skaita, gan
										programmas daudzveidības.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</main>
		</>
	);
}
