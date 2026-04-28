import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
    LayoutDashboard, 
    Package, 
    Share2, 
    MapPin, 
    ShoppingCart, 
    Clock, 
    Plus, 
    Trash2, 
    TrendingUp, 
    TrendingDown,
    Activity
} from 'lucide-react';
import MapUI from './Mapui';

const Dashboard = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('prod');

    // Dashboard Initial Data (storing translation keys to allow dynamic language switching)
    const [data, setData] = useState({
        prod: [
            { id: 1, key: 'dash_top_profit', value: '42,500 DA', trend: 'up' },
            { id: 2, key: 'dash_flops', value: '-12,300 DA', trend: 'down' },
            { id: 3, key: 'dash_stock_rot', value: '85%', trend: 'up' }
        ],
        ads: [
            { id: 4, key: 'dash_meta', value: 'ROAS 4.2', trend: 'up' },
            { id: 5, key: 'dash_tiktok', value: 'ROAS 3.8', trend: 'up' },
            { id: 6, key: 'dash_cpa', value: '450 DA', trend: 'down' },
            { id: 7, key: 'dash_real_margin', value: '28%', trend: 'up' }
        ],
        geo: [
            { id: 8, key: 'dash_winning_cities', value: 'Alger, Oran', trend: 'up' },
            { id: 9, key: 'dash_zones_cut', value: 'Adrar, Tindouf', trend: 'down' }
        ],
        orders: [
            { id: 10, key: 'dash_avg_basket', value: '3,200 DA', trend: 'up' },
            { id: 11, key: 'dash_upsell', value: '18%', trend: 'up' },
            { id: 12, key: 'dash_repeat', value: '12%', trend: 'up' }
        ],
        time: [
            { id: 13, key: 'dash_day', value: 'Mardi (Max)', trend: 'up' },
            { id: 14, key: 'dash_week', value: 'Sem 14', trend: 'up' },
            { id: 15, key: 'dash_month', value: 'Avril', trend: 'up' },
            { id: 16, key: 'dash_season', value: 'Ramadan', trend: 'up' }
        ]
    });

    const tabs = [
        { id: 'prod', key: 'dash_tab_prod', icon: <Package size={18} /> },
        { id: 'ads', key: 'dash_tab_ads', icon: <Share2 size={18} /> },
        { id: 'geo', key: 'dash_tab_geo', icon: <MapPin size={18} /> },
        { id: 'orders', key: 'dash_tab_orders', icon: <ShoppingCart size={18} /> },
        { id: 'time', key: 'dash_tab_time', icon: <Clock size={18} /> }
    ];

    const addItem = (tab) => {
        const newItem = {
            id: Date.now(),
            label: 'Nouveau point', // This will be hardcoded as it's user input, but could be handled differently
            value: '0',
            trend: 'up'
        };
        setData(prev => ({
            ...prev,
            [tab]: [...prev[tab], newItem]
        }));
    };

    const deleteItem = (tab, id) => {
        setData(prev => ({
            ...prev,
            [tab]: prev[tab].filter(item => item.id !== id)
        }));
    };

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500 overflow-hidden relative" id="dashboard">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid-slate-100 dark:bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />

           
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-full mb-6 animate-slide-up">
                        <LayoutDashboard size={16} />
                        <span className="text-xs font-black uppercase tracking-widest">{t('dash_interactive')}</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 animate-slide-up">
                        {t('dash_title')}
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Dashboard Visual Area */}
                    <div className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-white/5 shadow-2xl overflow-hidden animate-slide-up flex flex-col md:flex-row min-h-[500px]" style={{ animationDelay: '0.2s' }}>
                        {/* Sidebar */}
                        <div className="md:w-64 bg-slate-50 dark:bg-slate-800/30 border-r border-slate-100 dark:border-slate-800 p-6 flex flex-col shrink-0">
                            <div className="flex gap-1.5 mb-10 pl-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                            </div>
                            
                            <div className="space-y-2">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                                            activeTab === tab.id 
                                                ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105' 
                                                : 'text-slate-500 hover:bg-white dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        {tab.icon}
                                        <span>{t(tab.key)}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 flex flex-col bg-white dark:bg-slate-900">
                            {/* Mockup Header */}
                            <div className="h-20 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        {tabs.find(t => t.id === activeTab)?.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-black text-slate-900 dark:text-white text-lg">{t(`dash_tab_${activeTab}`)}</h3>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Live</span>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => addItem(activeTab)}
                                    className="flex items-center gap-2 px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-black rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-95 transition-all shadow-lg"
                                >
                                    <Plus size={14} />
                                    {t('dash_add')}
                                </button>
                            </div>

                        {/* Content Area */}
                        <div className="p-8 xs:p-12">
                            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                                {activeTab === 'geo' ? (
                                    <div className="col-span-full">
                                        <MapUI />
                                    </div>
                                ) : (
                                    data[activeTab].map((item, index) => (
                                        <div 
                                            key={item.id}
                                            className="group relative flex items-center justify-between p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl animate-scale-in"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6 ${
                                                    item.trend === 'up' 
                                                        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500' 
                                                        : 'bg-red-50 dark:bg-red-900/20 text-red-500'
                                                }`}>
                                                    {item.trend === 'up' ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                                                        {item.key ? t(item.key) : item.label}
                                                    </p>
                                                    <h3 className="text-xl font-black text-slate-900 dark:text-white tabular-nums">{item.value}</h3>
                                                </div>
                                            </div>
                                            
                                            <button 
                                                onClick={() => deleteItem(activeTab, item.id)}
                                                className="opacity-0 group-hover:opacity-100 p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))
                                )}

                                {data[activeTab].length === 0 && (
                                    <div className="col-span-full py-20 text-center flex flex-col items-center gap-4">
                                        <Activity size={48} className="text-slate-200 dark:text-slate-800 animate-pulse" />
                                        <p className="text-slate-400 font-bold tracking-tight">{t('dash_no_data')}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                    <div className="mt-12 flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {t('dash_instant')}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {t('dash_secure')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
