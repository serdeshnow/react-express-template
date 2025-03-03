import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { env } from '@shared/lib/env.ts';

export interface Tech {
  id: number;
  name: string;
  img: string;
}

export const useTechnologies = () => {
  const [techs, setTechs] = useState<Tech[]>();

  const fetchTechnologies = useCallback(async () => {
    try {
      const response = await axios.get(`${env.API_URL}/items`, {
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
