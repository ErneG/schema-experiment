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
	Utensils,
	Cpu,
} from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Event, WithContext } from 'schema-dts';

// Move jsonLd outside of the component to be accessible by generateMetadata
const jsonLd: WithContext<Event> = {
	'@context': 'https://schema.org',
	'@type': 'Event',
	name: "Festivāls FĀZE'25",
	startDate: '2025-07-18T15:00',
	endDate: '2025-07-19T23:00',
	eventStatus: 'https://schema.org/EventRescheduled',
	eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
	location: {
		'@type': 'Place',
		name: 'Zentenes pils',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Zentenes pils 1',
			addressLocality: 'Zentene',
			addressRegion: 'Tukuma novads',
			postalCode: '3124',
			addressCountry: 'LV',
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: '57.1234',
			longitude: '23.1234',
		},
	},
	image: [
		'https://ernests.dev/images/cover.webp',
		'https://ernests.dev/images/faze-fest-main-stage.avif',
		'https://ernests.dev/images/beetroot_soup.webp',
		'https://ernests.dev/images/ESP32_LED_STRIP_SCHEMA.jpg',
	],
	description:
		'A two-day showcase of emerging Latvian music talent at the historic Zentenes Castle, featuring live performances, workshops, and immersive art installations.',
	workFeatured: [
		{
			'@type': 'CreativeWork',
			name: 'Gates Open',
		},
		{
			'@type': 'CreativeWork',
			name: 'Lokāli DJ Set',
		},
		{
			'@type': 'CreativeWork',
			name: 'Spēlētājs Trio',
		},
		{
			'@type': 'CreativeWork',
			name: 'Indie Folk Collective',
		},
		{
			'@type': 'CreativeWork',
			name: 'Midnight Soundscape',
		},
	],
	offers: [
		{
			'@type': 'Offer',
			name: 'Early Bird Ticket',
			url: 'https://www.fazeevents.lv/event-details/faze25',
			price: '20.00',
			priceCurrency: 'EUR',
			availability: 'https://schema.org/InStock',
			validFrom: '2025-01-01T00:00:00+02:00',
			priceValidUntil: '2025-07-17T23:59:59+02:00',
		},
		{
			'@type': 'Offer',
			name: 'Two-Day Pass',
			url: 'https://www.fazeevents.lv/event-details/faze25',
			price: '30.00',
			priceCurrency: 'EUR',
			availability: 'https://schema.org/InStock',
			validFrom: '2025-01-01T00:00:00+02:00',
			priceValidUntil: '2025-07-17T23:59:59+02:00',
		},
	],
	organizer: {
		'@type': 'Organization',
		name: 'Biedrība FĀZE events',
		url: 'https://www.fazeevents.lv',
		logo: {
			'@type': 'ImageObject',
			url: 'https://ernests.dev/logo.png',
		},
	},
	performer: [
		{
			'@type': 'MusicGroup',
			name: 'Embark',
			url: 'https://www.instagram.com/embark.band/',
		},
		{
			'@type': 'MusicGroup',
			name: "The Tu'n'es",
			url: 'https://www.instagram.com/thetunesofficial/',
		},
		{
			'@type': 'MusicGroup',
			name: 'Bukte',
			url: 'https://www.instagram.com/bukteofficial/',
		},
	],
	maximumAttendeeCapacity: 2000,
	remainingAttendeeCapacity: 1500,
	eventSchedule: [
		{
			'@type': 'Schedule',
			startDate: '2025-07-18',
			endDate: '2025-07-18',
			byDay: 'Friday',
			startTime: '15:00:00+02:00',
			endTime: '23:00:00+02:00',
		},
		{
			'@type': 'Schedule',
			startDate: '2025-07-19',
			endDate: '2025-07-19',
			byDay: 'Saturday',
			startTime: '12:00:00+02:00',
			endTime: '22:00:00+02:00',
		},
	],
	subEvent: [
		{
			'@type': 'Event',
			name: 'Gates Open',
			description: "The official opening of Festivāls FĀZE'25 gates.",
			startDate: '2025-07-18T15:00:00+02:00',
			endDate: '2025-07-18T15:30:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Main Stage',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'Festival Team',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Early Bird Ticket',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '20.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					validFrom: '2025-01-01T00:00:00+02:00',
					priceValidUntil: '2025-07-17T23:59:59+02:00',
				},
				{
					'@type': 'Offer',
					name: 'Two-Day Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					validFrom: '2025-01-01T00:00:00+02:00',
					priceValidUntil: '2025-07-17T23:59:59+02:00',
				},
			],
		},
		{
			'@type': 'Event',
			name: 'Lokāli DJ Set',
			description: "A local DJ set performance at Festivāls FĀZE'25.",
			startDate: '2025-07-18T16:00:00+02:00',
			endDate: '2025-07-18T17:00:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Main Stage',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'Local DJ',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Early Bird Ticket',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '20.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					validFrom: '2025-01-01T00:00:00+02:00',
					priceValidUntil: '2025-07-17T23:59:59+02:00',
				},
				{
					'@type': 'Offer',
					name: 'Two-Day Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					validFrom: '2025-01-01T00:00:00+02:00',
					priceValidUntil: '2025-07-17T23:59:59+02:00',
				},
			],
		},
		{
			'@type': 'Event',
			name: 'Spēlētājs Trio',
			description: "A live performance by Spēlētājs Trio at Festivāls FĀZE'25.",
			startDate: '2025-07-18T17:30:00+02:00',
			endDate: '2025-07-18T18:30:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Castle Lawn',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'Spēlētājs Trio',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Early Bird Ticket',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '20.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					validFrom: '2025-01-01T00:00:00+02:00',
					priceValidUntil: '2025-07-17T23:59:59+02:00',
				},
				{
					'@type': 'Offer',
					name: 'Two-Day Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					validFrom: '2025-01-01T00:00:00+02:00',
					priceValidUntil: '2025-07-17T23:59:59+02:00',
				},
			],
		},
		{
			'@type': 'Event',
			name: 'Indie Folk Collective',
			description:
				"A live performance by Indie Folk Collective at Festivāls FĀZE'25.",
			startDate: '2025-07-18T19:00:00+02:00',
			endDate: '2025-07-18T20:00:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Main Stage',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'Indie Folk Collective',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Early Bird Ticket',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '20.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					validFrom: '2025-01-01T00:00:00+02:00',
					priceValidUntil: '2025-07-17T23:59:59+02:00',
				},
				{
					'@type': 'Offer',
					name: 'Two-Day Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					validFrom: '2025-01-01T00:00:00+02:00',
					priceValidUntil: '2025-07-17T23:59:59+02:00',
				},
			],
		},
		{
			'@type': 'Event',
			name: 'Midnight Soundscape',
			description: "A late-night soundscape performance at Festivāls FĀZE'25.",
			startDate: '2025-07-18T21:00:00+02:00',
			endDate: '2025-07-18T22:00:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Castle Ruins',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'Midnight Soundscape',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Early Bird Ticket',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '20.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					validFrom: '2025-01-01T00:00:00+02:00',
					priceValidUntil: '2025-07-17T23:59:59+02:00',
				},
				{
					'@type': 'Offer',
					name: 'Two-Day Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					validFrom: '2025-01-01T00:00:00+02:00',
					priceValidUntil: '2025-07-17T23:59:59+02:00',
				},
			],
		},
		{
			'@type': 'Event',
			name: 'Workshops: Beatmaking & DIY Synth',
			description:
				"A hands-on workshop on beatmaking and DIY synthesizer building at Festivāls FĀZE'25.",
			startDate: '2025-07-19T12:00:00+02:00',
			endDate: '2025-07-19T13:00:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Workshop Tent',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'Workshop Facilitator',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Festival Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
				},
			],
		},
		{
			'@type': 'Event',
			name: 'Panel: Music Production Tips',
			description:
				"A panel discussion on music production tips at Festivāls FĀZE'25.",
			startDate: '2025-07-19T14:00:00+02:00',
			endDate: '2025-07-19T15:00:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Workshop Tent',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'Panelists',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Festival Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
				},
			],
		},
		{
			'@type': 'Event',
			name: 'Indie Rock Showcase',
			description: "A showcase of indie rock bands at Festivāls FĀZE'25.",
			startDate: '2025-07-19T16:00:00+02:00',
			endDate: '2025-07-19T17:30:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Main Stage',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'Indie Rock Band Name',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Festival Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
				},
			],
		},
		{
			'@type': 'Event',
			name: 'Electronic Live Act',
			description: "A live electronic music performance at Festivāls FĀZE'25.",
			startDate: '2025-07-19T18:30:00+02:00',
			endDate: '2025-07-19T19:30:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Castle Lawn',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'Electronic Artist Name',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Festival Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
				},
			],
		},
		{
			'@type': 'Event',
			name: 'Headliner: Alt-Rock Sensation',
			description:
				"The headline performance by the Alt-Rock Sensation band at Festivāls FĀZE'25.",
			startDate: '2025-07-19T20:00:00+02:00',
			endDate: '2025-07-19T21:30:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Main Stage',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'Alt-Rock Sensation',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Festival Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
				},
			],
		},
		{
			'@type': 'Event',
			name: 'Closing DJ Ceremony',
			description:
				"The final DJ set to close out Festivāls FĀZE'25 on the Main Stage.",
			startDate: '2025-07-19T22:00:00+02:00',
			endDate: '2025-07-19T23:00:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Main Stage',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Zentenes pils 1',
					addressLocality: 'Zentene',
					addressRegion: 'Tukuma novads',
					postalCode: '3124',
					addressCountry: 'LV',
				},
			},
			image: ['https://ernests.dev/images/cover.webp'],
			organizer: {
				'@type': 'Organization',
				name: 'Biedrība FĀZE events',
				url: 'https://www.fazeevents.lv',
			},
			performer: [
				{
					'@type': 'MusicGroup',
					name: 'DJ Name Here',
				},
			],
			offers: [
				{
					'@type': 'Offer',
					name: 'Festival Pass',
					url: 'https://www.fazeevents.lv/event-details/faze25',
					price: '30.00',
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
				},
			],
		},
	],
	keywords: [
		'music festival',
		'Latvian music',
		'live music',
		'Zentenes pils',
		'summer festival',
	],
	audience: {
		'@type': 'Audience',
		audienceType: 'Music Lovers',
	},
	typicalAgeRange: '18-45',
	doorTime: '14:00',
	previousStartDate: '2024-07-20',
	maximumVirtualAttendeeCapacity: 0,
	isAccessibleForFree: false,
	sponsor: {
		'@type': 'Organization',
		name: 'Brain Corp',
		url: 'https://ernests.dev',
	},
};

export default function EventPage() {
	const data = {
		title: "Festivāls FĀZE'25",
		shortDescription:
			'A two-day showcase of emerging Latvian music talent at the historic Zentenes Castle, featuring live performances, workshops, and immersive art installations.',
		fullUrl: 'https://your-domain.com/event',
		image: '/cover.webp',
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

	return (
		<>
			<Head>
				<title>{data.title} – My Test Site</title>
				<meta name="description" content={data.shortDescription} />
				<meta property="og:title" content={data.title} />
				<meta property="og:description" content={data.shortDescription} />
				<meta property="og:image" content={data.image} />
				<meta property="og:url" content={data.fullUrl} />
				<link rel="canonical" href={data.fullUrl} />
			</Head>
			<main className="container max-w-4xl mx-auto py-8 px-4">
				{/* SEO intro for Festivāls Fāze */}
				<section className="mb-6">
					<h1 className="text-4xl font-bold mb-2">Festivāls Fāze&apos;25</h1>
					<p className="text-lg text-muted-foreground">
						Festivāls Fāze is Latvia&apos;s most exciting summer festival,
						uniting emerging music, art, and technology at Zentenes pils.
						Explore the Festivāls Fāze&apos;25 lineup, schedule, and all you
						need to know for your visit.
					</p>
				</section>
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
								alt="Festivāls FĀZE'25 - Live music performance at Zentenes Castle featuring emerging Latvian artists and interactive art installations"
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
											rel="nofollow"
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
											rel="noopener noreferrer nofollow"
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
															rel="noopener noreferrer nofollow"
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
															rel="noopener noreferrer nofollow"
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
									About Festivāls Fāze
								</h2>
								<div className="prose prose-sm max-w-none">
									<p>
										Festivāls Fāze (sometimes written as Faze Fest or FĀZE) is
										an annual event in Latvia, gathering the best new musicians
										and artists at the historic Zentenes pils. The
										festival&apos;s mission is to create an intimate, creative
										space where music, art, and technology blend into a unique
										experience. Festivāls Fāze offers concerts, interactive
										workshops, and art installations.
									</p>
									<p>
										The first Festivāls Fāze took place in 2021 and quickly
										became a highlight of the Latvian summer. Since then,
										Festivāls Fāze has grown in both attendance and program
										diversity, attracting visitors from across the country and
										beyond.
									</p>
								</div>
							</div>
						</div>
						<Separator className="my-6" />

						{/* Main Stage Image */}
						<div className="mb-8">
							<div className="relative aspect-video w-full rounded-lg overflow-hidden">
								<Image
									src="/images/faze-fest-main-stage.avif"
									alt="Embark (music band) performing live on the main stage at Festivāls Fāze, Zentenes pils"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>

						{/* Popup Restaurant Section */}
						<div className="mb-8">
							<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<Utensils className="h-5 w-5" />
								Food & Drinks
							</h2>
							<Card>
								<CardHeader>
									<CardTitle className="text-2xl">
										Traditional Latvian Pop-Up Kitchen
									</CardTitle>
									<CardDescription>
										Enjoy classic Latvian dishes with a modern twist, made from
										local ingredients. Signature dish: Aukstā biešu zupa (Cold
										Beet Soup).
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<div className="space-y-4">
											<div className="flex items-center gap-2">
												<Clock className="h-5 w-5 text-muted-foreground" />
												<div>
													<p className="text-sm text-muted-foreground">
														Serving Hours
													</p>
													<p className="font-medium">12:00 PM - 8:00 PM</p>
												</div>
											</div>
											<div className="prose prose-sm max-w-none">
												<ul>
													<li>Cold Beet Soup (Aukstā biešu zupa)</li>
													<li>Modern takes on traditional recipes</li>
													<li>Vegetarian & vegan options</li>
												</ul>
											</div>
										</div>
										<div className="relative aspect-video rounded-lg overflow-hidden">
											<Image
												src="/images/beetroot_soup.webp"
												alt="Traditional Latvian Cold Beet Soup"
												fill
												className="object-cover"
											/>
										</div>
									</div>
									<div className="mt-6">
										<Button asChild variant="outline" className="w-full">
											<Link href="/creamy-beetroot-soup">View Recipe</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Interactive Installations Section */}
						<div className="mb-8">
							<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<Cpu className="h-5 w-5" />
								Interactive Installations
							</h2>
							<Card>
								<CardHeader>
									<CardTitle className="text-2xl">
										Interactive Light Experience
									</CardTitle>
									<CardDescription>
										Control custom-built light installations with your phone.
										Explore music-reactive walls and color-changing paths.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<div className="space-y-4">
											<div className="flex items-center gap-2">
												<Clock className="h-5 w-5 text-muted-foreground" />
												<div>
													<p className="text-sm text-muted-foreground">
														Active Hours
													</p>
													<p className="font-medium">6:00 PM - 11:00 PM</p>
												</div>
											</div>
											<div className="prose prose-sm max-w-none">
												<ul>
													<li>Control lights via smartphone</li>
													<li>Music-responsive light walls</li>
													<li>Color-changing pathways</li>
												</ul>
											</div>
										</div>
										<div className="relative aspect-video rounded-lg overflow-hidden">
											<Image
												src="/images/ESP32_LED_STRIP_SCHEMA.jpg"
												alt="ESP32 LED Control Setup"
												fill
												className="object-cover"
											/>
										</div>
									</div>
									<div className="mt-6">
										<Button asChild variant="outline" className="w-full">
											<Link href="/esp-led-controller">Learn How to Build</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					</CardContent>
				</Card>
				<Separator className="my-6" />
				<div className="text-center text-sm text-muted-foreground">
					<p>
						We have no affiliation with{' '}
						<Link
							href="https://www.fazeevents.lv"
							rel="nofollow"
							className="text-primary hover:underline"
						>
							Fāze Events
						</Link>
					</p>
				</div>
			</main>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</>
	);
}

export async function generateMetadata() {
	const data = {
		title: "Festivāls FĀZE'25",
		description:
			"Festivāls Fāze is Latvia's annual celebration of new music, art, and technology at Zentenes pils. Discover the full Festivāls Fāze'25 program, tickets, and visitor info.",
	};

	return {
		title: data.title,
		description: data.description,
		openGraph: {
			title: data.title,
			description: data.description,
			images: [
				{
					url: '/cover.webp',
					width: 1200,
					height: 630,
					alt: "Festivāls FĀZE'25",
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: data.title,
			description: data.description,
			images: ['/cover.webp'],
		},
	};
}
