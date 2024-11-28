<script lang="ts">
    // import { drawerClose } from '$lib/Drawer/Drawer.svelte';
    import { getDrawerStore } from "@skeletonlabs/skeleton";
    import { page } from "$app/stores";

    const drawerStore = getDrawerStore();

    function drawerClose(): void {
        drawerStore.close();
    }

    $: classesActive = (href: string) => (href === $page.url.pathname ? '!variant-filled-tertiary' : '');
</script>

<nav class="list-nav">
	<ul>
		<li ><a href="/" class="{classesActive("/")}" on:click={drawerClose}>Homepage</a></li>
        <li ><a href="/aboutme" class="{classesActive("/aboutme")}" on:click={drawerClose}>About Me</a></li>
        <li><a href="/skills" class="{classesActive("/skills")}" on:click={drawerClose}>Skills</a></li>
        <li><a href="/projects" class="{classesActive("/projects")}" on:click={drawerClose}>Projects</a></li>
        <li><a href="/research" class="{classesActive("/research")}" on:click={drawerClose}>Research</a></li>
	</ul>
</nav>