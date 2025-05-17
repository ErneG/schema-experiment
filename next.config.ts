import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		domains: ['static.wixstatic.com', 'video.wixstatic.com'],
	},
	async redirects() {
		return [
			{
				source: '/event',
				destination: '/festivals-FAZE-2025',
				permanent: true, // This makes it a 301 redirect
			},
		];
	},
};

export default nextConfig;
