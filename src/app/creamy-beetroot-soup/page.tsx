// pages/recipe.tsx

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Users, Utensils } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function RecipePage() {
	const data = {
		title: 'Aukstā biešu zupa (Latvian Creamy Cold Beet Soup)',
		shortDescription:
			'A refreshing and tangy cold beet soup from Latvia, perfect for hot summer days.',
		fullUrl: 'https://your-domain.com/recipe',
		image: '/images/auksta-biesu-zupa.jpg',
		author: { name: 'Your Name', url: 'https://your-domain.com/about' },
		datePublished: '2025-04-22',
		prepTime: 'PT20M',
		cookTime: 'PT30M',
		totalTime: 'PT50M',
		recipeYield: '4 servings',
		recipeCategory: 'Soup',
		recipeCuisine: 'Latvian',
		keywords: ['beet', 'soup', 'cold soup', 'Latvian recipe'],
		nutrition: {
			calories: '150 kcal',
			fatContent: '6 g',
			carbohydrateContent: '18 g',
			proteinContent: '4 g',
		},
		ingredients: [
			'4 medium beets, roasted or boiled, peeled and diced',
			'1 large cucumber, diced',
			'4 radishes, thinly sliced',
			'1 small bunch fresh dill, chopped',
			'2 green onions, thinly sliced',
			'4 cups plain kefir or buttermilk',
			'1 cup sour cream',
			'1 Tbsp lemon juice',
			'Salt and freshly ground black pepper, to taste',
			'4 hard‑boiled eggs, halved (optional garnish)',
		],
		instructions: [
			'In a blender, combine diced beets, kefir (or buttermilk), and sour cream. Blend until smooth and creamy.',
			'Pour mixture into a large bowl. Stir in cucumber, radishes, dill, and green onions.',
			'Season with lemon juice, salt, and pepper. Adjust seasoning to taste.',
			'Chill in the refrigerator for at least 1 hour to let flavors meld.',
			'Serve cold, garnished with egg halves and a sprig of dill.',
		],
		tips: [
			'Roast beets wrapped in foil to intensify their sweetness.',
			'Substitute sour cream with Greek yogurt for a lighter texture.',
			'Add a splash of vinegar for extra tang.',
		],
		aggregateRating: {
			ratingValue: 4.8,
			ratingCount: 24,
		},
	};

	const jsonLd = {
		'@context': 'https://schema.org/',
		'@type': 'Recipe',
		name: data.title,
		image: [data.image],
		author: { '@type': 'Person', name: data.author.name, url: data.author.url },
		datePublished: data.datePublished,
		description: data.shortDescription,
		prepTime: data.prepTime,
		cookTime: data.cookTime,
		totalTime: data.totalTime,
		recipeYield: data.recipeYield,
		recipeCategory: data.recipeCategory,
		recipeCuisine: data.recipeCuisine,
		keywords: data.keywords.join(', '),
		nutrition: { '@type': 'NutritionInformation', ...data.nutrition },
		recipeIngredient: data.ingredients,
		recipeInstructions: data.instructions.map((step, i) => ({
			'@type': 'HowToStep',
			text: step,
			position: i + 1,
		})),
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: data.aggregateRating.ratingValue,
			reviewCount: data.aggregateRating.ratingCount,
		},
	};

	return (
		<div>
			{/* <Head>
				<title>{data.title} – My Test Site</title>
				<meta name="description" content={data.shortDescription} />
				<meta property="og:title" content={data.title} />
				<meta property="og:description" content={data.shortDescription} />
				<meta property="og:image" content={data.fullUrl + data.image} />
				<meta property="og:url" content={data.fullUrl} />
				<meta name="twitter:card" content="summary_large_image" />
				<link rel="canonical" href={data.fullUrl} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			</Head> */}
			<main className="container max-w-4xl mx-auto py-8 px-4">
				<nav className="text-sm mb-6">
					<Link href="/" className="text-primary hover:underline">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-muted-foreground">Recipe</span>
				</nav>

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
								alt="Bowl of creamy cold beet soup"
								fill
								className="object-cover"
								priority
							/>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
							<div className="flex items-center gap-2">
								<Clock className="h-4 w-4 text-muted-foreground" />
								<span>{data.totalTime}</span>
							</div>
							<div className="flex items-center gap-2">
								<Users className="h-4 w-4 text-muted-foreground" />
								<span>{data.recipeYield}</span>
							</div>
							<div className="flex items-center gap-2">
								<Utensils className="h-4 w-4 text-muted-foreground" />
								<span>{data.recipeCategory}</span>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4 text-muted-foreground" />
								<span>{data.recipeCuisine}</span>
							</div>
						</div>

						<Separator className="my-6" />

						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h2 className="text-xl font-semibold mb-4">Ingredients</h2>
								<ul className="space-y-2">
									{data.ingredients.map((ingredient, index) => (
										<li key={index} className="flex items-start gap-2">
											<span className="text-primary">•</span>
											<span>{ingredient}</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h2 className="text-xl font-semibold mb-4">Instructions</h2>
								<ol className="space-y-4">
									{data.instructions.map((instruction, index) => (
										<li key={index} className="flex gap-3">
											<span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground">
												{index + 1}
											</span>
											<span>{instruction}</span>
										</li>
									))}
								</ol>
							</div>
						</div>

						<Separator className="my-6" />

						<div className="space-y-6">
							<div>
								<h2 className="text-xl font-semibold mb-4">
									Tips & Variations
								</h2>
								<ul className="space-y-2">
									{data.tips.map((tip, index) => (
										<li key={index} className="flex items-start gap-2">
											<span className="text-primary">•</span>
											<span>{tip}</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h2 className="text-xl font-semibold mb-4">
									Nutrition Information
								</h2>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									<div className="p-4 bg-muted rounded-lg text-center">
										<div className="text-sm text-muted-foreground">
											Calories
										</div>
										<div className="font-semibold">
											{data.nutrition.calories}
										</div>
									</div>
									<div className="p-4 bg-muted rounded-lg text-center">
										<div className="text-sm text-muted-foreground">Fat</div>
										<div className="font-semibold">
											{data.nutrition.fatContent}
										</div>
									</div>
									<div className="p-4 bg-muted rounded-lg text-center">
										<div className="text-sm text-muted-foreground">Carbs</div>
										<div className="font-semibold">
											{data.nutrition.carbohydrateContent}
										</div>
									</div>
									<div className="p-4 bg-muted rounded-lg text-center">
										<div className="text-sm text-muted-foreground">Protein</div>
										<div className="font-semibold">
											{data.nutrition.proteinContent}
										</div>
									</div>
								</div>
							</div>
						</div>

						<Separator className="my-6" />

						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<Avatar>
									<AvatarImage
										src="/images/avatar.jpg"
										alt={data.author.name}
									/>
									<AvatarFallback>
										{data.author.name
											.split(' ')
											.map((n) => n[0])
											.join('')}
									</AvatarFallback>
								</Avatar>
								<div>
									<p className="font-medium">Recipe by</p>
									<a
										href={data.author.url}
										className="text-primary hover:underline"
									>
										{data.author.name}
									</a>
								</div>
							</div>
							<div className="text-right">
								<p className="text-sm text-muted-foreground">Published on</p>
								<p className="font-medium">
									{new Date(data.datePublished).toLocaleDateString()}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}
