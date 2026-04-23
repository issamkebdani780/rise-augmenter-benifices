import React from 'react';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';

const Temoignages = () => {
    const { t } = useTranslation();

    const testimonials = [
        { id: 1, key: 'tem_1', author: 'E-commerçant COD', revenue: '+50k€/mois' },
        { id: 2, key: 'tem_2', author: 'Marque D2C', revenue: '+100k€/mois' },
        { id: 3, key: 'tem_3', author: 'Dropshipper', revenue: '+30k€/mois' }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500 relative overflow-hidden" id="testimonials">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 animate-slide-up">
                        {t('tem_title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full animate-slide-up" style={{ animationDelay: '0.2s' }} />
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((tem, index) => (
                        <div 
                            key={tem.id}
                            className="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-black/20 hover:-translate-y-2 transition-all duration-300 animate-slide-up relative group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                            
                            <p className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-8 relative z-10">
                                "{t(tem.key)}"
                            </p>
                            
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-primary font-black text-xl">
                                    {tem.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">{tem.author}</p>
                                    <p className="text-sm font-bold text-emerald-500">{tem.revenue}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Temoignages;
