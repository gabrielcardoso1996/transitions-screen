import React, { type ReactNode, createContext, useContext, useState } from 'react';

// Defina o tipo para o array
type ArrayContextType = {
  food: string;
  setFood: React.Dispatch<React.SetStateAction<string>>;
  dayWeek: string;
  setDayWeek: React.Dispatch<React.SetStateAction<string>>;
};

// Crie o contexto
const ArrayContext = createContext<ArrayContextType | undefined>(undefined);

interface IArrayProvider {
  children: ReactNode;
}

// Crie um provedor para o contexto
export const ArrayProvider = ({ children }: IArrayProvider) => {
  const [food, setFood] = useState<string>('');
  const [dayWeek, setDayWeek] = useState<string>('');

  return (
    <ArrayContext.Provider value={{ food, setFood, dayWeek, setDayWeek }}>
      {children}
    </ArrayContext.Provider>
  );
};

// Criar um hook para facilitar o uso do contexto
export const useArrayContext = (): ArrayContextType => {
  const context = useContext(ArrayContext);
  if (!context) {
    throw new Error('useArrayContext deve ser usado dentro de um ArrayProvider');
  }
  return context;
};