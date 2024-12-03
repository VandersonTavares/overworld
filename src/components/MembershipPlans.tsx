import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Smart',
    description: 'Acesso a academia local',
    firstMonth: 'R$ 0,00*',
    monthlyPrice: 'R$ 99,90/mês',
    fidelity: 'Sem fidelidade',
    features: ['Área de musculação', 'Área de cardio', 'Aulas de ginástica']
  },
  {
    name: 'Black',
    description: 'Acesso a +1.000 academias',
    firstMonth: 'R$ 0,00*',
    monthlyPrice: 'R$ 119,90/mês',
    fidelity: '12 meses',
    features: ['Área de musculação', 'Área de cardio', 'Aulas de ginástica', 'Acesso a todas as unidades']
  },
  {
    name: 'Premium',
    description: 'Acesso total com benefícios exclusivos',
    firstMonth: 'R$ 0,00*',
    monthlyPrice: 'R$ 149,90/mês',
    fidelity: '12 meses',
    features: ['Todos os benefícios do Black', 'Personal trainer', 'Acesso a área VIP', 'Armário exclusivo']
  }
];

export const MembershipPlans = () => {
  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-center mb-12">Planos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-brand-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-yellow mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400">Primeiro mês</div>
                <div className="text-3xl font-bold text-white">{plan.firstMonth}</div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400">Após primeiro mês</div>
                <div className="text-2xl font-bold text-white">{plan.monthlyPrice}</div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400">Fidelidade</div>
                <div className="text-lg text-white">{plan.fidelity}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-brand-yellow" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn-primary w-full">
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-8">
          * Valor promocional válido apenas para o primeiro mês
        </p>
      </div>
    </section>
  );
};