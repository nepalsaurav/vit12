<script lang="ts">
	let { label = '', className = '', type = '', placeholder = '',  required=false } = $props();
</script>

<div class="field">
	<label class="label" for={label}>
        {label}
        {#if required}
         <span class="has-text-danger">*</span>
        {/if}
    </label>
	<div class="control">
		<input class={['input', className]} id={label} {type} {placeholder} required={required} />
	</div>
</div>
