import { Context } from "@nuxt/types"
import { Inject } from "@nuxt/types/app"

export default function ({ $config }: Context, inject: Inject) {
	const appId = $config.algoliaAppID
	const apiKey = $config.algoliaApiKey
	const headers = {
		'X-Algolia-API-Key': apiKey,
		'X-Algolia-Application-Id': appId
	}

	inject('dataApi', { getHome })

	async function getHome(homeId: string) {
		try {
			const res = await fetch(`https://${appId}-dsn.algoliaa.net/1/indexes/homes/${homeId}`, { headers })
			return unWrap(res)
		} catch (error) {
			return getErrorResponse(error)
		}
	}

	async function unWrap(response: Response) {
		const data = await response.json()
		const { ok, status, statusText } = response
		return { data, ok, status, statusText }
	}

	function getErrorResponse(error: any) {
		return {
			ok: false,
			status: 500,
			statusText: error.message,
			data: {}
		}
	}
}