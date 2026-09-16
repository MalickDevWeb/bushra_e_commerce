"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "../actions/authActions";

type State = { error: string } | null;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-3.5 rounded-full font-medium transition-all ${
        pending
          ? "bg-[#d4af37]/50 text-white cursor-not-allowed"
          : "bg-[#d4af37] hover:bg-[#c29b2b] text-[#0a0a0a]"
      }`}
    >
      {pending ? "Connexion en cours..." : "Se connecter"}
    </button>
  );
}

async function loginFormAction(_prevState: State, formData: FormData): Promise<State> {
  return loginAction(formData);
}

export function LoginForm() {
  const [state, formAction] = useActionState<State, FormData>(loginFormAction, null);

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-3xl bg-[#14120f] border border-[#d4af37]/20 shadow-2xl relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-[#d4af37]/10 blur-[60px] pointer-events-none"></div>

      <div className="text-center mb-10 relative z-10">
        <h1 className="text-3xl font-serif font-bold text-[#d4af37] mb-2">BUSHRA</h1>
        <p className="text-sm text-[#a89b82]">Espace d&apos;administration</p>
      </div>

      <form action={formAction} className="flex flex-col gap-6 relative z-10">
        {state?.error && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center font-medium">
            {state.error}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#e8e1d3]">Adresse email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="admin@bushra.sn"
            className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 rounded-xl px-4 py-3.5 text-[#e8e1d3] placeholder-[#a89b82]/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#e8e1d3]">Mot de passe</label>
          <input
            type="password"
            name="password"
            required
            placeholder="••••••••"
            className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 rounded-xl px-4 py-3.5 text-[#e8e1d3] placeholder-[#a89b82]/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
          />
        </div>

        <div className="mt-4">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
