// hooks/useDestination.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { topDestinations } from '../assets/assets';

const useDestination = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulation API 
    const fetchDestination = async () => {
      try {
        setLoading(true);
        // In real app: const response = await api.get(`/destinations/${id}`);
        const found = topDestinations.find(dest => dest.id === parseInt(id));
        
        if (!found) {
          throw new Error('Destination not found');
        }
        
        setDestination(found);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  return { destination, loading, error };
};

export default useDestination;