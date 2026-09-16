import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { RecommendationCard } from "./RecommendationCard";
import { getHandledDecisions } from "../actions/decision.actions";
import { prisma } from "@/lib/prisma";

export default async function DecisionCenterPage() {
  const handled = await getHandledDecisions();
  
  // Fake recommendation ID for the demo
  const oppId = "rec-aissatou-oud-001";
  
  // Fetch real user "Aïssatou Diallo" to make it look dynamic if we seeded it
  const aissatou = await prisma.user.findFirst({ where: { email: "aissatou.demo@bushra.com" } });
  
  const customerName = aissatou?.name || "Aïssatou Diallo";
  const orderCount = aissatou ? await prisma.order.count({ where: { userId: aissatou.id } }) : 6;
  const confidence = 82;
  const message = `Bonjour ${customerName.split(' ')[0]} 👋, nous avons remarqué que vous aimez beaucoup nos produits de la catégorie Oud. Nous avons de nouvelles collections qui pourraient vous intéresser, avec une remise spéciale !`;

  const isOppHandled = handled.includes(oppId);

  return (
    <AdminPageShell>
      <AdminPageHeader 
        title="Sama Client" 
        description="Le moteur de recommandation basé sur vos données."
        action={
          <div className="flex items-center gap-2 text-sm text-[#a89b82] bg-[#14120f] border border-[#d4af37]/20 px-3 py-1.5 rounded-md">
            <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse"></span>
            Moteur actif
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Context & AI Chat */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1c1813] border border-[#d4af37]/20 rounded-xl p-5">
            <h3 className="font-semibold text-[#e8e1d3] mb-4 text-sm uppercase tracking-wider">Aujourd'hui</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-[#d4af37]/10">
                <div className="text-2xl font-bold text-[#d4af37]">1,2K</div>
                <div className="text-[10px] text-[#a89b82] uppercase">Visites</div>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#d4af37]/10">
                <div className="text-2xl font-bold text-[#e8e1d3]">3</div>
                <div className="text-[10px] text-[#a89b82] uppercase">Opportunités</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-[#e74c3c]">1</div>
                <div className="text-[10px] text-[#a89b82] uppercase">Anomalies</div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1c1813] border border-[#d4af37]/20 rounded-xl p-5">
            <h3 className="font-semibold text-[#e8e1d3] mb-2 flex items-center gap-2">
              <span className="text-[#d4af37]">💬</span> AI Copilot
            </h3>
            <p className="text-sm text-[#a89b82] mb-4">Posez une question sur vos données (Ex: "Pourquoi les ventes ont baissé cette semaine ?")</p>
            <div className="relative">
              <input type="text" placeholder="Posez votre question..." className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-sm rounded-md pl-4 pr-10 py-3 focus:outline-none focus:border-[#d4af37]" />
              <button className="absolute right-2 top-2 p-1 text-[#d4af37] hover:text-[#e8e1d3]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Recommendations */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-serif text-[#e8e1d3]">Recommandations du Système</h2>
          
          {!isOppHandled ? (
            <RecommendationCard 
              recommendationId={oppId}
              type="OPPORTUNITY"
              title="Réactivation du Segment Oud"
              customerName={customerName}
              orderCount={orderCount}
              confidence={confidence}
              message={message}
            />
          ) : (
            <div className="bg-[#14120f] border border-[#d4af37]/10 p-6 rounded-xl text-center text-[#a89b82]">
              L'opportunité de réactivation a été traitée avec succès.
            </div>
          )}

        </div>
      </div>
    </AdminPageShell>
  );
}
