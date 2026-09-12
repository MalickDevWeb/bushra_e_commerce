export default function ContenuAProposPage() {
  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Page À Propos</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Racontez l'histoire de Bushra</p>
        </div>
      </div>
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6 flex items-center justify-center min-h-[400px]">
        <p className="text-[#a89b82]">Éditeur de texte riche (WYSIWYG) à intégrer ici.</p>
      </div>
    </div>
  );
}

