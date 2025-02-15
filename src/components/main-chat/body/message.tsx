import Image from "next/image";

interface Props {}

export const Message: React.FC<Props> = () => {
	return (
		<div className="flex items-start space-x-2">
			<Image
			priority
				width={40}
				height={40}
				className="size-[40px] max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] rounded-full object-cover"
				src={"https://i.pinimg.com/236x/7e/42/81/7e42814080bab700d0b34984952d0989.jpg"}
				alt="avatar"
			/>
			<div className="rounded-lg bg-body p-3 gap-2">
				<div className="flex items-center">
					<h1 className="text-xs font-light text-text-seen">Username</h1>
				</div>
				<p className="text-sm font-normal text-text">Xin chào các bạn</p>
				<p className="text-[10px] text-text-seen">12:00</p>
			</div>
		</div>
	);
};
