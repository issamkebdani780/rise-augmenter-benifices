import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Star } from 'lucide-react';

const Tarifs = () => {
    const { t } = useTranslation();

    const plans = [
        {
            id: 'starter',
            name: t('tarifs_plan1_title'),
            desc: t('tarifs_plan1_desc'),
            price: '29€',
            features: [
                t('tarifs_f1_1'),
                t('tarifs_f1_2'),
                t('tarifs_f1_3')
            ],
            highlighted: false
        },
        {
            id: 'growth',
            name: t('tarifs_plan2_title'),
            desc: t('tarifs_plan2_desc'),
            price: '79€',
            features: [
                t('tarifs_f2_1'),
                t('tarifs_f2_2'),
                t('tarifs_f2_3'),
                t('tarifs_f2_4')
            ],
            highlighted: true
        },
        {
            id: 'empire',
            name: t('tarifs_plan3_title'),
            desc: t('tarifs_plan3_desc'),
            price: '199€',
            features: [
                t('tarifs_f3_1'),
                t('tarifs_f3_2'),
                t('tarifs_f3_3'),
                t('tarifs_f3_4')
            ],
            highlighted: false
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative" id="pricing">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 animate-slide-up">
                        {t('tarifs_title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full animate-slide-up" style={{ animationDelay: '0.2s' }} />
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div 
                            key={plan.id}
                            className={`relative p-8 rounded-[40px] border transition-all duration-500 hover:shadow-2xl animate-slide-up ${
                                plan.highlighted 
                                    ? 'bg-slate-900 dark:bg-slate-800 border-slate-800 dark:border-slate-700 shadow-xl shadow-primary/20 scale-105 z-10' 
                                    : 'bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-white/5 shadow-lg'
                            }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1">
                                    <Star size={14} className="fill-white" />
                                    {plan.desc}
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className={`text-2xl font-black mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                    {plan.name}
                                </h3>
                                {!plan.highlighted && (
                                    <p className="text-sm font-bold text-slate-500">{plan.desc}</p>
                                )}
                                <div className="mt-6 flex items-baseline justify-center gap-1">
                                    <span className={`text-5xl font-black tabular-nums ${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-sm font-bold ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                                        /mois
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={20} className={plan.highlighted ? 'text-primary' : 'text-emerald-500'} />
                                        <span className={`text-sm font-medium ${plan.highlighted ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button 
                                className={`w-full py-4 rounded-2xl font-black transition-all ${
                                    plan.highlighted 
                                        ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30' 
                                        : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-primary/50'
                                }`}
                            >
                                {t('tarifs_cta')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tarifs;
