
export interface BorderStatusUpdate {
  fromCountry: string;
  toCountry: string;
  crossingId: string;
  status: 'open' | 'closed' | 'restricted';
  waitTime?: number;
  lastUpdated: string;
  source: string;
}

export interface BorderStatusAPI {
  lastUpdated: string;
  updates: BorderStatusUpdate[];
}

class BorderAPIService {
  private readonly GIST_ID = 'YOUR_GIST_ID_HERE';
  private readonly FALLBACK_KEY = 'borderStatus';
  private readonly CACHE_DURATION = 30 * 60 * 1000;

  private lastFetch: number = 0;
  private cachedData: BorderStatusAPI | null = null;

  async getBorderStatusUpdates(): Promise<BorderStatusAPI | null> {
    if (this.cachedData && Date.now() - this.lastFetch < this.CACHE_DURATION) {
      return this.cachedData;
    }

    // For now, use local storage fallback since JSONBin isn't working
    return this.getFallbackData();
  }

  private getFallbackData(): BorderStatusAPI | null {
    try {
      const stored = localStorage.getItem(this.FALLBACK_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
      // Return empty data if nothing stored
      return { lastUpdated: new Date().toISOString(), updates: [] };
    } catch (error) {
      console.warn('Fallback data unavailable');
      return { lastUpdated: new Date().toISOString(), updates: [] };
    }
  }

  async updateBorderStatus(update: BorderStatusUpdate): Promise<boolean> {
    try {
      const currentData = await this.getBorderStatusUpdates() || { lastUpdated: new Date().toISOString(), updates: [] };
      
      const filteredUpdates = currentData.updates.filter(
        u => !(u.fromCountry === update.fromCountry && u.toCountry === update.toCountry && u.crossingId === update.crossingId)
      );

      const newData: BorderStatusAPI = {
        lastUpdated: new Date().toISOString(),
        updates: [...filteredUpdates, update]
      };

      // Store locally for now
      localStorage.setItem(this.FALLBACK_KEY, JSON.stringify(newData));
      this.cachedData = newData;
      
      return true;
    } catch (error) {
      console.error('Failed to update border status:', error);
      return false;
    }
  }

  getStatusForCrossing(fromCountry: string, toCountry: string, crossingId: string): BorderStatusUpdate | null {
    if (!this.cachedData) return null;
    
    return this.cachedData.updates.find(
      update => update.fromCountry === fromCountry && 
               update.toCountry === toCountry && 
               update.crossingId === crossingId
    ) || null;
  }
}

export const borderApi = new BorderAPIService();