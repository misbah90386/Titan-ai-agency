import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QuoteModal, QuotePackageInfo } from '../components/pricing/QuoteModal';

interface QuoteContextType {
  openQuote: (pkg?: QuotePackageInfo | null) => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePackage, setActivePackage] = useState<QuotePackageInfo | null>(null);

  const openQuote = (pkg?: QuotePackageInfo | null) => {
    setActivePackage(pkg || null);
    setIsOpen(true);
  };

  const closeQuote = () => {
    setIsOpen(false);
    setActivePackage(null);
  };

  return (
    <QuoteContext.Provider value={{ openQuote, closeQuote }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeQuote} initialPackage={activePackage} />
    </QuoteContext.Provider>
  );
};

export const useQuote = (): QuoteContextType => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
