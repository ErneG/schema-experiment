import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
interface TalkCardProps {
	id: string;
	title: string;
	url: string;
	category: string;
}

export const TalkCard = ({ id, title, url, category }: TalkCardProps) => {
	return (
		<div className="h-[28.125rem] w-[28.125rem] bg-purple-500 rounded-xl overflow-hidden">
			<div className="h-1/2 w-full bg-blue-500 relative">
				<Image
					fill
					src="/images/intro_3.webp"
					alt="intro_3"
					className="object-cover"
				/>
				<div className="absolute top-4 left-5  flex flex-row gap-2.5 items-center justify-center">
					<div className="h-7.5 w-7.5 bg-white rounded-full flex items-center justify-center text-base">
						{id}
					</div>
					<div className="text-sm rounded-sm py-1 px-3  border border-slate-500 font-light">
						{title}
					</div>
					<div className="h-7.5 w-7.5  rounded-full flex items-center justify-center">
						<ArrowRight strokeWidth={1.5} className="w-5 h-5 text-black" />
					</div>
				</div>
			</div>
			<div className="pt-6  pb-6 px-4 h-1/2 w-full">
				<div className="h-full w-full bg-green-500 flex flex-col gap-2">
					<p className="font-light text-base">{category}</p>
					<h5 className="font-normal text-xl">{title}</h5>
					<p className="font-light text-sm ">
						A new year. A new chance to take a look at new trends and new
						opportunities to transform the hospitality industry. What are we
						predicting? Take a listen.{' '}
					</p>
				</div>
			</div>
		</div>
	);
};
