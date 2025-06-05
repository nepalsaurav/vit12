<script lang="ts">
	//@ts-nocheck
	import { page } from '$app/state';
	import InputForm from '$lib/components/InputForm.svelte';
	import { questions } from '$lib/questions';
	import RadioQuestions from '$lib/components/RadioQuestions.svelte';
	let index = $state(0);
	let question = $state(null);
	$effect(() => {
		const query = page.url.searchParams;
		if (query.get('index') !== null) {
			index = parseInt(query.get('index'));
			// svelte-ignore state_referenced_locally
			question = questions[parseInt(index)];
		}
	});
</script>

<a href="/">back</a>
<p>Check vit12 Deficiency</p>

{#if question}
	<div class="card">
		<div class="card-content">
			{#if question.name === 'name'}
				<InputForm label="Name" placeholder="please enter your name" required={true} />
			{:else if question.type === 'radio'}
				<RadioQuestions
					label={question.label}
					question={question.question}
					options={question.options}
				/>
			{:else}
				<p>{question.type}</p>
			{/if}

			{#if questions.length - 1 === index}
				<div class="is-flex mt-4">
					<a href={`/check?index=${index - 1}`} class="button is-secondary">Prev</a>
					<button class="button is-primary ml-auto">Submit</button>
				</div>
			{:else if index > 0}
				<div class="is-flex ml-4">
					<a href={`/check?index=${index - 1}`} class="button is-secondary">Prev</a>
					<a href={`/check?index=${index + 1}`} class="button is-dark ml-auto">Next</a>
				</div>
			{:else}
				<a href={`/check?index=${index + 1}`} class="button is-dark mt-4">Next</a>
			{/if}
		</div>
	</div>
{/if}
