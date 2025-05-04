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
							<Button
								asChild
								size="lg"
								variant="outline"
								className="bg-white/10 text-white hover:bg-white/20"
							>
								<Link href="/creamy-beetroot-soup">Try Recipes</Link>
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

				<Card className="hover:shadow-lg transition-shadow">
					<CardHeader>
						<div className="flex items-center gap-2 mb-4">
							<Utensils className="h-6 w-6 text-primary" />
							<CardTitle>Recipes</CardTitle>
						</div>
						<CardDescription>
							Discover traditional Latvian recipes with a modern twist.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild variant="link" className="p-0">
							<Link href="/creamy-beetroot-soup">Try Our Recipes →</Link>
						</Button>
					</CardContent>
				</Card>

				<Card className="hover:shadow-lg transition-shadow">
					<CardHeader>
						<div className="flex items-center gap-2 mb-4">
							<Wrench className="h-6 w-6 text-primary" />
							<CardTitle>DIY Projects</CardTitle>
						</div>
						<CardDescription>
							Learn to build your own LED controllers and other tech projects.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild variant="link" className="p-0">
							<Link href="/esp-led-controller">Start Building →</Link>
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

			{/* Featured Recipe */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-8">Featured Recipe</h2>
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">Aukstā biešu zupa</CardTitle>
						<CardDescription>
							A refreshing and tangy cold beet soup from Latvia, perfect for hot
							summer days.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="relative aspect-video rounded-lg overflow-hidden">
								<Image
									src="/images/beetroot_soup.webp"
									alt="Aukstā biešu zupa"
									fill
									className="object-cover"
								/>
							</div>
							<div className="space-y-4">
								<div className="flex items-center gap-2">
									<Clock className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">Prep Time</p>
										<p className="font-medium">20 minutes</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<Utensils className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">Servings</p>
										<p className="font-medium">4 people</p>
									</div>
								</div>
								<Button asChild className="w-full">
									<Link href="/creamy-beetroot-soup">View Recipe</Link>
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* DIY Project Preview */}
			<section>
				<h2 className="text-3xl font-bold mb-8">Featured DIY Project</h2>
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">
							ESP32 LED Control Web Server
						</CardTitle>
						<CardDescription>
							Build your own web-controlled LED installation with ESP32
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="relative aspect-video rounded-lg overflow-hidden">
								<Image
									src="/images/ESP32_LED_STRIP_SCHEMA.jpg"
									alt="ESP32 LED Control Setup"
									fill
									className="object-cover"
								/>
							</div>
							<div className="space-y-4">
								<div className="flex items-center gap-2">
									<Clock className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">
											Time Required
										</p>
										<p className="font-medium">30 minutes</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<Wrench className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">Difficulty</p>
										<p className="font-medium">Intermediate</p>
									</div>
								</div>
								<Button asChild className="w-full">
									<Link href="/esp-led-controller">Start Project</Link>
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
