<script lang="ts">

	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
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


	// This can be false if you're using a fallback (i.e. SPA mode)
	export const prerender = true;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>

			<svelte:fragment slot="lead">
				<!-- <h3 class="h3">David Hernandez</h3> -->
				 <figure >
					<img src="/logo.png" alt="Logo" style="max-width: 50px; max-height: 50px; width: auto; height: auto;" />
			</svelte:fragment>
			

			<svelte:fragment slot="trail">
				<!-- <a href="./">
					<strong class="text-xl">Home</strong>
				</a> -->

				<TabGroup justify="justify-center">
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


	<slot />
</AppShell>
