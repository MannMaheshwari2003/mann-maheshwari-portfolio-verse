/**
 * Bauhaus geometric mark — circle (red), square (blue), triangle (yellow).
 * Sized & styled by parent via className. Defaults to a compact navbar size.
 */
interface GeometricLogoProps {
  className?: string;
  size?: number;
}

const GeometricLogo = ({ className = "", size = 28 }: GeometricLogoProps) => {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center gap-1 ${className}`}
      style={{ height: size }}
    >
      <span
        className="rounded-full bg-[hsl(var(--primary))] border-2 border-foreground"
        style={{ width: size * 0.6, height: size * 0.6 }}
      />
      <span
        className="bg-[hsl(var(--secondary))] border-2 border-foreground"
        style={{ width: size * 0.6, height: size * 0.6 }}
      />
      <span
        className="bg-[hsl(var(--accent))] border-2 border-foreground clip-triangle"
        style={{ width: size * 0.7, height: size * 0.6 }}
      />
    </span>
  );
};

export default GeometricLogo;
