import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    Monitor,
    MessageCircle,
    LayoutGrid,
    FileSpreadsheet,
    ShoppingCart,
    ShieldCheck
} from 'lucide-react';

const Integration = () => {
    const { t } = useTranslation();

    const integrations = [
        { id: 1, key: 'int_meta', icon: <Monitor className="w-6 h-6 text-[#1877F2]" /> },
        { id: 2, key: 'int_tiktok', icon: <LayoutGrid className="w-6 h-6 text-black dark:text-white" /> },
        { id: 3, key: 'int_sheets', icon: <FileSpreadsheet className="w-6 h-6 text-[#0F9D58]" /> },
        { id: 4, key: 'int_whatsapp', icon: <MessageCircle className="w-6 h-6 text-[#25D366]" /> },
        { id: 5, key: 'int_risecart', icon: <img src='/ecosystem/risecart.jpg' className=" rounded-lg object-cover" alt="RiseCart" /> },
        { id: 6, key: 'int_riseconfirm', icon: <img src='/ecosystem/RiseConfirm.jpg' className=" rounded-lg object-cover" alt="RiseConfirm" /> }
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative" id="integrations">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 animate-slide-up">
                        {t('int_title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full animate-slide-up" style={{ animationDelay: '0.2s' }} />
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-8 xs:p-12 rounded-[48px] border border-slate-100 dark:border-white/5 shadow-2xl relative overflow-hidden animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                            {integrations.map((int, index) => (
                                <div 
                                    key={int.id}
                                    className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-xl transition-all group animate-scale-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                        {int.icon}
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">
                                        {t(int.key)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-center items-center gap-4">
                            <div className="flex -space-x-2">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                        +
                                    </div>
                                ))}
                            </div>
                            <span className="text-xs font-bold text-slate-400">{t('int_more')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integration;
