// See https://kit.svelte.dev/docs/types#app

import type { User } from '@clerk/backend'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session:
				| {
						userId: string
						claims: unknown
						user?: User
				  }
				| undefined
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}

declare global {
	interface DocumentEventMap {
		'clerk-sveltekit:user': CustomEvent<UserResource>
	}
}
