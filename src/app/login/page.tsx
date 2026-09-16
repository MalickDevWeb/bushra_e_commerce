import { LoginForm } from "@/modules/auth/ui/LoginForm";

export const metadata = {
  title: "Connexion | BUSHRA Administration",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-1/4 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/60 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#d4af37]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-4 7.4-7 8 2.4 4.4 5 6 7 9 2-3 4.6-4.6 7-9-3-.6-5.8-2.6-7-8z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-[#a89b82] uppercase tracking-[0.3em]">Espace Administration Sécurisé</p>
        </div>

        <LoginForm />

        <p className="text-center text-xs text-[#a89b82]/50 mt-6">
          © {new Date().getFullYear()} BUSHRA — Thiouraye, Dakar
        </p>
      </div>
    </div>
  );
}
