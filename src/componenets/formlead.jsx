import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, ArrowRight, ShieldCheck } from 'lucide-react';

const FormLead = () => {
    const { t } = useTranslation();
    const [focused, setFocused] = useState(null);

    const hooks = ['form_hook1', 'form_hook2', 'form_hook3'];

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative" id="contact">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side - Hooks & Value Proposition */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 animate-slide-up">
                                {t('form_title_1')}<span className="text-primary italic">{t('form_title_2')}</span>
                            </h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                {t('form_subtitle')}
                            </p>
                        </div>

                        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            {hooks.map((hook, index) => (
                                <div key={index} className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                                        <ArrowRight size={16} className="rtl:rotate-180" />
                                    </div>
                                    <p className="text-lg font-bold text-slate-800 dark:text-slate-200">
                                        {t(hook)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[40px] border border-slate-100 dark:border-white/5 shadow-2xl shadow-primary/5 relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        
                        <form className="space-y-5">
                            {/* Nom & Tel */}
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('form_name')} *</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white"
                                        placeholder={t('form_ph_name')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('form_phone')} *</label>
                                    <input 
                                        type="tel" 
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white"
                                        placeholder={t('form_ph_phone')}
                                    />
                                </div>
                            </div>

                            {/* Pays & Commandes */}
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('form_country')} *</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white"
                                        placeholder={t('form_ph_country')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('form_orders')} *</label>
                                    <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white appearance-none cursor-pointer">
                                        <option value="">{t('form_select')}</option>
                                        <option value="1">{t('form_opt_1')}</option>
                                        <option value="2">{t('form_opt_2')}</option>
                                        <option value="3">{t('form_opt_3')}</option>
                                        <option value="4">{t('form_opt_4')}</option>
                                    </select>
                                </div>
                            </div>

                            {/* Revenue */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('form_revenue')}</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white"
                                    placeholder={t('form_ph_revenue')}
                                />
                            </div>

                            {/* Problem */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('form_problem')} *</label>
                                <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white appearance-none cursor-pointer">
                                    <option value="">{t('form_select')}</option>
                                    <option value="pub">{t('form_prob_pub')}</option>
                                    <option value="marge">{t('form_prob_marge')}</option>
                                    <option value="retours">{t('form_prob_retours')}</option>
                                    <option value="orga">{t('form_prob_orga')}</option>
                                </select>
                            </div>

                            {/* Submit */}
                            <button 
                                type="button" 
                                className="w-full mt-8 bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30 hover:-translate-y-1"
                            >
                                <Send size={20} />
                                {t('form_btn')}
                            </button>

                            <div className="flex items-center justify-center gap-2 mt-4 text-xs font-bold text-slate-400">
                                <ShieldCheck size={14} />
                                {t('form_secure')}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormLead;
