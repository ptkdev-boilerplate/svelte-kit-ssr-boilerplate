<script lang="ts">
	/**
	 * Home HTML
	 * =====================
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import Menu from "$lib/components/common/menu/menu.svelte";
	import Footer from "$lib/components/common/footer/footer.svelte";

	import "$lib/../node_modules/bulma/css/bulma.min.css";
	import "$lib/../node_modules/bulma-extensions/dist/css/bulma-extensions.min.css";
	import "$lib/components/common/darkmode/darkmode.scss";
</script>

<Menu />

<main>
	<slot />
</main>

<Footer />
