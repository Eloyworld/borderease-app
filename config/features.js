// This file controls which features are active in the app
export const FEATURE_FLAGS = {
  // Core features (MVP - Minimum Viable Product)
  BORDER_INFO: true,        // Show border information
  TRIP_PLANNING: true,      // Allow trip planning
  
  // Future features (currently turned off)
  GPS_NAVIGATION: false,    // GPS navigation to borders
  NEARBY_SERVICES: false,   // Find services near borders
  EMERGENCY_ASSIST: false,  // Emergency assistance
  OFFLINE_MODE: false,      // Work without internet
  COMMUNITY_UPDATES: false, // User-reported border conditions
  
  // Premium features
  REAL_TIME_ALERTS: true,   // Real-time border alerts
  MULTI_BORDER_PLANNING: true, // Plan routes with multiple borders
};