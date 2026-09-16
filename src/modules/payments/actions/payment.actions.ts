"use server";

import { requireAdmin } from "@/lib/auth";
import { paymentRepository } from "@/modules/payments/repositories/payment.repository";
import { paymentService } from "@/modules/payments/services/payment.service";

export async function confirmPayment(paymentId: string, transactionId: string) {
  return paymentService.confirm(paymentId, transactionId);
}

export async function failPayment(paymentId: string) {
  return paymentService.fail(paymentId);
}

export async function getPayments() {
  if (!(await requireAdmin())) return [];
  return paymentRepository.list();
}