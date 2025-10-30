export interface Page {
	title?: string;
}

export interface Post extends Page {
	path: string;
}
