import { useEffect, useState } from 'react';
import { borderApi, BorderStatusUpdate } from '../services/borderApi';

export function useBorderStatus(fromCountry?: string, toCountry?: string, crossingId?: string) {
  const [status, setStatus] = useState<BorderStatusUpdate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchStatus = async () => {
      try {
        setLoading(true);
        const updates = await borderApi.getBorderStatusUpdates();
        
        if (mounted && updates && fromCountry && toCountry && crossingId) {
          const crossingStatus = borderApi.getStatusForCrossing(fromCountry, toCountry, crossingId);
          setStatus(crossingStatus);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to fetch border status');
          console.error(err);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchStatus();

    return () => { mounted = false; };
  }, [fromCountry, toCountry, crossingId]);

  const updateStatus = async (newStatus: Omit<BorderStatusUpdate, 'lastUpdated' | 'source'>) => {
    try {
      const update: BorderStatusUpdate = {
        ...newStatus,
        lastUpdated: new Date().toISOString(),
        source: 'user' // or 'official', 'news', etc.
      };

      const success = await borderApi.updateBorderStatus(update);
      if (success) {
        setStatus(update);
      }
      return success;
    } catch (err) {
      setError('Failed to update status');
      return false;
    }
  };

  return { status, loading, error, updateStatus };
}