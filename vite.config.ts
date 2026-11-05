import { defineConfig } from "vite";

// The site serves this bundle under /games-media/outpost-zero/dist/, NOT at the
// site root. Vite's default base "/" emits <script src="/assets/...">, which the
// browser then requests from lagjazz.com/assets/... and gets a 404 — a blank
// screen with no error in the game. Relative refs resolve against the entry URL.
export default defineConfig({
  base: "./",
});
