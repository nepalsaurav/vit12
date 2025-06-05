<script>
	let { label = '', question = '', required = false, options = [] } = $props();
</script>

<div class="field">
	<label class="label" for={label}>
		{question}
		{#if required}
			<span class="has-text-danger">*</span>
		{/if}
	</label>
	<div class="control">
		<div class="radios">
			<div class="is-flex is-flex-direction-column">
				{#each options as item}
					<label class="radio">
						<input type="radio" name={label} />
						{item.value}
					</label>
				{/each}
			</div>
		</div>
	</div>
</div>
