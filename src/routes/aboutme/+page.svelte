<!-- <div
	class="relative min-h-screen bg-gradient-to-tr from-blue-500/50 via-purple-500/50 to-indigo-500/50"
> -->
	<div class="container mx-auto flex justify-center items-center min-h-screen">
		<div class="space-y-10 text-center flex flex-col items-center py-10">
			<h2 class="h2 max-w-lg mx-auto">About Me 👋</h2>

			<!-- Photo -->
			<!-- <div class="w-32 h-32 rounded-full overflow-hidden shadow-lg">
				<img src="/path-to-your-photo.jpg" alt="David's Photo" class="w-full h-full object-cover">
			</div> -->

			<!-- Introduction -->
			<p class="text-lg max-w-lg mx-auto">
				Hi, I’m David! I’m a software engineer, researcher, and lifelong learner passionate about
				creating impactful solutions in AI and NLP. Outside of work, I enjoy exploring cutting-edge
				technologies and contributing to open-source projects.
			</p>

			<hr class="w-1/2 my-10" />


			<!-- Mission -->
			<h3 class="font-semibold text-lg">My Mission</h3>
			<p class="text-sm max-w-md mx-auto">
				I strive to bridge the gap between complex technology and real-world applications, creating
				tools that empower people and promote transparency, particularly in AI and government.
			</p>

			<!-- Skills -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
				<div>
					<h4 class="font-semibold">Technical Skills</h4>
					<ul class="list-disc list-inside">
						<li>Machine Learning & NLP</li>
						<li>Python, JavaScript</li>
						<li>Modern Web Development</li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold">Research Interests</h4>
					<ul class="list-disc list-inside">
						<li>Contradiction Detection</li>
						<li>NLI and RTE</li>
						<li>Transparency in AI</li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold">Soft Skills</h4>
					<ul class="list-disc list-inside">
						<li>Problem-Solving</li>
						<li>Team Collaboration</li>
						<li>Leadership</li>
					</ul>
				</div>
			</div>

			<!-- Journey -->
			<div class="mt-10">
				<h3 class="font-semibold text-lg">My Journey</h3>
				<ul class="text-sm max-w-lg mx-auto">
					<!-- <li><strong>2020:</strong> Started my CS degree and discovered my passion for AI.</li> -->
					<li>
						<strong>2023:</strong> Started my journey in research. Investigated topics such as Applied
						Affective Computing, AI/ML and started working at the IATPP.
					</li>
					<li>
						<strong>2024:</strong> Began my master’s as part of a 4+1 program, exploring advanced NLP
						techniques.
					</li>
					<li>
						<strong>2024:</strong> Developed an LLM-powered research alert system and delved deeper into
						public transparency projects.
					</li>
				</ul>
			</div>

			<!-- Hobbies -->
			<h3 class="font-semibold text-lg">Fun Facts About Me</h3>
			<p class="text-sm max-w-lg mx-auto">
				When I’m not coding or researching, I love hiking, reading about philosophy, and
				experimenting with new recipes in the kitchen. 🥘
			</p>

			<!-- Call to Action -->
			<!-- <div class="mt-10">
				<a href="/contact" class="btn variant-filled">Let’s Connect</a>
			</div> -->
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
