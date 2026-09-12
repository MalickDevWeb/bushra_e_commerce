export default function ContenuAccueilPage() {
  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Page d'Accueil</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Personnalisez les sections de votre page d'accueil</p>
        </div>
        <button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          Enregistrer les modifications
        </button>
      </div>

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6">
        <h2 className="text-lg font-serif font-bold text-[#d4af37] mb-4">Bannière principale (Hero)</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1">Titre principal</label>
            <input type="text" defaultValue="L'élégance au service de vos sens" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2 focus:outline-none focus:border-[#d4af37]" />
          </div>
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1">Sous-titre</label>
            <input type="text" defaultValue="Découvrez nos collections de parfums et encens traditionnels." className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2 focus:outline-none focus:border-[#d4af37]" />
          </div>
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1">Image de fond</label>
            <div className="w-full h-32 border-2 border-dashed border-[#d4af37]/30 rounded-md flex items-center justify-center text-[#a89b82] cursor-pointer hover:border-[#d4af37]/60 transition-colors">
              Cliquez pour changer l'image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

