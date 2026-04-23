import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, TrendingDown, TrendingUp, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const CasReal = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative" id="demo">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 animate-slide-up">
                        {t('cas_title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full animate-slide-up" style={{ animationDelay: '0.2s' }} />
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch relative">
                    {/* Versus Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-800 shadow-xl items-center justify-center font-black text-slate-300 dark:text-slate-600">
                        VS
                    </div>

                    {/* Product A - The Trap */}
                    <div className="group relative bg-slate-50 dark:bg-slate-900/40 p-8 xs:p-12 rounded-[40px] border border-slate-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl animate-slide-up">
                        <div className="flex items-center justify-between mb-8">
                            <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 shadow-inner">
                                <ShoppingBag size={28} />
                            </div>
                            <span className="px-4 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2">
                                <TrendingDown size={14} />
                                {t('cas_prod_a_title')}
                            </span>
                        </div>
                        
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                                {t('cas_prod_a_desc')}
                            </h3>
                            <div className="flex items-start gap-3 p-4 bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-100/50 dark:border-red-900/20">
                                <XCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                    L'illusion du volume cache un gouffre financier.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Product B - The Winner */}
                    <div className="group relative bg-primary/5 dark:bg-primary/10 p-8 xs:p-12 rounded-[40px] border-2 border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center justify-between mb-8">
                            <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                                <TrendingUp size={28} />
                            </div>
                            <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2">
                                <TrendingUp size={14} />
                                {t('cas_prod_b_title')}
                            </span>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                                {t('cas_prod_b_desc')}
                            </h3>
                            <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-2xl border border-primary/20">
                                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                                <p className="text-sm font-black text-primary">
                                    Optimisation maximale de la rentabilité.
                                </p>
                            </div>
                        </div>

                        {/* Recommendation Badge */}
                        <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-2xl shadow-lg shadow-emerald-500/30 rotate-12 animate-bounce-subtle">
                            <CheckCircle2 size={24} />
                        </div>
                    </div>
                </div>

                {/* Conclusion Banner */}
                <div className="mt-16 max-w-2xl mx-auto bg-slate-50 dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-white/5 shadow-2xl animate-slide-up flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative" style={{ animationDelay: '0.4s' }}>
                    <div className="absolute top-0 right-0 w-32 h-full bg-primary skew-x-12 translate-x-1/2 opacity-20 pointer-events-none" />
                    
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                            <ArrowRight size={24} className="rtl:rotate-180" />
                        </div>
                        <p className="text-lg font-black text-slate-900 dark:text-white">
                            {t('cas_conclusion')}
                        </p>
                    </div>

                    <button className="relative z-10 px-8 py-3 bg-primary text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 whitespace-nowrap">
                        {t('cta_trial')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CasReal;
