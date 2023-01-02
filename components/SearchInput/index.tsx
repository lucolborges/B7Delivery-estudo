import { useState } from 'react';
import sytles from './styles.module.css';

type Props = {
  maincolor: string;
  onSearch: (searchValue: string) => void
}
const SearchInput = ({ maincolor, onSearch }: Props) => {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.code === 'Enter') return onSearch(searchValue)
  };

  return (
    <div 
      className={sytles.container}
      style={{borderColor: focused ? maincolor : '#ffffff'}}
    >
      <div 
        className={sytles.button}
        onClick={()=>onSearch(searchValue)}
      ></div>
      <input 
        type="text" 
        className={sytles.input} 
        placeholder="Digite o nome do Produto"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
      />
    </div>
  );
}
 
export default SearchInput;