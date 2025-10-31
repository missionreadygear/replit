import SkipToContent from '../SkipToContent';

export default function SkipToContentExample() {
  return (
    <div className="p-8">
      <p className="mb-4 text-sm text-muted-foreground">
        Press Tab to see the skip link appear
      </p>
      <SkipToContent />
    </div>
  );
}
