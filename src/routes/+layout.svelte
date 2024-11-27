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

	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	let showTabs = false; // Controls the visibility of the tab group
	let tabSet = 0; // Manages the active tab state
	

	// This can be false if you're using a fallback (i.e. SPA mode)
	export const prerender = true;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">David Hernandez</strong>
			</svelte:fragment>
			
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface hide-on-small"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<!-- <a
					class="btn btn-sm variant-ghost-surface hide-on-small"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a> -->
				<a
					class="btn btn-sm variant-ghost-surface hide-on-small"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->

	<svelte:fragment slot="footer">
		<TabGroup justify="justify-center">
			<Tab bind:group={tabSet} name="tab1" value={0}>
				<svelte:fragment slot="lead">🏠</svelte:fragment>
				<span>Home</span>
			</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>
				<svelte:fragment slot="lead">🔍</svelte:fragment>
				<span>Search</span>
			</Tab>
			<Tab bind:group={tabSet} name="tab3" value={2}>
				<svelte:fragment slot="lead">⚙️</svelte:fragment>
				<span>Settings</span>
			</Tab>
			<!-- <svelte:fragment slot="panel">
				{#if tabSet === 0}
					<p>Home content</p>
				{:else if tabSet === 1}
					<p>Search content</p>
				{:else if tabSet === 2}
					<p>Settings content</p>
				{/if}
			</svelte:fragment> -->
		</TabGroup>
	</svelte:fragment>
	<slot />
</AppShell>
