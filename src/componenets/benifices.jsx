import React from 'react';
import { useTranslation } from 'react-i18next';
import { Package, ShoppingCart, Share2, MapPin, Truck, Calendar } from 'lucide-react';

const Benifices = () => {
    const { t } = useTranslation();

    const cards = [
        { id: 1, title: t('benif_1'), icon: <Package className="w-6 h-6" />, delay: '0.1s', color: 'blue' },
        { id: 2, title: t('benif_2'), icon: <ShoppingCart className="w-6 h-6" />, delay: '0.2s', color: 'indigo' },
        { id: 3, title: t('benif_3'), icon: <Share2 className="w-6 h-6" />, delay: '0.3s', color: 'purple' },
        { id: 4, title: t('benif_4'), icon: <MapPin className="w-6 h-6" />, delay: '0.4s', color: 'emerald' },
        { id: 5, title: t('benif_5'), icon: <Truck className="w-6 h-6" />, delay: '0.5s', color: 'amber' },
        { id: 6, title: t('benif_6'), icon: <Calendar className="w-6 h-6" />, delay: '0.6s', color: 'rose' }
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative" id="features">
            {/* Background Decorative Blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 
                        className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight animate-slide-up"
                        dangerouslySetInnerHTML={{ __html: t('benif_title') }}
                    />
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full animate-slide-up" style={{ animationDelay: '0.2s' }} />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <div 
                            key={card.id}
                            className="group relative bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[32px] border border-slate-100 dark:border-white/5 transition-all duration-500 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 animate-slide-up"
                            style={{ animationDelay: card.delay }}
                        >
                            {/* Accent Background */}
                            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px] pointer-events-none`} />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className={`mb-6 w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-black/50 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                    {card.title}
                                </h3>
                                
                                {/* Decorative Dots */}
                                <div className="mt-6 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benifices;
