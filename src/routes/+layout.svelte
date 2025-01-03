<script lang="ts">

	import Navigation from '$lib/Navigation/Navigation.svelte';
	import { initializeStores, Drawer, getDrawerStore} from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore =	 getDrawerStore();


	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	


	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		// Provide your property overrides:
		bgDrawer: 'bg-slate-800 text-white',
		// bgBackdrop: 'bg-gradient-to-tr from-blue-500/50 via-purple-500/50 to-indigo-500/50',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl',
	};

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}

	// This can be false if you're using a fallback (i.e. SPA mode)
	export const prerender = true;
</script>

<style>
	/* Default: figure is visible */
	figure {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  max-width: 100%;
	  margin: 0 auto;
	}
  
	figure img {
	  max-width: 50px;
	  max-height: 50px;
	  width: auto;
	  height: auto;
	}
  
	/* When the viewport width exceeds 768px, hide the figure */
	@media screen and (max-width: 550px) {
	  figure {
		display: none;
	  }
	}



  </style>

<link href="https://cdn.jsdelivr.net/npm/devicon@2.16.0/devicon.min.css" rel="stylesheet">

<Drawer>
	<hr style="margin-top: 10px; margin-bottom 10px;" />
		<strong class="text-xl p-4">
			Navigation
		</strong>
		<!-- <h2 class="p-4">
			Navigation
		</h2> -->
	<hr />
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">

				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">David Hernandez</strong>
					<figure style="margin-left: 15px;">
						<img src="/logo.png" alt="Logo" />
					</figure>
				</div>


				<!-- <h3 class="h3">David Hernandez</h3> -->
				
			</svelte:fragment>
			

			<svelte:fragment slot="trail">
				<!-- <a href="./">
					<strong class="text-xl">Home</strong>
				</a> -->

				<TabGroup justify="justify-center" class="hidden lg:flex">
					<TabAnchor href="/" selected={$page.url.pathname === '/'}>
						<!-- <svelte:fragment slot="lead">🏠</svelte:fragment> -->
						<span>Home</span>
					</TabAnchor><TabAnchor href="/aboutme" selected={$page.url.pathname === '/aboutme'}>
						<!-- <svelte:fragment slot="lead">🏠</svelte:fragment> -->
						<span>About Me</span>
					</TabAnchor>
					<TabAnchor href="/skills" selected={$page.url.pathname === '/skills'}>
						<!-- <svelte:fragment slot="lead">🔍</svelte:fragment> -->
						<span>Skills</span>
					</TabAnchor>
					<TabAnchor href="/projects" selected={$page.url.pathname === '/projects'} >
						<!-- <svelte:fragment slot="lead">⚙️</svelte:fragment> -->
						<span>Projects</span>
					</TabAnchor>
					<TabAnchor href="/research" selected={$page.url.pathname === '/research'}>
						<!-- <svelte:fragment slot="lead">📚</svelte:fragment> -->
						<span>Research</span>
					</TabAnchor>
		
				</TabGroup>
		

			</svelte:fragment>

		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->

	<svelte:fragment slot="footer">
	 <!-- Empty at the Moment -->
	</svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft">
		<Navigation/>

	</svelte:fragment> -->

	<slot />
</AppShell>