/**
 * Bauhaus hero "avatar" — a constructivist composition.
 * Features the photo inside a circle, layered with a yellow square,
 * blue rectangle, and red triangle. Lower-right corner badges add tags.
 */
const HeroAvatar = () => {
  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto">
      {/* Yellow square — back layer, offset top-left */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-[70%] h-[70%] bg-[hsl(var(--accent))] border-2 md:border-4 border-foreground shadow-bauhaus-lg"
      />

      {/* Blue rectangle — back layer, bottom-right */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[hsl(var(--secondary))] border-2 md:border-4 border-foreground"
      />

      {/* Red triangle — accent, top-right */}
      <div
        aria-hidden="true"
        className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-[hsl(var(--primary))] clip-triangle"
      />

      {/* Photo circle — front, centered */}
      <div className="absolute inset-[12%] rounded-full overflow-hidden border-2 md:border-4 border-foreground bg-card shadow-bauhaus-xl">
        <img
          src="/lovable-uploads/331208d5-833a-4bdd-85f2-97e0ab0aabb1.png"
          alt="Mann Maheshwari — Full Stack Developer"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Tag badges */}
      <div className="absolute -bottom-3 left-4 px-3 py-1.5 border-2 border-foreground bg-card text-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-bauhaus-sm">
        React · Node
      </div>
      <div className="absolute top-6 -right-2 px-3 py-1.5 border-2 border-foreground bg-foreground text-background text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-bauhaus-sm">
        MERN
      </div>
    </div>
  );
};

export default HeroAvatar;
