<script lang="ts">
    // import { drawerClose } from '$lib/Drawer/Drawer.svelte';
    import { getDrawerStore } from "@skeletonlabs/skeleton";

    const drawerStore = getDrawerStore();

    function drawerClose(): void {
        drawerStore.close();
    }
</script>

<nav class="list-nav">
	<ul>
		<li><a href="/" on:click={drawerClose}>Homepage</a></li>
        <li><a href="/aboutme" on:click={drawerClose}>About Me</a></li>
        <li><a href="/skills" on:click={drawerClose}>Skills</a></li>
        <li><a href="/projects" on:click={drawerClose}>Projects</a></li>
        <li><a href="/research" on:click={drawerClose}>Research</a></li>
	</ul>
</nav>