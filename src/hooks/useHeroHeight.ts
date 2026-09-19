/**
 * Height of the hero section right now. The hero is 680px on mobile but fluid on larger
 * screens, so the scroll thresholds that depend on it (solid header, floating button)
 * are derived from it instead of being hard-coded.
 */
export function heroHeight(): number {
  return document.querySelector<HTMLElement>('.hero')?.offsetHeight ?? 680
}
