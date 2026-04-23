/**
 * Bauhaus background — subtle floating geometric shapes that drift.
 * Replaces the legacy floating orbs.
 */
const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* large yellow circle, top-left */}
      <div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[hsl(var(--accent))] opacity-[0.12] dark:opacity-[0.08]"
      />
      {/* blue square, bottom-right */}
      <div
        className="absolute -bottom-40 -right-24 w-[380px] h-[380px] bg-[hsl(var(--secondary))] opacity-[0.10] dark:opacity-[0.07] rotate-12"
      />
      {/* small red triangle, mid-left */}
      <div
        className="absolute top-1/2 left-8 w-32 h-32 bg-[hsl(var(--primary))] opacity-[0.10] dark:opacity-[0.07] clip-triangle"
      />
    </div>
  );
};

export default FloatingOrbs;
