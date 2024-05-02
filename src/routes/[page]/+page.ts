import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		if (params.page === 'start') throw new Error();
		const post = await import(`$pages/${params.page}.svx`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.page}`)
	}
}
