import analytics from "@react-native-firebase/analytics";

export const useAnalytics = () => {
  const logAnalyticsEvent = async (eventName: string, params?: object) => {
    try {
      await analytics().logEvent(eventName, params);
    } catch (error) {}
  };

  return { logAnalyticsEvent };
};
