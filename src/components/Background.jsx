const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-zinc-950 overflow-hidden">
      {/* Dynamic Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-pan"
      />
      {/* Subtle solid color mesh accent */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-float" />
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Background;
