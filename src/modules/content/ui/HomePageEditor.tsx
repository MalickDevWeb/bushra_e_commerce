const heroContent = {
  title: "L'élégance au service de vos sens",
  subtitle: "Découvrez nos collections de parfums et encens traditionnels.",
};

type TextFieldProps = {
  id: string;
  label: string;
  defaultValue: string;
};

function TextField({ id, label, defaultValue }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] text-[#a89b82] mb-1">
        {label}
      </label>
      <input
        id={id}
        type="text"
        defaultValue={defaultValue}
        className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2 focus:outline-none focus:border-[#d4af37]"
      />
    </div>
  );
}

function ImagePicker() {
  return (
    <div>
      <label htmlFor="hero-image" className="block text-[13px] text-[#a89b82] mb-1">
        Image de fond
      </label>
      <button
        id="hero-image"
        type="button"
        className="w-full h-32 border-2 border-dashed border-[#d4af37]/30 rounded-md flex items-center justify-center text-[#a89b82] cursor-pointer hover:border-[#d4af37]/60 transition-colors"
      >
        Cliquez pour changer l&apos;image
      </button>
    </div>
  );
}

export function HomePageEditor() {
  return (
    <section className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6">
      <h2 className="text-lg font-serif font-bold text-[#d4af37] mb-4">Bannière principale (Hero)</h2>
      <div className="space-y-4">
        <TextField id="hero-title" label="Titre principal" defaultValue={heroContent.title} />
        <TextField id="hero-subtitle" label="Sous-titre" defaultValue={heroContent.subtitle} />
        <ImagePicker />
      </div>
    </section>
  );
}
