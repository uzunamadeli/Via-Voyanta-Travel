import React, { useState } from 'react';
import { ServiceType, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, language }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Info, 2: Payment, 3: Success
  const [loading, setLoading] = useState(false);
  const t = TRANSLATIONS[language];

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div 
            className="fixed inset-0 bg-blue-950/80 backdrop-blur-sm transition-opacity" 
            aria-hidden="true"
            onClick={resetAndClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="relative inline-block align-bottom bg-white dark:bg-slate-900 rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-slate-200 dark:border-slate-800">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 px-6 py-4 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-bold text-white flex items-center gap-2">
              {step === 1 && t.modal.step1}
              {step === 2 && t.modal.step2}
              {step === 3 && t.modal.step3}
            </h3>
            <button onClick={resetAndClose} className="text-white/70 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="px-6 py-6">
            {/* Steps Indicator */}
            {step !== 3 && (
                <div className="flex items-center justify-center mb-8">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
                    <div className={`w-16 h-1 ${step >= 2 ? 'bg-sky-500' : 'bg-slate-200'}`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
                </div>
            )}

            {/* STEP 1: Personal Info */}
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.modal.name}</label>
                        <input required type="text" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none" placeholder={t.modal.name} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.modal.surname}</label>
                        <input required type="text" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none" placeholder={t.modal.surname} />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.modal.email}</label>
                    <input required type="email" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none" placeholder="ornek@email.com" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.modal.phone}</label>
                    <input required type="tel" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none" placeholder="(5XX) XXX XX XX" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.modal.serviceType}</label>
                        <select className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none">
                            <option value={ServiceType.HOTEL}>{t.services.card.types.HOTEL}</option>
                            <option value={ServiceType.TOUR}>{t.services.card.types.TOUR}</option>
                            <option value={ServiceType.HONEYMOON}>{t.services.card.types.HONEYMOON}</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.modal.personCount}</label>
                        <input required type="number" min="1" defaultValue="2" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none" />
                    </div>
                </div>

                <div className="pt-4">
                    <button type="submit" className="w-full bg-blue-950 dark:bg-sky-600 text-white py-3 rounded-xl font-bold hover:bg-sky-600 dark:hover:bg-sky-500 transition-colors shadow-lg">
                        {t.modal.nextBtn}
                    </button>
                </div>
              </form>
            )}

            {/* STEP 2: Payment */}
            {step === 2 && (
               <form onSubmit={handlePayment} className="space-y-6 animate-fade-in">
                  
                  {/* Credit Card Visualization */}
                  <div className="relative h-48 w-full bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-6 text-white shadow-xl overflow-hidden group">
                      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl"></div>
                      
                      <div className="relative z-10 flex flex-col justify-between h-full">
                          <div className="flex justify-between items-start">
                              <span className="text-xs font-mono opacity-70">BANK NAME</span>
                              <svg className="h-8 w-12" viewBox="0 0 48 32" fill="none">
                                  <circle cx="14" cy="16" r="10" fill="#EB001B" fillOpacity="0.8"/>
                                  <circle cx="34" cy="16" r="10" fill="#F79E1B" fillOpacity="0.8"/>
                                  <path d="M24 16C24 11.5 26.5 7.5 30 5.5C27.5 9 26 12.5 26 16C26 19.5 27.5 23 30 26.5C26.5 24.5 24 20.5 24 16Z" fill="#FF5F00"/>
                              </svg>
                          </div>
                          <div className="font-mono text-xl tracking-widest mt-4">**** **** **** 4242</div>
                          <div className="flex justify-between items-end mt-4">
                              <div>
                                  <div className="text-[10px] opacity-70 uppercase">Card Holder</div>
                                  <div className="font-medium tracking-wide">AD SOYAD</div>
                              </div>
                              <div>
                                  <div className="text-[10px] opacity-70 uppercase">Expires</div>
                                  <div className="font-mono">12/25</div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="space-y-4">
                     <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.modal.cardNum}</label>
                        <input required type="text" maxLength={19} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none font-mono" placeholder="0000 0000 0000 0000" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.modal.expiry}</label>
                            <input required type="text" maxLength={5} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none font-mono" placeholder="MM/YY" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.modal.cvv}</label>
                            <input required type="text" maxLength={3} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none font-mono" placeholder="123" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.modal.cardHolder}</label>
                        <input required type="text" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none" placeholder="Kart Üzerindeki İsim" />
                     </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                     <button type="button" onClick={() => setStep(1)} className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 py-3 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        {t.modal.backBtn}
                     </button>
                     <button type="submit" disabled={loading} className="flex-[2] bg-sky-500 text-white py-3 rounded-xl font-bold hover:bg-sky-400 transition-all shadow-lg flex items-center justify-center gap-2">
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {t.modal.processing}
                            </>
                        ) : t.modal.payBtn}
                     </button>
                  </div>
               </form>
            )}

            {/* STEP 3: Success */}
            {step === 3 && (
                <div className="text-center py-8 animate-fade-in-up">
                    <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-blue-950 dark:text-white mb-2">{t.modal.successTitle}</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        {t.modal.successDesc}
                    </p>
                    <button onClick={resetAndClose} className="bg-blue-950 dark:bg-sky-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-sky-600 dark:hover:bg-sky-500 transition-all shadow-lg w-full">
                        {t.modal.closeBtn}
                    </button>
                </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;