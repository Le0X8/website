import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';
import type { Page, Post } from '$lib/types';

export const entries: EntryGenerator = async () => {
	const pages = import.meta.glob('/src/pages/*.svx');
	const posts = import.meta.glob('/src/posts/*.svx');

	return Object.keys(pages)
		.map((path) => ({
			path: path.replace('/src/pages/', '').replace('.svx', '').replaceAll('_', '/')
		}))
		.concat(
			Object.keys(posts).map((path) => ({
				path: 'posts/' + path.replace('/src/posts/', '').replace('.svx', '').replaceAll('_', '/')
			}))
		)
		.concat([{ path: 'posts' }, { path: 'posts/linux' }, { path: 'posts/cs101' }]);
};

export async function load({ params }) {
	try {
		if (params.path === 'posts' || params.path === 'posts/linux' || params.path === 'posts/cs101') {
			let posts: Post[] = [];

			const paths = import.meta.glob('/src/posts/*.svx', { eager: true });

			for (const pathElement in paths) {
				const file = paths[pathElement];
				const path = pathElement.split('/').at(-1)?.replace('.svx', '');

				if (file && typeof file === 'object' && path) {
					const post = {
						...('metadata' in file ? (file.metadata as Omit<Post, 'slug'>) : {}),
						path
					} satisfies Post;
					posts.push(post);
				}
			}

			const category = params.path.slice(6);

			if (params.path !== 'posts') {
				posts = posts.filter(
					(post) => post.path.slice(0, category.length) === params.path.slice(6)
				);
			}

			posts = posts
				.map((post) => ({
					...post,
					title: post.title || 'Untitled',
					path: post.path.replaceAll('_', '/')
				}))
				.sort((a, b) => {
					return new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime();
				});

			return {
				meta: { posts, category },
				type: 'list'
			};
		}

		if (params.path.startsWith('posts/')) {
			const page = await import(
				`../../posts/${params.path.replace('posts/', '').replaceAll('/', '_')}.svx`
			);

			return {
				content: page.default,
				meta: page.metadata as Omit<Post, 'path'>,
				type: 'post'
			};
		}

		const page = await import(`../../pages/${params.path.replaceAll('/', '_')}.svx`);

		return {
			content: page.default,
			meta: page.metadata as Page,
			type: 'page'
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find ${params.path}`);
	}
}
