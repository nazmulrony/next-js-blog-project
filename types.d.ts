type Blog = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

type ItemCategory = {
	id: number;
	title: string;
	desc: string;
	image: string;
};

type Items = {
	[key: string]: ItemCategory[];
};

type Post = {
	_id: string;
	title: string;
	desc: string;
	img: string;
	content: string;
	username: string;
};

type UserType = {
	name: string;
	email: string;
	password: string;
};
