export default function DarkModeToggle() {
	const mode: string = 'light';
	return (
		<div className="w-11 h-6 p-[2px] border-[1.5px] border-[#53c28b70] rounded-[30px] flex items-center justify-between cursor-pointer relative">
			<div className="text-sm">🌙</div>
			<div className="text-sm">🔆</div>
			<div
				className={`${
					mode === 'dark' ? 'left-[2px]' : 'right-[2px]'
				} w-4 h-4 rounded-full bg-[#53c28b] absolute `}
			/>
		</div>
	);
}
