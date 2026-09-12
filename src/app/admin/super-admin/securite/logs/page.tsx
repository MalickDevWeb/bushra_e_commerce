export default function SuperAdminLogsPage() {
  const logs = [
    { time: "12 Sept 2024 - 15:32:10", user: "admin@bushra.sn", action: "Connexion réussie", ip: "197.214.12.34", status: "Succès" },
    { time: "12 Sept 2024 - 14:15:00", user: "Système", action: "Sauvegarde base de données", ip: "localhost", status: "Succès" },
    { time: "12 Sept 2024 - 09:45:22", user: "inconnu", action: "Tentative de connexion échouée", ip: "45.33.22.11", status: "Échec" },
    { time: "11 Sept 2024 - 18:20:05", user: "admin@bushra.sn", action: "Modification Clé API Stripe", ip: "197.214.12.34", status: "Avertissement" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Succès": return "text-[#2ecc71]";
      case "Échec": return "text-[#e74c3c]";
      case "Avertissement": return "text-[#f39c12]";
      default: return "text-[#a89b82]";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Journal d'Activité (Logs)</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Tracez toutes les actions sensibles effectuées sur le système</p>
        </div>
        <button className="px-4 py-2 bg-[#14120f] border border-[#d4af37]/30 text-[#d4af37] rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors">
          Télécharger les logs (CSV)
        </button>
      </div>

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-[12px]">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813] font-sans">
                <th className="py-4 px-5 font-bold uppercase tracking-wider text-[#a89b82]">Horodatage</th>
                <th className="py-4 px-5 font-bold uppercase tracking-wider text-[#a89b82]">Utilisateur</th>
                <th className="py-4 px-5 font-bold uppercase tracking-wider text-[#a89b82]">Action</th>
                <th className="py-4 px-5 font-bold uppercase tracking-wider text-[#a89b82]">Adresse IP</th>
                <th className="py-4 px-5 font-bold uppercase tracking-wider text-[#a89b82]">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {logs.map((log, i) => (
                <tr key={i} className="hover:bg-[#d4af37]/5 transition-colors group">
                  <td className="py-3 px-5 text-[#a89b82]">{log.time}</td>
                  <td className="py-3 px-5 text-[#d4af37]">{log.user}</td>
                  <td className="py-3 px-5 text-[#e8e1d3]">{log.action}</td>
                  <td className="py-3 px-5 text-[#a89b82]">{log.ip}</td>
                  <td className="py-3 px-5">
                    <span className={`font-bold ${getStatusColor(log.status)}`}>
                      [{log.status.toUpperCase()}]
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

