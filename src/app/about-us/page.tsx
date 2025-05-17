import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: 'About Us - FĀZE Events',
	description:
		'Learn about FĀZE Events, our mission, team, and journey in creating unique music and art experiences in Latvia.',
	openGraph: {
		title: 'About FĀZE Events - Creating Unique Music Experiences',
		description:
			'Discover the story behind FĀZE Events, our passionate team, and our mission to bring innovative music and art experiences to Latvia.',
		images: [
			{
				url: 'https://static.wixstatic.com/media/0da768_880a3209e3744cd0a96b66835a01b8c5.png/v1/crop/x_0,y_0,w_256,h_256,q_85,enc_auto/0da768_880a3209e3744cd0a96b66835a01b8c5.png',
				width: 1200,
				height: 630,
				alt: 'FĀZE Events Team',
			},
		],
	},
};

export default function AboutUsPage() {
	const team = [
		{
			name: 'Anna Bērziņa',
			role: 'Founder & Creative Director',
			image: '/images/team/anna.jpg',
			initials: 'AB',
			bio: 'Passionate about creating immersive music experiences and bringing together emerging artists.',
		},
		{
			name: 'Jānis Kalniņš',
			role: 'Technical Director',
			image: '/images/team/janis.jpg',
			initials: 'JK',
			bio: 'Expert in sound engineering and interactive installations.',
		},
		{
			name: 'Līga Ozola',
			role: 'Event Coordinator',
			image: '/images/team/liga.jpg',
			initials: 'LO',
			bio: 'Dedicated to crafting seamless event experiences and artist relations.',
		},
	];

	const timeline = [
		{
			year: '2021',
			title: 'The Beginning',
			description: 'First Festivāls Fāze at Zentenes pils with 500 attendees.',
		},
		{
			year: '2022',
			title: 'Growing Community',
			description: 'Expanded to two days with 1,200 attendees and 30 artists.',
		},
		{
			year: '2023',
			title: 'Innovation',
			description: 'Introduced interactive light installations and workshops.',
		},
		{
			year: '2024',
			title: 'Record Breaking',
			description:
				'Our biggest year yet with 46 artists and over 2,000 attendees.',
		},
		{
			year: '2025',
			title: 'New Horizons',
			description:
				'Planning our largest event to date with over 50 artists, expanded venues, and international collaborations.',
		},
	];

	return (
		<main className="container max-w-6xl mx-auto py-12 px-4">
			{/* Hero Section */}
			<section className="text-center mb-16">
				<h1 className="text-5xl font-bold mb-6">About FĀZE Events</h1>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
					We&apos;re a passionate team dedicated to creating unique music and
					art experiences that bring together emerging talent and innovative
					technology in Latvia&apos;s most beautiful venues.
				</p>
			</section>

			{/* Mission Section */}
			<Card className="mb-16">
				<CardHeader>
					<CardTitle className="text-3xl">Our Mission</CardTitle>
					<CardDescription className="text-lg">
						Creating spaces where music, art, and technology converge
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div className="space-y-4">
							<p className="text-lg">
								At FĀZE Events, we believe in the power of live music and art to
								bring people together. Our mission is to create intimate,
								immersive experiences that showcase emerging talent while
								pushing the boundaries of what&apos;s possible in event
								production.
							</p>
							<p className="text-lg">
								We&apos;re committed to sustainability, innovation, and
								community building, ensuring that each event leaves a positive
								impact on both our audience and the local creative scene.
							</p>
						</div>
						<div className="relative aspect-video rounded-lg overflow-hidden">
							<Image
								src="/images/faze-fest-main-stage.avif"
								alt="Zentenes pils venue"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Team Section */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{team.map((member) => (
						<Card key={member.name}>
							<CardHeader>
								<div className="flex flex-col items-center text-center">
									<Avatar className="w-24 h-24 mb-4">
										<AvatarImage src={member.image} alt={member.name} />
										<AvatarFallback>{member.initials}</AvatarFallback>
									</Avatar>
									<CardTitle>{member.name}</CardTitle>
									<CardDescription>{member.role}</CardDescription>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-center text-muted-foreground">
									{member.bio}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Timeline Section */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
				<div className="space-y-8">
					{timeline.map((event) => (
						<Card key={event.year}>
							<CardContent className="p-6">
								<div className="flex items-start gap-6">
									<Badge variant="outline" className="text-lg px-4 py-2">
										{event.year}
									</Badge>
									<div>
										<h3 className="text-xl font-semibold mb-2">
											{event.title}
										</h3>
										<p className="text-muted-foreground">{event.description}</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Values Section */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
				<Tabs defaultValue="innovation" className="w-full">
					<TabsList className="grid w-full grid-cols-3 mb-8">
						<TabsTrigger value="innovation">Innovation</TabsTrigger>
						<TabsTrigger value="community">Community</TabsTrigger>
						<TabsTrigger value="sustainability">Sustainability</TabsTrigger>
					</TabsList>
					<TabsContent value="innovation">
						<Card>
							<CardHeader>
								<CardTitle>Pushing Boundaries</CardTitle>
								<CardDescription>
									We constantly explore new ways to enhance the event experience
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									From interactive light installations to immersive sound
									experiences, we&apos;re always looking for ways to innovate
									and create memorable moments for our audience.
								</p>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="community">
						<Card>
							<CardHeader>
								<CardTitle>Building Together</CardTitle>
								<CardDescription>
									Creating spaces where artists and audiences can connect
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									We believe in the power of community and work to create
									inclusive spaces where everyone feels welcome to express
									themselves and connect with others.
								</p>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="sustainability">
						<Card>
							<CardHeader>
								<CardTitle>Responsible Events</CardTitle>
								<CardDescription>
									Committed to reducing our environmental impact
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									We implement sustainable practices in all aspects of our
									events, from waste reduction to energy efficiency, ensuring we
									leave a positive legacy.
								</p>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</section>

			{/* FAQ Section */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold text-center mb-8">
					Frequently Asked Questions
				</h2>
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>How did FĀZE Events start?</AccordionTrigger>
						<AccordionContent>
							FĀZE Events began in 2021 with a vision to create unique music
							experiences in Latvia. Our first festival at Zentenes pils brought
							together emerging artists and a growing community of music lovers.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>What makes FĀZE Events unique?</AccordionTrigger>
						<AccordionContent>
							We combine emerging music talent with innovative technology and
							art installations, creating immersive experiences in historic
							venues. Our focus on community and sustainability sets us apart.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>How can I get involved?</AccordionTrigger>
						<AccordionContent>
							There are many ways to get involved! You can volunteer at our
							events, submit your music for consideration, or join our community
							of supporters. Visit our contact page to learn more.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>

			{/* CTA Section */}
			{/* <section className="text-center">
				<Card>
					<CardHeader>
						<CardTitle className="text-3xl">Join Our Journey</CardTitle>
						<CardDescription className="text-lg">
							Be part of the next chapter in FĀZE Events
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-muted-foreground">
							Whether you&apos;re an artist, volunteer, or supporter,
							there&apos;s a place for you in our community.
						</p>
						<div className="flex gap-4 justify-center">
							<Button asChild>
								<Link href="/contact">Get in Touch</Link>
							</Button>
							<Button variant="outline" asChild>
								<Link href="/events">View Events</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			</section> */}
		</main>
	);
}
