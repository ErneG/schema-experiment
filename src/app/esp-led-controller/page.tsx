// pages/howto.tsx

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { AlertCircle, Clock, Wrench, Package, Calendar } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Utility function to parse markdown-like text
function parseText(text: string) {
	return text.split('\n').map((line) => {
		// Replace **text** with <strong>text</strong>
		let parsedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
		// Replace [text](url) with <a href="url">text</a>
		parsedLine = parsedLine.replace(
			/\[(.*?)\]\((.*?)\)/g,
			'<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
		);
		return parsedLine;
	});
}

export default function HowToPage() {
	const data = {
		title: 'How to Set Up an ESP32 LED Control Web Server',
		shortDescription:
			'Step-by-step guide to flashing an ESP32 board and serving a web interface for driving LED installations.',
		fullUrl: 'https://your-domain.com/howto',
		image: '/images/ESP32_LED_STRIP_SCHEMA.jpg',
		datePublished: '2025-04-22',
		totalTime: 'PT30M',
		supplies: [
			'1× XL0401 diode',
			'1× Type C PD trigger board',
			'2× DC buck converter 2A',
			'1× MOSFET switch 15A',
			'1× ESP32 board',
			'1× 3S BMS (Battery Management System)',
			'3× 18650 Li‑ion cells',
		],
		tools: [
			'Arduino IDE',
			'USB cable',
			'ESP32 USB-to-UART driver (e.g. Silicon Labs CP210x)',
		],
		steps: [
			{
				name: 'Install & Configure Arduino IDE',
				text: `Download and install the Arduino IDE from the [Arduino website](https://www.arduino.cc/en/software).  
Open **Tools > Board: "xxx" > Boards Manager...**, search for "ESP32" and install the Espressif Systems package.  
Select **Tools > Board > ESP32 Dev Module**.`,
			},
			{
				name: 'Install Required Libraries',
				text: `In the Arduino IDE, go to **Tools > Manage Libraries...** and install the following libraries:  
- WiFi.h  
- ESPAsyncWebServer.h  
- FastLED.h`,
			},
			{
				name: 'Install USB-to-UART Driver',
				text: `If your computer does not detect the ESP32 as a serial device, download and install the CP210x or CH340 driver from the manufacturer's site: https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers.`,
			},
			{
				name: 'Connect & Flash the ESP32',
				text: `Connect your ESP32 to the computer via USB.  
Open **main.ino** in the Arduino IDE. Replace \`THE_NAME_OF_YOUR_WIFI_NETWORK\` and \`THE_PASSWORD_OF_YOUR_WIFI_NETWORK\` with your WiFi credentials.  
Click the Upload button to compile and flash your board.`,
			},
			{
				name: 'Post-Flashing & AP Setup',
				text: `After flashing, disconnect and reconnect the ESP32.  
It will create an access point with the SSID and password specified in the code. Connect your device to this AP and navigate to **http://192.168.4.1** in a web browser to access the LED control interface.`,
			},
			{
				name: 'Code Customization & Tips',
				text: `- Adjust **LED_PIN**, **NUM_LEDS**, **LED_TYPE**, and **COLOR_ORDER** to match your hardware.  
- Do not power the LED strip directly from the ESP32; use a separate 5V power source.  
- To connect to an existing WiFi network instead of AP mode, replace \`WiFi.softAP(ssid, password);\` with \`WiFi.begin(ssid, password);\`.`,
			},
			{
				name: 'Advanced Considerations',
				text: `For more complex interfaces, serve HTML from SPIFFS or LittleFS.  
Add error handling and logging for robustness.`,
			},
		],
	};

	const jsonLd = {
		'@context': 'https://schema.org/',
		'@type': 'HowTo',
		name: data.title,
		description: data.shortDescription,
		totalTime: data.totalTime,
		image: data.image,
		datePublished: data.datePublished,
		supply: data.supplies.map((item) => ({
			'@type': 'HowToSupply',
			name: item,
		})),
		tool: data.tools.map((item) => ({ '@type': 'HowToTool', name: item })),
		step: data.steps.map((step, i) => ({
			'@type': 'HowToStep',
			name: step.name,
			text: step.text,
			position: i + 1,
		})),
	};

	return (
		<>
			<Head>
				<title>{data.title} – My Test Site</title>
				<meta name="description" content={data.shortDescription} />
				<meta property="og:title" content={data.title} />
				<meta property="og:description" content={data.shortDescription} />
				<meta property="og:image" content={data.fullUrl + data.image} />
				<meta property="og:url" content={data.fullUrl} />
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
								src={data.image}
								alt="ESP32 LED control schema diagram"
								fill
								className="object-cover"
								priority
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div>
								<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
									<Wrench className="h-5 w-5" />
									Required Tools
								</h2>
								<ul className="space-y-2">
									{data.tools.map((tool, index) => (
										<li key={index} className="flex items-start gap-2">
											<span className="text-primary">•</span>
											<span>{tool}</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
									<Package className="h-5 w-5" />
									Parts List
								</h2>
								<ul className="space-y-2">
									{data.supplies.map((supply, index) => (
										<li key={index} className="flex items-start gap-2">
											<span className="text-primary">•</span>
											<span>{supply}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="flex items-center gap-2 mb-6">
							<Clock className="h-4 w-4 text-muted-foreground" />
							<span className="text-sm text-muted-foreground">
								Estimated time: 30 minutes
							</span>
						</div>

						<Separator className="my-6" />

						<Alert className="mb-6">
							<AlertCircle className="h-4 w-4" />
							<AlertTitle>Important Note</AlertTitle>
							<AlertDescription>
								Make sure to follow the steps in order and double-check all
								connections before powering on the ESP32.
							</AlertDescription>
						</Alert>

						<Accordion type="single" collapsible className="w-full">
							{data.steps.map((step, index) => (
								<AccordionItem key={index} value={`step-${index}`}>
									<AccordionTrigger className="text-lg hover:no-underline">
										<div className="flex items-center gap-3">
											<Badge
												variant="secondary"
												className="h-6 w-6 flex items-center justify-center"
											>
												{index + 1}
											</Badge>
											{step.name}
										</div>
									</AccordionTrigger>
									<AccordionContent>
										<div className="prose prose-sm max-w-none pl-9">
											{parseText(step.text).map((line, i) => (
												<p
													key={i}
													className="mb-3 last:mb-0 text-muted-foreground"
													dangerouslySetInnerHTML={{ __html: line }}
												/>
											))}
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>

						<Separator className="my-6" />

						<div className="prose prose-sm max-w-none">
							<h2>Conclusion</h2>
							<p>
								After following these steps, your ESP32 should host a web server
								that allows you to control LEDs through a simple web interface.
								Feel free to modify the code and hardware setup to fit your
								project&apos;s needs.
							</p>
						</div>

						{/* Festival Application Section */}
						<div className="mt-12">
							<h2 className="text-3xl font-bold mb-8">
								See It in Action at FĀZE&apos;25
							</h2>
							<Card>
								<CardHeader>
									<CardTitle className="text-2xl">
										Interactive Light Installations
									</CardTitle>
									<CardDescription>
										Experience this technology in a large-scale festival setting
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<div className="space-y-4">
											<div className="flex items-center gap-2">
												<Calendar className="h-5 w-5 text-muted-foreground" />
												<div>
													<p className="text-sm text-muted-foreground">
														Event Dates
													</p>
													<p className="font-medium">July 18-19, 2025</p>
												</div>
											</div>
											<div className="flex items-center gap-2">
												<Clock className="h-5 w-5 text-muted-foreground" />
												<div>
													<p className="text-sm text-muted-foreground">
														Installation Hours
													</p>
													<p className="font-medium">6:00 PM - 11:00 PM</p>
												</div>
											</div>
											<div className="prose prose-sm max-w-none">
												<p>
													At FĀZE&apos;25, we&apos;ll be using this exact
													technology to create interactive light installations
													throughout the festival grounds. Visitors will be able
													to control the lighting patterns through their
													smartphones, creating a unique and immersive
													experience.
												</p>
												<p>The installations will feature:</p>
												<ul>
													<li>Interactive light walls responding to music</li>
													<li>
														Color-changing pathways through the castle ruins
													</li>
													<li>
														Participatory light sculptures controlled by the
														audience
													</li>
													<li>
														Dynamic stage lighting synchronized with
														performances
													</li>
												</ul>
											</div>
										</div>
										<div className="relative aspect-video rounded-lg overflow-hidden">
											<Image
												src="/images/cover.webp"
												alt="Festival Light Installations"
												fill
												className="object-cover"
											/>
										</div>
									</div>
									<div className="mt-6">
										<Button asChild className="w-full">
											<Link href="/event">Learn More About FĀZE&apos;25</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					</CardContent>
				</Card>
			</main>
		</>
	);
}
