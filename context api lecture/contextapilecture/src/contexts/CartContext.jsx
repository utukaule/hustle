import { createContext } from 'react';

export const CreateContext = createContext();

export const CartProviderWrapper = ({ childern }) => {

    <CreateContext.Provider value={0}>{childern}</CreateContext.Provider>

}
