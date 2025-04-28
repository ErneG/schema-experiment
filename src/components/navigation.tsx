'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Calendar, Utensils, Cpu, Brain } from 'lucide-react';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function MainNav() {
	const pathname = usePathname();
	const router = useRouter();

	const navItems = [
		{
			href: '/event',
			label: 'Event',
			icon: Calendar,
		},
		{
			href: '/creamy-beetroot-soup',
			label: 'Recipe',
			icon: Utensils,
		},
		{
			href: '/esp-led-controller',
			label: 'Project',
			icon: Cpu,
		},
	];

	return (
		<NavigationMenu className="flex flex-row items-center gap-6">
			<div
				className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
				onClick={() => router.push('/')}
			>
				<Brain className="h-8 w-8 text-primary" strokeWidth={1} />
				BrainCorp
			</div>
			<NavigationMenuList>
				{navItems.map((item) => {
					const Icon = item.icon;
					return (
						<NavigationMenuItem key={item.href}>
							<NavigationMenuLink
								className={`${navigationMenuTriggerStyle()} cursor-pointer flex flex-row items-center hover:bg-accent/50 transition-colors`}
								active={pathname === item.href}
								onClick={() => router.push(item.href)}
							>
								<Icon className="mr-2 h-4 w-4" />
								{item.label}
							</NavigationMenuLink>
						</NavigationMenuItem>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
