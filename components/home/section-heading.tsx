type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-1">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading">{title}</h2>
      <p className="section-copy mt-5">{description}</p>
    </div>
  );
}
