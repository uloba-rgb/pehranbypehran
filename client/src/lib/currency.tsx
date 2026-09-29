import { useState, useEffect } from 'react';

type Currency = 'USD' | 'PKR' | 'AED' | 'GBP' | 'EUR';

interface ExchangeRate {
  rate: number;
  symbol: string;
  locale: string;
}

const RATES: Record<Currency, ExchangeRate> = {
  USD: { rate: 1, symbol: '$', locale: 'en-US' },
  PKR: { rate: 278, symbol: 'Rs.', locale: 'ur-PK' },
  AED: { rate: 3.67, symbol: 'AED', locale: 'en-AE' },
  GBP: { rate: 0.79, symbol: '£', locale: 'en-GB' },
  EUR: { rate: 0.92, symbol: '€', locale: 'de-DE' }
};

// Helper to extract numeric value from string price (e.g. "$120" -> 120)
export const parsePrice = (priceString: string): number => {
  return parseFloat(priceString.replace(/[^0-9.]/g, ''));
};

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would call an IP geolocation service
    // For this prototype, we'll try to use ipapi.co which is free for limited use
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        switch (data.country_code) {
          case 'PK':
            setCurrency('PKR');
            break;
          case 'AE':
            setCurrency('AED');
            break;
          case 'GB':
            setCurrency('GBP');
            break;
          // Add more mappings as needed
          default:
            // Check for Eurozone (simplified)
            if (['DE', 'FR', 'IT', 'ES', 'NL'].includes(data.country_code)) {
              setCurrency('EUR');
            } else {
              setCurrency('USD');
            }
        }
      } catch (error) {
        console.error('Failed to detect location:', error);
        setCurrency('USD'); // Fallback
      } finally {
        setLoading(false);
      }
    };

    detectLocation();
  }, []);

  const formatPrice = (basePriceUSD: string | number) => {
    const value = typeof basePriceUSD === 'string' ? parsePrice(basePriceUSD) : basePriceUSD;
    const { rate, symbol, locale } = RATES[currency];
    
    const converted = value * rate;
    
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(converted);
  };

  return { currency, formatPrice, loading };
}
