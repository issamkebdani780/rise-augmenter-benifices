import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
    const { t } = useTranslation();
    const [openId, setOpenId] = useState(1);

    const faqs = [
        { id: 1, q: 'faq_q1', a: 'faq_a1' },
        { id: 2, q: 'faq_q2', a: 'faq_a2' },
        { id: 3, q: 'faq_q3', a: 'faq_a3' },
        { id: 4, q: 'faq_q4', a: 'faq_a4' },
        { id: 5, q: 'faq_q5', a: 'faq_a5' },
        { id: 6, q: 'faq_q6', a: 'faq_a6' }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500 relative" id="faq">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 animate-slide-up">
                        {t('faq_title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full animate-slide-up" style={{ animationDelay: '0.2s' }} />
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={faq.id}
                            className={`bg-white dark:bg-slate-900 rounded-3xl border transition-all duration-300 animate-slide-up ${
                                openId === faq.id 
                                    ? 'border-primary/30 shadow-lg shadow-primary/5' 
                                    : 'border-slate-100 dark:border-white/5 hover:border-primary/20'
                            }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left"
                            >
                                <span className={`text-lg font-bold ${openId === faq.id ? 'text-primary' : 'text-slate-800 dark:text-slate-200'}`}>
                                    {t(faq.q)}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                    openId === faq.id ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                                }`}>
                                    {openId === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ${
                                    openId === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="px-8 pb-6 text-slate-500 dark:text-slate-400 font-medium">
                                    {t(faq.a)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
