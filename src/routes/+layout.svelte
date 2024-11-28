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

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>

			<svelte:fragment slot="lead">
				<!-- <h3 class="h3">David Hernandez</h3> -->
				 <figure >
					<img src="/logo.png" alt="Logo" />
				</figure>
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
