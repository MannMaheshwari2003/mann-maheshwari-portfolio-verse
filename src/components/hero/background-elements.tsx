/**
 * Bauhaus hero composition — overlapping circle, rotated square, triangle.
 * Pure decoration; behind hero content. All shapes are absolutely-positioned
 * relative to the parent panel.
 */
const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* dot grid behind everything */}
      <div className="absolute inset-0 dot-grid opacity-50" />
    </div>
  );
};

export default BackgroundElements;
