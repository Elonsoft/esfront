import { useEffect, useState } from 'react';

/**
 * The hook that that tracks user's geographic location.
 * @param options An optional object that provides configuration options for the location watch.
 * @returns Current position or position error and loading state.
 */
export const useGeolocation = (options?: PositionOptions) => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onSuccess = (event: GeolocationPosition) => {
      setPosition(event);
      setLoading(false);
    };

    const onError = (error: GeolocationPositionError) => {
      setError(error);
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    const id = navigator.geolocation.watchPosition(onSuccess, onError, options);

    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, []);

  return { position, error, loading };
};
