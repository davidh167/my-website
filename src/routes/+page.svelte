<!-- <div
	class="relative min-h-screen bg-gradient-to-tr from-blue-500/50 via-purple-500/50 to-indigo-500/50"
> -->
	<div class="container mx-auto flex justify-center items-center min-h-screen">
		<div class="space-y-10 text-center flex flex-col items-center py-10">
			<h2 class="h2 max-w-xl mx-auto">Hi, my name is David! 👋</h2>

			<!-- Animated Logo -->
			<section class="img-bg"></section>

			<p class="text-lg max-w-lg mx-auto">
				I’m a software engineer and researcher specializing in AI and NLP. Let’s build something
				impactful together!
			</p>

			<hr class="w-1/2 my-10" />

			<h2 class="h2">What I do</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
				<div class="text-center">
					<h3 class="font-semibold text-lg mt-4">Machine Learning</h3>
					<p class="text-sm">Experience with building, optimizing, and deploying ML models.</p>
				</div>
				<div class="text-center">
					<h3 class="font-semibold text-lg mt-4">Software Development</h3>
					<p class="text-sm">Proficient in Python, JavaScript, and modern web development.</p>
				</div>
				<div class="text-center">
					<h3 class="font-semibold text-lg mt-4">NLP Research</h3>
					<p class="text-sm">Focused on contradiction detection and advancing NLI techniques.</p>
				</div>
			</div>

			<div class="flex justify-center space-x-2">
				<a
					class="btn variant-filled"
					href="https://david-h-resume.tiiny.site"
					target="_blank"
					rel="noreferrer"
				>
					See my Resume
				</a>
			</div>
		</div>
	</div>
<!-- </div> -->

<style lang="postcss">
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
