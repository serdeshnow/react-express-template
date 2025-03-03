import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export interface Tech {
  id: number;
  name: string;
  img: string;
}

export const useTechnologies = () => {
  const [techs, setTechs] = useState<Tech[]>();

  const fetchTechnologies = useCallback(async () => {
    try {
      const response = await axios.get('http://212.193.26.64/api/items', {
        withCredentials: true,
      });
      setTechs(response.data);
    } catch (error) {
      console.error('Error fetching technologies:', error);
    }
  }, []);

  useEffect(() => {
    void fetchTechnologies();

    const interval = setInterval(() => {
      void fetchTechnologies();
    }, 5000);

    return () => clearInterval(interval);
  }, [fetchTechnologies]);

  return {
    techs,
    fetchTechnologies,
  };
};
