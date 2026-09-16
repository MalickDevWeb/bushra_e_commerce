"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createAdminAction } from "../actions/staffActions";
import { useState } from "react";

type State = { error?: string; success?: boolean } | null;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
        pending ? "bg-[#d4af37]/40 cursor-not-allowed text-white" : "bg-[#d4af37] hover:bg-[#c29b2b] text-[#0a0a0a]"
      }`}
    >
      {pending ? "Création en cours..." : "Créer le compte"}
    </button>
  );
}

async function wrappedCreate(_prev: State, formData: FormData): Promise<State> {
  return createAdminAction(formData);
}

export function CreateAdminModal({ onClose }: { onClose: () => void }) {
  const [state, formAction] = useActionState<State, FormData>(wrappedCreate, null);

  if (state?.success) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <div className="bg-[#14120f] border border-[#d4af37]/30 rounded-2xl p-8 w-full max-w-md text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-green-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#e8e1d3] mb-2">Compte créé avec succès !</h3>
          <p className="text-sm text-[#a89b82] mb-6">Le nouveau Admin peut maintenant se connecter.</p>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#d4af37] text-[#0a0a0a] rounded-xl font-semibold text-sm hover:bg-[#c29b2b] transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#a89b82] hover:text-[#e8e1d3] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-lg font-bold text-[#e8e1d3] mb-1">Créer un compte Admin</h2>
        <p className="text-xs text-[#a89b82] mb-6">Ce membre aura accès au tableau de bord (sans les sections Super Admin).</p>

        {state?.error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {state.error}
          </div>
        )}

        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#a89b82] uppercase tracking-wider">Nom complet</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Mamadou Diop"
              className="bg-[#0a0a0a] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82]/40 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#a89b82] uppercase tracking-wider">Email professionnel</label>
            <input
              name="email"
              type="email"
              required
              placeholder="mamadou@bushra.sn"
              className="bg-[#0a0a0a] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82]/40 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#a89b82] uppercase tracking-wider">Mot de passe provisoire</label>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              placeholder="Minimum 8 caractères"
              className="bg-[#0a0a0a] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82]/40 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>

          <div className="mt-2">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
