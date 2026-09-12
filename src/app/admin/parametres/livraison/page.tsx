export default function ParametresLivraisonPage() {
  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Modes de Livraison</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Configurez les zones et tarifs de livraison</p>
        </div>
        <button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32]">
          Sauvegarder
        </button>
      </div>
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6">
        <p className="text-[#a89b82]">Formulaire des tarifs de livraison à venir.</p>
      </div>
    </div>
  );
}

