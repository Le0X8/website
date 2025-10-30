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
		.concat([{ path: 'posts' }]);
};

export async function load({ params }) {
	try {
		if (params.path === 'posts') {
			const posts: Post[] = [];

			const paths = import.meta.glob('/src/pages/posts/*.svx', { eager: true });

			for (const pathElement in paths) {
				const file = paths[pathElement];
				const path = pathElement.split('/').at(-1)?.replace('.svx', '');

				if (file && typeof file === 'object' && 'metadata' in file && path) {
					const metadata = file.metadata as Omit<Post, 'slug'>;
					const post = { ...metadata, path } satisfies Post;
					posts.push(post);
				}
			}

			return {
				meta: posts,
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
